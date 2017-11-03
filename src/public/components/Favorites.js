import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions';
import Modal from './Modal';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="favorites-container">
        <div className="favorites-wrapper">
          <div className="favorites-details">
            <span className="favorites-containerTitle">Favorites</span>
            <span>None added</span>
          </div>
          <div>
            <button
              className="favorites-editButton"
              onClick={() => this.props.showModal()}
            >
              Edit Favorites
            </button>
          </div>
        </div>
        {this.props.displayModal ? <Modal /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayModal: state.displayModal
});
const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
