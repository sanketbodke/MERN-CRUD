import { Router } from "express";
import {createUser, getAllUsers, updateUser, deleteUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/new").post(createUser)
router.route("/").get(getAllUsers)
router.route("/:id/update").put(updateUser)
router.route("/:id/delete").delete(deleteUser)

export default router;