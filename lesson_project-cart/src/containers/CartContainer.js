import { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from "./../actions/index"

class CartContainer extends Component { 

  showCartItem=(cart)=>{
    var result= <tr><td>message.MSG_EMPTY</td></tr>;
    if(cart.length>0){
      result=cart.map((cartitem,index)=>{
        return <CartItem
          key={index}
          item={cartitem}
          quantity={index}
          onDeleteCart={this.props.onDeleteCart}
          onChangeMessage={this.props.onChangeMessage}
          onUpdateCart={this.props.onUpdateCart}
        />
      })
    }
    return result;
  }

  showTotal=(cart)=>{
    var result=null;
    if(cart.length>0){
      var total=0;
      for(var i=0;i<cart.length;i++){
        total+=cart[i].product.price * cart[i].quantity;
      }
      result= <CartResult
        total={total}
      />
    }
    return result;
  }
  render() {
    var{cart}=this.props;
    console.log("cart ",cart);
    return (
      <Cart>
      {this.showCartItem(cart)}
      {this.showTotal(cart)}
    </Cart>
    );
  }
}

// CartContainer.propTypes={
//     cart:PropTypes.arrayOf(PropTypes.shape({
//       product: PropTypes.shape({

//       }).isRequired,
//       quantity:PropTypes.number.isRequired  
//     })
//     ).isRequired
// }

CartContainer.propTypes={
  cart:PropTypes.arrayOf(PropTypes.shape({
      product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired
      }).isRequired
  })).isRequired
}

const mapStatetoProps = (state) => {
  return {
    cart:state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCart: (product) => {
      dispatch(actions.deleteCart(product));
    },
    onChangeMessage:(message)=>{
      dispatch(actions.changeMessage(message))
    },
    onUpdateCart:(product,quantity)=> {
      dispatch(actions.updateCart(product,quantity));
    },
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(CartContainer);
