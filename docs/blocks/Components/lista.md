---
title: "List"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentLista,lista} from './schemes/schemeComponentIsite';

This component is unique where it is used in a single type of block called List, it is used to modify the characteristics of the List block

## content
<TableTabs tabsContent={contentLista} />

## Attribute
<TableTabs tabsContent={lista} />

## Example
#### Line configuration
```CSS

{
  "background": "var(--primary)",
  "height": "2px",
  "width": "10%",
  "margin": "0 auto"
}

```

## Block
The block component is used in conjunction with carousel, this happens because the block component is a general component, if you want to know more about the block [click here](./block)

## Element
TThe Element component is used in conjunction with carousel, this happens because the Element component is a general component, if you want to know more about the Element [click here](./element)
