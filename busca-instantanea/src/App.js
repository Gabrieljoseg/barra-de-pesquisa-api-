import {useState,useEffect, useRef} from 'react';
import './App.css';
import SearchResults from './components/SearchResults';
// https://www.freetogame.com/api/games

function App() {
const[data, setData] = useState([]);
const inputRef = useRef(null);

useEffect(() => {
  if (inputRef) inputRef.current.focus();
})

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (!value) {
      setData([]);
      return;
    }


    const url = `https://www.freetogame.com/api/games/${value}`;


    
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data));


    console.log('handleInputChange', e.target.value);
  };
  console.log('Data', data)

  return (
    <div className="container">
      <form>
        <label htmlFor="search">Busca de Jogos</label>
        <input name="search" id="search" onChange={handleInputChange} ref={inputRef} />
      </form>
      <SearchResults data={data}/>
    </div>
  );
}

export default App;
