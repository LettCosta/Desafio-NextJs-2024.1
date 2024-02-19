import Title from "../title";
import Image from "next/image";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function ContactUs(){
    return(
        <div style={{backgroundColor: '#0A0953'}} className=" flex flex-col md:flex-row flex-wrap pt-8 md:pt-16 md:justify-between px-24 items-start gap-8 min-h-screen">
            <div className="flex flex-col gap-6 md:gap-12">
                <div>
                    <Title title="ENTRE EM CONTATO CONOSCO"/>
                    <div className=" mt-4 flex gap-4">
                        <Phone className="text-white"/>
                        <h2 className="text-white text-lg text-left">(31) 97169-7273</h2>
                    </div>
                    <div className="flex gap-4">   
                        <Mail className="text-white"/>
                        <h2 className="text-white text-left text-lg">bluefit@gmail.com</h2>
                    </div>
                </div>
                <div>
                    <text className="text-white text-left text-xl font-semibold ">NOSSAS REDES</text>
                </div>   
            </div>
            <Image
                width='500'
                height='500'
                src='/img/contact_us.png'
                alt="Imagem ilustrativa de contato"
                className="md:w-64 lg:w-96"
                />
        </div>
    )
}