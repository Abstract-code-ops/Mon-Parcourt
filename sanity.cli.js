/**
 * Sanity CLI configuration (root).
 * Uses values from ./sanity/env.js which provides safe fallbacks.
 * Ensures projectId & dataset are always defined for commands like `sanity deploy`.
 */
import {defineCliConfig} from 'sanity/cli'
import {projectId, dataset} from './sanity/env.js'

export default defineCliConfig({
	api: {projectId, dataset}
})
