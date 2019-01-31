import React from 'react';
import Slick from 'react-slick';
const SliderTemplate = (props) => {
    let template = null;
   const settings = {
       dots:true,
       infinite:true,
       arrows: false,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1
   }

   switch(props.type){
       case ('featured'):
       template = props.data.map((item, i)=>{
           return(
               <div key={i}>
                    {i}
               </div>
           )
       })
       break;
       default:
       template = null;

   }
return(
    <Slick {...settings}>
        {template}
    </Slick>
)
}

export default SliderTemplate;