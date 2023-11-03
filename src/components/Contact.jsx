import SectionDivider from "./SectionDivider";
import '../css/Contact.css';
const Contact = () => {
  return (
    <>
    <SectionDivider title="Kontakt" id="contact"/>
    <section className="contact-section">
            <a href="tel:+385913653328">
                <img src="/images/white-phone-icon-png--clipart-best-30.png" alt="Telephone icon" width="40px" />
                <em>+385913653328</em>
            </a>
            <hr />


            <a href="mailto:lookapp200@gmail.com">
                <img className="img2" src="/images/mail.png" alt="Mail icon" width="40px"/>
                <em>luka.postruzin9@gmail.com</em>
            </a>
            <hr />
            <a className="social" href="https://www.facebook.com/obrtLookApp" target="_blank" rel="noreferrer">
                <div>
                    <img src="/images/clipart735576.png" alt="Facebook icon" width="40px" />
                    <img src="/images/instagram-icon.png" alt="Social icon" width="40px"/>
                </div>
            </a>
    </section>
    <hr/>
    <section className="map-section">
        <header>
            <h3>Kako do nas?</h3>
        </header>
        <iframe className="map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2772.600365326565!2d15.910143520538687!3d45.97924092648918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d45.9795727!2d15.911597299999999!5e0!3m2!1sen!2shr!4v1686912731079!5m2!1sen!2shr"
             loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        
        </iframe>
    </section>
    <footer>
    <div className="section-divider-bar"> </div>
    <br />
    <p><strong>&copy; {new Date().getFullYear()} LookApp - obrt za poduku i savjetovanje</strong><br />
        Ljube Babića 76D,
        49243, Oroslavje</p>

</footer>
</>
  )
}

export default Contact