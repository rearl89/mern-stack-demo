import { usePostsContext } from "../hooks/usePostsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
            <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}