import React from 'react';
import { Dumbbell, Users, Droplet, Heart, Umbrella, Book } from 'lucide-react';

export default function OurServices() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col px-6  lg:px-10 ">
      <h2 className="text-3xl md:text-4xl text-start font-semibold font-intro-rust text-blue-900 mb-8">Nossos serviços</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854)' }} className=" rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105 h-80 md:h-80  ">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-2 lg:mb-4 mx-auto">
              <Dumbbell size={32} />
            </div>
            <div>
              <h3 className="text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Treinamento Personalizado</h3>
              <p className="text-sm font-light text-zinc-100">Receba atenção individual dos nossos treinadores especializados, que vão criar um plano de treino exclusivo para você atingir seus objetivos de forma rápida e eficiente.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105 h-80 md:h-80 ">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Book size={32} />
            </div>
            <div>
              <h3 className="text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Aulas em Grupo</h3>
              <p className="text-sm font-light text-zinc-100">Junte-se às nossas aulas dinâmicas e energizantes, como Zumba, CrossFit e HIIT, onde você vai se divertir enquanto queima calorias e tonifica o corpo.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105 h-80 md:h-80 ">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Users size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Musculação e Condicionamento</h3>
              <p className="text-sm font-light text-zinc-100">Equipamentos modernos e programas de treinamento para desenvolver músculos fortes e definidos, além de melhorar o condicionamento físico geral.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105 h-80 md:h-80 ">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Droplet size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Avaliação Física e Nutricional</h3>
              <p className="text-sm font-light text-zinc-100">Avaliações regulares para acompanhar seu progresso físico e consultoria nutricional para uma dieta equilibrada e saudável, potencializando seus resultados.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8 transition duration-500 ease-in-out transform hover:scale-105 h-80 md:h-80 ">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Heart size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Programas de Emagrecimento Personalizados</h3>
              <p className="text-sm font-light text-zinc-100">Planos personalizados para ajudar na perda de peso de forma saudável, combinando exercícios específicos com orientação nutricional especializada.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Umbrella size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Aulas Aquáticas e Hidroginástica</h3>
              <p className="text-sm font-light text-zinc-100">Aulas realizadas na piscina, como hidroginástica e natação, que oferecem um treino de baixo impacto, fortalecimento muscular e melhoria da coordenação.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Book size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Recuperação e Reabilitação</h3>
              <p className="text-sm font-light text-zinc-100">Programas especializados para recuperação de lesões, fortalecimento muscular pós-cirurgia e reabilitação física.</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 md:px-2 lg:px-4 mb-8">
          <div style={{ background: 'linear-gradient(to bottom right, #02012F, #0A1854 )' }} className="rounded-lg p-8">
            <div className="icon-wrapper bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center md:mb-2 lg:mb-4 mx-auto">
              <Book size={32} />
            </div>
            <div>
              <h3 className=" text-lg lg:md:text-xl font-semibold text-white text-center mb-4">Yoga e Meditação</h3>
              <p className="text-sm font-light text-zinc-100">Aulas relaxantes para redução do estresse, aumento da flexibilidade e equilíbrio mental, proporcionando uma pausa revigorante na rotina.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
