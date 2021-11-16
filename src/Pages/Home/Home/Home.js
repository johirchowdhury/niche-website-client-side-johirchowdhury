import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import NewestCollection from '../NewestCollection/NewestCollection';
import Review from '../Review/Review';
const Home = () => {
    return (

        <div >
            <Header></Header>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <NewestCollection></NewestCollection>
            <Footer></Footer>
        </div>

    );
};

export default Home;