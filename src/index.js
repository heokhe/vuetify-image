import VImage from './components/VImage.vue'

const plugin = {
	install(v){
		if (!v.prototype.$vuetify) {
			throw new Error('install Vuetify plugin to work with v-image')
		}
		v.component('v-image', VImage)
	}
}

export default plugin