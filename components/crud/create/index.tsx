import Image from "next/image";

export default function CreateMember(){
    return(
        <div className="min-h-screen flex flex-col-reverse items-center lg:flex-row justify-around">
            <div className="md:mb-6">
                <h1 className="text-white text-center font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-16 mt-10 md:mt-16">CRIAR NOVO MEMBRO</h1>
                <form className="flex flex-col gap-4" autoComplete="off" >
                    <div className="flex flex-col gap-2 items-center">
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                        <input className=" rounded-3xl h-7 mb-6 lg:w-64 lg:mb-8 px-2" />
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Cargo</label>
                        <input className=" rounded-3xl h-7 mb-6 lg:w-64 lg:mb-8 px-2"/>
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Email</label>
                        <input className=" rounded-3xl h-7 mb-6 lg:w-64 lg:mb-8 px-2"/>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-6/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                            Descartar
                        </button>
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-5/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
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
                className="h-fit w-64 mr-6 "
            />
        </div>
    )
}