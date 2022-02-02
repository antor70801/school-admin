import React from 'react';
import Navigations from '../Shareds/Navigations';

const StudentAdmission = () => {
    return (
        <div>
            <Navigations></Navigations>
            <main className="mt-5 pt-5">
                <div className="container px-4">
                    <div className='border rounded' >
                        <h4 className='text-center bg-success py-2 rounded text-light'> Manage Student</h4>
                        <td className='ps-2'>

                            <select name="SSCboard " required class="smoothborderSelect1" >
                                <option value="" selected>Select Shift</option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>
                            </select>
                            <select name="SSCboard" required class="smoothborderSelect1" >
                                <option value="" selected>Select Session</option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>
                            </select>
                            <select name="SSCboard" required class="smoothborderSelect1" >
                                <option value="" selected>Select Version </option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>
                            </select>
                            <select name="SSCboard" required class="smoothborderSelect1" >
                                <option value="" selected>Select Class </option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>
                            </select>
                            <select name="SSCboard" required class="smoothborderSelect1" >
                                <option value="" selected>Select Group </option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>
                            </select>
                            <select name="SSCboard" required class="smoothborderSelect1" >
                                <option value="" selected>Select Sections </option>
                                <option value="barisal">Barisal</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="comilla">Comilla</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="jessore">Jessore</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="madrasah">Madrasah</option>
                                <option value="tec">Technical</option>
                                <option value="dibs">DIBS(Dhaka)</option>
                                <option value="BOU">BOU(Bangladesh Open University)</option>

                            </select>
                            <input className='smoothborderSelect1' type="text" placeholder='Roll' />

                        </td>
                        <div className="card-body border rounded">
                            <div className="table-responsive">
                                <table className="table table-bordered data-table">
                                    <thead style={{ backgroundColor: "#ededed" }}>
                                        <tr>

                                            <th scope="col"> SL. No.</th>
                                            <th scope="col">Student ID</th>
                                            <th scope="col">Photo</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Class Name</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">Version</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Guardian`s  Contact</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>123</td>
                                            <td><img width="40" src="https://avatars.githubusercontent.com/u/97940701?v=4" alt="" /></td>
                                            <td>Payrasot</td>
                                            <td>Nine</td>
                                            <td>54</td>
                                            <td>Day</td>
                                            <td>01986297080</td>
                                            <td>01312297080</td>
                                            <td><p className='bg-primary rounded px-2 text-light'>Active</p></td>
                                            <td style={{ minWidth: "100px" }}>
                                                <i className="fas fa-edit" style={{ color: "#660000" }}></i>
                                                <i className='fas fa-eye mx-2'></i>
                                                <i className="fas fa-trash text-danger"></i>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentAdmission;