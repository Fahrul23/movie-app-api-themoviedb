import React, { useEffect, useState } from 'react';
import { Header} from '../../components';
import axios from 'axios';
import './detail.scss';
import { useParams } from 'react-router-dom';
export default function Detail(props) {
    
    
    const [movies, setMovies] = useState();
    const [loading,setLoading] = useState();
    const [runtimehour,setRuntimeHour]=useState();
    const [runtimeminute,setRuntimeMinute]=useState();
    const [credits,setCredits]=useState();
    const [director,setDirector]=useState();
    const [story,setStory]=useState();
    const {id} = useParams();
    const Moviesdata = async () =>{
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
                headers:{
                    'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                params:{
                    api_key : '23f9e1b2766556fcef37c45865d99a77',
                }
            });
            
            setMovies(response.data);
            
            const totalseconds = response.data.runtime * 60;
            const hour = Math.floor(totalseconds/3600);
            const countminute = totalseconds - hour * 3600;
            const minute = countminute / 60;
            setRuntimeHour(hour);
            setRuntimeMinute(minute);

            // console.log("data-movies :",response.data);
            // setLoading(true);
            // const hours = Math.floor(movies.runtime / 60);
            // const hourdata = Math.floor(movies.runtime / 60);
            // setRuntimeHour(hourdata);
            
        } catch (e) {
            console.log(e.message)
        }
    }
    const getCredits = async()=>{
        
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`,{
                headers:{
                    'Content-Type' : 'multipart/form-data; boundary=<calculated when request is sent>'
                },
                params:{
                    api_key : '23f9e1b2766556fcef37c45865d99a77',
                }
            });
            setCredits(response.data.crew);
            const story = [];
            const director=[]
            response.data.crew.map(crew =>{
                
                if(crew.known_for_department === "Writing"){    
                    return(
                        story.push(crew.name)
                    ) 
                }
                else if(crew.known_for_department === "Directing"){    
                    return(
                        director.push(crew.name)
                    ) 
                } 
                return (
                    story
                )
            });
            setDirector(director)
            setStory(story)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(()=>{
        Moviesdata();
        getCredits();
    },[])

    return (
        <div>
            <Header />
           
            {
                movies ?     
                <section class="detail-movie">
                    <div class="poster">
                        <div class="movie-card">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movies.poster_path}`} alt="img-cover" />
                        </div>
                        <div class="movie-footer">
                            <div class="provider">
                                <img src="https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg" alt="" />                    
                            </div>
                            <div class="text">
                                <h5>Now Streaming</h5>
                                <h5>Watch Now</h5>
                            </div>
                        </div>
                    </div> 
                    <div class="content">      
                        <div class="title-wrapper">
                            <div class="title"> 
                                <h1>{movies.original_title}</h1>
                                <span>(2021)</span>
                            </div>
                            <div class="info">
                                <p class="release">{movies.release_date}</p>
                                <p class="genres">
                                    {
                                        movies.genres.map(genre =>{
                                            return(
                                                genre.name  + ','
                                            )
                                        })
                                    }
                                </p>
                                <p class="runtime">{runtimehour}h {runtimeminute}m</p>
                            </div>
                        </div>
                        <div class="action">
                            <div class="chart">
                                <div class="percent">
                                    <h2>{movies.vote_average * 10}</h2>
                                    <p>%</p>
                                </div>
                                <div class="user-score">
                                    <p>User</p>
                                    <p>Score</p>
                                </div>
                            </div>
                            <div class="list custome-list">
                                <i class="fas fa-list-ul"></i>
                            </div>
                            <div class="list favorite-list">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="list watchlist">
                                <i class="fas fa-bookmark"></i>
                            </div>
                            <div class="list rating">
                                <i class="fas fa-star"></i>
                                
                            </div>
                            <div class="vidio-trailer">
                                <i class="fas fa-play"></i>
                                <p>Play Trailer</p>
                            </div>
                        </div>
                        <div class="movie-info">
                            <h3 class="tagline">{movies.tagline}</h3>
                            <h3 class="Overview">Overview</h3>
                            <p>{movies.overview}</p>
                        </div>
                        <div class="people-info">
                            {
                                director ?
                                director.map(director=>{
                                        return(                
                                            <div class="profile">
                                                <p>{director}</p>
                                                <p>Director</p>
                                            </div>
                                        )
                                    }
                                )
                                : ""
                            }
                            {
                                story ?
                                story.map(story=>{
                                        return(                
                                            <div class="profile">
                                                <p>{story}</p>
                                                <p>story</p>
                                            </div>
                                        )
                                    }
                                )
                                : ""
                            }
                        </div>
                    </div>
                </section>
                : <p>loading</p>
                }
        </div>
    );
}
