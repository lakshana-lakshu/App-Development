import classes from "./SearchElement.module.css";
import background from "../assets/background.jpeg";
import locations from "../assets/locations";

const SearchElement = ({ location, setLocation }) => {
  return (
    <>
      <img src={background} alt="background" className={classes.background} />
      <div className={classes.location}>
        <label htmlFor="location">
          <b>Location</b>
        </label>
        <select
          onChange={(event) => setLocation(event.target.value)}
          defaultValue={location}
          className={classes.selection}
          id="location"
          name="location"
        >
          <option value="none">--Select--</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SearchElement;
