import React from 'react';

function CardMovie(props) {
    const {title,genres,rilis,time,desc,image} = props;
    return (
        <div class="movies-wrapper">
            <div class="card-movies">
                <img src={image} alt={title} />
                <div class="desc-movie">
                    <p>{title}</p>
                    <p>{genres}</p>
                    <p>{rilis},{time}</p>
                    <p>{desc}</p>        
                </div>
                <div class="opacity"></div>
            </div>
        </div>
    );
}

export default CardMovie;