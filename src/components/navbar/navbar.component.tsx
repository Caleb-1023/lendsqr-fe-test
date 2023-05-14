import './navbar.style.scss'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <img src="./lendsqr_logo.svg" alt="Lendsqr Logo" />
            <form>
                <div className='form-container'>
                    <input type="text" placeholder='Search for anything' className='search-input' />
                    <button type="submit" className='search-btn'><img src="./search_icon.svg" alt="" /></button>
                </div>
            </form>
            <div className='nav-details'>
                <p className='nav-detail'>Docs</p>
                <img src="./nav_bell.svg" alt="bell icon" className='nav-detail' />
                <img src="./image 4.png" alt="profile picture" className='profile-picture nav-detail' />
                <p className='nav-detail'>Adedeji</p>
                <img src="./chevron_down.svg" alt="" className='nav-detail' />
        
            </div>
        </div>
    </div>
  )
}

export default Navbar