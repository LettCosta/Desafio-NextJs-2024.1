'use client'

import { Eye, Pencil, Trash } from "lucide-react"
import Link from "next/link"



export function ViewButton( {id}: {id:number} ){
    return(
        <Link href={`/admin/manage/members/view/${id}`}>
            <Eye className=" size-8 text-blue-950 hover:underline"/>
        </Link>
    )
}

export function EditButton( {id}: {id:number} ){
    return(
        <Link href={`/admin/manage/members/edit/${id}`}>
            <Pencil className=" size-7 text-blue-950 hover:underline"/>
        </Link>
    )
}

export function DeleteButton( {id}: {id:number} ){
    return(
        <Link href={`/admin/manage/members/delete/${id}`}>
            <Trash className=" size-7 text-blue-950 hover:underline"/>
        </Link>
    )
}