import { useContext } from "react"
import { useLocation } from "react-router"
import { postsContext } from "../Contexts/PostsContext"

export default function PostDetailed(){

    const idOfPost = useLocation()
    const [state, dispatch] = useContext(postsContext)


    return(
        <>
            <div className="flex items-center justify-center w-[100%] h-[calc(100vh-100px)] bg-[#176B87]">
                {state.posts.map(item => {
                    if(item.id == idOfPost.state){
                        return (
                            <>
                                <div key={item.id} className="flex flex-col rounded-[25px] shadow-[0_5px_5px_#fff] bg-[#EEF5FF] w-[600px] h-[600px] p-[20px] border-[2px] border-[#86B6F6]">
                                    <p className="font-black text-[#176B87] w-[100%] h-[90%]">{item.text}</p>

                                    <div className="w-[100%] flex items-center h-[10%] justify-between">
                                    <button onClick={() =>
                                            dispatch({id: `${item.id}`, text:`${item.text}`, likes: item.likes--})
                                        }>
                                            Dislike
                                        </button>
                                        <span>Likes: {item.likes}</span>
                                        <button onClick={() =>
                                            dispatch({id: `${item.id}`, text:`${item.text}`, likes: item.likes++})
                                        }>
                                            Like
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )
}