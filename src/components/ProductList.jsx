import { useEffect, useState } from 'react';
import '../styles/productList.css'
import PorductItem from './ProductItem'

const PorductList = ({products}) =>{
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const categories = [...new Set(products.map(p => p.category))].sort((a, b) => a.localeCompare(b));

    useEffect(()=>{
        let categoryFilter = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
        setFilteredProducts(searchText
            ? categoryFilter.filter(
                p => p.name.toLowerCase().includes(searchText.toLowerCase())
                || p.price.includes(searchText)
                || p.description.toLowerCase().includes(searchText.toLowerCase()))
            : categoryFilter);
    },[products, searchText, selectedCategory]);

    return(
        <div>
            {/* Optional features: bonus challenge */}
            <div className='search-bar'>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)}/>
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
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