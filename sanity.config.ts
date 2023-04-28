import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {myTheme} from './theme'
import StudioNavBar from './components/StudioNavBar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  name: 'The_Calcutta_Bong_Content_Studio',
  title: 'The Calcutta Bong Content Studio',

  projectId: projectId!,
  dataset: dataset!,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar,
    }
  },

  theme: myTheme,
})
