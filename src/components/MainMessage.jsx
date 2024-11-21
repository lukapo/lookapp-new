import "../css/MainMessage.css";

const MainMessage = () => {
    return (
        <>
            <section className="main-section">
                <img
                    src="./images/logo_light_bulb.png"
                    width="10%"
                    alt="LookApp logo - light bulb"
                />
                <h2>Osvijetlite svoju zabavu</h2>
            </section>
            <img src="./images/minions_cropped.png" alt="Napuhanac Minioni (Malci) u dvorištu" width="100%" />
        </>
    );
};

export default MainMessage;
