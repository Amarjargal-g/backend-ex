import { getAdmins, updateRole } from "../../services/user.service";
import { Role } from "@prisma/client";

app.get("/admins", async (req: Request, res: Response) => {
  const admins = await getAdmins();
  res.json(admins);
});
