---
title: "Slider OWL"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {sliderOWL} from './schemes/schemeComponentIsite.jsx';

This component is unique in that it is used in a single type of block called SliderOWL, it is used to modify the unique characteristics of the sliders being used, it is responsible for their visualization and their form of repetition.

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

## Block
The block component is used in conjunction with Slider OWL, this happens because the block component is a general component, if you want to know more about the block [click here](./block)

## Element
TThe Element component is used in conjunction with Slider OWL, this happens because the Element component is a general component, if you want to know more about the Element [click here](./element)