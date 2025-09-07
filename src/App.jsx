import Menu from "./Menu"
import SCP from "./SCP"
import {useState, useEffect} from 'react'
import scpData from "./random_scps.json"
import {Container, Row, Col, Card} from 'react-bootstrap'


function App() {
  const [scps, setScps] = useState([]);
  const [selectedSCP, setSelectedSCP] = useState(null);

  useEffect(() => {
    setScps(scpData);
  }, []);

  const handleSelect = (scp) => {
    setSelectedSCP(scp);
  };

  return (
    console.log("Selected SCP Image:", selectedSCP?.image),
    <Container className="mt-4">
      <h1 className="text-center mb-4">SCP React Application</h1>
      <Row>
        {/* Left Menu */}
        <Col md={4}>
          <Card>
            <Card.Header>Available SCPs</Card.Header>
            <Card.Body>
              <Menu scps={scps} onSelect={handleSelect} />
            </Card.Body>
          </Card>

          {/* Dynamic Image Card */}
          <Card className="mt-3">
            {selectedSCP?.image ? (
              <Card.Img
                variant="top"
                src={selectedSCP.image}
                alt={selectedSCP.item}
                style={{ objectFit: "cover", height: "250px" }}
              />
            ) : (
              <Card.Img
                variant="top"
                src="/images/52061217_0.jpg"
                alt="Placeholder SCP"
              />
            )}
            <Card.Body className="text-center">
              <Card.Text>
                {selectedSCP
                  ? `Image of ${selectedSCP.item}`
                  : "Select an SCP to display its image."}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Right SCP Details */}
        <Col md={8}>
          {selectedSCP ? (
            <SCP selectedSCP={selectedSCP} />
          ) : (
            <Card className="text-center">
              <Card.Body>Select an SCP from the menu to see details.</Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );

  
}

export default App;

