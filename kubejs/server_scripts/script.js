// priority: 0

ServerEvents.tags('block', event => {
	event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
	event.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
})

ServerEvents.tags('entity_type', event => {
	event.add('kubejs:mob_blacklist', ['artifacts:mimic'])
	event.add('mob_grinding_utils:noswab', '#kubejs:mob_blacklist')
	event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
	event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
	event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  })

  ServerEvents.tags('fluid', event =>{
	event.add('forge:crude_oil', 'ad_astra:oil')
	event.remove('minecraft:water', 'ad_astra:oil')
  })