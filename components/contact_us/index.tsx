import Image from "next/image";
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function ContactUs(){
    return(
        <div className="bg-blue-950 flex flex-col-reverse md:flex-row flex-wrap pt-16 md:pt-20 md:justify-between px-8 md:px-24 min-h-screen">
            <div className="flex flex-col gap-8 max-w-lg lg:mr-16">
                <h1 className="mt-4 text-start lg:text-xl text-lg sm:text-md xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-white cursor-default">ENTRE EM CONTATO CONOSCO</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Phone className="text-white"/>
                        <div>
                            <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Telefone:</h2>
                            <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">(31) 97169-7273</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-white"/>
                        <div>
                            <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Email:</h2>
                            <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">bluefit@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl  font-semibold">NOSSAS REDES SOCIAIS:</h2>
                    <div className="flex items-center gap-4">
                        <Instagram className="text-white"/>
                        <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Instagram: BlueFit</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <Facebook className="text-white"/>
                        <h2 className="text-white lg:text-lg text-md sm:text-sm xl:text-xl 2xl:text-2xl 3xl:text-3xl">Facebook: BlueFit</h2>
                    </div>
                </div>
            </div>
            <div className="md:w-2/5 lg:ml-16">
                <Image
                    width={500}
                    height={500}
                    src='/img/contact_us.png'
                    alt="Imagem ilustrativa de contato"
                    className="w-96"
                />
            </div>
        </div>
    )
}
