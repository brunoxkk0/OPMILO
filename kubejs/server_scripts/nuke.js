EntityEvents.spawned('industrialforegoing:infinity_nuke', event => {
    if (global.nuke) {
      event.cancel()
    }
  })
