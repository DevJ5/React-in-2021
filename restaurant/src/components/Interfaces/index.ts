export interface IModalProps {
  onToggleModal(): void;
  isModalOpen: boolean;
}

export interface ICartModalProps {
  onToggleCartModal(): void;
  isCartModalOpen: boolean;
}

export interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface ICartContext {
  items: ICartItem[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (id: ICartItem['id']) => void;
}
