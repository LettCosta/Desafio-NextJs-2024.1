import { Membro } from "@prisma/client";
import { DeleteButton, EditButton, ViewButton } from "../buttons";
import Pagination from "@/components/pagination";

export default function ManageMembersTable({members, count, totalPages}: {members: Membro[], count:number, totalPages:number}){
   
   
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
                                    <td className="px-6 py-6 h-full ">
                                        <div className="flex gap-3  justify-center items-center">
                                            <ViewButton id={members?.id}/>
                                            <EditButton id={members?.id}/>
                                            <DeleteButton id={members?.id}/>
                                        </div>
                                    </td>
                                </tr>  

                                ))}                       
                    </tbody>
            </table>
            <div className="my-2">
                {totalPages>1 &&(
                    <Pagination totalPages={totalPages}/>
                )}
            </div>    
        </div>
    )
}