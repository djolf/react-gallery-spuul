import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/3z7ou').then(response => {
      return response.json();
    }).then(data => {
      let movies = data.map((movie) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Item item={movie}/>
          </Col>
        );
      });
      this.setState({movies});
    }).catch(error => console.error(error));
  }

  render() {
    return (
      <Grid>
        <Row>
          {this.state.movies}
        </Row>
      </Grid>
    );
  }
}

export default App;
