import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = ({
  onToggleModal,
  isModalOpen,
}: {
  onToggleModal: any;
  isModalOpen: boolean;
}) => {
  const renderCartItems = () => {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];
    return (
      <ul>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <Modal isModalOpen={isModalOpen} onToggleModal={onToggleModal}>
      {renderCartItems()}
      <div className={styles['total']}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={styles['actions']}>
        <button
          className={styles['btn'] + styles['btn--close']}
          onClick={onToggleModal}>
          Close
        </button>
        <button className={styles['btn'] + styles['btn--order']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
