import PorductItem from './ProductItem'

const PorductList = ({products}) =>{
    // console.log(products);
    return(
        <>
            {products.map((value) => (
                <PorductItem key={value.id} item={value}/>
            ))}
        </>
    )
}

export default PorductList