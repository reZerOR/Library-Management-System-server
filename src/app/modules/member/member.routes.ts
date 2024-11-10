import { Router } from "express";
import { MemberController } from "./member.controller";

const router = Router()
router.post('/', MemberController.createMember)
router.get('/', MemberController.allMember)
router.get('/:memberId', MemberController.memberById)
router.put('/:memberId', MemberController.updateMember)
router.delete('/:memberId', MemberController.deleteMember)

export const MemberRoutes = router