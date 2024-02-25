import BeneficiosMensal from "./beneficios/mensal";
import BeneficiosAnual from "./beneficios/anual";
import BeneficiosDiario from "./beneficios/diario";

type CardProps = {
    title: string;
    price: string;
}


export default function Card( {title, price} : CardProps ){
    return(
        <div className="flex flex-col justify-center w-3/4 md:w-1/3 items-center mb-16 drop-shadow-lg rounded-lg ">
            <div style={{backgroundColor: '#080735'}} className=" rounded-t-lg h-16 pt-4 px-4 w-full items-center text-center">
                <h1 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-white cursor-default">{title}</h1>
            </div>
            <div className="bg-white rounded-b-lg w-full rounded-sm md:h-screen">
                <p className="text-black m-4 font-extrabold lg:text-3xl md:text-2xl sm:text-lg xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center">{price}</p>
                {title==='MENSAL' && (
                    <BeneficiosMensal/>
                )}
                {title==='ANUAL' && (
                    <BeneficiosAnual/>
                )}
                {title==='DIÁRIO' && (
                    <BeneficiosDiario/>
                )}
            </div>
        </div>
    )
}