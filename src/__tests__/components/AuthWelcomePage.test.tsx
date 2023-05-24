import GoogleWelcomePage from "@/components/AuthWelcomePage/AuthWelcomePage";
import { mockSession } from "@/mocks/userMocks/userMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUseRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

const mockedSignin = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  signIn: () => mockedSignin,
}));

const mockedSignout = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  signOut: () => mockedSignout,
}));

describe("Given a GoogleWelcomePageTest", () => {
  describe("When it is rendered", () => {
    test("Then it should show heading with the text 'Welcome Victor A.'", () => {
      const headingText = `Welcome ${mockSession.user?.name}`;

      renderWithProviders(<GoogleWelcomePage session={mockSession} />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("Then it should show a Button with the text 'Continue'", async () => {
      const buttonText = "Continue";

      renderWithProviders(<GoogleWelcomePage session={mockSession} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      await act(async () => await userEvent.click(expectedButton));

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a Button with the text 'Log out", async () => {
      const buttonText = "Log out";

      renderWithProviders(<GoogleWelcomePage session={mockSession} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      await act(async () => await userEvent.click(expectedButton));

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
