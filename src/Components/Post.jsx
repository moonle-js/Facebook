import { useNavigate} from "react-router"

export default function Post({children, id, likes}){

    const navigateTo = useNavigate()

    return(
        <>
            <div className="m-[20px] w-[40%] orta:w-[90%] flex flex-col p-[10px] rounded-[15px] items-center justify-evenly h-[200px] bg-[#B4D4FF] ">
                <p className="w-[100%] h-[70%]">
                    {children}
                </p>

                <button onClick={() => {
                    navigateTo('post', {state: `${id}`})
                }} className="w-[100px] h-[25%] bg-[#176B87] text-[#EEF5FF] rounded-[15px]">
                    Go to post
                </button>
            </div>
        </>
    )
}