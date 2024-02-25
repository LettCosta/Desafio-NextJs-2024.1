import prisma from "@/lib/db";

const itensPerPage = 5;

export async function fetchFilteredMembers(query:string, currentPage:number) {
 
    const offset = (currentPage-1)*itensPerPage
 
    const members = await prisma.membro.findMany({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            id: "asc"
        },
        take: itensPerPage,
        skip: offset
    })


    const count= await prisma.membro.count({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            id: "asc"
        },

    })

    const totalPages = Math.ceil(count / itensPerPage)

    return {members, count, totalPages};
}


export async function membersAll(currentPage: number) {
   
    const offset = (currentPage-1)*itensPerPage
    const members = await prisma.membro.findMany({
        orderBy:{
            id: "asc"
        },
        take:itensPerPage,
        skip: offset
    })
    
    const totalPages = Math.ceil( 35/ itensPerPage)

    return {members, totalPages};
}