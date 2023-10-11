import { useState } from 'react'
import Travaux3D from './travaux/Travaux_3D'



export default function Travaux({ clickInHouse }) {


    return (<>
        <div className='w-screen h-screen fixed bg-melon dark:bg-gunmetal overflow-auto'>
            <div className='mt-20 px-5'>
                <h1>Main projects</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
            </div>
            <div className='overflow-x-scroll whitespace-nowrap rounded-lg mb-5'>
                <div className='h-[40vh] inline-block shadow-lg mb-5 text-melon dark:bg-melon ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-leonAscii bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>charachter design</p>
                    <p className=' text-3xl ml-2 mt-2'>Leon</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-galaxyGroove bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>album cover</p>
                    <p className=' text-3xl ml-2 mt-2'>Galaxy Groove</p>
                </div>

                <div className='h-[40vh] inline-block mb-5 shadow-lg text-melon dark:bg-melon  ml-5 w-[65%] dark:text-gunmetal bg-gunmetal rounded-xl transition_darkmode'>
                    <div className='bg-loop bg-center bg-cover h-2/3 rounded-t-lg w-full'></div>
                    <p className='text-sm ml-2 mt-2'>3D animation</p>
                    <p className=' text-3xl ml-2 mt-2'>Loop</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <iframe className='shadow-lg w-[90%] h-[19vh] rounded-lg ' src="https://www.youtube-nocookie.com/embed/eeH90wwWKM8?si=S6GaKqYifEUS7jvx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='mt-10 px-5'>
                <h1 className='text-base'>smaller projects</h1>
                <hr className='mb-5 border-gunmetal dark:border-melon transition_darkmode' />
            </div>


            <div className='overflow-x-scroll whitespace-nowrap rounded-lg ml-5 mb-5'>
                <div className='inline-block shadow-lg mb-5 text-melon flex flex-col w-[40vw] dark:text-gunmetal'>
                    <div className='bg-asciiCube bg-center bg-cover w-[40vw] aspect-square rounded-t-lg w-full'></div>
                    <div className='h-[10vh] dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                        <p className='text-sm ml-2 mt-2'>shaders</p>
                        <p className=' text-3xl ml-2 mt-2'>ascii</p>
                    </div>
                </div>
                <div className='inline-block shadow-lg mb-5 text-melon flex flex-col w-[40vw] dark:text-gunmetal'>
                    <div className='bg-asciiCube bg-center bg-cover w-[40vw] aspect-square rounded-t-lg w-full'></div>
                    <div className='h-[10vh] dark:bg-melon bg-gunmetal rounded-b-xl transition_darkmode'>
                        <p className='text-sm ml-2 mt-2'>shaders</p>
                        <p className=' text-3xl ml-2 mt-2'>ascii</p>
                    </div>
                </div>
            </div>
        </div >


    </>)
}