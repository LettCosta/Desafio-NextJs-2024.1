'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import SearchPage from "../searchPage"
import { SearchIcon, X } from "lucide-react"


const links= [
    {href: '/contato', label: 'Contato'},
    {href: '/membros', label: 'Membros'},
    {href: '/gerenciar', label: 'Gerenciar'},
    {href:'/login', label:'Login'}
]


export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
 
    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    const toggleNavSearch = ()=> {
        if(isSearchOpen){
            toggleSearch()
        }
        else{
            toggleNav()
        }
    }

    return(
        <header style={{backgroundColor: '#0D2253'}} className="sticky top-0 z-20 w-full mx-auto py-8 px-4 md:p-0">
            <div className=" flex justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center" >
                    <Image
                    width='500'
                    height='500'
                    src='/img/logo.png'
                    alt="Logo"
                    className="w-32 h-24"
                    />
                </Link>
                <button onClick={toggleNav}>
                    {isSearchOpen ?
                        <X 
                        onClick={toggleSearch}
                        className="text-white w-8 h-8 p-1 cursor-pointer hover:bg-white/15 transition-all duration-200 rounded-xl"
                        />
                        :
                        <SearchIcon
                        onClick={toggleSearch}
                        className="w-8 h-8 p-1 cursor-pointer text-white hover:bg-white/15 transition-all duration-200 rounded-xl"
                        />
                    }

                </button>
                <div className=" flex-wrap items-center gap-12 md:gap-4 hidden md:flex">
                    <Link href='/' className="flex gap-4  items-center">
                        <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24">
                            Home
                        </button>
                    </Link>
                    <Link href='/contato' className="flex gap-4 items-center">
                        <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24">
                            Contato
                        </button>
                    </Link>
                    <Link href='/members' className="flex gap-4 items-center">
                        <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24">
                            Membros
                        </button>
                    </Link>
                    <Link href='/login' className="flex gap-4 items-center">
                        <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}