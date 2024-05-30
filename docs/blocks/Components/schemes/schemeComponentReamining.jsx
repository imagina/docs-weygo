import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const contentWishList = {
    "tabs": [
      {
        "title": "General",
          "table": {
            "data":[
              [
                'Wish list text (en)',
                {type: <code>Wish list text → input</code>, description: <>Used to add a message to the wish list</>},
              ],
            ]
          }
      },
    ]
}

export const wishList = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'showButton',
              { type: <code>showButton → select(yes / no)</code>, description: <>Used to define whether the button will be displayed in the wish list block</>},
            ],
            [
              'Icon',
              { type: <code>Icon → input(awesome font)</code>, description: <>Used to define the icon to be used in the wish list block</>},
            ],
            [
              'Classes',
              { type: <code>Classes → input</code>, description: <>Used to add classes to the wishlist container of the wishlist block</>},
            ],
            [
              'Styles',
              { type: <code>Styles→ input</code>, description: <>Used to add styles to the wishlist container in the wishlist block</>},
            ],
          ]
        }
      },
    ]
}

export const contentSearch = {
    "tabs": [
      {
        "title": "General",
          "table": {
            "data":[
              [
                'Search Title(en)',
                {type: <code>Search Title(en) → input</code>, description: <>Used to add a title that the search engine will have in the block</>},
              ],
              [
                'Search engine placeholder (en)',
                {type: <code>Search engine placeholder → input</code>, description: <>Used to add text in the search engine so that the user can view it before entering text in the block search engine</>},
              ],
            ]
          }
      },
    ]
}

export const search = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'Layout ',
              { type: <code>Layout → select (layout types)</code>, description: <>Used to define the type of layout that is going to be used in the block</>},
            ],
            [
              'Icon',
              { type: <code>Icon → input (awesome font)</code>, description: <>Used to add an awesome font icon to the block search engine</>},
            ],
            [
              'Class button',
              { type: <code>Class button → input(HTML)</code>, description: <>Used to add classes to the block's search button</>},
            ],
            [
              'Button styles',
              { type: <code>Button styles → input(CSS)</code>, description: <>Used to add styles with CSS naming of the search button</>},
            ],
          ]
        }
      },
    ]
}
    
export const shopping  = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'Layout',
              { type: <code>Layout → select(layout types)</code>, description: <>Used to define which layout will be used in the shopping cart block</>},
            ],
            [
              'Icon',
              { type: <code>Icon → input(awesome font)</code>, description: <>Used to add an icon to the block with awesome font classes</>},
            ],
            [
              'Class',
              { type: <code>Class → input</code>, description: <>Used to add classes to the shopping cart block container</>},
            ],
            [
              'Styles',
              { type: <code>Styles → input</code>, description: <>Used to add styles in CSS to affect the shopping cart block container</>},
            ],
          ]
        }
      },
     
    ]
}
  