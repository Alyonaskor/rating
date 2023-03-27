import ListCard from './components/ListCard';
import data from './data/data.json'

function App() {

  return (
      <ListCard heroes={data.body} />
  );
}

export default App;
