import { rest } from "msw";
const baseURL = "https://petspace-api-195e436e05ae.herokuapp.com/";
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 5,
        username: "luna",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dbu8nqoae/image/upload/v1/media/images/pexels-yuliya-shabliy-126574-388_wltdjl",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];