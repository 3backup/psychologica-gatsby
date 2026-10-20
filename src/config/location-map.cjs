// Pinezka z wizytówki Psychologica (Google Maps CID 8242497138313807045),
// zgodna z budynkiem Reja 12: https://www.openstreetmap.org/way/338073987.
const latitude = 50.0477919;
const longitude = 21.9924575;
const bbox = [longitude - 0.008, latitude - 0.003, longitude + 0.008, latitude + 0.003]
  .map((value) => value.toFixed(7)).join(",");
const parameters = new URLSearchParams({
  bbox,
  layer: "mapnik",
  marker: `${latitude},${longitude}`,
});

module.exports = {
  latitude,
  longitude,
  embedUrl: `https://www.openstreetmap.org/export/embed.html?${parameters}`,
  mapUrl: `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude}`,
};
