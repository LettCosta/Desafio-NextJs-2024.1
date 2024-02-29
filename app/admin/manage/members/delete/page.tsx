'use client'

import Delete from "@/components/crud/delete";
import { usePathname, useSearchParams } from "next/navigation";

export default function DeleteConfirmation() {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const memberId = Number(params["id"]);

  return (
      <Delete id={memberId} />
  );
}