import React from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import MenuList from '../../components/MenuList/MenuList';
import PopularDishes from '../../components/PopularDishes/PopularDishes';
import ShowPieceCart from '../../components/ShowPiece/ShowPieceCart';

function Home( ) {
    return (
      <div>
        <HomeBanner />
        <MenuList />
        <ShowPieceCart />
        <PopularDishes />
        
        {
        /* 
       <Menu/>
      <MenuOfTheDay/>
      <Features />
      <Sorting />
      <Shop/>
      <Blogs/>  
     <SignUpForm/>  
     <LoginForm/>   */}
      </div>
    );
}

export default Home;