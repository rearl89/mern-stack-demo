import { useState } from "react"


export default function PostForm() {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()

        const post = {title, message}

        const response = await fetch('/api/posts', {method: 'POST', body: JSON.stringify(post), headers: {'Content-Type': 'application/json'}})
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setMessage('')
            setError(null)
            console.log('new post added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new post</h3>

            <label>Post title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Post message:</label>
            <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />

            <button>Add Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}