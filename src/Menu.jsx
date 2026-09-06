import {ListGroup} from 'react-bootstrap'

// Menu Component to display the list of SCPs
function Menu({ scps, onSelect }) {
  return (
    <ListGroup>
      {scps.map((scp) => (
        <ListGroup.Item
          key={scp.item}
          action
          onClick={() => onSelect(scp)}
        >
          {scp.item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Menu;

