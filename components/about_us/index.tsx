import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16 px-8 lg:px-20">
        <div className="w-full">
            <h2 className="font-intro-rust text-3xl md:text-4xl font-bold text-start text-blue-900 mb-4 md:mb-6">
                Sobre Nós
            </h2>
            <p className="text-slate-800 text-sm lg:text-xl font-medium xl:text-2xl 2xl:text-3xl 3xl:text-4xl mb-6 md:mb-7">
                Na Academia <span className="text-blue-800">BlueFit</span>, nossa missão vai além de simplesmente fornecer um local para malhar. Estamos comprometidos em ser uma força positiva em nossas comunidades, inspirando e capacitando pessoas a adotarem um <span className="text-blue-900">estilo de vida saudável</span> e ativo. Nossa missão é inspirar e capacitar pessoas de todas as idades e níveis de condicionamento físico a alcançarem seus objetivos e viverem uma vida mais saudável.
            </p>
            <p className="text-slate-800 text-sm lg:text-xl font-medium xl:text-2xl 2xl:text-3xl 3xl:text-4xl mb-6 md:mb-7">      
                Oferecemos uma variedade de programas, aulas e instalações de última geração para garantir que nossos membros tenham tudo o que precisam para ter sucesso em suas jornadas de <span className="text-blue-900">fitness</span>. Nossa equipe de treinadores certificados está aqui para orientar, motivar e apoiar você a cada passo do caminho.
            </p>
            <p className="text-slate-800 text-sm lg:text-xl font-medium xl:text-2xl 2xl:text-3xl 3xl:text-4xl mb-6 md:mb-7">
                Junte-se a nós e faça parte de uma <span className="text-blue-900">comunidade</span> que inspira, motiva e transforma vidas todos os dias.
            </p>
        </div>
    </section>
  );
}
