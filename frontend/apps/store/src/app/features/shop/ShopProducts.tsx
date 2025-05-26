/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
 
 import product1 from '../../../assets/img/product-1.jpg';
 import product2 from '../../../assets/img/product-2.jpg';
 import product3 from '../../../assets/img/product-3.jpg';
 import product4 from '../../../assets/img/product-4.jpg';
 import product5 from '../../../assets/img/product-5.jpg';
 import product6 from '../../../assets/img/product-6.jpg';
 import product7 from '../../../assets/img/product-7.jpg';
 import product8 from '../../../assets/img/product-8.jpg';
 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar, faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';
import VendorCarousel from '../../VendorCarousel';

export function ShopProducts({ title }: { title: string }) {

  // Section: for sorting
  const [isOpenSort, setIsOpenSort] = useState(false);            
  const toggleCollapseSort = () => setIsOpenSort(!isOpenSort);

  // Section: for showing
  const [isOpenLimit, setIsOpenLimit] = useState(false);          
  const toggleCollapseLimit = () => setIsOpenLimit(!isOpenLimit);

  return (
    <>
    {/*-- Shop Product Start --*/}
    <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
            <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                        {/* <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                        <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button> */}
                        <button className="btn btn-sm btn-light">
                            <FontAwesomeIcon icon={faThLarge} />
                        </button>
                        <button className="btn btn-sm btn-light ml-2">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="ml-2">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown" onClick={toggleCollapseSort}
                            >Sorting - {isOpenSort}</button>
                            {isOpenSort && (
                            <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                <a className="dropdown-item" href="#">Latest</a>
                                <a className="dropdown-item" href="#">Popularity</a>
                                <a className="dropdown-item" href="#">Best Rating</a>
                            </div>
                            )}
                        </div>
                        <div className="btn-group ml-2">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" onClick={toggleCollapseLimit}data-toggle="dropdown">Showing</button>
                            {isOpenLimit && (
                            <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                <a className="dropdown-item" href="#">10</a>
                                <a className="dropdown-item" href="#">20</a>
                                <a className="dropdown-item" href="#">30</a>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product1} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product2} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product3} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product4} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product5} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product6} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product7} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product8} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product1} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <nav>
                    <ul className="pagination justify-content-center">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    {/*-- Shop Product End --*/}
    </>
  );
}

export default ShopProducts;
