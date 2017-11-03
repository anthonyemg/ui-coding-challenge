import React from 'react';
import { connect } from 'react-redux';
import { showFavoritesModal, hideFavoritesModal } from '../actions';
import Modal from './Modal';
import FavoritesModal from './FavoritesModal';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Favorites</span>
            <span className="component-text">None added</span>
          </div>
          <div>
            <button
              className="component-editButton"
              onClick={() => this.props.showFavoritesModal()}
            >
              Edit Favorites
            </button>
          </div>
        </div>
        {this.props.displayFavoritesModal ? (
          <Modal>
            <FavoritesModal
              hideFavoritesModal={this.props.hideFavoritesModal}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayFavoritesModal: state.displayFavoritesModal
});
const mapDispatchToProps = dispatch => ({
  showFavoritesModal: () => dispatch(showFavoritesModal()),
  hideFavoritesModal: () => dispatch(hideFavoritesModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
