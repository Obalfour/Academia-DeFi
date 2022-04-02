export default function TrabajosSquare(props) {
    return (
        <div class="col">
            <div class="card">
            <img src={props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href={props.linkOferta} class="btn btn-primary">Ver Oferta</a>
            </div>
            <div class="card-footer">
                <small class="text-muted">{props.vacantes}</small>
            </div>
            </div>
        </div>
    );
}