import { Component } from "react";
import Header from "./components/Header";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import Footer from "./components/Footer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
            <ProductContainer/>
            <MessageContainer/>
            <CartContainer/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
