const page = [
  {
    type: "datetime",
    label: "Posted Date",
    name: "date",
    ui: {
      dateFormat: "MMMM DD YYYY",
      timeFormat: "hh:mm A",
    },
  },
  {
    type: "string",
    label: "Title",
    name: "title",
    description: "Title of this page."
  },
  {
    type: "image",
    name: "featuredImg",
    label: "Featured Image",
    description: "this is something"
  },
  {
    type: "rich-text",
    label: "Excerpt",
    name: "excerpt",
  },
]
export default page