import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        data:{}
    }
    componentDidMount() {
        this.getData();
    };

    getData = () => {
        fetch('https://gnews.io/api/v3/top-news?token=990d9071ebb8b5c6202a5b355abf617f')
        .then(data => data.json())
        .then(data => this.setState({data}))
    };

    render() {
        console.log(this.state.data.articles ? this.state.data.articles[0] : "")
        return(
        
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {this.state.data.articles[0].map((data) => {
                    return (
                        <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
    
                    
                    <div className="carousel-inner">
                        <div className="item active">
                        <h1>{this.props.data.articles ? this.props.data.articles[0].title : ""}</h1>
                        <p>{this.props.data.articles ? this.props.data.articles[0].description : ""}</p>
                        <p>{this.props.data.articles ? this.props.data.articles[0].source.name : ""}</p>
                        <small>{this.props.data.articles ? this.props.data.articles[0].url : ""}</small>
                        </div>
                        <div className="item">
                            <h1>{this.props.data.articles ? this.props.data.articles[1].title : ""}</h1>
                            <p>{this.props.data.articles ? this.props.data.articles[1].description : ""}</p>
                            <p>{this.props.data.articles ? this.props.data.articles[1].source.name : ""}</p>
                            <small>{this.props.data.articles ? this.props.data.articles[1].url : ""}</small>
                        </div>
    
                        <div className="item">
                            <h1>{this.props.data.articles ? this.props.data.articles[2] : "".title}</h1>
                            <p>{this.props.data.articles ? this.props.data.articles[2] : "".description}</p>
                            <p>{this.props.data.articles ? this.props.data.articles[2].source.name : ""}</p>
                            <small>{this.props.data.articles ? this.props.data.articles[2].url : ""}</small>
                        </div>
                    </div>
    
                
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
                })}
        }
            </div>
        )
        };
       
    }



export default Carousel;