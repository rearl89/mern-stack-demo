import { usePostsContext } from "../hooks/usePostsContext"

export default function PostDetails({ post }) {
    const { dispatch } = usePostsContext()
    const handleClick = async () => {
        const response = await fetch('/api/posts/' + post._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_POST', payload: json})
        }
    }

    return (
        <div className="post-details">
            <h4>{post.title}</h4>
            <p>{post.message}</p>
            <p>{post.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}