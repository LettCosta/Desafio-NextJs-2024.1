import prisma from "@/lib/db";

const itensPerPage = 6;

export async function fetchFilteredMembers(query:string, currentPage:number) {
    const members = await prisma.membro.findMany({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            name: "asc"
        },
        take:itensPerPage
    })


    const count= await prisma.membro.count({
        where:{
            OR: [{name: {contains: query, mode:"insensitive"}}]
        },
        orderBy:{
            id: "asc"
        },

    })

    return {members, count};
}