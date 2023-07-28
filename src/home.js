import { useState , useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
  const {data: blogs , isPending , error} = useFetch("https://sakethreddy18.github.io/jsonapi/Data/db.json")
    

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ..</div>}
            { blogs && <BlogList blog = {blogs} title = {"All blogs!"} ></BlogList>}

        </div>
    );
}
 
export default Home;
