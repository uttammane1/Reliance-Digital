import { Image } from "@chakra-ui/react";
import { Load } from "./Style";


const Loader = () => {
    return (
        <div>
        <Load>
           <Image height = {"500px"} width = "450px" src="https://assetscdn1.paytm.com/images/catalog/product/D/DE/DEAUP-TO-RS-300PAYT4FA507086/0x1920/70/1.jpg" alt="logo"/>
        </Load>
        </div>
    );
};

export default Loader;