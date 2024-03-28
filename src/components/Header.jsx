import logo from 'media/logo.jpg';

const Header = () => {
    return (
        <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>            
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fa-solid fa-magnifying-glass button iconoBusqueda"></i>                    
                </div>
            </li>
            <li><button className="button secondaryButton">Login</button></li>
            <li><button className="button mainButton">Registro</button></li>
            
                </ul>
            </header>
    );
}

export default Header;