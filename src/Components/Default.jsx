import { Outlet } from "react-router";
import Header from "./Header";
import PostsContext from "../Contexts/PostsContext";

export default function Default(){
    return(
        <>
            <PostsContext>
                <Header></Header>
                <Outlet></Outlet>
            </PostsContext>
            
        </>
    )
}