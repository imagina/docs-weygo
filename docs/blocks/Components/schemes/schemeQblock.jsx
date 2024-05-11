import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const contentCarousel = {
    "tabs": [
      {
        "title": "title",
        "table": {
          "data": [
            [
              'title',
              { type: <code>Title → input</code>, description: <>Used to place text at the top of the block.</>},
            ],
            [
              'Subtitle',
              { type: <code>Subtitle → HTML</code>, description: <>Used to place the text at the top below the title.</>},
            ],
          ]
        }
      },
      {
        "title": "Subtitle",
        "table": {
          "data": [
            [
              'Subtitle',
              { type: <code>Subtitle → HTML</code>, description: <>Used to place the text at the top below the title.</>},
            ],
          ]
        }
      },
    ]
  }
export const carousel = {
    "tabs": [
      {
        "title": "General",
        "table": {
          "data": [
            [
              'Loop',
              { type: <code>Loop → select (yes / no)</code>, description: <>Used to verify if the roulette wheel will repeat itself when the items used by the roulette wheel are finished.</>},
            ],
            [
                'Automatic repeat',
                {type:<code>Automatic repeat → select (yes / no)</code>, description: <>Used to verify if it will automatically change to the next item you have.</>}
            ],
            [
                'Center',
                {type: <code>Center → select (yes / no)</code>, description: <>Used to verify if the block shown is placed in the horizontal center of the page</>}
            ],
            [
                'Pause on automatic repeat',
                {type: <code>Pause on automatic repeat → select(yes / no)</code>, description: <>Used to check if the auto repeat is paused while the auto repeat is happening</>}
            ],
            [
                'Container build',
                {type: <code>Container build → select (yes / no)</code>, description: <>Used to verify that the block extends across the entire width of the page</>}
            ],
            [
                'Margin',
                {type: <code>Margin → input</code>, description: <>Used to place a number as the margin of the block</>}
            ],
            [
                'Spacing',
                {type: <code>Spacing → input</code>, description: <>Used to provide space between the blocks</>}
            ],
            [
                'Interval Timeout',
                {type: <code>Interval Timeout → input</code>, description: <>Used to set an estimated time for the carousel to move automatically</>}
            ],
            [
                'Element by transition',
                {type: <code>Element by transition → input</code>, description: <>Used to select a number of elements that are displayed vertically</>}
            ],
            [
                'Class responsive',
                {type: <code>Class responsive → select (yes / no)</code>, description: <> </>}
            ],
            [
                'Responsive',
                {type: <code>Responsive → CSS</code>, description: <>Used to define a maximum width and the amount of items that are displayed horizontally, example 
                </>,example: <Link to="#responsive">example responsive</Link>}
            ],
            [
                'Mouse drag',
                {type: <code>Arrastre de ratón → select (yes / no)</code>, description: <>Used to check if the roulette changes object when the mouse drags the wheel 
                </>}
            ],
            [
                'Tap drag',
                {type: <code>Arrastre por toque→ select (yes / no)</code>, description: <>Used to verify if the roulette changes object when you click on the side of the carousel 
                </>}
            ],
          ]
        }
      },
      {
        "title": "Navigation (Nav)",
        "table": {
          "data": [
            [
              'Show (nav)',
              { type: <code>Show (nav) → select (yes / no)</code>, description: <>

              Show (nav) → select (yes / no) | Used to check if nav(block change arrows) are displayed or not.</>},
            ],
            [
                'Position (nav)',
                {type: <code>Position (nav) → select (position on the block)</code>, description: <>Used to identify where the nav will be positioned on the Carousel</>}
            ],
            [
                'Border style (nav)',
                {type: <code>Border style (nav) → select (registered styles CSS)</code>, description: <>Used to identify what type of style will be placed on the edge of the Carousel</>}
            ],
            [
                'Spacing (nav)',
                {type: <code>Spacing (nav) → select (space between nav)</code>, description: <>Used to identify the spacing that the nav will have between them and the other elements</>}
            ],
            [
                'Color (nav)',
                {type: <code>Color (nav) → select(registered colors)</code>, description: <>Used to define the default color that the carousel will have</>}
            ],
            [
                'arrow icon (nav)',
                {type: <code>arrow icon (nav) → select(arrow styles)</code>, description: <>Used to define the style of the arrows that will be used in the carousel</>}
            ],
            [
                'Text size (nav)',
                {type: <code>Text size (nav) → input</code>, description: <>Used to define the size of the navs in the carousel</>}
            ],
          ]
        }
      },
      {
        "title": "Navigation (Dots)",
        "table": {
          "data": [
            [
                'Show (dots)',
                {type: <code>Show (dots) → select (si / no)</code>, description: <>Sirve para verificar si los dots (barra de posición de bloques) que se muestran en el carousel</>}
            ],
            [
                'Styles (dots)',
                {type: <code>Styles (dots) → select (bar styles)</code>, description: <>Used to select the style of the carousel block position bar</>}
            ],
            [
                'Color (dots)',
                {type: <code>Color (dots) → select (bar color)</code>, description: <>Used to define the color of the bar for the position of the blocks in the carousel</>}
            ],
            [
                'Size (dots)',
                {type: <code>Size (dots) → input (different size formats)</code>, description: <>Used to define the size of the bar displayed in the carousel with numbers with different CSS size formats</>}
            ],
          ]
        }
      },
      {
        "title": "Text (Title & Subtitle)",
        "table": {
          "data": [
            [
                'Position',
                {type: <code>Position → select (positions between title and subtitle)</code>, description: <>Used to give a specific position and order between the title and subtitle</>}
            ],
            [
                'Alignment',
                {type: <code>Alignment → select (center / right / left)</code>, description: <>Used to define the position horizontally, leaving three position options between the center, right and left</>}
            ],
            [
                'Font size (title)',
                {type: <code>Font size (title) → input </code>, description: <>Used to define the font size of the title</>}
            ],
            [
                'Transform (title)',
                {type: <code>Transform (title) → select (letter fonts)</code>, description: <>Used to define the font of the title between uppercase, lowercase, capital letters and normal</>}
            ],
            [
                'Color (title)',
                {type: <code>Color (title) → select (saved colors)</code>, description: <>Used to define the color of the title letters</>}
            ],
            [
                'Margin top (title)',
                {type: <code>Margin top (title) → select (letter size)</code>, description: <>Used to define the margin at the top of the title</>}
            ],
            [
                'Margin bottom (title)',
                {type: <code>Margin bottom (title) → select (letter size)</code>, description: <>Used to define the margin at the bottom of the title</>}
            ],
            [
                'Bold font (title)',
                {type: <code>Bold font (title) → select (bold fonts)</code>, description: <>Used to define the bold that the letters of the title will have</>}
            ],
            [
                'Spaces between letters (title)',
                {type: <code>Spaces between letters (title) → input</code>, description: <>Used to define the space between the letters as if they were a margin between letters of the title</>}
            ],
            [
                'Icon (title)',
                {type: <code>Icon (title) → input</code>, description: <>Used to place icons on the title text</>}
            ],
            [
                'URL (title)',
                {type: <code>URL (title) → input</code>, description: <>Used to add a page address to the title text</>}
            ],
            [
                'Target (title)',
                {type: <code>Target (title) → select (redirect option)</code>, description: <>Used to define how the links will be displayed in the same or in a different tab</>}
            ],
            [
                'Color icon (title)',
                {type: <code>Color icon (title) → select (icon colors)</code>, description: <>sed to set a color for the icon that has the title</>}
            ],
            [
                'Classes (title)',
                {type: <code>Classes (title) → input</code>, description: <>Used to place classes on the carousel title container, both CSS and bootstrap classes</>}
            ],
            [
                'Font size (subtitle)',
                {type: <code>Font size (subtítulo) → input</code>, description: <>Used to define the font size of the subtitle</>}
            ],
            [
                'Color (subtitle)',
                {type: <code>Color (subtitle) → select</code>, description: <>Used to define the color of the letters that the subtitle will have</>}
            ],
            [
                'Margin top (subtitle)',
                {type: <code>Margin top (subtitle) → select (letter size)</code>, description: <>Used to define the margin at the top of the subtitle</>}
            ],
            [
                'Margin bottom (subtitle)',
                {type: <code>Margin bottom (subtitle) → select (letter size)</code>, description: <>sed to define the margin at the bottom of the subtitle</>}
            ],
            [
                'Transform (subtitle)',
                {type: <code>Transform (subtitle) → select (letter fonts)</code>, description: <>Used to define the font of the subtitle between uppercase, lowercase, capital letters and normal letters</>}
            ],
            [
                'Bold font (subtitle)',
                {type: <code>Bold font (subtitle) → select (Bold font)</code>, description: <>Used to define the bold that the letters of the subtitle will have</>}
            ],
            [
                'Spaces between letters (subtitle)',
                {type: <code>Spaces between letters (subtitle) → input</code>, description: <>Used to define the space between the letters as if they were a margin between letters of the subtitle</>}
            ],
            [
                'Classes (subtitle)',
                {type: <code>Classes (subtitle) → input</code>, description: <>Used to place classes on the carousel subtitle container, both CSS and bootstrap classes</>}
            ],
            [
                'Line',
                {type: <code>Líne → select (line position)</code>, description: <>Used to define the position of the line in the block where you can choose between “With line below the title”, “With line below the subtitle” and without line</>}
            ],
            [
                'Line Settings',
                {type: <code>Line Settings → CSS</code>, description: <>Used to define the characteristics of the line using CSS parameters, You can't add more things that are already predetermined</>, example: <Link to="#line-settings">example responsive</Link>}
            ],
          ]
        }
      },
    ]
  }

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

export const Element = {
  "tabs": [
    {
      "title": "General",
        "table": {
          "data":[
            [
              'layout',
              {type: <code>Layout → select(layout 6 / layout 7)</code>, description: <>Used to define what type of layout is going to be used in the block.</>},
            ],
            [
              'Item classes',
              {type: <code>Clases item → input</code>, description: <>Used to place HTML or Bootstrap classes in the element container</>}
            ],
            [
              '(left) External space',
              {type: <code>(left) External space → input(number)</code>, description: <>Used to place a type of margin on the left side internally to the elements that the block has with the numbers entered, leaving it in pixel format</>}
            ],
            [
              '(right) External space',
              {type: <code>(right) External space → input(number)</code>, description: <>Used to place a type of margin on the right side internally to the elements that the block has with the numbers entered, leaving it in pixel format</>}
            ],
            [
              '(above) External space',
              {type: <code>(above) External space → input(number)</code>, description: <>Used to place a type of margin at the top internally to the elements that the block has with the numbers entered, leaving it in pixel format</>}
            ],
            [
              '(Below) External space',
              {type: <code>(Below) External space → input(number)</code>, description: <>Used to place a type of margin at the bottom internally to the elements that the block has with the numbers entered, leaving it in pixel format</>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom → input(number)</code>, description: <>Used to place a margin at the bottom of the element by converting the numbers into pixel format</>}
            ],
            [
              'rounded Border',
              {type: <code>rounded edge → input(number)</code>, description: <>Used to place a rounding amount on the edge tips with the amount of the number entered and converted into pixels</>}
            ],
            [
              'Border position',
              {type: <code>Border position → select</code>, description: <>Used to select the edges that will be affected by the edge effects</>}
            ],
            [
              'Border thickness',
              {type: <code>Border thickness → select</code>, description: <>Used to define a thickness at the edge of the element with a previously saved number of pixels</>}
            ],
            [
              'Border color',
              {type: <code>Border color → RGB</code>, description: <>Used to select the color of the border you want on the element.</>}
            ],
            [
              'Background color',
              {type: <code>Background color → input</code>, description: <>Used to define the background color of the element with its name in English or its name in RGB.</>}
            ],
            [
              'Background color (Hover)',
              {type: <code>Background color (Hover) → input</code>, description: <>Used to define the color of the hover background with its name in English or the name in RGB that will appear when you hover the mouse over the element.</>}
            ],
            [
              'Shadow size',
              {type: <code>Shadow size → select</code>, description: <>used to define the size of the shadow with sizes previously registered with the pixel format.</>}
            ],
            [
              'Shadow show on hover',
              {type: <code>Shadow show on hover → select (yes / no)</code>, description: <>Used to define whether the shadow will be shown when the mouse is hovered over the element</>}
            ],
            [
              'Show element with....',
              {type: <code></code>, description: <></>}
            ],
            [
              'Order of elements',
              {type: <code>Order of elements → html</code>, description: <>Used to give a defined order to all the elements of the block and also be able to change them according to the needs of the project.</>, example: <Link to="#order-of-elements">Example</Link>}
            ],

          ]
        }
    },
    {
      "title": "layout 6",
        "table":{
          "data":[
            [
              'Margin X of the texts',
              {type: <code>Margin X of the texts → select</code>, description: <>Used to define a margin in all the texts with the sides of the element container</>}
            ],
          ]
        }
    },
    {
      "title": "layout 7",
        "table":{
          "data":[
            [
              'Vertical alignment',
              {type: <code>Vertical alignment → select(Below, above, venter)</code>, description: <>used to define the position of the elements vertically in one of its 3 options to select.</>}
            ],
            [
              'Left spacing',
              {type: <code>Left spacing → input</code>, description: <> Used to define a space from the left with a pixel format with the number entered</>}
            ],
            [
              'Right spacing',
              {type: <code>Right spacing → input</code>, description: <>Used to define a space from the right with a pixel format with the number entered</>}
            ],
            [
              'Activate container',
              {type: <code>Activate container → select (yes / no)</code>, description: <>Used to define if the container is going to be used in the layout </>}
            ],
            [
              'Type of container',
              {type: <code>Type of container → select</code>, description: <>Used to define what type of previously registered container is going to be used in the block element.</>}
            ],
            [
              'Horizontal Row Alignment',
              {type: <code>Horizontal Row Alignment → input(html)</code>, description: <>Used to define the horizontal position of the block elements.</>}
            ],
            [
              'Vertical Row Alignment',
              {type: <code>Vertical Row Alignment → input(html)</code>, description: <>Used to define the vertical position of the block elements.</>}
            ],
            [
              'Column width',
              {type: <code>Column width → input(bootstrap)</code>, description: <>Used to define the width of the elements using bootstrap classes.</>}
            ],
            [
              'Container color',
              {type: <code>Container color → input</code>, description: <> Used to define the color of the container of the elements using the name of the color in English or the naming in RGB of the color.</>}
            ],

          ]
        }
    },
    {
      "title": "Title",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element.</>}
            ],
            [
              'size',
              {type: <code>Size → input(number)</code>, description: <>Used to define the size of the title text.</>}
            ],
            [
              'Mobile size',
              {type: <code>Mobile size → input(number)</code>, description: <>Used to define the size of the title text when the screen size is reduced to a certain number of pixels.</>}
            ],
            [
              'Transform',
              {type: <code>Transform → select(font)</code>, description: <>Used to define whether a different type of font will be used for the title texts.</>}
            ],
            [
              'Color class',
              {type: <code>Color class → select(registered colors)</code>, description: <>Used to define what color the title text will have.</>}
            ],
            [
              'Color custom',
              {type: <code>Color custom → RGB</code>, description: <>Used to define a color from the chromatic table to the user's preference in case the color does not appear in the colors saved in the select.</>}
            ],
            [
              'Horizontal alignment',
              {type: <code>Horizontal alignment → select(center, right, left)</code>, description: <>Used to define that the title text will be in a horizontal position.</>}
            ],
            [
              'vertical  alignment',
              {type: <code>vertical  alignment → select(center, above, below)</code>, description: <>Used to define that the title text will be in a vertical position.</>}
            ],
            [
              'Margin top',
              {type: <code>Margin top→ input(number)</code>, description: <>Used to define the margin at the top of the title.</>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom→ input(number)</code>, description: <>Used to define the margin at the bottom of the title.</>}
            ],
            [
              'Letter Spacing',
              {type: <code>Letter Spacing → input (number)</code>, description: <>Used to define how much space there is between one letter and another of the title text.</>}
            ],
            [
              'Bold font',
              {type: <code>Bold font→ select(bold type)</code>, description: <>Used to define how bold the title text will be.</>}
            ],
            [
              'maximum height',
              {type: <code>maximum height → input(number )</code>, description: <>Used to define the maximum height that the title container can be.</>}
            ],
            [
              'Number of characters allowed',
              {type: <code>Number of characters allowed → input(number)</code>, description: <>Used to define the maximum number of characters that the title will have, after exceeding that limit the letters will not be displayed</>}
            ],
            [
              'Decoration',
              {type: <code>Decoration → select(without decoration)</code>, description: <>Used to define the type of decoration the title text will have, although at the moment there is only one</>}
            ],
            [
              'Icon',
              {type: <code>Icon → input(bootstrap)</code>, description: <>Used to define if the title will have an icon, receive classes for bootstrap line</>}
            ],
            [
              'Color Icon',
              {type: <code>Color icon → select(colors)</code>, description: <>Used to define the color of the element title icon</>}
            ],
            [
              'Text shadow',
              {type: <code>Test shadow → input</code>, description: <>Used to define whether the element title text will have a shadow.</>}
            ],
            [
              'Header type',
              {type: <code>Header type → select(title size)</code>, description: <>Used to define the type of header that the title will use with the html title size.</>}
            ],
            [
              'General classes',
              {type: <code>General classes → input</code>, description: <>Used to add classes to the titles of the elements, both html and bootstrap classes.</>}
            ],
          ]
        }
    },
    {
      "title": "summary",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element.</>}
            ],
            [
              'size',
              {type: <code>Size → input(number)</code>, description: <>Used to define the size of the summary text</>}
            ],
            [
              'Alignment',
              {type: <code>Alignment → select(text alignment)</code>, description: <>Used to define the alignment of the summary text as if it were a docs file.</>}
            ],
            [
              'Letter spacing',
              {type: <code>Letter spacing → input(number)</code>, description: <>Used to define the space between the letters of the summary.</>}
            ],
            [
              'Color class',
              {type: <code>Color class → select(colors)</code>, description: <>Used to define the color of the letter of the element summary</>}
            ],
            [
              'Color custom',
              {type: <code>Color class → RGB</code>, description: <>Used to choose a color different from those registered in the color class if the project requires it.</>}
            ],
            [
              'Margin top',
              {type: <code>Margin top → select(size in pixels)  </code>, description: <>Used to define a space at the top of the summary
              </>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom→ select(size in pixels)</code>, description: <>Used to define a space at the bottom of the summary</>}
            ],
            [
              'Decoration',
              {type: <code>Decoration → select(without decoration)</code>, description: <>Used to define the type of decoration the summary text will have, although at the moment there is only one</>}
            ],
            [
              'Bold font',
              {type: <code>Negrita → select(type bold)</code>, description: <>Used to define whether the element summary will use bold and the bold it will use since some are more pronounced than others.</>}
            ],
            [
              'Number of characters allowed',
              {type: <code>Number of characters allowed → input(number)</code>, description: <>Used to define the maximum number of characters that the element summary can have.</>}
            ],
            [
              'maximum height',
              {type: <code>maximum height → input(number)</code>, description: <>Used to define the maximum height that the summary container can have.</>}
            ],
            [
              'Line height',
              {type: <code>Line height: → input(number)</code>, description: <>Used to define the fixed height that the summary container will have.</>}
            ],
            [
              'Text shadow',
              {type: <code>Text shadow → input</code>, description: <>Used to add shading to the summary text</>}
            ],
            [
              'General classes',
              {type: <code>Clases generales → input</code>, description: <>Used to add classes to the element summary, both HTML and Bootstrap classes.</>}
            ],
            [
              'Extra false field',
              {type: <code>Extra false field → input</code>, description: <>Used to create an extra false field</>}
            ],
          ]
        }
    },
    {
      "title": "category",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element</>}
            ],
            [
              'size',
              {type: <code>Size → input(number)</code>, description: <>Used to define the size of the category text</>}
            ],
            [
              'Alignment',
              {type: <code>Alignment → select(text alignment)</code>, description: <>Used to define the alignment of the category text as if it were a docs file</>}
            ],
            [
              'Letter spacing',
              {type: <code>Letter spacing → input(number)</code>, description: <>Used to define the space between the letters of the category</>}
            ],
            [
              'Color class',
              {type: <code>Color class → select(colors)</code>, description: <>Used to define the color of the letter of the element category</>}
            ],
            [
              'Color custom',
              {type: <code>Color class → RGB</code>, description: <>Used to choose a color different from those registered in the color class if the project requires it</>}
            ],
            [
              'Margin top',
              {type: <code>Margin top → select(size in pixels)</code>, description: <>Used to define a space at the top of the category</>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom→ select(size in pixels)</code>, description: <>Used to define a space at the bottom of the category</>}
            ],
            [
              'Decoration',
              {type: <code>Decoration → select(without decoration)</code>, description: <>Used to define the type of decoration the category text will have, although at the moment there is only one</>}
            ],
            [
              'Bold font',
              {type: <code>Negrita → select(type bold)</code>, description: <>Used to define whether the element category will use bold and the bold it will use since some are more pronounced than others</>}
            ],
            [
              'Text shadow',
              {type: <code>Text shadow → input</code>, description: <>Used to add shading to the category text</>}
            ],
            [
              'General classes',
              {type: <code>General classes → input</code>, description: <>Used to add classes to the element categories, both html and bootstrap classes</>}
            ],
          ]
        }
    },
    {
      "title": "Date",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element</>}
            ],
            [
              'size',
              {type: <code>Size → input(number)</code>, description: <>Used to define the size of the date text</>}
            ],
            [
              'Alignment',
              {type: <code>Alignment → select(text alignment)</code>, description: <>Used to define the alignment of the date text as if it were a docs file</>}
            ],
            [
              'Letter spacing',
              {type: <code>Letter spacing → input(number)</code>, description: <>Used to define the space between the letters of the date</>}
            ],
            [
              'Color class',
              {type: <code>Color class → select(colors)</code>, description: <>Used to define the color of the letter of the element date</>}
            ],
            [
              'Color custom',
              {type: <code>Color class → RGB</code>, description: <>Used to choose a color different from those registered in the color class if the project requires it</>}
            ],
            [
              'Margin top',
              {type: <code>Margin top → select(size in pixels)</code>, description: <>Used to define a space at the top of the date </>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom→ select(size in pixels)</code>, description: <>Used to define a space at the bottom of the date</>}
            ],
            [
              'Decoration',
              {type: <code>Decoration → select(without decoration)</code>, description: <>Used to define the type of decoration the date text will have, although at the moment there is only one</>}
            ],
            [
              'Bold font',
              {type: <code>Bold font→ select(type bold)</code>, description: <>Used to define whether the element date will use bold and the bold it will use since some are more pronounced than others</>}
            ],
            [
              'Text shadow',
              {type: <code>Text shadow → input</code>, description: <>used to shade the date text</>}
            ],
            [
              'General classes',
              {type: <code>General classes → input</code>, description: <>used to add classes to the elements' dates, both html and bootstrap classes</>}
            ],
          ]
        }
    },
    {
      "title": "button",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element</>}
            ],
            [
              'size',
              {type: <code>Size → input(number)</code>, description: <>Used to define the size of the Button text</>}
            ],
            [
              'Alignment',
              {type: <code>Alignment → select(text alignment)</code>, description: <>Used to define the alignment of the Button text as if it were a docs file</>}
            ],
            [
              'Color',
              {type: <code>Color → select(colors)</code>, description: <>Used to define the color of the element button</>}
            ],
            [
              'Margin top',
              {type: <code>Margin top→ select(size in pixels)</code>, description: <>Used to define a space at the top of the date</>}
            ],
            [
              'Margin bottom',
              {type: <code>Margin bottom→ select(size in pixels)</code>, description: <>Used to define a space at the top of the date</>}
            ],
            [
              'Text size',
              {type: <code>Text size → input(number)</code>, description: <>Used to define the size of the button text in the element</>}
            ],
            [
              'Icon type',
              {type: <code>Icon type → input(bootstrap)</code>, description: <>Used to add an icon to the element button</>}
            ],
            [
              'Icon position',
              {type: <code>Icon position → select(right / left)</code>, description: <>Used to define the position of the button icon</>}
            ],
            [
              'Button text',
              {type: <code>Button text → input</code>, description: <>Used to add text to the button in case text had not been added to the button previously</>}
            ],
            [
              'Text shadow',
              {type: <code>Text shadow → input</code>, description: <>Used to add shading to the button text</>}
            ],
            [
              'Target',
              {type: <code>Target → select(redirect types)</code>, description: <>Used to define the type of button redirection</>}
            ],
            [
              'General Classes',
              {type: <code>General Classes → input</code>, description: <>Used to add classes to the elements' dates, both html and bootstrap classes</>}
            ],
            
            [
              'Custom button configuration',
              {type: <code>Custom button configuration → CSS</code>, description: <>Used to modify the button in a more personalized way but without being able to add more parts than the default</>, example: <Link to="#custom-button-configuration-1">Example</Link>}
            ],
          ]
        }
    },
    {
      "title": "image",
        "table":{
          "data":[
            [
              'show',
              {type: <code>show→ select(yes / no)</code>, description: <>Used to define whether the title will be displayed in the element</>}
            ],
            [
              'Zone',
              {type: <code>Zone → input</code>, description: <>Used to define the area where the image that will be used in the block was saved</>}
            ],
            [
              'Position',
              {type: <code>Position → select</code>, description: <>Used to define the position in which the right, left and overlay image will be</>}
            ],
            [
              'Vertical alignment',
              {type: <code>Vertical alignment → select(center, above, below)</code>, description: <>Used to define the image position vertically in one of its 3 options to select</>}
            ],
            [
              'Left column size',
              {type: <code>Left column size → input(bootstrap)</code>, description: <>Used to define the size of the left part with the sizes of the bootstrap columns</>}
            ],
            [
              'Right column size',
              {type: <code>Right column size → input(bootstrap)</code>, description: <>Used to define the size of the right part with the sizes of the bootstrap columns</>}
            ],
            [
              'Image size',
              {type: <code>Image size → input(number)</code>, description: <>Used to define the size of the image according to the selected percentage and the original size of the image</>}
            ],
            [
              'High image (free format)',
              {type: <code>High image → input</code>, description: <>Used to define the base height of the block image</>}
            ],
            [
              'maximum height (free format)',
              {type: <code></code>, description: <></>}
            ],
            [
              'maximum height (free format)',
              {type: <code>maximum height → input</code>, description: <>Used to define the maximum height of the image, ensuring that the image cannot be larger than the placed size</>}
            ],
            [
              'Minimum high (free format)',
              {type: <code>Minimum high → input</code>, description: <>Used to define the minimum height of the image, ensuring that the image cannot be smaller than the placed size</>}
            ],
            [
              'Horizontal alignment',
              {type: <code>Horizontal alignment → select(center, above, below)</code>, description: <>Used to define the image position horizontally in one of its 3 options to select</>}
            ],
            [
              'Spacing before border',
              {type: <code>Spacing before border → input(number)</code>, description: <>Used to define the spacing that the image will have before the border</>}
            ],
            [
              'Space after border',
              {type: <code>space after border → input(number)</code>, description: <>Used to define the spacing that the image will have after the border</>}
            ],
            [
              'Aspect ratio',
              {type: <code>Aspect ratio → select(fractions)</code>, description: <>used to define the distribution of the image size according to the chosen fraction</>}
            ],
            [
              'Mobil aspect ratio',
              {type: <code>Mobil aspect ratio → select(fractions)</code>, description: <>Used to define the distribution of the image size according to the chosen fraction after a certain number of pixels</>}
            ],
            [
              'Object fit',
              {type: <code>Object fit → select</code>, description: <>used to define the behavior of the image within a container</>}
            ],
            [
              'Border rounding',
              {type: <code>Border rounding → input(number)</code>, description: <>Used to define how much rounding of the edge the image will have.</>}
            ],
            [
              'Rounding position',
              {type: <code>Rounding position → select</code>, description: <>Used to define the position of the edge of the image that will be used</>}
            ],
            [
              'Border width',
              {type: <code>Border width → select(1→5)</code>, description: <>Used to define the size of the width that the image border will have.</>}
            ],
            [
              'Border style',
              {type: <code>Border style → select</code>, description: <>Used to define the style that will be used on the border of the image</>}
            ],
            [
              'Border color',
              {type: <code>Border color → input(RGB)</code>, description: <>Used to define the color of the border by selecting it or entering its name in RGB</>}
            ],

          ]
        }
    },
    {
      "title": "video",
        "table":{
          "data":[
            [
              'Loop',
              {type: <code>Loop → select (Show opacity)</code>, description: <>Used to check if the video will repeat when it finishes playing</>}
            ],
            [
              'Autoplay',
              {type: <code>Autoplay → select (yes / no)</code>, description: <>Used to define whether the video will start automatically without the need</>}
            ],
            [
              'Muted',
              {type: <code>Muted → select (yes  / no)</code>, description: <>Used to define whether the video will have audio when playing </>}
            ],
            [
              'Controls',
              {type: <code>Controls → select (yes  / no)</code>, description: <> used to define whether the video ***************
              </>}
            ],
          ]
        }
    },
    {
      "title": "Opacity and Animation",
        "table":{
          "data":[
            [
              'Show opacity',
              {type: <code>Show opacity → select(yes  / no)</code>, description: <>Used to define whether the opacity will be shown</>}
            ],
            [
              'Opacity color',
              {type: <code>Opacity color → select</code>, description: <>Used to choose the color of the element's opacity</>}
            ],
            [
              'Opacity direction',
              {type: <code>Opacity direction → select</code>, description: <>Used to define the direction that the opacity will have in the element</>}
            ],
            [
              'Custom opacity',
              {type: <code>Custom opacity → input</code>, description: <>Used to add a color that is not found in the base color selection using its name or its naming in RGB</>}
            ],
            [
              'Opacity on hover',
              {type: <code>Opacity on hover → select (yes / no)</code>, description: <>Used to define whether or not the hover of the element will have opacity</>}
            ],
            [
              'shadow',
              {type: <code>Shadow → input</code>, description: <>******</>}
            ],
            [
              'Image effect',
              {type: <code>Image effect → select</code>, description: <>Used to modify the way the image is displayed when hovering over the item </>}
            ],
            [
              'Effect on Image Opacity',
              {type: <code>Effect on Image Opacity →  select</code>, description: <>Used to modify the way the opacity is displayed when the hover is activated</>}
            ],
            [
              'Effect on Opacity Content',
              {type: <code>Effect on Opacity Content → select</code>, description: <>Used to modify the way the content appears when the opacity is activated on hover. Valid only for layout 7, when the content is displayed over the image</>}
            ],
          ]
        }
    },
    {
      "title": "Entry animation",
        "table":{
          "data":[
            [
              'Animation',
              {type: <code>Animation → select(types of animation)</code>, description: <>Used to define the entrance animation that will be used in the element</>}
            ],
            [
              'Duration',
              {type: <code>Duration → input(number)</code>, description: <>Used to define the duration of the entrance animation that the element will have</>}
            ],
            [
              'Offset',
              {type: <code>Offset → input</code>, description: <>used to define how much distance the element will move during the animation</>}
            ],
            [
              'Delay',
              {type: <code>Delay → input</code>, description: <>Used to define how much delay the entrance animation will have before starting the animation</>}
            ],
            [
              'Delay increase',
              {type: <code>Delay increase → input</code>, description: <>Used to define if all the elements will have the same delay or some will increase the delay set</>}
            ],
            [
              'Easting',
              {type: <code>Easing → select</code>, description: <>*************</>}
            ],
            [
              'One',
              {type: <code>One → select(yes / no)</code>, description: <>Used to define whether the animation is played only once</>}
            ],
            [
              'Mirror',
              {type: <code>Mirror → select (yes / no)</code>, description: <>Used to define whether elements should animate as they move beyond their original positions</>}
            ],
          ]
        }
    },
  ]
}

export const sliderOWL = {
  "tabs": [
    {
      "title": "title",
      "table": {
        "data": [
          [
            'Layout',
            { type: <code>Layout → input</code>, description: <>Used to define the type of layout that is going to be used in the slider.</>},
          ],
          [
            'Automatic repeat',
            { type: <code>automatic repeat → select(yes / no)</code>, description: <>Used to define whether the playback of the items will be done automatically.</>},
          ],
          [
            'Margin',
            { type: <code>Margin → input(number)</code>, description: <>Used to define the margin that the slider will have for the other elements.</>},
          ],
          [
            'Pause on auto repeat',
            { type: <code>Pause on auto repeat → select(yes / no)</code>, description: <>Used to define whether the items will have a pause before moving to the next item.</>},
          ],
          [
            'Loop',
            { type: <code>Loop → select(yes / no)</code>, description: <>Used to define if the repetition will be a loop, which means that the items are repeated when they are finished.</>},
          ],
          [
            'Interval Timeout',
            { type: <code>Interval Timeout → input(number)</code>, description: <>Used to define the waiting time before changing items.</>},
          ],
          [
            'Spacing',
            { type: <code>Spacing→ input(number)</code>, description: <>Used to define the spacing that the slider will have.</>},
          ],
          [
            'Responsive class',
            { type: <code>Responsive class → select(yes / no)</code>, description: <>Used to define whether the responsive class will be used in the slider.</>},
          ],
          [
            'Responsive',
            { type: <code>Responsive → CSS</code>, description: <>Used to define the item number that will be displayed horizontally.</>, example: <Link to="#responsive">Example</Link>},
          ],
        ]
      }
    },
    {
      "title": "Navigation (Nav)",
      "table": {
        "data": [
          [
            'Nav ',
            { type: <code>Nav → select(yes / no)</code>, description: <>Used to define whether the nav will be displayed</>},
          ],
          [
            'NavPosition',
            { type: <code>Nav Position → select(positions in the block)</code>, description: <>Used to define the position of the nav in the block</>},
          ],
          [
            'NavText',
            { type: <code>NavText → html</code>, description: <>Used to add classes to the OWL slider container</>, example: <Link to="#nav-text">Example</Link>},
          ],
          [
            'Width (nav side)',
            { type: <code>Width (nav side) → input(px)</code>, description: <>Used to define the size of the width of the OWL slider in the px format</>},
          ],
          [
            'high% (nav side)',
            { type: <code>high% (nav side) → input</code>, description: <>Used to define the size of the width of the OWL slider which is in percentage format(%)</>},
          ],
        ]
      }
    },
    {
      "title": "navigation(Dots)",
      "table": {
        "data": [
          [
            'Dots',
            { type: <code>Dots → select(yes / no)</code>, description: <>Used to define whether the dots are shown in the block</>},
          ],
          [
            'Dots position',
            { type: <code>Dots position → select(positions in the block)</code>, description: <>Used to define the position that the dots will have in the block</>},
          ],
          [
            'Dots style',
            { type: <code>Dots style → select(circle, square, line)</code>, description: <>Used to define the style that the dots will have in the block</>},
          ],
          [
            'Dots color',
            { type: <code>Dots color → input</code>, description: <>Used to define the color of the dots in the block</>},
          ],
          [
            'Bottom',
            { type: <code>Bottom → input(number)</code>, description: <>Used to define the space that will have at the bottom of the dots</>},
          ],
        ]
      }
    },
    
  ]
}