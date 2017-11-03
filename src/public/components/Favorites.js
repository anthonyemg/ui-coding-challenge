import React from 'react';
import { connect } from 'react-redux';
import { updateFavorites, toggleFavoritesModal } from '../actions';
import Modal from './Modal';
import FavoritesModal from './FavoritesModal';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [...this.props.favorites]
    };
    this.handleToggleFavoritesModal = this.handleToggleFavoritesModal.bind(this);
  }
  handleToggleFavoritesModal() {
    this.props.toggleFavoritesModal(!this.props.displayFavoritesModal);
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Favorite Motorcycles</span>

            {this.props.favorites.length === 0 ? (
              <span className="component-noneAdded">None Added</span>
            ) : (
              this.props.favorites.map((favorite, index) => (
                <span className="component-text" key={index}>
                  {index + 1}. {favorite}
                </span>
              ))
            )}
          </div>
          <div>
            <button
              className="component-editButton"
              onClick={() => this.handleToggleFavoritesModal()}
            >
              Edit Motorcyles
            </button>
          </div>
        </div>
        {this.props.displayFavoritesModal && (
          <Modal>
            <FavoritesModal
              favorites={this.props.favorites}
              updateFavorites={this.props.updateFavorites}
              handleToggleFavoritesModal={this.handleToggleFavoritesModal}
            />
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  displayFavoritesModal: state.displayFavoritesModal
});
const mapDispatchToProps = dispatch => ({
  updateFavorites: favorites => dispatch(updateFavorites(favorites)),
  toggleFavoritesModal: boolean => dispatch(toggleFavoritesModal(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
