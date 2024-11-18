const Navigation =()=>{
return(
    <div>
    <nav className = "navigation">
    <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        
    
        <ul className='list-upper'>
          <li href = "#">menu</li>
          <li href = "#">location</li>
          <li href = "#">About</li>
          <li href = "#">Contact</li>    
          
        </ul>
        <button className='btn-loggin'>
    LogIn
        </button>
    </nav>
    
            </div>
)
}
export default Navigation;