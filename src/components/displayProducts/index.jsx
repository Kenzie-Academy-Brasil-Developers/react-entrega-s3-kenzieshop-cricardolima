import { useSelector } from "react-redux"
import { ProductCard } from "../productsCard"
import { ContainerProducts } from "./syles"

export const DisplayProducts = () => {

    const products = useSelector((store) => store.products)

    return (
        <ContainerProducts>
            {products.map((products) => (
                <ProductCard key={products.id} product={products}/>
            ))}
        </ContainerProducts>
    )
}