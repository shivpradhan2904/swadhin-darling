import React, { Component } from "react";
import NewItem from './NewItem';

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }

  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  }

  handlenextclick = async () => {
    console.log("NEXT");
    let url = `https://newsapi.org/v2/everything?q=india&apiKey=c3c8952fb43546a2b453911a878f1e9e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
    });
  }

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center">TIMES OF INDIA Top-Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 70) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container mx-3 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
