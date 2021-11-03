import { useSelector } from "react-redux"
import { ProductCard } from "../productsCard"
import { ContainerProducts } from "./syles"

export const CartDisplay = () => {

    const cart = useSelector((store) => store.cart)

    return (
        <ContainerProducts>
            {cart.map(product => <ProductCard product={product} offCart/>)}
        </ContainerProducts>
    )
}