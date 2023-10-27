import NextCors from "nextjs-cors";

let artem2 = "ok";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.query.artem) {
    artem2 = null;
    console.log("запрос пришел");
    res.status(200).json({ status: "ok" });
  }
  if (artem2 === null && !req.query.artem) {
    artem2 = "ok";
    console.log(artem2);
    res.status(200).json({ name: "start" });
  } else {
    console.log(artem2);
    res.status(200).json({ name: "John Doe" });
  }
}
