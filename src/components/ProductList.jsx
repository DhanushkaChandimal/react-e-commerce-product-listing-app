import { useState } from 'react';
import '../styles/productList.css'
import PorductItem from './ProductItem'

const PorductList = ({products}) =>{
    // console.log(products);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const categories = [...new Set(products.map(p => p.category))].sort((a, b) => a.localeCompare(b));

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
        setFilteredProducts(e.target.value
            ? products.filter(p => p.category === e.target.value)
            : products);
        console.log(e.target.value)
    }

    return(
        <div>
            <div className='search-bar'>
                <input type="text" />
                <select value={selectedCategory} onChange={e => handleChange(e)}>
                    <option value="">All</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className='container'>
                {filteredProducts.map((value) => (
                    <PorductItem key={value.id} item={value}/>
                ))}
            </div>
        </div>
    )
}

export default PorductList