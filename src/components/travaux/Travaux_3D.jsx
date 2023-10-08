import { useRef, useState } from "react"

export default function Liens({toggle3D, click3D}) {

    var closeWindow = toggle3D
    const click3DTab = click3D
    console.log(click3D);

    return (<>
        <div className="fixed bg-melon dark:bg-gunmetal flex flex-col justify-center items-center w-screen h-screen transition_darkmode">
        <button>return</button>
            <h1>3D</h1>
        </div>
    </>)
}