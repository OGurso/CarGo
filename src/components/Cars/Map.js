import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import GoogleMapReact from "google-map-react";
import InfoWindow from "./InfoWindow";
import { fakeData } from "../../API/fakeData";
import centerPin from "../../img/icons/centerPin.png";
import carIcon from "../../img/icons/CarIcon.png";
import AutoComplete from "./AutoComplete";

const StyledMap = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 140px);
    .centerPin {
        transition: all 0.3s linear;
    }

    .markerContainer > * {
        color: ${(props) => props.theme.themePrimary};
    }
    .autoComplete {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%);
        z-index: 50;
    }
`;
const Map = ({
    coordinates,
    address,
    setAddress,
    setCoordinates,
    handlePosition,
    setSelectedCar,
}) => {
    const [popupData, setPopupData] = useState(null);
    const [center, setCenter] = useState(null);

    return (
        //-------------------------------------------------------------------------
        //DENNA BIBLIOTEK SKAPAR EN MASSA FELKODER I CONSOLEN SOM INTE GÅR ATT LÖSA!
        //-------------------------------------------------------------------------

        <StyledMap>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCmuLQIgXzwLyqSCiN9tPGy0vV9ptw9pec",
                }}
                mapId="1f23bb9f2c62ed90"
                defaultCenter={{ lat: 59.329477, lng: 18.068647 }} //Stockholm { lat: 59.329477, lng: 18.068647 }
                center={coordinates}
                defaultZoom={11}
                margin={[50, 50, 50, 50]}
                options={{
                    fullscreenControl: false,
                    scaleControl: true,
                }}
                onChange={(e) => {
                    setCenter({ lat: e.center.lat, lng: e.center.lng });
                }}
            >
                {fakeData.map((store, i) => (
                    <div
                        className="markerContainer"
                        key={i}
                        lat={store.location.lat}
                        lng={store.location.lng}
                        onClick={() => {
                            setPopupData(store);
                            setCoordinates(store.location);
                        }}
                    >
                        <img src={carIcon} alt="car-icon car-location" />
                    </div>
                ))}
                {popupData && (
                    <InfoWindow
                        store={popupData}
                        lat={popupData.location.lat}
                        lng={popupData.location.lng}
                        onClick={setSelectedCar(popupData)}
                    />
                )}

                <img
                    className="centerPin"
                    src={centerPin}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    alt="your-location"
                />
            </GoogleMapReact>
            <div className="autoComplete">
                <AutoComplete
                    address={address}
                    setAddress={setAddress}
                    setCoordinates={setCoordinates}
                    center={setCenter}
                    setCenter={setCenter}
                    handlePosition={handlePosition}
                />
            </div>
        </StyledMap>
    );
};

export default withRouter(Map);
