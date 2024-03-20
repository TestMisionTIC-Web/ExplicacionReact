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
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={boderCollie} alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">Border Collie</span>
                    <div className="endBreedCard">
                        <i className="fa-solid fa-heart">150</i>
                        <i className="fa-solid fa-comment">1.5k</i>
                        <i className="fa-solid fa-eye">120</i>
                    </div>
                </li>                    
                
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="Rodesian"/>
                    </div>
                    <span className="breedTitle">Rhodesian</span>
                    <div className="endBreedCard">
                        <i className="fa-solid fa-heart">450</i> 
                        <i className="fa-solid fa-comment">1.1k</i>
                        <i className="fa-solid fa-eye">850</i>
                    </div>
                                     
                </li>
            </ul>
        </section>
        <section></section>
    <footer></footer>
    </div>
  );
}

export default App;
