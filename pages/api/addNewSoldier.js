import path from "path";
import { promises as fs, writeFile } from "fs";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const checkId = () => {
      const uniqueId = uuidv4();
      const isExist = JSON.parse(allData).soldiers.find(
        (item) => item.id === uniqueId
      );
      if (isExist) checkId();
      else return uniqueId;
    };

    const finalData = {
      soldiers: [
        ...JSON.parse(allData).soldiers,
        { ...req?.body, id: checkId() },
      ],
    };

    const isSameNationId = JSON.parse(allData).soldiers.find(
      (item) => item.nationalId === req?.body?.nationalId
    );

    if (!isSameNationId)
      writeFile(
        jsonDirectory + "/data.json",
        JSON.stringify(finalData, null, 2),
        (err) => {
          if (err) {
            res.status(400).end("its NOT okay!");
            return;
          }
          res.status(200).json({
            message: "با موفقیت اضافه شد",
          });
          res.end();
        }
      );
    else {
      res.status(400).json({
        message: "شماره ملی تکراری است",
      });
      res.end();
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
