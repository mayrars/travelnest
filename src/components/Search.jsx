"use client";
import { Datepicker, Select, Button, TabItem, Tabs, TextInput, FloatingLabel, Radio, Label } from "flowbite-react";
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
                        <div className="grid grid-cols-6 gap-4 grid-rows-2">
                            <div class="row-start-1 col-span-6">
                                <div className="flex flex-col md:flex-row pb-4 mb-0">
                                    <div className="flex-1"> 
                                        <div className="flex flex-col md:flex-row">     
                                            <div class="w-full flex-1 mx-2">
                                                <div className="my-1 p-1">
                                                    <Select id="type" required>
                                                        <option>Economy</option>
                                                        <option>Premium</option>
                                                        <option>Bussines</option>
                                                        <option>First-class</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div class="w-full flex-1 mx-2 flex gap-8">
                                                <div className="flex items-center gap-2 my-2">
                                                    <Radio id="united-state" name="countries" value="USA" defaultChecked />
                                                    <Label htmlFor="united-state">Round-trip</Label>
                                                </div>
                                                <div className="flex items-center gap-2 my-2">
                                                    <Radio id="germany" name="countries" value="Germany" />
                                                    <Label htmlFor="germany">One-way</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Radio id="spain" name="countries" value="Spain" />
                                                    <Label htmlFor="spain">Multi-city</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row-start-2 col-span-6">
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
                <div class="p-6 bg-transparent text-medium text-black rounded-lg w-full">
                    <form>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2">
                                <TextInput id="location" type="text" placeholder="Pick-up location (airport, city, station)" required shadow />
                            </div>                            
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Start Date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <div class="relative">
                                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
                                </div>
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <Datepicker title="Drop-off date" />
                            </div>
                            <div className="w-full flex-1 mx-2">
                                <div class="relative">
                                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
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