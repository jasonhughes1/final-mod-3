import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../../utils/fetchHelper';
import CardList from '../../components/CardList/CardList';
import PropTypes from 'prop-types';


class App extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { this.props.allTheHouses.length > 0
            ?
            <CardList
              allTheHouses={this.props.allTheHouses}
            />
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
  allTheHouses: PropTypes.arrayOf(PropTypes.object),
  fetchAllData: PropTypes.func
};


const mapStateToProps = (store) => ({
  allTheHouses: store.allTheHouses
});



const mapDispatchToProps = dispatch => ({
  fetchAllData: () => dispatch(fetchData())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
