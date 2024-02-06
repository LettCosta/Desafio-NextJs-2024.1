export default function Footer(){
    return(
        <div className="bg-black/95 text-center w-full mt-25 py-8 min-h-[250px] flex flex-col gap-12 items-center justify-center">
            <div className="bg-white">...................</div>
            <div className="flex gap-6">
                <a href="/home" className="text-white text-lg text-center ">HOME</a>
                <a href="/contato" className="text-white text-lg text-center">CONTATO</a>
                <a href="/membros" className="text-white text-lg text-center">MEMBROS</a>
                <a href="/gerenciar" className="text-white text-lg text-center">GERENCIAR</a>
            </div>
           <div className="flex gap-6">
                <div className="bg-white">..........</div>
                <div className="bg-white">..........</div>
                <div className="bg-white">..........</div>
            </div>
            <span className="text-white cursor-default font-light">Com treinos personalizados e uma equipe dedicada a tornar seus sonhos realidade!</span>
        </div>
    )
}