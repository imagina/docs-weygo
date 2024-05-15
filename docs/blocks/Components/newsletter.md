---
title: "Newsletter"
---

import {TableTabs} from '@site/src/components/table/table.jsx';
import {contentNews,news} from './schemes/schemeQblock.jsx';

This component is unique where it is used in a single type of block called Newsletter, it is used to modify the characteristics of the Newsletter.

## content
<TableTabs tabsContent={contentNews} />

## attribute
<TableTabs tabsContent={news} />

## Block
The block component is used in conjunction with carousel, this happens because the block component is a general component, if you want to know more about the block [click here](./block)