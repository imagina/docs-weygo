---
title: "Custom environment"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentEnvironment, Environment} from './schemes/schemeQblock.jsx';

This component is unique where it is used in a single type of block called Custom environment, it is used to modify the characteristics of the Custom environment block

## Content
<TableTabs tabsContent={contentEnvironment} />

## attribute
<TableTabs tabsContent={Environment} />

#### Order of elements
```
{
  "video": "order-0",
  "image": "order-1",
  "title": "order-2",
  "subtitle": "order-3",
  "summary": "order-4",
  "description": "order-5",
  "buttom": "order-6"
}

```

#### Custom button configuration
```
{
  "color": "var(--white)",
  "background": "var(--primary)",
  "border": "0",
  "transition": ".4s"
}
```

## Block
The block component is used in conjunction with carousel, this happens because the block component is a general component, if you want to know more about the block [click here](./block)