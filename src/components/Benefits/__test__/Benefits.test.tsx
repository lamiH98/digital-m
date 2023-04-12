import { render , screen } from "@testing-library/react"
import Benefits from "../Benefits"

test('renders 3 items of benefits', () => {
  render(<Benefits />);
  const benefits = screen.getAllByTestId("benefit-single");
  expect(benefits.length).toBe(3);
})