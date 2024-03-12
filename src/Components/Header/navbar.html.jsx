import '../../global.scss';
import { HashLink as Link } from 'react-router-hash-link';


function HeaderBar () {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link smooth to="#top-section" className="nav-link py-3 px-0 px-lg-3 rounded" href="#masthead-heading">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="#experiences" className="nav-link py-3 px-0 px-lg-3 rounded" href="#experiences">Experiences</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="#studies" className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Studies</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="#projects" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="#about" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">About</Link>
                        </li>
                        <li class="nav-item">
                            <a to="#" className="nav-link py-3 px-0 px-lg-3 rounded" href="https://www.mediafire.com/file/9t99muycylp7qf0/cv_Kleber_da_cunha_2024_alternance.pdf/file" target="_blank" rel="noreferrer">CV</a>
                        </li>
                        <li class="nav-item">
                            <Link smooth to="#contact" className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderBar;
