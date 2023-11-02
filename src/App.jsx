/* import { useState } from "react"; */
import "./App.css";
/* import Lightbox from "yet-another-react-lightbox"; */
import "yet-another-react-lightbox/styles.css";
import Header from "./components/Header";
import Motivation from "./components/Motivation";
import Listing from "./components/Listing";
import About from "./components/About";
import Contact from "./components/Contact";
import MainMessage from "./components/MainMessage";


const App = () => {
    return (
        <>
            <Header />
            <MainMessage />
            <Motivation />
            <Listing />
            <About />
            <Contact />
        {/*     <Footer /> */}
        </>
    );
}

export default App;


/* function App() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: "../src/Minioni1.jpg" },
                    { src: "../src/Minioni2.jpg" },
                    { src: "../src/Minioni3.jpg" },
                ]}
            />
        </>
    );
}

export default App; */
