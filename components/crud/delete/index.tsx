'use client'

import { deleteMember } from "@/back/adm/actions";
import Image from "next/image";
import Link from "next/link";



export default function Delete({id}:{id: number|undefined}){
    return(
        <div className="bg-white w-full md:w-2/5 m-6 h-80 rounded-lg flex flex-col justify-between gap-2 px-6 py-2">
            <div className="flex justify-center items-center">
                <Image
                src="/img/delete.png"
                alt="Interrogação"
                width={100}
                height={300}
                className="mt-4 w-44"
                />
            </div>
            <h1 className="text-black text-lg text-center lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl sm:text-md ">Realmente deseja deletar esse usuário?</h1>
            <div className="flex flex-row w-full justify-between gap-3 mt-4 mb-4">
                <Link className="w-1/2 x1:w-3/12 2xl:w-2/12" href={"/admin/manage/members"}>
                    <button style={{backgroundColor: '#0A0953'}} className="font-semibold px-3 md:px-6 text-white rounded-3xl h-6 md:h-7 lg:h-9 xl:h-10  text-center w-full text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xll">
                        Cancelar
                    </button>
                </Link>
                <button onClick={()=> deleteMember(id)} style={{backgroundColor: '#0A0953'}} className="font-semibold text-white rounded-3xl h-6 md:h-7 lg:h-9 xl:h-10  text-center w-1/2 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                    Confirmar
                </button>
            </div>
        </div>

    )
}