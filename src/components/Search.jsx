"use client";
import { Datepicker, Select, Button, TabItem, Tabs, TextInput } from "flowbite-react";
import { FaTaxi, FaPlane, FaHotel } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { Countries } from "../api";
const Search = () => {
  const countries = Countries();
  return (
    <>
        <Tabs aria-label="Full width tabs" variant="fullWidth" className="gap-0">
            <TabItem active title="Air Ticket" className="p-0" icon={FaPlane}>
                <div class="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form className="">
                        <div className="flex flex-col md:flex-row pb-4 mb-0">
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full flex-1 mx-2">
                                        <div className="my-1 p-1">
                                            <Select id="countries" required>
                                                <option>Choose a country...</option>                                                                        
                                                {
                                                    countries.countries.map((country) => (
                                                        <option key={`${country.name}`}>{country.name}</option>
                                                    ))
                                                }
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 mx-2">        
                                        <div className="my-1 p-1">
                                            <Datepicker title="Depart date" />
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 mx-2">
                                        <div className="my-1 p-1">
                                            <Datepicker title="Return date"/>
                                        </div>
                                    </div>
                                    <div className="w-full flex-1 mx-2">
                                        <div className="my-1 p-1">
                                            <Button className="w-48">
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                                                </svg>
                                                Buy now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </TabItem>
            <TabItem title="Hotels" className="py-0" icon={FaHotel}>
                <div class="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form className="">
                        <div className="grid grid-cols-6 gap-4 grid-rows-2">
                            <div className="col-span-5">
                                <div className="">
                                    <div className="flex flex-col md:flex-row pb-4 mb-0">
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="w-full flex-1 mx-2">
                                                    <div className="my-1 p-1">
                                                        <Select id="countries" required>
                                                            <option>Choose a country...</option>                                                                        
                                                            {
                                                                countries.countries.map((country) => (
                                                                    <option key={`${country.name}`}>{country.name}</option>
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
                                    <div class="flex flex-col md:flex-row pb-4 mb-0">
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
                <div class="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Start Date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="End date"/>
                            </div>
                        </div>
                    </form>
                </div>
            </TabItem>
            <TabItem title="Taxi" className="py-0" icon={FaTaxi}>
                <div class="p-6 bg-white text-medium text-black rounded-lg w-full">
                    <p className="text-black">Content 4</p>
                </div>
            </TabItem>
        </Tabs>

        
    </>
  )
}

export default Search