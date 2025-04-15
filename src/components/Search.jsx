"use client";
import { Datepicker, Select, Button, TabItem, Tabs, TextInput, FloatingLabel, Radio, Label } from "flowbite-react";
import { FaTaxi, FaPlane, FaHotel } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { Countries } from "../api";
import { Airport, ArriveLocation } from "../api";
import AirTickets from "./AirTickets";
const Search = () => {
    
    const airport = Airport()
  return (
    <>
        <Tabs aria-label="Full width tabs" variant="fullWidth" className="gap-0">
            <TabItem active title="Air Ticket" className="p-0" icon={FaPlane}>
                <AirTickets />
            </TabItem>
            <TabItem title="Hotels" className="py-0" icon={FaHotel}>
                <div className="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form className="">
                        <div className="grid grid-cols-6 gap-4 grid-rows-2">
                            <div className="col-span-5">
                                <div className="">
                                    <div className="flex flex-col md:flex-row pb-4 mb-0">
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="w-full flex-1 mx-2">
                                                    <div className="my-1 p-1">
                                                        <Select id="airport" required>
                                                            <option>Choose an airport...</option>                                                                        
                                                            {
                                                                airport.map((airportItem) => (
                                                                    <option key={`${airportItem.id}`}>{airportItem.name}</option>
                                                                ))
                                                            }
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="w-full flex-1 mx-2">        
                                                    <div className="my-1 p-1">
                                                        <Datepicker title="Arrival date" language="en-US"/>
                                                    </div>
                                                </div>
                                                <div className="w-full flex-1 mx-2">        
                                                    <div className="my-1 p-1">
                                                        <Datepicker title="Departure date" language="en-US"/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex flex-col md:flex-row pb-4 mb-0">
                                        <div className="w-full flex-1 mx-2">        
                                            <div className="my-1 p-1">
                                                <TextInput id="adults" placeholder="Adults" required />
                                            </div>
                                        </div>
                                        <div className="w-full flex-1 mx-2">        
                                            <div className="my-1 p-1">
                                                <TextInput id="childrens" placeholder="Childrens" required />
                                            </div>
                                        </div>
                                        <div className="w-full flex-1 mx-2">        
                                            <div className="my-1 p-1">
                                                <TextInput id="rooms" placeholder="Rooms" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </TabItem>
            <TabItem title="Attractions" className="py-0" icon={MdAttractions}>
                <div className="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                                <TextInput id="location" placeholder="Where to go?" required />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Start Date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="End date"/>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </TabItem>
            <TabItem title="Taxi" className="py-0" icon={FaTaxi}>
                <div className="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                                <TextInput id="location" type="text" placeholder="Pick-up location (airport, city, station)" required shadow />
                            </div>                            
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Start Date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="time" id="time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                </div>
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Drop-off date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="time" id="time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                                    Search
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </TabItem>
        </Tabs>

        
    </>
  )
}

export default Search