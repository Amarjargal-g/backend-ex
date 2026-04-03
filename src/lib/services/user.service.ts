import { Role } from "@prisma/client";
import prisma from "../lib/prisma";

export const createUser = (name: string) =>
  prisma.user.create({ data: { name, role: Role.USER } });

export const getAdmins = () =>
  prisma.user.findMany({ where: { role: Role.ADMIN } });

export const updateRole = (id: number, role: Role) =>
  prisma.user.update({ where: { id }, data: { role } });
