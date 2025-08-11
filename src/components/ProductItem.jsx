const PorductItem = ({item}) =>{
    return(
        <div className="item">
            <h2>{item.name}</h2>
            <img src={`assets/${item.image_name}`} alt={`${item.name} image`} />
            <p>${item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default PorductItem