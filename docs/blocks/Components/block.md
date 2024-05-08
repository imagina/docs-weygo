---
title: "Block"
---

import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentCarousel,carousel,contentBlock,Block,Element} from './schemes/schemeQblock.jsx';

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


