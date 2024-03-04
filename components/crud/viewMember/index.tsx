import prisma from "@/lib/db";
import { Membro } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ViewMember({ member }: { member: Membro | null }) {
  return (
    <div
      className="bg-gradient-to-b from-blue-950 to-gray-600 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
        <div className="bg-white w-full md:p-2 lg:p-8 md:w-3/4 flex-col shadow-md rounded-lg items-center h-4/5 justify-center">
                <Link className="flex w-fit" href='/admin/manage/members'>
                    <ArrowLeft className="text-blue-900 size-6 lg:size-10 mt-6 ml-6"/>
                </Link>
                <div className=" flex flex-col-reverse items-center justify-around md:flex-row-reverse ">
                    <div className="md:mr-8 md:mb-12 mb-12">
                        <h1 className="text-blue-900 font-semibold  text-2xl md:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-12">VISUALIZAR MEMBRO</h1>
                            <div className="flex flex-col gap-2 items-center">
                                <label className="text-blue-900 font-medium text-md md:text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                                <input name="name" placeholder="Nome" className=" drop-shadow-xl border-zinc-200 border  shadow-inherit rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.name} />
                                <label className="text-blue-900 font-medium text-md md:text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Cargo</label>
                                <input name="cargo" placeholder="Cargo" className="drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.cargo}/>
                                <label className="text-blue-900 font-medium text-md md:text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Email</label>
                                <input name="email" placeholder="Email" className=" drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl h-7 lg:w-64 px-2" defaultValue={member?.email} />
                            </div>
                    </div>
                    
                    <Image
                        width='500'
                        height='500'
                        src='/img/edit.png'
                        alt="Imagem ilustrativa de visualização"
                        className="w-72 lg:w-96"
                    />
                </div>
            </div>
    </div>
  );
}
