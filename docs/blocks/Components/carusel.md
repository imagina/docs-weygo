---
title: "Carousel"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentCarousel,carousel,contentBlock,Block,Element} from './schemes/schemeQblock.jsx';

## Carousel
<Tabs groupId="Carousel">
  <TabItem value="contentCarousel" label="content">
    <TableTabs tabsContent={contentCarousel} />
  </TabItem>
  <TabItem value="AttributeCarousel" label="Attribute">
    <TableTabs tabsContent={carousel} />
  </TabItem>  
</Tabs>


### Example 
  #### Responsive:

    ```CSS
    {
      "0": {
    	"items": 3
      },
      "640": {
        "items": 3
        },
      "992": {
    	"items": 3
      }
    }
    ```


  #### Line Settings:

  ```CSS
   {
 		"background": "#E9BE16",
 		"height": "5px",
 		"width": "120px",
		"margin": "17px  auto 50px"
  }
  ```

## Block
<Tabs groupId="Block">
  <TabItem value="contentBlock" label="content">
    <TableTabs tabsContent={contentBlock} />
  </TabItem>
  <TabItem value="AttributeBlock" label="Attribute">
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
<Tabs groupId="Element">
  <TabItem value="contentElement" label="content">
    The element content does not contain anything that affects the block
  </TabItem>
  <TabItem value="AttributeElement" label="Attribute">
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

