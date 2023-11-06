import { motion } from 'framer-motion'
import React from 'react'

const Accommodations = () => {
  return (
    <div className='home-container'>
      <motion.img 
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        className='cover-image'
        src='/assets/covers/accomodations.png'
      />
      <h1 className=' cover-title'>STAY IN PARIS</h1>


      <div className='full-container '>
        <p style={{marginBottom: "20px"}}>
        Finding where to stay in Paris can be confusing and stressful, especially if this is your first visit. But first, you need to understand the Paris neighborhoods and how they are set up. This will help you understand my guide and where each location is in a bit more detail when I’m showing you the best places to stay in Paris below. 
        </p>
        <p style={{marginBottom: "20px"}}>
Paris is set up into 20 “arrondissements” or neighborhoods. The neighborhoods begin with the 1st Arrondissement, which is located in the center of Paris near the Louvre, and they unfurl across the city like a wheel or a clock. There is no neighborhood that is better than others; each has its own unique charm and character. Here, I’m analyzing their characteristics so that you can find the one that best suits what you are looking for when staying in Paris.
        </p>
      </div>

      <div className='full-container2 '>
        <h4>The 1st: Best Neighborhood In Paris For Sightseeing</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          If you plan to do a lot of sightseeing, stay in the 1st Arrondissement. Indeed, many of Paris’s most famous landmarks are in this district, and you’ll be well-positioned to see many others. Art lovers will enjoy staying in this district near the Louvre Museum, the Musée des Arts Décoratifs, and the Impressionist treasures at the Musée de l’Orangerie. Admire the beautifully stained glasswork of Sainte-Chapelle, stroll through the Tuileries Garden, and enjoy a glass of wine at one of the quaint cafes lining the garden of the Palais Royale. Also, shoppers will delight in discovering the elegant shops along the Rue de Rivoli and the trendy boutiques in the lively Les Halles quarter.
        </p>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
          The Place Vendome, the beautiful plaza where Coco Chanel used to live, is also home to the newly renovated Ritz Paris, where you can have a drink at the Hemingway Bar. You’re also within easy walking distance of Notre Dame Cathedral, the Centre Pompidou, Champs-Elysées, and just across the river from the Musée D’Orsay and Saint-Germain-des-Prés. This is one of the most expensive areas to stay in while in Paris but I highly recommend it if you come to spend a few days and want to be close to all the tourist monuments.
        </p>
        <p>Where To Stay In The 1st Arrondissement</p>
        <ul>
          <li>Ritz Paris</li>
          <li>
Maison Albar Hôtels Le Pont-Neuf
          </li>
          <li>
Nolinski Paris
          </li>
          <li>
Hôtel Regina Louvre
          </li>
          <li>
          Le Meurice
          </li>
          <li>
          Le Roch Hotel & Spa
          </li>
        </ul>
      </div>
      <div className='full-container2 '>
        <h4>The 7th: Best Neighborhood In Paris To Stay For First Timer</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        The 7th is the perfect place to stay for first-time visitors to Paris! Indeed, in this district, you’re a stone’s throw away from many of the city’s landmarks, including the Eiffel Tower, Parc du Champ de Mars, the Invalides, Musée Rodin, the incomparable Musée d’Orsay, and the cutting edge Musée du Quai Branly to name a few. With some of the most beautiful architecture in the city and the charming market street Rue Cler, you’ll experience what most people think of when they envision Paris. The 7th is considered one of the best walking neighborhoods.
        </p>
        <p>Where To Stay In The 7th Arrondissement</p>
        <ul>
          <li>Le Narcisse Blanc</li>
          <li>
          Hôtel Muguet
          </li>
          <li>Hôtel Eiffel Turenne

          </li>
          <li>
J.K. Place Paris
          </li>
          <li>
Hôtel Duc De St-Simon
          </li>
          <li>
Hôtel d’Orsay
          </li>
        </ul>
      </div>

      <div className='full-container2 '>
        <h4>The Marais (3rd and 4th): Best Neighborhoods In Paris For Shopping</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        The Marais neighborhood dates from the 17th century when noblemen began building large mansions here. Once the haunt of the old nobility, the Marais neighborhood in Paris’ 3rd and 4th Arrondissements is a popular and thriving community known for its trendy boutiques, restaurants, and wonderful museums. From chic boutiques filled with local Parisian designers, French chains like Sandro or IRO — check the best affordable French fashion brands to shop for — international brands, or more upscale shopping, Le Marais caters to both men and women at almost every price point. And if most tourists head to the Galeries Lafayette, stylish Parisians prefer to shop at BHV (short for Bazar de l’Hôtel de Ville).
        </p>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        Be sure to visit the Musée Carnavalet, dedicated to the history of Paris. Le Marais is also home to the Musée Picasso, containing an unparalleled collection of works by this famous modern artist. Don’t forget to visit the tiny Île de la Cité and Île Saint-Louis where the history of Paris begins. Plus, don’t miss the peaceful Place Dauphine on the Île de la Cité with its lovely cafés and restaurants.
        </p>
        <p>Where To Stay In The 3rd And 4th Arrondissements</p>
        <ul>
          <li>Pavillon de la Reine</li>
          <li>
Hôtel Jules & Jim
          </li>
          <li>
Hôtel National Arts & Métiers</li>
          <li>La Chambre du Marais
          </li>
          <li>
Hôtel Du Jeu De Paume
          </li>
          <li>
Cour des Vosges
          </li>
        </ul>
      </div>

      <div className='full-container2 '>
        <h4>Also Great for Shopping: The 2nd / Sentier Neighborhood</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
Even though the 2nd Arrondissement is the smallest of Paris’s 20 districts and overlooked by many guidebooks, it actually packs in lots of interesting things to do and see into its small size. You can explore the city’s largest concentration of 19th-century historic glass-roofed arcades (Galerie Vivienne, the Passage du Grand-Cerf, and the Passage Choiseul), and dine in the popular Asian restaurants along Rue Sainte-Anne, and buy cheese, wine, and baguettes in the wonderful pedestrian-only Rue Montorgueil market street. Also, don’t forget to visit Stohrer, the oldest still-in-operation boulangerie in the entirety of the capital which has been in business since 1730 when it was founded by Louis XV’s pastry chef. 
        </p>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
At the eastern end of the 2nd Arrondissement, you can explore the Sentier neighborhood, still filled with wholesale textile stores and garment manufacturers although they are now losing ground to hip bistros, bars, and upscale hotels. Sentier is definitely one of the best neighborhoods to experience Paris like a local Parisian.
        </p>
        <p>Where To Stay In The 2nd Arrondissement</p>
        <ul>
          <li>
          The Hoxton Hotel
          </li>
          <li>
Hôtel des Grands Boulevards
          </li>
          <li>
La Maison Favart</li>
          <li>
Hôtel du Sentier</li>
          <li>
Park Hyatt Paris Vendôme
          </li>
          <li>
Hôtel Saint-Marc
          </li>
        </ul>
      </div>
      <div className='full-container2 '>
        <h4>The 5th And 6th: Best Neighborhoods In Paris For Families</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        The 6th Arrondissement is located on the Left Bank (“Rive Gauche”) and is home to the atmospheric Saint-Germain-des-Prés quarter, the Latin Quarter, and the Luxembourg Gardens. The 5th and 6th are highly central with great playgrounds and easily walkable with access to shops, sites, and restaurants. Family-friendly highlights include the National Museum of Natural History and the botanical garden known as Jardin des Plantes.
        </p>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        The 5th is very central — maybe not as connected by metro — and offers a quieter, village-like feel. The 6th is more artistic and filled with art galleries and antique shops, as well as some of the city’s best small art museums. It’s also where you’ll find the impressive Musée de Cluny and two of Paris’ most famous cafés, Café de Flore and Les Deux Magots.
        </p>
        <p>Where To Stay In The 5th And 6th Arrondissements</p>
        <ul>
          <li>
          Hôtel Monte Cristo
          </li>
          <li>
          Hôtel Monge</li>
          <li>Relais Christine</li>
          <li>Hôtel Baume</li>
          <li>Hôtel D’Aubusson
          </li>
          <li>
Victoire & Germain
          </li>
        </ul>
      </div>
      <div className='full-container2 '>
        <h4>The 9th And 18th: Most Romantic Neighborhoods In Paris</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        Lovers of French movie Amélie will adore Montmartre, Paris’s pretty 18th Arrondissement, home to many of the cult film’s quirky brasseries, parks, and cobbled streets (including Café des Deux Moulins at 15 rue Lepic). In the 19th century, Montmartre was a haunt for artists and bohemians including Monet, Renoir, Picasso, Van Gogh, and Toulouse-Lautrec. This neighborhood offers breathtaking views while retaining a quaint, village-like charm. And it’s the perfect place for a honeymoon visit or romantic outing. Don’t miss the Sacré Coeur, and enjoy one of the best views of Paris.
        </p>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        The 18th is bordered by the more central 9th Arrondissement, which is home to the historic Palais Garnier opera house, museums, and theaters. Also, the former red-light district Pigalle has reinvented itself, with trendy SoPi (South Pigalle) a great neighborhood for foodies. Don’t forget to wander in the street Rue Notre Dame de Lorette and to visit the Musée de la Vie Romantique.
        </p>
        <p>Where To Stay In The 9th And 18th Arrondissements</p>
        <ul>
          <li>1er Étage SoPi</li>
          <li>Hôtel Adèle & Jules</li>
          <li>Maison Souquet</li>
          <li>Hôtel R de Paris</li>
          <li>Le Relais Montmartre</li>
          <li>Hôtel The Playce by Happyculture</li>
        </ul>
      </div>
      <div className='full-container2 '>
        <h4>The 8th, 15th, 16th, and 17th</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        Finally, the 8th, 15th, 16th, and 17th are great and safe Arrondissements, but these are more residential areas. That’s why I would not recommend these places to stay in Paris, especially if you want to be central and in a district easily walkable with access to shops, sites, and restaurants.
        </p>
      </div>
      <div className='full-container2 '>
        <h4>Areas To Avoid In Paris</h4>
        <p style={{marginBottom: "20px",marginTop: "10px"}}>
        Paris is generally a safe city. However, there are a few places I’ll recommend avoiding in Paris when you visit:
        </p>
        <ul>
          <li>The Gare du Nord / Gare de l’Est area at night.</li>
          <li>The area around Porte de Montreuil in the 20th district, in the Saint Blaise neighborhood at late hours.
</li>
          <li>Northern 18th and 19th district, specifically at night, around Marx Dormoy, Porte de la Chapelle, La Chappelle, Porte de Clignancourt, Porte de la Villette, Barbès, Goutte D’or, Chateau Rouge, Stalingrad. Montmartre is a very safe area day and night. Pigalle is safe too, there are a lot of tourists and police there, but maybe you can feel disturbed by the adult shops if you go there with kids.
</li>
          <li>Around Châtelet Les Halles at night.
</li>
          <li>The Bois de Boulogne: during the daytime, this park is perfectly safe because it is very active and crowded, but never under any circumstances should you go there at night. I would recommend that you avoid this area after dark as it has a reputation for being frequented by questionable characters.
</li>
        </ul>
      </div>







    </div>
  )
}

export default Accommodations