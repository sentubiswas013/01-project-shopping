/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

type PriceRange = {
  min: number;
  max: number;
  label: string;
};

interface FilterProductsProps {
  title: string;
  onPriceFilter: (priceRanges: PriceRange[]) => void;
}

export function FilterProducts({ title, onPriceFilter }: FilterProductsProps) {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>([]);
  
  const priceRanges: PriceRange[] = [
    { min: 0, max: 100, label: '$0 - $100' },
    { min: 100, max: 200, label: '$100 - $200' },
    { min: 200, max: 300, label: '$200 - $300' },
    { min: 300, max: 400, label: '$300 - $400' },
    { min: 400, max: 500, label: '$400 - $500' }
  ];

  const handlePriceChange = (range: PriceRange, isChecked: boolean) => {
    let newRanges: PriceRange[];
    
    if (isChecked) {
      newRanges = [...selectedPriceRanges, range];
    } else {
      newRanges = selectedPriceRanges.filter(r => r.min !== range.min || r.max !== range.max);
    }
    
    setSelectedPriceRanges(newRanges);
    onPriceFilter(newRanges);
  };

  const handleAllPriceChange = (isChecked: boolean) => {
    const newRanges = isChecked ? [] : [];
    setSelectedPriceRanges(newRanges);
    onPriceFilter(newRanges);
  };

  return (
    <>
    {/*-- Shop Sidebar Start --*/}
    <div className="col-lg-3 col-md-4" id="filter">
        {/*-- Price Start --*/}
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
        <div className="bg-light p-4 mb-30">
            <form>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      checked={selectedPriceRanges.length === 0} 
                      id="price-all"
                      onChange={(e) => handleAllPriceChange(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="price-all">All Price</label>
                </div>
                {priceRanges.map((range, index) => (
                  <div key={index} className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id={`price-${index + 1}`}
                      checked={selectedPriceRanges.some(r => r.min === range.min && r.max === range.max)}
                      onChange={(e) => handlePriceChange(range, e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor={`price-${index + 1}`}>{range.label}</label>
                  </div>
                ))}
            </form>
        </div>
        {/*-- Price End --*/}
        
        {/*-- Color Start --*/}
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
        <div className="bg-light p-4 mb-30">
            <form>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input type="checkbox" className="form-check-input" checked id="color-all"/>
                    <label className="form-check-label" htmlFor="color-all">All Color</label>
                    <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input type="checkbox" className="form-check-input" id="color-1"/>
                    <label className="form-check-label" htmlFor="color-1">Black</label>
                    <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input type="checkbox" className="form-check-input" id="color-2"/>
                    <label className="form-check-label" htmlFor="color-2">White</label>
                    <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input type="checkbox" className="form-check-input" id="color-3"/>
                    <label className="form-check-label" htmlFor="color-3">Red</label>
                    <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="form-check d-flex align-items-center justify-content-between mb-2">
                    <input type="checkbox" className="form-check-input" id="color-4"/>
                    <label className="form-check-label" htmlFor="color-4">Blue</label>
                    <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="form-check d-flex align-items-center justify-content-between">
                    <input type="checkbox" className="form-check-input" id="color-5"/>
                    <label className="form-check-label" htmlFor="color-5">Green</label>
                    <span className="badge border font-weight-normal">168</span>
                </div>
            </form>
        </div>
        {/*-- Color End --*/}
    </div>
    {/*-- Shop Sidebar End --*/}
    </>
  );
}

export default FilterProducts;
