---
title: "Carousel"
---

import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentCarousel,carousel,contentBlock,Block,Element} from './schemes/schemeQblock.jsx';

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


