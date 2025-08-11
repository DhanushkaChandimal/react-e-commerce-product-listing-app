import '../styles/productItem.css'

const PorductItem = ({item}) =>{
    return(
        <div className="item">
            <h2>{item.name}</h2>
            <div className='image-container'>
                <img src={`assets/${item.image_name}`} alt={`${item.name} image`} />
            </div>
            <div className='text-container'>
                <p><strong>${item.price}</strong></p>
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default PorductItem