import React from 'react';
import './banner.scss';
function Banner(props) {
    return (
        <section className="banner">
            <div className="img-banner">
                <div className="title-banner">
                    <h1>Rayaaaa and the Last Dragon</h1>
                    <h4>Family . 2021</h4>
                    <p>Raya, afallen princes, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world</p>
                </div>
                <div className="img-movie">
                    <img src="https://gdb.voanews.com/B78962FE-1A74-4B08-8C58-E366677EAB82_cx0_cy15_cw0_w1080_h608_s.jpg" alt="#"/>
                </div>
            </div>
        </section>
        
    );
}

export default Banner;