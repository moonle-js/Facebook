import { createContext, useReducer } from "react";

export const postsContext = createContext()

var initialStates = {
    posts: []
}

var reducer = (state, action) => {
    if(state.posts.length){
        var massiv = []

        for(let i in state.posts){
            massiv.push(state.posts[i].id)
        }

        for(let i in massiv){
            if(massiv[i] == action.id){
                return {...state}
            }
        }
        state.posts.push(action)
    }else{
        state.posts.push(action)
    }
    
    return {...state}
}

export default function PostsContext({children}){

    const [state, dispatch] = useReducer(reducer,initialStates)

    return(
        <>
            <postsContext.Provider value={[state,dispatch]}>
                {children}
            </postsContext.Provider>
        </>
    )
}