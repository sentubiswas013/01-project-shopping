/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';

import products from '../../core/config/products';
import Product from '../../shared/components/product';

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
                  
            {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <Product {...product} />
            </div>
            ))} 
            
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
