import Footer from "./Footer";

function NotFound() {
    return (
        <>
            <header className="header-section" style={{ padding: "8px"}}>
            </header>
            <main style={{ padding: "20px", height: "78vh" }}>
                <h1>Stranica nije pronađena</h1>
                <p>
                    Ova stranica više nije dostupna. Posjetite našu{' '}
                    <a href="/">početnu stranicu</a>.
                </p>
            </main>
            <Footer />
        </>
    );
}

export default NotFound;