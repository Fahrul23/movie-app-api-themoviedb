import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { CardMoviesTrailers } from '../../../../components';
import './trailer.scss';
function Trailers(props) {
    const [movies,setMovies] = useState({});
    const [loading, setLoading] = useState(false)
    
    const getMovies = async () =>{
        try {
            let response = await axios.get('https://api.themoviedb.org/3/movie/popular',{
                headers:{
                    'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                params:{
                    api_key : '23f9e1b2766556fcef37c45865d99a77',
                    page:'1'
                }
            });
            
            setMovies(response.data.results);
            setLoading(true);
            console.log("movies : ",movies);
            
        } catch (e) {
            console.log(e.message)
        }
    }
    

    

    useEffect(() => {
        getMovies();
    },[])

    return (
        <div>
            <section className="movies-trailers">
                <div className="header-movies-trailers">
                    <h3>What's Popular</h3>
                </div>
                <div className="movies-wrapper-trailers">
                {
                    loading ? movies.map((movie,index)=>{
                        
                        return(
                            <CardMoviesTrailers 
                                key={index}
                                id_movie={movie.id}
                                image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                title={movie.original_title}
                                desc={movie.overview}
                            />
                        )
                    }) : <p>Loading</p>
                }
                </div>
            </section>
        </div>
    );
}

export default Trailers;