import SectionDivider from "./SectionDivider";
const Contact = () => {
  return (
    <footer>
    <section  id="contact">
        <header>
        <SectionDivider title="Kontakt"/>
        </header>
        <div>

            <a href="tel:+385913653328">
                <img src="../src/assets/images/white-phone-icon-png--clipart-best-30.png" alt="Telephone icon"/>
                <em>+385913653328</em>

            </a>


            <a href="mailto:lookapp200@gmail.com">
                <img className="img2" src="../src/assets/images/mail.png" alt="Mail icon" />
                <em>lookapp200@gmail.com</em>
            </a>

            <a className="social" href="https://www.facebook.com/obrtLookApp" target="_blank" rel="noreferrer">
                <img src="../src/assets/images/clipart735576.png" alt="Facebook icon" />
                <img src="../src/assets/images/instagram-icon.png" alt="Social icon" />
            </a>

        </div>
    </section>
    <hr/>
    <section>
        <br />
        <header>
            <h3>Kako do nas?</h3>
        </header>
        <iframe className="map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d2772.600365326565!2d15.910143520538687!3d45.97924092648918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d45.9795727!2d15.911597299999999!5e0!3m2!1sen!2shr!4v1686912731079!5m2!1sen!2shr"
             loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>

    <p><strong>© 2023 LookApp - obrt za poduku i savjetovanje</strong><br />
        Ljube Babića 76D,
        49243, Oroslavje</p>

</footer>
  )
}

export default Contact