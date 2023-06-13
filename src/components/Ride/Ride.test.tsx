import renderWithProviders from "@/utils/testUtils/testUtils";
import Ride from "@/components/Ride/Ride";
import {
  DifficultyOption,
  RideStructureData,
  SurfaceTypeOptions,
} from "./types";
import { screen } from "@testing-library/react";

const testRide: RideStructureData = {
  owner: {
    avatar: "htt",
    name: "Arnau Rotger",
    ridesCount: 50,
    valoration: 4.7,
  },
  date: "2023-11-01 8.00 AM ",
  description:
    "¡Bienvenido a la aventura de tu vida! Prepárate para vivir una experiencia única en el desierto de Tabernas, una joya natural del sur de España. Durante tres días, explorarás los rincones más salvajes y emocionantes de esta tierra árida y misteriosa, todo ello a bordo de una bicicleta de gravel. Tu aventura comenzará en Almería, la puerta de entrada al desierto. Desde allí, te adentrarás en la inmensidad del paisaje, atravesando polvorientos caminos, subiendo y bajando colinas y sorteando rocas y cañones. En cada curva, te sorprenderás con las vistas panorámicas del desierto, con sus colores rojizos, naranjas y ocres, y su cielo azul profundo.",
  difficulty: DifficultyOption.Easy,
  surfaceType: SurfaceTypeOptions.Gravel,
  pace: 15,
  image:
    "https://res.cloudinary.com/ducqy82uw/image/upload/c_scale,w_533/v1678630782/samples/people/bicycle.webp",
  title: "3 days Tabernas desert adventure",
  location: "Passeig de Gràcia - Diagonal, Barcelona",
  distance: "360",
  ridersJoined: ["Róman", "Víctor", "Marc"],
  ridersLimit: 10,
};

describe("Given a Ride component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button to join the ride", () => {
      const buttonText = "join the ride";

      renderWithProviders(<Ride ride={testRide} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
