'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, SearchIcon, X } from "lucide-react"
import SearchBox from "../searchBox"
import { usePathname, useSearchParams } from "next/navigation"


const links= [
    {href: '/contato', label: 'Contato'},
    {href: '/members', label: 'Membros'},
    {href: '/gerenciar', label: 'Gerenciar'},
    {href:'/login', label:'Login'}
]


export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
 
    const pathname = usePathname()
    const searchParams = useSearchParams()

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

    useEffect(()=>{
        setIsSearchOpen(false)
        setIsNavOpen(false)

    }, [pathname,searchParams])

    return(
        <header style={{backgroundColor: '#0D2253'}} className="sticky top-0 z-20 w-full mx-auto py-4 px-4 md:p-0">
            <div className=" flex justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' >
                    <Image
                    width='500'
                    height='500'
                    src='/img/logo.png'
                    alt="Logo"
                    className="w-32 h-24"
                    />
                </Link>

                {isSearchOpen && (
                    <SearchBox />
                )}


                {!isSearchOpen && (
                    <div className=" flex-wrap items-center gap-12 md:gap-4 hidden md:flex ">
                        <Link href='/' className="flex gap-4  items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24">
                                Home
                            </button>
                        </Link>
                        <Link href='/contato' className="flex gap-4 items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-24 ">
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
                )}

                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-20 justify-center min-h-screen ">
                        <Link href='/' className="flex gap-4 items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-lg shadow-lg h-10 w-44">
                                Home
                            </button>
                        </Link>
                        <Link href='/contato' className="flex gap-4 items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-lg shadow-lg h-10 w-44">
                                Contato
                            </button>
                        </Link>
                        <Link href='/members' className="flex gap-4 items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-lg shadow-lg h-10 w-44">
                                Membros
                            </button>
                        </Link>
                        <Link href='/login' className="flex gap-4 items-center">
                            <button style={{backgroundColor: '#080735'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-lg shadow-lg h-10 w-44">
                                Login
                            </button>
                        </Link>
                    </div>
                )}
                
                <nav className="items-center flex ">
                    <button onClick={toggleNav} className="hidden md:flex">
                        {isSearchOpen ?
                            <X 
                            onClick={toggleSearch}
                            className="text-white w-8 h-8 p-1 cursor-pointer  hover:bg-white/15 transition-all duration-200 rounded-xl"
                            />
                            :
                            <SearchIcon
                            onClick={toggleSearch}
                            className="w-8 h-8 p-1 cursor-pointer text-white hover:bg-white/15 transition-all duration-200 rounded-xl"
                            />
                        }
                    </button>
                    <div className="md:hidden">
                        {isNavOpen || isSearchOpen ?
                            <X 
                            onClick={toggleNavSearch}
                            className="text-white w-8 h-8 p-1 cursor-pointer"
                            /> 
                            :
                            <div className="flex gap-16">
                                <SearchIcon
                                onClick={toggleSearch}
                                className="w-10 h-10 p-1 cursor-pointer text-white"
                                />
                                <Menu
                                onClick={toggleNav}
                                className="w-10 h-10 p-1 text-white cursor-pointer"
                                />
                            </div>
                        }
                    </div>
                </nav>

                
                
            </div>
        </header>
    )
}