import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch"


const BlogDetails = () => {
const {id } = useParams()
const {data:blog , error , isPending} = useFetch('https://sakethreddy18.github.io/jsonapi/Data/db.json/' + id)
const nav = useNavigate()

const handleClick = () => {
    fetch('https://sakethreddy18.github.io/jsonapi/Data/db.json/'+ blog.id , {
        method: 'DELETE'
    }).then(() => {
        nav("/")
    })
}

    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
