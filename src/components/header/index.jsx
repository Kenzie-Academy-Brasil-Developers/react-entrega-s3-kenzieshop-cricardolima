import { AppBar, Badge, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
    toolbar: {
        width: "100vw",
        justifyContent: "space-between",
    },
    icon: {
        marginRight: "10px"
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { cart } = useSelector((store) => store);

  const goTo = (path) => {
    return history.push(path);
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link onClick={() => goTo("/")}>
          <Typography variant="h6">Book Shop</Typography>
        </Link>
        <Link onClick={() => goTo("/cart")}>
          <Badge badgeContent={cart.length} color="primary" className={classes.icon}>
            <FiShoppingCart size={20} className={classes.icon}/>
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
