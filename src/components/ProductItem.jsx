const PorductItem = ({item}) =>{
    return(
        <div>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <h2>{item.description}</h2>
        </div>
    )
}

export default PorductItem