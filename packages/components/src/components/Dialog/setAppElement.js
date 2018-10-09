// @flow
import Modal from 'react-modal';

export default function setAppElement(element: HTMLElement) {
  if (element) {
    Modal.setAppElement(element);
  }
}
