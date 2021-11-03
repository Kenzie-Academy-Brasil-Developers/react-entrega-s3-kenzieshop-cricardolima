import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { ContainerCard } from "./styles";

export const ProductCard = ({ product, offCart = false }) => {
  const dispatch = useDispatch();

  const { id, image, name, price } = product;

  return (
    <ContainerCard>
      <img src={image} alt={id} />
      <p>{name}</p>
      <p>
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      {offCart ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          {" "}
          Remover do carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(addToCartThunk(product))}
        >
          {" "}
          Adicionar ao carrinho
        </Button>
      )}
    </ContainerCard>
  );
};
