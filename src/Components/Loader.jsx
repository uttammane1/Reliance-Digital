import { Image } from "@chakra-ui/react";
import { Load } from "./Style";


const Loader = () => {
    return (
        <div>
        <Load>
           <Image height = {"100px"} width = "300px" src="https://i.ibb.co/6NyYS2H/New-Project-5.png" alt="logo"/>
        </Load>
        </div>
    );
};

export default Loader;