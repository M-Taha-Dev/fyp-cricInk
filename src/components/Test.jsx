import React, { useState } from 'react';
import getArticle from '../articles/comparison_template';
import getPerformance from '../articles/performance_template';
import getComparison from '../articles/comparison_template';



const ArticleContent = ({ title, contentSections }) => {
  return (
    <div className="article-content">
      <h2 className='text-xl font-bold'>{title}</h2>
      {contentSections.map((section, index) => (
        <div key={index} className="section">
          <h3 className='text-lg font-bold'>{section.heading}</h3>
          <p>{section.paragraph}</p>
          {section.image && <img src={section.image} alt={section.heading} />}
        </div>
      ))}
    </div>
  );
};

const comparison_template = getArticle()
const performance_template = getPerformance()
const [article, setArticle] = useState()
const articleSelector = (value) => {

    if (value === 'performance'){
      setArticle(getPerformance())
    }
    else if (value === 'comparison'){
      setArticle(getComparison())
    }


}

// const articleSections = [
//   {
//     heading: 'Introduction',
//     tag: 'performance'
//     paragraph:
//       "{name}, one of the modern-day cricketing sensations, is a right-handed top-order batsman from Pakistan. Known for his elegant stroke play and impeccable timing, Babar has quickly risen to become one of the leading run-scorers in all formats of the game. With an impressive batting average and remarkable consistency, he has earned comparisons with some of the greatest batsmen of all time.",
//   },
//   {
//     heading: 'Most Productive Shot',
//     paragraph:
//       "{name}'s {shot_type} is undoubtedly his most productive shot. With textbook technique and a brilliant sense of timing, he elegantly pierces the gaps through the {productive_shot_placement}, accumulating boundaries effortlessly. His mastery over this shot allows him to dominate bowlers and dictate the game's pace.",
//     image: '/src/img/productive_shot.png',
//   },
//   {
//     heading: 'Strong Line, Length, and Delivery Type',
//     paragraph:
//       "{name} showcases exceptional strength when it comes to deliveries around the {line} line. His remarkable judgment and footwork allow him to execute front-foot and back-foot shots with ease. Babar's proficiency in handling {length} deliveries is also noteworthy, as he adeptly drives and defends them while capitalizing on any loose deliveries.",
//     image: '/src/img/line_length3.png',
//   },
//   {
//     heading: 'Weak Line, Length, and Delivery Type',
//     paragraph:
//       "{name}'s game can face challenges when dealing with deliveries around {weakline}. Bowlers who can consistently hit the right line and length in this region have often managed to find success against him. Although he generally handles all lengths skillfully, there are instances where he might encounter difficulties with good and {weakline2} deliveries. Additionally, flighted deliveries also pose a challenge for him among the various delivery types.",
//     image: '/src/img/weak_line.png',
//   },
//   {
//     heading: 'Strong and Weak Zones',
//     paragraph:
//       "When it comes to hitting boundaries, {name} shows his expertise in launching sixes towards the {regions} regions with great skill. Moreover, he impresses with fours by excelling in the {region2} areas. However, our data analysis indicates that {name}'s performance is relatively less strong in the {weakregions} regions, which can be considered his weaker areas.",
//     image: '/src/img/6.png',
//   },
//   {
//     heading: 'Recommendations',
//     paragraph:
//       "{name} should focus on improving his play against deliveries around the {line_recommendation} region. Bowlers who consistently target this area have found success against him, indicating the need for specific training and practice to develop more confidence and proficiency in handling such deliveries. By sharpening his skills against these line and length variations, Babar can further strengthen his already impressive batting repertoire and enhance his ability to counter challenging situations effectively. Additionally, he can work on {ball_type_recommendation} deliveries more effectively to become even more versatile in handling different types of bowling. Emphasizing these aspects in his training regimen will undoubtedly elevate {name}'s overall performance and solidify his position as one of the premier batsmen in modern cricket.",
//   },
// ];

const Test = () => {
  return (
    <div className="App">
      <ArticleContent title="Performance Analysis" contentSections={comparison_template} />
    </div>
  );
};

export default Test;
