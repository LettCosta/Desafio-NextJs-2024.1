
import { Membro } from "@prisma/client";

export default function MembersTable({members}: {members:Membro}){
    return(
        <tr className="border-b hover:bg-blue-100">
            <td className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                {members?.id} 
            </td>
            
            <td className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                {members?.name} 
            </td>
            <td className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                {members?.cargo} 
            </td>
            <td className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                {members?.email} 
            </td>
        </tr>  
    )
}