import Image from "next/image";

export default function CreateMember(){
    return(
        <div className=" flex flex-row w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 ">
            <div>
                <h1 className="text-white font-semibold text-2xl mb-16">CRIAR NOVO MEMBRO</h1>
                <form className="flex flex-col gap-4" autoComplete="off" >
                    <div className="flex flex-col gap-2 items-center">
                        <label className="text-white font-medium">Nome</label>
                        <input className=" rounded-3xl mb-6" />
                        <label className="text-white font-medium">Cargo</label>
                        <input className=" rounded-3xl mb-6"/>
                        <label className="text-white font-medium">Email</label>
                        <input className=" rounded-3xl mb-8"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-6/12 x1:w-3/12 2xl:w-2/12">
                            Descartar
                        </button>
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-5/12 x1:w-3/12 2xl:w-2/12">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
            <Image
                width='500'
                height='500'
                src='/img/create.png'
                alt="Imagem ilustrativa de edição"
            />
        </div>
    )
}