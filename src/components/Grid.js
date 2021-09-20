const Grid = ({ gifs }) => {
    // showSocials = () => {
        
    // }

    return (
        <div className="grid">
            {gifs.map((gif) => (
                <img className="gif" key={gif.id} src={gif.images.fixed_height.url} 
                // onClick="{showSocials}"
                />
                // <Gif key={gif.id} url={gif.images.fixed_height.url} />
            ))}
        </div>
    )
}

export default Grid
