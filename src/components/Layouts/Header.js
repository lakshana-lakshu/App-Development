import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { tokenPayload } from "../../util/sessionHandler";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = ({ className }) => {
  const ctx = useContext(CartContext);
  const payload = tokenPayload();
  const isOwner = payload && payload.privilege === "owner";
  const name = payload && payload.name;
  const kitchenId = payload && payload.kitchenId;

  const logout = () => {
    ctx.logout();
  };

  return (
    <header className={`${classes.header} ${className ? className : ""}`}>
      <NavLink to="/" end>
        <h1>Cloud Kitchen</h1>
      </NavLink>
      <ul className={classes.list}>
        {ctx.isLoggedIn ? (
          <>
            <li className={classes.dropdown}>
              Hello! {name}
              <div className={classes["dropdown-items"]}>
                <Link to="/edit-account">My Account</Link>
                {isOwner && (
                  <>
                    <NavLink to="/my-kitchen" end>
                      My Kitchen
                    </NavLink>
                    <NavLink to={`/view-orders/${kitchenId}`} end>
                      View Orders
                    </NavLink>
                  </>
                )}
              </div>
            </li>
            <li>
              <NavLink to="/logout" onClick={logout} className={classes.logout}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/auth?mode=login" end className={classes.largeFont}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth?mode=signin" end className={classes.largeFont}>
                Sign up
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;



