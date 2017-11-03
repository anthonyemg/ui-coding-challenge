import React from 'react';
import { connect } from 'react-redux';
import { updateFavorites, showFavoritesModal, hideFavoritesModal } from '../actions';
import Modal from './Modal';
import FavoritesModal from './FavoritesModal';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
    this.handleSubmitUpdatedFavorites = this.handleSubmitUpdatedFavorites.bind(this);
  }
  componentWillReceiveProps() {
    this.setState({
      favorites: this.props.favorites
    });
  }
  handleSubmitUpdatedFavorites(favorites) {
    this.props.updateFavorites(favorites);
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Favorites</span>

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
              onClick={() => this.props.showFavoritesModal()}
            >
              Edit Favorites
            </button>
          </div>
        </div>
        {this.props.displayFavoritesModal && (
          <Modal>
            <FavoritesModal
              favorites={this.props.favorites}
              hideFavoritesModal={this.props.hideFavoritesModal}
              updateFavorites={this.props.updateFavorites}
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
  showFavoritesModal: () => dispatch(showFavoritesModal()),
  hideFavoritesModal: () => dispatch(hideFavoritesModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
