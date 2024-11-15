import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await MemberServices.createMember(req.body);
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
  const { memberId } = req.params;
  const result = await MemberServices.memberById(memberId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});
const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.updateMember(memberId, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});
const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  await MemberServices.deleteMember(memberId);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member successfully deleted",
  });
});

export const MemberController = {
  createMember,
  allMember,
  memberById,
  updateMember,
  deleteMember,
};
