import {Card} from 'react-bootstrap'


function SCP({ selectedSCP }) {
  return (
    <Card className="mb-3">
      <Card.Header as="h5">{selectedSCP.item}</Card.Header>
      <Card.Body>
        <Card.Title>SCP Class: {selectedSCP.class}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {selectedSCP.desc}
        </Card.Text>
        <Card.Text>
          <strong>Containment:</strong> {selectedSCP.containment}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SCP;
