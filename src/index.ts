import {JSONDB} from './helpers/core'
import {connectJson} from './helpers/deaddb'

export default [JSONDB,connectJson];
module.exports = [connectJson, JSONDB]