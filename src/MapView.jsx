import statesData from "./states.json";
import CityPopup from "./CityPopup";
import "./MapView.css";
import { Icon, popup } from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import CountryStatePopup from "./CountryStatePopup";
import SearchPopup from "./SearchPopup";

function MapView({ location }) {
  const [zoomLevel, setZoomLevel] = useState(2);
  const [cityMarkers, setCityMarker] = useState(null);

  const defaultCenter = [20.5937, 78.9629];

  //theme check----------------------
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );
  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.body.classList.contains("dark"));
    window.addEventListener("click", checkTheme);
    return () => window.removeEventListener("click", checkTheme);
  }, []);

  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  //---------------------------------

  function ZoomHandler() {
    useMapEvents({
      zoomend: (e) => {
        setZoomLevel(e.target.getZoom());
      },
    });
    return null;
  }
  function ClickHandler() {
    useMapEvents({
      click: (e) => {
        if (zoomLevel >= 6) {
          const { lat, lng } = e.latlng;
          setCityMarker({
            geocode: [lat, lng],
            Popup: "Selected City",
            type: "city",
          });
          console.log("Latitude:", lat, "Longitude:", lng);
        }
      },
    });
    return null;
  }

  const CountryMarkers = [
    { geocode: [20.5937, 78.9629], Popup: "India", type: "country" },
    { geocode: [37.0902, -95.7129], Popup: "United States", type: "country" },
    { geocode: [36.2048, 138.2529], Popup: "Japan", type: "country" },
    { geocode: [-25.2744, 133.7751], Popup: "Australia", type: "country" },
    { geocode: [55.3781, -3.436], Popup: "United Kingdom", type: "country" },
    { geocode: [46.2276, 2.2137], Popup: "France", type: "country" },
    { geocode: [51.1657, 10.4515], Popup: "Germany", type: "country" },
    { geocode: [61.524, 105.3188], Popup: "Russia", type: "country" },
    { geocode: [35.9078, 127.7669], Popup: "South Korea", type: "country" },
    { geocode: [23.6345, -102.5528], Popup: "Mexico", type: "country" },
    { geocode: [-14.235, -51.9253], Popup: "Brazil", type: "country" },
    { geocode: [56.1304, -106.3468], Popup: "Canada", type: "country" },
    { geocode: [39.9042, 116.4074], Popup: "China", type: "country" },
    { geocode: [40.4637, -3.7492], Popup: "Spain", type: "country" },
    { geocode: [41.8719, 12.5674], Popup: "Italy", type: "country" },
    { geocode: [60.472, 8.4689], Popup: "Norway", type: "country" },
    { geocode: [52.1326, 5.2913], Popup: "Netherlands", type: "country" },
    { geocode: [4.2105, 101.9758], Popup: "Malaysia", type: "country" },
    { geocode: [15.87, 100.9925], Popup: "Thailand", type: "country" },
    { geocode: [1.3521, 103.8198], Popup: "Singapore", type: "country" },
    { geocode: [-40.9006, 174.886], Popup: "New Zealand", type: "country" },
    { geocode: [26.8206, 30.8025], Popup: "Egypt", type: "country" },
    { geocode: [-1.2921, 36.8219], Popup: "Kenya", type: "country" },
    { geocode: [-30.5595, 22.9375], Popup: "South Africa", type: "country" },
    { geocode: [21.4735, 55.9754], Popup: "Oman", type: "country" },
    {
      geocode: [25.276987, 55.296249],
      Popup: "United Arab Emirates",
      type: "country",
    },
    { geocode: [24.7136, 46.6753], Popup: "Saudi Arabia", type: "country" },
    { geocode: [33.9391, 67.71], Popup: "Afghanistan", type: "country" },
    { geocode: [28.3949, 84.124], Popup: "Nepal", type: "country" },
    { geocode: [23.685, 90.3563], Popup: "Bangladesh", type: "country" },
    { geocode: [30.3753, 69.3451], Popup: "Pakistan", type: "country" },
    { geocode: [7.8731, 80.7718], Popup: "Sri Lanka", type: "country" },
    { geocode: [32.4279, 53.688], Popup: "Iran", type: "country" },
    { geocode: [33.2232, 43.6793], Popup: "Iraq", type: "country" },
    { geocode: [31.0461, 34.8516], Popup: "Israel", type: "country" },
    { geocode: [31.9522, 35.2332], Popup: "Jordan", type: "country" },
    { geocode: [34.8021, 38.9968], Popup: "Syria", type: "country" },
    { geocode: [41.0082, 28.9784], Popup: "Turkey", type: "country" },
    { geocode: [64.9631, -19.0208], Popup: "Iceland", type: "country" },
    { geocode: [59.3293, 18.0686], Popup: "Sweden", type: "country" },
    { geocode: [60.1699, 24.9384], Popup: "Finland", type: "country" },
    { geocode: [47.5162, 14.5501], Popup: "Austria", type: "country" },
    { geocode: [46.8182, 8.2275], Popup: "Switzerland", type: "country" },
    { geocode: [48.669, 19.699], Popup: "Slovakia", type: "country" },
    { geocode: [45.9432, 24.9668], Popup: "Romania", type: "country" },
    { geocode: [46.1512, 14.9955], Popup: "Slovenia", type: "country" },
    { geocode: [44.0165, 21.0059], Popup: "Serbia", type: "country" },
    { geocode: [56.2639, 9.5018], Popup: "Denmark", type: "country" },
    { geocode: [53.1424, -7.6921], Popup: "Ireland", type: "country" },
  ];

  const StateMarkers = statesData
    .filter(
      (state) =>
        state.type === "state" ||
        state.type === "union territory" ||
        // state.type === "province" ||
        state.type === "prefecture" ||
        state.type === "canton" ||
        state.type === "region" ||
        state.type === "administrative territory"
    )
    .map((state, index) => ({
      key: state.id,
      geocode: [state.latitude, state.longitude],
      Popup: state.name,
      type: state.type,
    }));

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/929/929426.png",
    iconSize: [20, 20],
  });
  const yellowIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/149/149060.png",
    iconSize: [20, 20],
  });

  const MarkersToShow =
    zoomLevel < 5 ? CountryMarkers : zoomLevel <= 7 ? StateMarkers : [];

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <MapContainer
        center={location ? [location.lat, location.lon] : defaultCenter}
        zoom={location ? 5 : 3}
        style={{
          height: "80vh",
          width: "80vw",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <ZoomHandler />
        <ClickHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url={tileUrl}
        />
        {MarkersToShow.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.geocode}
            icon={customIcon}
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
              click: (e) => {
                const map = e.target._map;
                if (zoomLevel < 5) {
                  map.flyTo(marker.geocode, 6, { duration: 1 });
                } else if (zoomLevel < 8) {
                  map.flyTo(marker.geocode, 8, { duration: 1 });
                }
              },
            }}
          >
            <Popup>
              <div className="d-flex justify-content-center">
                <CountryStatePopup marker={marker} />
              </div>
            </Popup>
          </Marker>
        ))}
        {cityMarkers && (
          <Marker
            position={cityMarkers.geocode}
            icon={customIcon}
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
            }}
          >
            <Popup>
              <CityPopup marker={cityMarkers} />
            </Popup>
          </Marker>
        )}

        {location && (
          <Marker position={[location.lat, location.lon]} icon={yellowIcon}>
            <Popup>
              <SearchPopup
                searchData={{
                  name: location.name,
                  country: location.country,
                  temp: location.temp,
                  weather: location.weather,
                  icon: location.icon,
                }}
              />
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
export default MapView;
