import path from "path";
import { promises as fs, writeFile } from "fs";

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  // writeFile(
  //   jsonDirectory + "/data.json",
  //   JSON.stringify(
  //     {
  //       name: "soheil",
  //     },
  //     null,
  //     2
  //   ),
  //   (err) => {
  //     if (err) {
  //       console.log("Failed to write updated data to file");
  //       return;
  //     }
  //     console.log("Updated file successfully");
  //   }
  // );
  //
  res.status(200).json(JSON.parse(allData).soldiers);
}
