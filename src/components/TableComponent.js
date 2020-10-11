import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Multiselect } from 'multiselect-react-dropdown'
import { connect } from "react-redux";

const { SearchBar } = Search;

const colors = [
  {name: "Black", id: 1},
  {name: "White", id: 2},
  {name: "Blue", id: 3},
  {name: "Red", id: 4},
  {name: "Green", id: 5},
]

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getCardsList: state.getCardsList,
    errorCardsList: state.errorCardsList,
    getCardTypeList: state.getCardTypeList,
    errorCardTypeList: state.errorCardTypeList,
  };
};

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "text",
      text: "Text",
      
    },
    {
      dataField: "setName",
      text: "Set Name",
      searchable: false,
    },
    {
        dataField: "colors",
        text: "Colors",
        formatter: (rowContent, row) => {
            return (
                <div>
                    {rowContent.toString()}
                </div>
            );
        }
    },

  ];

  const [optionsColors] = useState(colors);
  
  return (
    <Container>
      {props.getCardsList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getCardsList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <SearchBar { ...props.searchProps } />
              <Multiselect options={optionsColors} displayValue="name"></Multiselect>
              <Multiselect options={props.getCardTypeList}></Multiselect>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
            
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorCardsList ? (
            <h4>{props.errorCardsList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};



export default connect(mapStateToProps, null)(TableComponent);