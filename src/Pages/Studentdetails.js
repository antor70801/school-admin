import React from 'react';
import Navigations from '../Shareds/Navigations';

const Studentdetails = () => {
    return (
        <div>
            <Navigations></Navigations>
            <main className="mt-5 pt-5">
                <div className="container px-4">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-7">
                            <div className="row">
                                <div className="col-6 col-lg-7 col-md-7">
                                    <div className="p-3 mb-3 h-100 shadow">
                                        <div className="d-flex justify-content-between">
                                            <div className='text-start d-flex'>
                                                <img width='60' src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" />
                                                <br />
                                                <div className='ms-2'>
                                                    <h6 className='m-0'>Jahid Hasan Antor</h6>
                                                    <p className='m-0 text-secondary'>Class Nine</p>
                                                    <small className='text-muted m-0'>Last Login at: </small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-5">

                                    <div className="p-3  h-100 shadow">
                                        <div className="">

                                            <div className='text-end'>
                                                <h6 className='m-0 text-start'>Total Class</h6>

                                                <h6 className='text-end m-0'>
                                                    <i class="fas fa-dumpster"></i>
                                                </h6>
                                                <h6 className='text-start m-0 text-primary'>
                                                    0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        <div className="col-6 col-md-5 col-lg-5">
                            <div className="row h-100">
                                <div className="col-6 col-md-6 col-lg-6">
                                    <div className="p-3 mb-3 h-100 shadow">
                                        <div className="">

                                            <div className='text-end'>
                                                <h6 className='m-0 text-start'>Student ID</h6>

                                                <h6 className='text-end m-0'>
                                                    <i class="fas fa-dumpster"></i>
                                                </h6>
                                                <h6 className='text-start m-0 text-primary'>
                                                    0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-lg-6">
                                    <div className="p-3 mb-3 h-100 shadow">
                                        <div className="">

                                            <div className='text-end'>
                                                <h6 className='m-0 text-start'>Due Invoice</h6>

                                                <h6 className='text-end m-0'>
                                                    <i class="fas fa-dumpster"></i>
                                                </h6>
                                                <h6 className='text-start m-0 text-primary'>
                                                    0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                    <div className="col-12-col-md-7 col-lg-7 shadow rounded my-5">
                            <h4 className='mb-5 pt-3'>
                                Profile Info
                            </h4>
                            <table class="table table-borderless">

                                <tbody>
                                    <tr>

                                        <td>Name</td>
                                        <td>Jahid Hasan Antor</td>

                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>Antor7080@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Date Of Barth</td>
                                        <td>25-12-1997</td>
                                    </tr>
                                    <tr>
                                        <td>Student Mobile Number</td>
                                        <td>+8801986297080</td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Name</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Father's Name</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Class Roll No.</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>	Mother's Occupation</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Father's Occupation</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Mobile Number</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Father's Mobile Number</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Permanent Address</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Present Address</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Legal Guardian</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Local Guardian</td>
                                        <td>---</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Studentdetails;