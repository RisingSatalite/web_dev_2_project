import { useReducer } from "react"
import { BiBrush } from "react-icons/bi"
import Success from "./working"
import Bugged from "./bugged"


const formReducer = (state, event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}


export default function AddUserForm(){

    const[formData, setFormData]=useReducer(formReducer,{})

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Object.keys(formData).length==0)return console.log("There is nothing entered in the form!")
        console.log(formData)
    }
    if(Object.keys(formData).length > 0) return <Success message={"Information was properly added!"}></Success>
    
    return(
        <form className="grid lg:grid-cols-2 w 4/6 gap-4" onSubmit={handleSubmit}>
          <div className="input-type">
            <input type="text"  onChange={setFormData} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-black" placeholder="FirstName"/>
          </div>
          <div className="input-type">
           <input type="text" onChange={setFormData} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-black" placeholder="LastName"/>
          </div>
          <div className="input-type">
            <input type="text"   onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-black" placeholder="Email"/>
          </div>
          <div className="input-type">
           <input type="text"  onChange={setFormData} name="birthday" className="border w-full px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-black" placeholder="Birthday"/>
          </div>
          <div className="input-type">
           <input type="text" onChange={setFormData} name="hiredate" className="border w-full px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-black" placeholder="HireDate"/>
          </div>
          <div className="input-type">
           <input type="date" onChange={setFormData} name="date" className="border px-5 py-3 focus:outline-none rounded-md bg-yellow-200 font-gray-800" placeholder="Date"/>
          </div>

          <div className="flex gap-10 items center">
            <div className="form-check">
                <input type="radio" value="Active" id="radioDeafult1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-200 
                checked:bg-green-300 checked:border-gray-500 focus:outline-none transition duration 200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "/>
                <label htmlFor="radioDefault1" className="inline-block ">
                    Active
                </label>

            </div>
            <div className="form-check">
                <input type="radio" value="Inactive" id="radioDeafult2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-200 
                checked:bg-red-300 checked:border-gray-500 focus:outline-none transition duration 200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "/>
                <label htmlFor="radioDefault1" className="inline-block ">
                    Inactive
                </label>

            </div>
            
            
          </div>
          
          <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-gray-800 px-4 py-2 border rounded-md hover:bg-gray-75 hover:border-yellow-500 hover:text-gray-100" >
            Update<span className="px-1"><BiBrush size={24}></BiBrush></span>
            </button>
        </form>

    )
}
