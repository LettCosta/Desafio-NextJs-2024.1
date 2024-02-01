type CardProps = {
    title: string;
    price: string;
    text: string
}


export default function Card( {title, price, text} : CardProps ){
    return(
        <div className="flex flex-col bg-white gap-y-4 justify-center w-300 items-center mb-16 transition-shadow duration-200 rounded-md hover:shadow:xl">
            <div className="bg-black h-12 w-full items-center text-center">
                <h1 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-white cursor-default">{title}</h1>
            </div>
            <p className="text-black m-4 font-extrabold text-4xl lg:text-3xl md:text-2xl sm:text-lg xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center cursor-default">{price}</p>
            <p className="text-black m-4 font-light cursor-default ">{text}</p>
        </div>
    )
}