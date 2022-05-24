export const menuLink = {
  label: "Menu Item",
  name: "menuItem",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
      required: true,
      description: "Provide menu text."
    },
    {
      name: "href",
      label: "Link",
      type: "string",
      required: true,
      description: "Provide menu url. This can be relative or absolute. Absolute urls will open a new window."
    },
  ]
}

export const subMenuFields = [
  {
    name: "hasMenu",
    label: "Has Menu",
    type: "boolean",
    component: "toggle",
  },
  {
    mame: "menuItems",
    label: "Children",
    list: true,
    component: "group-list",
    fields: [
      ...menuLink.fields,
    ]
  }
]

export const menuItems = {
  name: 'menuItems',
  label: "Menu Items",

  fields: [
    menuLink,
    ...subMenuFields,
  ]
}

export default menuItems
