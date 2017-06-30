import React from 'react';
import {AgGridReact} from "ag-grid-react";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import __ from 'lodash';
import moment from 'moment';
import accounting from 'accounting';
import { Link } from 'react-router';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        columnDefs: this.createColumnDefs(),
        rowData: this.createRowData()
    }
  }
  onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }
    createColumnDefs() {
          return [
              {headerName: "Make", field: "make"},
              {headerName: "Model", field: "model"},
              {headerName: "Price", field: "price"}
          ];
      }

      createRowData() {
          return [
              {make: "Toyota", model: "Celica", price: 35000},
              {make: "Ford", model: "Mondeo", price: 32000},
              {make: "Porsche", model: "Boxter", price: 72000}
          ];
      }
  render(){
    let containerStyle = {
           height: 115,
           width: 500
       };
    return (
      <div>
        <Link to={'/contact'} activeClassName="active">contact</Link>
        <div style={containerStyle} className="ag-fresh">
                <h1>Simple ag-Grid React Example</h1>
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
      </div>
    )
  }
}
const MyQuery = gql`
    query getTasks{
      getTasks {
        _id
      }
    }`
export default compose(
graphql(MyQuery, {
    options: (ownProps) => ({
      fetchPolicy: true
    }),
    name: 'getTasks',
})
)(Home);
