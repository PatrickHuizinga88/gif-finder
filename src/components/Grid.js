import Gif from "./Gif"

const Grid = ({ gifs }) => {
    return (
        <div className="grid">
            {gifs.map((gif) => (
                <Gif key={gif.id} gif={gif.images.fixed_height.url} embed={gif.embed_url}/>
            ))}
        </div>
    )
}

export default Grid
