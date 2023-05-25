import React from 'react';
import '../styles/donate.css'
//import bgVideo from './../assets/videos/cow-eating-pexels.mp4';
//import qrCode from './../assets/images/payment/Utkarsh_Parivar_Payment.png';


const Donate = () => {
    return (
        <div className='video-main'>
           {/*  <video autoplay muted loop id="myVideo">
                <source src={'./../assets/videos/cow-eating-pexels.mp4'} type="video/mp4" />
            </video> */}
            <video src={'./assets/videos/cow-eating-pexels.mp4'} autoPlay muted loop/>
            <div className='video-content'>
                <p className='video-text'>Donate</p>
                <img src='./assets/images/payment/Utkarsh_Parivar_Payment.png' className='qrImageOnVideo'/>
            </div>
        </div>
    )
}

export default Donate