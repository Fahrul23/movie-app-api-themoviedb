import React from 'react';
import './banner.scss';
import banner from '../../../assets/img/banner.jpg';
import { useHistory } from 'react-router-dom';

function Banner(props) {
    
    const id = 399566;    
    
    let history = useHistory();

    function handleClick(id){
        history.push(`/detail/${id}`);
    }

    return (
        <section class="banner">
            <div class="img-banner">
                <div class="title-banner">
                    <h1 onClick={()=> handleClick(id) }>Godzilla vs. Kong (2021)</h1>
                    <h4>Action, Science Fiction, Adventure, 1h 53m </h4>
                    <p>In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.</p>
                </div>
                <div class="img-movie" onClick={()=> handleClick(id) }>
                    <img src={banner} alt="" />
                </div>
            </div>
        </section>        
    );
}

export default Banner;