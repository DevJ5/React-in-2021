import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App renders correctly:', () => {
  it('has the primary heading "ReactMeals"', () => {
    render(<App />);
    expect(screen.getByText(/ReactMeals/)).toBeInTheDocument();
  });
});
