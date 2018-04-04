import React, {Component} from 'react';
import './Item.css';
import {Row, Col} from 'react-bootstrap';
// import Stars from './Stars';

class Item extends Component {
    render() {
        return (
            <div className='item-container'>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={this.props.item.cover.large} alt={this.props.item.title}/>
                    </Col>
                    <Col xs={12}>
                        <div className='title-text'>{this.props.item.title}</div>
                    </Col>
                    <Col xs={2}>
                        <div>
                            {this.props.item.production_year}
                        </div>
                    </Col>
                    <Col xs={4}>
                        {/* <Stars rating={this.props.item.rating}/> */}
                        <i class="glyphicon glyphicon-cloud"></i>
                        {this.props.item.rating}
                    </Col>
                    <Col xs={3}>
                        <div>
                            {this.props.item.subtitles}
                            {this.props.item.hd}
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div>
                            {this.props.item.length}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Item;