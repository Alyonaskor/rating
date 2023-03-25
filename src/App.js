

import ListCard from './components/ListCard';

import data from './data/data.json'

function App() {

  return (
    <div className="pt-8">
  
        <ListCard heroes={data.body}/>
       
    </div>
  );
}

export default App;
