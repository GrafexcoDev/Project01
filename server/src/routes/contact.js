import { Router } from "express";
import Message from "../models/Message.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name = "", email = "", message = "" } = req.body || {};
    if (!name && !email && !message) return res.status(400).json({ ok:false, error:"Empty payload" });

    await Message.create({ name, email, message, createdAt: new Date() });
    return res.json({ ok: true });
  } catch (e) {
    console.error("contact error:", e);
    return res.status(500).json({ ok:false, error:"server_error" });
  }
});

export default router;
