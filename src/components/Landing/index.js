import cargologo from "../../img/cargologo.svg";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { StyledBigButton } from "../../compStyles";
import { StyledMain } from "./style";

const Landing = () => (
  <StyledMain>
    <img src={cargologo} alt="logo" />
    <p>
      Choose between hundreds of cars in Swedens largest cities. Rent cars
      faster and easier.
    </p>
    <div>
      <Link to={ROUTES.SIGN_UP}>
        <StyledBigButton>Sign up</StyledBigButton>
      </Link>
      <Link to={ROUTES.SIGN_IN}>
        <StyledBigButton className="secondary">Login</StyledBigButton>
      </Link>
    </div>
  </StyledMain>
);

export default Landing;
