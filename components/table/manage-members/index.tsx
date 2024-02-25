
import { Membro } from "@prisma/client";
import ManageMembers from "./manage_table";
import Pagination from "@/components/pagination";

export default function ManageMembersTable({members, totalPages}: {members: Membro[], totalPages:number}){
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
                                    <ManageMembers key={index} members={members}/>

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