
import { Membro } from "@prisma/client";
import ManageMembers from "./manage_table";
import Pagination from "@/components/pagination";
import { DeleteButton, EditButton, ViewButton } from "../buttons";

export default function ManageMembersTable({members, count}: {members: Membro[], count:number}){
   
   
    return(
        <div style={{backgroundColor: '#F8F8F8'}} className=" w-3/4 relative overflow-x-auto shadow-md rounded-lg items-center">
            <table className="w-full">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            NOME
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            CARGO
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            EMAIL
                        </th>
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            AÇÕES
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center">        
                                {members.map((members, index) => (
                                    <tr key={index} className="border-b hover:bg-blue-900/30">
                                    <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl lg:text-lg">
                                        {members?.id} 
                                    </td>
                                    
                                    <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                                        {members?.name} 
                                    </td>
                                    <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                                        {members?.cargo} 
                                    </td>
                                    <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                                        {members?.email} 
                                    </td>
                                    <td className="px-6 py-6 items-center flex text-center align-middle self-center gap-3 ">
                                        <ViewButton id={members.id}/>
                                        <EditButton id={members.id}/>
                                        <DeleteButton id={members.id}/>
                                    </td>
                                </tr>  

                                ))}                       
                    </tbody>
            </table> 
        </div>
    )
}