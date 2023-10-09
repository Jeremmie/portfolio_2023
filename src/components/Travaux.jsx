import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'



export default function Travaux({ clickInHouse }) {

    const [toggle3d, setClick3d] = useState(true);
    function click3d() {
        setClick3d(!toggle3d)
    }

    return (<>

        <div className="fixed bg-melon dark:bg-gunmetal flex flex-col justify-end items-center w-screen h-screen transition_darkmode
        md:flex md:justify-center md:items-center">
            <div className="w-11/12 overflow-auto mt-24 rounded-xl
            md:grid md:w-8/12 md:h-3/6  md:overflow-hidden md:grid-cols-4 md:grid-rows-2 md:gap-4">
                <div onClick={click3d} className="bg-placeholder-bg bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 rounded-3xl
                md:row-start-1 md:row-end-3 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">01</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                        <p className="w-full text-end font-bold">3D</p>
                    </div>
                </div>
                <div className=" bg-video bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 rounded-3xl
                md:row-start-1 md:row-end-1 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">02</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                        <p className="w-full text-end font-bold">video</p>
                    </div>
                </div>
                <div className=" bg-dessin bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 rounded-3xl
                md:row-start-1 md:row-end-1 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">03</p>
                        <svg className="scale-75" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                        <p className="w-full text-end font-bold">2D</p>
                    </div>
                </div>
                <div className=" bg-web bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 rounded-3xl
                md:row-start-1 md:row-end-3 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">04</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                        <p className="w-full text-end font-bold">web</p>
                    </div>
                </div>
                <div className=" bg-photo bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 rounded-3xl
                md:row-start-2 md:row-end-2 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">05</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                        <p className="w-full text-end font-bold">photography</p>
                    </div>
                </div>
                <div className=" bg-JV bg-cover text-melon w-full flex justify-center items-center h-[25vh] mt-6 mb-4 rounded-3xl
                md:row-start-2 md:row-end-2 md:h-full md:mt-0">
                    <div className="backdrop-blur-md w-10/12 h-4/5 backdrop-melon bg-white/30 flex flex-col justify-between items-center rounded-3xl text-black font-bold text-3xl p-4">
                        <p className="w-full font-bold">05</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                            <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" /></svg>
                        <p className="w-full text-end font-bold">video games</p>
                    </div>
                </div>
            </div>
        </div>


        {toggle3d ? null : <Travaux3D click3d={click3d} toggle3d={toggle3d} />}

    </>)
}