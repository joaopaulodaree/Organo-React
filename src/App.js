import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import TeamText from './components/TeamText';

function App() {

  const [cards, setCards] = useState([]);

  const addCard = (Card) => {
    console.log(Card);
    setCards([...cards, Card]);
  }

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    },
  ]

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} whenSubmitted={Card => addCard(Card)} />
      <TeamText />
      
      {teams.map(team => <Team key={team.name} name={team.name} secundaryColor={team.secundaryColor} primaryColor={team.primaryColor} cards={cards.filter(Card => Card.team === team.name)} />)}

      <Footer />
    </div>
  );
}

export default App;
