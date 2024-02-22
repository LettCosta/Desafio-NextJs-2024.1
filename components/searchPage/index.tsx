
import { Membro } from "@prisma/client"
import MembersTable from "../table/members"
import SecondarySearch from "./secondarySearch"

export default function SearchPage({members, count}: {members: Membro[] , count:number}){
    
    return ( 
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className="w-full pt-16 px-12 min-h-screen">
            <SecondarySearch num={count} />
            {count != 0?(
                <div style={{backgroundColor: '#D9D9D9'}} className=" w-full mt-16 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg items-center">
                <table className="">
                    <thead className="">
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
                        </tr>
                    </thead>
                    <tbody className="">
                                               
                           {members.map((members, index) => (
                                <MembersTable key={index} members={members}/>

                                ))}                       
            
                    </tbody>
                </table>
                </div>
            ): (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-bold text-white">
                        Nenhuma opção encontrada.
                    </span>
                </div>
            )}
            
        </div>
    )
}