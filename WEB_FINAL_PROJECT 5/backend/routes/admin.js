const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Thread = require("../models/Thread");

// Middleware for role-based access control
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

// Get all users
router.get("/users", isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// Approve a doctor
router.put("/approve-doctor/:id", isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Doctor approved", user });
  } catch (error) {
    res.status(500).json({ message: "Error approving doctor", error });
  }
});

// Reject a doctor
router.put("/reject-doctor/:id", isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Doctor rejected", user });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting doctor", error });
  }
});

// Delete a user
router.delete("/delete-user/:id", isAdmin, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

// Get all threads
router.get("/threads", isAdmin, async (req, res) => {
  try {
    const threads = await Thread.find().populate("author", "name email");
    res.json(threads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching threads", error });
  }
});

// Delete a thread
router.delete("/delete-thread/:id", isAdmin, async (req, res) => {
  try {
    const thread = await Thread.findByIdAndDelete(req.params.id);
    if (!thread) return res.status(404).json({ message: "Thread not found" });
    res.json({ message: "Thread deleted", thread });
  } catch (error) {
    res.status(500).json({ message: "Error deleting thread", error });
  }
});

module.exports = router;