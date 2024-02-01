type QuestionProps = {
    text: string
}

export default function CardPerguntas( {text}: QuestionProps){
    return(
        <div className=" flex w-3/4 justify-center align-center h-auto rounded-sm bg-white">
            <h1 className="text-black font-medium text-start m-3">{text}</h1>
        </div>

    )
}