import React from 'react'
import { motion } from 'framer-motion'
import Card from '../components/attractions/Card'

const Activities = () => {
  return (
    <div className='home-container'>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/activities.png'
      />
      <h1 className='text-center cover-title'>EXPERIENCE PARIS</h1>

      <div className='full-container text-center'>
        <h3 style={{marginBottom: "20px"}}>Paris is best experienced as a local. Here are the ten best non-touristy things to do in Paris.</h3>
      </div>

      <div className='full-container2 text-center'>
        <h4>Flâne in the Streets of Paris</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          The best way to experience Paris like a local is to stroll (“flâner” in French) and to allow yourself to get lost in the City of Lights. Indeed, by far the best activity to do in Paris is to walk. A walk along the Seine will take you to all the places you have always dreamed to see, and will give you a real feeling of the city. You can start at Pont de Bir-Hakeim for a beautiful view of the Eiffel Tower and walk towards it. If you keep going in that direction along the Seine, you will see the famous bridges (Pont Alexandre III), the museums (Louvre, Musée d’Orsay, Grand Palais, the islands (Île de la Cité, Île Saint-Louis), etc.
        </p>
      </div>
      <div className='full-container2 text-center'>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <img src='/assets/paris-alal/paris-coffee.jpg' style={{width: "48%"}} />
          <img src='/assets/paris-alal/paris-coffee-2.jpg' style={{width: "48%"}} />
        </div>
        <h4>Take the Time to Enjoy Your Coffee</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          Sitting in a café and watching the world go by, that’s the true richness of life. And Paris is certainly the best place to people watch. Parisians aren’t afraid to head to a café alone. So, take the time to see Paris like a local, head to any bistro or café, order your espresso (with a glass of water on the side), and people watch. You’ll be surrounded by people chatting, smoking, and doing what everyone else is doing: watching the Paris scene unfold in real life.
        </p>
      </div>

      <div className='full-container2 text-center'>
        <h4>Visit Small Historic Museums</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          Sure the Louvre, the Musée d’Orsay, the Pompidou Centre, and Paris’s other major museums are all worth a visit at some point in your life, but if you want to see Paris like a local, see some of the lesser-known museums. Here are a few of my favorite ones:
        </p>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Card hasLink={false} info={{name: "Musée de la Vie Romantique", image: "/assets/paris-alal/musee-vie-romantique.jpg", subtitle: "Housed in a charming hôtel particulier dating back to 1830"}} />
          <Card hasLink={false} info={{name: "Musée Jacquemart-André", image: "/assets/paris-alal/musee-vie-romantique.jpg", subtitle: "Inside an opulent 19th-century mansion"}} />
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <Card hasLink={false} info={{name: "Le Petit Palais", image: "/assets/paris-alal/musee-vie-romantique.jpg", subtitle: "It was built for Paris’ 1900 World Fair and it became a museum in 1902, it’s a charming small museum that’s easy to cover in an hour or so."}} />
          <Card hasLink={false} info={{name: "Musée de Montmartre", image: "/assets/paris-alal/musee-vie-romantique.jpg", subtitle: "It was once home to the likes of Renoir and dates all the way back to the 17th Century, making it one of the oldest houses in the arrondissement"}} />
        </div>
      </div>
      <div className='full-container2'>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",marginBottom: "20px"}}>
          <img src='/assets/paris-alal/open-air-market.jpg' style={{width: "48%"}} />
        </div>
        <h4>Stroll the Markets</h4>
        <p style={{marginBottom: "20px", marginTop: "10px"}}>
          If you want to live in Paris like a local, you have to go to one of the many open-air markets that can be found throughout the city! Here are below a few of my favorite ones:
        </p>
        <ul>
          <li>
            Marché des Enfants Rouges (3rd Arr.): the oldest market of Paris since 1615.
          </li>
          <li>
            Marché Saxe-Breteuil (7th Arr.)
          </li>
          <li>
          The Marché President-Wilson (16th Arr.)
          </li>
          <li>
          Le Marché Saint-Germain-des-Prés (6th Arr.)
          </li>
          <li>
          The Marché aux fleurs on the Île de la Cité (1st Arr.)
          </li>
        </ul>
      </div>
      
      <div className='full-container2 text-center'>
        <h4>Head to One of Paris’s Many Parks</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          While Paris is often accused of lacking in green spaces in comparison with other European capitals, there are still several great spots to choose from. Some personal favorites include the Parc des Buttes Chaumont (19th Arr., make sure to visit the guinguette Rosa Bonheur), the Parc Monceau (8th Arr.), the Jardin des Tuileries (1st Arr.), and the Jardin du Luxembourg (6th Arr.). Pretty and filled with follies and greenery, they are the perfect places to hang out, relax and read a book.
        </p>
      </div>

      <div className='full-container2 text-center'>
        <h4>Enjoy The View From Galeries Lafayette Rooftop Terrace</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          If you go to the Galeries Lafayette — one of the oldest shopping establishments in Paris — make sure to go up to the terrace. There, you will enjoy the magic of the city, its architecture, and of course, the Eiffel Tower right in front of you, and without all the crowds. It’s definitely one of the best panoramic views of Paris!
        </p>
      </div>



{/* [Insert image to the right with text to the left: /seine-picnic] */}
      <div className='full-container2 text-center'>
        <h4>Enjoy Picnic Along The Seine</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          In the summer months, most Parisians enjoy a picnic along the banks of the Seine. So if you want to experience Paris like a local, head to a local supermarket, pick up some Parisian picnic essentials (French cheese and charcuterie, wine, baguettes), and search for a picnic spot along the Seine. One of my favorite spots is the Place Louis Aragon on the Île Saint-Louis.
        </p>
      </div>

      <div className='full-container2 text-center'>
        <h4>Buy Unique Souvenirs At Saint-Ouen’s Flea Market</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          Every Saturday-Monday, Le Marché aux Puces de Saint-Ouen — the world’s largest antique market — is open for business. Vendors sell everything from 18th-century dressers to old, leather-bound novels, furniture, jewelry, toys, books, decor, and plenty more odd-and-ends. It’s a spectacular place for finding one-of-a-kind Paris souvenirs, though it does get crowded during the early afternoons on weekends.
        </p>
      </div>

      <div className='full-container2'>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",marginBottom: "20px"}}>
          <img src='/assets/paris-alal/concept-store-empreintes.jpg' style={{width: "48%"}} />
        </div>
        <h4>Go Shopping At Paris’s Many Concept Stores</h4>
        <p style={{marginBottom: "20px", marginTop: "10px"}}>
        Ever since Colette closed down, concept stores have been popping up all over the city to no end. Here are a few of my favorite ones:
        </p>
        <ul>
          <li>
            Merci: the most recognized concept store in Paris and indeed one of the largest, Merci has everything French from soap brands to handbags and linen labels.
          </li>
          <li>
            Fleux: With a privileged place for lifestyle, design, and decoration, its six stores spread over 1,500 square meters unveil an open and sharp selection of furniture, lighting, tableware, clothing, fashion accessories, or high-tech.
          </li>
          <li>
            Empreintes: With a 600 square meter surface area, 4 floors and over 1000 objects, this concept store situated in the Upper Marais is sure to satisfy all desires, with a number of rare pieces and in limited editions.
          </li>
          <li>
            nous: Launched by two former members of the late concept store Colette, this place is somewhere between streetwear, high tech, accessories, and books with underground influences.
          </li>
          <li>
            Frenchtrotters: This place offers the ideal Parisienne wardrobe.
          </li>
        </ul>
        <p style={{marginBottom: "20px", marginTop: "10px"}}>
        Also, if you love shopping at department stores, Parisians will prefer Printemps, BHV Marais (Bazar de l’Hôtel de Ville) and Le Bon Marché to the Galeries Lafayette.
        </p>
      </div>

      {/* [Insert image to the left with text to the right: /passage-verdeau] */}
      <div className='full-container2'>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",marginBottom: "20px"}}>
          <img src='/assets/paris-alal/passage-verdeau.jpg' style={{width: "48%"}} />
        </div>
        <h4>Wander Through Beautiful Covered Galleries</h4>
        <p style={{marginBottom: "20px", marginTop: "10px"}}>
        Here are a few of the best-covered galleries in Paris:
        </p>
        <ul>
          <li>
            Galerie Vivienne (2nd Arr.): an upscale dining and shopping area decked in golden hues.
          </li>
          <li>
            Passage des Panoramas (2nd Arr.): considered to be the first covered walkway in Paris.
          </li>
          <li>
The Passage Brady (10th Arr.): Also known as “Little India” because of its plethora of Indian shops and restaurants.
          </li>
          <li>
Passage du Grand-Cerf (2nd Arr.)
          </li>
          <li>
The Passage Verdeau (3rd Arr.)
          </li>
          <li>
Passage des Princes (2nd Arr.)
          </li>
        </ul>
      </div>





    </div>
  )
}

export default Activities