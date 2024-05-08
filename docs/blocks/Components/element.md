---
title: "Element"
---

import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentCarousel,carousel,contentBlock,Block,Element} from './schemes/schemeQblock.jsx';

## content
The element content does not contain anything that affects the block

## Attribute
<TableTabs tabsContent={Element} />

### Example of element

- General:

#### Order of elements

```CSS
{
 			 "photo": "order-0",
  "title": "order-1",
  "date": "order-2",
  "categoryTitle": "order-3",
  "summary": "order-4",
  "viewMoreButton": "order-5"
}

```

- Button:

#### Custom button configuration

```CSS
{
  "color": "var(--primary)",
  "background": "var(--white)",
  "border": "0",
  "boxShadow": "none",
  "transition": ".4s",
  "borderRadius": "10px",
  "colorHover": "var(--dark)",
  "backgroundHover": "var(--secondary)",
  "borderHover": "0",
  "boxShadowHover": "none"
}
```

