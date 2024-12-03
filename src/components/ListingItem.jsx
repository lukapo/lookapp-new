import PropTypes from "prop-types";
import "../css/ListingItem.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

const ListingItem = ({
    name,
    logoImage,
    description,
    price,
    dimensions,
    extraInfo,
    images,
    isLast,
}) => {
    const [index, setIndex] = useState(-1);
   /*  const [open, setOpen] = useState(false); */
 /*    console.log(name); */

    const imageList = images.map((image) => {
        const slide = { src: image };
        return slide;
    });
    return (
        <article id="listing-item">
            <div id="listing-item-title">
                <img src={logoImage} alt="Inflatable logo" />
                <h2>{name}</h2>
            </div>

            <dl>
                <dt>Opis</dt>
                <dd>{description}</dd>
                <dt>Dimenzije</dt>
                <dd>{dimensions}</dd>
                <dt>Cijena</dt>
                <dd>{price} EUR</dd>
                <dt>Dodatne informacije</dt>
                <dd>{extraInfo}</dd>
                <dt>Slike</dt>
                <p className="image-gallery">
                    {images.map((image, index) => (
                        <div className="thumbnail">
                        <img
                            key={index}
                            src={image}
                            alt={name + " " + index}
                            onClick={() => setIndex(index)}
                            type="button"
                        />
                        </div>
                    ))}
                </p>

                {isLast ? null : (
                    <>
                        <br />
                        <hr />
                    </>
                )}
                <Lightbox

                    index={index}
                    slides={imageList}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                   /*  index={index}
                    open={open}
                    close={() => {
                        setOpen(false);
                        setIndex(-1);
                    }}
                    slides={imageList} */
                />
            </dl>
        </article>
    );
};

ListingItem.propTypes = {
    name: PropTypes.string.isRequired,
    logoImage: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    dimensions: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    extraInfo: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    isLast: PropTypes.bool.isRequired,
};

export default ListingItem;
