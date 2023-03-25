import Coinsvg from '../../public/coin.svg'
export default function Coin(){
    return (
        <div className="h-[56px] sm:h-[72px] border border-[#fbbf24] border-4 rounded-xl" id='no-select'>
            <div className="h-12 sm:h-16 border border-none rounded-xl justify-center items-center flex">
                <Coinsvg className="w-8 h-8 sm:h-10 sm:w-10" />
            </div>
        </div>
    )
}