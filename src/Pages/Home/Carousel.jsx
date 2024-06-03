
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
            <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Pre-Monsoon-Sale-HPMC-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxOTQyMTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDFjL2g0ZS8xMDE0NTI3NjQ5Mzg1NC5qcGd8M2IxNzY5ZTM3MGFmYzY4YTFiNTllNTQ5MTZlNjhmN2MwMzQzNjlhMmZmZmI4NDJiY2ZjNTdlYjhiOWU4M2E1MQ" alt="" />
             <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/OnePlus-Nord-3-Lite-5G-D.jpg?context=bWFzdGVyfGltYWdlc3wxMDgyNDF8aW1hZ2UvanBlZ3xpbWFnZXMvaGZmL2g0NC8xMDE1NTc4NzIyMzA3MC5qcGd8MDEwY2U5NjkxYzZhOWZhMzdiZmRlNWFjOWE1ODlmZjQ2ZGI4MTc4YTc5NzVmNTExM2ExMzBiN2M2YjNhZGVhMw" alt="" />  
            </Slide>

            <div style={{marginTop:"-30px"}}>
            <Slide {...properties}>
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Apple-Airpods-Price-call-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w2NjM4MHxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDJkLzEwMTU0NTI1MDk4MDE0LmpwZ3xiNjU4OWFiYWUyMmFiMTEyNTI0MGM3MGYzZTVmMjVlZWM1OTg3OGNjZDczOWFlNTI4MThiODY2NmEwMjM1NGM1" alt="" />
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Catch-Grab-discounts-LED-TV-Banners-D.jpg?context=bWFzdGVyfGltYWdlc3wxNDI2MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDk2L2hhMC8xMDE1MTk5Mzc3MDAxNC5qcGd8ZjAwODA1MzEzMWUwODM0MjBlZTc4YjU3ZTI5YTJjZDYxZjI4YzcwNWNlYWRkMWNiOTI2MjAyYWQyNGQ0NjIxNw" alt="" />
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/digital-Mobile-Days-1365x260-px.jpg?context=bWFzdGVyfGltYWdlc3wxMjM3MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGNkL2hiZi8xMDE1NDUyNjk2NTc5MC5qcGd8ZjE4NjM2MTMyODgxZWEzZWY2NWJkYTBlNzg1Y2FkOGM2YmMwMTVkNWY4ZTJlNjhlNjk4MWYzM2Y3MjgzYjJkYg" alt="" />
          <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Digital-Mobile-Accessories-Fiesta-D.jpg?context=bWFzdGVyfGltYWdlc3wxMzM1MjN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2g4Mi8xMDE1NDUyNjU3MjU3NC5qcGd8ZDlkODY5OTdjMGNmMTM1Mjk5NjIxM2I5ZWY5N2ZiMDUzZjkxODU5NWI3Zjc3MDQwMjFkYWQ4ZGFhZjM4MmEzMg" alt="" />
          
        </Slide>
            </div>
        </div>
       
    );
};

export default Carousal;