import SectionDivider from "./SectionDivider";
import '../css/About.css';
const About = () => {
  return (
    <>
      <SectionDivider title="O nama..." id="about" />
      <section className="about-section">

        <p>
          Primarna djelatnost obrta LookApp su poduke i savjetovanje.</p>
        <p>
          Držimo poduke vezane uz Microsoft Office paket (Excel, Word, Powerpoint) zaposlenicima tvrtki i
          privatno, predajemo znanje o frontend
          programiranju (HTML, CSS, JavaScript, Git, ReactJS),
          programskom jeziku Java te dajemo instrukcije iz raznih predmeta osnovnih i srednjih škola.
        </p>
        <p>
          Također, savjetujemo klijente kako napisati kvalitetan životopis i molbu kod apliciranja za posao i
          pomažemo im u pisanju istih, ispravljamo gramatičke greške kako na hrvatskom, tako i na engleskom
          jeziku.
        </p>
        <p>

          Uz navedeno, iznajmljujemo tobogane i dvorce na
          napuhavanje i uživamo u svakom dobro obavljenom poslu.

        </p>
        <div style={{ textAlign: "center" }}>
          <p className="last-paragraph"><em>Obratite nam se s povjerenjem.</em></p>
          <div className="business-pic-container"><a href="https://g.co/kgs/78cd3jB"><img className="business-pic" src="./images/business.jpg" alt="Tabla obrta LookApp"/></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;