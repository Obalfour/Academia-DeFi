import ArticuloSquare from './ArticuloSquare';

export default function Articulos() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1>ARTÍCULOS</h1></div>
            <div className="pt-5">
                <ArticuloSquare
                    image='https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMDkvMjY1MDg5ZDgtNzEwYi00MGZmLWE0NTYtMDBkODVkOGVhMjViLmpwZw==.jpg'
                    title="¿Invertir en DeFi? Apuesta por la diversificación"
                    description="Varios casos nos muestran que si bien hay increíbles oportunidades de ganancias en el espacio DeFi, también hay muchos riesgos que deben ser considerados."
                    articleLink="https://es.cointelegraph.com/news/investing-in-defi-bet-on-diversification-not-short-term-gains"
                />
                <ArticuloSquare
                    image='https://www.cronista.com/files/image/389/389224/6173021bd9396_950_534!.webp?s=83fa9e4ad4c9f7064cc47730584c5e3c&d=1643750350&oe=jpg'
                    title="DeFi, la inversión estrella que paga 15% en dólares: cómo entrar"
                    description="Los protocolos de finanzas descentralizadas permiten a los argentinos depositar pesos y generar ganancias en dólares de hasta 15%. Cómo funcionan."
                    articleLink="https://www.cronista.com/infotechnology/finanzas-digitales/defi-la-inversion-estrella-que-paga-15-en-dolares-como-entrar/"
                />
                <ArticuloSquare
                    image='https://www.bbva.com/wp-content/uploads/2021/06/BBVA-DeFi-finanzas.descentralizadas-1024x629.jpg'
                    title="El desembarco de las finanzas descentralizadas"
                    description="Las finanzas descentralizadas son un conjunto de aplicaciones basadas en redes blockchain que, en principio, no necesitan de intermediarios para funcionar. El auge de estos productos financieros, que tienen características similares a los servicios tradicionales, podría cambiar en cierta medida el sector de las finanzas y trae consigo oportunidades y desafíos."
                    articleLink="https://www.bbva.com/es/en-que-consisten-las-defi-o-finanzas-descentralizadas/"
                />
            </div>
        </div>
    );
}