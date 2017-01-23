<style>
    html, body, div, h1, h2, h3, h4, h5, h6, hr,
    p, blockquote,dl, dt, dd, ul, ol, li, pre, form,
    fieldset, object, code, legend, button, input, textarea, label, th, td, a, img {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    body, input, textarea {
        font: 12px/1.5 Tahoma, '\5FAE\8F6F\96C5\9ED1', 'Microsoft Yahei', "hiragino sans gb", Helvetica, Arial, "\5b8b\4f53", 'sans-serif';
        color: #333;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        font-size: 100%;
    }
    ul, ol {
        list-style: none;
    }
    fieldset, img {
        border: 0 none;
    }
    address, caption, cite, code, dfn, em, i, th, var, optgroup {
        font-style: normal;
        font-weight: normal;
    }
    abbr, acronym {
        border: 0;
        font-variant: normal;
    }
    input, button, textarea, select, optgroup, option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }
    code, kbd, samp, tt {
        font-size: 100%;
    }
    input, button, textarea, select {
        *font-size: 100%;
        outline: none;
    }
    textarea {
        resize: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    html, body {
        height: 100%;
        overflow: hidden;
    }
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar:horizontal {
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #ccc;
    }
    .app .ui-select__input {
        color: #5e6d82;
        font-size: 14px;
        border-radius: 0;
        box-sizing: border-box;
        border: 1px solid #9ee9f7;
    }
    .app .ui-select__input:hover {
        border: 1px solid #9ee9f7;
    }
    .clearfix:before, .clearfix:after {
        content: "";
        display: table;
    }
    .clearfix:after {
        clear: both;
    }
    .clearfix {
        clear: both;
        *zoom: 1;
    }
    .hide {
        display: none;
    }
    .layout__1,
    .layout__2,
    .layout__3,
    .layout__4 {
        position: relative;
        float: left;
        width: 100%;
        height: 100px;
        outline: 1px dashed #9ee9f7;
    }
    .layout__2 {
        width: 50%;
    }
    .layout__3 {
        width: 33.33333333%;
    }
    .layout__4 {
        width: 25%;
    }
    .outline--hide {
        outline-width: 0;
    }
    .layout__2--horizontal {
        width: 100%;
        height: 50px;
    }
    .layout__resize--vertical {
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        cursor: ew-resize;
        border-left: 1px dashed #9ee9f7;
    }
    .layout__resize--horizontal {
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 1px;
        cursor: ns-resize;
        border-bottom: 1px dashed #9ee9f7;
    }
    .layout__resize--gap25 {
        left: 25%;
    }
    .layout__resize--gap50 {
        left: 50%;
    }
    .layout__resize--gap75 {
        left: 75%;
    }
    .layout__resize--gap33 {
        left: 33.33333333%;
    }
    .layout__resize--gap66 {
        left: 66.66666666%;
    }
    .layout__resize--gap100 {
        left: 100%;
    }
    .layout__resize--horizontal-gap50 {
        top: 50%;
        bottom: auto;
    }
</style>
<template>
    <router-view></router-view>
</template>