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
const allMember = () => {
  return "";
};
const memberById = () => {
  return "";
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
