---
title: "Custom environment"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentEnvironment, Environment} from './schemes/schemeQblock.jsx';

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