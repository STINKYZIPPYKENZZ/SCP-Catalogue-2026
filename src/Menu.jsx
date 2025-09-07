import {ListGroup} from 'react-bootstrap'


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

