import React from 'react';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFavorites: [...this.props.favorites]
    };
    this.handleFavoritesUpdate = this.handleFavoritesUpdate.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
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
            onClick={() => this.props.hideFavoritesModal()}
          >
            Close
            <button className="modal-closeButton">x</button>
          </div>
          <div className="modal-bottomButtons">
            <div className="modal-cancelButton" onClick={() => this.props.hideFavoritesModal()}>
              Cancel
            </div>
            <div
              className="modal-saveButton"
              onClick={() => (
                this.props.updateFavorites(this.state.modalFavorites),
                this.props.hideFavoritesModal()
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

export default FavoritesModal;
