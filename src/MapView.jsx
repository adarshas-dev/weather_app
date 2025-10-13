import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MapView() {
    function handleClick() {
        console.log("hii");
        
    }

  const countryMarkers = [
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

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/929/929426.png",
    iconSize: [20, 20],
  });

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="d-flex justify-content-center"
    >
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={2}
        style={{ height: "50%", width: "50%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />
        {countryMarkers.map((marker) => (
          <Marker 
          position={marker.geocode} 
          icon={customIcon}
          onClick={handleClick}
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
