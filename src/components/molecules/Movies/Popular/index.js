import React from 'react';
import './popular.scss';
import { CardMovie } from '../../../../components';
function Popular(props) {
    return (
        <div>
            <section class="movies popular">
            <div class="header-movies">
                <h3>What's Popular</h3>
            </div>

            <CardMovie 
                title="Raya and the Last Dragon"
                image="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7665/1007665-v-34100109d3e9"
                genres="action, family, adventure"
                rilis="03/18/2021"
                time="4h 23m"
                desc="manusia dan naga tinggal bersama di kumandra hingga ..."
            />
        </section>
        </div>
    );
}

export default Popular;