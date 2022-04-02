import './styles/Articulos.css';

export default function ArticuloSquare(props) {
    return (
        <div id="articleSquare" class="card mb-3 pt-1 ps-1 pb-1">
            <div class="row g-0">
                <div class="col-md-4">
                    <a href={props.articleLink}><img width='400px' src={props.image} class="img-fluid rounded-start" alt=""/></a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <a id='title-article-id' href={props.articleLink} class="card-title">{props.title}</a>
                        <p class="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}