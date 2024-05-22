import { useContext, useRef, useState } from "react"
import { postsContext } from "../Contexts/PostsContext"
import { v4 as uuidv4 } from 'uuid'
import Post from "./Post"
import Giph from "./giph"

export default function Posts(){


    var [textValue, setTextValue] = useState('')
    var [state, dispatch] = useContext(postsContext)
    var [gifleriGoster, setGifleriGoster] = useState(false)
    var [gifOfPost, setGifOfPost] = useState('')
    var inputValue = useRef()

    return(
        <>
            <main className="flex orta:items-center flex-row orta:flex-col justify-evenly pt-[50px] w-full min-h-[calc(100vh-100px)] bg-[#176B87]">
                <section className="w-[30%] orta:w-[90%] orta:h-[380px] mb-[20px] h-[480px] rounded-[25px] bg-[#EEF5FF] flex flex-col items-center justify-evenly">
                    <div className="flex flex-col items-start justify-start w-[90%] h-[60%] bg-[#176B87] rounded-[15px] p-10px text=[#EEF5FF] p-[10px] text-[#EEF5FF]">
                        
                        <p className="w-[100%] h-[50%]">{textValue}</p>
                        <div className="w-[100%] h-[40%]">
                            {gifOfPost}
                        </div>
                    </div>

                    <form className="relative flex items-center justify-evenly w-[90%] h-[20%]">
                        <input
                            ref={inputValue}
                            type="text"
                            placeholder="Add post text..."
                            className="w-[60%] h-[90%] rounded-[15px] pl-[10px] bg-[#176B87] text-[#EEF5FF]"
                            onChange={(e) => {
                                setTextValue(e.target.value)
                            }}
                        ></input>

                        <button onClick={(e) => {e.preventDefault(); setGifleriGoster(true)}} className="w-[15%] h-[90%] bg-[#B4D4FF] text-[#176B87] rounded-[15px]">
                            Giphy
                        </button>
                        <button onClick={
                            (e) => {
                                e.preventDefault()

                                if(inputValue.current.value){
                                    var aydi = uuidv4()
                                    dispatch({id: `${aydi}`, text:`${textValue}`, likes: 0, gif: gifOfPost})
                                    setTextValue('')
                                    inputValue.current.value = ''
                                }else{
                                    alert('Please add Text')
                                }
                            }
                        } className="w-[15%] h-[90%] bg-[#86B6F6] text-[#176B87] rounded-[15px]">
                            Post
                        </button>

                        {gifleriGoster ? <Giph setGifleriGoster={setGifleriGoster}  setGifOfPost={setGifOfPost} gifOfPost={gifOfPost}></Giph> : <></>}

                    </form>
                </section>

                <section className="h-[60%] orta:min-h-[250px]  orta:w-[90%] orta:flex-col gap-x-[10%] flex flex-wrap orta:flex-nowrap justify-start items-start w-[60%] min-h-[960px] bg-[#EEF5FF] rounded-[25px]">
                    {state.posts.map(item => <Post id={item.id} likes={item.likes} gif={item.gif} key={item.id}>{item.text}</Post>)}
                </section>
            </main>
        </>
    )
}