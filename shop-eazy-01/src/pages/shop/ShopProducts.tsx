import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';

// import products from '../../core/config/products';
import Product from '../../shared/components/Product';
import { productService } from '../../core/services/productService';
import type { ProductProps } from '../../core/services/model';

export function ShopProducts({ title }: { title: string }) {

const [products, setProducts] = useState<ProductProps[]>([]);
const [loading, setLoading] = useState(true);
// Section: for sorting
const [isOpenSort, setIsOpenSort] = useState(false);            
// Section: for showing
const [isOpenLimit, setIsOpenLimit] = useState(false);

useEffect(() => {
const fetchProducts = async () => {
    try {
    const data = await productService.getProducts("12321");
    console.log('Fetched products data:', data);
    setProducts(data);
    setLoading(false);
    } catch (error) {
    setLoading(false);
    console.error('Error fetching products:', error);
    }
};

fetchProducts();
}, []);

const toggleCollapseSort = () => setIsOpenSort(!isOpenSort);
const toggleCollapseLimit = () => setIsOpenLimit(!isOpenLimit);

if (loading) return <div>Loading...</div>;

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
                            >Sorting</button>
                            {isOpenSort && (
                            <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                <a className="dropdown-item" href="#">Latest</a>
                                <a className="dropdown-item" href="#">Popularity</a>
                                <a className="dropdown-item" href="#">Best Rating</a>
                            </div>
                            )}
                        </div>
                        <div className="btn-group ml-2">
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" onClick={toggleCollapseLimit} data-toggle="dropdown">Showing</button>
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
            <div key={product.productId} className="col-lg-4 col-md-6 col-sm-6 pb-1">
                <Product data={product}/>
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
