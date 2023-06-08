// import Question from '../../public/question.svg'
// import {Montserrat} from 'next/font/google'
// import Coin from './Coin'
// import Bomb from './Bomb'
import Tile from './Tile'

// const montserrat = Montserrat({subsets: ['latin'],weight: "800"})
export default function Tiles(props){
    return (
        <>
            {props.isShow || props.showTile
            
                ? <Tile name={props.name} color={props.color} />
            
                :<div onClick={props.onClick} className="bg-[#053876] h-12 w-12 sm:w-[72px] sm:h-[72px] border border-none rounded-lg sm:rounded-xl cursor-pointer">
                    <div className="bg-[#2281f6] h-[36px] sm:h-16 sm:text-4xl border border-none rounded-lg sm:rounded-xl justify-center items-center flex text-2xl" style={props.font.style}>
                        {/* <Question className="w-8 h-8" /> */}?
                    </div>
                </div>
            }
        </>
    )
}