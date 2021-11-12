import Map from "../Cars/Map";
import List from "../Cars/List";
import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import * as ROUTES from "../../constants/routes";
import { ToggleContainer, HeaderWithBack } from "../../compStyles";
import Toggle from "./../reuseables/Toggle";
import { fakeData } from "../../API/fakeData";
import BackButton from "../reuseables/BackButton";

const Cars = (props) => {
    const { history, setSelectedCar } = props;
    const [coordinates, setCoordinates] = useState({
        lat: 59.329477,
        lng: 18.068647,
    });
    const [listData, setListData] = useState(fakeData);
    const [address, setAddress] = useState("");
    const [toggleCopy, setToggleCopy] = useState(0);
    const [trigger, setTrigger] = useState(true);

    const switchView = [
        { name: "Map", key: "map", link: ROUTES.MAP },
        { name: "List", key: "List", link: ROUTES.LIST },
    ];

    const handleLinks = (item) => {
        if (item.hasOwnProperty("link")) {
            history.push(item.link);
        }
    };

    const handlePosition = () => {
        setTrigger(!trigger);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, [trigger]);
    return (
        <>
            {console.log(toggleCopy)}
            <HeaderWithBack>
                <BackButton />
                <h2>Available Cars</h2>
            </HeaderWithBack>

            <ToggleContainer>
                <Toggle
                    alternatives={switchView}
                    callback={handleLinks}
                    setToggleCopy={setToggleCopy}
                />
            </ToggleContainer>

            {toggleCopy === 0 ? (
                <Map
                    address={address}
                    setAddress={setAddress}
                    coordinates={coordinates}
                    setCoordinates={setCoordinates}
                    handlePosition={handlePosition}
                    history={history}
                    setSelectedCar={setSelectedCar}
                />
            ) : (
                <List
                    listData={listData}
                    setListData={setListData}
                    history={history}
                    setSelectedCar={setSelectedCar}
                />
            )}
        </>
    );
};

export default withRouter(Cars);
