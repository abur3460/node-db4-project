const { Router } = require("express");
const router = Router();

const { getRecipesByIngredientId } = require("../data/database/index");

router.route("/:id/recipes").get(async ({ params: { id } }, res) => {
  try {
    const recipes = await getRecipesByIngredientId(id);
    res.json(recipes);
  } catch(error) {
    res.status(500).json(error)
  }
});

module.exports.router = router;