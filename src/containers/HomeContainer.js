import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getCardsList, getCardTypeList } from '../actions/cardAction'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCardsList());
    this.props.dispatch(getCardTypeList());
  }

  render() {
    
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);