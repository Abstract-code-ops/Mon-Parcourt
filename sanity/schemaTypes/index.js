import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import eventType from './eventType'
import {localeStringType, localeBlockContentType} from './localeTypes'
import eventRegistration from './eventRegistration'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, eventType, localeStringType, localeBlockContentType, eventRegistration],
}
