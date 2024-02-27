import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer(){
    return(
        <div className="bg-black/95 text-center w-full mt-25 pt-4 pb-8 min-h-[250px] flex flex-col gap-8 items-center justify-center">
            <Image
                width='500'
                height='500'
                src='/img/logo.png'
                alt="Logo"
                className="w-32 h-28"
            />
            <div className="flex flex-col md:flex-row gap-6">
                <a href="/" className="text-white text-lg text-center hover:underline">HOME</a>
                <a href="/contato" className="text-white text-lg text-center hover:underline">CONTATO</a>
                <a href="/members" className="text-white text-lg text-center hover:underline">MEMBROS</a>
                <a href="/login" className="text-white text-lg text-center hover:underline">LOGIN</a>
            </div>
           <div className="flex gap-6">
            <a href="https://www.instagram.com/bluefitacademia?igsh=ZjdjazV0MTUzdG14">
                <Instagram className="text-white"/>
            </a>
            <a href="https://www.facebook.com/bluefitacademia">
                <Facebook className="text-white"/>
            </a>
            <a href="https://youtube.com/@BluefitAcademia?si=Z6tLoxy1VgZTHGij">
                <Youtube className="text-white"/>
            </a>
                
            </div>
            <span className="text-white cursor-default font-light">Com treinos personalizados e uma equipe dedicada a tornar seus sonhos realidade!</span>
        </div>
    )
}