import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
            <div className="text">
                <span>
                    ©
                    <span id="year">{(new Date).getFullYear()}</span>
                    <a href="https://mbktechstudio.com/" target="_blank"> MBK Tech Studio</a>. All
                    Rights Reserved |
                    <a href="https://mbktechstudio.com/Terms&Conditions" target="_blank"> Terms &amp; Conditions </a>
                    |
                    <a href="https://mbktechstudio.com/FAQs" target="_blank"> FAQs </a>
                    |
                    <a href="https://mbktechstudio.com/Support/" target="_blank"> Support &amp; Contact</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
