import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Parking from "../images/parking.svg";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./styles/Button";

const MainContainer = styled.section`
position: relative;
  height: 31.25rem
  width: 100%;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;
const CustomMarker = styled(Marker)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  &:hover {
    z-index: 1;
  }
`;
const JsStyles = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#444444",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#c3e2c8",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
      {
        weight: "0.01",
      },
    ],
  },
];
class Maps extends Component {
  state = {
    myMarkers: [{ latitude: 50.0477919, longitude: 21.9902635 }],
    option: [
      {
        styles: JsStyles,
      },
    ],
  };
  displayMarkers = () => {
    return this.state.myMarkers.map((mark, index) => {
      return (
        <CustomMarker
          id={index}
          icon={{
            url:
              "https://github.com/3backup/psychologica-gatsby/blob/main/src/images/pin.svg",
            anchor: new window.google.maps.Point(0, 48),
            scaledSize: new window.google.maps.Size(48, 48),
          }}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          onClick={() => console.log("You clicked me!", { index })}
        />
      );
    });
  };
  render() {
    return (
      <MainContainer className="map">
        <Map
          google={this.props.google}
          zoom={15}
          styles={JsStyles}
          initialCenter={{ lat: 50.0477919, lng: 21.9902635 }}
          disableDefaultUI={true}>
          {this.displayMarkers()}
        </Map>
      </MainContainer>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCF21HzNDnu_Axa3UYWdhr-KCaOB5N-MZw",
})(Maps);

//https://javascript.plainenglish.io/add-a-google-map-to-your-react-app-with-a-snazzy-maps-style-38781edcdc7a
