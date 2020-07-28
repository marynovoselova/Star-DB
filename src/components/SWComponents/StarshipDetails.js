import React from "react";
import ItemDetails, {Record} from "../ItemDetails";
import { withSwapiService } from '../HOCHelpers';


const StarshipDetails = (props) => {
    return (
        <ItemDetails { ...props } >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
            <Record field="manufacturer" label="Manufacturer" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);