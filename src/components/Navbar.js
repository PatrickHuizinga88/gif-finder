import logo from '../img/logo_white.png'

const Navbar = ({ categories }) => {
    return (
        <nav>
            <div className="container">
                <a className="logo-link" href="/gif-finder/">
                    <img src={logo} alt="logo"/>
                </a>
                <div className="menu-items">
                    <a className="item" href="/gif-finder/">Trending</a>
                    {/* <div className="dropdown">
                        <p className="item" href="#">Categories</p>
                        <div className="dropdown-content">
                            {categories.map((category) => (
                                <a key={category.id} href="#">{category.name}</a>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
