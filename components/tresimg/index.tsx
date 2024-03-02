import Image from "next/image";

const items = [
  {
    imgSrc: "/img/professor.png",
    title: "Profissionais qualificados",
  },
  {
    imgSrc: "/img/bicicleta.png",
    title: "Mais de 20 modalidades de aulas coletivas",
  },
  {
    imgSrc: "/img/academia.png",
    title: "Equipamentos de qualidade",
  },
];

export default function TresImg() {
  return (
    <div className="bg-blue-950 pb-10 pt-20 w-full">
      <div className=" md:mx-8 mx-auto lg:mx-20 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white w-2/3 md:w-60 md:h-80 lg:w-72 rounded-xl px-6 py-8 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <div className="relative w-36 h-28 md:w-44 md:h-36 lg:w-56 lg:h-44 mb-4">
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-blue-900 font-medium text-base md:text-lg lg:text-xl mt-4 text-center">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
