const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Getting goals' });
});

// @desc Set goal
// @route   POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	res.status(200).json({ message: 'Creating goal' });
});

// @desc Update goal
// @route   UPDATE /api/goal/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Updating goal ${req.params.id}` });
});

// @desc delete goal
// @route   DELETE /api/goal/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Deleting goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
