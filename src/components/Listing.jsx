import ListingItem from "./ListingItem";
import { inflatables } from "../data/inflatables";
import SectionDivider from "./SectionDivider";

const Listing = () => {
    return (
        <>
        <SectionDivider title="Ponuda" id="listing" />
        <section id="listing">
            {inflatables.map((item, index) => {
                let isLast = false;
                if (index === inflatables.length -1) {
                    isLast = true;
                }
                return (
                    <ListingItem
                        key={item.id}
                        logoImage={item.logoImage}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        dimensions={item.dimensions}
                        extraInfo={item.extraInfo}
                        images={item.images}
                        isLast = {isLast}
                    />
                );
            })}
        </section>
        </>
    );
};

export default Listing;
