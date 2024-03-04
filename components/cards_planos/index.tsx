import Card from "./cards";


export default function CardsPlanos(){
    return(
        <div className="flex flex-col gap-y-12 min-h-screen ">
            <div className="w-full h-px bg-gray-100"></div>
            <h1 className="mt-4 text-center font-intro-rust font-semibold text-4xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-blue-900 cursor-default">
                CONHEÇA NOSSOS PLANOS
            </h1>
            <div className="flex flex-col items-center md:flex-row md:m-6 md:gap-8">
                <Card title="MENSAL" price="R$ 149,90"/>
                <Card title="ANUAL" price="12x R$89,90" />
                <Card title="DIÁRIO" price="R$ 19,90" />
            </div>
        </div>
    )
}