import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Breadcrumbs, Button } from "@material-ui/core/";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import PropTypes from "prop-types";

const styles = (theme) => ({
  root: {},
  flex: {
    flex: 1
  },
  title: {
    flex: 1,
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    display: "flex",
    position: "relative",
    float: "center",
    justifyContent: "space-between"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20
  }
});

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(false);
  const [cartQty, setCartQty] = useState(0);
  const { classes } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const cartItems = (cart) => {
      let qty = 0;
      for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
      }
      setCartQty(qty);
    };
    cartItems(props.cart);
  });

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "silver", color: "black" }}
      >
        <Toolbar>
          <h3 className={classes.title}>Galactic Technology</h3>
          <Breadcrumbs open={Boolean(anchorEl)}>
            <Button
              style={{ color: "black" }}
              onClick={handleClick}
              component={Link}
              to="/"
              className={classes.link}
            >
              <HomeIcon className={classes.icon} />
              Home
            </Button>
            <Button
              style={{ color: "black" }}
              className={classes.link}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              component={Link}
            >
              <StoreIcon className={classes.icon} />
              Gadgets
            </Button>
            <Button
              style={{ color: "black" }}
              onClick={handleClick}
              component={Link}
              to="/Cart"
              className={classes.link}
            >
              <ShoppingCartIcon className={classes.icon} />
              Cart ({cartQty})
            </Button>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>

      <div
        style={{
          marginTop: "64px",
          opacity: show ? "1" : "0",
          visibility: show ? "" : "hidden"
        }}
        className="shopCategories"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={handleClick}
      >
        {Object.keys(props.productCategories).map((cat) => (
          <ul>
            <li
              className="categoryHeader"
              key={cat.id}
              id={cat}
              onClick={() => setShow(false)}
            >
              <Link to="/category" onClick={props.handleCategoryClick} id={cat}>
                {cat}
              </Link>
            </li>
            {props.productCategories[cat].map((subCat) => (
              <li
                className="subCategoryLinks"
                key={subCat.id}
                onClick={() => setShow(false)}
              >
                <Link
                  to="/category"
                  onClick={props.handleCategoryClick}
                  id={cat}
                >
                  {subCat}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Header));
