export const MINI_PROJECTS_ARR = [
  "Simple-Form",
  "Controlled-Form",
  "React-Hook-Form",
  "Accordion",
  "Tic-Tac-Toe",
  "Search-Auto-Complete",
  "Tabs",
  "Model",
  "Image-Slider",
  "Github-User",
  "Star-Rating",
  "Type-Effect",
  "Tab-Transition",
  "Image-Scroll",
  "Controlled-Ref",
  "Recursive-Tree",
  "Scroll-Indicator",
  "Sticky-Cursor",
  "Random-Emoji",
  "LazyLoading-Image",
  "Upload-File",
];

export type TreeDataType = {
  name: string;
  childrens?: TreeDataType[];
};

export const TREEDATA: TreeDataType[] = [
  {
    name: "Home",
  },
  {
    name: "products",
    childrens: [
      {
        name: "AZF-12",
        childrens: [
          {
            name: "Model-e",
          },
        ],
      },
      {
        name: "FZRT-22",
        childrens: [
          {
            name: "Model-1",
          },
          {
            name: "Model-2",
          },
        ],
      },
    ],
  },
  {
    name: "blog",
    childrens: [
      {
        name: "Cars",
      },
      {
        name: "engine",
      },
    ],
  },
];
