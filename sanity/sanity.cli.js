// Local CLI config so you can run `sanity <cmd>` inside the `sanity` folder.
import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from '../sanity/env.js'

export default defineCliConfig({
  api: {projectId, dataset}
})
