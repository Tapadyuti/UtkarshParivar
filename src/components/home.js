import React from 'react';
//import Banner from './features/banner';
import CardHorizontal from './features/cardHorizontal';
import { homeCards } from '../modals/horizontalCard';
const Home = () => {

  return (
    <div>
      {/* <Banner /> */}
      {homeCards.map((item, index)=> <CardHorizontal key={'Home_'+index} card={item} />)}
      
    </div>
  )
}

export default Home