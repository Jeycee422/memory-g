import Bombsvg from "../../public/bomb.svg"
export default function Bomb(){
    return (
        <div className="h-[72px] border border-[#ef4444] border-4 rounded-xl" >
            <div className="h-16 border border-none rounded-xl justify-center items-center flex text-4xl">
                <Bombsvg className="w-10 h-10" />
            </div>
        </div>
    )
}