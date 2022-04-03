import lightsaber from "../img/lightsaber.png";
import HomeCard from './HomeCard';
import free from '../img/free.png';
import levels from '../img/levels.png';
import online from '../img/online.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container bg-dark mt-5">

            <div className="row justify-content-md-center">
                <div className="col-md-8 my-auto text-center">
                    <h1 className="text-white"><strong>Convertite en un maestro DeFi</strong></h1>
                    <h3>
                        <small className="text-muted">Aprendé a dominar las mejores habilidades para ser un experto en
                            el mundo de las finanzas descentralizadas.</small>
                    </h3>
                    <Link to="/articulos"><button type="button" className="btn gradient-button border-0 text-white btn-lg mt-3">Ver recursos</button></Link>
                </div>
                <div className="col-md-4 text-center">
                    <img src={lightsaber} className="img-fluid"/>
                </div>
            </div>

            <div className="text-center pt-1 mt-4 mb-2">
                <h1 className="text-white-50 mt-4 mb-2">Unete al lado descentralizado de la fuerza</h1>
            </div>

            <div className="row justify-content-md-center mt-4 pt-4 pb-5">
                <div className="col-md-4 text-center">
                    <HomeCard imgsrc={free} cardTitle={"Totalmente gratuito"} fadeDuration={500}/>
                </div>
                <div className="col-md-4 text-center">
                    <HomeCard imgsrc={online} cardTitle={"Modalidad online"} fadeDuration={1500}/>
                </div>
                <div className="col-md-4 text-center">
                    <HomeCard imgsrc={levels} cardTitle={"Todos los niveles"} fadeDuration={3000}/>
                </div>
            </div>

        </div>
    );
}