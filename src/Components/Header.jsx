import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="flex items-center justify-center w-full h-[100px] bg-[#EEF5FF]">
                <nav className="flex w-[90%] h-full items-center justify-center">
                    <ul className="flex w-full h-full items-center justify-center">
                        <li className='[list-style:none]'>
                            <Link to={'/'} className="ease duration-500 font-black text-[26px] text-[#176B87] hover:text-[#86B6F6]" >All Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}