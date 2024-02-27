'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchMembers() {
    const members = await prisma.membro.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            cargo:true,
        },
        orderBy:{
            id:"asc",
        }
    });

    const count= await prisma.membro.count();
    const totalPages = Math.ceil(count /5)

    return{members, count, totalPages};
    
}

export async function fetchMembersById(id:number | undefined) {
    const member = await prisma.membro.findUnique({
        where:{id},
        select:{
            id:true,
            name:true,
            email:true,
            cargo:true
        }
    })
    return member;
    
}



export async function deleteMember(id:number|undefined) {
    await prisma.membro.delete({
        where: {id},
    });
    revalidatePath("/admin/manage/members");
}



export async function createMember(formData:FormData) {
    const name = formData.get("name") as string;
    const cargo= formData.get("cargo") as string;
    const email= formData.get("email") as string;
    await prisma.membro.create({
        data:{
            name,
            cargo,
            email,
        },
    });

    redirect("/admin/manage/members");
    
}

export async function editMember(id: number | undefined, formData: FormData) {
    let name: string | undefined = formData.get("name") as string | undefined;
    let cargo: string | undefined = formData.get("cargo") as string | undefined;
    let email: string | undefined = formData.get("email") as string | undefined;
  
    if (name !== undefined) {
      await prisma.membro.update({
        where:{id},
        data:{
            name,
        }
      });
    }
  
    if (cargo !== undefined) {
        await prisma.membro.update({
            where:{id},
            data:{
                cargo,
            }
          });
    }
  
    if (email !== undefined) {
        await prisma.membro.update({
            where:{id},
            data:{
                email,
            }
          });
    }
    
    redirect("/admin/manage/members")
  
  }
  
    