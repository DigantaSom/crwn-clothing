import cartReducer, { INITIAL_STATE as initialState } from './cart.reducer';
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
} from './cart.actions';

describe('cartReducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should toggle hidden with toggleCartHidden action', () => {
    expect(cartReducer(initialState, toggleCartHidden()).hidden).toBe(false);
  });

  it('should increase the quantity of matching item by 1 if addItem action fired with the same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(cartReducer(mockPrevState, addItem(mockItem)).cartItems[0].quantity).toBe(4);
  });

  it('should decrease the quantity of matching item by 1 if removeItem action fired with the same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(cartReducer(mockPrevState, removeItem(mockItem)).cartItems[0].quantity).toBe(
      2,
    );
  });

  it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, clearItemFromCart(mockItem)).cartItems.some(
        item => item.id === 1,
      ),
    ).toBe(false);
  });

  it('should clear cart if clearCart action is fired', () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(cartReducer(mockPrevState, clearCart()).cartItems.length).toBe(0);
  });
});
