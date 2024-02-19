'use client'
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Answer from "../answer"

type QuestionProps = {
    text: string
}


export default function CardPerguntas( {text}: QuestionProps){
    
    const [isAnswerOpen, setIsAnswerOpen] = useState(false)
    const toggleAnswer = () => setIsAnswerOpen(!isAnswerOpen)
   
    
    return(
        <div className="flex w-3/4 align-center h-auto rounded-sm justify-between bg-white">
            <div>
                <h1 className="text-black text-sm font-medium m-3 md:text-lg ">{text}</h1>
            </div>
            

            <button onClick={toggleAnswer}>
                {isAnswerOpen ?
                    <div>
                        <ChevronUp 
                        onClick={toggleAnswer}
                        className="text-black size-7 m-3  hover:bg-white/15 transition-all duration-200 rounded-xl"
                        />
                    </div>
                    :
                    <ChevronDown
                    onClick={toggleAnswer}
                    className="size-7 m-3 cursor-pointer text-black hover:bg-white/15 transition-all duration-200 rounded-xl"
                    />
                }
            </button>

            {isAnswerOpen && (
                <Answer/>
            )}


        </div>
    )
}