'use client'
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"


type QuestionProps = {
    perg: string
    ans: string
}



export default function CardPerguntas( {perg, ans}: QuestionProps){
    
    const [isAnswerOpen, setIsAnswerOpen] = useState(false)
    const toggleAnswer = () => setIsAnswerOpen(!isAnswerOpen)
   
    
    return(
        <div className="flex flex-col w-3/4 h-auto  ">
            <div className="flex justify-between items-center rounded-sm bg-white" >
                <h1 className="text-black cursor-default text-sm font-medium m-3 md:text-lg lg:text-xl xl:txt-2xl 2xl:text-3xl 3xl:text-4xl ">{perg}</h1>

                <button 
                onClick={toggleAnswer}>
                    {isAnswerOpen ?
                        <ChevronUp 
                        onClick={toggleAnswer}
                        className="text-black size-7 m-3 transition-all duration-200 rounded-xl"
                        />     
                        :
                        <ChevronDown
                        onClick={toggleAnswer}
                        className="size-7 m-3 cursor-pointer text-black transition-all duration-200 rounded-xl"
                        />
                    }
                </button>
            </div>

            <div className={"w-full transition-opacity duration-500 ease-in delay-100 opacity-"+(isAnswerOpen ? "100" : "0")}>
                    {isAnswerOpen && (
                        <h2 className="text-white text-sm m-3 md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">{ans}</h2>
                    )}
            </div>

        </div>
    )
}