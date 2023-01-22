// priority: 1000

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
  event.remove({ output: "immersiveengineering:hammer" });
  event.remove({ output: "immersiveengineering:wirecutter" });

  //Axe part
  event.remove({ output: "silentgear:axe_template" });

  // Remove all plates
  //event.remove({ input: "ad_astra:hammer" });
  event.remove({ input: "#alltheores:ore_hammers", output: "#forge:plates" });

  // Remove easy steel recipe
  event.remove({
    input: "minecraft:iron_ingot",
    output: "#forge:ingots/steel",
  });

  event.remove({
    input: "#alltheores:ore_hammers",
    output: "#forge:dusts/steel",
  });

  // Remove all gears
  event.remove({ output: "#forge:gears", type: "minecraft:crafting_shaped" });
  event.remove({ output: "#forge:gears", type: "minecraft:crafting_shapeless" });

  //Create Deco
  event.remove({ output: "createdeco:dean_brick" });

  //Compact machines
  event.remove({ output: "compactmachines:wall"});

  //Industrial Foregoing
  event.remove({ output: "industrialforegoing:machine_frame_pity"});

  //Mekanism
  event.remove({ output: "mekanism:steel_casing"});
  event.remove({ output: "mekanism:basic_control_circuit"});
  event.remove({ output: "mekanism:alloy_infused"});
  event.remove({ output: "mekanism:metallurgic_infuser"});
  event.remove({ output: "mekanism:energy_tablet"});
  event.remove({ output: "mekanismgenerators:gas_burning_generator"});
  event.remove({ output: "mekanism:basic_universal_cable"});

  //Refined Storage
  event.remove({ output: "refinedstorage:quartz_enriched_iron"});

  //RFTools
  event.remove({ output: 'rftoolsbuilder:builder'});
  event.remove({ output: "rftoolsbase:machine_frame"});

  //Pylons
  event.remove({ output: "pylons:harvester_pylon"});

});
