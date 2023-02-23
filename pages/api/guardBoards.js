import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  console.log(JSON.parse(allData));
  res.status(200).json(JSON.parse(allData).guardBoards);
}
