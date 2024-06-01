import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const Slider3 = () => {
  return (
    <div>
        <Slide {...properties}>
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2" alt="" />
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Redmi-Note-12-5G-Series-NPI-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2MTM2M3xpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDZmLzk5NDQ5MDc0NDgzNTAuanBnfDY3MGJlYzc4OTFkYzE4Y2NlYTFhMTRjOTY0MjNkZGJlNzNmYzQ4MTkxYTkxODcyZjczZTllMTlmMjc2OGZkZDk" alt="" />
        <img style={{width:"100%"}} src="https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-NPI-Banner-13-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1ODQ4N3xpbWFnZS9qcGVnfGltYWdlcy9oZjAvaGQ5Lzk5NDgyNDk0ODk0MzguanBnfDk4NjcyMjQxZDE3ZDE0NDJkOGRlZTJmZDA0NDZhZTNhNmM5ZWQyY2EyMzlmYzVlM2IzZjA5MmI4ZjBmMTAxYTE" alt="" />
        </Slide>
    </div>
  );
};

export default Slider3;