// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

const MekanismAPI = Java.loadClass('mekanism.api.MekanismAPI')

const InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('item', event => {

    const InfuseTypeRegistry = MekanismAPI.infuseTypeRegistry()
    let QuartzInfuseTypeBuilder = InfuseTypeBuilder.builder().color(15657438)
    let QuartzInfuseType = InfuseType(QuartzInfuseTypeBuilder)

    InfuseTypeRegistry['register(java.lang.String,java.lang.Object)']("quartz", QuartzInfuseType)
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})