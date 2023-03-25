import Bombsvg from "../../public/bomb.svg"
export default function Bomb(){
    return (
        <div className="h-[56px] sm:h-[72px] border border-[#ef4444] border-4 rounded-xl" id='no-select'>
            <div className="h-12 sm:h-16 border border-none rounded-xl justify-center items-center flex">
                <Bombsvg className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
        </div>
    )
}