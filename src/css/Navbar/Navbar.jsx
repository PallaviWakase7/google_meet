import './Navbar.css'

const Navbar=()=>{
    return(
      <div className="Navbar">
      <nav className='navbar'>
                 <img src='https://mir-s3-cdn-cf.behance.net/user/276/b94e6f223170.5f9ff6d2d63e6.png\'alt=''height={'50px'} width={'50px'}></img>
                 <ruby>HOLA LAB</ruby>
                    <a href='' className='navanc'>SERVICES </a>
                    <a href='' className='navanc'>PROJECTS</a>
                    <a href='' className='navanc'>OPEN SOURCE</a>
                    <a href='' className='navanc'>OUR BLOG</a>
                 <button>GET IN TOUCH <i class="fa-solid fa-pencil"></i></button>
            </nav>
            <hr />
      </div>
    )
  }
  export default Navbar