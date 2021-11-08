import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import GoogleMapReact from "google-map-react";
import { fakeData } from "../../API/fakeData";
import carIcon from "../../img/icons/CarIcon.png";

const StyledMap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: calc(100vh - 56px);

    .markerContainer > * {
        color: ${(props) => props.theme.themePrimary};
    }
`;
const Map = ({ setCoordinates, setBounds, coordinates }) => {
    return (
        <StyledMap>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCmuLQIgXzwLyqSCiN9tPGy0vV9ptw9pec",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={11}
                margin={[50, 50, 50, 50]}
                options={{
                    fullscreenControl: false,
                    scaleControl: true,
                }}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={""}
            >
                {fakeData.map((item) => (
                    <div
                        className="markerContainer"
                        lat={item.location.lat}
                        lng={item.location.lng}
                    >
                        <img src={carIcon} alt="car-icon" />
                    </div>
                ))}
            </GoogleMapReact>
        </StyledMap>
    );
};

export default withRouter(Map);
