import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons';

import Product from '../../shared/components/Product';
import type { ProductProps } from '../../core/services/model';

interface ShopProductsProps {
  title: string;
  products: ProductProps[];
  loading: boolean;
}

export function ShopProducts({ title, products, loading }: ShopProductsProps) {
const [sortedProducts, setSortedProducts] = useState<ProductProps[]>(products);
const [sortType, setSortType] = useState<string>('latest');
// Section: for sorting
const [isOpenSort, setIsOpenSort] = useState(false);            
// Section: for showing
const [isOpenLimit, setIsOpenLimit] = useState(false);
const [itemsPerPage, setItemsPerPage] = useState<number>(10);
// Section: for pagination
const [currentPage, setCurrentPage] = useState<number>(1);
// Section: for view type
const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
const sortRef = useRef<HTMLDivElement>(null);
const limitRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  setSortedProducts(products);
}, [products]);

const handleSort = (type: string) => {
  setSortType(type);
  let sorted = [...products];
  
  switch(type) {
    case 'latest':
      sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'popularity':
      sorted.sort((a, b) => b.reviews - a.reviews);
      break;
    case 'rating':
      sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
      break;
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
  }
  
  setSortedProducts(sorted);
  setIsOpenSort(false);
};

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
      setIsOpenSort(false);
    }
    if (limitRef.current && !limitRef.current.contains(event.target as Node)) {
      setIsOpenLimit(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

const toggleCollapseSort = () => {
  setIsOpenSort(!isOpenSort);
  setIsOpenLimit(false);
};
const toggleCollapseLimit = () => {
  setIsOpenLimit(!isOpenLimit);
  setIsOpenSort(false);
};

const handleItemsPerPageChange = (limit: number) => {
  setItemsPerPage(limit);
  setCurrentPage(1);
  setIsOpenLimit(false);
};

const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentProducts = sortedProducts.slice(startIndex, endIndex);

const handlePageChange = (page: number) => {
  setCurrentPage(page);
};

if (loading) return (
    <div className="col-lg-9 col-md-8">
      <div className="d-flex justify-content-center align-items-center" style={{height: '400px'}}>
        <div>Loading...</div>
      </div>
    </div>
  );

  return (
    <>
    {/*-- Shop Product Start --*/}
    <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
            <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                        <button 
                            className={`btn btn-sm ${viewType === 'grid' ? 'btn-primary' : 'btn-light'}`}
                            onClick={() => setViewType('grid')}
                        >
                            <FontAwesomeIcon icon={faThLarge} />
                        </button>
                        <button 
                            className={`btn btn-sm ${viewType === 'list' ? 'btn-primary' : 'btn-light'} ml-2`}
                            onClick={() => setViewType('list')}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="ml-2">
                        <div className="btn-group" ref={sortRef} style={{position: 'relative'}}>
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" onClick={toggleCollapseSort}
                            >Sorting</button>
                            {isOpenSort && (
                            <div className="dropdown-menu show" style={{position: 'absolute', top: '100%', right: 0, display: 'block'}}>
                                <button className="dropdown-item" onClick={() => handleSort('latest')}>Latest</button>
                                <button className="dropdown-item" onClick={() => handleSort('popularity')}>Popularity</button>
                                <button className="dropdown-item" onClick={() => handleSort('rating')}>Best Rating</button>
                                <button className="dropdown-item" onClick={() => handleSort('price-low')}>Price: Low to High</button>
                                <button className="dropdown-item" onClick={() => handleSort('price-high')}>Price: High to Low</button>
                            </div>
                            )}
                        </div>
                        <div className="btn-group ml-2" ref={limitRef} style={{position: 'relative'}}>
                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" onClick={toggleCollapseLimit}>Showing</button>
                            {isOpenLimit && (
                            <div className="dropdown-menu show" style={{position: 'absolute', top: '100%', right: 0, display: 'block'}}>
                                <button className="dropdown-item" onClick={() => handleItemsPerPageChange(10)}>10</button>
                                <button className="dropdown-item" onClick={() => handleItemsPerPageChange(20)}>20</button>
                                <button className="dropdown-item" onClick={() => handleItemsPerPageChange(30)}>30</button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
                  
            {currentProducts.map((product) => (
            <div key={product.productId} className={viewType === 'grid' ? 'col-lg-4 col-md-6 col-sm-6 pb-1' : 'col-12 pb-1'}>
                <Product data={product}/>
            </div>
            ))} 
            
            {totalPages > 1 && (
            <div className="col-12">
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(page)}>{page}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
            )}
        </div>
    </div>
    {/*-- Shop Product End --*/}
    </>
  );
}

export default ShopProducts;
