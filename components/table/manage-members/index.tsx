import MembersTable from "../members";
import { Membro } from "@prisma/client";

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
                        <tr className="border-b w-full hover:bg-blue-100">
                                {members.map((members, index) => (
                                    <MembersTable key={index} members={members}/>

                                ))}                       
                        </tr>
            
                    </tbody>
            </table>
               
        </div>
    )
}