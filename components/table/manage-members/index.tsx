
import { Membro } from "@prisma/client";
import ManageMembers from "./manage_table";

export default function ManageMembersTable({members}: {members: Membro[]}){
    return(
        <div style={{backgroundColor: '#D9D9D9'}} className=" w-3/4 relative overflow-x-auto shadow-md rounded-lg items-center">
            <table>
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
                <tbody>        
                                {members.map((members, index) => (
                                    <ManageMembers key={index} members={members}/>

                                ))}                       
                    </tbody>
            </table>
               
        </div>
    )
}