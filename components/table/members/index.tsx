
import { Membro } from "@prisma/client";

export default function MembersTable({members}: {members:Membro}){
    return(
        <tr className="border-b hover:bg-blue-900/30">
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl lg:text-lg">
                {members?.id} 
            </td>
            
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl lg:text-lg">
                {members?.name} 
            </td>
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl  lg:text-lg">
                {members?.cargo} 
            </td>
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl lg:text-lg">
                {members?.email} 
            </td>
        </tr>  
    )
}