import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const contentBlock = {
  "tabs": [
    {
      "title": "General",
        "table": {
          "data":[
            [
              'title',
              {type: <code>Title → input</code>, description: <>Used to place text at the top of the block.</>},
            ],
          ]
        }
    },
    {
      "title": "Subtitle",
      "table": {
        "data": [
          [
            'subtitle',
            {type:<code>Subtitle → input</code>, description: <>Used to place text on top of the block after the block.</>}
          ],
        ]
      }
    },
    {
      "title": "Background image",
      "table": {
        "data": [
          [
            'Background image',
            {type:<code>Background image → input(img)</code>, description: <>Used to upload an image and use it as a block background.</>}
          ],
        ]
      }
    },
    {
      "title": "Block Button Text",
      "table": {
        "data": [
          [
            'Block Button Text',
            {type:<code>Block Button Text → input</code>, description: <>Used to add text to the block button.</>}
          ],
        ]
      }
    },
  ]
}

export const Block = {
  "tabs": [
    {
      "title": "General",
      "table": {
        "data": [
          [
            'Enter the ID',
            { type: <code>Enter the ID → input</code>, description: <>Used to give an id to the container of the entire block so that it can be called in the CSS without being confused with other containers</>},
          ],
          [
            'Kind of container',
            { type: <code>Kind of container → select (Container types)</code>, description: <>Used to define the type of container that the general block of the block will have</>},
          ],
          [
            'Opacity',
            { type: <code>Opacity → input</code>, description: <>Used to define how much transparency the block will have on the page in general</>},
          ],
          [
            'Background gradient',
            { type: <code>Background gradient → input</code>, description: <>Used to place a color with a gradient background of the block with RGB name</>},
          ],
          [
            'Background options',
            { type: <code>Background options → CSS</code>, description: <>Used to define background parameters of the block's background using CSS language but you cannot add more things besides what it already has by default</>, example:<Link to="#background-options">Example</Link>},
          ],
          [
            'Row (vertical and horizontal alignment)',
            { type: <code>Row → input</code>, description: <>Used to define what position the rows of the block will have using html or css names</>},
          ],
          [
            'Columns',
            { type: <code>Columns → input</code>, description: <>Used to define how many columns the block will be using (columns with bootstrap classes, example, col-12)</>},
          ],
          [
            'Position',
            { type: <code>Positionselect(types of positions)</code>, description: <>Used to define what type of position the block will have if relative, absolute, etc.</>},
          ],
          [
            'Order between elements(z-index)',
            { type: <code>Order between elements – input</code>, description: <>Used to define the importance of an object above the others</>},
          ],
          [
            'Top position',
            { type: <code>Top position → input(free format)</code>, description: <>Used to define how much space there will be between the top of the block container and the block</>},
          ],
          [
            'Bottom position',
            { type: <code>Bottom position → input(free format) </code>, description: <>Used to define how much space there will be between the bottom of the block container and the block</>},
          ],
          [
            'Left position',
            { type: <code>Left position → input(free format)</code>, description: <>Used to define how much space there will be between the left part of the block container and the block</>},
          ],
          [
            'Right position',
            { type: <code>Right position → input(free format)</code>, description: <>Used to define how much space there will be between the right part of the block container and the block</>},
          ],
          [
            'Block Width',
            { type: <code>Block Width → input(free format)</code>, description: <>Used to define the width of the page using a fixed size or automatically or any format accepted by the CSS width</>},
          ],
          [
            'Block height',
            { type: <code>Block height → input(free format)</code>, description: <>Used to define the height of the page using a fixed size or automatically or any format accepted by the CSS height</>},
          ],
          [
            'Class block',
            { type: <code>Class block → input</code>, description: <>Used to place classes in the block container in order to affect the blocks</>},
          ],
          [
            'Style block',
            { type: <code>Style block → input(css)</code>, description: <>Used to style the entire layout block using the language used in CSS and its rules</>},
          ],
        ]
      }
    },
    {
      "title": "Button",
      "table": {
        "data": [
          [
            'Show',
            { type:<code>Show→ select(yes / no)</code>, description:<>Used to define whether the button is displayed in the block</>},
          ],
          [
            'Position',
            { type:<code>Position → select(above / below)</code>, description:<>Used to define where the button will go, whether at the top or at the bottom of the block</>},
          ],
          [
            'Button styles',
            { type: <code>Button styles → select</code>, description: <>Used to define what style the button will have by choosing from a select with predesigned options</>},
          ],
          [
            'Spacing',
            { type: <code>Spacing → select</code>, description: <>Used to define how much space the button will have from the other objects in the block by choosing from a select with predesigned options</>},
          ],
          [
            'Alignment',
            { type: <code>Alignment→ select(center, right, left)</code>, description: <>Used to define in what horizontal position the button will be</>},
          ],
          [
            'Color',
            { type: <code>Color → select</code>, description: <>Used to define what color the button will have by choosing from a select with predefined options</>},
          ],
          [
            'Text size',
            { type: <code>Text size → input(numbers)</code>, description: <>Used to define what size the button text will be, any number entered will be used as if it were in pixels</>},
          ],
          [
            'Margin top',
            { type: <code>Margin top → select</code>, description: <>Used to define the space that the button will have at the top that will be used as a margin</>},
          ],
          [
            'Margin bottom',
            { type: <code>Margen inferior→ select</code>, description: <>Used to define the space that the button will have at the bottom that will be used as a margin</>},
          ],
          [
            'text shadow',
            { type: <code>text shadow → input</code>, description: <>Used to define what color the shadow of the text will be, if you do not place anything it will not have a shadow</>},
          ],
          [
            'Url',
            {
              type: <code>Url → input</code>, description: <>Used to define a web address where the user will be redirected when clicking the button</>
            }
          ],
          [
            'Target',
            {
              type: <code>Target → select</code>, description: <>Used to define how the user will be redirected when sent to another web address, whether from the same tab or by opening another separate tab</>
            }
          ],
          [
            'Icon',
            {
              type: <code>Icon → input</code>, description: <>Used to define which icon is also used within the button using awesome font classes, if it is left empty no icon will be placed</>
            }
          ],
          [
            'Icon position',
            {
              type: <code>Icon position → select(right / left)</code>, description: <>Used to define which side of the button the icon will be on</>
            }
          ],
          [
            'Color Icon',
            {
              type: <code>Color icon → input</code>, description: <>Used to define what color the icon will have using the name of the color in English or the RGB of the color</>
            }
          ],
          [
            'Color Icon hover',
            {
              type: <code>Color Icon hover → input</code>, description: <>Used to define what color the icon will have when you have the mouse over it using the name of the color in English or the RGB of the color</>
            }
          ],
          [
            'General classes',
            {
              type: <code>General classes → input</code>, description: <>Used to define which class will have the main container of the button, it serves both HTML and bootstrap classes</>
            }
          ],
          [
            'Custom button configuration',
            {
              type: <code>Custom button configuration → CSS </code>, description: <>Used to modify the button in a more personalized way but you cannot add different attributes in addition to the original ones</>, example:<Link to="#custom-button-configuration">Example</Link>
            }
          ],
        ]
      }
    },
    {
      "title": "Entry animation",
      "table": {
        "data": [
          [
              'Animation',
              {type: <code>Animation → select</code>, description: <>Used to define the animation that the block has, which can be from top-down entry and bottom-up entry, you can also choose the option of no animation</>}
          ],
          [
              'Duration',
              {type: <code>Duration → select</code>, description: <>Used to define how long the selected animation of the block lasts</>}
          ],
          [
            'Offset',
            {type: <code>Offset → input</code>, description: <>Used to define how many pixels are traveled from the place where it enters to the predefined place of the block</>}
          ],
          [
            'Delay',
            {type: <code>Delay → input</code>, description: <>Used to define how much time there is before the block animation begins</>}
          ],
          [
            'Easing',
            {type: <code>Easing → select</code>, description: <>***********************</>}
          ],
          [
            'One',
            {type: <code>One → select(si / no)</code>, description: <>Used to define if the animation is only carried out once</>}
          ],
          [
            'MIrror',
            {type: <code>Mirror → select</code>, description: <> Used to define whether the animation moves beyond the original position</>}
          ],
        ]
      }
    },
    {
      "title": "Responsive custom",
      "table": {
        "data": [
          [
              'Responsive custom',
              {type: <code>Responsive custom → html</code>, description: <>******************************</>}
          ],
        ]
      }
    },
  ]
}

export const contentEnvironment = {
  "tabs": [
    {
      "title": "General",
        "table": {
          "data":[
            [
              'Text (title) (en)',
              {type: <code>Text (title) → input</code>, description: <>Used to add a title to the custom environment container</>},
            ],
            [
              'Text (subtitle) (en)',
              {type: <code>Text (subtitle)→ input</code>, description: <>Used to add a subtitle to the custom environment container</>},
            ],
            [
              'Text (summary) (en)',
              {type: <code>Text (summary) → input</code>, description: <>Used to add a summary to the custom environment container</>},
            ],
            [
              'Description (en)',
              {type: <code>Description → HTML</code>, description: <>Used to add extra text to the description of the custom environment container</>},
            ],
            [
              'Video URL (en)',
              {type: <code>Video URL → input</code>, description: <>Used to add a video URL to use in the block</>},
            ],
            [
              'Custom button text (en)',
              {type: <code>Custom button text → input</code>, description: <>Used to add text that will be used in the block button</>},
            ],
            [
              'Custom button link (en)',
              {type: <code>Custom button link → input</code>, description: <>Used to add a link to the block button to redirect when clicking</>},
            ],
            [
              'Main image',
              {type: <code>Main image → input(image)</code>, description: <>Used to add an image to be used in the block, any image format can be used</>},
            ],
            [
              'Gallery',
              {type: <code>Gallery→ input(images)</code>, description: <>Used to add images that can be used in the block, any image format can be used up to a maximum of 12 elements</>},
            ],
          ]
        }
    },
  ]
}

export const Environment = {
  "tabs": [
    {
      "title": "General",
      "table": {
        "data": [
          [
            'Includes additional',
            { type: <code>Includes additional → input</code>, description: <>Used to serve to include a blade view of the theme from views</>},
          ],
          [
            'Position of elements',
            { type: <code>Position of elements → select(positions in the block)</code>, description: <>Used to define what type of position is going to be used in the block</>},
          ],
          [
            'Classes in images or video',
            { type: <code>Classes in images or video → input</code>, description: <>Used to add classes to the image and/or video used in the block</>},
          ],
          [
            'Classes in content',
            { type: <code>Classes in content → input</code>, description: <>Used to add classes to the content of the block</>},
          ],
          [
            'Column width',
            { type: <code>Column width → input</code>, description: <>Used to define the width of the block columns</>},
          ],
          [
            'Column spacing',
            { type: <code>Column spacing → input</code>, description: <>Used to define the space that the columns will have between them</>},
          ],
          [
            'Order of elements',
            { type: <code>Order of elements → html</code>, description: <>Used to define the order of the vertical shape of the elements that will be displayed on the border</>, Example: <Link to="#order-of-elements" >Example</Link>},
          ],
        ]
      }
    },
    {
      "title": "Content",
      "table": {
        "data": [
          [
            'Classes (title)',
            { type: <code>Clases (title) → input</code>, description: <>Used to add classes to the container to affect the block title</>},
          ],
          [
            'Font size (title)',
            { type: <code>Font size (title) → input</code>, description: <>Used to add classes to the container to affect the block title</>},
          ],
          [
            'Classes (subtitle)',
            { type: <code>Classes (subtitle) → input</code>, description: <>Used to add classes to the container to affect the block subtitle</>},
          ],
          [
            'Font size (subtitle)',
            { type: <code>Font size (subtitle) → input</code>, description: <>Used to add classes to the container to affect the block subtitle</>},
          ],
          [
            'Classes (summary)',
            { type: <code>Classes (summary) → input</code>, description: <>Used to add classes to the container to affect the block summary</>},
          ],
          [
            'Font size (summary)',
            { type: <code>Font size (summary) → input</code>, description: <>Used to add classes to the container to affect the block summary</>},
          ],
          [
            'Classes (description)',
            { type: <code>Classes (description) → input</code>, description: <>Used to add classes to the container to affect the block description</>},
          ],
        ]
      }
    },
    {
      "title": "Image and video",
      "table": {
        "data": [
          [
            'Class on (image)',
            { type: <code>Class on (image) → input</code>, description: <>Used to add classes to the block image</>},
          ],
          [
            'class in (image)',
            { type: <code>class in (image) → input</code>, description: <>Used to add classes to the block image container</>},
          ],
          [
            'Additional styles (image)',
            { type: <code>Additional styles (image) → input</code>, description: <>Used to add style to the block image</>},
          ],
          [
            'Responsive (video)',
            { type: <code>Responsive (video) → select(video size format)</code>, description: <>Used to define the type of aspect that will be used in the block video</>},
          ],
          [
            'Classes (video)',
            { type: <code>Classes (video) → input</code>, description: <>Used to add classes to the block video</>},
          ],
        ]
      }
    },
    {
      "title": "Button",
      "table": {
        "data": [
          [
            'show',
            { type: <code>show→ select (yes / no)</code>, description: <>Used to define whether the button will be displayed in the custom environment block</>},
          ],
          [
            'Text size',
            { type: <code>Text size → input(number+free format)</code>, description: <>Used to define the size of the text of the button of the custom environment block</>},
          ],
          [
            'Icon type',
            { type: <code>Icon type → input(awesome font)</code>, description: <>Used to define what type of icon will be used in the button of the custom environment block</>},
          ],
          [
            'Icon position',
            { type: <code>Icon position → select(position on the button)</code>, description: <>Used to define the position of the icon in the block button</>},
          ],
          [
            'Button style',
            { type: <code>Button style → select(button styles)</code>, description: <>Used to define the style that the button will have in the block</>},
          ],
          [
            'Spacing',
            { type: <code>Spacing → select(defined size)</code>, description: <>Used to define the size of the button spacing to move the button edges further away from the text</>},
          ],
          [
            'General classes',
            { type: <code>General classes → input</code>, description: <>Used to add classes to the elements that the block container has</>},
          ],
          [
            'Alignment',
            { type: <code>Alignment → select (position on the block)</code>, description: <>Used to define the horizontal position that the content of the block's custom environment will have</>},
          ],
          [
            'Target ',
            { type: <code>Target  → select (position in depth)</code>, description: <>Used to define the position in depth of the block elements</>},
          ],
          [
            'Color ',
            { type: <code>Color  → select (colors)</code>, description: <>Used to define the color that the button in the block will use</>},
          ],
          [
            'Custom button configuration',
            { type: <code>Custom button configuration → CSS</code>, description: <>Used to add additional styles to the button, but you cannot add more styles to the table but you can modify it</>, example: <Link to="#custom-button-configuration" >Example</Link>},
          ],
          [
            '',
            { type: <code></code>, description: <></>},
          ],
        ]
      }
    },
  ]
}