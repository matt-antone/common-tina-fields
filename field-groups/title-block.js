export const titleBlock = [
  {
    type: "datetime",
    label: "Posted Date",
    name: "date",
    required: true,
    ui: {
      dateFormat: "MMMM DD YYYY",
      timeFormat: "hh:mm A",
    },
  },
  {
    type: "string",
    label: "Title",
    name: "title",
    required: true,
    description: "Title of this page."
  },
]