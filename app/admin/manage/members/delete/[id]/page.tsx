import Delete from "@/components/crud/delete";

export default function Page({id}:{id: number}) {
  return (
    <div style={{ background: "linear-gradient(to bottom, #050437 60%, #3C3C41" }} className="flex items-center justify-center w-full min-h-screen">
      <Delete id={id} />
    </div>
  );
}
