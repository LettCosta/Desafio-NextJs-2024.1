
import { Membro } from "@prisma/client"
import MembersTable from "../table/members"
import SecondarySearch from "./secondarySearch"
import Pagination from "../pagination"

export default function SearchPage({members, count, totalPages}: {members: Membro[] , count:number, totalPages:number}){
    
    return ( 
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className="w-full py-16 px-12  min-h-screen">
            <SecondarySearch num={count} />
            {count != 0?(
                <div style={{backgroundColor: '#F8F8F8'}} className=" w-full mt-16 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg items-center">
                    <table className="w-full">
                        <thead className="">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal text-md xl:text-3xl md:text-xl 2xl:text-4xl 3xl:text-5xl lg:text-2xl text-blue-900">
                                    NOME
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900">
                                    CARGO
                                </th>
                                <th scope="col" className="px-6 py-3 font-normal text-md xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-xl lg:text-2xl text-blue-900">
                                    EMAIL
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" text-center">
                                                
                            {members.map((members, index) => (
                                    <MembersTable key={index} members={members}/>

                                    ))}                       
                
                        </tbody>
                    </table>
                    <div className="my-2">
                        {totalPages>1 &&(
                            <Pagination totalPages={totalPages}/>
                        )}
                    </div>    
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