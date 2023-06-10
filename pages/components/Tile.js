import Applesvg from '../../public/svgs/apple.svg'
import Bbsvg from '../../public/svgs/bb.svg'
import Bearsvg from '../../public/svgs/bear.svg'
import Bholesvg from '../../public/svgs/bhole.svg'
import Bombsvg from '../../public/svgs/bomb.svg'
import Boredsvg from '../../public/svgs/bored.svg'
import Cassiopeiasvg from '../../public/svgs/cassiopeia.svg'
import Coinsvg from '../../public/svgs/coin.svg'
import Crysvg from '../../public/svgs/cry.svg'
import Deersvg from '../../public/svgs/deer.svg'
import Dippersvg from '../../public/svgs/dipper.svg'
import Dolphinsvg from '../../public/svgs/dolphin.svg'
import Elephantsvg from '../../public/svgs/elephant.svg'
import Eyeheartsvg from '../../public/svgs/eyeheart.svg'
import Foxsvg from '../../public/svgs/fox.svg'
import Happysvg from '../../public/svgs/happy.svg'
import Kiwisvg from '../../public/svgs/kiwi.svg'
import Lasersvg from '../../public/svgs/laser.svg'
import Lettucesvg from '../../public/svgs/lettuce.svg'
import Moonsvg from '../../public/svgs/moon.svg'
import Nautsvg from '../../public/svgs/naut.svg'
import Onionsvg from '../../public/svgs/onion.svg'
import Penguinsvg from '../../public/svgs/penguin.svg'
import Peppersvg from '../../public/svgs/pepper.svg'
import Picklesvg from '../../public/svgs/pickle.svg'
import Rabbitsvg from '../../public/svgs/rabbit.svg'
import Sealsvg from '../../public/svgs/seal.svg'
import Sleepsvg from '../../public/svgs/sleep.svg'
import Smilesvg from '../../public/svgs/smile.svg'
import Strawberrysvg from '../../public/svgs/strawberry.svg'
import Tomatosvg from '../../public/svgs/tomato.svg'
import Winksvg from '../../public/svgs/wink.svg'

export default function Tile({name,color}){
    const Tilesvg = name === 'apple' ? <Applesvg className="w-6 h-6 sm:h-10 sm:w-10"/> 
        : name === 'bb' ? <Bbsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'bear' ? <Bearsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'bhole' ? <Bholesvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'bomb' ? <Bombsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'bored' ? <Boredsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'cassiopeia' ? <Cassiopeiasvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'coin' ? <Coinsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'cry' ? <Crysvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'deer' ? <Deersvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'dipper' ? <Dippersvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'dolphin' ? <Dolphinsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'elephant' ? <Elephantsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'eyeheart' ? <Eyeheartsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'fox' ? <Foxsvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'happy' ? <Happysvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'kiwi' ? <Kiwisvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'laser' ?<Lasersvg className="w-6 h-6 sm:h-10 sm:w-10" />
        : name === 'lettuce' ? <Lettucesvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'moon' ? <Moonsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'naut' ? <Nautsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'onion' ? <Onionsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'penguin' ? <Penguinsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'pepper' ? <Peppersvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'pickle' ? <Picklesvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'rabbit' ? <Rabbitsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'seal' ? <Sealsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'sleep' ? <Sleepsvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'smile' ? <Smilesvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'strawberry' ? <Strawberrysvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'tomato' ? <Tomatosvg className="w-6 h-6 sm:h-10 sm:w-10"/>
        : name === 'wink' ? <Winksvg className="w-6 h-6 sm:h-10 sm:w-10"/> : <div></div>

    return (
        <>
            {
                color === '#ef4444' ? <div className={`h-11 w-11 sm:h-[72px] sm:w-[72px] border border-[#ef4444] border-[3px] sm:border-4 rounded-md sm:rounded-xl`} id='no-select'>
                    <div className="h-9 sm:h-16 border border-none rounded-md sm:rounded-xl justify-center items-center flex">
                        {Tilesvg}
                    </div>
                </div>
                : color === '#fbbf24' ? <div className={`h-11 w-11 sm:h-[72px] sm:w-[72px] border border-[#fbbf24] border-[3px] sm:border-4 rounded-md sm:rounded-xl`} id='no-select'>
                    <div className="h-9 sm:h-16 border border-none rounded-md sm:rounded-xl justify-center items-center flex">
                        {Tilesvg}
                    </div>
                </div>
                : color === '#3b82f6' ? <div className={`h-11 w-11 sm:h-[72px] sm:w-[72px] border border-[#3b82f6] border-[3px] sm:border-4 rounded-md sm:rounded-xl`} id='no-select'>
                    <div className="h-9 sm:h-16 border border-none rounded-md sm:rounded-xl justify-center items-center flex">
                        {Tilesvg}
                    </div>
                </div>
                : color === '#22c55e' ? <div className={`h-11 w-11 sm:h-[72px] sm:w-[72px] border border-[#22c55e] border-[3px] sm:border-4 rounded-md sm:rounded-xl`} id='no-select'>
                    <div className="h-9 sm:h-16 border border-none rounded-md sm:rounded-xl justify-center items-center flex">
                        {Tilesvg}
                    </div>
                </div> : <div></div>
            }
        </>
    )
}