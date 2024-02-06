type QuestionProps = {
    text: string
}

export default function CardPerguntas( {text}: QuestionProps){
    return(
        <div className=" flex w-3/4 justify-center align-center h-auto rounded-sm bg-white">
            <h1 className="text-black text-md font-medium text-start m-3 xl:text-lg 2xl:text-xl 3xl:text-2xl">{text}</h1>
        </div>

    )
}