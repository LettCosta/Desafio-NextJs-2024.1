const name = 'membro qualquer'
const cargo = 'cargo qualquer'
const email = 'email qualquer'


export default function ViewMember(){
    return(
        
            <div className="flex flex-col justify-center items-center mt-32">
                <h1 className="text-white font-semibold text-2xl mb-16">VISUALIZAR MEMBRO</h1>
                <form className="flex gap-4" autoComplete="off" >
                    <div className="flex flex-col gap-2 items-center">
                        <label className="text-white font-medium">Nome</label>
                        <input className=" rounded-3xl mb-6" defaultValue={name} />
                        <label className="text-white font-medium">Cargo</label>
                        <input className=" rounded-3xl mb-6" defaultValue={cargo}/>
                        <label className="text-white font-medium">Email</label>
                        <input className=" rounded-3xl mb-8" defaultValue={email} />
                    </div>
                </form>
            </div>
    )
}