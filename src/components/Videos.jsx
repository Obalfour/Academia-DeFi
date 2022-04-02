import VideoSquare from "./VideoSquare";

export default function Videos() {
    return (
        <div>
            <div className="d-flex justify-content-center"><h1>VIDEOS</h1></div>
            <div className="pt-5">
                <VideoSquare
                    videoId="fYGutx4W7Ys"
                    title="EPISODIO I"
                    description="En este video aprenderas que son las Finanzas Descentralizadas: sus ventajas, para qué sirver y su futuro."
                />
                <VideoSquare
                    videoId="dnxfqmjNAtQ"
                    title="EPISODIO II"
                    description="En este video aprenderas cómo programar un AMM (Automatic Market Maker) muy utilizado en exchanges como Uniswap para swap de tokens ERC20."
                />
                <VideoSquare
                    videoId="H8sbS9V6gVY"
                    title="EPISODIO III"
                    description="En este video aprenderas cómo programar un AMM (Automatic Market Maker) muy utilizado en exchanges como Uniswap para swap de tokens ERC20."
                />
            </div>
        </div>
    );
}