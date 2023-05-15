import { useEffect, useState } from "react"

import PostDetails from "../components/PostDetails"
import PostForm from "../components/PostForm"


export default function Home() {
    const [posts, setPosts] = useState(null)
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="home">
            <div className="posts">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />
        </div>
    )
}