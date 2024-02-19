type TitleProps = {
    title:string
}

export default function Title({title}:TitleProps){
    return(
        <div>
            <h1 className="mt-4 text-left text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-white cursor-default">{title}</h1>
        </div>
    )
}