import React from 'react';
import Navigations from '../Shareds/Navigations';

const EditStudentProfile = () => {
    return (
        <>
            <Navigations></Navigations>
            <main className="mt-5 pt-5">
                <div className="container px-4">
                    <div className=''>
                        <div className="col-12-col-md-7 col-lg-10 shadow rounded my-10 mx-auto">
                            <h4 className='mb-5 m-3 pt-3'>
                                Profile Info
                            </h4>
                            <table class="table p-3 m-3 table-borderless">

                                <tbody className=''>
                                    <tr>

                                        <td>Name</td>
                                        <td>  <input className='smoothborderSelect2' type="text" placeholder='Jahid Hasan Antor' /></td>

                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td> <input className='smoothborderSelect2' type="text" placeholder='Antor7080@gmail.com' /></td>
                                    </tr>
                                    <tr>
                                        <td>Date Of Barth</td>
                                        <td> <input className='smoothborderSelect2' type="text" placeholder='25/12/1197' /></td>
                                    </tr>
                                    <tr>
                                        <td>Student Mobile Number</td>
                                        <td> <input className='smoothborderSelect2' type="text" placeholder='+8801986297080' /></td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Name</td>
                                        <td> <input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Father's Name</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Class Roll No.</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>	Mother's Occupation</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Father's Occupation</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Mobile Number</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Father's Mobile Number</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Permanent Address</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Present Address</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Legal Guardian</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                    <tr>
                                        <td>Local Guardian</td>
                                        <td><input className='smoothborderSelect2' type="text" placeholder='----' /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default EditStudentProfile;