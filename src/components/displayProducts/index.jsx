import { useSelector } from "react-redux"
import { ProductCard } from "../productsCard"

export const DisplayProducts = () => {

    const products = useSelector((store) => store.products)

    return (
        <div>
            {products.map((products) => (
                <ProductCard key={products.id} product={products}/>
            ))}
        </div>
    )
}