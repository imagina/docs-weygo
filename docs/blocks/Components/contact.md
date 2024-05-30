---
title: "Contact information"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contact,contentContact} from './schemes/schemeComponentIsite';

This component is unique where it is used in a single type of block called Contact information, it is used to modify the characteristics of the Contact information block

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

## Block
The block component is used in conjunction with carousel, this happens because the block component is a general component, if you want to know more about the block [click here](./block)