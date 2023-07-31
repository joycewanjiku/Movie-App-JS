import React, {useState,useEffect} from "react";
import { getMovies } from "../../utils/utilities";
import './style.css';
import ImageConainer from "../../atoms/atom imags";
const GetMovies = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        (async()=>{
            setLoading(true);
            const movies=await getMovies();
            console.log({movies});
            setMovies(movies.results);
            setLoading(false);
        })();
    }, []);
    if(loading){
        return <h1>Loading movies...</h1>
    }
    return(
        <div className="container">
            {movies &&
            !loading &&
            movies.length > 0 &&
            movies.map(item=>(
                <ImageConainer props={item}/>
            ))}
        {movies && !loading && movies.length === 0 &&(
            <div>
            <h1>No movies found</h1>
            </div>
        )}
        </div>
    );
};
export default GetMovies;