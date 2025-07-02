import postPohot1 from "../assets/HomePhotos/Image.png";
import postPohot2 from "../assets/HomePhotos/Image (1).png";
import postPohot3 from "../assets/HomePhotos/Image (2).png";
import postPohot4 from "../assets/HomePhotos/Image (3).png";
import postPohot5 from "../assets/HomePhotos/Image (4).png";
import postPohot6 from "../assets/HomePhotos/Image (5).png";
import postPohot7 from "../assets/HomePhotos/Image (6).png";
import postPohot8 from "../assets/HomePhotos/Image (7).png";
import postPohot9 from "../assets/HomePhotos/Image (8).png";
import postPohot10 from "../assets/HomePhotos/Image (9).png";
import aIma1 from "../assets/ArticlePhotos/Image (10).png";
import aIma2 from "../assets/ArticlePhotos/Image (20).png";
import aIma3 from "../assets/ArticlePhotos/Image (12).png";
import aIma4 from "../assets/ArticlePhotos/Image (13).png";
import aIma5 from "../assets/ArticlePhotos/Image (14).png";
import aIma6 from "../assets/ArticlePhotos/Image (15).png";
import aIma7 from "../assets/ArticlePhotos/Image (16).png";
import aIma8 from "../assets/ArticlePhotos/Image (17).png";
import aIma9 from "../assets/ArticlePhotos/Image (18).png";

export interface PostsTypes {
  id: number;
  image: string;
  date: string;
  title: string;
  para: string;
  categories: string[];
  article?: {
    para1: string[];
    exp: string[];
    examples: {
      id: string;
      epe1: string;
      para9: string;
      ima2: string;
      exp2: string;
    }[];
    para10List: {
      id: string;
      para11: string;
    }[];
    ima: string[];
    title1: string[];
    strongPara: string[];
  };
}

const postsData: PostsTypes[] = [
  {
    id: 1,
    image: postPohot1,
    date: "Olivia Rhye • 1 Jan 2023",
    title: "UX review presentations",
    para: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 2,
    image: postPohot2,
    date: "Phoenix Baker • 1 Jan 2023",
    title: "Migrating to Linear 101",
    para: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma7, aIma8, aIma1, aIma2, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 3,
    image: postPohot3,
    date: "Lana Steiner • 1 Jan 2023",
    title: "Building your API Stack",
    para: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma9, aIma8, aIma7, aIma2, aIma1],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 4,
    image: postPohot4,
    date: "Olivia Rhye • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    para: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    categories: ["Design", "Interface"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma8, aIma9, aIma7, aIma1, aIma2],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 5,
    image: postPohot5,
    date: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    para: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    categories: ["Leadership", "Management"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma7, aIma8, aIma1, aIma9, aIma2],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 6,
    image: postPohot6,
    date: "Demi WIlkinson • 1 Jan 2023",
    title: "PM mental models",
    para: "Mental models are simple expressions of complex processes or relationships.",
    categories: ["Product", "Research", "Frameworks"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma2, aIma1, aIma9, aIma8, aIma7],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 7,
    image: postPohot7,
    date: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    para: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma7, aIma8, aIma9, aIma2, aIma1],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 8,
    image: postPohot8,
    date: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    para: "Collaboration can make our teams stronger, and our individual designs better.",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma9, aIma1, aIma8, aIma2, aIma7],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 9,
    image: postPohot9,
    date: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    para: "JavaScript frameworks make development easy with extensive features and functionalities.",
    categories: ["Software Development", "Tools", "SaaS"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma8, aIma7, aIma9, aIma2, aIma1],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 10,
    image: postPohot10,
    date: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    para: "Starting a community doesn’t need to be complicated, but how do you get started?",
    categories: ["Podcasts", "Customer Success"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma8, aIma1, aIma9, aIma7, aIma2],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 11,
    image: postPohot1,
    date: "Olivia Rhye • 1 Jan 2023",
    title: "UX review presentations",
    para: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 12,
    image: postPohot2,
    date: "Phoenix Baker • 1 Jan 2023",
    title: "Migrating to Linear 101",
    para: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 13,
    image: postPohot3,
    date: "Lana Steiner • 1 Jan 2023",
    title: "Building your API Stack",
    para: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 14,
    image: postPohot4,
    date: "Olivia Rhye • 1 Jan 2023",
    title: "Grid system for better Design User Interface",
    para: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    categories: ["Design", "Interface"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 15,
    image: postPohot5,
    date: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    para: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    categories: ["Leadership", "Management"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 16,
    image: postPohot6,
    date: "Demi WIlkinson • 1 Jan 2023",
    title: "PM mental models",
    para: "Mental models are simple expressions of complex processes or relationships.",
    categories: ["Product", "Research", "Frameworks"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 17,
    image: postPohot7,
    date: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    para: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 18,
    image: postPohot8,
    date: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    para: "Collaboration can make our teams stronger, and our individual designs better.",
    categories: ["Design", "Research"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 19,
    image: postPohot9,
    date: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    para: "JavaScript frameworks make development easy with extensive features and functionalities.",
    categories: ["Software Development", "Tools", "SaaS"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
  {
    id: 20,
    image: postPohot10,
    date: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    para: "Starting a community doesn’t need to be complicated, but how do you get started?",
    categories: ["Podcasts", "Customer Success"],
    article: {
      para1: [
        "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
        "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
        "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
        "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
        "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
        "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
        "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
        " The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
        "Using a grid benefits both end users and the designers alike:",
        "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
        "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
        " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
        " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
        " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
        " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
        "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
      ],

      exp: [
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
        "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
        "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
        "Easily set the number of columns, the gutter size, and margin size in Figma.",
        "Content or elements should be placed within and across columns, not gutters.",
      ],

      examples: [
        {
          id: "expl1",
          epe1: "Example 1: Hierarchical Grid",
          para9:
            "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
          ima2: aIma3,
          exp2: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl2",
          epe1: "Example 2: Column Grid",
          para9:
            "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
          ima2: aIma4,
          exp2: "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl3",
          epe1: "Example 3: Modular Grid",
          para9:
            "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
          ima2: aIma5,
          exp2: "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
        {
          id: "expl4",
          epe1: "Example 4: Breaking the Grid",
          para9:
            "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
          ima2: aIma6,
          exp2: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
        },
      ],

      para10List: [
        {
          id: "list1",
          para11: "Designers can quickly put together well-aligned interfaces.",
        },
        {
          id: "list2",
          para11: "Users can easily scan predictable grid-based interfaces.",
        },
        {
          id: "list3",
          para11:
            "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
        },
      ],

      ima: [aIma1, aIma2, aIma7, aIma8, aIma9],

      title1: [
        "Breaking Down the Grid",
        "Examples of Grids in Use",
        "Benefits of the Grid",
        "Choosing and Setting Up Your Grid",
        "Conclusion",
      ],

      strongPara: [
        "Columns:",
        "Gutters:",
        "Choose the right grid for your needs.",
        "Spend time setting up your grid.",
        "Always place content within columns, not gutters.",
        "Consider using an 8px grid system.",
      ],
    },
  },
];

export default postsData;
