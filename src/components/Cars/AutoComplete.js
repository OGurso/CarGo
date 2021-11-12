// const AutoComplete = ({ address, setAddress, setCoordinates, setCenter }) => {

import React from "react";
import { StyledInput } from "../../compStyles";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import styled from "styled-components";
import find from "../../img/icons/find.png";

const Dropdown = styled.div`
    font-size: 12px;
    margin-top: 2px;
    font-family: "Comfortaa";

    & > .suggestion-item {
        cursor: pointer;
        background: ${(props) => props.theme.bgPrimary};
    }
    & > .suggestion-item--active {
        cursor: pointer;
        background: ${(props) => props.theme.bgSecondary};
    }

    & > * {
        padding: 8px 15px;
    }
`;
const IconInput = styled.div`
    position: relative;
    cursor: pointer;
    & > div {
        position: absolute;
        top: 50%;
        right: 4px;
        transform: translate(0, -50%);
        height: 34px;
        width: 34px;
        border-radius: 50px;
        background: ${(props) => props.theme.themePrimary};
        display: grid;
        place-content: center;
        img {
        }
    }
`;

class AutoComplete extends React.Component {
    handleChange = (address) => {
        this.props.setAddress(address);
    };

    handleSelect = (address) => {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                this.props.setCoordinates(latLng);
            })
            .catch((error) => console.error("Error", error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.props.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                }) => (
                    <div>
                        <IconInput>
                            <StyledInput
                                style={{
                                    padding: " 0 50px 0 15px ",
                                    height: "40px",
                                }}
                                {...getInputProps({
                                    placeholder: "Search Places ...",
                                    className: "location-search-input",
                                })}
                            />
                            <div onClick={this.props.handlePosition}>
                                <img src={find} alt="your-position" />
                            </div>
                        </IconInput>
                        <Dropdown className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";

                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                    >
                                        <span>
                                            {
                                                suggestion.formattedSuggestion
                                                    .mainText
                                            }
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "10px",
                                                color: "grey",
                                            }}
                                        >
                                            {
                                                suggestion.formattedSuggestion
                                                    .secondaryText
                                            }
                                        </span>
                                    </div>
                                );
                            })}
                        </Dropdown>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default AutoComplete;
