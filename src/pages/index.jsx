import CardRazasPerros from "components/CardRazasPerros";
import logo from 'media/logo.jpg';
import boderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';

function Index(){
    return (
    <div>
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
            <main></main>
                <section>
                    <h1 className="title">RAZAS DE PERROS</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros nombreRaza = "Border Collie" imagen = {boderCollie}/>
                        <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                  
                    </ul>
                </section>
                <section></section>
            <footer>
                
            </footer>
    </div>
    );
}

export default Index;
