import { Card, Col, Image, Row } from "react-bootstrap";

function WeatherPopup({ marker }) {
  return (
    <div>
      <Card border="danger" style={{ width: "15rem" }}>
        <Card.Body style={{padding:"5px"}}>
          <Card.Title
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Helvatica",
            }}
          >
            {marker.Popup}
          </Card.Title>
          <Card.Subtitle style={{fontSize:"10px"}}>
            {marker.Popup}, {marker.Popup}
          </Card.Subtitle>
          <Row>
            <Col className="col-3">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3313/3313888.png"
                rounded
                style={{ height: "50px", marginTop:"10px" }}
              />
            </Col>
            <Col >
              <h1 style={{marginTop:"10px", fontWeight:"bold"}}>27<sup>°</sup>c</h1>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
export default WeatherPopup;
