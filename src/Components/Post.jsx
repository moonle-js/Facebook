import { useNavigate} from "react-router"

export default function Post({children, id, gif, likes}){

    const navigateTo = useNavigate()

    return(
        <>
            <div className="m-[20px] w-[40%] orta:w-[90%] flex flex-col p-[10px] rounded-[15px] items-center justify-evenly h-[400px] bg-[#B4D4FF] ">


                <p className="w-[100%] h-[50%] flex items-center justify-center text-[#176B87] font-black">
                    {children}
                </p>


                <div className="flex justify-between items-center w-[100%] h-[35%] border-[4px] border-[solid] border-[#B4D4FF] mb-[10px] bg-[#176B87] rounded-[15px]">
                    <div className="w-[80%] h-[100%] flex items-center justify-center">
                        {gif}
                    </div>


                    <p className="h-[100%] w-[20%] flex items-center justify-center text-[#B4D4FF] font-black">Likes:{likes}</p>
                </div>



                <button onClick={() => {
                    navigateTo('post', {state: `${id}`})
                }} className="w-[100px] h-[15%] bg-[#176B87] text-[#EEF5FF] rounded-[15px]">
                    Go to post
                </button>
            </div>
        </>
    )
}