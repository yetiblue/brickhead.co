import React from "react";
import store from "../store/store";
import "./HomePage.css";

class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }
  render() {
    console.log(store.getState(), "store home page");
    return <div></div>;
  }
}

export default HomePage;
