import { Link } from "react-router-dom"

const Hero = ({onPress}) => {
    
    // const executeScroll = () => myRef.current.scrollIntoView()  


    return (
        <div className="hero">
            <h1>Find and share your favorite GIFs!</h1>
            <Link 
                to="/gif-finder/search" 
                className="btn" 
                onClick={onPress}
            >
                Start searching
            </Link>
            <p>
                Made in React by <a href="https://patrickhuizinga88.github.io">Patrick Huizinga</a>
            </p>
        </div>
    )
}

export default Hero
