(()=>{

	/* modules */
	let parallaxInit = require('./parallax')(window, document)
	/* templates */
	let sceneTemplate = ('./templates/scene')


	let appContainer = document.getElementById('appContainer')
	let scene = appContainer.querySelector('#sceneContainer')
	let parallax = new Parallax(scene, {
		/*object for config options.
		Notes: 
		https://github.com/wagerfield/parallax
		*/
		invertX: false,
		clipRelativeInput: true,
		calibrateX: true,
		calibrateY: true,
		limitX: 50,
		limitY: 50,
		frictionX: 0.4,
		frictionY: 0.4,
	})


	let layers = document.querySelectorAll('.layer')
	for(let i=0; i<layers.length; i++){
		let newValue = 100 - i * 2
		let newsize = `${newValue}%`
		let newMargin = `${(100 - newValue)/2}%`
		layers[i].style.width = newsize
		layers[i].style.height = newsize
		layers[i].style.marginTop =  newMargin
		layers[i].style.marginLeft =  newMargin
	}

	console.log('done')


})()