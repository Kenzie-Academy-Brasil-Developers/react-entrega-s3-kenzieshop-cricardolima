import { Divider } from "@material-ui/core"
import { DisplayProducts } from "../../components/displayProducts"
import { Header } from "../../components/header"

export const Home = () => {
    return (
        <>
            <Header/>
            <Divider />
            <DisplayProducts/>
        </>
    )
}