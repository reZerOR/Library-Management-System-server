import { Router } from "express";
import { BookRoutes } from "../modules/book/book.routes";
import { MemberRoutes } from "../modules/member/member.routes";
import { borrowRouter, returnRouter } from "../modules/borrow-book/borrow.routes";

const router = Router();

const moduleRoutes: { path: string; route: Router }[] = [
  {
    path: "books",
    route: BookRoutes,
  },
  {
    path: "members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: borrowRouter,
  },
  {
    path: "/return",
    route: returnRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
