import { useDispatch } from "react-redux"


export const ProductCard = ({product}) => {

    const dispatch = useDispatch()
    
    const {id, image, name, price} = product
    return (
        <div>
            <img src={image} alt={id}/>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}