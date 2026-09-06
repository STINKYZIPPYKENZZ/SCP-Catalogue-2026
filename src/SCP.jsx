import {Card} from 'react-bootstrap'

// SCP Component to display details of the selected SCP
function SCP({ selectedSCP }) {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">{selectedSCP.item}</Card.Header>
      <Card.Body>
        <Card.Title>SCP Class: {selectedSCP.class}</Card.Title>
        <Card.Text>
          <strong>Containment:</strong> {selectedSCP.containment}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {selectedSCP.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SCP;
