import ArticuloSquare from './ArticuloSquare';
import data from '../data/articulos.json';

export default function Articulos() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1>ARTÍCULOS</h1></div>
            <div className="pt-5">
                {
                    Object.keys(data).map((e) => {
                        return <ArticuloSquare
                            key={e}
                            image={data[e].image}
                            title={data[e].title}
                            description={data[e].description}
                            articleLink={data[e].articleLink}
                        />
                    })
                }
            </div>
        </div>
    );
}