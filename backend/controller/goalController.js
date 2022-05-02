const asyncHandler = require("express-async-handler");

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Goals controller-routes",
  });
});
// @desc   Add goal
// @route  POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body);

  if (!req.body.text) {
    // res.status(400).json({ message: "Pleasr add text" });
    res.status(400);
    throw new Error("Pleae add a text");
  }

  res.status(200).json({
    message: "Create Goal",
  });
});

// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update Goal ${req.params.id}`,
  });
});

// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete Goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
