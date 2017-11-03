import React from 'react';

class FavoritesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalFavorites: [...this.props.favorites],
      previousFavorites: []
    };
    this.handleFavoritesUpdate = this.handleFavoritesUpdate.bind(this);
    this.handleAddFavorite = this.handleAddFavorite.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  componentWillMount() {
    this.setState({
      previousFavorites: [...this.props.favorites]
    });
  }
  handleFavoritesUpdate(e, index) {
    const newState = [...this.state.modalFavorites];
    newState[index] = e.target.value;
    this.setState({
      modalFavorites: newState
    });
    this.props.updateFavorites(newState);
  }
  handleAddFavorite() {
    const newState = [...this.state.modalFavorites];
    newState[newState.length] = '';
    this.setState({
      modalFavorites: newState
    });
    this.props.updateFavorites(newState);
  }
  handleCancel() {
    this.props.updateFavorites(this.state.previousFavorites);
  }
  render() {
    return (
      <div className="modal-content">
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
          onClick={() => (this.handleCancel(), this.props.hideFavoritesModal())}
        >
          Close
          <button className="modal-closeButton">x</button>
        </div>
        <div className="modal-bottomButtons">
          <div
            className="modal-cancelButton"
            onClick={() => (this.handleCancel(), this.props.hideFavoritesModal())}
          >
            Cancel
          </div>
          <div
            className="modal-saveButton"
            onClick={() => (
              this.props.updateFavorites(this.state.modalFavorites), this.props.hideFavoritesModal()
            )}
          >
            Save
          </div>
        </div>
      </div>
    );
  }
}

export default FavoritesModal;
