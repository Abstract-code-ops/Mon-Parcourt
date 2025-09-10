// Re-export the root Sanity Studio configuration so you can run `sanity dev` or `sanity deploy` from this `sanity` folder.
// This avoids Rollup entry resolution errors ("Could not resolve entry module .sanity/runtime/app.js") when the CLI
// is executed in this subdirectory where the auto-generated `.sanity` folder does not exist.
export {default} from '../sanity.config.js'
