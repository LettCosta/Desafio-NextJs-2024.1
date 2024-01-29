type CardProps = {
    title: string;
    price: string;
    text: string
}


export default function Card( {title, price, text} : CardProps ){
    return(
        <div className="flex flex-col bg-white gap-y-4 justify-center w-90 items-center transition-shadow duration-200 rounded-md hover:shadow:xl">
            <div className="bg-black h-12 w-full items-center text-center">
                <h1 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-white">{title}</h1>
            </div>
            <p className="text-black m-4 font-extrabold text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center ">{price}</p>
            <p className="text-black m-4 font-light ">{text}</p>
        </div>
    )
}