import { Card, Col, Image, Row } from "react-bootstrap";

function SearchPopup({ searchData }) {
  const allIcon = {
    "01d": "https://cdn-icons-png.flaticon.com/128/6974/6974833.png",
    "02d": "https://cdn-icons-png.flaticon.com/128/3222/3222800.png",
    "03d": "https://cdn-icons-png.flaticon.com/128/1146/1146869.png",
    "04d": "https://cdn-icons-png.flaticon.com/128/414/414927.png",
    "09d": "https://cdn-icons-png.flaticon.com/128/15621/15621965.png",
    "10d": "https://cdn-icons-png.flaticon.com/128/5545/5545843.png",
    "11d": "https://cdn-icons-png.flaticon.com/128/1779/1779927.png",
    "13d": "https://cdn-icons-png.flaticon.com/128/4834/4834727.png",
    "50d": "https://cdn-icons-png.flaticon.com/128/10405/10405474.png",

    "01n": "https://cdn-icons-png.flaticon.com/128/7204/7204171.png",
    "02n": "https://cdn-icons-png.flaticon.com/128/10660/10660906.png",
    "03n": "https://cdn-icons-png.flaticon.com/128/4834/4834576.png",
    "04n": "https://cdn-icons-png.flaticon.com/128/13804/13804450.png",
    "09n": "https://cdn-icons-png.flaticon.com/128/2930/2930139.png",
    "10n": "https://cdn-icons-png.flaticon.com/128/1332/1332374.png",
    "11n": "https://cdn-icons-png.flaticon.com/128/1959/1959348.png",
    "13n": "https://cdn-icons-png.flaticon.com/128/4005/4005898.png",
    "50n": "https://cdn-icons-png.flaticon.com/128/2930/2930127.png",
  };

  return (
    <div>
      <Card
        border="primary"
        style={{
          width: "200px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <Card.Body style={{ padding: "6px" }}>
          <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
            {searchData.name.normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")}
          </Card.Title>
          <Card.Subtitle className="countryName" style={{ fontSize: "11px" }}>
            {searchData.country}
          </Card.Subtitle>

          <Row className="align-items-center mt-2">
            <Col xs="4">
              <Image
                src={allIcon[searchData.icon]}
                rounded
                style={{ height: "45px" }}
              />
            </Col>
            <Col>
              <h3 style={{ margin: 0, fontWeight: "bold" }}>
                {Math.round(searchData.temp)}°C
              </h3>
              <p style={{ margin: 0, fontSize: "12px" }}>{searchData.weather}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SearchPopup;
