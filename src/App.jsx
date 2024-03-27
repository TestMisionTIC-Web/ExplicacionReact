import './styles/styles.css';
import logo from './media/logo.jpg';
import boderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
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

function CardRazasPerros({nombreRaza, imagen}) {
    return(
        <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={imagen} alt={nombreRaza}/>
                    </div>
                    <span className="breedTitle">{nombreRaza}</span>
                    <div className="endBreedCard">
                        <i className="fa-solid fa-heart">150</i>
                        <i className="fa-solid fa-comment">1.5k</i>
                        <i className="fa-solid fa-eye">120</i>
                    </div>
                </li>   

    )

}
    

export default App;
