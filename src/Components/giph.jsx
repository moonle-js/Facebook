import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function Giph({gifOfPost, setGifOfPost, setGifleriGoster}){


    var [arrayOfGiphs,setArrayOfGiphs] = useState([])
    var [requestedGif, setRequestedGif] = useState('cat')
    var gifFromInput = useRef()

        useEffect(() => {
            axios.get(`https://api.giphy.com/v1/gifs/search?api_key=2kXqrIF6BvILPxLTiGrGH6bJ1VR0LXk7&q=${requestedGif}&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips`).then(response => 
                {
                    for(let i in response.data.data){
                        console.log(response.data.data[i].embed_url)
                        setArrayOfGiphs(arrayOfGiphs => [...arrayOfGiphs, `https://media2.giphy.com/media/${response.data.data[i].id}/giphy.gif`])
                    }
                })
        }, [requestedGif])

    
    return(
        <>
            <div className="absolute w-[200px] h-[300px] flex rounded-[15px] flex-wrap items-center justify-evenly top-[100px] right-[0px] bg-[#EEF5FF]">
                <button onClick={() => {
                    setGifleriGoster(false)
                }} className="absolute right-[0] top-[0] font-black text-[#176B87]">X</button>
                <div className="w-[100%] h-[80%] flex flex-wrap items-center justify-evenly">
                    {arrayOfGiphs.map(item => <img onClick={()=>{
                        setGifOfPost(<img className="w-[100px] h-[100px] m-[auto]" src={item}></img>)
                        setGifleriGoster(false)
                    }
                    } className="w-[80px] cursor-pointer h-[80px]" key={item} src={item}></img>)}
                </div>

                <div className="flex items-center justify-evenly w-[100%] h-[15%]">
                    <input ref={gifFromInput} className="w-[60%] h-[100%] rounded-[15px] pl-[5px]" type="text" placeholder="Search gif..."></input>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setArrayOfGiphs([])
                        setRequestedGif(gifFromInput.current.value)
                    }} className="bg-[#B4D4FF] w-[35%] h-[50px] rounded-[15px]">Search</button>
                </div>
            </div>
        </>
    )
}
