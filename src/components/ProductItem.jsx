const PorductItem = ({item}) =>{
    return(
        <div className="item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default PorductItem