import Title from "../title";
import Image from "next/image";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

export default function ContactUs(){
    return(
        <div className="flex flex-row flex-wrap justify-center gap-64 align-middle items-center ">
            <div className="flex flex-col gap-4 text-left">
                <div>
                    <Title title="ENTRE EM CONTATO CONOSCO"/>
                    <div className="flex gap-4">
                        <Phone className="text-white"/>
                        <h2 className="text-white text-lg">(31) 97169-7273</h2>
                    </div>
                    <div className="flex gap-4">   
                        <Mail className="text-white"/>
                        <h2 className="text-white text-lg">bluefit@gmail.com</h2>
                    </div>
                </div>
                <div>
                    <text className="text-white text-xl font-semibold ">NOSSAS REDES</text>
                </div>   
            </div>
            <Image
                width='500'
                height='500'
                src='/img/contact_us.png'
                alt="Imagem ilustrativa de contato"
                />
        </div>
    )
}