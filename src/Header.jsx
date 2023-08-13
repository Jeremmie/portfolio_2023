import Nightmode from "./Nightmode"

export default function Header(){

    return (<>
    <div className="header">
        <div className="header-navigation">
            <button className="header-btn">home</button>
            <button className="header-btn">works</button>
            <button className="header-btn">contact</button>
            <button className="header-btn">links</button>
            <Nightmode />
        </div>
        
    </div>
 
    </>)
}