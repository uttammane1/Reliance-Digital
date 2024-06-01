
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};
const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const Carousal = () => {
    return (
        <div>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
            <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/intranet-Carousal-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDI1MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hlMC85OTQxNTE2MTU2OTU4LmpwZ3wxMDJmNjQ2YzdjYTIyMzk2NTM5NTMyYjZhNTgyN2M2MjlhMTM3Y2FmNWNhZjAwNzUxY2ExMjg0ZmNhNGMxZjRl" alt="" />
             <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Teaser-Banner-18-01-2023-01.jpg?context=bWFzdGVyfGltYWdlc3wxNjAxMzh8aW1hZ2UvanBlZ3xpbWFnZXMvaGNmL2gzMS85OTQ5MzMxMjU5NDIyLmpwZ3wzYzRmZmY5OTBkNzc1NzAxN2FhMDQ4NDYzM2U2MGU3MmNlNDFiNTg3YThiMDNhMjkwNWQwMDA1NWI4YzkyODE2" alt="" />  
            </Slide>

            <div style={{marginTop:"-30px"}}>
            <Slide {...properties}>
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Carousel-Banner-Winter-Store-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjM1NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2hiMS85OTMzMzQ5NjgzMjMwLmpwZ3wyM2ZkYjBmNWRkZmZlMmZlZTRiYWJmZmVlMDg4ZjBjZTE2YzM0ODdkNmM5NDRmNWExNjFjMTk3N2M4NTFjOWRh" alt="" />
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Laptops-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMTQ3MTB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQwL2g3Zi85OTM3ODk0NTcyMDYyLmpwZ3w3NDVjM2RmNWQ4OWQwNzRmYmNjNDQ4MWNkMDE5ZTdkNjRiNmZlMjVlNThkMTBjZTVmZTllOGRmYWNiNDhjNThj" alt="" />
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/iPhone14-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0MjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ1L2g1MS85OTQ5MjMyODU3MTE4LmpwZ3w3OWFjMWVhZjE0Y2EzNzAyODcyZTBmM2M2MzQ1OTU1YzI2Y2QwYjg4MGYyYTc0NjFmOGNhM2NhYjEyYTk5MTk4" alt="" />
        </Slide>
            </div>
        </div>
       
    );
};

export default Carousal;