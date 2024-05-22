import { useContext } from "react"
import { useLocation } from "react-router"
import { postsContext } from "../Contexts/PostsContext"

import like from '../images/like.svg'
import dislike from '../images/dislike.svg'

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
                                    <div className="w-[100%] h-[80%] flex justify-between">
                                        
                                        <div className="h-[100%] flex items-center justify-center w-[35%]">
                                            {item.gif}
                                        </div>

                                        <p className="font-black text-[#176B87] w-[60%] h-[100%] flex items-center justify-center">{item.text}</p>
                                        
                                    </div>

                                    
                                    <div className="w-[100%] flex items-center h-[10%] border-[5px] border-[solid] border-[#176B87] justify-between rounded-[15px] pl-[10px] pr-[10px]">
                                        <button onClick={() =>
                                                dispatch({id: `${item.id}`, text:`${item.text}`, likes: item.likes--})
                                            }
                                            className="w=[50px] h-[50px]">
                                                <img className="w-[100%] h-[100%]" src={like}></img>
                                        </button>

                                        <span className="text-[#176B87] text-[18px] font-black">Likes: {item.likes}</span>

                                        <button onClick={() =>
                                                dispatch({id: `${item.id}`, text:`${item.text}`, likes: item.likes++})
                                            }
                                            className="w-[50px] h-[50px]">
                                                <img src={dislike}></img>

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