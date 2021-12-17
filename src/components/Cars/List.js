import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import bild from "../../img/volvo-xc6-2.png";
import Toggle from "./../reuseables/Toggle";
import { ToggleContainer } from "./../../compStyles";
import * as ROUTES from "../../constants/routes";

const ListContainer = styled.div`
    overflow: hidden;
    & > ul {
        list-style: none;
        padding: 0 10px 60px 10px;
        height: calc(100% - 160px);

        li {
            display: flex;
            padding: 10px;
            box-shadow: 0px 0px 5px ${(props) => props.theme.tone};
            border-radius: 10px;
            margin: 10px 0;

            img {
                flex-basis: 30%;
                object-fit: contain;
                height: 70px;
                width: 120px;
                border-radius: 5px;
                background-color: white;
            }
            .content {
                padding: 10px;
                display: flex;
                width: 100%;
                flex: 1;
                flex-direction: column;
                align-items: space-between;
                justify-content: space-between;
                font-size: 14px;
            }
            .content > * {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
            /* .contentTwo {
        
            } */
        }
    }
`;

const List = ({ listData, setListData, history, setSelectedCar }) => {
    const filter = [
        { name: "Rating", key: "averageRating" },
        { name: "Newest", key: "year" },
        { name: "Price", key: "dailyCost" },
    ];
    const sortBy = (item) => {
        let by = item.key;
        let order = "asc";
        let data = [...listData];

        if (typeof data[0][by] == "number") {
            data = data.sort((a, b) =>
                order === "asc" ? b[by] - a[by] : a[by] - b[by]
            );
        } else if (typeof data[0][by] === "function") {
            data = data.sort((a, b) =>
                order === "asc" ? b[by]() - a[by]() : a[by]() - b[by]()
            );
        } else if (typeof data[0][by] === "string") {
            data = data.sort((a, b) =>
                order === "asc"
                    ? b[by].localeCompare(a[by])
                    : a[by].localeCompare(b[by])
            );
        }
        setListData(data);
    };
    const handleItemClick = (item) => {
        setSelectedCar(item);
        history.push(ROUTES.CARINFO);
    };
    return (
        <>
            <ToggleContainer>
                <Toggle alternatives={filter} callback={sortBy} />
            </ToggleContainer>

            <ListContainer>
                <ul>
                    {listData.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                name={item.carName}
                                cost={item.dailyCost}
                                date={item.year}
                                rating={item.averageRating()}
                                handleItemClick={() => handleItemClick(item)}
                            />
                        );
                    })}
                </ul>
            </ListContainer>
        </>
    );
};

export default withRouter(List);

export const ListItem = ({ name, date, cost, rating, handleItemClick }) => {
    return (
        <li onClick={handleItemClick}>
            <img src={bild} alt="car" />
            <div className="content">
                <div className="contentOne">
                    <span>{name}</span>
                    <span>{date}</span>
                </div>
                <div className="contentTwo">
                    <span>{cost} kr</span>
                    <span>
                        <span style={{ color: "orange", fontSize: 16 }}>
                            {String.fromCharCode(9733).repeat(
                                Math.floor(rating)
                            )}
                        </span>
                        <span
                            style={{
                                color: "lightgrey",
                                fontSize: 16,
                                paddingRight: 5,
                            }}
                        >
                            {String.fromCharCode(9733).repeat(
                                5 - Math.floor(rating)
                            )}
                        </span>
                        {rating.toFixed(1)}
                    </span>
                </div>
            </div>
        </li>
    );
};
