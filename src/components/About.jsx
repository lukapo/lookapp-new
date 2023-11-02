import SectionDivider from "./SectionDivider";
const About = () => {
  return (
    <>
    <SectionDivider title="O nama..." id="about" />
    <section>
         
        <p>
            Primarna djelatnost obrta LookApp su poduke i savjetovanje.<br />
            Držimo poduke vezane uz Microsoft Office paket (Excel, Word, Powerpoint) zaposlenicima tvrtki i
            privatno, predajemo znanje o frontend
            programiranju (HTML, CSS, JavaScript, Git, ReactJS),
            programskom jeziku Java te dajemo instrukcije iz raznih predmeta osnovnih i srednjih škola.
        </p><br />
        <p>
            Također, savjetujemo klijente kako napisati kvalitetan životopis i molbu kod apliciranja za posao i
            pomažemo im u pisanju istih, ispravljamo gramatičke greške kako na hrvatskom, tako i na engleskom
            jeziku.
        </p><br />
        <p>

            Uz navedeno, iznajmljujemo tobogane i dvorce na
            napuhavanje i uživamo u svakom dobro obavljenom poslu.<br />

        </p>
        <div style={{textAlign: "center"}}>
        <p className="last-paragraph"><em>Obratite nam se s povjerenjem.</em></p>
        <img className="business-pic" src="../src/assets/images/business.jpg" alt="Business data" width="50%" />
        </div>
    </section>
    </>
  );
}

export default About;