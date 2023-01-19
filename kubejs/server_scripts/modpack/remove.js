ServerEvents.recipes(event => {
    //Vanila
    event.remove({output: 'minecraft:crafting_table'})
    event.remove({output: 'minecraft:furnace'})

    //Quark
    event.remove({output: 'quark:deepslate_furnace'})
    event.remove({output: 'quark:blackstone_furnace'})
})