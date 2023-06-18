import {
  RideStructureData,
  DifficultyOption,
  SurfaceTypeOptions,
} from "@/components/Ride/types";

export const ridesMocks: RideStructureData[] = [
  {
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
    id: "123",
  },
  {
    owner: {
      avatar: "https",
      name: "Jèssica Olivo",
      ridesCount: 24,
      valoration: 4.7,
    },
    date: "2023-12-01 9.00 AM ",
    description:
      "¡Bienvenido a la aventura de tu vida! Prepárate para vivir una experiencia única en el desierto de Tabernas, una joya natural del sur de España. Durante tres días, explorarás los rincones más salvajes y emocionantes de esta tierra árida y misteriosa, todo ello a bordo de una bicicleta de gravel. Tu aventura comenzará en Almería, la puerta de entrada al desierto. Desde allí, te adentrarás en la inmensidad del paisaje, atravesando polvorientos caminos, subiendo y bajando colinas y sorteando rocas y cañones. En cada curva, te sorprenderás con las vistas panorámicas del desierto, con sus colores rojizos, naranjas y ocres, y su cielo azul profundo.",
    difficulty: DifficultyOption.Intermediate,
    surfaceType: SurfaceTypeOptions.MTB,
    pace: 17,
    image:
      "https://res.cloudinary.com/ducqy82uw/image/upload/c_scale,w_533/v1678630782/samples/people/bicycle.webp",
    title: "Volta a Collserola",
    location: "Passeig de Gràcia - Diagonal, Barcelona",
    distance: "76",
    ridersJoined: ["Róman", "Víctor", "Marc"],
    ridersLimit: 10,
    id: "456",
  },
];
