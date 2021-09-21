import { useState } from 'react'
import axios from 'axios'

const Search = ({passResult}) => {

    const [search, setSearch] = useState('')
    const [lastInput, setLastInput] = useState('')

    const handleSearchChange = event => {
        setSearch(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (search !== '') {
            const res = await axios('https://api.giphy.com/v1/gifs/search', {
                params: {
                api_key: '8TjuxkKr5xAj9Dd1iNQIx0lWHamxD6n9',
                q: search
                }
            });

        passResult(res.data.data)
        setLastInput(search)
        }
        else {
            alert("Please fill in the input.")
        }
    }

    return (
        <div className="header search">
            <h1>Search GIFs</h1>
            <form>
                <input type="text" id="search-input" placeholder="Search..." value={search} onChange={handleSearchChange}/>
                <button type="submit" onClick={handleSubmit} hidden/>
            </form>
            {lastInput !== '' ? <p> Showing results for: "{lastInput}"</p> : <br/>}
        </div>
    )
}

export default Search
