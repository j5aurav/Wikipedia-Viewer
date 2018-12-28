import React, { Component } from 'react';
import Result from './Result';

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            searchText: "",
            apiData: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    async handleClick() {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${this.state.searchText}&origin=*&format=json`
        if(this.state.searchText !== ""){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    apiData: data.query.search
                })
            })
        }
        
    }

  render() {
        //console.log(this.state.apiData)
      const resultData = this.state.apiData.map(item => <Result key={item.pageid} title={item.title} description={item.snippet}  />)
    return (
        <div>
            <div className="SearchBar">
                <input className="searchtext" type="text" name="searchText" placeholder=" Search for a Wikipedia article" value={this.state.searchText} onChange={this.handleChange}/>
                <br />
                <input className="searchbutton" type="button" value="Search" onClick={this.handleClick} />
                <br />
                <a className="random" href="http://en.wikipedia.org/wiki/Special:Random">Get A Random Article</a>
            </div>
            <div>
                {resultData}
            </div>
        </div>
      
    );
  }
}

export default SearchBar;
