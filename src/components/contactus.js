import React from 'react'
import "../styles/contactUs.css";

const ContactUs = () => {

    const sendEmail = () => {
        console.log('Send Mail');
    }


    return (
        <div id="contactUs" className='contact-us d-flex flex-xxl-row  flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column  m-4'>
            <div className='col-12 col-xl-8 col-lg-8 col-md-8 col-sm-12 p-2 d-flex justify-content-center'>
                <div className='col-6'>
                    <img src='./assets/images/hello_cow.png' alt='hello' className='w-75 h-fit-content' />
                </div>
                <div className='col-6'>
                    <div>Meet Us</div>
                    <img src='./assets/images/map/angul.png' className='w-100 mb-3' style={{ borderRadius: '1vw', boxShadow: '5px 5px #85a8d3' }} />
                    <div className='mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>&nbsp;Angul, India, Odisha</div>
                    <div className='mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>&nbsp;+91-7008270829</div>
                    <div className='mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>&nbsp;
                        <a href="mailto:utkarshparivar22@gmail.com">utkarshparivar22@gmail.com</a>
                    </div>
                </div>

            </div>
            <div id="contactUsForm" className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 px-5 d-flex justify-content-end'>
                {/* <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSdnogsjsYRxTl3uDt_ecXwnIOkySgv14ymZ78CVYtPN_n57RA/viewform?usp=sf_link" target="hidden_iframe" >
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Contact Number</label>
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your contact number" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <textarea rows="4" cols="50" className="form-control" id="exampleInputPassword1" placeholder="Your Address" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Organization</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Organization if any" />
                    </div>

                    <div className="form-group  mb-3">
                        <label htmlFor="exampleInputPassword1">Query/Feedback</label>
                        <textarea rows="4" cols="50" className="form-control" id="exampleInputPassword1" placeholder="Your feedback are most valued to us. Any query let us know." />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
                    <br></br>

                     {// <div className="form-group form-check">
                      //  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      //      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      // </div>  
                    }
                    <button type="submit" className="btn btn-primary float-end" onClick={sendEmail}>Submit</button>
                </form> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnNL0J1jCf4ZPf_x4lsthAE1ibtoFgySpmutvUthvBhrmScQ/viewform?embedded=true"
                 width="640" height="1180" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe>
            </div>
            <div className='wave'></div>
        </div>
    )
}

export default ContactUs;