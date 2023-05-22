import GoogleWelcomePage from "@/components/GoogleWelcomePage/GoogleWelcomePage";
import theme from "@/styles/Theme";
import { render, screen } from "@testing-library/react";
import { Session } from "next-auth";
import { ThemeProvider } from "styled-components";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

describe("Given a GoogleWelcomePageTest", () => {
  describe("When it is rendered", () => {
    test("Then it should show heading with the text 'Welcome Victor A.'", () => {
      const session: Session = {
        user: {
          email: "victor@andujar.org",
          image: "/image",
          name: "Victor A.",
        },
        expires: "",
      };

      const headingText = `Welcome ${session.user?.name}`;

      render(
        <ThemeProvider theme={theme}>
          <GoogleWelcomePage session={session} />
        </ThemeProvider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
