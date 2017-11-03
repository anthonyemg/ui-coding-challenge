import React from 'react';
import { connect } from 'react-redux';
import { showAddressModal, hideAddressModal } from '../actions';
import Modal from './Modal';
import AddressModal from './AddressModal';

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <div className="component-details">
            <span className="component-title">Address</span>
            <span className="component-text">123 Bowl Lane</span>
            <span className="component-text">NY, NY 10021</span>
          </div>
          <div>
            <button
              className="component-editButton"
              onClick={() => this.props.showAddressModal()}
            >
              Edit Address
            </button>
          </div>
        </div>
        {this.props.displayAddressModal ? (
          <Modal>
            <AddressModal hideAddressModal={this.props.hideAddressModal} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayAddressModal: state.displayAddressModal
});
const mapDispatchToProps = dispatch => ({
  showAddressModal: () => dispatch(showAddressModal()),
  hideAddressModal: () => dispatch(hideAddressModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
