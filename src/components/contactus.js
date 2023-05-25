import React from 'react'
import hello_cow from './../assets/images/hello_cow.png';
const ContactUs = () => {
    return (
        <div className='d-flex flex-xxl-row  flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column  m-4'>
            <div className='col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 p-2 d-flex justify-content-center'>
                <img src={hello_cow} alt='hello' className='w-75 h-fit-content'/>
            </div>
            <div className='col-12 col-xl-7 col-lg-7 col-md-7 col-sm-12 p-5 d-flex justify-content-center'>
                <form>
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

                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary float-end">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default ContactUs;