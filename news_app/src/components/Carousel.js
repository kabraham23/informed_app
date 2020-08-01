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
        // const article = {state.data.articles ? this.state.data.article[0]] : ""}
        console.log(this.state.data.articles ? this.state.data.articles[0] : "")
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                
                <div className="carousel-inner">
                    <div className="item active">
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <p>{article.source.name}</p>
                    <small>{article.url}</small>
                    </div>
                    <div className="item">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <p>{article.source.name}</p>
                        <small>{article.url}</small>
                    </div>

                    <div className="item">
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <p>{article.source.name}</p>
                        <small>{article.url}</small>
                    </div>
                </div>

            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a> */}
            </div>
        )
    }

}



export default Carousel;