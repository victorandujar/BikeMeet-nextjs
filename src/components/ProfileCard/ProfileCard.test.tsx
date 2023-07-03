import renderWithProviders from "@/utils/testUtils/testUtils";
import ProfileCard from "./ProfileCard";
import { mockUserProfileData } from "@/mocks/userMocks/userMocks";
import { screen } from "@testing-library/react";

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
