import lightsaber from "../img/lightsaber.png";

export default function Home() {
    return (
        <div className="container">

            <div className="row justify-content-md-center">
                <div className="col-md-8 my-auto text-center">
                    <h1 className="bd-title"><strong>Convertite en un maestro DeFi</strong></h1>
                    <h3>
                        <small className="text-muted">Aprendé a dominar las mejores habilidades para ser un experto en
                            el mundo de las finanzas descentralizadas.</small>
                    </h3>
                    <button type="button" className="btn btn-dark btn-lg mt-3">Ver recursos
                    </button>
                </div>
                <div className="col-md-4 text-center">
                    <img src={lightsaber} className="img-fluid"/>
                </div>
            </div>

        </div>
    );
}