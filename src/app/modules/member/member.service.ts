import { Member } from "@prisma/client";
import prisma from "../../utils/prismaClient";
interface TMemberBody
  extends Pick<Member, "email" | "membershipDate" | "phone" | "name"> {}

const createMember = async (payload: TMemberBody) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};
const allMember = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const memberById = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};
const updateMember = () => {
  return "";
};
const deleteMember = () => {
  return "";
};

export const MemberServices = {
  createMember,
  allMember,
  memberById,
  updateMember,
  deleteMember,
};
