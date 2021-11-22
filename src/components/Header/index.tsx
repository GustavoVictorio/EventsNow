import './styles.css';
import imgLogo from 'assets/img/logo.png';

export default function Header() {
    return (
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src={imgLogo} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/eventos">Eventos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}