type CardProps = {
    title: string;
    price: string;
    text: string
}


export default function Card( {title, price, text} : CardProps ){
    return(
        <div className="flex flex-col  justify-center w-1/4 items-center mb-16 ">
            <div style={{backgroundColor: '#080735'}} className="h-16 pt-4 px-4 w-full items-center text-center">
                <h1 className="text-center text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-white cursor-default">{title}</h1>
            </div>
            <div style={{backgroundColor: '#D9D9D9'}}  className="bg-white h-64 w-full rounded-sm ">
                <p className="text-black m-4 font-extrabold text-4xl lg:text-3xl md:text-2xl sm:text-lg xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center cursor-default">{price}</p>
                <p className="text-black m-4 font-light cursor-default ">{text}</p>
            </div>
        </div>
    )
}