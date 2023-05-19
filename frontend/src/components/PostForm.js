import { useState } from "react"
import { usePostsContext } from "../hooks/usePostsContext"


export default function PostForm() {
    const { dispatch } = usePostsContext()
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        const post = {title, message}

        const response = await fetch('/api/posts', {method: 'POST', body: JSON.stringify(post), headers: {'Content-Type': 'application/json'}})
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setMessage('')
            setError(null)
            setEmptyFields([])
            console.log('new post added', json)
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new post</h3>

            <label>Post title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''} />

            <label>Post message:</label>
            <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} className={emptyFields.includes('message') ? 'error' : ''} />

            <button>Add Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}