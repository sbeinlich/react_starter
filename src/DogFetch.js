import React from 'react';

class DogFetch extends React.Component {
  constructor(props) { 
    super(props); 
    
    this.state = { dogUrl: ''}
   
    this.handleClick = this.handleClick.bind(this);
    this.fetchDog = this.fetchDog.bind(this);
  }
  
  componentDidMount() {
    this.fetchDog();
  }


  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        if(!response.ok){
            throw Error(response);
        }
        return response.json();
    })
    .then((jsonData) =>{
        this.setState({
            dogUrl: jsonData.message
        })
        console.log(jsonData);
    })
    .catch((e) => {
        console.log(e)
    })

  }

  handleClick(e) {
    e.preventDefault(); 
    this.fetchDog();
  }

  render() {
    return (
        <div>
            <button onClick={this.handleClick}>
                New Dog
            </button>
            <br/>
            <img src={this.state.dogUrl} alt="Dog Pic"/>
           
        </div>
    );
  }
}

export default DogFetch;
