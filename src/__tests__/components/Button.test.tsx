import Button from "@/components/Button/Button";
import { render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Search'", () => {
      const buttonText = "Search";

      render(<Button isDisabled={false} text={buttonText} />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
