import { Component } from "react";
import { MSG_DELETE, MSG_UPDATE } from "../constants/message";

class CartItem extends Component {
  constructor(props){
    super(props);
    this.state={
      quantity:1
    }
  }

  render() {
    var { item } = this.props;
    var {quantity}= item;
    var dollarUS = Intl.NumberFormat("en-VN", {
      style: "currency",
      currency: "VND",
    });
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.productname}</strong>
          </h5>
        </td>
        <td>{dollarUS.format(item.product.price)}</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={()=>this.updateQuantitay(item.product,item.quantity-1)} className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label onClick={()=>this.updateQuantitay(item.product,item.quantity+1)} className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{dollarUS.format(item.product.price*item.quantity)}</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title="" data-original-title="Remove item" onClick={()=>{this.onDelete(item.product)}}>
            X
          </button>
        </td>
      </tr>
    );
  }

  onDelete=(product)=>{
    this.props.onDeleteCart(product);
    this.props.onChangeMessage(MSG_DELETE);
  }

  updateQuantitay=(product,quantity)=>{
    if(quantity>0){
      this.props.onUpdateCart(product,quantity);
      this.props.onChangeMessage(MSG_UPDATE);
    }
  }
}

export default CartItem;
