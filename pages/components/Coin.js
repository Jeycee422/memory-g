import Coinsvg from '../../public/coin.svg'
export default function Coin(){
    return (
        <div className="h-[72px] border border-[#fbbf24] border-4 rounded-xl" >
            <div className="h-16 border border-none rounded-xl justify-center items-center flex text-4xl">
                <Coinsvg className="w-10 h-10" />
            </div>
        </div>
    )
}