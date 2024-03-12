import './main.scss';
import '../../global.scss';

import THP from '../ContentPortfolio/img/portfolio/THP.png';
import CursoEmVideo from '../ContentPortfolio/img/portfolio/cursoEmVideo.png';
import B7 from '../ContentPortfolio/img/portfolio/b7.jpg';
import ecole from '../ContentPortfolio/img/portfolio/42.png';
import academy from '../ContentPortfolio/img/portfolio/academy.png';
import gorails from '../ContentPortfolio/img/portfolio/gorails.jpg';

import Sports from '../ContentPortfolio/img/portfolio/Projects/sportswithme.png';
import FollowNut from '../ContentPortfolio/img/portfolio/Projects/follownut.png';
import Agency from '../ContentPortfolio/img/portfolio/Projects/agency.png';
import Gossip from '../ContentPortfolio/img/portfolio/Projects/gossip.png';
import Pizza from '../ContentPortfolio/img/portfolio/Projects/pizza.png';
import Movies from '../ContentPortfolio/img/portfolio/Projects/movies.png';
import Note from '../ContentPortfolio/img/portfolio/Projects/note.png';
import Doc from '../ContentPortfolio/img/portfolio/Projects/doc.png';
import Starbucks from '../ContentPortfolio/img/portfolio/Projects/starbucks.png';
import doghero from '../ContentPortfolio/img/portfolio/Projects/doghero.png';
import dm from '../ContentPortfolio/img/portfolio/dm.jpg';
import ormaes from '../ContentPortfolio/img/portfolio/ormaes.jpg';
import ENI from '../ContentPortfolio/img/portfolio/eni.jpg';

import CreationProduct from '../ContentPortfolio/img/dm/creation_auto_produit.png';
import DeleteProduct from '../ContentPortfolio/img/dm/retree_du_produit_du_catalog.png';
import EticketTransparent from '../ContentPortfolio/img/dm/eticket_transparance.png';
import ListProductCreated from '../ContentPortfolio/img/dm/list_produit_crée.png';
import SearchBar from '../ContentPortfolio/img/dm/SearchBar.png';
import QrcodePage from '../ContentPortfolio/img/dm/qrcode_page.png';
import PerturbationsButton from '../ContentPortfolio/img/ormaes/perturbations-button.jpg';
import LineDirections from '../ContentPortfolio/img/ormaes/line-directions.jpg';
import PerturbationsPage from '../ContentPortfolio/img/ormaes/perturbations-page.jpg';
import TouteLesLignes from '../ContentPortfolio/img/ormaes/cts-toute-les-lignes.jpg';
import CtsParkingsCar from '../ContentPortfolio/img/ormaes/cts-parkings.jpg';
import CtsParkingBike from '../ContentPortfolio/img/ormaes/cts-bikes.jpg';
import CtsFlexHop from '../ContentPortfolio/img/ormaes/cts-flex-hop.jpg';
import PerturbationInfo from '../ContentPortfolio/img/ormaes/perturbation-information.jpg';
import LineInformations from '../ContentPortfolio/img/ormaes/Line-informations.jpg';
import Research from '../ContentPortfolio/img/ormaes/research.jpg';
import Location from '../ContentPortfolio/img/ormaes/location-cts.jpg';

import ActivityProject from '../ContentPortfolio/img/ormaes/activity-project.png';
import ComposantProject from '../ContentPortfolio/img/ormaes/composant.png';
import FollowProject from '../ContentPortfolio/img/ormaes/follow-project.png';
import GetAllProjects from '../ContentPortfolio/img/ormaes/get-all-projects.png';
import ProjectDetail from '../ContentPortfolio/img/ormaes/project_detail.png';

import b7Languages from '../ContentPortfolio/img/portfolio/b7-languages.png';


function Main () {
    return(
        <>

            <section className="page-section portfolio" id="experiences">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Experiences</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modalDm">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={dm} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modalOrmaes">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ormaes} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="page-section portfolio" id="studies">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Studies</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#eniModal">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ENI} alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={THP} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalAcademy">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={academy} alt="..." />
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modalCursoEmVideo">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={CursoEmVideo} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modalB7">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={B7} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalGorails">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={gorails} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalEcole">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ecole} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



    


            <section className="page-section portfolio" id="projects">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#dogheroModal">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={doghero} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalSports">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Sports} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalFollownuts">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={FollowNut} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalAgency">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Agency} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalGossip">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Gossip} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalPizza">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Pizza} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalMovies">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Movies} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalNotes">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Note} alt="..." />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalDoc">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Doc} alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModalStarbucks">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={Starbucks} alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section bg-dark text-white mb-0" id="about">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row">
                        <div className='d-flex justify-content-center'><p>2021</p></div>
                        <div className="col-lg-12 ms-auto"><h3 className="lead text-center">Hello, my name is Kleber, and I'm a Web Developer.<br/>
                            After years of working in IT support, I turned to web development.<br/>
                            I started my self-taught apprenticeship a year before finally having the chance to enroll in The Hacking Project’s Fullstack Developer training program.<br/>

                            The intensive six-month training course has allowed me to build a solid foundation, learn good practices and acquire the proper methodology
                            to be able to continue to progress.
                            </h3>
                            <h3 className="lead text-center">
                                Today, I am looking for a job as a web developer to deepen and expand my knowledge and interest in web development.<br/>
                                Versatility, a taste for teamwork, perseverance, curiosity and the desire to learn are the qualities that I have acquired and that are essential to the profession.
                            </h3>
                        </div>

                        <div className='about-line-control'>
                            <div className='about-line'></div>
                        </div>

                        <div className='d-flex justify-content-center mt-4'><p>2024</p></div>

                        <div className="col-lg-12 ms-auto"><h3 className="lead text-center">Today I arrive to have my back +2 in web development.<br/>
                         With 1 year of experience working for Direct Market and 10 months for Ormaes with a new Alternance as Concepteur Développeur d’Applications.
                            </h3>
                            <h3 className="lead text-center">
                            Today, I am looking for a job in Alternance as a Concepteur Développeur d’Applications to finish my bac + 4.<br/>
                               Here some details about the <a href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/" target='_blank' without rel="noreferrer">Alternance</a>.
                            </h3>
                        </div>

                    </div>
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href="https://www.mediafire.com/file/1yflfg1g1gzk8dd/CV_Kleber_da_Cunha_Alternance.pdf/file" target="_blank" rel="noreferrer">
                            <i className="fas fa-download me-2"></i>
                            Download my CV!
                        </a>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-xl-5 list-contact">
                            <a className="btn btn-sm btn-outline-success" href="0608505851" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalPhone">
                                <i className="fas fa-download me-1"></i>
                                Phone
                            </a>
                            <a className="btn btn-sm btn-outline-success" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer">
                                <i className="fas fa-download me-1"></i>
                                LinkedIn
                            </a>
                            <a className="btn btn-sm btn-outline-success" href="hello.kleberkunha@gmail.com" target="_blank" rel="noreferrer" data-bs-toggle="modal" data-bs-target="#portfolioModalEmail">
                                <i className="fas fa-download me-1"></i>
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-center ">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Schiltigheim / France
                            </p>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Social media</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/kleber-da-cunha/" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-facebook-f">Lin</i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/kleberkunha" target="_blank" rel="noreferrer"><i className="fab fa-fw fa-twitter">Git</i></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Kleber da Cunha 2024</small></div>
            </div>
            <div className="portfolio-modal modal fade" id="eniModal" tabindex="-1" aria-labelledby="eniModal" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">ENI <br/><br/> Ecole informatique</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={ENI} alt="..." />
                                        <p className="mb-4">Formation Concepteur Développeur d’Applications. <br/>Java, JavaSE, JEE, JS, PHP, Symfony, CMS, SQL.</p>
                                        <button className="btn btn-secondary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://www.eni-ecole.fr/formations/developpement/niveau-6-bac4-concepteur-developpeur-dapplications/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">ENI website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">The Hacking Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={THP} alt="..." />
                                        <p className="mb-4">The Hacking Project is an intensive six-month training course based
                                         on peer-to-peer learning. Over 1,200 hours of exercises, projects and evaluations per week.
                                         Ruby On Rails, Javascript ES6, React Js, Git/GitHub.</p>
                                        <button className="btn btn-secondary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://www.thehackingproject.org/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">THP website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalAcademy" tabindex="-1" aria-labelledby="portfolioModalAcademy" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">3w Academy</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={academy} alt="..." />
                                        <p className="mb-4">3w Academy is a school that focus in the practice learning, training course based
                                         on projects everyweek followed by a teacher. Over 800 hours of exercises, projects and evaluations per week.
                                         PHP,Node Js,React Js,SQL,symfony.</p>
                                         <div className='d-flex'>
                                            <button className="btn btn-secondary" href="#!" data-bs-dismiss="modal">
                                                <i className="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                            <a className="btn btn-primary link-to-website mx-2" href="https://3wa.fr/" target="_blank" rel="noreferrer">
                                                <i className="fas fa-times fa-fw link-to-website">3w Academy website</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="modalCursoEmVideo" tabindex="-1" aria-labelledby="modalCursoEmVideo" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Curso em video</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={CursoEmVideo} alt="..." />
                                        <p className="mb-4">
                                        Cours de programmation avec diplôme, Full stack en développement web.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://www.cursoemvideo.com/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Curso em video website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="modalB7" tabindex="-1" aria-labelledby="modalB7" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">B7 Web</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={B7} alt="..." />

                                        <p className="mb-4">
                                            Cours de programmation avec diplôme, Full stack en développement web. <br/>

                                        </p>
                                        <div className='container'>
                                            <img className='b7Languages' src={b7Languages} alt="" />
                                        </div>
                                       
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://github.com/suporteb7web" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">B7 Github</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="modalDm" tabindex="-1" aria-labelledby="modalDm" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Direct Market</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#creationProduct">
                                                        <h6>Créer des produits à partir d'une liste CSV</h6>
                                                        <img className="img-fluid profile" src={CreationProduct} alt="..." />
                                                    </div>
                                                </div>

                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#listProductCreated">
                                                        <h6>Liste des produits créés par date</h6>
                                                        <img className="img-fluid profile" src={ListProductCreated} alt="..." />
                                                    </div>
                                                </div>

                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <h6>Barre de recherche et pagination</h6>
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#SearchBarDM">
                                                        <img className="img-fluid profile" src={SearchBar} alt="..." />
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                                                        <h6>Retrait du produit par code de référence</h6>
                                                        <img className="img-fluid profile" src={DeleteProduct} alt="..." />
                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#QrcodePage">
                                                        <h6>Création de la page redirigée par QR code</h6>
                                                        <img className="img-fluid profile" src={QrcodePage} alt="..." />
                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2 item-dm col-lg-4 m-2">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#etiqueteTransparance">
                                                        <h6>QR Code pour chaque produit</h6>
                                                        <img className="img-fluid profile" src={EticketTransparent} alt="..." />
                                                        <div>
                                                            <h5>Exemple de lien d'un QR code <br/></h5>
                                                            <a href="https://transparence.direct-market.fr/?product_id=39&producer_id=6&supermarket_id=642#traceability" target="_blank">Cliquez ici pour ouvrir le lien</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="creationProduct" tabindex="-1" aria-labelledby="creationProduct" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="dm-images rounded m-2" src={CreationProduct} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="deleteProduct" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="dm-images rounded mb-5" src={DeleteProduct} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="etiqueteTransparance" tabindex="-1" aria-labelledby="etiqueteTransparance" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">    
                                                <img className="image-etiquete rounded mb-5" src={EticketTransparent} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="listProductCreated" tabindex="-1" aria-labelledby="listProductCreated" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="dm-images rounded mb-5" src={ListProductCreated} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="SearchBarDM" tabindex="-1" aria-labelledby="SearchBarDM" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="dm-images rounded mb-5" src={SearchBar} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="QrcodePage" tabindex="-1" aria-labelledby="QrcodePage" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="dm-images rounded mb-5" src={QrcodePage} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="modalOrmaes" tabindex="-1" aria-labelledby="modalOrmaes" aria-hidden="true">
                <div className="modal-dialog dialog-ormaes modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Ormaes Projects</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>

                                        <div className='mt-5'>
                                            <h3>Projet CTS, création de l'application de transport de Strasbourg</h3>
                                            <h3 className='mt-3'>Réalisée en Java/Flutter</h3>
                                        </div>
                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#MainPageCts">
                                                        <h6>Perturbation button</h6>
                                                        <img className="img-fluid profile images-modal" src={PerturbationsButton} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#PerturbationsPage">
                                                        <h6>Perturbations page</h6>
                                                        <img className="img-fluid profile images-modal" src={PerturbationsPage} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#TouteLesLignes">
                                                        <h6>Toutes les lignes</h6>
                                                        <img className="img-fluid profile images-modal" src={TouteLesLignes} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#LineDirections">
                                                        <h6>Ligne information</h6>
                                                        <img className="img-fluid profile images-modal" src={LineDirections} alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#PerturbationInfo">
                                                        <h6>Perturbation info</h6>
                                                        <img className="img-fluid profile images-modal" src={PerturbationInfo} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#LineInformations">
                                                        <h6>Ligne options</h6>
                                                        <img className="img-fluid profile images-modal" src={LineInformations} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#CtsParkingsCar">
                                                        <h6>Parking Information</h6>
                                                        <img className="img-fluid profile images-modal" src={CtsParkingsCar} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#CtsParkingBike">
                                                        <h6>Parking information</h6>
                                                        <img className="img-fluid profile images-modal" src={CtsParkingBike} alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#Research">
                                                        <h6>Research Page</h6>
                                                        <img className="img-fluid profile images-modal" src={Research} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#Location">
                                                        <h6>Bike parking location</h6>
                                                        <img className="img-fluid profile images-modal" src={Location} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-2 item-orma col-lg-2 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#CtsFlexHop">
                                                        <h6>FlexHop</h6>
                                                        <img className="img-fluid profile images-modal" src={CtsFlexHop} alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-5'>
                                            <h3>Projet interne pour suivre les projets de chaque client<br/></h3>
                                            <h3 className='mt-3'>Créé en Java/Spring boot + Angular</h3>
                                        </div>


                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-4 mt-3 col-lg-4 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#GetAllProjects">
                                                        <h6>All projects</h6>
                                                        <img className="img-fluid profile images-modal-ormaes" src={GetAllProjects} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mt-3 col-lg-4 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#FollowProject">
                                                        <h6>Suivi Project</h6>
                                                        <img className="img-fluid profile images-modal-ormaes" src={FollowProject} alt="..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mt-3 col-lg-4 m-1">
                                                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#ProjectDetail">
                                                        <h6>Project detail</h6>
                                                        <img className="img-fluid profile images-modal-ormaes" src={ProjectDetail} alt="..." />
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>

                                        <div className='container'>
                                            <div className="row d-flex align-items-center control-position-images-exp">
                                                <div className="col-md-6 mt-3 col-lg-6 m-1">
                                                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#ComposantProject">
                                                            <h6>Project Composant</h6>
                                                            <img className="img-fluid profile images-modal-ormaes" src={ComposantProject} alt="..." />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mt-3 col-lg-6 m-1">
                                                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#ActivityProject">
                                                            <h6>Project Activity</h6>
                                                            <img className="img-fluid profile images-modal-ormaes" src={ActivityProject} alt="..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='mt-5'>
                                            <h6>Visitez le lien pour plus de détails sur les projets</h6>
                                            <a href="https://excalidraw.com/#json=U5PJlbPCtgwbs4rApdsA1,KvHrMqxW9azDDY74bowe6w" target='_blank'><h6>Plus d'information</h6></a>
                                        </div>





                                    <div className="portfolio-modal modal fade" id="MainPageCts" tabindex="-1" aria-labelledby="MainPageCts" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={PerturbationsButton} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="PerturbationsPage" tabindex="-1" aria-labelledby="PerturbationsPage" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={PerturbationsPage} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="TouteLesLignes" tabindex="-1" aria-labelledby="TouteLesLignes" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={TouteLesLignes} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="LineDirections" tabindex="-1" aria-labelledby="PerturbationsPage" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={LineDirections} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="CtsParkingBike" tabindex="-1" aria-labelledby="CtsParkingBike" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={CtsParkingBike} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="LineInformations" tabindex="-1" aria-labelledby="LineInformations" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={LineInformations} alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id="PerturbationInfo" tabindex="-1" aria-labelledby="PerturbationInfo" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={PerturbationInfo} alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id="CtsParkingsCar" tabindex="-1" aria-labelledby="CtsParkingsCar" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={CtsParkingsCar} alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id="Research" tabindex="-1" aria-labelledby="Research" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={Research} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="portfolio-modal modal fade" id="Location" tabindex="-1" aria-labelledby="Location" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={Location} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="CtsFlexHop" tabindex="-1" aria-labelledby="CtsFlexHop" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-images rounded mb-5" src={CtsFlexHop} alt="..." />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="portfolio-modal modal fade" id="GetAllProjects" tabindex="-1" aria-labelledby="GetAllProjects" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-app-images rounded mb-5" src={GetAllProjects} alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id="FollowProject" tabindex="-1" aria-labelledby="FollowProject" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-app-images rounded mb-5" src={FollowProject} alt="..." />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="portfolio-modal modal fade" id="ProjectDetail" tabindex="-1" aria-labelledby="ProjectDetail" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-app-images rounded mb-5" src={ProjectDetail} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="portfolio-modal modal fade" id="ComposantProject" tabindex="-1" aria-labelledby="ComposantProject" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-app-images rounded mb-5" src={ComposantProject} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-modal modal fade" id="ActivityProject" tabindex="-1" aria-labelledby="ActivityProject" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="control-image-exp">
                                                <img className="ormaes-app-images rounded mb-5" src={ActivityProject} alt="..." />
                                            </div>
                                        </div>
                                    </div>















                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalGorails" tabindex="-1" aria-labelledby="portfolioModalGorails" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">GoRails</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={gorails} alt="..." />
                                        <p className="mb-4">
                                        GoRails is an online course on FullStack programming for Ruby on Rails, the best place to learn the language.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://gorails.com/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">GoRails website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalEcole" tabindex="-1" aria-labelledby="portfolioModalEcole" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">42 School</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={ecole} alt="..." />
                                        <p className="mb-4">
                                        School 42 is based on peer-to-peer learning. I was preselected
                                        for one intensive month of projects and exams: Shell, C programming language, and algorithms.
                                        </p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2" href="https://42.fr/en/homepage/" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">42 website</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="dogheroModal" tabindex="-1" aria-labelledby="dogheroModal" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">DogHero</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={doghero} alt="..." />
                                        <p className="mb-4">This site was made for dog owners who are looking for company when they go out for an activity, also stores can sell products and create events.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/DogHero-Terre-des-chiens" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">DogHero Project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalSports" tabindex="-1" aria-labelledby="portfolioModalSports" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Sports With Me</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Sports} alt="..." />
                                        <p className="mb-4">This sport meeting application was a three-person team project,
                                         completed in two weeks. The goal: Find people to practice diversified sports activities,
                                         and create or take part in offered sporting events.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/cmarion-mq/Sports_with_ME_Final_Project" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Sports With Me Project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalFollownuts" tabindex="-1" aria-labelledby="portfolioModalFollownuts" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">FollowNut's</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={FollowNut} alt="..." />
                                        <p className="mb-4">This is the final project of the formation (The hacking Project),<br/> made with a group of 5 persons in total.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/follownut_front" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">Follow Nut's project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalAgency" tabindex="-1" aria-labelledby="portfolioModalAgency" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Property Search</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Agency} alt="..." />
                                        <p className="mb-4">An application that search for properties, made with Rails + React,<br/>
                                         5 persons in total worked in this project.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/thp-immo_front" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Agency project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalGossip" tabindex="-1" aria-labelledby="portfolioModalGossip" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Gossip Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Gossip} alt="..." />
                                        <p className="mb-4">A social network project made in Ruby On rails,
                                         carried out with The Hacking Project training course.
                                         You can register, log in, create a post, edit and delete.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Gossip_Project_Pimp" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Gossip project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalPizza" tabindex="-1" aria-labelledby="portfolioModalPizza" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Pizza Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Pizza} alt="..." />
                                        <p className="mb-4">Made in javascript, this online pizza ordering application
                                         allows you to take order of pizza and add it to a basket.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Pizza_Site_JS" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Pizza project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalMovies" tabindex="-1" aria-labelledby="portfolioModalMovies" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Movies Search</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Movies} alt="..." />
                                        <p className="mb-4">This online movie search, in javascript, used an API from IMDB.<br/>
                                         It allows you to search for details about any movie or series.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Movie_List-info_Project" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Movie Search project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalNotes" tabindex="-1" aria-labelledby="portfolioModalNotes" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Note Block Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Note} alt="..." />
                                        <p className="mb-4">With the Note Block project in ReactJS using StorageData,<br/>
                                            you can create a note, edit,delete and it has an automatic save feature.
                                        </p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Note-Block" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Note project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalDoc" tabindex="-1" aria-labelledby="portfolioModalDoc" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Doc Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Doc} alt="..." />
                                        <p className="mb-4">A template responsive from a doctor website.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Project_Doc_template" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Doc project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalStarbucks" tabindex="-1" aria-labelledby="portfolioModalStarbucks" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Starbucks Project</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src={Starbucks} alt="..." />
                                        <p className="mb-4">Template from the StartBucks website in HTML + CSS with responsive.</p>
                                        <button className="btn btn-primary mt-2" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                        <a className="btn btn-primary link-to-website mx-2 mt-2" href="https://github.com/kleberkunha/Starbucks_copy" data-bs-dismiss="modal" target="_blank" rel="noreferrer">
                                            <i className="fas fa-times fa-fw link-to-website">See Starbucks project</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalPhone" tabindex="-1" aria-labelledby="portfolioModalPhone" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Phone Contact</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <h2>06 08 50 58 51</h2>
                                        <p className="mb-4">I'm available 24h, if you call, and I do not answer, please leave a message and I will be in contact a few minutes later.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModalEmail" tabindex="-1" aria-labelledby="portfolioModalEmail" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="modal-body text-center pb-5">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Email Contact</h2>
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <h2>hello.kleberkunha@gmail.com</h2>
                                        <p className="mb-4">I will be answering as fast as I can, in case that you did not have any answer please contact me direct by phone. 06-08-50-58-51.</p>
                                        <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                            <i className="fas fa-times fa-fw"></i>
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;
