// import Question from '../../public/question.svg'
import {Montserrat} from 'next/font/google'
import Coin from '../../pages/components/Coin'
import Bomb from '../../pages/components/Bomb'

const montserrat = Montserrat({subsets: ['latin'],weight: "800"})
export default function Tile(props){
    return (
        <>
            {props.isShow || props.showTile
            
                ? props.name === 'coin' ? <Coin /> : <Bomb />
            
                :<div onClick={props.onClick} className="bg-[#053876] h-[72px] border border-none rounded-xl cursor-pointer" style={montserrat.style}>
                    <div className="bg-[#2281f6] h-16 border border-none rounded-xl justify-center items-center flex text-4xl" style={{userSelect:'none'}}>
                        {/* <Question className="w-8 h-8" /> */}?
                    </div>
                </div>
            }
        </>
    )
}