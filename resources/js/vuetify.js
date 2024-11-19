// src/plugins/vuetify.js
import 'vuetify/styles' // Import Vuetify CSS styles
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components' // Import Vuetify components
import * as directives from 'vuetify/directives' // Import Vuetify directives

const vuetify = createVuetify({
  components,
  directives,
})

export default vuetify