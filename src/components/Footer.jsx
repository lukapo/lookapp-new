import '../css/Footer.css';

const Footer = () => {

    return (
        <footer>
            <div className="section-divider-bar"> </div>
            <br />
            <p><strong>&copy; {new Date().getFullYear()} LookApp - obrt za poduku i savjetovanje</strong><br />
                <span>Ljube Babića 76D,
                    49243, Oroslavje</span></p>

        </footer>);
}

export default Footer;