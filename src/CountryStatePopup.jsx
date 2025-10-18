import { Card, Col, Image, Row } from "react-bootstrap";

function CountryStatePopup({ marker }) {
  const {
    Popup: name,
    country = "India",
    temp = 27,
    condition = "Sunny",
    icon = "https://cdn-icons-png.flaticon.com/128/3313/3313888.png",
  } = marker;

  return (
    <Card
      border="danger"
      style={{
        width: "200px",
        maxWidth: "800px",
        minWidth: "100px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <Card.Body style={{ padding: "6px" }}>
        <Card.Title
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "Helvetica",
            color: "#222",
          }}
        >
          {marker.Popup}
        </Card.Title>
        <Card.Subtitle style={{ fontSize: "11px", color: "#777" }}>
          <p>Click To Zoom In.</p>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CountryStatePopup;
