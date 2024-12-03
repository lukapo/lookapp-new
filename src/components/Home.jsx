import Header from './Header';
import MainMessage from './MainMessage';
import Motivation from './Motivation';
import Listing from './Listing';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <MainMessage />
                <Motivation />
                <Listing />
                <About />

                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default Home;
