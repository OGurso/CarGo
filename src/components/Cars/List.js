import React from "react";
import styled from "styled-components";
import bild from "../../img/volvo-xc6-2.png";
import { FaStar } from "react-icons/fa";

const ListContainer = styled.div`
    & > ul {
        list-style: none;
        padding: 0 10px 60px 10px;
        li {
            display: flex;
            padding: 10px;
            box-shadow: 0px 0px 5px #74747442;
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
                /* height: 100%; */
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
            .contentOne {
                /* display: flex;
                justify-content: space-between; */
            }
        }
    }
`;

const List = ({ listData }) => {
    return (
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
                        />
                    );
                })}
            </ul>
        </ListContainer>
    );
};

export default List;

const ListItem = ({ name, date, cost, rating }) => (
    <li>
        <img src={bild} alt="car" />
        <div className="content">
            <div className="contentOne">
                <span>{name}</span>
                <span>{date}</span>
            </div>
            <div className="contentTwo">
                <span>{cost} kr</span>
                <span>
                    <FaStar color="#CCA747" />
                    {rating}
                </span>
            </div>
        </div>
    </li>
);
