import renderWithProviders from "@/utils/testUtils/testUtils";
import ProfileCard from "./ProfileCard";
import { mockUserProfileData } from "@/mocks/userMocks/userMocks";
import { screen } from "@testing-library/react";

const mockUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockUseSession,
}));

describe("Given a ProfileCard component", () => {
  describe("When it is rendered", () => {
    test("Thenit should show the user name 'Víctor Andújar'", () => {
      const textName = "Víctor Andújar";

      renderWithProviders(
        <ProfileCard user={{ user: mockUserProfileData.user }} />
      );

      const expectedTitle = screen.getByRole("heading", { name: textName });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
