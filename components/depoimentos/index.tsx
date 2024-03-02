'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



interface Cliente {
  nome: string;
  depoimento: string;
}

const depoimentos: Cliente[] = [
  {
    nome: 'Joana Silva',
    depoimento:
      'Estou extremamente satisfeita com a Academia BlueFit! A equipe é incrível, as aulas são divertidas e motivadoras. Consegui atingir meus objetivos de forma mais rápida do que imaginei. Recomendo a todos!'
  },
  {
    nome: 'Pedro Almeida',
    depoimento:
      'Malhar na Academia BlueFit tem sido uma experiência transformadora para mim. Os instrutores são dedicados e sempre disponíveis para ajudar. O ambiente é acolhedor e motivador. Estou muito feliz com os resultados que estou alcançando!'
  },
  {
    nome: 'Ana Santos',
    depoimento:
      'Não poderia estar mais feliz por ter escolhido a Academia BlueFit como minha academia. Os treinos são desafiadores e divertidos, e a variedade de aulas é incrível. Me sinto mais saudável e confiante a cada dia!'
  },
  {
    nome: 'Lucas Oliveira',
    depoimento:
      'A BlueFit me ajudou a mudar meus hábitos e minha saúde. O ambiente é super acolhedor e os treinos são desafiadores, mas sempre com muita diversão. Recomendo a todos que buscam uma vida mais saudável!'
  },
  {
    nome: 'Mariana Costa',
    depoimento:
      'Sempre tive dificuldade em me manter motivada para fazer exercícios. Desde que me juntei à BlueFit, essa dificuldade desapareceu. A equipe é incrível e o ambiente é super amigável. Estou amando!'
  },
  {
    nome: 'Rafael Santos',
    depoimento:
      'Treinar na BlueFit tem sido uma jornada incrível para mim. Os instrutores são muito experientes e sempre têm ótimas dicas para melhorar meu desempenho. Recomendo a todos!'
  },
];

const Depoimentos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <section ref={ref} className="bg-gray-100 py-24">
      <div className="container mx-auto px-8">
        <h2 className="font-intro-rust text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:mb-18 font-bold text-blue-900 mb-10">Depoimentos de Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((cliente, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, delay: inView ? index * 0.5 : 0 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className=" font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-gray-900">{cliente.nome}</h3>
              <p className="text-gray-700 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl mt-2">{cliente.depoimento}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
