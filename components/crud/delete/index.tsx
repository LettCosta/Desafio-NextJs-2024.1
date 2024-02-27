'use client'

import { deleteMember } from "@/back/adm/actions";
import Image from "next/image";
import Link from "next/link";



export default function Delete({id}:{id: number|undefined}){
    return(
        <div className="bg-white w-3/5 h-72 rounded-lg flex flex-col justify-between gap-2 px-6 py-2">
            <div className="flex justify-center items-center">
                <Image
                src="/img/delete.png"
                alt="Interrogação"
                width={100}
                height={300}
                className="mt-4 w-44"
                />
            </div>
            <h1 className="text-black text-lg text-center">Realmente deseja deletar esse usuário?</h1>
            <div className="flex flex-row mb-4 justify-between">
                <Link className="w-6/12 x1:w-3/12 2xl:w-2/12" href={"/admin/manage/members"}>
                    <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-center text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-full text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                        Cancelar
                    </button>
                </Link>
                <button onClick={()=> deleteMember(id)} style={{backgroundColor: '#0A0953'}} className="font-semibold text-center text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-5/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                    Confirmar
                </button>
            </div>
        </div>

    )
}