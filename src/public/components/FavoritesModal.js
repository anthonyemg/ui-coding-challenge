import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  favorites: PropTypes.array.isRequired,
  updateFavorites: PropTypes.func.isRequired,
  handleToggleFavoritesModal: PropTypes.func.isRequired
};

// I initially attempted to make this modal stateless like the rest of the modals but I needed this modal to rerender when client added more favorites.
class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFavorites: [...this.props.favorites]
    };
    this.handleFavoritesUpdate = this.handleFavoritesUpdate.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleSubmitUpdatedFavorites = this.handleSubmitUpdatedFavorites.bind(this);
  }
  // if there are no favorites when the modal renders handleAddFavorite is called to add a empty favorite
  componentWillMount() {
    if (this.props.favorites.length === 0) {
      this.handleAddFavorite();
    }
  }
  // event listener that targets a specific favorite in the favorites array and updates it with the given input
  handleFavoritesUpdate(e, index) {
    const newState = [...this.state.modalFavorites];
    newState[index] = e.target.value;
    this.setState({
      modalFavorites: newState
    });
  }
  // adds empty string to favorites array
  handleAddFavorite() {
    const newState = [...this.state.modalFavorites];
    newState[newState.length] = '';
    this.setState({
      modalFavorites: newState
    });
  }
  // checks if user added a favorite before saving, if not it will remove the empty string that was added on componentWillMount
  handleSubmitUpdatedFavorites() {
    if (this.state.modalFavorites[0] !== '') {
      this.props.updateFavorites(this.state.modalFavorites);
    }
  }
  render() {
    return (
      <div className="modal-content">
        <div className="modal-contentFavorites">
          {this.state.modalFavorites.map((favorite, index) => (
            <div key={index}>
              <span>Favorite {index + 1}</span>
              <input
                className="modal-input"
                defaultValue={favorite}
                onChange={e => this.handleFavoritesUpdate(e, index)}
              />
            </div>
          ))}
          <span className="modal-title">Edit Favorites</span>
          <span className="modal-addButton" onClick={this.handleAddFavorite}>
            + Add Another
          </span>
          <div
            className="modal-closeButtonContainer"
            onClick={() => this.props.handleToggleFavoritesModal()}
          >
            Close
            <button className="modal-closeButton">x</button>
          </div>
          <div className="modal-bottomButtons">
            <div
              className="modal-cancelButton"
              onClick={() => this.props.handleToggleFavoritesModal()}
            >
              Cancel
            </div>
            <div
              className="modal-saveButton"
              onClick={() => (
                this.handleSubmitUpdatedFavorites(), this.props.handleToggleFavoritesModal()
              )}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FavoritesModal.propTypes = propTypes;

export default FavoritesModal;
