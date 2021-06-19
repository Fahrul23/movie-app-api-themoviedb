import React from 'react';
import { useHistory } from 'react-router-dom';
function CardMoviesTrailers(props) {
    
    const {title,desc,image,id_movie} = props;
    
    
    let history = useHistory();

    function handleClick(id){
        history.push(`/detail/${id}`);
    }
    
    return (
        <div class="card-movies-trailers" onClick={()=> handleClick(id_movie) }>
            <img src={image} alt="" />
            <div class="desc-movie-trailer">
                <div class="title-trailer">
                    <i class="fas fa-play"></i>
                    <p>{title} - Trailer</p>
                </div>  
                <p>{desc}</p>                 
            </div>
            <div class="opacity-trailer"></div>
            <div class="title-opacity-trailer">
                <i class="fas fa-play"></i>
                <p>{title} - Trailer</p>
            </div>
        </div>
                
    );
}

export default CardMoviesTrailers;