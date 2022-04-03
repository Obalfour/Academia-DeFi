export default function TrabajosSquare(props) {
    return (
        <div className="col mt-2 mb-2">
            <div className="card card-with-shadow h-100 d-inline-block d-flex flex-column bd-highlight mb-3" height="50px">
            <img src={props.image} className="card-img-top" height="300px"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.linkOferta} className="btn btn-primary">Ver Oferta</a>
            </div>
            <div className="card-footer align-text-bottom">
                <small className="text-muted align-text-bottom">Vacantes para el puesto: {props.vacantes}</small>
            </div>
            </div>
        </div>
    );
}