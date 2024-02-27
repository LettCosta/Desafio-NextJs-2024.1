'use client'

import { SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type SecondarySearchProps = {
    num: number 
}

export default function AdmSecondarySearch({num}:SecondarySearchProps){
    
    const searchParams= useSearchParams()
    const router= useRouter()
    const [secondarySearchTerm, setSecondarySearchTerm] = useState<string | ''> (searchParams.get('query') || '')


    const handleSearch = (query:string) => {
        if(!query){
            return
        }
        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/admin/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        handleSearch(secondarySearchTerm)
    }

    useEffect(()=>{
        setSecondarySearchTerm(searchParams.get('query') || '')
    }, [searchParams])



    return(
        <form
        className="flex mb-8 w-full "
        id="secondarySearch"
        autoComplete="off"
        onSubmit={handleSubmit}
        >
            <div className="flex flex-col w-full gap-2">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="text-blue-950/80 w-7 h-7 absolute left-4"/>
                    <input 
                    type="text"
                    value={secondarySearchTerm}
                    onChange={(e)=> setSecondarySearchTerm(e.target.value)}
                    className="w-full rounded-3xl px-16 py-3 text-black border border-blue-900 transition-all duration-300"
                    />
                </div>
                <span className="text-white/80 ">Total de {num} resultados para sua pesquisa.</span>
            </div>
        </form>
    )
}