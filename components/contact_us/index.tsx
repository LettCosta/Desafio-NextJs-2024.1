import Image from "next/image";
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function ContactUs(){
    return(
        <div className="bg-blue-950 pb-10 md:pb-0 flex flex-col-reverse md:flex-row md:pt-16 md:justify-around w-full px-8 md:px-16 lg:px-24 min-h-screen">
            <div className="flex flex-col gap-8 lg:mr-16 w-full md:w-1/2">
                <h1 className="md:mt-4 mt-8 lg:text-2xl text-xl sm:text-lg xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-intro-rust text-white font-regular cursor-default text-center md:text-start">ENTRE EM CONTATO CONOSCO</h1>
                <div className="flex flex-col gap-4 text-center md:text-start">
                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        <Phone className="text-white"/>
                        <div>
                            <h2 className="text-white text-start lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl ">Telefone:</h2>
                            <h2 className="text-white text-start lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl ">(31) 97169-7273</h2>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-center md:justify-start">
                        <Mail className="text-white "/>
                        <div className=" ">
                            <h2 className="text-white text-start lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Email:</h2>
                            <h2 className="text-white text-start lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">bluefit@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-start">
                    <h2 className="text-white mt-4 lg:text-xl text-lg sm:text-md xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-intro-rust font-regular">NOSSAS REDES</h2>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Instagram: BlueFit</h2>
                        <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Facebook: BlueFit</h2>
                        <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Youtube: BlueFit</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full md:w-1/2 lg:pt-8">
                <Image
                    width={500}
                    height={500}
                    src='/img/contact_us.png'
                    alt="Imagem ilustrativa de contato"
                    className=" h-fit md:w-96"
                />
            </div>
        </div>
    )
}
