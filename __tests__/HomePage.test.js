import { render, screen } from '@testing-library/react';
import HomePage from "../app/page"


test('แสดงข้อความ Computer Engineering', () => {
  render(<HomePage />);
  const elements = screen.getAllByText(/Computer Engineering/); 
  expect(elements.length).toBeGreaterThan(0); 
});
