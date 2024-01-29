type TitleProps = {
    title:string
}

export default function Title({title}:TitleProps){
    return(
        <div>
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-white text-center">{title}</h1>
        </div>
    )
}