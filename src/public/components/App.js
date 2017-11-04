import React from 'react';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateFavorites } from '../actions';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetch('/database', { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        this.props.updateName(res.name);
        this.props.updateAddress(res.address);
        this.props.updateFavorites(res.favorites);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route exact path="/" component={Landing} />
        </div>
      </HashRouter>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  updateName: name => dispatch(updateName(name)),
  updateAddress: address => dispatch(updateAddress(address)),
  updateFavorites: favorites => dispatch(updateFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
