export default function PostDetails({ post }) {
    return (
        <div className="post-details">
            <h4>{post.title}</h4>
            <p>{post.message}</p>
            <p>{post.createdAt}</p>
        </div>
    )
}