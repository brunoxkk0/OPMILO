const RECIPES = [];

const ItemApplicableRecipe = {
  create: (inputs, output) => {
    RECIPES.push({
      target: "custom",
      data: {
        type: "create:item_application",
        ingredients: inputs.map((input) => Ingredient.of(input).toJson()),
        results: [Item.of(output).toJson()],
      },
    });
  },
};

const CokeOvenRecipe = {
  create: (cresote, input, output, time) => {
    RECIPES.push({
      target: "custom",
      data: {
        type: "immersiveengineering:coke_oven",
        cresote: cresote,
        input: Ingredient.of(input).toJson(),
        result: Item.of(output).toJson(),
        time: time,
      },
    });
  },
};

const CampfireRecipe = {
  create: (input, output, experience, time) => {
    RECIPES.push({
      target: "custom",
      data: {
        type: "minecraft:campfire_cooking",
        experience: experience,
        ingredient: Ingredient.of(input).toJson(),
        result: Item.of(output).toJson(),
        cookingtime: time,
      },
    });
  },
};

const MinecraftBlastRecipe = {
  create: (input, output) => {
    RECIPES.push({
      target: "blasting",
      data: [output, input],
    });
  },
};

const MinecraftSmokingRecipe = {
  create: (input, output) => {
    RECIPES.push({
      target: "smoking",
      data: [output, input],
    });
  },
};

const MinecraftShapedRecipe = {
  create: (output, pattern, input) => {
    RECIPES.push({
      target: "shaped",
      data: [output, pattern, input],
    });
  },
};

/*






    Item Applicable
*/
ItemApplicableRecipe.create(
  ["#forge:stripped_logs", "silentgear:template_board"],
  "minecraft:crafting_table"
);

ItemApplicableRecipe.create(
  ["minecraft:bricks", "minecraft:clay_ball"],
  "immersiveengineering:cokebrick"
);

ItemApplicableRecipe.create(
  ["#forge:sandstone", "createdeco:dean_brick"],
  "immersiveengineering:alloybrick"
);

/*







    Minecraft blastfurnace recipe
*/
MinecraftBlastRecipe.create("#forge:netherrack", "minecraft:nether_brick");

/*







    Minecraft smoking recipe
*/
MinecraftSmokingRecipe.create("myrtrees:latex", "industrialforegoing:plastic");

/*







    Minecraft shaped recipe
*/
MinecraftShapedRecipe.create("minecraft:furnace", ["CCC", "C C", "SSS"], {
  C: "#forge:cobblestone",
  S: "minecraft:smooth_stone",
});

MinecraftShapedRecipe.create(
  "4x createdeco:dean_brick",
  ["BBB", "BDB", "BBB"],
  {
    B: "minecraft:brick",
    D: "minecraft:blaze_powder",
  }
);

MinecraftShapedRecipe.create(
  "3x immersiveengineering:blastbrick",
  ["BWB", "WMW", "BWB"],
  {
    B: "minecraft:nether_brick",
    W: "createdeco:worn_brick",
    M: "minecraft:magma_cream",
  }
);

MinecraftShapedRecipe.create(
  "immersiveengineering:hammer",
  [" IF", " SI", "S  "],
  {
    I: "minecraft:iron_ingot",
    F: "immersiveengineering:hemp_fiber",
    S: "#forge:rods/wooden",
  }
);

MinecraftShapedRecipe.create(
  "immersiveengineering:wirecutter",
  ["TP ", " T ", "   "],
  {
    T: "immersiveengineering:stick_treated",
    P: "#forge:plates/iron",
  }
);

MinecraftShapedRecipe.create("silentgear:axe_template", ["TT ", "TS ", "   "], {
  T: "silentgear:template_board",
  S: "#forge:rods/wooden",
});

/*








    Campfire cooking
*/
CampfireRecipe.create("minecraft:cobblestone", "minecraft:stone", 0.1, 300);
CampfireRecipe.create("minecraft:stone", "minecraft:smooth_stone", 0.1, 300);

/*






    Core function
*/
ServerEvents.recipes((event) => {
  RECIPES.forEach((recipe) => {
    if (recipe.target === "custom") {
      event[recipe.target](recipe.data);
    } else if (recipe.target === "blasting" || recipe.target === "smoking") {
      event[recipe.target](recipe.data[0], recipe.data[1]);
    } else if (recipe.target === "shaped") {
      event[recipe.target](recipe.data[0], recipe.data[1], recipe.data[2]);
    }
  });
});
