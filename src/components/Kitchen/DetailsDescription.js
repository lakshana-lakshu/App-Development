import classes from "./DetailsDescription.module.css";
import BackButton from "../UI/BackButton";
import Card from "../UI/Card";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";

const DetailsDescription = ({ loaderData }) => {
  const isMyKitchen = useLocation().pathname === "/my-kitchen";
  const backgroundErrorHandler = (event) => {
    event.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCDQ22xgk2PYGS_Y1OvfRUabKICuRBTP5HzgegXADIaf2qU_RIiOpTi5iwMge1-hAhOw4&usqp=CAU";
  };
  return (
    <>
      <div className={classes["about-container"]}>
        {!isMyKitchen && <BackButton />}
        <img
          alt="backgroud"
          className={classes["background-image"]}
          src={loaderData.image}
          onError={backgroundErrorHandler}
        />
        <Card className={classes.about}>
          <h3>{loaderData.name}</h3>
          <p>{loaderData.location}</p>
          <p>{loaderData.cuisineType}</p>
          {isMyKitchen && (
            <>
              <Link to="/edit-kitchen" state={loaderData}>
                <Button className={classes.edit}>Edit</Button>
              </Link>
              <div className={classes["button-container"]}>
                <Link to="/add-dish">
                  <Button>+Add New Dish</Button>
                </Link>
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default DetailsDescription;
