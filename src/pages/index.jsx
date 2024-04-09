import CardRazasPerros from "components/CardRazasPerros";
import boderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';

function Index(){
    return (
        <section>
                <h1 className="title">RAZAS DE PERROS</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza = "Border Collie" imagen = {boderCollie}/>
                    <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                  
                    <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                  
                    <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                  
                    <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                  
                    <CardRazasPerros nombreRaza = "Rhodesian" imagen = {rhodesian}/>                   
                </ul>
        </section>
    );
}

export default Index;
