import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../../loader/loader';
import InfinteLoader from '../../loader/infinte-loader';
import CustomToast from '../../toast/toast';
import InsatgramHeart from '../../heart/instagram-heart';

function CustomRectangleCard({text,title,removeHandler,ind}) {
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        {/* <CustomDNALoader  height={'100'} width={'100'}/> */}
        {/* <InfinteLoader/>  */}
        <InsatgramHeart/>
        <CustomToast  message={"I am card"}/>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;