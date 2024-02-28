import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row items-centerjustify-between">
                <div className="md:w-1/2 md:mr-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Sobre Nós</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        Na Academia BlueFit, nossa missão vai além de simplesmente fornecer um local para malhar. Estamos comprometidos em ser uma força positiva em nossas comunidades, inspirando e capacitando pessoas a adotarem um estilo de vida saudável e ativo. 
                        Nossa missão é inspirar e capacitar pessoas de todas as idades e níveis de condicionamento físico a alcançarem
                        seus objetivos e viverem uma vida mais saudável.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        Oferecemos uma variedade de programas, aulas e instalações de última geração para garantir que nossos membros
                        tenham tudo o que precisam para ter sucesso em suas jornadas de fitness.
                        Nossa equipe de treinadores certificados está aqui para orientar, motivar e apoiar você a cada passo do caminho.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        Junte-se a nós e faça parte de uma comunidade que inspira, motiva e transforma vidas todos os dias.
                    </p>
                </div>
                <div className="md:w-1/2 md:ml-10">
                    <div className="relative h-72 md:h-96">
                        <Image
                            src="/img/aboutus.png"
                            alt="Sobre Nós"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
