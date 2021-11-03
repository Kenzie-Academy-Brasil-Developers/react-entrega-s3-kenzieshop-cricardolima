import { Divider } from "@material-ui/core"
import { CartDisplay } from "../../components/cart"
import { Header } from "../../components/header"

export const Cart = () => {
    return (
        <>
            <Header/>
            <Divider />
            <CartDisplay/>
        </>
    )
}