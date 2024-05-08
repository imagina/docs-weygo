---
title: "Slider OWL"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {sliderOWL,Block,Element} from './schemes/schemeQblock.jsx';

## Slider OWL
<Tabs groupId="SliderOWL">
    <TabItem value="attributeSliderOWL" label="attribute">
        <TableTabs tabsContent={sliderOWL} />
    </TabItem>
    <TabItem value="contentSliderOWL" label="content">
        This content unfortunately has no function
        </TabItem>
</Tabs>

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
<Tabs groupId="Bloque">
    <TabItem value="attributeBloque" label="General">
        <TableTabs tabsContent={Block} />
    </TabItem>
</Tabs>

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


## Element
<Tabs groupId="Elemento">
    <TabItem value="attributeElemento" label="General">
        <TableTabs tabsContent={Element} />
    </TabItem>
</Tabs>

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

