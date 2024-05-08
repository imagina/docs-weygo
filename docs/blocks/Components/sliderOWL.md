---
title: "Slider OWL"
---

import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {sliderOWL,Block,Element} from './schemes/schemeQblock.jsx';

## content
The element content does not contain anything that affects the block

## attribute
<TableTabs tabsContent={sliderOWL} />

### Example Slier OWL
#### Responsive
```CSS
[
  {
    "items": 1
  }
]
```
#### Nav text
```HTML
[
  "<i class='fa fa-angle-left fa-2x text-white'></i>",
  "<i class='fa fa-2x fa-angle-right text-white'></i>"
]
```
