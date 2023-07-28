import { Link } from "react-router-dom";

const BlogList = ({blog , title}) => {


    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blog.map((x) => (
                <div className="blog-preview" key = {x.id}>
                    <Link to={`/blog_details/${x.id}`}>
                        <h2>{x.title}</h2>
                        <p>Written by {x.author}</p>
                    </Link>
                    
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;