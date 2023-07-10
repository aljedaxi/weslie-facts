const weslieFacts = [
	'weslie has 4 paws',
	'weslie is a cat',
	'weslie is orange',
	'weslie has cat swag',
	'weslie is the patriarch of the handsome clan',
	'weslie is epic',
	'mreow',
	'weslie\'s favorite toy (currently) is the chicken burger',
	'weslie likes to meow!',
	'weslie likes to eat fish',
	'weslie loves greenies',
	'weslie is a cool cat',
	'weslie has a white tummy',
	'weslie loves this website',
	'weslie has handsome little white paws',
	'weslie\'s fursona is a cat',
	'weslie is hungry',
	'you should feed weslie',
	'weslie is the smartest cat to ever live',
]

document.querySelector('#facts').onclick = async e => {
	const {} = await Notification.requestPermission()
	let idx = 0
	new Notification('weslie facts inbound', {body: 'swag'})
	const id = setInterval(() => {
		new Notification(`${weslieFacts[idx++ % weslieFacts.length]}. fact.`, {body: 'swag'})
	}, 3.5e3)
}
