import styled from "styled-components";
import bild from "../../img/volvo-xc6-2.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const PopupStyled = styled(Link)`
    position: relative;
    transform: translate(-50%, -100%);
    height: 80px;
    width: 180px;
    top: 0;
    left: 100%;
    z-index: 51;
    background: ${(props) => props.theme.bgPrimary};
    border-radius: 0.4em;
    display: flex;
    align-items: center;
    padding: 4px;
    box-shadow: 0px 0px 5px ${(props) => props.theme.tone};
    border-radius: 10px;

    .content {
        height: 100%;
        padding: 15px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        object-fit: contain;
    }

    img {
        object-fit: contain;
        height: 70px;
        border-radius: 5px;
        background-color: white;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-top-color: ${(props) => props.theme.bgPrimary};
        border-bottom: 0;
        margin-left: -11px;
        margin-bottom: -11px;
    }
`;

const InfoWindow = ({ store }) => {
    return (
        <PopupStyled to={ROUTES.CARINFO}>
            <img src={bild} alt="car" />
            <div className="content">
                <div>{store.carName}</div>
                <div>
                    <span style={{ color: "grey" }}>
                        {store.averageRating()}
                    </span>
                    <span style={{ color: "orange" }}>
                        {String.fromCharCode(9733).repeat(
                            Math.floor(store.averageRating())
                        )}
                    </span>
                    <span style={{ color: "lightgrey" }}>
                        {String.fromCharCode(9733).repeat(
                            5 - Math.floor(store.averageRating())
                        )}
                    </span>
                </div>

                <div style={{ fontSize: 14, color: "green" }}>
                    {store.dailyCost} kr
                </div>
            </div>
        </PopupStyled>
    );
};

export default InfoWindow;
