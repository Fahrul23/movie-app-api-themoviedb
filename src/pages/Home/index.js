import React from 'react';
import { Header,Banner,Popular,Trending,TopRated,UpComing,NowPlaying } from '../../components';
function Home(props) {
    return (
        <div>
            <Header />
            <Banner />
            <Popular />
            <Trending />
            <TopRated />
            <UpComing/>
            <NowPlaying/>
        </div>
    );
}

export default Home;