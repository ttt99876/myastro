---
layout: ../../layouts/MarkdownPostLayout.astro
title: '我的第一篇博客'
pubDate: 2023-02-06
description: '博客的实践案例'
author: 'ttt'
image:
    url: 'https://astro.build/assets/blog/astro-1-release-update/cover.jpeg' 
    alt: 'The Astro logo with the word One.'
tags: ["astro", "blogging", "learning in public"]
---
<!-- # My First Blog Post -->

<!-- Published on: 2022-07-01 -->

欢迎大家能来看我的博客，这篇博客记录了我在学习如何搭建第一篇博客的实践案例

## 如何完成？

1. **搭建项目**: 第一步搭建一个astro项目（前提要懂astro语法知识和md文件规范）

2. **添加页面**: 页面统一写在 `src/pages/` 文件夹下，并且以.astro为后缀名.

3. **添加博客内容**: 博客内容统一放在`posts`文件夹下管理，以.md为后缀

## 完成需要的一些知识点

1. **组件components**:用于存放公共使用的部分，如头部，底部

2. **布局layouts**:用于统一页面的格式，如首页，而后的这篇博客使用的格式

3. **传参props**:便于组件之间共享数据

4. **接口api**:实现动态渲染数据

## 如何部署
需要借助静态托管工具

## 疑惑点

1. 如何在控制台--- ---里面的变量

2. 为什么api中的Astro.glob()能获取到url和title

