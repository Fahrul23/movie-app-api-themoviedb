import React,{useEffect,useState} from 'react';
import { CardMovie } from '../../../../components';
import axios from 'axios';

function NowPlaying(props) {
    const [movies,setMovies] = useState({});
    const [loading, setLoading] = useState(false)
    
    const getMovies = async () =>{
        try {
            let response = await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
                headers:{
                    'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                params:{
                    api_key : '23f9e1b2766556fcef37c45865d99a77',
                    language:'en-US',
                    page:2
                }
            });
            
            setMovies(response.data.results);
            setLoading(true);
            
        } catch (e) {
            console.log(e.message)
        }
    }
    

    useEffect(() => {
        getMovies();

    },[])

    return (
        <div>
            <section className="movies popular">
                <div className="header-movies">
                    <h3>Now Playing</h3>
                </div>
                <div className="movies-wrapper">
                {
                    loading ? movies.map((movie,index)=>{
                        
                        return(
                            <CardMovie 
                                key={index}
                                id_movie={movie.id}
                                image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                title={movie.original_title}
                                rilis={movie.release_date}
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

export default NowPlaying;