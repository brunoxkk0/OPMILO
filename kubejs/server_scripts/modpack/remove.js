ServerEvents.recipes((event) => {
  //Vanila
  event.remove({ output: "minecraft:crafting_table" });
  event.remove({ output: "minecraft:furnace" });
  event.remove({ output: "minecraft:nether_brick" });

  event.remove({ output: "minecraft:wooden_axe" });
  event.remove({ output: "minecraft:wooden_shovel" });
  event.remove({ output: "minecraft:wooden_hoe" });
  event.remove({ output: "minecraft:wooden_pickaxe" });

  event.remove({ output: "minecraft:stone_axe" });
  event.remove({ output: "minecraft:stone_shovel" });
  event.remove({ output: "minecraft:stone_hoe" });
  event.remove({ output: "minecraft:stone_pickaxe" });

  //Quark
  event.remove({ output: "quark:deepslate_furnace" });
  event.remove({ output: "quark:blackstone_furnace" });

  //Immersive
  event.remove({ output: "immersiveengineering:cokebrick" });
  event.remove({ output: "immersiveengineering:alloybrick" });
  event.remove({ output: "immersiveengineering:blastbrick" });
});
