import React from 'react'
import hello_cow from './../images/hello_cow.png'
import { Form } from 'react-router-dom';
const ContactUs = () => {
    return (
        <div className='d-flex flex-xxl-row  flex-xl-row flex-lg-row flex-md-row flex-sm-column flex-column  m-4'>
            <div className='col-12 col-xl-5 col-lg-5 col-md-5 col-sm-12 p-2 d-flex justify-content-center'>
                <img src={hello_cow} alt='hello' className='w-100'/>
            </div>
            <div className='col-12 col-xl-7 col-lg-7 col-md-7  col-sm-12 p-5'>
                <form>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Contact Number</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your contact number" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputPassword1">Address</label>
                        <textarea rows="4" cols="50" class="form-control" id="exampleInputPassword1" placeholder="Your Address" />
                    </div>
                    <div class="form-group mb-3">
                        <label for="exampleInputEmail1">Organization</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Organization if any" />
                    </div>
                    
                    <div class="form-group  mb-3">
                        <label for="exampleInputPassword1">Query/Feedback</label>
                        <textarea rows="4" cols="50" class="form-control" id="exampleInputPassword1" placeholder="Your feedback are most valued to us. Any query let us know." />
                    </div>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <br></br>

                    {/* <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" class="btn btn-primary float-end">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default ContactUs;