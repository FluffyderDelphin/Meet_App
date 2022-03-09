import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ' ',
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'No Matching Results Found',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ' ',
      });
    }
  };
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ' ',
    });
    this.props.updateEvents(suggestion);
  };
  render() {
    return (
      <Form className="CitySearch">
        <Form.Group>
          <Form.Text>
            <InfoAlert text={this.state.infoText} />
          </Form.Text>
          <Form.Control
            className="city"
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          ></Form.Control>
          <ListGroup
            className="suggestions"
            style={this.state.showSuggestions ? {} : { display: 'none' }}
          >
            {this.state.suggestions.map((suggestion) => (
              <ListGroup.Item
                className="suggestion-item"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </ListGroup.Item>
            ))}
            <ListGroup.Item
              className="suggestion-item"
              onClick={() => this.handleItemClicked('all')}
            >
              <b>See all Cities</b>
            </ListGroup.Item>
          </ListGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default CitySearch;
