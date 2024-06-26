const NavBar =()=>{
    return(
        <div>
        <nav>
            <a href="#">Home</a>
            <div>
                <ul>
                    <li>
                        <a href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a  href="#" id="navbarDropdown">
                        Dropdown
                        </a>
                        <div >
                        <a  href="#">Action</a>
                        <a  href="#">Another action</a>
                        <div></div>
                        <a  href="#">Something else here</a>
                        </div>
                    </li>
                    <li>
                        <a href="#">Disabled</a>
                    </li>
                </ul>
                <form>
                    <input type="search" placeholder="Search" aria-label="Search"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </nav>
        </div>
    )
}
export default NavBar