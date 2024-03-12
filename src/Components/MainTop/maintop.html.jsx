import '../../global.scss';
import './maintop.scss';
import available from './available.png';
import Profile from './me.png';

function MainTop () {
    return (
        <>
            <header className="masthead bg-dark text-white text-center" id="top-section">
                <div className="container d-flex align-items-center flex-column">
                    <div className="col-md-6 col-lg-4 mb-3 mt-5">
                        <img className="img-fluid profile" src={Profile} alt="..." />
                    </div>
                    <h1 className="masthead-heading text-uppercase mb-0">Kleber Cunha</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <h4>Alternance</h4>

                        <div className='container'>
                            <h5 className="">Concepteur développeur d’applications </h5>
                            <p>Préparation&nbsp;:&nbsp;Niveau Bac+4.</p>
                            <p>Type de contrat&nbsp;:&nbsp; Apprentissage (18mois).</p>
                            <p>Rythme&nbsp;:&nbsp;1 mois en entreprise / 2 semaines en formation</p>
                            <p>Technologies&nbsp;:&nbsp;Java,&nbsp;JavaSE,&nbsp;JEE,&nbsp;JS,&nbsp;PHP,&nbsp;<br/>Symfony,&nbsp;CMS,&nbsp;SQL.</p>
                        </div>

                    <a href="https://www.mediafire.com/file/1yflfg1g1gzk8dd/CV_Kleber_da_Cunha_Alternance.pdf/file" target="_blank" rel="noreferrer">
                        <img className="available" src={available} alt="Available" />
                    </a>
                </div>
            </header>
        </>
    )
}

export default MainTop;
