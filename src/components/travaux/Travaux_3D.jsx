import { useRef, useState } from "react"
import nightMode from '../Nightmode'

export default function Liens({ toggle3d, click3d }) {

    var closeWindow = toggle3d
    const click3DTab = click3d
    console.log(click3DTab);


    return (<>
        <div className="fixed z-50 h-screen w-screen bg-gunmetal">

            <div className="w-screen flex flex-row justify-between items-center w-sceen px-5 relative top-0 mt-5 text-center">
                <h1 className="text-melon">3D</h1>
                <p className="bg-melon text-gunmetal px-2 py-1 rounded-xl" onClick={click3DTab}>close</p>
            </div>
            <div className="flex flex-col w-screen items-center">
                <div className="pb-[17px] pl-2 pt-2 rounded-xl mt-5 w-11/12 shadow-md bg-melon text-gunmetal">
                    <div className="flex items-center justify-between mr-5">
                        <h2>Loop</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                    </div>
                </div>
                <div className="bg-melon text-gunmetal w-11/12 rounded-lg mt-2 p-4 shadow-xl">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex voluptatem, animi culpa, cupiditate neque odio, quia recusandae earum optio facere tenetur obcaecati omnis fuga saepe placeat nulla. Placeat, tempora.</p>
                </div>
            </div>

            <div className="flex flex-col w-screen items-center">
                <div className="pb-[17px] pl-2 pt-2 rounded-xl mt-5 w-11/12 shadow-md bg-melon text-gunmetal">
                    <div className="flex items-center justify-between mr-5">
                        <h2>Loop</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                    </div>
                </div>
            </div>

        </div>
    </>)
}