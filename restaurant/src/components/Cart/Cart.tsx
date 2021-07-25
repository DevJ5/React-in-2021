import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { ICartModalProps } from '../Interfaces';

const Cart: React.FC<ICartModalProps> = ({
  onToggleCartModal,
  isCartModalOpen,
}) => {
  const renderCartItems = (): JSX.Element => {
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
    <Modal isModalOpen={isCartModalOpen} onToggleModal={onToggleCartModal}>
      <div className={styles['cart']}>
        {renderCartItems()}
        <div>
          <div className={styles['total']}>
            <span>Total amount</span>
            <span>35.62</span>
          </div>
          <div className={styles['actions']}>
            <button
              className={`${styles['btn']} ${styles['btn--close']}`}
              onClick={onToggleCartModal}>
              Close
            </button>
            <button className={`${styles['btn']} ${styles['btn--order']}`}>
              Order
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
