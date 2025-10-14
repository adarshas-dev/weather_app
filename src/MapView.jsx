import { Icon } from "leaflet";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";

function MapView() {
  const [zoomLevel, setZoomLevel] = useState(2);

  function ZoomHandler() {
    useMapEvents({
      zoomend: (e) => {
        setZoomLevel(e.target.getZoom());
      },
    });
  }

  const CountryMarkers = [
    { geocode: [20.5937, 78.9629], Popup: "India" },
    { geocode: [37.0902, -95.7129], Popup: "United States" },
    { geocode: [36.2048, 138.2529], Popup: "Japan" },
    { geocode: [-25.2744, 133.7751], Popup: "Australia" },
    { geocode: [55.3781, -3.436], Popup: "United Kingdom" },
    { geocode: [46.2276, 2.2137], Popup: "France" },
    { geocode: [51.1657, 10.4515], Popup: "Germany" },
    { geocode: [61.524, 105.3188], Popup: "Russia" },
    { geocode: [35.9078, 127.7669], Popup: "South Korea" },
    { geocode: [23.6345, -102.5528], Popup: "Mexico" },
    { geocode: [-14.235, -51.9253], Popup: "Brazil" },
    { geocode: [56.1304, -106.3468], Popup: "Canada" },
    { geocode: [39.9042, 116.4074], Popup: "China" },
    { geocode: [40.4637, -3.7492], Popup: "Spain" },
    { geocode: [41.8719, 12.5674], Popup: "Italy" },
    { geocode: [60.472, 8.4689], Popup: "Norway" },
    { geocode: [52.1326, 5.2913], Popup: "Netherlands" },
    { geocode: [4.2105, 101.9758], Popup: "Malaysia" },
    { geocode: [15.87, 100.9925], Popup: "Thailand" },
    { geocode: [1.3521, 103.8198], Popup: "Singapore" },
    { geocode: [-40.9006, 174.886], Popup: "New Zealand" },
    { geocode: [26.8206, 30.8025], Popup: "Egypt" },
    { geocode: [-1.2921, 36.8219], Popup: "Kenya" },
    { geocode: [-30.5595, 22.9375], Popup: "South Africa" },
    { geocode: [21.4735, 55.9754], Popup: "Oman" },
    { geocode: [25.276987, 55.296249], Popup: "United Arab Emirates" },
    { geocode: [24.7136, 46.6753], Popup: "Saudi Arabia" },
    { geocode: [33.9391, 67.71], Popup: "Afghanistan" },
    { geocode: [28.3949, 84.124], Popup: "Nepal" },
    { geocode: [23.685, 90.3563], Popup: "Bangladesh" },
    { geocode: [30.3753, 69.3451], Popup: "Pakistan" },
    { geocode: [7.8731, 80.7718], Popup: "Sri Lanka" },
    { geocode: [32.4279, 53.688], Popup: "Iran" },
    { geocode: [33.2232, 43.6793], Popup: "Iraq" },
    { geocode: [31.0461, 34.8516], Popup: "Israel" },
    { geocode: [31.9522, 35.2332], Popup: "Jordan" },
    { geocode: [34.8021, 38.9968], Popup: "Syria" },
    { geocode: [41.0082, 28.9784], Popup: "Turkey" },
    { geocode: [64.9631, -19.0208], Popup: "Iceland" },
    { geocode: [59.3293, 18.0686], Popup: "Sweden" },
    { geocode: [60.1699, 24.9384], Popup: "Finland" },
    { geocode: [47.5162, 14.5501], Popup: "Austria" },
    { geocode: [46.8182, 8.2275], Popup: "Switzerland" },
    { geocode: [48.669, 19.699], Popup: "Slovakia" },
    { geocode: [45.9432, 24.9668], Popup: "Romania" },
    { geocode: [46.1512, 14.9955], Popup: "Slovenia" },
    { geocode: [44.0165, 21.0059], Popup: "Serbia" },
    { geocode: [56.2639, 9.5018], Popup: "Denmark" },
    { geocode: [53.1424, -7.6921], Popup: "Ireland" },
  ];
  const DistrictMarkers = [
    { geocode: [8.5241, 76.9366], Popup: "Thiruvananthapuram" },
    { geocode: [8.8932, 76.6141], Popup: "Kollam" },
    { geocode: [9.3815, 76.574], Popup: "Pathanamthitta" },
    { geocode: [9.4981, 76.3388], Popup: "Alappuzha" },
    { geocode: [9.9312, 76.2673], Popup: "Ernakulam" },
    { geocode: [10.152, 76.3922], Popup: "Kottayam" },
    { geocode: [9.7624, 76.5729], Popup: "Idukki" },
    { geocode: [10.8505, 76.2711], Popup: "Thrissur" },
    { geocode: [10.7867, 76.6548], Popup: "Palakkad" },
    { geocode: [11.2588, 75.7804], Popup: "Kozhikode" },
    { geocode: [11.8745, 75.3704], Popup: "Kannur" },
    { geocode: [11.8745, 75.6544], Popup: "Wayanad" },
    { geocode: [12.3052, 75.295], Popup: "Kasargod" },
    { geocode: [10.5276, 76.2144], Popup: "Malappuram" },
  ];
  const StateMarkers = [
    { geocode: [15.91, 79.74], Popup: "Andhra Pradesh" },
    { geocode: [28.21, 94.72], Popup: "Arunachal Pradesh" },
    { geocode: [26.2, 92.93], Popup: "Assam" },
    { geocode: [25.09, 85.31], Popup: "Bihar" },
    { geocode: [21.27, 81.86], Popup: "Chhattisgarh" },
    { geocode: [15.29, 74.12], Popup: "Goa" },
    { geocode: [22.25, 71.19], Popup: "Gujarat" },
    { geocode: [29.05, 76.08], Popup: "Haryana" },
    { geocode: [31.1, 77.17], Popup: "Himachal Pradesh" },
    { geocode: [23.61, 85.27], Popup: "Jharkhand" },
    { geocode: [15.31, 75.71], Popup: "Karnataka" },
    { geocode: [10.85, 76.27], Popup: "Kerala" },
    { geocode: [22.97, 78.65], Popup: "Madhya Pradesh" },
    { geocode: [19.75, 75.71], Popup: "Maharashtra" },
    { geocode: [24.66, 93.9], Popup: "Manipur" },
    { geocode: [25.46, 91.36], Popup: "Meghalaya" },
    { geocode: [23.16, 92.93], Popup: "Mizoram" },
    { geocode: [26.15, 94.56], Popup: "Nagaland" },
    { geocode: [20.95, 85.09], Popup: "Odisha" },
    { geocode: [31.14, 75.34], Popup: "Punjab" },
    { geocode: [27.02, 74.21], Popup: "Rajasthan" },
    { geocode: [27.53, 88.51], Popup: "Sikkim" },
    { geocode: [11.12, 78.65], Popup: "Tamil Nadu" },
    { geocode: [18.11, 79.01], Popup: "Telangana" },
    { geocode: [23.94, 91.98], Popup: "Tripura" },
    { geocode: [26.84, 80.94], Popup: "Uttar Pradesh" },
    { geocode: [30.06, 79.01], Popup: "Uttarakhand" },
    { geocode: [22.98, 87.85], Popup: "West Bengal" },
    { geocode: [11.66, 92.73], Popup: "Andaman and Nicobar Islands" },
    { geocode: [30.73, 76.77], Popup: "Chandigarh" },
    {
      geocode: [20.18, 73.01],
      Popup: "Dadra and Nagar Haveli and Daman and Diu",
    },
    { geocode: [28.66, 77.23], Popup: "Delhi" },
    { geocode: [33.77, 76.57], Popup: "Jammu and Kashmir" },
    { geocode: [10.56, 72.63], Popup: "Lakshadweep" },
    { geocode: [34.29, 78.29], Popup: "Ladakh" },
    { geocode: [11.94, 79.8], Popup: "Puducherry" },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/929/929426.png",
    iconSize: [20, 20],
  });

  const MarkersToShow =
    zoomLevel < 5
      ? CountryMarkers
      : zoomLevel < 8
      ? StateMarkers
      : DistrictMarkers;

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={2}
        style={{ height: "50%", width: "50%" }}
      >
        <ZoomHandler />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />
        {MarkersToShow.map((marker) => (
          <Marker
            position={marker.geocode}
            icon={customIcon}
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
              click: (e) => {
                if (zoomLevel < 5) {
                  const map = e.target._map;
                  map.flyTo(marker.geocode, 6, { duration: 1 });
                }
                else if (zoomLevel < 8){
                  const map = e.target._map;
                  map.flyTo(marker.geocode, 8, { duration: 1 });
                }
                else{
                  e.target.openPopup();
                }
              },
            }}
          >
            <Popup>
              <div
                style={{
                  width: "80px",
                  height: "30px",
                  backgroundColor: "#ffffffff",
                  color: "#080101ff",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                {marker.Popup}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default MapView;
