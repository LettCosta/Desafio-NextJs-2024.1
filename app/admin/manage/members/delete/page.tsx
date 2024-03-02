'use client'

import Delete from "@/components/crud/delete";
import { usePathname, useSearchParams } from "next/navigation";

export default function DeleteConfirmation() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const memberId = Number(params["id"]);

  return (
      <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className=" flex items-center justify-center min-h-screen">
        <Delete id={memberId} />
      </div>
  );
}