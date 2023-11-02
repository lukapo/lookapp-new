import "../css/SectionDivider.css";
import PropTypes from "prop-types";

const SectionDivider = ({ title, id }) => {
    return (
        <>
                <h2 id={id } className="section-divider-title">{title}</h2>
            
            <div className="section-divider-bar"> </div>
        </>
    );
};

SectionDivider.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default SectionDivider;
