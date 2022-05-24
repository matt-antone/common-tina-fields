const page = [
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
  {
    type: "image",
    name: "featuredImg",
    label: "Featured Image",
    required: false,
    description: "this is something"
  },
  {
    type: "rich-text",
    label: "Excerpt",
    name: "excerpt",
    required: true,
  },
]
export default page