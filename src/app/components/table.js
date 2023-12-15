import data from './database/data.json'
import{BiEdit,BiTrashAlt} from "react-icons/bi"


export default function Table(){
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-yellow-1000">
                 <th className="px-16 py-2">
                    <span className="text-black-1000">Name</span>
                 </th>
                 <th className="px-16 py-2">
                    <span className="text-black-1000">Email</span>
                 </th>
                 <th className="px-16 py-2">
                    <span className="text-black-1000">Birthday</span>
                 </th>
                 
                 <th className="px-16 py-2">
                    <span className="text-black-1000">Hire Date</span>
                 </th>
                 <th className="px-16 py-2">
                    <span className="text-black-1000">Information</span>
                 </th>
                
                 </tr>
            </thead>
            <tbody className="bg-yellow-500">
            
               {
                data.map((obj,i)=><Tr{...obj} key={i}/>)
               }
               
                
                
                

            </tbody>
        </table>
    )
}

function Tr({name, email, birthday, hiredate}){
    return (
            <tr className="bg-white-50 text-center">
                <td className="px-10 py-2 flex flex-row items-center">
                    <img src="#" alt=""/>
                    <span className="text-center ml-2 font-semibold text-gray-800">{name||"Unknown"}</span>
                </td>
                <td className="px-10 py-2 text-center">
                    <span className="text-gray-800">{email||"Unknown"}</span>
                </td>
                <td className="px-10 py-2">
                    <span className="text-gray-800">{birthday||"Unknown"}</span>
                </td>
                <td className="px-10 py-2">
                    <span className="text-gray-800">{hiredate||"Unknown"}</span>
                </td>
                <td className="px-10 py-2">
                    <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
                    <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
                </td>
            </tr>
            
            
            

    
)
    
}