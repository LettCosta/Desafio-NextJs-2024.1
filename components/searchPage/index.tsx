import { Search as SearchIcon} from "lucide-react";

export default function SearchPage(){
    return (
        <form className="flex" autoComplete="off">
            <div className="flex w-auto flex-col items-center gap-2 my-10">
                <div className="relative flex w-auto items-center">
                    <input
                    id="search"
                    name="search"
                    type="text"
                    className="w-auto rounded-3xl px-4 py-1 text-black border-white caret-white transition-all duration-300"
                    placeholder="Faça sua busca!"
                    />
                </div>
            </div>
        </form>
    )
}