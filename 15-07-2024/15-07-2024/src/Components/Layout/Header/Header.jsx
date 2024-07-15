import'./Header.css'
import { Link } from "react-router-dom"
function Header(){
    
return(
    <header className='header'>
        <h1>Menu</h1>
        <nav className='nav'>
            <ul className='ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Cadastro">Cadastro</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
            </ul>
        </nav>
    </header>
)
}
export default Header