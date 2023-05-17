import { useContext } from "react";
import { PostsContext } from "../context/PostContext";

export const usePostsContext = () => {
    const context = useContext(PostsContext)

    if (!context) {
        throw Error('usePostsContext must be used inside a PostsContextProvider')
    }

    return context
}