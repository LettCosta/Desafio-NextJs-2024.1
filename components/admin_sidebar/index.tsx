'use client'

import { LayoutDashboard, UserRoundSearch, Headphones, Home, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const LinksSideBar = [
    {href: '/admin/manage/members', label: 'Membros', icon:UserRoundSearch},
    {href: '/contato', label: 'Contato', icon:Headphones},
    {href: '/', label: 'Home', icon: Home},
]

export default function AdminSideBar(){
    const [isAdminSideBarOpen, setIsAdminSideBarOpen] = useState(false)
    const toggleAdminSideBar = () => setIsAdminSideBarOpen(!isAdminSideBarOpen)
  
    return(
        <div>
            <div style={{backgroundColor: '#0D2253'}} className=" sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
                <div className="flex items-center gap-2 cursor-default">
                    <Image
                    width='500'
                    height='500'
                    src='/img/logo.png'
                    alt="Logo"
                    className="w-32 h-24"
                    />
                </div>
                <Menu
                    className="w-8 h-8 text-white"
                    onClick={toggleAdminSideBar}
                />
            </div>
            <aside className={`fixed top-0 left-0 z-50 w-full sm:w-60 h-screen transition-transform ${isAdminSideBarOpen ? '': '-translate-x-full'} sm:translate-x-0  `}>
                <div style={{backgroundColor: '#0D2253'}} className=" h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                            <Image
                            width='500'
                            height='500'
                            src='/img/logo.png'
                            alt="Logo"
                            className="w-32 h-24"
                            />
                        </div>
                        <X
                        className="w-8 h-8 text-white sm:hidden"
                        onClick={toggleAdminSideBar}
                        />
                    </div>
                    <ul className="space-y-8">
                        {LinksSideBar.map(({href, label, icon : Icon}, index) => (
                            <li key={index}>
                                <Link href={href} className= "flex items-center px-1 py-2 rounded-lg hover:bg-white/15 ">
                                    <Icon className="w-6 h-6 text-white"/>
                                    <span className="ms-3 text-xl text-white">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}