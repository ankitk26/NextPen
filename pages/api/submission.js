import { getLanguage } from "../../utils/getLanguage";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const [language, versionIndex] = getLanguage(req.body.language);

        const inputParams = {
          ...req.body,
          language,
          versionIndex,
          clientId: process.env.JDOODLE_CLIENT_ID,
          clientSecret: process.env.JDOODLE_CLIENT_SECRET,
        };

        const resp = await fetch("https://api.jdoodle.com/v1/execute", {
          method: "post",
          body: JSON.stringify(inputParams),
          headers: { "Content-type": "application/json" },
        });

        const data = await resp.json();

        res.status(200).json(data);
      } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      }
      break;

    default:
      res.status(405).json({ error: `${req.method} is not allowed` });
      break;
  }
};
