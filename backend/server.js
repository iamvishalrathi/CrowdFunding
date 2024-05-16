import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});
app.post("http://localhost:8081/test", (res, req) => {
  const sql =
    "INSERT INTO campaigns(`name`,`title`,`description`,`target`,`deadline` ,`image`,`contact`,`proof`,`proofCompaign`) Values(?)";
  const values = [
    req.body.name,
    req.body.title,
    req.body.description,
    req.body.target,
    req.body.deadline,
    req.body.image,
    req.body.contact,
    req.body.proof,
    req.body.proofCampaign,
  ];
  db.query(aql, [values], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.listen(8081, () => {
  console.log("lis.....");
});
