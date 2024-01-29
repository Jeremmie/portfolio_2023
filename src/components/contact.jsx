export default function contact() {

    function copyMail() {
        var copyText = document.getElementById("#copyMail");
        console.log(copyText);


        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }
    return (<>
        <div className="fixed bg-melonSoft backdrop-blur-md text-gunmetal dark:text-melonSoft dark:bg-gunmetal/80 flex flex-col justify-center items-center w-screen h-screen transition_darkmode">
            <svg className="w-1/5 fill-gunmetal dark:fill-melonSoft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>

            <p className="my-20 w-1/2">Hey, you can contact me using this address</p>
            <div id="copyMail" onClick={copyMail} className="text-melonSoft dark:text-gunmetal dark:bg-melonSoft flex flex-row items-center justify-between bg-gunmetal px-7 py-3 rounded-full">
                <p className="mr-5">jeremm.jaou@gmail.com</p>
                <svg className="w-6 fill-melonSoft dark:fill-gunmetal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
            </div>
        </div>
    </>)
}