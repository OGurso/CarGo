import Map from "../Cars/Map";
import List from "../Cars/List";
import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { ToggleContainer, HeaderWithBack } from "../../compStyles";
import Toggle from "./../reuseables/Toggle";
import { fakeData } from "../../API/fakeData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackButton from "../reuseables/BackButton";

const Cars = (props) => {
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [listData, setListData] = useState(fakeData);
    const filter = [
        { name: "Rating", key: "averageRating" },
        { name: "Newest", key: "year" },
        { name: "Price", key: "dailyCost" },
    ];
    const switchView = [
        { name: "Map", key: "map", link: ROUTES.MAP },
        { name: "List", key: "List", link: ROUTES.LIST },
    ];

    const handleLinks = (item) => {
        if (item.hasOwnProperty("link")) {
            props.history.push(item.link);
        }
    };

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
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []);
    return (
        <>
            <HeaderWithBack>
                <BackButton />
                <h2>Available Cars</h2>
            </HeaderWithBack>

            <ToggleContainer>
                <Toggle alternatives={switchView} callback={handleLinks} />
                <Route path={ROUTES.LIST}>
                    <Toggle alternatives={filter} callback={sortBy} />
                </Route>
            </ToggleContainer>
            <Switch>
                <Route path={ROUTES.LIST} exact="true">
                    <List listData={listData} setListData={setListData} />
                </Route>
                <Route path={ROUTES.MAP}>
                    <Map
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        bounds={bounds}
                        setBounds={setBounds}
                    />
                </Route>
            </Switch>
        </>
    );
};

export default withRouter(Cars);
