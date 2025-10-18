import { Card, Col, Image, Row } from "react-bootstrap";

function CityPopup({ marker }) {
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
          {name}
        </Card.Title>
        <Card.Subtitle style={{ fontSize: "11px", color: "#777" }}>
          {country}
        </Card.Subtitle>

        <Row className="align-items-center mt-2">
          <Col xs="4">
            <Image src={icon} rounded style={{ height: "45px" }} />
          </Col>
          <Col>
            <h3 style={{ margin: 0, fontWeight: "bold" }}>
              {temp}
              <sup>°</sup>C
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>
              {condition}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CityPopup;
