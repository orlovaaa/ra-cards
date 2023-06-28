import Cards from './components/CardsFunc';

import img from './img/Image.jpg';
import './css/main.css';

function App() {
  const arrCards = [
    {
      image: {
        src: img,
        alt: 'some alt',
      },
      title: 'Good boy',
      paragraph: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: {
        text: 'Go somewhere'
      }
    },
    {
      title: 'Special title treatment',
      paragraph: 'With supporting text below as a natural lead-in to additional content.',
      link: {
        text: 'Go somewhere'
      }
    },
  ];
  return (
    <div className="main">
      <Cards cards={arrCards}/>
    </div>
  );
}

export default App;