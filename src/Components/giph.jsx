import axios from "axios"
import { useEffect, useState } from "react"

export default function Giph(){
    var [arrayOfGiphs,setArrayOfGiphs] = useState([])

    useEffect(() => {
        axios.get('https://api.giphy.com/v1/gifs/search?api_key=2kXqrIF6BvILPxLTiGrGH6bJ1VR0LXk7&q=cat&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips').then(response => 
            {
                for(let i in response.data.data){
                    console.log(response.data.data[i].embed_url)
                    setArrayOfGiphs(arrayOfGiphs => [...arrayOfGiphs, `https://media2.giphy.com/media/${response.data.data[i].id}/giphy.gif`])
                }
            })
    }, [])
    
    return(
        <>
            <div className="absolute w-[200px] h-[300px] flex rounded-[15px] flex-wrap items-center justify-evenly top-[100px] right-[0px] bg-[#EEF5FF]">
                {arrayOfGiphs.map(item => <img className="w-[80px] cursor-pointer h-[80px]" key={item} src={item}></img>)}
            </div>
        </>
    )
}