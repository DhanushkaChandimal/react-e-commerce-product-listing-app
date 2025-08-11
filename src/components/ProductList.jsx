import '../styles/productList.css'
import PorductItem from './ProductItem'

const PorductList = ({products}) =>{
    // console.log(products);
    return(
        <div className='container'>
            {products.map((value) => (
                <PorductItem key={value.id} item={value}/>
            ))}
        </div>
    )
}

export default PorductList