import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/fetchHelper';
import CardList from '../CardList/CardList'


class App extends Component {


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fetchAllData();
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          { this.props.allTheHouses
            ?
            <CardList />
            :
            <div className='loading'>
              <img src={ require('../../assets/wolf.gif') }/>
            </div>
          }
        </div>
      </div>
    );
  }
}


App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};


const mapStateToProps = ({store}) => ({
  allTheHouses: store.allTheHouses
});



const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchData())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
