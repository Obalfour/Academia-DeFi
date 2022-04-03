export default function HomeCard({ imgsrc, cardTitle, fadeDuration }) {
    return (
        <div className="card bg-dark card-with-shadow aos-init aos-animate mb-5" data-aos="fade-up" data-aos-duration={fadeDuration}>
            <img src={imgsrc} className="card-img-top mt-4 pe-5 ps-5" alt="..."/>
            <div className="card-body">
                <h4 className="text-white">{cardTitle}</h4>
            </div>
        </div>
    );
}