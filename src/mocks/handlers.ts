import userEndpoints from "@/utils/userEndpoints/userEndpoints";
import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}${userEndpoints.users}${userEndpoints.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "vik27634fvj" }))
  ),
];
