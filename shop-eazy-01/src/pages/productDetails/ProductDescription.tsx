import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMinus, faPlus, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import userImg from '../../assets/img/user.jpg';

export function ProductDescription({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <>    
    <div className="bg-light p-30">
        <div className="nav nav-tabs mb-4">
            <a className={`nav-item nav-link text-dark ${activeTab === 'description' ? 'active' : ''}`} 
               onClick={() => setActiveTab('description')} 
               style={{ cursor: 'pointer' }}>Description</a>
            <a className={`nav-item nav-link text-dark ${activeTab === 'information' ? 'active' : ''}`} 
               onClick={() => setActiveTab('information')} 
               style={{ cursor: 'pointer' }}>Information</a>
            <a className={`nav-item nav-link text-dark ${activeTab === 'reviews' ? 'active' : ''}`} 
               onClick={() => setActiveTab('reviews')} 
               style={{ cursor: 'pointer' }}>Reviews (0)</a>
        </div>
        <div className="tab-content">
            {activeTab === 'description' && (
            <div className="tab-pane fade show active">
                <h4 className="mb-3">Product Description</h4>
                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
            </div>
            )}
            {activeTab === 'information' && (
            <div className="tab-pane fade show active">
                <h4 className="mb-3">Additional Information</h4>
                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0">
                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                            </li>
                            <li className="list-group-item px-0">
                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                            </li>
                            <li className="list-group-item px-0">
                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                            </li>
                            <li className="list-group-item px-0">
                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                            </li>
                            </ul> 
                    </div>
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item px-0">
                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                            </li>
                            <li className="list-group-item px-0">
                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                            </li>
                            <li className="list-group-item px-0">
                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                            </li>
                            <li className="list-group-item px-0">
                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                            </li>
                            </ul> 
                    </div>
                </div>
            </div>
            )}
            {activeTab === 'reviews' && (
            <div className="tab-pane fade show active">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="mb-4">1 review for "Product Name"</h4>
                        <div className="media mb-4 d-inline-flex">
                            <img src={userImg} alt="Image" className="img-fluid me-3 mt-1"  style={{ width: '45px', height: '45px' }} />
                            <div className="media-body">
                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                <div className="text-primary mb-2">
                                    <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                                    <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                                    <small><FontAwesomeIcon icon={faStarHalfStroke} className="text-primary mr-1" /></small>
                                    <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
                                    <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
                                </div>
                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pl-md-4">
                        <h4 className="mb-4">Leave a review</h4>
                        <small>Your email address will not be published. Required fields are marked *</small>
                        <div className="d-flex my-3">
                            <p className="mb-0 mr-2">Your Rating * :</p>
                            <div className="text-primary">
                                <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                                <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                                <small><FontAwesomeIcon icon={faStarHalfStroke} className="text-primary mr-1" /></small>
                                <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
                                <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
                            </div>
                        </div>
                        <form>
                            <div className="form-label mb-3">
                                <label htmlFor="message" className='pb-2'>Your Review *</label>
                                <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                            </div>
                            <div className="form-label mb-3">
                                <label htmlFor="name" className='pb-2'>Your Name *</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-label mb-3">
                                <label htmlFor="email" className='pb-2'>Your Email *</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-label mb-0">
                                <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
    </>
  );
}

export default ProductDescription;
