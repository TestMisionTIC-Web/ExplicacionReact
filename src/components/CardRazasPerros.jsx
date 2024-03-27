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
    );
}

export default CardRazasPerros;