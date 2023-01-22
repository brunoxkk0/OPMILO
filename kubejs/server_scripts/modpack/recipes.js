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

const MekanismInfusionRecipe = {
  create: (input, output, chemicalInput, amount) => {
    RECIPES.push({
      target: "custom",
      data: {
        type: "mekanism:metallurgic_infusing",
        chemicalInput: {
          amount: amount,
          tag: chemicalInput
        },
        itemInput: {
          ingredient: Ingredient.of(input).toJson()
        },
        output: Item.of(output).toJson(),
      },
    });
  },
};

const MekanismInfusionConversion = {
  create: (input, chemicalInput, amount) => {
    RECIPES.push({
      target: "custom",
      data: {
        type: "mekanism:infusion_conversion",
        output: {
          amount: amount,
          infuse_type: chemicalInput
        },
        input: {
          ingredient: Ingredient.of(input).toJson()
        },
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

MinecraftShapedRecipe.create("4x compactmachines:wall", ["PDP", "DSD", "PDP"], {
  P: "#forge:plates/lead",
  D: "minecraft:polished_deepslate",
  S: "immersiveengineering:steel_scaffolding_standard"
});

MinecraftShapedRecipe.create("industrialforegoing:machine_frame_pity", ["IRI", "PCP", "IRI"], {
  I: "#forge:plates/iron",
  R: "minecraft:redstone",
  C: "minecraft:crafting_table",
  P: "#forge:plastic"
});

MinecraftShapedRecipe.create("mekanism:steel_casing", ["SHS", "HGH", "SHS"], {
  S: "#forge:plates/steel",
  H: "thermal:obsidian_glass",
  G: "#forge:gears/osmium"
});

MinecraftShapedRecipe.create("mekanism:metallurgic_infuser", ["POP", "BRB", "ISI"], {
  P: "industrialforegoing:plastic",
  O: "#forge:gears/osmium",
  B: "minecraft:blast_furnace",
  R: "immersiveengineering:wirecoil_redstone",
  I: "#forge:plates/iron",
  S: "mekanism:steel_casing"
});

MinecraftShapedRecipe.create("mekanism:energy_tablet", ["RPR", "IGI", "RPR"], {
  R: "minecraft:redstone",
  I: "mekanism:alloy_infused",
  P: "#forge:plates/gold",
  G: "#forge:gears/gold",
});

MinecraftShapedRecipe.create("mekanismgenerators:gas_burning_generator", ["EAE", "SCS", "GAG"], {
  E: "mekanism:energy_tablet",
  A: "mekanism:alloy_atomic",
  S: "mekanism:steel_casing",
  C: "mekanism:electrolytic_core",
  G: "#forge:gears/osmium"
});

MinecraftShapedRecipe.create("mekanismgenerators:gas_burning_generator", ["EAE", "SCS", "GAG"], {
  E: "mekanism:energy_tablet",
  A: "mekanism:alloy_atomic",
  S: "mekanism:steel_casing",
  C: "mekanism:electrolytic_core",
  G: "#forge:gears/osmium"
});

MinecraftShapedRecipe.create("rftoolsbase:machine_frame", ["IPI", "GSG", "IPI"], {
  I: "#forge:plates/iron",
  P: "industrialforegoing:plastic",
  G: "#forge:gears/gold",
  S: "mekanism:steel_casing"
});

MinecraftShapedRecipe.create("rftoolsbuilder:builder", ["RER", "NSN", "RFR"], {
  R: "immersiveengineering:blastbrick_reinforced",
  E: "minecraft:ender_eye",
  N: "#mekanism:enriched/redstone",
  S: "minecraft:nether_star",
  F: "rftoolsbase:machine_frame"
});

MinecraftShapedRecipe.create("pylons:harvester_pylon", ["QQQ", "PHP", "BMB"], {
  Q: "minecraft:quartz_slab",
  P: "#forge:gears/platinum",
  H: "minecraft:hay_block",
  B: "minecraft:polished_blackstone",
  M: "#forge:ingots/manasteel"
});

MinecraftShapedRecipe.create("8x mekanism:basic_universal_cable", [" P ", "SRS", " P "], {
  P: "industrialforegoing:plastic",
  S: "#forge:plates/steel",
  R: "#mekanism:enriched/redstone"
});



/*





    Mekanism Infusion
*/

ServerEvents.tags("mekanism:infuse_type", e => {
  e.add("mekanism:quartz", "kubejs:quartz")
})

MekanismInfusionConversion.create("#forge:gems/quartz", "kubejs:quartz", 40)

MekanismInfusionRecipe.create("#forge:gears/osmium", "mekanism:basic_control_circuit", "mekanism:redstone", 40)
MekanismInfusionRecipe.create("#forge:plates/iron", "mekanism:alloy_infused", "mekanism:redstone", 20)
MekanismInfusionRecipe.create("#forge:ingots/iron", "refinedstorage:quartz_enriched_iron", "mekanism:quartz", 10)

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
