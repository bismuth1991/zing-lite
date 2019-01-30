import React from 'react';
import { func, shape, string } from 'prop-types';
import TextAlert from './text_alert';

class Modal extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { modal, closeModal } = this.props;

    if (this.closeModalTimeout) {
      clearTimeout(this.closeModalTimeout);
    }
    if (modal.type !== 'hidden') {
      this.closeModalTimeout = setTimeout(() => closeModal(), 2000);
    }
  }

  componentWillUnmount() {
    if (this.closeModalTimeout) clearTimeout(this.closeModalTimeout);
  }

  handleClick() {
    const { closeModal } = this.props;
    if (this.closeModalTimeout) clearTimeout(this.closeModalTimeout);
    closeModal();
  }

  renderComponent() {
    const { modal } = this.props;

    let component;
    switch (modal.type) {
      case 'TEXT_ALERT': {
        component = <TextAlert text={modal.content} />;
        return component;
      }
      default:
        return null;
    }
  }

  render() {
    const { modal } = this.props;

    return (
      <div
        className="Main modal__background"
        role="presentation"
      >
        <div
          className={`modal__child modal__child--${modal.type}`}
          role="presentation"
          onClick={this.handleClick}
        >
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modal: shape({
    type: string,
    content: string,
  }).isRequired,
  closeModal: func.isRequired,
};

export default Modal;
