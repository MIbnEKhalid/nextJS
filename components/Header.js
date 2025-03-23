import Link from 'next/link';
import Head from 'next/head'; 
const Header = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/x-icon" href="https://mbktechstudio.com/Assets/Images/Icon/dgicon.svg" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput-jquery.min.js" defer></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput-jquery.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <script src="https://kit.fontawesome.com/0934e8e9d3.js" crossOrigin="anonymous" defer></script>
            </Head>
            <header>
                <nav>
                    <div className="navbar">
                        <div className="logo">
                            <div className="image">
                                <img src="https://portal.mbktechstudio.com/Assets/Images/dg.svg" alt="Logo" />
                            </div>
                            <div className="text">
                                <a href="/">MBK Tech Studio</a>
                            </div>
                        </div>
                        <ul className="menu">
                            <div className="media-icons-m" id="media-icons-m">
                                <a href="https://instagram.com/mbktech.studios" target="_blank">
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.facebook.com/people/MBK-Tech-Studio/61559079077988/" target="_blank">
                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/muhammad-bin-khalid-89711b25b" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://x.com/ibnekhalid28" target="_blank">
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/MIbnEKhalid" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://youtube.com/@mibnekhalid" target="_blank">
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                                <a href="https://discord.gg/" target="_blank">
                                    <i className="fab fa-discord" aria-hidden="true"></i>
                                </a>
                                <a href="https://signal.me/#eu/0Bxn3qmtp8gtYNuy6eJ_F3WaHWHrQW3uefaC2y01VCWtduFQCwJHvIFL6N4VOtsv" target="_blank">
                                    <i className="fa-brands fa-signal-messenger" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="cancel-btn">
                                <i className="fas fa-times" aria-hidden="true"></i>
                            </div>
                        </ul>
                        <div className="media-icons" id="media-icons">
                            <a href="https://instagram.com/mbktech.studios" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.facebook.com/people/MBK-Tech-Studio/61559079077988/" target="_blank">
                                <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-bin-khalid-89711b25b" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://x.com/ibnekhalid28" target="_blank">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/MIbnEKhalid" target="_blank">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://youtube.com/@mibnekhalid" target="_blank">
                                <i className="fab fa-youtube" aria-hidden="true"></i>
                            </a>
                            <a href="https://discord.gg/" target="_blank">
                                <i className="fab fa-discord" aria-hidden="true"></i>
                            </a>
                            <a href="https://signal.me/#eu/0Bxn3qmtp8gtYNuy6eJ_F3WaHWHrQW3uefaC2y01VCWtduFQCwJHvIFL6N4VOtsv" target="_blank">
                                <i className="fa-brands fa-signal-messenger" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div className="menu-btn" style={{ opacity: 1, pointerEvents: 'auto' }}>
                        <i className="fas fa-bars" aria-hidden="true"></i>
                    </div>
                </nav>
            </header>
            <script src="/Assets/Scripts/header.js" defer></script>
        </>
    );
};

export default Header;
