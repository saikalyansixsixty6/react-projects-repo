/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../contexts/Context";

// eslint-disable-next-line react/prop-types
function SingleProduct({prod}) {
  const {state:{cart},dispatch} = CartState();
  
  return (
    <div className="products">
      <Card>
        
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            cart.some((p) => p.id === prod.id)?(<Button variant="danger" onClick={() =>{
              dispatch({type:"REMOVE_FROM_CART",
              payload:prod})
        }} >
            Remove From Cart
       </Button>):(<Button onClick={() =>{
             dispatch({type:"ADD_TO_CART",
             payload:prod})
       }} disabled={!prod.inStock} >
           
           {!prod.inStock ? "Out of Stoke":"Add to Cart"}
         </Button>)
          }

          
         
          
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct;