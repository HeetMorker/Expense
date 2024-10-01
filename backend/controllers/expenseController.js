const Expense = require('../models/expenseModel');


const addExpense = async (req, res) => {
  const { amount, description, date, category, paymentMethod } = req.body;

  if (!amount || !description || !date || !category || !paymentMethod) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const expense = new Expense({
    user: req.user._id,
    amount,
    description,
    date,
    category,
    paymentMethod,
  });

  const createdExpense = await expense.save();
  res.status(201).json(createdExpense);
};

// @desc    Get all expenses for the logged-in user
// @route   GET /api/expenses
// @access  Private
const getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id });
  res.json(expenses);
};

// @desc    Update an expense
// @route   PUT /api/expenses/:id
// @access  Private
const updateExpense = async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if (!expense) {
    return res.status(404).json({ message: 'Expense not found' });
  }

  if (expense.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedExpense);
};


const deleteExpense = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
  
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
  
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }
  
    // Using findByIdAndDelete
    await Expense.findByIdAndDelete(req.params.id);
  
    res.json({ message: 'Expense removed' });
  };
  
module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};
