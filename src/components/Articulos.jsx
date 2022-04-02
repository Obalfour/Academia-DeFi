import ArticuloSquare from './ArticuloSquare';
import ico from '../img/ico.jpg';

export default function Articulos() {
    return (
        <div>
            <h1 className="position-absolute end-50 start-50 translate-middle pb-2">ARTÍCULOS</h1>
            <div className="pt-5">
                <ArticuloSquare
                    image={ico}
                    title="¿Qué es una ICO?"
                    description="En este artículo aprenderás que es una ICO y cómo funciona."
                    articleLink="https://startupsoasis.com/startups-espanolas-tokens-criptomonedas/"
                />
                <ArticuloSquare
                    image={ico}
                    title="¿Qué es una ICO?"
                    description="En este artículo aprenderás que es una ICO y cómo funciona."
                    articleLink="https://startupsoasis.com/startups-espanolas-tokens-criptomonedas/"
                />
            </div>
        </div>
    );
}