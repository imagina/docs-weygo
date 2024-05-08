---
title: "Block"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentBlock,Block} from './schemes/schemeQblock.jsx';

This component is generally used in blocks, it is used to modify the characteristics of the block container

## content
<TableTabs tabsContent={contentBlock} />

## Attribute
<TableTabs tabsContent={Block} />

### Example of block 
  #### Background options:

  ```CSS
  {
    "position": "center",
    "size": "cover",
    "repeat": "no-repeat",
    "color": null,
    "attachment": null
  }
 ``` 

  #### Custom button configuration:

```CSS
  {
    "color": "var(--white)",
    "background": "var(--primary)",
    "border": "0",
    "transition": ".4s"
  }
```


