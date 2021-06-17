import React,{useEffect,useState} from 'react';
import './popular.scss';
import { CardMovie } from '../../../../components';
import axios from 'axios';
import GetMovies from './GetMovies';
import { useHistory } from 'react-router-dom';
function Popular(props) {
    const [movies,setMovies] = useState({});
    const [genres,setGenres] = useState([]);
    const [loading, setLoading] = useState(false)
    
    let history = useHistory();
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
    const getgenres = async (ids) =>{
        let datagenres = await axios.get('https://api.themoviedb.org/3/genre/movie/list',{
            headers:{
                'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>'
            },
            params:{
                api_key : '23f9e1b2766556fcef37c45865d99a77',
            }
        });
        const data = [];
        datagenres.data.genres.map(genre =>{
            if(genre.id === ids){
                data.push(genre.name)
            }    
        })
        setGenres(data);
    }
    

    useEffect(() => {
        getMovies();
        console.log("state:",genres);

    },[])

    return (
        <div>
            <section className="movies popular">
                <div className="header-movies">
                    <h3>What's Popular</h3>
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
                                genres={movie.genre_ids}
                                rilis={movie.release_date}
                                time={movie.popularity}
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

export default Popular;