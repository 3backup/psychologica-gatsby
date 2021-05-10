import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import Parking from "../images/parking.svg";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./styles/Button";

const MainContainer = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: -4rem;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

class Maps extends Component {
  state = {
    myMarkers: [{ latitude: 40.710992, longitude: -74.008292 }],
  };
  displayMarkers = () => {
    return this.state.myMarkers.map((mark, index) => {
      return (
        <Marker
          id={index}
          position={{ lat: mark.latitude, lng: mark.longitude }}
          onClick={() => console.log("You clicked me!", { index })}
        />
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "1100px",
        }}
        className="map">
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{ lat: 40.7812, lng: -73.9665 }}
          disableDefaultUI={true}>
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCF21HzNDnu_Axa3UYWdhr-KCaOB5N-MZw",
})(Maps);

//https://javascript.plainenglish.io/add-a-google-map-to-your-react-app-with-a-snazzy-maps-style-38781edcdc7a
