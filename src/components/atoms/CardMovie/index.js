import React from 'react';
import { useHistory } from 'react-router-dom';
function CardMovie(props) {
    const {title,rilis,desc,image,id_movie} = props;
    
    let history = useHistory();

    function handleClick(id){
        history.push(`/detail/${id}`);
    }
    
    
    
    return (
            <div className="card-movies" onClick={()=> handleClick(id_movie) } >
                <img src={image} alt={title} />
                <div className="desc-movie">
                    <p>{title}</p>
                    <p>{rilis}</p>
                    <p>{desc}</p>        
                </div>
                <div className="opacity"></div>
            </div>
           );
}

export default CardMovie;