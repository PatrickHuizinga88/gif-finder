import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import axios from 'axios'
import './scss/main.scss'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Grid from './components/Grid'
import Trending from './components/Trending';
import Search from './components/Search';

function App() {
  const [gifs, setGifs] = useState([])
  const [categories, setCategories] = useState([])
  const content = useRef(null)

  useEffect(() => {
    const getGifs = async () => {
      const res = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
          limit: 50
        }
      });

      setGifs(res.data.data)
    }

    getGifs()
  }, [])

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios('https://api.giphy.com/v1/gifs/categories', {
        params: {
          api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
          limit: 50
        }
      });

      setCategories(res.data.data)
    }

    getCategories()
  }, [])
  

  // const getFilteredGifs = async (search) => {

  //   const onSubmit = (e) => {
  //     e.preventDefault()
    
  //     if (search != '') {
  //       const res = await axios('https://api.giphy.com/v1/gifs/search', {
  //         params: {
  //           api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
  //           q: search
  //         }
  //       });

  //       console.log(res.data.data)
  //       setGifs(res.data.data)
  //     }
  //     else {
  //       alert("Please fill in the input.")
  //     }
  //   }
    
  //   getFilteredGifs()
  // }

  // getFilteredGifs()

  // const filterGifs = async () => {
  //   const res = await axios('https://api.giphy.com/v1/gifs/search', {
  //     params: {
  //       api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
  //       q: {filter}
  //     }
  //   });

  //   setGifs(res.data.data)
  // }

  // filterGifs()


  const goToContent = async () => {
    window.scrollTo({
        top: content.current.offsetTop - 65,
        behavior: "smooth"
    });
    setTimeout(() => {
      document.getElementById('search-input').focus()
    }, 500);
  }

  return (
    <>
      <Navbar categories={categories}/>
      {/* <button onClick={goToContent}>Go to content</button> */}
      <div className="container">
        <Router>
          <Hero onPress={goToContent}/>
          <section id="content" ref={content}>
            <Route path="/gif-finder/" exact component={Trending} />
            <Route path="/gif-finder/search" render={() => <Search passResult={setGifs} />} />
          </section>
        </Router>
        {gifs.length > 0 ? (
          <Grid gifs={gifs} />
        ) : (
          "Unable to retrieve gifs."
        )}
      </div>
    </>
  );
}

export default App;
