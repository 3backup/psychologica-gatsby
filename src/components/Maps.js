import React from "react";
import { styled } from "linaria/react";
import Container from "./styles/Container";
import { embedUrl, mapUrl } from "../config/location-map.cjs";

const MapSection = styled.section`
  background: #edf3ef;
  scroll-margin-top: 6.875rem;

  iframe {
    display: block;
    width: 100%;
    height: 31.25rem;
    border: 0;
  }

  @media (max-width: 768px) {
    iframe { height: 24rem; }
  }
`;

const MapCaption = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-family: Manrope, sans-serif;
  color: #315f5b;

  h2 {
    margin: 0 0 0.5rem;
    color: #1f1f1f;
    font-family: "Red Hat Display", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }

  p { margin: 0; line-height: 1.5; }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    color: #005650;
    text-underline-offset: 0.2em;
  }

  a:focus-visible {
    outline: 3px solid #4abd7f;
    outline-offset: 4px;
  }
`;

const Maps = ({ address }) => (
  <MapSection aria-label="Mapa dojazdu do gabinetu" id="mapa">
    <iframe
      src={embedUrl}
      title={`Mapa OpenStreetMap: gabinet Psychologica, ${address.streetAddress}, ${address.addressLocality}`}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
    <MapCaption>
      <div>
        <h2>Mapa dojazdu do gabinetu</h2>
        <p>ul. {address.streetAddress}, {address.addressLocality}</p>
      </div>
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">Otwórz większą mapę w OpenStreetMap</a>
    </MapCaption>
  </MapSection>
);

export default Maps;
