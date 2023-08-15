import Nightmode from "./Nightmode"

export default function Header(){

    return (<>
    <div className="flex justify-center">
        <div className="text-gunmetal bg-gunmetal-20 rounded-full flex justify-around items-center w-6/12 h-16 fixed top-5 shadow-warm backdrop-blur-md dark:text-melon dark:shadow-cold transition_darkmode" >
            <button className="px-5 py-3 rounded-full hover:shadow-inner dark:hover:shadow-innercold transition_manual">home</button>
            <button className="px-5 py-3 rounded-full hover:shadow-inner dark:hover:shadow-innercold transition_manual">works</button>
            <button className="px-5 py-3 rounded-full hover:shadow-inner dark:hover:shadow-innercold transition_manual">contact</button>
            <button className="px-5 py-3 rounded-full hover:shadow-inner dark:hover:shadow-innercold transition_manual">links</button>
            <div className="w-14 shadow-inner rounded-full">
            <Nightmode/>
            </div>
        </div>
        
    </div>
 
    </>)
}