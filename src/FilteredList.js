import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilterType = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "all" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list container">
        <h1>Produce Search</h1>

        <DropdownButton id="typeDropdown" title="Type" onSelect={this.onFilterType}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} className="form-control mt-3" />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
