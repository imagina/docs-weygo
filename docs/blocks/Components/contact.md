---
title: "Contact information"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contact,contentContact} from './schemes/schemeQblock.jsx';

This component is generally used in blocks, it is used to modify the characteristics of the block container

## content
<TableTabs tabsContent={contentContact} />

## Attribute
<TableTabs tabsContent={contact} />

### Example
#### Order of elements
```
{
    "phone": "order-0",
     "address": "order-2",
    "email": "order-1",
     "socialNetworks": "order-3"
}

```