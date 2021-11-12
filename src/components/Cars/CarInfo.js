import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import audi from "../../img/audiA4.JPG";
import volvo2 from "../../img/volvo2.jpg";
import person from "../../img/person.png";
import BackButton from "./../reuseables/BackButton";
import styled from "styled-components";
import { StyledBigButton } from "./../../compStyles";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* .headerOne,.headerTwo{
    } */
    .headerOne {
        margin-top: 40px;
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & p {
            font-weight: lighter;
        }
        & span {
            color: ${(props) => props.theme.tone};
            font-size: 18px;
            font-family: "roboto";
        }
    }
    .headerTwo {
        font-family: "roboto";

        margin-top: 10px;
        width: 90%;
        display: flex;
        align-items: center;
        & > *:not(span.special) {
            margin-right: 10px;
        }

        .light {
            color: ${(props) => props.theme.tone};
        }
        .rating {
            font-size: 16px;
        }
    }
    .content {
        width: 90%;

        p {
            margin: 50px 0;
            padding: 0;
        }
    }

    button {
        margin-top: auto;
    }
`;

const CarInfo = ({ selectedCar }) => {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    padding: 20,
                    top: 0,
                    left: 0,
                    zIndex: 51,
                }}
            >
                <BackButton />
            </div>
            <Carousel
                autoPlay={false}
                infiniteLoop
                dynamicHeight={500}
                showStatus={false}
                useKeyboardArrows
                showThumbs={false}
            >
                <div>
                    <img src={volvo2} alt="Car" />
                </div>
                <div>
                    <img src={audi} alt="Car" />
                </div>
            </Carousel>

            <Container>
                <div className="headerOne">
                    <h2>{selectedCar.carName}</h2>
                    <span>{selectedCar.year}</span>
                </div>
                <div className="headerTwo">
                    <span className="light">owner</span>
                    <span>{selectedCar.userName}</span>
                    <span style={{ color: "#CCA747" }} className="special">
                        {String.fromCharCode(9733)}
                    </span>
                    <span className="light rating">
                        {selectedCar.averageRating()}
                    </span>
                    <img src={person} alt="Profile Picture" />
                </div>
                <div className="content">
                    <p>{selectedCar.carDesc}</p>
                </div>
                <StyledBigButton>BOOK NOW</StyledBigButton>
            </Container>
        </>
    );
};

export default CarInfo;
