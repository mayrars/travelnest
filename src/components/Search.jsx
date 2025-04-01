"use client";
import { Datepicker, Select, Button } from "flowbite-react";
import { Countries } from "../api";
const Search = () => {
  const countries = Countries();
  console.log(countries)
  return (
    <>
        <form className="mt-20">
            <div class="flex flex-col md:flex-row pb-4 mb-4">
                <div class="flex-1">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full flex-1 mx-2">
                            <div class="my-1 p-1">
                                <Select id="countries" required>
                                    <option>Choose a country...</option>                                                                        
                                    {
                                        countries.countries.map((country) => (
                                            <option>{country.name}</option>
                                        ))
                                    }
                                </Select>
                            </div>
                        </div>
                        <div class="w-full flex-1 mx-2">        
                            <div class="my-1 p-1">
                                <Datepicker />
                            </div>
                        </div>
                        <div class="w-full flex-1 mx-2">
                            <div class="my-1 p-1">
                                <Datepicker />
                            </div>
                        </div>
                        <div class="w-full flex-1 mx-2">
                            <div class="my-1 p-1">
                                <Button className="w-48">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                                    </svg>
                                    Buy now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default Search