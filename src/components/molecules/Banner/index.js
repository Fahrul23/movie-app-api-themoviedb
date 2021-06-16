import React from 'react';
import './banner.scss';
function Banner(props) {
    return (
        <section class="banner">
            <div class="img-banner">
                <div class="title-banner">
                    <h1>Raya and the Last Dragon</h1>
                    <h4>Family . 2021</h4>
                    <p>Raya, afallen princes, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world</p>
                </div>
                <div class="img-movie">
                    <img src="https://gdb.voanews.com/B78962FE-1A74-4B08-8C58-E366677EAB82_cx0_cy15_cw0_w1080_h608_s.jpg" alt="banner" />
                </div>
            </div>
        </section>
        
    );
}

export default Banner;