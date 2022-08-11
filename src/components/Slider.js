import {React,useEffect,useState}  from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/all'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
import './css/slider.css';
const Slider = () => {
     const SliderData = [
        {
          title: 'JBL Boom Box',
          subtitle :'Be loud be proud be ready to party'
        },
        {
            title: 'Iphone 13 Pro Max',
            subtitle :'Not just the tech you want'
        },
        {
 
            title: 'Sony Camera Alpha A7',
            subtitle :'Shoot for the best'
        },
        {
 
            title: 'Apple iwatch Series 7',
            subtitle :'Embrace your time'
        },
        {
 
          title: 'Bose Headphones',
          subtitle :'Sound that goes straight to your heart'
      },
      {

          title: 'Macbook Pro 2022',
          subtitle :'Think Different'
      },
      {

        title: 'Samsung 55" UHD TV',
        subtitle :'Bringing reality using virtuality'
    }
      ];
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const [auto,setauto] = useState(true);
    const intervaltime = 6000;
    let slideinterval;
    const nextslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === length - 1 ? 0 : current + 1))
 
    }
    const prevslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === 0 ? length - 1 : current - 1))         
   }
   useEffect(()=>{
     setauto(true)
    if(auto){
      slideinterval = setInterval(nextslide,intervaltime);
      }
    return ()=>{ 
      setauto(false);
      clearInterval(slideinterval);
    }
   })
 
    return (
        <div className = 'slider d-block w-100'>
            {SliderData.map((slide,index) =>{
                return(
                    <div key = {index} className={index === current ? 'slidemod current' : 'slidemod'}>
                    <h1 className = 'titleslider'>{slide.title}</h1>
                    <h3 className = 'subtitleslider'>{slide.subtitle}</h3>
                    <div className = 'content'> <Link to= '/Shop'> <ShopNowBtn /></Link>  </div>
                    </div>
                );
 
            })}
            <IoIosArrowForward className ='next' size ='32' onClick = {nextslide}/>
            <IoIosArrowBack className = 'prev' size ='32' onClick = {prevslide}/>
        </div>
    )
}
 
export default Slider