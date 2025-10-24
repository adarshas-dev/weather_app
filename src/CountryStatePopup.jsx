import { Card, Col, Image, Row } from "react-bootstrap";
import "./CountryStatePopup.css"

function CountryStatePopup({ marker }) {
  return (
    <div className="popup">
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
              // fontFamily: "Helvetica",
              // color: "#222",
            }}
          >
            {marker.Popup}
          </Card.Title>
          <Card.Subtitle style={{ fontSize: "11px", color: "#777" }}>
            <p style={{ marginTop: "-5px" }}>
              {marker.type.charAt(0).toUpperCase() + marker.type.slice(1)}
            </p>
            <p>Click To Zoom In.</p>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CountryStatePopup;
