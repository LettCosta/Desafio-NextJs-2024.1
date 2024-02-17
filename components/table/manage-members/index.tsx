import { Link } from "lucide-react";
import { DeleteButton, EditButton, ViewButton } from "../buttons";

export default function ManageMembersTable(){
    return(
        <div style={{backgroundColor: '#D9D9D9'}} className=" w-3/4 relative overflow-x-auto shadow-md sm:rounded-lg items-center">
            <table>
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
                        <th scope="col" className="px-6 py-3 font-normal text-lg text-blue-900">
                            AÇÕES
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b hover:bg-blue-100">
                        <th className="px-6 py-6 font-medium text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl md:text-md sm:text-sm">
                            1
                        </th>
                        <th className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                                Ana Clara Leles Quintão
                        </th>
                        <th className="px-6 py-6 font-medium text-md  xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                            Membro
                        </th>
                        <th className="px-6 py-6 font-medium text-md  xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                            Ana@gmail.com
                        </th>
                        <th className="px-6 py-6 flex items-center gap-2">
                            <ViewButton id={1} />
                            <EditButton id={1} />
                            <DeleteButton id={1} />
                        </th>
                    </tr>
                    <tr className="border-b hover:bg-blue-100">
                        <th className="px-6 py-6 font-medium text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl md:text-md sm:text-sm">
                            1
                        </th>
                        <th className="px-6 py-6 font-medium text-md xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                                AnaClara LelesQuintão
                        </th>
                        <th className="px-6 py-6 font-medium text-md  xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                            Membro
                        </th>
                        <th className="px-6 py-6 font-medium text-md  xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-sm sm:text-sm">
                            Anaaaaaaaa@gmail.com
                        </th>
                        <th className="px-6 py-6 flex items-center gap-2">
                            <ViewButton id={1} />
                            <EditButton id={1} />
                            <DeleteButton id={1} />
                        </th>
                        
                    </tr>
                </tbody>
            </table>
               
        </div>
    )
}