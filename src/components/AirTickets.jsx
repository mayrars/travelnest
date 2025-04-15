
import { useState } from "react";
import { Airport, ArriveLocation } from "../api";
import { Datepicker, Select, Button, TextInput, Radio, Label } from "flowbite-react";

const AirTickets = () => {
    const airport = Airport()
    const arriveLocation = ArriveLocation()
    const [values, setValues] = useState({
        flycost:'', 
        flytype:'Round-trip',
        flyadults: '',
        flychildrens:'',
        departureairport: '',
        arrivalairport:'',
        flydepartDate: '',
        flyreturnDate: '',

    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: [e.target.value]})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }
    return (
    <div className="p-6 bg-transparent text-medium text-black rounded-lg w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-4 grid-rows-2">
          <div className="row-start-1 col-span-6">
            <div className="flex flex-col md:flex-row pb-4 mb-0">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Select id="flycost" name="flycost" required onChange={(e)=> handleChanges(e) } >
                        <option value="">Select an option...</option>
                        <option value="ECONOMY">Economy</option>
                        <option value="PREMIUM_ECONOMY">Premium</option>
                        <option value="BUSINESS">Bussines</option>
                        <option value="FIRST">First-class</option>
                      </Select>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2 flex gap-8">
                    <div className="flex items-center gap-2 my-2">
                      <Radio
                        id="Round-trip"
                        name="flytype"
                        value="0"
                        default checked
                        required
                        onChange={(e)=> handleChanges(e) }
                      />
                      <Label htmlFor="Round-trip">Round-trip</Label>
                    </div>
                    <div className="flex items-center gap-2 my-2">
                      <Radio id="One-way" name="flytype" value="1" onChange={(e)=> handleChanges(e) }/>
                      <Label htmlFor="One-way">One-way</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="Multi-city"
                        name="flytype"
                        value="2"
                        onChange={(e)=> handleChanges(e) }
                      />
                      <Label htmlFor="Multi-city">Multi-city</Label>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <TextInput min="1" type="number" id="flyadults" name="flyadults" placeholder="Adults" required  onChange={(e)=> handleChanges(e) } value={values.flyadults}/>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <TextInput
                        type="number" 
                        min="0" 
                        id="flychildrens"
                        name="flychildrens"
                        placeholder="Childrens"
                        required
                        onChange={(e)=> handleChanges(e) }
                        value={values.flychildrens}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-start-2 col-span-6">
            <div className="flex flex-col md:flex-row pb-4 mb-0">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Select id="departureairport" name="departureairport" required onChange={(e)=> handleChanges(e) }>
                        <option value="">Choose an airport...</option>
                        {airport.map((airportItem) => (
                          <option key={`${airportItem.id}`}>
                            {airportItem.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Select id="arrivalairport" name="arrivalairport" required onChange={(e)=> handleChanges(e) }>
                        <option value="">Choose an airport...</option>
                        {arriveLocation.map((airportItem) => (
                          <option key={`${airportItem.id}`}>
                            {airportItem.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Datepicker name="flydepartDate" title="Depart date" required onChange={(e)=> handleChanges(e) } value={values.flydepartDate}/>
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Datepicker name="flyreturnDate" title="Return date" required onChange={(e)=> handleChanges(e) } value={values.flyreturnDate} />
                    </div>
                  </div>
                  <div className="w-full flex-1 mx-2">
                    <div className="my-1 p-1">
                      <Button className="w-48" type="submit">
                        <svg
                          className="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                            clipRule="evenodd"
                          />
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
  );
};

export default AirTickets;
