/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes, } from '@fortawesome/free-solid-svg-icons';

 import product1 from '../../assets/img/product-1.jpg';
 import product2 from '../../assets/img/product-2.jpg';
 import product3 from '../../assets/img/product-3.jpg';
 import product4 from '../../assets/img/product-4.jpg';
 import product5 from '../../assets/img/product-5.jpg';
 import product6 from '../../assets/img/product-6.jpg';
 import product7 from '../../assets/img/product-7.jpg';
 import product8 from '../../assets/img/product-8.jpg';
 
export function CartItems({ title }: { title: string }) {

  return (
    <>

    {/*-- Cart Start --*/}
    <table className="table table-light table-borderless table-hover text-center mb-0">
    <thead className="thead-dark">
        <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
        </tr>
    </thead>
    <tbody className="align-middle">
        <tr>
            <td className="align-middle"><img src={product1} alt="" style={{width: '50px'}}/> Product Name</td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus" >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTimes} /></button></td>
        </tr>
        <tr>
            <td className="align-middle"><img src={product2} alt="" style={{width: '50px'}}/> Product Name</td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus" >
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTimes} /></button></td>
        </tr>
        <tr>
            <td className="align-middle"><img src={product3} alt="" style={{width: '50px'}}/> Product Name</td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus" >
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTimes} /></button></td>
        </tr>
        <tr>
            <td className="align-middle"><img src={product4} alt="" style={{width: '50px'}}/> Product Name</td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus" >
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTimes} /></button></td>
        </tr>
        <tr>
            <td className="align-middle"><img src={product5} alt="" style={{width: '50px'}} /> Product Name</td>
            <td className="align-middle">$150</td>
            <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-minus" >
                        <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value="1"/>
                    <div className="input-group-btn">
                        <button className="btn btn-sm btn-primary btn-plus">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </td>
            <td className="align-middle">$150</td>
            <td className="align-middle"><button className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTimes} /></button></td>
        </tr>
    </tbody>
</table>
    {/*-- Cart End --*/}
    </>
  );
}

export default CartItems;
