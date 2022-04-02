import TrabajosSquare from "./TrabajosSquare";
import data from "../data/trabajos.json";

export default function Trabajos() {
    return (
        <div>
            <h1>Trabajos</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    Object.keys(data).map((e) => {
                        return <TrabajosSquare
                            key={e}
                            title={data[e].title}
                            description={data[e].description}
                            linkOferta={data[e].linkOferta}
                            image={data[e].image}
                            vacantes={data[e].vacantes}
                        />
                    })
                }
            </div>
        </div>
    );
}