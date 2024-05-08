---
title: "Carousel"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentCarousel,carousel} from './schemes/schemeQblock.jsx';

This component is unique where it is used in a single type of block called a carousel, it is used to modify the characteristics of the carousel, it is responsible for their visualization and their form of repetition.

## content
<TableTabs tabsContent={contentCarousel} />

 ## Attribute
<TableTabs tabsContent={carousel} />

### Example 
  #### Responsive:

    ```CSS
    {
      "0": {
    	"items": 3
      },
      "640": {
        "items": 3
        },
      "992": {
    	"items": 3
      }
    }
    ```


  #### Line Settings:

  ```CSS
   {
 		"background": "#E9BE16",
 		"height": "5px",
 		"width": "120px",
		"margin": "17px  auto 50px"
  }
  ```

## Block
The block component is used in conjunction with carousel, this happens because the block component is a general component, if you want to know more about the block [click here](./block)

## Element
TThe Element component is used in conjunction with carousel, this happens because the Element component is a general component, if you want to know more about the Element [click here](./element)


