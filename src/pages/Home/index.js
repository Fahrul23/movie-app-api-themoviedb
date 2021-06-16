import React from 'react';
import { Header,Banner,Popular } from '../../components';
function Home(props) {
    return (
        <div>
            <Header />
            <Banner />
            <Popular />
        </div>
    );
}

export default Home;