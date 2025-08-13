import { useEffect, useState } from 'react';
import '../styles/productList.css'
import PorductItem from './ProductItem'

const PorductList = ({products}) =>{
    // console.log(products);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const categories = [...new Set(products.map(p => p.category))].sort((a, b) => a.localeCompare(b));

    useEffect(()=>{
        let categoryFilter = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
        setFilteredProducts(searchText
            ? categoryFilter.filter(
                p => p.name.includes(searchText) || p.price.includes(searchText) || p.description.includes(searchText))
            : categoryFilter);
    },[products, searchText, selectedCategory]);

    const handleCtegoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setFilteredProducts(event.target.value
            ? products.filter(p => p.category === event.target.value)
            : products);
        console.log(event.target.value)
    }

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        setFilteredProducts(event.target.value
            ? products.filter(p => p.category === event.target.value)
            : products);
        console.log(event.target.value)
    }

    return(
        <div>
            {/* Optional features: bonus challenge */}
            <div className='search-bar'>
                <input type="text" value={searchText} onChange={handleSearchChange}/>
                <select value={selectedCategory} onChange={handleCtegoryChange}>
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