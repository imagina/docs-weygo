---
title: "map"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentMap,map} from './schemes/schemeQblock.jsx';

This component is unique where it is used in a single type of block called map, it is used to modify the characteristics of the map block

## content
<TableTabs tabsContent={contentMap} />

## Attribute
<TableTabs tabsContent={map} />

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