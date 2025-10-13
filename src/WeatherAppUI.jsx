import {Button, Card, CardBody, CardHeader, Container, FormControl} from "react-bootstrap"
function WeatherAppUI() {
    return(
        <div>
            <Container>
                <Card>
                    <CardHeader>
                        <h1>Weather App</h1>
                    </CardHeader>
                    <CardBody className="d-flex justify-content-between align-items-center">
                        <FormControl type="text" placeholder="Enter Place"/>
                        <Button className="btn bi-search"></Button>
                        <Button className="btn bi-gear"></Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}
export default WeatherAppUI;