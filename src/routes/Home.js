import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LoadingScreen from '../components/nav/LoadingScreen';

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <AnimatePresence>
    { !showContent && <LoadingScreen loading={imagesLoaded<1} setShowContent={setShowContent} /> }
    </AnimatePresence>
    <div className={`home-container ${showContent && 'no-scroll'}`}>
      <motion.img
        className='cover-image'
        src='/assets/covers/home.png'
        onLoad={() => setImagesLoaded(p => p+1)}
      />
      <h1 className='cover-title full-container text-center'>WELCOME TO PARIS</h1>

      <p className='full-container text-center-home mbLarge'>Embark on a journey to the mesmerizing heart of France, where adventure and wonder await - Paris! Paris is the capital and most populous city of France, home to over 2.2 million people. Situated on the Seine River in the north of the country, it is in the center of the Île-de-France region. This vibrant capital holds a treasure trove of memories for you to discover, from the iconic Eiffel Tower's shimmering elegance to the Mona Lisa's enigmatic smile at the Louvre. Stroll along the Seine's romantic banks, savoring world-class cuisine in charming cafes, and lose yourself in the timeless charm of Montmartre. With its rich history, art, and culture, Paris is the ultimate destination for every traveler's bucket list. Paris is calling – answer the call of adventure and wanderlust today.</p>

      <div className='full-container-row mbLarge'>
        <div className='full-container-row-item'>
          <h2 className='mbSmall'>SEE.</h2>
          <img 
            src='/assets/covers/see-paris-home.png' alt="see paris"
            style={{width: "100%", height: '200px', objectFit: "cover", marginBottom: "10px"}}
          />
          <p>From the Eiffel Tower's soaring elegance to the Mona Lisa's enigmatic smile, Paris dazzles at every turn. Savor exquisite cuisine, explore historic landmarks, and embrace the romance of Montmartre. With world-class art, captivating history, and endless charm, Paris promises a journey of a lifetime.</p>
          <Link to="/attractions" style={{textDecoration: "none"}}>
            <p className='nav-link-button'>LEARN MORE</p>
          </Link>
        </div>
        <div className='full-container-row-item'>
          <h2 className='mbSmall'>EXPERIENCE.</h2>
          <img 
            src='/assets/covers/experience-paris-home.png' alt="experiences"
            style={{width: "100%", height: '200px', objectFit: "cover", marginBottom: "10px"}}
          />
          <p>Although Paris is home to some of the most well-known tourist attractions in the world—from the Eiffel Tower to the Palace of Versailles—the city also brims with a variety of hidden gems and local favorites. If you want to gain a new, authentic perspective and experience the city like a true Parisian, here are the top 10 non-touristy things you can do while you’re here.</p>
          <Link to="/activities" style={{textDecoration: "none"}}>
            <p className='nav-link-button'>LEARN MORE</p>
          </Link>
        </div>
        <div className='full-container-row-item'>
          <h2 className='mbSmall'>STAY.</h2>
          <img 
            src='/assets/covers/accomodations.png' alt="accomodations"
            style={{width: "100%", height: '200px', objectFit: "cover", marginBottom: "10px"}}
          />
          <p>Finding where to stay in Paris can be confusing and stressful, especially if this is your first visit. But first, you need to understand the Paris neighborhoods and how they are set up. This will help you understand my guide and where each location is in a bit more detail when I’m showing you the best places to stay in Paris.</p>
          <Link to="/accommodations" style={{textDecoration: "none"}}>
            <p className='nav-link-button'>LEARN MORE</p>
          </Link>
        </div>
      </div>

      <div className='full-container mbLarge'>
        <h2 className='text-center-home  mb'>The City of Light. The City of Love. The Fashion Capital of the World.</h2>
        <p className='text-center-home  mb'>
          Paris is a city that goes by many names. For centuries, Paris has been one of the most important and attractive destinations in the world. It is appreciated for the opportunities it offers for business and commerce, for study, for culture, and for entertainment; its gastronomy, haute couture, painting, literature, and intellectual community especially enjoy an enviable reputation. Its sobriquet “the City of Light” (“la Ville Lumière”), earned during the Enlightenment, remains appropriate, for Paris has retained its importance as a center for education and intellectual pursuits.
        </p>
        <p className='text-center-home  mb'>
          Paris's site at a crossroads of both water and land routes are significant not only to France but also to Europe, and the city has had a constant influence on the continent’s growth. Under Roman administration, in the 1st century BCE, the original site on the Île de la Cité was designated the capital of the Parisii tribe and territory. The Frankish king Clovis I had taken Paris from the Gauls by 494 CE and later made his capital there. Under Hugh Capet (ruled 987–996) and the Capetian dynasty, the preeminence of Paris was firmly established, and Paris became the political and cultural hub as modern France took shape. France has long been a highly centralized country, and Paris has come to be identified with a powerful central state, drawing to itself much of the talent and vitality of the provinces.
        </p>
        <p className='text-center-home mb'>
          The three main parts of historical Paris are defined by the Seine. At its center is the Île de la Cité, which is the seat of religious and temporal authority (the word cité connotes the nucleus of the ancient city). The Seine’s Left Bank (Rive Gauche) has traditionally been the seat of intellectual life, and its Right Bank (Rive Droite) contains the heart of the city’s economic life, but the distinctions have become blurred in recent decades. The fusion of all these functions at the center of France and, later, at the center of an empire, resulted in a tremendously vital environment. In this environment, however, the emotional and intellectual climate that was created by contending powers often set the stage for great violence in both the social and political arenas.
        </p>
      </div>
    </div>
    </>
  )
}

export default Home