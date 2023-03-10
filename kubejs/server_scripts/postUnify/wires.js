//priority:950
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Wires')
  }
  let wireTags = global.auTags.filter(function (val) {
    return /forge:wires/.test(val)
  })
  let wireCount = {
    create: 0,
    ie: 0,
    thermal: 0
  }
  wireTags.forEach(wireTagString => {
    let material = wireTagString.replace('forge:wires/', '')
    let wire = AlmostUnified.getPreferredItemForTag(wireTagString)
    if (wire.isEmpty()) {
      console.log(`${material} does not have a wire tag entry`)
      return
    }
    if (global.loaded.CreateAdd_Loaded) {
      let plate = AlmostUnified.getPreferredItemForTag(`forge:plates/${material}`)
      if (!plate.isEmpty()) {
        // Check if create additions rolling recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'createaddition:rolling' }, recipe => {
          let recipeJson = recipe.json
          if (wire.equalsIgnoringCount(Item.of(recipeJson.get('result')))) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'createaddition:rolling',
            input: Ingredient.of(`#forge:plates/${material}`).toJson(),
            result: wire.withCount(2).toJson()
          }).id(`kubejs:createaddition/rolling/${material}_plate`)
          wireCount.create++
        }
      }
    }
   if (global.loaded.IE_Loaded) {
      let ingot = AlmostUnified.getPreferredItemForTag(`forge:ingots/${material}`)
      if (!ingot.isEmpty()) {
        // Check if ie metal press recipe exists and add it if not
        let count = 0
        event.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
          let recipeJson = recipe.json
          let result = recipeJson.get('result')
          if (result.has('base_ingredient')) {
            if (global.ingredientCheck(wire, result.get('base_ingredient'))) {
              count++
            }
          } else if (global.ingredientCheck(wire, result)) {
            count++
          }
        })
        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_wire',
            input: Ingredient.of(`#forge:ingots/${material}`).toJson(),
            result: {
              count: 2,
              base_ingredient: wire.toJson()
            },
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/wire_${material}`)
          wireCount.ie++
        }
      }
    }

  })
  if (global.devLogging) {
    console.log(`Added Wire Recipes - CreateAdditions: ${wireCount.create}, IE: ${wireCount.ie}`)
    // Added Wire Recipes - CreateAdditions: 2, FTBIC: 4, IE: 1
  }
})
