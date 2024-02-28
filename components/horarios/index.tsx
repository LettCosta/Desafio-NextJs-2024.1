export default function HorariosFuncionamento(){
    return(
        <div className="bg-blue-950 py-16 px-8 md:px-24">
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:mb-18 font-semibold text-white mb-8">
                    Horários de Funcionamento:
                </h2>
                <div className="flex flex-col gap-2">
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="text-blue-900 font-semibold">Segunda a Sexta:</h3>
                        <p className="text-blue-900">6:00 - 22:00</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="text-blue-900 font-semibold">Sábado:</h3>
                        <p className="text-blue-900">8:00 - 20:00</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h3 className="text-blue-900 font-semibold">Domingo:</h3>
                        <p className="text-blue-900">Fechado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}