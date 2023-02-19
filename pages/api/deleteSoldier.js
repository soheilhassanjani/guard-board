import path from "path";
import { promises as fs, writeFile } from "fs";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const finalData = JSON.parse(allData).soldiers.filter(
      (item) => item.id !== req?.body
    );
    if (finalData)
      writeFile(
        jsonDirectory + "/data.json",
        JSON.stringify({ soldiers: finalData }, null, 2),
        (err) => {
          if (err) {
            res.status(400).end("its NOT okay!");
            return;
          }
          res.status(200).json({
            message: "با موفقیت حذف شد",
          });
          res.end();
        }
      );
    else {
      res.status(400).json({
        message: "این شماره ملی وجود ندارد",
      });
      res.end();
    }
  } else {
    res.setHeader("Allow", "DELETE");
    res.status(405).end("Method Not Allowed");
  }
}
