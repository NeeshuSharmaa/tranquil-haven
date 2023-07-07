import { Response } from "miragejs";
// import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ username: decodedToken.username });
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

// export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

export const formatDate = (d) => {
  const date = d ? new Date(d) : new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric", // Full year (e.g., "2023")
    month: "long", // Full month name (e.g., "June")
    day: "numeric", // Day of the month (e.g., "30")
    hour: "numeric", // Hour in 12-hour format (e.g., "4")
    minute: "numeric", // Minute (e.g., "30")
    hour12: true, // Whether to use 12-hour format (e.g., "AM/PM")
  });

  return { formatted: formatter.format(date), unformatted: date };
};
