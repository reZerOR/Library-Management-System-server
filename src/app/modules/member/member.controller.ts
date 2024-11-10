import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (_req, res) => {
  const result = await MemberServices.createMember();
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully",
    data: result,
  });
});
const allMember = catchAsync(async (_req, res) => {
  const result = await MemberServices.allMember();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});
const memberById = catchAsync(async (req, res) => {
  const result = await MemberServices.memberById();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});
const updateMember = catchAsync(async (req, res) => {
  const result = await MemberServices.updateMember();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});
const deleteMember = catchAsync(async (req, res) => {
  const result = await MemberServices.deleteMember();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberController = {
  createMember,
  allMember,
  memberById,
  updateMember,
  deleteMember,
};
