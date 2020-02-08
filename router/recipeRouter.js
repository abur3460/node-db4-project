const { Router } = require("express");
const router = Router();

const {
  getRecipes,
  getShoppingList,
  getInstructions
} = require("../data/database");


// GET /api/recipe
router.route("/").get(async (req, res) => {
  const recipes = await getRecipes();
  res.json(recipes);
});


// GET /api/recipe /id
router.route("/:id/shoppingList").get(async ({ params: { id } }, res) => {
  const ingredients = await getShoppingList(id);
  res.json(ingredients);
});

router.route("/:id/instructions").get(async ({ params: { id } }, res) => {
  const instructions = await getInstructions(id);
  res.json(instructions)
});

module.exports.router = router;