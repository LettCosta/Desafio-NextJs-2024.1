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
    <div className="bg-blue-950 py-16 w-full">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl px-6 py-8 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <h2 className="text-blue-900 font-medium text-lg mt-4 text-center">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
