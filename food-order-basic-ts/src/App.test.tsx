import {
  findByText,
  getByRole,
  getByText,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// ByLabelText, find an element by a given text in label or aria-label
// ByPlaceholderText, find by input placeholder value;
// ByAltText, find by img alt attribute;
// ByDisplayValue, find by form element current value;
// ByRole, find by aria role;
// ByTestId, find by data-testid attribute.

// getAllBy*, tries to find an array of element, if failed throws an error;
// queryBy*, tries to find an element, returns null if failed;
// queryAllBy*, tries to find an array of element, returns empty array if failed to find any;
// findBy*, tries to asynchronously find a single element, returns a Promise;
// findAllBy*, tries to asynchronously find an array of elements, returns a Promise.

// The queryBy and queryAllBy are usually used to make sure that elements are not in the document.
// The findBy and findAllBy are used to search for elements that are not available at first render.

// waitFor (Promise) retry the function within until it stops throwing or times out
// waitForElementToBeRemoved (Promise) retry the function until it no longer returns a DOM node

describe('The App renders correctly:', () => {
  it('has the primary heading "ReactMeals"', () => {
    render(<App />);
    expect(screen.getByText(/ReactMeals/)).toBeInTheDocument();
  });

  // Click sushi add button, test if cart amount is updated to 1
  it('Click sushi add button, test if cart amount is updated to 1', () => {
    render(<App />);
    const btnEl = screen.getAllByRole('button', { name: '+ Add' })[0];
    const cartItemsBadge = screen.getByTestId('cart-items-badge');
    expect(cartItemsBadge).toHaveTextContent('0');
    userEvent.click(btnEl);
    expect(cartItemsBadge).toHaveTextContent('1');
  });
});
