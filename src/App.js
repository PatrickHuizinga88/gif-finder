import { useState, useEffect } from 'react'
import axios from 'axios'
import './scss/main.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const getGifs = async () => {
      const res = await axios('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
          q: 'animal'
        }
      });
  
      console.log(res)
      setGifs(res.data.data)
    }
    
    getGifs()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <h1>Trending GIFs</h1>
        <Grid gifs={gifs} />
      </div>
    </>
  );
}

export default App;
