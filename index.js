import page from './field-groups/page'
import menuItems from './field-groups/menu-item'
import { titleBlock } from 'common-tina-fields/field-groups/title-block'
import { metaBlock } from 'common-tina-fields/field-groups/meta-block'

export const commonTinaFields = {
  page,
  menuItems,
  titleBlock,
  metaBlock,
}

export default {
  ...commonTinaFields
}