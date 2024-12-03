import Header from './Header';
import MainMessage from './MainMessage';
import Motivation from './Motivation';
import Listing from './Listing';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <MainMessage />
                <Motivation />
                <Listing />
                <About />
            </main>
            <Contact />
        </>
    );
}

export default Home;
