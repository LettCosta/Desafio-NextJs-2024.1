import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import Pagination from 'swiper';
import 'swiper/swiper-bundle.css';
import ClienteCard from './cards';

SwiperCore.use([Pagination]);

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
    {
      nome: 'Camila Pereira',
      depoimento:
        'Estou impressionada com a qualidade dos equipamentos da BlueFit. São modernos e bem cuidados, o que torna meus treinos ainda mais agradáveis. Obrigada, BlueFit!'
    },
  ];

const Depoimentos = () => {
  return (
    <div className="bg-blue-950 py-32">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {depoimentos.map((cliente, index) => (
            <SwiperSlide key={index}>
              <ClienteCard cliente={cliente} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Depoimentos;
