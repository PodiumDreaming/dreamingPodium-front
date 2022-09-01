/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useWindowDimensions, ScrollView, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {height} from '../config/globalStyles';

const source = {
  html: `
  <html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>제목 없음</title><style>
  /* cspell:disable-file */
  /* webkit printing magic: print all background colors */
  html {
    -webkit-print-color-adjust: exact;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  @media only screen {
    body {
      margin: 2em auto;
      max-width: 900px;
      color: rgb(55, 53, 47);
    }
  }
  
  body {
    line-height: 1.5;
    white-space: pre-wrap;
  }
  
  a,
  a.visited {
    color: inherit;
    text-decoration: underline;
  }
  
  .pdf-relative-link-path {
    font-size: 80%;
    color: #444;
  }
  
  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }
  
  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0.75em;
  }
  
  h1 {
    font-size: 1.875rem;
    margin-top: 1.875rem;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-top: 1.25rem;
  }
  
  .source {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1.5em;
    word-break: break-all;
  }
  
  .callout {
    border-radius: 3px;
    padding: 1rem;
  }
  
  figure {
    margin: 1.25em 0;
    page-break-inside: avoid;
  }
  
  figcaption {
    opacity: 0.5;
    font-size: 85%;
    margin-top: 0.5em;
  }
  
  mark {
    background-color: transparent;
  }
  
  .indented {
    padding-left: 1.5em;
  }
  
  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  }
  
  img {
    max-width: 100%;
  }
  
  @media only print {
    img {
      max-height: 100vh;
      object-fit: contain;
    }
  }
  
  @page {
    margin: 1in;
  }
  
  .collection-content {
    font-size: 0.875rem;
  }
  
  .column-list {
    display: flex;
    justify-content: space-between;
  }
  
  .column {
    padding: 0 1em;
  }
  
  .column:first-child {
    padding-left: 0;
  }
  
  .column:last-child {
    padding-right: 0;
  }
  
  .table_of_contents-item {
    display: block;
    font-size: 0.875rem;
    line-height: 1.3;
    padding: 0.125rem;
  }
  
  .table_of_contents-indent-1 {
    margin-left: 1.5rem;
  }
  
  .table_of_contents-indent-2 {
    margin-left: 3rem;
  }
  
  .table_of_contents-indent-3 {
    margin-left: 4.5rem;
  }
  
  .table_of_contents-link {
    text-decoration: none;
    opacity: 0.7;
    border-bottom: 1px solid rgba(55, 53, 47, 0.18);
  }
  
  table,
  th,
  td {
    border: 1px solid rgba(55, 53, 47, 0.09);
    border-collapse: collapse;
  }
  
  table {
    border-left: none;
    border-right: none;
  }
  
  th,
  td {
    font-weight: normal;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    min-height: 1.5em;
    text-align: left;
  }
  
  th {
    color: rgba(55, 53, 47, 0.6);
  }
  
  ol,
  ul {
    margin: 0;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
  }
  
  li > ol:first-child,
  li > ul:first-child {
    margin-block-start: 0.6em;
  }
  
  ul > li {
    list-style: disc;
  }
  
  ul.to-do-list {
    text-indent: -1.7em;
  }
  
  ul.to-do-list > li {
    list-style: none;
  }
  
  .to-do-children-checked {
    text-decoration: line-through;
    opacity: 0.375;
  }
  
  ul.toggle > li {
    list-style: none;
  }
  
  ul {
    padding-inline-start: 1.7em;
  }
  
  ul > li {
    padding-left: 0.1em;
  }
  
  ol {
    padding-inline-start: 1.6em;
  }
  
  ol > li {
    padding-left: 0.2em;
  }
  
  .mono ol {
    padding-inline-start: 2em;
  }
  
  .mono ol > li {
    text-indent: -0.4em;
  }
  
  .toggle {
    padding-inline-start: 0em;
    list-style-type: none;
  }
  
  /* Indent toggle children */
  .toggle > li > details {
    padding-left: 1.7em;
  }
  
  .toggle > li > details > summary {
    margin-left: -1.1em;
  }
  
  .selected-value {
    display: inline-block;
    padding: 0 0.5em;
    background: rgba(206, 205, 202, 0.5);
    border-radius: 3px;
    margin-right: 0.5em;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    white-space: nowrap;
  }
  
  .collection-title {
    display: inline-block;
    margin-right: 1em;
  }
  
  .simple-table {
    margin-top: 1em;
    font-size: 0.875rem;
  }
  
  .simple-table-header {
    background: rgb(247, 246, 243);
    color: black;
    font-weight: 500;
  }
  
  time {
    opacity: 0.5;
  }
  
  .icon {
    display: inline-block;
    max-width: 1.2em;
    max-height: 1.2em;
    text-decoration: none;
    vertical-align: text-bottom;
    margin-right: 0.5em;
  }
  
  img.icon {
    border-radius: 3px;
  }
  
  .user-icon {
    width: 1.5em;
    height: 1.5em;
    border-radius: 100%;
    margin-right: 0.5rem;
  }
  
  .user-icon-inner {
    font-size: 0.8em;
  }
  
  .text-icon {
    border: 1px solid #000;
    text-align: center;
  }
  
  .page-cover-image {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 30vh;
  }
  
  .page-header-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .page-header-icon-with-cover {
    margin-top: -0.72em;
    margin-left: 0.07em;
  }
  
  .page-header-icon img {
    border-radius: 3px;
  }
  
  .link-to-page {
    margin: 1em 0;
    padding: 0;
    border: none;
    font-weight: 500;
  }
  
  p > .user {
    opacity: 0.5;
  }
  
  td > .user,
  td > time {
    white-space: nowrap;
  }
  
  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 0.6em;
    vertical-align: middle;
  }
  
  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .image {
    border: none;
    margin: 1.5em 0;
    padding: 0;
    border-radius: 0;
    text-align: center;
  }
  
  .code,
  code {
    background: rgba(135, 131, 120, 0.15);
    border-radius: 3px;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 85%;
    tab-size: 2;
  }
  
  code {
    color: #eb5757;
  }
  
  .code {
    padding: 1.5em 1em;
  }
  
  .code-wrap {
    white-space: pre-wrap;
    word-break: break-all;
  }
  
  .code > code {
    background: none;
    padding: 0;
    font-size: 100%;
    color: inherit;
  }
  
  blockquote {
    font-size: 1.25em;
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid rgb(55, 53, 47);
  }
  
  .bookmark {
    text-decoration: none;
    max-height: 8em;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: stretch;
  }
  
  .bookmark-title {
    font-size: 0.85em;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.75em;
    white-space: nowrap;
  }
  
  .bookmark-text {
    display: flex;
    flex-direction: column;
  }
  
  .bookmark-info {
    flex: 4 1 180px;
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .bookmark-image {
    width: 33%;
    flex: 1 1 180px;
    display: block;
    position: relative;
    object-fit: cover;
    border-radius: 1px;
  }
  
  .bookmark-description {
    color: rgba(55, 53, 47, 0.6);
    font-size: 0.75em;
    overflow: hidden;
    max-height: 4.5em;
    word-break: break-word;
  }
  
  .bookmark-href {
    font-size: 0.75em;
    margin-top: 0.25em;
  }
  
  .sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
  .code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
  .serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
  .mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
  .pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
  .pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
  .pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
  .pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
  .pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
  .pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
  .pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
  .pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
  .pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
  .pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
  .pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
  .pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
  .pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
  .pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
  .pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
  .pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
  .highlight-default {
    color: rgba(55, 53, 47, 1);
  }
  .highlight-gray {
    color: rgba(120, 119, 116, 1);
    fill: rgba(145, 145, 142, 1);
  }
  .highlight-brown {
    color: rgba(159, 107, 83, 1);
    fill: rgba(187, 132, 108, 1);
  }
  .highlight-orange {
    color: rgba(217, 115, 13, 1);
    fill: rgba(215, 129, 58, 1);
  }
  .highlight-yellow {
    color: rgba(203, 145, 47, 1);
    fill: rgba(203, 148, 51, 1);
  }
  .highlight-teal {
    color: rgba(68, 131, 97, 1);
    fill: rgba(108, 155, 125, 1);
  }
  .highlight-blue {
    color: rgba(51, 126, 169, 1);
    fill: rgba(91, 151, 189, 1);
  }
  .highlight-purple {
    color: rgba(144, 101, 176, 1);
    fill: rgba(167, 130, 195, 1);
  }
  .highlight-pink {
    color: rgba(193, 76, 138, 1);
    fill: rgba(205, 116, 159, 1);
  }
  .highlight-red {
    color: rgba(212, 76, 71, 1);
    fill: rgba(225, 111, 100, 1);
  }
  .highlight-gray_background {
    background: rgba(241, 241, 239, 1);
  }
  .highlight-brown_background {
    background: rgba(244, 238, 238, 1);
  }
  .highlight-orange_background {
    background: rgba(251, 236, 221, 1);
  }
  .highlight-yellow_background {
    background: rgba(251, 243, 219, 1);
  }
  .highlight-teal_background {
    background: rgba(237, 243, 236, 1);
  }
  .highlight-blue_background {
    background: rgba(231, 243, 248, 1);
  }
  .highlight-purple_background {
    background: rgba(244, 240, 247, 0.8);
  }
  .highlight-pink_background {
    background: rgba(249, 238, 243, 0.8);
  }
  .highlight-red_background {
    background: rgba(253, 235, 236, 1);
  }
  .block-color-default {
    color: inherit;
    fill: inherit;
  }
  .block-color-gray {
    color: rgba(120, 119, 116, 1);
    fill: rgba(145, 145, 142, 1);
  }
  .block-color-brown {
    color: rgba(159, 107, 83, 1);
    fill: rgba(187, 132, 108, 1);
  }
  .block-color-orange {
    color: rgba(217, 115, 13, 1);
    fill: rgba(215, 129, 58, 1);
  }
  .block-color-yellow {
    color: rgba(203, 145, 47, 1);
    fill: rgba(203, 148, 51, 1);
  }
  .block-color-teal {
    color: rgba(68, 131, 97, 1);
    fill: rgba(108, 155, 125, 1);
  }
  .block-color-blue {
    color: rgba(51, 126, 169, 1);
    fill: rgba(91, 151, 189, 1);
  }
  .block-color-purple {
    color: rgba(144, 101, 176, 1);
    fill: rgba(167, 130, 195, 1);
  }
  .block-color-pink {
    color: rgba(193, 76, 138, 1);
    fill: rgba(205, 116, 159, 1);
  }
  .block-color-red {
    color: rgba(212, 76, 71, 1);
    fill: rgba(225, 111, 100, 1);
  }
  .block-color-gray_background {
    background: rgba(241, 241, 239, 1);
  }
  .block-color-brown_background {
    background: rgba(244, 238, 238, 1);
  }
  .block-color-orange_background {
    background: rgba(251, 236, 221, 1);
  }
  .block-color-yellow_background {
    background: rgba(251, 243, 219, 1);
  }
  .block-color-teal_background {
    background: rgba(237, 243, 236, 1);
  }
  .block-color-blue_background {
    background: rgba(231, 243, 248, 1);
  }
  .block-color-purple_background {
    background: rgba(244, 240, 247, 0.8);
  }
  .block-color-pink_background {
    background: rgba(249, 238, 243, 0.8);
  }
  .block-color-red_background {
    background: rgba(253, 235, 236, 1);
  }
  .select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
  .select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
  .select-value-color-green { background-color: rgba(219, 237, 219, 1); }
  .select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
  .select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
  .select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
  .select-value-color-red { background-color: rgba(255, 226, 221, 1); }
  .select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
  .select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
  
  .checkbox {
    display: inline-flex;
    vertical-align: text-bottom;
    width: 16;
    height: 16;
    background-size: 16px;
    margin-left: 2px;
    margin-right: 5px;
  }
  
  .checkbox-on {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
  }
  
  .checkbox-off {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
  }
    
  </style></head><body><article id="0779763e-4d2d-447b-80ae-40795eaa04d5" class="page sans"><header><h1 class="page-title"></h1></header><div class="page-body"><p id="d5ce998e-e158-4e2f-b74c-524caac3e15f" class="">
  </p><p id="884ab03c-9c11-44b2-b5aa-1b1276a526f1" class=""><strong>[</strong><strong>라잇</strong><strong>] </strong><strong>이용약관</strong></p><p id="22b8561e-3ab0-4deb-9eae-e2f2853721a5" class=""><strong>제</strong><strong>1</strong><strong>조</strong><strong>(</strong><strong>목적</strong><strong>)</strong></p><p id="f41f330b-1582-4ed3-b88c-1786a0c900dc" class="">라잇 서비스 이용약관은 드리밍포디움 (이하”회사”)이 모바일 기기를 통해 제공하는 모바일 어플리케이션 서비스 및 이에 부수하는 네트워크, 웹사이트, 기타 서비스(이하”서비스”)를 제공함에 있어, 회사와 이용자 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p><p id="fd09fca2-a6bf-4e94-b8fe-0ac4bbb07135" class=""><strong>제</strong><strong>2</strong><strong>조</strong><strong>(</strong><strong>정의</strong><strong>)</strong></p><ol type="1" id="f74a3a38-670a-477c-a5fb-668c967057e1" class="numbered-list" start="1"><li>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</li></ol><ul id="fbc34fe5-7f2a-4aea-9872-c022ca8b6e50" class="bulleted-list"><li style="list-style-type:disc">“회사”란, 서비스를 제공하는 주체를 말합니다.</li></ul><ul id="0eaae3aa-a88e-430c-9237-b14ad50f1784" class="bulleted-list"><li style="list-style-type:disc">“서비스”란, 회사가 제공하는 모든 서비스 및 기능을 말합니다.</li></ul><ul id="381a5022-6836-4122-bbc3-90c5ca0f88e8" class="bulleted-list"><li style="list-style-type:disc">“이용자”란, 이 약관에 따라 서비스를 이용하는 회원을 말합니다.</li></ul><ul id="5b45e857-8259-4acd-bdc9-3ad511bcaa14" class="bulleted-list"><li style="list-style-type:disc">“회원”이란, 서비스에 회원등록을 하고 서비스를 이용하는 자를 말합니다.</li></ul><ul id="faaef682-eb89-4bd8-b063-263f11b94bd9" class="bulleted-list"><li style="list-style-type:disc">“이용 기록”이란, 이용자가 서비스를 이용하면서 직접 생성한 훈련일지, 프로필정보 등을 말합니다.</li></ul><ul id="edacc885-e0ad-447e-bb63-c8ec6004c0b3" class="bulleted-list"><li style="list-style-type:disc">“로그 기록”이란, 이용자가 서비스를 이용하면서 자동으로 생성된 IP 주소, 접속시간 등을 말합니다.</li></ul><ul id="a57cd12b-4da6-40f8-93d6-dd6f0bee186a" class="bulleted-list"><li style="list-style-type:disc">“기기 정보”란, 이용자의 통신기기에서 수집된 운영체제 종류, ADID 등을 말합니다.</li></ul><ul id="6950a5bd-fa82-4fbe-b398-719bc2bdc526" class="bulleted-list"><li style="list-style-type:disc">“계정”이란, 이용계약을 통해 생성된 회원의 고유 아이디와 이에 수반하는 정보를 말합니다.</li></ul><ul id="64de41a4-b845-4a43-ba31-6b263b81ab4e" class="bulleted-list"><li style="list-style-type:disc">“서비스 내부 알림 수단”이란, 팝업, 알림, 공지사항, 내 정보 메뉴 등을 말합니다.</li></ul><ul id="3d2342a4-0beb-4c83-9d0e-ac1a4096e4bf" class="bulleted-list"><li style="list-style-type:disc">“관련법”이란, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법, 통신비밀보호법 등 관련 있는 국내 법령을 말합니다.</li></ul><ul id="01c67aea-b6e4-4f1c-a0af-03edbcaf9208" class="bulleted-list"><li style="list-style-type:disc">“트레이닝”이란, 이용자가 서비스를 이용하면서 직접 생성한 훈련에 대한 기록을 말합니다.</li></ul><ul id="f22a4914-670f-4967-b66b-62964a8fa967" class="bulleted-list"><li style="list-style-type:disc">“컨디셔닝”이란, 이용자가 서비스를 이용하면서 직접 생성한 자신의 기분상태 및 신체상태 기록을 말합니다.</li></ul><ul id="47492543-9c6d-4b2e-ab71-339c78fd3390" class="bulleted-list"><li style="list-style-type:disc">“부상”이란, 이용자가 서비스를 이용하면서 직접 생성한 자신의 부상상태 및 부상에 대한 기록을 말합니다.</li></ul><ol type="1" id="b1329dd8-412e-4e6e-9c8c-d34afb2cdad4" class="numbered-list" start="1"><li>제1항에서 정의되지 않은 약관 내 용어의 의미는 상관례 내지 일반적인 이용관행에 의합니다.</li></ol><p id="bbeebd13-c5df-4df9-a704-261ae08644dc" class=""><strong>제</strong><strong>3</strong><strong>조</strong><strong>(</strong><strong>약관</strong> <strong>등의</strong> <strong>명시와</strong> <strong>설명</strong> <strong>및</strong> <strong>개정</strong><strong>)</strong></p><ol type="1" id="93d8ced2-cd4f-4567-b723-fc43d264395c" class="numbered-list" start="1"><li>회사는 이 약관을 회원가입 화면 및 “내 정보” 메뉴 등에 게시합니다.</li></ol><ol type="1" id="8069b580-a469-4f44-af8c-e232caf931c0" class="numbered-list" start="2"><li>회사는 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관련법률을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li></ol><ol type="1" id="6fd1accc-9ea7-4a8b-a1db-1ea258da4512" class="numbered-list" start="3"><li>약관 개정 내용이 회원에게 불리할 경우, 적용일자 및 개정사유를 명시하여 현행 약관과 함께 “공지사항”에 최소 30일간 게시합니다.</li></ol><ol type="1" id="a0da5918-684d-4dec-a1a5-9771b4a4a521" class="numbered-list" start="4"><li>회원이 개정약관의 적용에 동의하지 않는 경우, 이용계약을 해지함으로써 거부 의사를 표시할 수 있습니다. 단, 30일 내에 거부 의사 표시를 하지 않을 경우 약관에 동의한 것으로 간주합니다.</li></ol><ol type="1" id="1dae5ce8-9b26-4b09-adba-583452dd35e4" class="numbered-list" start="5"><li>회원은 약관 일부분만을 동의 또는 거부할 수 없습니다.</li></ol><ol type="1" id="00f10c1b-1ac2-4da7-8536-da167f723934" class="numbered-list" start="6"><li>이 약관에 명시되지 않은 사항은 개인정보보호법 및 정보통신망법 기타 관련 법령의 규정에 따릅니다.</li></ol><p id="86fcaf70-c734-47c6-b01d-5810e9b496b4" class=""><strong>제</strong><strong>4</strong><strong>조</strong><strong>(</strong><strong>서비스의</strong> <strong>제공</strong><strong>)</strong></p><ol type="1" id="4d8035a9-4bb5-4345-b026-efd79d64924e" class="numbered-list" start="1"><li>회사는 다음 서비스를 제공합니다.</li></ol><ul id="dc6403bb-e483-4633-a1f4-dbe703215e65" class="bulleted-list"><li style="list-style-type:disc">훈련일지 작성 편의 서비스</li></ul><ul id="0d38e17e-14cb-4ea7-ad11-b33dd18a3c54" class="bulleted-list"><li style="list-style-type:disc">작성된 훈련일지 기반 리포팅 서비스</li></ul><ul id="26768371-ad3c-4bbb-9292-a3e09be1b43b" class="bulleted-list"><li style="list-style-type:disc">기타 회사가 정하는 서비스</li></ul><ol type="1" id="5dc11f95-afc5-4b2f-9243-e35644835e15" class="numbered-list" start="1"><li>회사는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.</li></ol><ol type="1" id="4834d060-55ff-412b-bd1c-d6d6c3bf79c7" class="numbered-list" start="2"><li>회사는 이용자의 개인정보 및 서비스 이용 기록에 따라 서비스 이용에 차이를 둘 수 있습니다.</li></ol><ol type="1" id="213e54f8-3f86-4dd9-a295-fe374da61a8f" class="numbered-list" start="3"><li>회사는 천재지변, 인터넷 장애, 경영 악화 등으로 인해 서비스를 더 이상 제공하기 어려울 경우, 서비스를 통보 없이 중단할 수 있습니다.</li></ol><ol type="1" id="08fafb60-b1ba-4fd3-b4b2-e4804e20d727" class="numbered-list" start="4"><li>회사는 제1항부터 전항까지와 다음 내용으로 인해 발생한 피해에 대해 어떠한 책임을 지지 않습니다.</li></ol><ul id="9b63f47c-eb54-4499-8e53-0375cfcd5218" class="bulleted-list"><li style="list-style-type:disc">이용자의 귀책사유 또는 회사의 귀책 사유가 아닌 사유로 발생한 이용자의 피해</li></ul><p id="b5325659-b5ed-4c66-9adb-4bbcd54a1fd3" class=""><strong>제</strong><strong>5</strong><strong>조</strong><strong>(</strong><strong>서비스</strong> <strong>이용계약의</strong> <strong>성립</strong><strong>)</strong></p><ol type="1" id="15b57f5f-9cd1-4140-ae85-048dcab1e00a" class="numbered-list" start="1"><li>만 7세 미만의 이용자는 서비스를 이용하거나 회원가입을 할 수 없으며, 그럼에도 불구하고 성립된 회원가입은 무효로 간주됩니다.</li></ol><ol type="1" id="9d81b375-7a19-405a-81b7-e6f8eb597ba0" class="numbered-list" start="2"><li>이름이 실명이 아닌 경우 및 등록 내용에 허위, 기재누락, 오기가 있는 경우, 본 이용약관 및 관련 법령 등을 위배하는 경우 등은 회사는 회원자격을 제한, 정지 또는 탈퇴 처리할 수 있습니다.</li></ol><ol type="1" id="3ae09437-4d48-402a-80fb-05cb981207e8" class="numbered-list" start="3"><li>회사와 회원의 서비스 이용계약은 서비스 내부의 회원가입 화면의 가입 양식에 따라 회원정보를 기입한 후 필수 약관에 동의한다는 의사표시를 한 비회원의 이용신청에 대하여, 서비스 화면에 이용승낙을 표시하는 방법 등으로 의사표시를 하면서 체결됩니다.</li></ol><ol type="1" id="32f9cccf-96e8-4ba2-805b-a4798637a400" class="numbered-list" start="4"><li>승낙은 신청순서에 따라 순차적으로 처리되며, 회원가입의 성립시기는 회원가입 화면의 가입 양식 신청을 제출한 시점으로 합니다.</li></ol><p id="06d41dd5-9581-47a2-940f-087ef8913884" class=""><strong>제</strong><strong>6</strong><strong>조</strong><strong>(</strong><strong>개인정보의</strong> <strong>관리</strong> <strong>및</strong> <strong>보호</strong><strong>)</strong></p><ol type="1" id="3a2d51ff-bcec-46ce-9290-5c99b508beab" class="numbered-list" start="1"><li>회원이 회사와 체결한 서비스 이용계약은 처음 이용계약을 체결한 본인에 한해 적용됩니다.</li></ol><ol type="1" id="8acb48e1-1616-4590-96f9-bbf736b989a6" class="numbered-list" start="2"><li>회사는 회원가입을 위한 이용자 정보 수집 시 회사측이 필요한 최소한의 정보를 수집하며, 이용자의 개인식별이 가능한 개인정보를 수집하는 경우에는 반드시 당해 이용자의 동의를 받습니다.</li></ol><ol type="1" id="f642c03a-6e62-41b1-9754-9aa105be932f" class="numbered-list" start="3"><li>회원의 계정 및 모바일 기기에 관한 관리 책임은 회원에게 있으며, 이를 타인이 이용하도록 하게 하여서는 안 됩니다. 모바일 기기의 관리 부실이나 타인에게 이용을 승낙함으로 인해 발생하는 손해에 대해서 회사는 책임을 지지 않습니다.</li></ol><ol type="1" id="aac6cd7d-49f7-411c-b557-44ac617e3711" class="numbered-list" start="4"><li>회원은 회원가입시 등록한 정보에 변동이 있을 경우, 즉시 “내 정보”메뉴 등을 이용하여 정보를 최신화해야 합니다.</li></ol><p id="7fa5a06f-0f03-48c8-8e20-a1ced95c29bb" class=""><strong>제</strong><strong>7</strong><strong>조</strong><strong>(</strong><strong>서비스</strong> <strong>이용계약의</strong> <strong>종료</strong><strong>)</strong></p><ol type="1" id="bf323daa-4ffc-4b6b-8ed5-ad2c76592028" class="numbered-list" start="1"><li>회원은 언제든지 본인의 계정으로 로그인한 뒤 서비스 내부의 “탈퇴하기”버튼을 누르는 방법으로 탈퇴를 요청할 수 있으며, 문의 창구를 통한 탈퇴 요청 등은 처리되지 않습니다. 회사는 해당 요청을 확인한 후 탈퇴를 처리합니다.</li></ol><ol type="1" id="3ba73dd0-9ee9-4079-9782-816bf6ec3a27" class="numbered-list" start="2"><li>탈퇴 처리가 완료되었더라도, 회원이 게시한 훈련일지 게시물은 회사의 데이터에서 삭제되지 않습니다.</li></ol><ol type="1" id="dc3c0dbc-f924-4619-9bbc-cd6eea52d7e6" class="numbered-list" start="3"><li>회사는 제1항부터 전항까지로 인해 발생한 피해에 대해 어떠한 책임도 지지 않습니다.</li></ol><p id="db5ff0f5-2110-4da7-ba19-89ad65df6d0a" class=""><strong>제</strong><strong>8</strong><strong>조</strong><strong>(</strong><strong>회원에</strong> <strong>대한</strong> <strong>통보</strong><strong>)</strong></p><ol type="1" id="6490aaff-ec7e-4a2b-a7e3-3a6a14414564" class="numbered-list" start="1"><li>회사가 회원에 대한 통보를 하는 경우, 서비스 내부 알림 수단과 회원의 연락처를 이용합니다.</li></ol><ol type="1" id="ac4db618-6707-413e-981f-c1149f1e31e0" class="numbered-list" start="2"><li>회사는 다수의 회원에 대한 통보를 할 경우 공지사항 등에 게시함으로써 개별 통보에 갈음할 수 있습니다.</li></ol><ol type="1" id="e1d37358-cecf-4868-9db8-5e244513c2cc" class="numbered-list" start="3"><li>회원이 30일 이내에 의사 표시를 하지 않을 경우, 통보 내용에 대해 동의한 것으로 간주합니다.</li></ol><p id="f8ff1e34-a3b7-48d9-b64e-017cb53a34e6" class=""><strong>제</strong><strong>9</strong><strong>조</strong><strong>(</strong><strong>지식재산권의</strong> <strong>귀속</strong><strong>)</strong></p><ol type="1" id="2f0ea2b3-eacd-48e5-9da4-be9f2d3912a4" class="numbered-list" start="1"><li>회사는 유용하고 편리한 서비스를 제공하기 위해, 2021년부터 12월 1일부터 서비스 및 서비스 내부의 기능(부상리포트 등)의 체계를 직접 설계 및 운영하고 있는 데이터베이스 제작자에 해당합니다. 회사는 저작권법에 따라 데이터베이스 제작자의 복제권 및 전송권을 포함한 데이터베이스 전부에 대한 권리를 가지고 있으며, 이는 법률에 따라 보호를 받는 대상입니다. 그러므로 이용자는 데이터베이스 제작자인 회사의 승인 없이 데이터베이스의 전부 또는 일부를 복제⋅전송 등의 방법(편집, 공표, 공연, 배포, 방송, 2차적 저작물 작성 등을 포함합니다. 이하 같습니다)을 이용할 수 없습니다.</li></ol><ol type="1" id="f4450da2-7220-40f3-ac61-b2cb8cb6b701" class="numbered-list" start="2"><li>회원은 회사가 제공하는 서비스를 이용하여 얻은 정보 중에서 회사 또는 제공업체에 지식재산권이 귀속된 정보를 회사 또는 제공업체의 사전 동의 없이 복제⋅전송 등의 방법으로 이용하거나 타인에게 이용하게 하여서는 안 됩니다.</li></ol><ol type="1" id="6481f59d-848f-4f8a-9b68-d6c6db69be96" class="numbered-list" start="3"><li>회사가 작성한 게시물에 대한 권리는 회사에게 귀속되며, 회원이 작성한 게시물에 대한 권리는 회원에게 귀속됩니다. 단, 회사는 서비스의 운영, 확장, 홍보 등의 필요한 목적으로 회원의 저작물을 합리적이고 필요한 범위 내에서 별도의 허락 없이 수정하여 무상으로 사용하거나 제휴사에게 제공할 수 있습니다. 이 경우, 회원의 개인정보는 제공하지 않습니다.</li></ol><ol type="1" id="d101691b-1c08-4ef3-b032-0f0baf132179" class="numbered-list" start="4"><li>회사는 전항 이외의 방법으로 회원의 게시물을 이용할 경우, 서비스 내부 알림 수단과 회원의 연락처를 이용하여 회원의 동의를 받아야 합니다.</li></ol><p id="f6ffb77a-09c6-476b-94ea-9bb0cdd09e63" class=""><strong>제</strong><strong>10</strong><strong>조</strong><strong>(</strong><strong>광고의</strong> <strong>게재</strong> <strong>및</strong> <strong>발신</strong><strong>)</strong></p><ol type="1" id="dffc485a-ffbf-4795-a91c-d79b9431558b" class="numbered-list" start="1"><li>회사는 서비스의 제공을 위해 서비스 내부에 광고를 게재할 수 있습니다.</li></ol><ol type="1" id="af8b5d83-ec76-41ba-80bd-addc7db1d1d8" class="numbered-list" start="2"><li>회사는 회원이 광고성 정보 수신에 동의할 경우, 서비스 내부 알림 수단과 회원의 연락처를 이용하여 광고성 정보를 발신할 수 있습니다.</li></ol><ol type="1" id="bd28ecd7-e556-4848-a88a-ed77893ca56e" class="numbered-list" start="3"><li>회사가 제공하는 서비스 중의 배너 또는 링크 등을 통해 타인이 제공하는 광고나 서비스에 연결될 수 있습니다. 위에 따라 타인이 제공하는 광고나 서비스에 연결될 경우 해당 영역에서 제공하는 서비스는 회사의 서비스 영역이 아니므로 회사가 신뢰성, 안정성 등을 보장하지 않으며, 그로 인한 회원의 손해에 대하여도 회사는 책임을 지지 않습니다. 다만, 회사가 고의 또는 중과실로 손해의 발생을 용이하게 하거나 손해 방지를 위한 조치를 취하지 아니한 경우에는 그러하지 아니합니다.</li></ol><ol type="1" id="f8023f44-01d2-44e8-97d7-24e787260591" class="numbered-list" start="4"><li>회사는 광고 게재 및 동의된 광고성 정보의 발신으로 인해 발생한 피해에 대하여 어떠한 책임도 지지 않습니다.</li></ol><p id="3c04826b-14b5-4418-abe3-455bf70be979" class=""><strong>제</strong><strong>11</strong><strong>조</strong><strong>(</strong><strong>손해배상</strong> <strong>및</strong> <strong>준거법</strong><strong>)</strong></p><ol type="1" id="7f2ae2a1-64df-4b28-8726-16248e0f6d8b" class="numbered-list" start="1"><li>회사 또는 회원은 본 약관을 위반하여 상대방에게 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다. 다만, 고의 또는 중대한 과실이 없는 경우에는 그러하지 아니 합니다</li></ol><ol type="1" id="20bc2624-ac5b-4350-9f9f-0935b25dcd1f" class="numbered-list" start="2"><li>회사가 개별서비스 제공자와 제휴 계약을 맺고 회원에게 개별서비스를 제공하는 경우에 회원이 이 개별서비스 이용약관에 동의를 한 뒤 개별서비스 제공자의 고의 또는 과실로 인해 회원에게 손해가 발생한 경우에 그 손해에 대해서는 개별서비스 제공자가 책임을 집니다.</li></ol><ol type="1" id="61ad7212-052f-4a25-9935-c1cfb7541361" class="numbered-list" start="3"><li>이 약관은 대한민국 법률에 따라 규율되고 해석됩니다. 회사와 회원 간에 발생한 분쟁으로 소송이 제기되는 경우에는 서울중앙지방법원을 제1심 전속적 관할 법원으로 합니다.</li></ol><p id="31a40c5c-a609-4573-9722-75aff0fa67ba" class=""><strong>제</strong><strong>12</strong><strong>조</strong> <strong>(</strong><strong>기타</strong><strong>)</strong></p><ol type="1" id="a5b9d745-b75b-432f-bf76-8691e3d423a9" class="numbered-list" start="1"><li>이 약관은 2021년 11월에 최신화 되었습니다.</li></ol><ol type="1" id="5c3cbad4-9cbc-4235-9c9d-18d06c0a11c4" class="numbered-list" start="2"><li>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관련법률 또는 상관례에 따릅니다.</li></ol><ol type="1" id="713db57e-f723-4a3d-9e76-0c7408d1b169" class="numbered-list" start="3"><li>이 약관에도 불구하고 다른 약관이나 서비스 이용 중 안내 분구로 달리 정함이 있는 경우에는 해당 내용을 우선으로 합니다.</li></ol><p id="1a2d18fe-55b4-4571-95f2-4bfc8b4a004f" class=""><strong>부칙</strong></p><p id="e20ac0e6-c839-4326-8738-ca76d46fc193" class=""><strong>(</strong><strong>시행일</strong><strong>) </strong><strong>이</strong> <strong>약관은</strong><strong> 2021</strong><strong>년</strong><strong> 12</strong><strong>월</strong><strong> 1</strong><strong>일부터</strong> <strong>시행합니다</strong><strong>.</strong></p></div></article></body></html>`,
};

export default function TermsScreen(props) {
  const {width} = useWindowDimensions();
  return (
    <ScrollView
      style={{
        position: 'absolute',
        marginVertical: height * 200,
        width: '75%',
        height: height * 450,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#eeeeee',
        flex: 1,
        zIndex: 9,
      }}>
      <View
        style={{
          padding: 10,
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <RenderHtml contentWidth={width} source={source} />
      </View>
    </ScrollView>
  );
}
