import { Component } from "react";
import Products from "./../components/Products";
import Product from "../components/Product";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as actions from './../actions/index'

class ProductContainer extends Component { 
    showProduct =(product)=>{
        var {onAddToCart,onChangeMessage}=this.props;
        var result=null;
        if(product.length>0){
            result= product.map((temp,index)=>{
            return <Product key={index} product={temp} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>
            });
        }
        return result;
    }

  render() {
    var {product}=this.props;
    return (
        <Products>
            {this.showProduct(product)}
        </Products>
    );
  }
}

ProductContainer.propTypes={
    product:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired,

    })).isRequired,
    onChangeMessage:PropTypes.func.isRequired
}
const mapStatetoProps = (state) => {
  return {
    product:state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart:(product)=>{
      dispatch(actions.actAddtoCart(product,1))
    },
    onChangeMessage:(message)=>{
      dispatch(actions.changeMessage(message))
    }
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(ProductContainer);
