import React, {Component} from 'react';
import './Item.css';
import {Row, Col} from 'react-bootstrap';
import cc from './assets/icon_subtitle.png';
import hd from './assets/icon_hd.png';
import goldStar from './assets/icon_star_yellow.png';
import grayStar from './assets/icon_star_gray.png';

class Item extends Component {
    showCC() {
        if (this.props.item.subtitles) {
            return (<img src={cc} alt='' className='icon'/>);
        }
    }

    showHD() {
        if (this.props.item.hd) {
            return (<img src={hd} alt='' className='icon'/>);
        }
    }

    getStars(rating) {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push((<img className='star' src={goldStar} alt='' key={i}/>));
            } else {
                stars.push((<img className='star' src={grayStar} alt='' key={i}/>));
            }
        }
        return stars;
    }

    getDuration() {
        let timeInSeconds = parseInt(this.props.item.length, 10);
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);

        return `${hours}h ${minutes}m`;
    }

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
                    <Col xs={12}>
                        <div className='detail-container'>
                            <div className='detail-text'>
                                {this.props.item.production_year}
                            </div>
                            <div className='stars'>
                                {this.getStars(this.props.item.rating)}
                            </div>
                            <div>
                                {this.showCC()}
                            </div>
                            <div>
                                {this.showHD()}
                            </div>
                            <div className='duration-text'>
                                {this.getDuration()}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Item;