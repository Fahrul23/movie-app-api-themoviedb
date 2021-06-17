import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardMovie } from '../../../../components/index';
function GetMovies(props) {
    const [movies,setMovies] = useState({});
    const [genres,setGenres] = useState();
    const [loading, setLoading] = useState(false)
    
    const Moviesdata = async () =>{
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
    useEffect(()=>{
        Moviesdata();
        console.log("genre-new",genres);
    },[])

    return (
        <>
        {
            loading ? movies.map((movie,index)=>{
                
                return(
                    <CardMovie 
                        key={index}
                        image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        title={movie.original_title}
                        genres={movie.genre_ids}
                        rilis={movie.release_date}
                        time={movie.popularity}
                        desc={movie.overview}
                    />
                )
            }) : <p>datatidak</p>
        }
        </>
    )
}

export default GetMovies;