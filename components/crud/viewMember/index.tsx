const name = 'membro qualquer'
const cargo = 'cargo qualquer'
const email = 'email qualquer'


export default function ViewMember(){
    return(
        
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-16 mt-10 md:mt-16">VISUALIZAR MEMBRO</h1>
                <form className="flex gap-4" autoComplete="off" >
                    <div className="flex flex-col gap-2 items-center">
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                        <input className=" rounded-3xl h-7 mb-6 lg:w-64 lg:mb-8 px-2" defaultValue={name} />
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Cargo</label>
                        <input className=" rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={cargo}/>
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Email</label>
                        <input className=" rounded-3xl h-7 lg:w-64 px-2" defaultValue={email} />
                    </div>
                </form>
            </div>
    )
}