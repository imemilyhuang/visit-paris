import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import Card from '../components/attractions/Card'

const Accommodations = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const data1 = [{name: "Ritz Paris", image: "/assets/hotels/ritz-paris.jpg", subtitle: "15 Pl. Vendôme, 75001 Paris, France", link: "https://ritzparis.com/en-GB"},
  {name: "Nolinski Paris", image: "/assets/hotels/nolinski-paris.jpg", subtitle: "16 Av. de l'Opéra, 75001 Paris, France", link: "https://nolinskiparis.com/en/"},
    {name: "Maison Albar Hôtels Le Pont-Neuf", image: "/assets/hotels/maison-albar.jpeg", subtitle: "23-25 Rue du Pont Neuf, 75001 Paris, France", link: "https://www.maison-albar-hotels-le-pont-neuf.com/en/"},
    {name: "Hôtel Regina Louvre", image: "/assets/hotels/hotel-regina.jpeg", subtitle: "2 Pl. des Pyramides, 75001 Paris, France", link: "https://www.regina-hotel.com/en/"},
    {name: "Le Meurice", image: "/assets/hotels/le-meurice.png", subtitle: "228 Rue de Rivoli, 75001 Paris, France", link: "https://www.dorchestercollection.com/paris/le-meurice"},
    {name: "Le Roch Hotel & Spa", image: "/assets/hotels/le-roch.jpeg", subtitle: "28 Rue Saint-Roch, 75001 Paris, France", link: "https://www.leroch-hotel.com/"},
  ]
  const renderInfo1 = data1.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))

  const data918 = [
    {name: "1er Étage SoPi", image: "/assets/hotels/1er-etage.jpeg", subtitle: "34 Rue Jean-Baptiste Pigalle, 75009 Paris, France", link: "https://1eretagesopi.com/en/"},
    {name: "Hôtel R de Paris", image: "/assets/hotels/hotel-r.jpeg", subtitle: "41 Rue de Clichy, 75009 Paris, France", link: "https://www.hotelrdeparis.com/en"},
    {name: "Hôtel Adèle & Jules", image: "/assets/hotels/hotel-adele.jpeg", subtitle: "2 Cité Rougemont, 75009 Paris, France", link: "https://en.hoteladelejules.com/"},
    {name: "Le Relais Montmartre", image: "/assets/hotels/le-relais.avif", subtitle: "6 Rue Constance, 75018 Paris, France", link: "https://www.hotel-relais-montmartre.com/en/boutique-hotel-paris"},
    {name: "Maison Souquet", image: "/assets/hotels/maison-souquet.jpeg", subtitle: "10 Rue de Bruxelles, 75009 Paris, France", link: "https://www.maisonsouquet.com/en/"},
    {name: "Hôtel The Playce by Happyculture", image: "/assets/hotels/hotel-the-playce.jpeg", subtitle: "66 Bd Barbès, 75018 Paris, France", link: "https://www.playce-hotel.com/en/"},
  ]
  const renderInfo918 = data918.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))

  const data56 = [
    {name: "Hôtel Monte Cristo", image: "/assets/hotels/hotel-montecristo.jpeg", subtitle: "20-22 Rue Pascal, 75005 Paris, France", link: "https://www.hotelmontecristoparis.com/en/"},
    {name: "Hôtel Baume", image: "/assets/hotels/hotel-baume.jpeg", subtitle: "7 Rue Casimir Delavigne, 75006 Paris, France", link: "https://www.baume-hotel-paris.com/"},
    {name: "Hôtel Monge", image: "/assets/hotels/hotel-monge.jpeg", subtitle: "55 Rue Monge, 75005 Paris, France", link: "https://www.hotelmonge.com/en/"},
    {name: "Hôtel D’Aubusson", image: "/assets/hotels/hotel-daubusson.jpeg", subtitle: "33 Rue Dauphine, 75006 Paris, France", link: "https://www.hoteldaubusson.com/"},
    {name: "Relais Christine", image: "/assets/hotels/relais-christine.jpeg", subtitle: "3 Rue Christine, 75006 Paris, France", link: "https://www.relais-christine.com/en/"},
    {name: "Victoire & Germain", image: "/assets/hotels/victorie-germain.jpeg", subtitle: "9 Rue Grégoire de Tours, 75006 Paris, France", link: "https://www.victoireetgermainhotel.com/en/"},
  ]
  const renderInfo56 = data56.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))

  const data2 = [
    {name: "The Hoxton Hotel", image: "/assets/hotels/hoxton-hotel.webp", subtitle: "30-32 Rue du Sentier, 75002 Paris, France", link: "https://thehoxton.com/paris/"},
    {name: "Hôtel des Grands Boulevards", image: "/assets/hotels/hotel-des-grands.jpeg", subtitle: "17 Bd Poissonnière, 75002 Paris, France", link: "https://www.grandsboulevardshotel.com/"},
    {name: "La Maison Favart", image: "/assets/hotels/maison-favart.jpeg", subtitle: "5 Rue de Marivaux, 75002 Paris, France", link: "https://www.lamaisonfavart.com/en/"},
    {name: "Hôtel du Sentier", image: "/assets/hotels/hotel-du-sentier.jpeg", subtitle: "48 Rue du Caire, 75002 Paris, France", link: "https://www.hoteldusentier.com/en"},
    {name: "Park Hyatt Paris Vendôme", image: "/assets/hotels/park-hyatt.jpeg", subtitle: "5 Rue de la Paix, 75002 Paris, France", link: "https://www.hyatt.com/en-US/hotel/france/park-hyatt-paris-vendome/parph"},
    {name: "Hôtel Saint-Marc", image: "/assets/hotels/saint-marc.jpg", subtitle: "36 Rue Saint-Marc, 75002 Paris, France", link: "https://hotelsaintmarc.com/en/"},
  ]
  const renderInfo2 = data2.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))

  const data7 = [
    {name: "Le Narcisse Blanc", image: "/assets/hotels/le-narcisse-blanc.jpeg", subtitle: "19 Bd de la Tour-Maubourg, 75007 Paris, France", link: "https://www.lenarcisseblanc.com/en/"},
    {name: "Hôtel Muguet", image: "/assets/hotels/muguet.jpg", subtitle: "11 Rue Chevert, 75007 Paris, France", link: "https://hotelparismuguet.com/en/"},
    {name: "Hôtel Eiffel Turenne", image: "/assets/hotels/eiffel-turenne.jpeg", subtitle: "20 Av. de Tourville, 75007 Paris, France", link: "https://www.hoteleiffelturenne.com"},
    {name: "J.K. Place Paris", image: "/assets/hotels/jk-place.jpeg", subtitle: "82 Rue de Lille, 75007 Paris, France", link: "https://www.jkplace.paris/"},
    {name: "Hôtel Duc De St-Simon", image: "/assets/hotels/duc-de-st-simon.jpeg", subtitle: "14 Rue de Saint-Simon, 75007 Paris, France", link: "https://hotelducdesaintsimon.com/en/"},
    {name: "Hôtel d’Orsay", image: "/assets/hotels/d-orsay.jpeg", subtitle: "93 Rue de Lille, 75007 Paris, France", link: "https://en.paris-hotel-orsay.com/"},
  ]
  const renderInfo7 = data7.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))
  const data34 = [
    {name: "Pavillon de la Reine", image: "/assets/hotels/pavillon-de-la-reine.webp", subtitle: "28 Pl. des Vosges, 75003 Paris, France", link: "https://en.pavillon-de-la-reine.com/"},
    {name: "Hôtel Jules & Jim", image: "/assets/hotels/hotel-jules.jpeg", subtitle: "11 Rue des Gravilliers, 75003 Paris, France", link: "https://www.hoteljulesetjim.com/"},
    {name: "Hôtel National Arts & Métiers", image: "/assets/hotels/hotel-national-arts.webp", subtitle: "243 Rue Saint-Martin, 75003 Paris, France", link: "https://www.hotelnational.paris/en/"},
    {name: "La Chambre du Marais", image: "/assets/hotels/chambre-du-marais.jpeg", subtitle: "87 Rue des Archives, 75003 Paris, France", link: "https://lachambredumarais.com/en/"},
    {name: "Hôtel Du Jeu De Paume", image: "/assets/hotels/hotel-du-jeu.jpeg", subtitle: "54 Rue Saint-Louis en l'Île, 75004 Paris, France", link: "https://www.jeudepaumehotel.com/en/"},
    {name: "Cour des Vosges", image: "/assets/hotels/cour-des-vosges.jpeg", subtitle: "19 Pl. des Vosges, 75004 Paris, France", link: "https://courdesvosges.com/en/"},
  ]
  const renderInfo34 = data34.map(item => (
    <Card info={item} hasLink={false} key={item.name} />
  ))

  return (
    <div className='home-container'>
      <AnimatePresence>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/accomodations.png'
      />
      </AnimatePresence>
      <h1 className='full-container cover-title'>STAY IN PARIS</h1>
      
      <div className='full-container mbLarge align-left'>
        <p className='mbSmall'>
          Finding where to stay in Paris can be confusing and stressful, especially if this is your first visit. But first, you need to understand the Paris neighborhoods and how they are set up. This will help you understand my guide and where each location is in a bit more detail when I’m showing you the best places to stay in Paris below. 
        </p>
        <p className='mbSmall'>
          Paris is set up into 20 “arrondissements” or neighborhoods. The neighborhoods begin with the 1st Arrondissement, which is located in the center of Paris near the Louvre, and they unfurl across the city like a wheel or a clock. There is no neighborhood that is better than others; each has its own unique charm and character. Here, I’m analyzing their characteristics so that you can find the one that best suits what you are looking for when staying in Paris.
        </p>
      </div>

      <div className='full-container mbSmall'>
        <h4 className='mbSmall' style={{width: "100%"}}>The 1st: Best Neighborhood In Paris For Sightseeing</h4>
        <p className='mbSmall'>
          If you plan to do a lot of sightseeing, stay in the 1st Arrondissement. Indeed, many of Paris’s most famous landmarks are in this district, and you’ll be well-positioned to see many others. Art lovers will enjoy staying in this district near the Louvre Museum, the Musée des Arts Décoratifs, and the Impressionist treasures at the Musée de l’Orangerie. Admire the beautifully stained glasswork of Sainte-Chapelle, stroll through the Tuileries Garden, and enjoy a glass of wine at one of the quaint cafes lining the garden of the Palais Royale. Also, shoppers will delight in discovering the elegant shops along the Rue de Rivoli and the trendy boutiques in the lively Les Halles quarter.
        </p>
        <p className='mbSmall'>
          The Place Vendome, the beautiful plaza where Coco Chanel used to live, is also home to the newly renovated Ritz Paris, where you can have a drink at the Hemingway Bar. You’re also within easy walking distance of Notre Dame Cathedral, the Centre Pompidou, Champs-Elysées, and just across the river from the Musée D’Orsay and Saint-Germain-des-Prés. This is one of the most expensive areas to stay in while in Paris but I highly recommend it if you come to spend a few days and want to be close to all the tourist monuments.
        </p>
        <p className='mbSmall' style={{width: "100%"}}>Where To Stay In The 1st Arrondissement</p>
      </div>
      <div className='grid-wrapper mb'>
        {renderInfo1}
      </div>

      <div className='full-container mbSmall align-left'>
        <h4 className='mbSmall'>The 7th: Best Neighborhood In Paris To Stay For First Timer</h4>
        <p className='mbSmall'>
          The 7th is the perfect place to stay for first-time visitors to Paris! Indeed, in this district, you’re a stone’s throw away from many of the city’s landmarks, including the Eiffel Tower, Parc du Champ de Mars, the Invalides, Musée Rodin, the incomparable Musée d’Orsay, and the cutting edge Musée du Quai Branly to name a few. With some of the most beautiful architecture in the city and the charming market street Rue Cler, you’ll experience what most people think of when they envision Paris. The 7th is considered one of the best walking neighborhoods.
        </p>
        <p className='mbSmall semiBold'>Where To Stay In The 7th Arrondissement</p>
      </div>
      <div className='grid-wrapper mb'>
        {renderInfo7}
      </div>

      <div className='full-container mbSmall align-left'>
        <h4 className='mbSmall'>The Marais (3rd and 4th): Best Neighborhoods In Paris For Shopping</h4>
        <p className='mbSmall'>
          The Marais neighborhood dates from the 17th century when noblemen began building large mansions here. Once the haunt of the old nobility, the Marais neighborhood in Paris’ 3rd and 4th Arrondissements is a popular and thriving community known for its trendy boutiques, restaurants, and wonderful museums. From chic boutiques filled with local Parisian designers, French chains like Sandro or IRO — check the best affordable French fashion brands to shop for — international brands, or more upscale shopping, Le Marais caters to both men and women at almost every price point. And if most tourists head to the Galeries Lafayette, stylish Parisians prefer to shop at BHV (short for Bazar de l’Hôtel de Ville).
        </p>
        <p className='mbSmall'>
          Be sure to visit the Musée Carnavalet, dedicated to the history of Paris. Le Marais is also home to the Musée Picasso, containing an unparalleled collection of works by this famous modern artist. Don’t forget to visit the tiny Île de la Cité and Île Saint-Louis where the history of Paris begins. Plus, don’t miss the peaceful Place Dauphine on the Île de la Cité with its lovely cafés and restaurants.
        </p>
        <p className='mbSmall'>Where To Stay In The 3rd And 4th Arrondissements</p>
      </div>
      <div className='grid-wrapper mb'>
        {renderInfo34}
      </div>

      <div className='full-container mbSmall align-left'>
        <h4 className='mbSmall'>Also Great for Shopping: The 2nd / Sentier Neighborhood</h4>
        <p className='mbSmall'>
          Even though the 2nd Arrondissement is the smallest of Paris’s 20 districts and overlooked by many guidebooks, it actually packs in lots of interesting things to do and see into its small size. You can explore the city’s largest concentration of 19th-century historic glass-roofed arcades (Galerie Vivienne, the Passage du Grand-Cerf, and the Passage Choiseul), and dine in the popular Asian restaurants along Rue Sainte-Anne, and buy cheese, wine, and baguettes in the wonderful pedestrian-only Rue Montorgueil market street. Also, don’t forget to visit Stohrer, the oldest still-in-operation boulangerie in the entirety of the capital which has been in business since 1730 when it was founded by Louis XV’s pastry chef. 
        </p>
        <p className='mbSmall'>
          At the eastern end of the 2nd Arrondissement, you can explore the Sentier neighborhood, still filled with wholesale textile stores and garment manufacturers although they are now losing ground to hip bistros, bars, and upscale hotels. Sentier is definitely one of the best neighborhoods to experience Paris like a local Parisian.
        </p>
        <p className='mbSmall'>Where To Stay In The 2nd Arrondissement</p>
      </div>
      <div className='grid-wrapper mb'>
        {renderInfo2}
      </div>
      <div className='full-container mbSmall align-left'>
        <h4 className='mbSmall'>The 5th And 6th: Best Neighborhoods In Paris For Families</h4>
        <p className='mbSmall'>
          The 6th Arrondissement is located on the Left Bank (“Rive Gauche”) and is home to the atmospheric Saint-Germain-des-Prés quarter, the Latin Quarter, and the Luxembourg Gardens. The 5th and 6th are highly central with great playgrounds and easily walkable with access to shops, sites, and restaurants. Family-friendly highlights include the National Museum of Natural History and the botanical garden known as Jardin des Plantes.
        </p>
        <p className='mbSmall'>
          The 5th is very central — maybe not as connected by metro — and offers a quieter, village-like feel. The 6th is more artistic and filled with art galleries and antique shops, as well as some of the city’s best small art museums. It’s also where you’ll find the impressive Musée de Cluny and two of Paris’ most famous cafés, Café de Flore and Les Deux Magots.
        </p>
        <p className='mbSmall'>Where To Stay In The 5th And 6th Arrondissements</p>
      </div>

      <div className='grid-wrapper mb'>
      {renderInfo56}
      </div>

      <div className='full-container mbSmall align-left'>
        <h4 className='mbSmall'>The 9th And 18th: Most Romantic Neighborhoods In Paris</h4>
        <p className='mbSmall'>
        Lovers of French movie Amélie will adore Montmartre, Paris’s pretty 18th Arrondissement, home to many of the cult film’s quirky brasseries, parks, and cobbled streets (including Café des Deux Moulins at 15 rue Lepic). In the 19th century, Montmartre was a haunt for artists and bohemians including Monet, Renoir, Picasso, Van Gogh, and Toulouse-Lautrec. This neighborhood offers breathtaking views while retaining a quaint, village-like charm. And it’s the perfect place for a honeymoon visit or romantic outing. Don’t miss the Sacré Coeur, and enjoy one of the best views of Paris.
        </p>
        <p className='mbSmall'>
        The 18th is bordered by the more central 9th Arrondissement, which is home to the historic Palais Garnier opera house, museums, and theaters. Also, the former red-light district Pigalle has reinvented itself, with trendy SoPi (South Pigalle) a great neighborhood for foodies. Don’t forget to wander in the street Rue Notre Dame de Lorette and to visit the Musée de la Vie Romantique.
        </p>
        <p className='mbSmall'>Where To Stay In The 9th And 18th Arrondissements</p>
      </div>

      <div className='grid-wrapper mb'>
        {renderInfo918}
      </div>

      <div className='full-container mb align-left'>
        <h4 className='mbSmall'>The 8th, 15th, 16th, and 17th</h4>
        <p className='mbSmall'>
        Finally, the 8th, 15th, 16th, and 17th are great and safe Arrondissements, but these are more residential areas. That’s why I would not recommend these places to stay in Paris, especially if you want to be central and in a district easily walkable with access to shops, sites, and restaurants.
        </p>
      </div>
      <div className='full-container mbLarge align-left'>
        <h4 className='mbSmall'>Areas To Avoid In Paris</h4>
        <p className='mbSmall'>Paris is generally a safe city. However, there are a few places I’ll recommend avoiding in Paris when you visit:</p>
        <ul>
          <li>The Gare du Nord / Gare de l’Est area at night.</li>
          <li>The area around Porte de Montreuil in the 20th district, in the Saint Blaise neighborhood at late hours.</li>
          <li>Northern 18th and 19th district, specifically at night, around Marx Dormoy, Porte de la Chapelle, La Chappelle, Porte de Clignancourt, Porte de la Villette, Barbès, Goutte D’or, Chateau Rouge, Stalingrad. Montmartre is a very safe area day and night. Pigalle is safe too, there are a lot of tourists and police there, but maybe you can feel disturbed by the adult shops if you go there with kids.</li>
          <li>Around Châtelet Les Halles at night.</li>
          <li>The Bois de Boulogne: during the daytime, this park is perfectly safe because it is very active and crowded, but never under any circumstances should you go there at night. I would recommend that you avoid this area after dark as it has a reputation for being frequented by questionable characters.</li>
        </ul>
      </div>
    </div>
  )
}

export default Accommodations