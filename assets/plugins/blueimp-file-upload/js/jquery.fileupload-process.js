<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8" />
<title>SeanTheme</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="Color Admin, Bootstrap Template, Laravel Bootstrap Template, Infinite Admin, Apple Design, Source Admin, Admin Template, E-commerce Template, Angular JS Bootstrap Template, Google Concept Design, Material Concept Design, Apple Concept Design, Facebook Concept Design, Transparent Concept Design" name="description" />
<meta content="SeanTheme" name="author" />

<style type="text/css">@font-face {font-family:Raleway;font-style:normal;font-weight:800;src:url(/cf-fonts/s/raleway/5.0.16/vietnamese/800/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Raleway;font-style:normal;font-weight:800;src:url(/cf-fonts/s/raleway/5.0.16/latin/800/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Raleway;font-style:normal;font-weight:800;src:url(/cf-fonts/s/raleway/5.0.16/cyrillic/800/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Raleway;font-style:normal;font-weight:800;src:url(/cf-fonts/s/raleway/5.0.16/latin-ext/800/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Raleway;font-style:normal;font-weight:800;src:url(/cf-fonts/s/raleway/5.0.16/cyrillic-ext/800/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}</style>
<link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" rel="stylesheet" />

</head>
<body>
<style type="text/css">
		body, html {
			height: 100%;
		}
		body {
			-webkit-font-smoothing: antialiased;
		}
		.header {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			padding: 25px 50px;
			z-index: 1020;
			text-align: left;
		}
		body a:focus,
		body a:active {
			outline: none;
		}
		.logo {
			font-size: 19px;
			font-weight: bold;
			color: #fff;
		}
		.footer {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 25px 50px 20px;
			font-size: 10px;
			color: rgba(255,255,255,0.5);
			font-weight: 600;
			z-index: 1020;
			text-align: left;
		}
		
		.content {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: -webkit-linear-gradient(top,#14141a,#505459);
		}
		
		.caret {
			display: inline-block;
			width: 0;
			height: 0;
			vertical-align: middle;
			border-top: 5px dashed;
			border-right: 5px solid transparent;
			border-left: 5px solid transparent;
			margin-left: 2px;
		}
		
		.dropdown-menu {
			border: none;
			box-shadow: 0 3px 12px rgba(0, 0, 0, .1);
    	margin-top: 10px;
    	z-index: 9999 !important;
		}
		.dropdown-menu .dropdown-item {
			padding: 10px 25px 10px 15px;
		}
		.dropdown-menu .dropdown-item .info {
			padding-left: 15px;
		}
		.dropdown-menu .dropdown-item .icon {
			width: 45px;
			height: 30px;
		}
		.dropdown-menu .dropdown-item .icon img {
			max-width: 100%;
			max-height: 100%;
		}
		.dropdown-menu .dropdown-item .title {
			display: block;
			font-size: 14px;
			font-weight: 500;
		}
		.dropdown-menu .dropdown-item .version {
			position: relative;
			display: block;
			float: none;
			background: none;
			margin: 0;
			top: 0;
			left: 0;
			padding: 0;
			font-size: 13px;
			opacity: .5;
			color: #000;
		}
	</style>
<style type="text/css">
		.slider {
			opacity: 0;
			-webkit-transition: opacity .2s ease-in;
			-moz-transition: opacity .2s ease-in;
			transition: opacity .2s ease-in;
		}
		.slider.slick-initialized {
			opacity: 1;
		}
		.content > .slider,
		.slider-content,
		.slick-track,
		.slick-list {
			margin: 0;
			height: 100%;
		}
		.slick-slide {
			position: relative;
			z-index: 1020;
		}
		.slider-info:focus,
		.slider-content:focus,
		.slick-slide:focus {
			outline: none !important;
		}
		.slider-info,
		.slider-content {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1020;
		}
		.slider-info-content {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 8% 0;
			text-align: center;
		}
		.slider-info-content h2 {
			font-size: 52px;
			line-height: 64px;
			color: rgba(255,255,255,0.95);
			text-align: center;
			font-weight: 200;
			letter-spacing: 2px;
			margin-bottom: 3px;
		}
		.slider-info-content h2 b {
			font-weight: bold;
		}
		.slider-info-content .version {
			position: absolute;
			margin-top: -20px;
			margin-left: -30px;
			font-size: 14px;
			line-height: 20px;
			padding: 5px 10px;
			font-weight: 600;
			border-radius: 50px;
			background: rgba(255,255,255,0.25);
			color: #fff;
			letter-spacing: 0px;
		}
		.slider-info-content p {
			font-size: 18px;
			color: rgba(255,255,255,0.95);
			letter-spacing: 1.5px;
		}
	</style>
<style type="text/css">
		.feature-list {
			list-style-type: none;
			margin: 0 auto;
			padding: 0 30px;
			max-width: 1280px;
		}
		.feature-list > li {
			display: inline-block;
		}
		.feature-list > li > span {
			font-size: 12px;
			color: rgba(255, 255, 255, 0.5);
			padding: 5px 10px;
			border-radius: 50px;
			border: 2px solid rgba(255,255,255,0.25);
			font-weight: bold;
		}
		.btn-list {
			margin-top: 45px;
		}
		.btn-list .btn {
			width: 150px;
			border-radius: 40px;
			font-size: 12px;
			font-weight: 700;
			line-height: 24px;
			padding: 8px 20px;
			text-align: center;
			text-transform: uppercase;
		}
		.btn-list .btn + .btn {
			margin-left: 6px;
		}
		.btn-list .btn.btn-default {
			color: #fff;
			background: rgba(255,255,255,0.25);
		}
		.btn-list .btn.btn-default:hover,
		.btn-list .btn.btn-default:focus {
			background: rgba(255,255,255,0.35);
			box-shadow: none;
		}
	</style>
<style type="text/css">
		.color-admin .slider-cover-bg {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1020;
		}
		.color-admin .slider-cover-bg img {
			width: 20%;
			float: left;
			box-shadow: 0 20px 20px 20px rgba(0,0,0,0.25);
		}
		.color-admin .slider-cover-bg img.first {
			width: 40%;
			position: absolute;
			left: 50%;
			margin-left: -20%;
			z-index: 10;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.second {
			width: 35%;
			position: absolute;
			left: 50%;
			margin-left: -25%;
			z-index: 9;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.third {
			width: 30%;
			position: absolute;
			left: 50%;
			margin-left: -30%;
			z-index: 8;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.fourth {
			width: 25%;
			position: absolute;
			left: 50%;
			margin-left: -35%;
			z-index: 7;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.fifth {
			width: 35%;
			position: absolute;
			right: 50%;
			margin-right: -25%;
			z-index: 9;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.sixth {
			width: 30%;
			position: absolute;
			right: 50%;
			margin-right: -30%;
			z-index: 8;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.seventh {
			width: 25%;
			position: absolute;
			right: 50%;
			margin-right: -35%;
			z-index: 7;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.ninth {
			width: 20%;
			position: absolute;
			left: 50%;
			margin-left: -40%;
			z-index: 6;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.ten {
			width: 15%;
			position: absolute;
			left: 50%;
			margin-left: -45%;
			z-index: 5;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.eleven {
			width: 15%;
			position: absolute;
			right: 50%;
			margin-right: -45%;
			z-index: 5;
			bottom: 0;
		}
		.color-admin .slider-cover-bg img.eight {
			width: 20%;
			position: absolute;
			right: 50%;
			margin-right: -40%;
			z-index: 6;
			bottom: 0;
		}
		.color-admin .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.color-admin .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.75) 50%, rgba(0,0,0,0.8) 100%);
			opacity: 0.88;
		}
		.css-html5 {
			position: absolute;
			top: 25px;
			right: 50px;
			width: 54px !important;
			z-index: 1020;
		}
		.tech-logo {
			text-align: center;
			margin-top: 10px;
		}
		.tech-logo img {
			display: inline-block;
			height: 18px;
			margin: 0 10px;
		}
	</style>
<style type="text/css">
		.infinite-admin .slider-cover-bg {
			margin-top: 30px;
		}
		.infinite-admin .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.infinite-admin .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-infinite-admin.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.infinite-admin .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.75) 50%, rgba(0,0,0,0.8) 100%);
			opacity: 0.88;
		}
	</style>
<style type="text/css">
		.admetro .slider-cover-bg {
			margin-top: 30px;
		}
		.admetro .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.admetro .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-admetro.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.admetro .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.75) 50%, rgba(0,0,0,0.8) 100%);
			opacity: 0.88;
		}
	</style>
<style type="text/css">
		.studio .slider-cover-bg {
			margin-top: 30px;
		}
		.studio .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.studio .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-studio.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.studio .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.75) 50%, rgba(0,0,0,0.8) 100%);
			opacity: 0.88;
		}
	</style>
<style type="text/css">
		.droplet .slider-cover-bg {
			margin-top: 30px;
		}
		.droplet .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.droplet .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-droplet.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.droplet .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0,0,0,0.1);
			opacity: 1;
		}
	</style>
<style type="text/css">
		.hud .slider-cover-bg {
			margin-top: 30px;
		}
		.hud .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.hud .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-hud.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.hud .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,.9) 0%, rgba(25,25,25,0.85) 50%, rgba(0,0,0,.9) 100%);
			opacity: 1;
		}
	</style>
<style type="text/css">
		.quantum .slider-cover-bg {
			margin-top: 30px;
		}
		.quantum .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.quantum .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-quantum.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.quantum .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,.9) 0%, rgba(25,25,25,0.85) 50%, rgba(0,0,0,.9) 100%);
			background: none;
			opacity: 1;
		}
	</style>
<style type="text/css">
		.source-admin .slider-cover-bg {
			margin-top: 30px;
		}
		.source-admin .slider-cover-bg img.main {
			width: 60%;
			margin: 0 auto;
		}
		.source-admin .slider-cover {
			position: absolute;
			background-image: url(/assets/img/cover-source-admin.jpg);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}
		.source-admin .slider-cover:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.75) 50%, rgba(0,0,0,0.8) 100%);
			opacity: 0.88;
		}
	</style>
<style type="text/css">
		.slider-content {
			overflow: hidden;
		}
		.slick-prev:before, .slick-next:before {
			display: none;
		}
		.slick-next,
		.slick-prev {
			position: fixed;
			top: 50%;
			right: 80px;
			line-height: 80px;
			width: 80px;
			height: 80px;
			text-align: center;
			margin-top: -40px;
			color: rgba(255,255,255,0.25);
			-webkit-transition: all .2s ease-in;
			-moz-transition: all .2s ease-in;
			transition: all .2s ease-in;
			z-index: 1020;
		}
		.slick-prev {
			right: auto;
			left: 80px;
		}
		.slick-next:hover,
		.slick-next:focus,
		.slick-next:active,
		.slick-prev:hover,
		.slick-prev:focus,
		.slick-prev:active {
			outline: none;
			color: rgba(255,255,255,0.25);
		}
		.slick-next:hover,
		.slick-prev:hover {
			color: rgba(255,255,255,0.75);
		}
		.slick-next i,
		.slick-prev i {
			font-size: 36px;
			line-height: 80px;
			width: 80px;
		}
	</style>
<style type="text/css">
		.feature-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.feature-list > li {
			margin-left: 2px;
			margin-right: 2px;
			margin-bottom: 4px;
			display: flex;
		}
		.feature-list > li > span {
			padding-top: 3px;
			padding-bottom: 3px;
		}
		@media (min-width: 1024px) and (max-width: 1280px) {
			.slider-info-content {
				padding-top: 140px;
				padding-bottom: 140px;
			}
		}
		@media (min-width: 768px) and (max-width: 1024px) {
			.slider-info-content {
				padding-top: 200px;
				padding-bottom: 200px;
			}
		}
		@media (max-width: 1024px) {
			.feature-list > li > span {
				display: block;
				margin-bottom: 5px;
				font-size: 10px;
			}
		}
		@media (max-width: 768px) and (min-height: 1024px) {
			.color-admin .slider-cover-bg {
				width: 1440px;
				left: 50%;
				margin-left: -720px;
			}
		}
		@media (max-width: 767px) {
			.slider-info-content {
				padding-top: 140px;
				padding-bottom: 100px;
			}
			.header,
			.footer {
				padding: 20px 30px;
			}
			.css-html5 {
				top: 20px;
				right: 30px;
			}
			.slider-info-content h2 {
				font-size: 36px;
				line-height: 50px;
				letter-spacing: 1px;
			}
			.slider-info-content p {
				font-size: 14px;
				letter-spacing: 0.5px;
			}
			.slider-info-content .version {
				padding: 2px 10px;
			}
			.btn-list .btn {
				width: 140px;
				padding: 6px 20px;
			}
			.btn-list {
				margin-top: 30px;
			}
			.color-admin .slider-cover-bg {
				width: 768px;
				margin-left: -384px;
				left: 50%;
			}
			.slider-content {
				overflow: hidden;
			}
			
			.slick-next {
				right: 0;
				width: 60px;
				height: 60px;
				line-height: 60px;
				margin-top: -30px;
			}
			
			.slick-next i,
			.slick-prev i {
				font-size: 24px;
				line-height: 60px;
			}
			.slick-prev {
				width: 60px;
				height: 60px;
				line-height: 60px;
				margin-top: -30px;
				left: 0;
			}
		}
	</style>
<div class="content">
<section class="center slider hide">
<div class="color-admin">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Color</b> Admin <span class="version">v5.3.3</span></h2>
<p>6 Admin Theme + 5 Frontend Theme</p>
<ul class="feature-list">
<li><span>GULP</span></li>
<li><span>LARAVEL</span></li>
<li><span>VUE.JS</span></li>
<li><span>REACT.JS</span></li>
<li><span>ANGULAR 1.X</span></li>
<li><span>ANGULAR 17</span></li>
<li><span>ASP.NET</span></li>
<li><span>DJANGO</span></li>
<li><span>SVELTE</span></li>
<li><span>Bootstrap 5</span></li>
<li><span>AJAX</span></li>
<li><span>SCSS</span></li>
<li><span>POS</span></li>
<li><span>DARK MODE</span></li>
</ul>
<div class="btn-list">
<a href="https://seantheme.com/color-admin/admin/html/index_v3.html" target="_blank" class="btn btn-default">Preview</a>
<a href="https://wrapbootstrap.com/theme/color-admin-admin-template-front-end-WB0N89JMK?ref=seantheme" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/angular.png" alt="Angular" />
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/laravel.png" alt="Laravel" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
<img src="/assets/img/icon/vue-logo.png" alt="VueJs" />
<img src="/assets/img/icon/react.png" alt="ReactJs" />
<img src="/assets/img/icon/visual-studio.png" style="opacity: 0.75" alt="Visual Studio" />
<img src="/assets/img/icon/svelte.png" alt="Svelte" />
<img src="/assets/img/icon/django.png" alt="Django 5.0" />
</div>
<div class="footer">
&copy; 2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/color-admin/admin/html/index_v3.html" target="_blank"><img src="/assets/img/default.jpg" class="first" alt="Color Admin Default Version" /></a>
<a href="https://seantheme.com/color-admin/admin/apple/index_v3.html" target="_blank"><img src="/assets/img/apple.jpg" class="second" alt="Color Admin Apple Version" /></a>
<a href="https://seantheme.com/color-admin/admin/material/index_v3.html" target="_blank"><img src="/assets/img/material.jpg" class="third" alt="Color Admin Material Version" /></a>
<a href="https://seantheme.com/color-admin/admin/transparent/index_v3.html" target="_blank"><img src="/assets/img/transparent.jpg" class="fourth" alt="Color Admin Transparent Version" /></a>
<a href="https://seantheme.com/color-admin/frontend/e-commerce/index.html" target="_blank"><img src="/assets/img/e-commerce.jpg" class="fifth" alt="Color Admin E-Commerce Version" /></a>
<a href="https://seantheme.com/color-admin/frontend/one-page-parallax/index.html" data-title="One Page Parallax" target="_blank"><img src="/assets/img/one-page-parallax.jpg" class="sixth" alt="Color Admin One Page Parallax Version" /></a>
<a href="https://seantheme.com/color-admin/frontend/forum/index.html" target="_blank"><img src="/assets/img/forum.jpg" class="seventh" alt="Color Admin Forum Version" /></a>
<a href="https://seantheme.com/color-admin/frontend/blog/index.html" target="_blank"><img src="/assets/img/blog.jpg" class="eight" alt="Color Admin Blog Version" /></a>
<a href="https://seantheme.com/color-admin/admin/facebook/index_v3.html" target="_blank"><img src="/assets/img/facebook.jpg" class="ninth" alt="Color Admin Facebook Version" /></a>
<a href="https://seantheme.com/color-admin/admin/google/index_v3.html" target="_blank"><img src="/assets/img/google.jpg" class="ten" alt="Color Admin Google Version" /></a>
<a href="https://seantheme.com/color-admin/frontend/e-commerce/index.html" target="_blank"><img src="/assets/img/e-commerce.jpg" class="eleven" alt="Color Admin E-Commerce Version" /></a>
</div>
</div>
</div>
<div class="hud">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>HUD</b> <span class="version">v3.0</span></h2>
<p>Design based on HUD ui & coloring system with bunch of re-useable widgets</p>
<ul class="feature-list wrap">
<li><span>WIDGET</span></li>
<li><span>HUD DESIGN</span></li>
<li><span>Dark Mode</span></li>
<li><span>Light Mode</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 5</span></li>
<li><span>JQUERY</span></li>
<li><span>SCSS</span></li>
<li><span>GULP</span></li>
<li><span>LARAVEL 11</span></li>
<li><span>REACT 18</span></li>
<li><span>VUE 3</span></li>
<li><span>ANGULAR 18</span></li>
<li><span>.NET Core 8.0</span></li>
<li><span>SVELTE</span></li>
<li><span>DJANGO 5.0</span></li>
</ul>
<div class="btn-list">
<span class="dropdown">
<a href="https://seantheme.com/hud/" data-toggle="dropdown" target="_blank" class="btn btn-default">Preview <b class="caret" style="margin-left: 10px; margin-right: -15px;"></b></a>
<div class="dropdown-menu">
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/html-ori.png" alt="Laravel" /></span>
<span class="info">
<span class="title">HTML Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-asp/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/visual-studio-ori.png" alt="ASP.NET" /></span>
<span class="info">
<span class="title">.NET Core 8.0 MVC Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-laravel/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/laravel-ori.png" alt="Laravel" /></span>
<span class="info">
<span class="title">Laravel Version</span>
<span class="version">V3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-vue/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/vue-logo-ori.png" alt="Vue" /></span>
<span class="info">
<span class="title">Vue 3 Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-react/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/react-ori.png" alt="Vue" /></span>
<span class="info">
<span class="title">React 18 Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-angular/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/angular-ori.png" alt="Angular" /></span>
<span class="info">
<span class="title">Angular 18 Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-svelte/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/svelte-ori.png" alt="Svelte" /></span>
<span class="info">
<span class="title">Svelte Version</span>
<span class="version">v3.0</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/hud-django/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/django-ori.png" alt="Svelte" /></span>
<span class="info">
<span class="title">Django Version</span>
<span class="version">v3.0</span>
</span>
</a>
</div>
</span>
<a href="https://themeforest.net/item/hud-bootstrap-5-admin-template/34000752" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/gulp.png" alt="Gulp" />
<img src="/assets/img/icon/sass.png" alt="SASS" />
<img src="/assets/img/icon/vue-logo.png" alt="VUE 3" />
<img src="/assets/img/icon/react.png" alt="REACT 18" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
<img src="/assets/img/icon/angular.png" alt="Angular 17" />
<img src="/assets/img/icon/svelte.png" alt="Svelte" />
<img src="/assets/img/icon/django.png" alt="Django 5.0" />
<img src="/assets/img/icon/laravel.png" alt="Laravel" />
<img src="/assets/img/icon/visual-studio.png" style="opacity: 0.75" alt="Visual Studio" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/hud/" target="_blank">
<img src="/assets/img/hud.jpg" class="main" alt="HUD" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="studio">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Studio</b> <span class="version">v4.4</span></h2>
<p>Design based on lightBlue coloring system with bunch of re-useable widgets</p>
<ul class="feature-list">
<li><span>WIDGET</span></li>
<li><span>APPLE DESIGN</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 5</span></li>
<li><span>JQUERY</span></li>
<li><span>SCSS</span></li>
<li><span>GULP</span></li>
<li><span>LARAVEL 11</span></li>
<li><span>REACT 18</span></li>
<li><span>VUE 3</span></li>
<li><span>ANGULAR 18</span></li>
<li><span>.NET Core 8.0</span></li>
<li><span>SVELTE</span></li>
<li><span>DJANGO 5.0</span></li>
</ul>
<div class="btn-list">
<span class="dropdown">
<a href="https://seantheme.com/studio/" data-toggle="dropdown" target="_blank" class="btn btn-default">Preview <b class="caret" style="margin-left: 10px; margin-right: -15px;"></b></a>
<div class="dropdown-menu">
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/laravel-ori.png" alt="Laravel" /></span>
<span class="info">
<span class="title">HTML & Laravel Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-asp/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/visual-studio-ori.png" alt="ASP.NET" /></span>
<span class="info">
<span class="title">.NET Core 8.0 MVC Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-vue/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/vue-logo-ori.png" alt="Vue" /></span>
<span class="info">
<span class="title">Vue JS 3.x Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-react/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/react-ori.png" alt="Vue" /></span>
<span class="info">
<span class="title">React 18 Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-angular/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/angular-ori.png" alt="Angular" /></span>
<span class="info">
<span class="title">Angular 18 Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-svelte/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/svelte-ori.png" alt="Svelte" /></span>
<span class="info">
<span class="title">Svelte Version</span>
<span class="version">v4.4</span>
</span>
</a>
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/studio-django/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/django-ori.png" alt="Svelte" /></span>
<span class="info">
<span class="title">Django Version</span>
<span class="version">v4.4</span>
</span>
</a>
</div>
</span>
<a href="https://themeforest.net/item/aspstudio-net-core-31-mvc-bootstrap-4-admin-template/26633718" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/gulp.png" alt="Gulp" />
<img src="/assets/img/icon/sass.png" alt="SASS" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
<img src="/assets/img/icon/vue-logo.png" alt="VUE 3" />
<img src="/assets/img/icon/laravel.png" alt="Laravel" />
<img src="/assets/img/icon/visual-studio.png" style="opacity: 0.75" alt="Visual Studio" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/studio/" target="_blank">
<img src="/assets/img/studio.jpg" class="main" alt="Studio" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="quantum">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>QUANTUM</b> <span class="version">v1.0</span></h2>
<p>Design based on futuristic ui & coloring system with bunch of re-useable widgets</p>
<ul class="feature-list wrap">
<li><span>WIDGET</span></li>
<li><span>FUTURISTIC</span></li>
<li><span>Dark Mode</span></li>
<li><span>Light Mode</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 5</span></li>
<li><span>JQUERY</span></li>
<li><span>SCSS</span></li>
<li><span>WEBPACK</span></li>
</ul>
<div class="btn-list">
<span class="dropdown">
<a href="https://seantheme.com/quantum/" data-toggle="dropdown" target="_blank" class="btn btn-default">Preview <b class="caret" style="margin-left: 10px; margin-right: -15px;"></b></a>
<div class="dropdown-menu">
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/quantum/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/html-ori.png" alt="Laravel" /></span>
<span class="info">
<span class="title">HTML Version</span>
<span class="version">v1.0</span>
</span>
</a>
</div>
</span>
<a href="https://themeforest.net/item/quantum-bootstrap-5-admin-template/53071201" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/webpack.png" alt="Webpack" />
<img src="/assets/img/icon/sass.png" alt="SASS" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/quantum/" target="_blank">
<img src="/assets/img/quantum.jpg" class="main" alt="QUANTUM" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="droplet">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Droplet</b> <span class="version">v3.0</span></h2>
<p>Design based on Apple ui & coloring system with bunch of re-useable widgets</p>
<ul class="feature-list">
<li><span>WIDGET</span></li>
<li><span>Apple DESIGN</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 5</span></li>
<li><span>JQUERY</span></li>
<li><span>SCSS</span></li>
<li><span>GULP</span></li>
</ul>
<div class="btn-list">
<span class="dropdown">
<a href="https://seantheme.com/droplet/" data-toggle="dropdown" target="_blank" class="btn btn-default">Preview <b class="caret" style="margin-left: 10px; margin-right: -15px;"></b></a>
<div class="dropdown-menu">
<a class="dropdown-item d-flex align-items-center" href="https://seantheme.com/droplet/" target="_blank">
<span class="icon d-flex align-items-center justify-content-center"><img src="/assets/img/icon/html-ori.png" alt="Laravel" /></span>
<span class="info">
<span class="title">HTML Version</span>
<span class="version">v3.0</span>
</span>
</a>
</div>
</span>
<a href="https://wrapbootstrap.com/theme/droplet-bootstrap-5-admin-template-WB0FCJK05" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/gulp.png" alt="Gulp" />
<img src="/assets/img/icon/sass.png" alt="SASS" />
<img src="/assets/img/icon/vue-logo.png" alt="VUE 3" />
<img src="/assets/img/icon/react.png" alt="REACT 18" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/droplet/" target="_blank">
<img src="/assets/img/droplet.jpg" class="main" alt="Droplet" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="admetro">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Admetro</b> <span class="version">v1.1</span></h2>
<p>Design based on iOS Styling with bunch of re-useable widgets</p>
<ul class="feature-list">
<li><span>WIDGET</span></li>
<li><span>APPLE DESIGN</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 4</span></li>
<li><span>JQUERY</span></li>
<li><span>SCSS</span></li>
<li><span>GULP</span></li>
</ul>
<div class="btn-list">
<a href="https://seantheme.com/admetro/" target="_blank" class="btn btn-default">Preview</a>
<a href="https://wrapbootstrap.com/theme/admetro-bootstrap-4-admin-template-WB0GR707X?ref=seantheme" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/gulp.png" alt="Gulp" />
<img src="/assets/img/icon/sass.png" alt="SASS" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/admetro/" target="_blank">
<img src="/assets/img/admetro.jpg" class="main" alt="Admetro" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="source-admin">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Source</b> Admin <span class="version">v1.5</span></h2>
<p>Flat design with unlimited color combination</p>
<ul class="feature-list">
<li><span>ANGULAR JS 1.X</span></li>
<li><span>FLAT DESIGN</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 4</span></li>
<li><span>Bootstrap 3</span></li>
<li><span>JQUERY</span></li>
</ul>
<div class="btn-list">
<a href="https://seantheme.com/source-admin/admin/html/index_v4.html" target="_blank" class="btn btn-default">Preview</a>
<a href="https://wrapbootstrap.com/theme/source-admin-angular-js-html-apps-WB0N5F2FP?ref=seantheme" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/angular.png" alt="Angular" />
<img src="/assets/img/icon/jquery.png" alt="jQuery" />
<img src="/assets/img/icon/less.png" alt="LESS" />
<img src="/assets/img/icon/bootstrap.png" alt="Bootstrap" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/source-admin/admin/html/index_v4.html" target="_blank">
<img src="/assets/img/source-admin.jpg" class="main" alt="Source Admin" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
<div class="infinite-admin">
<div class="slider-content">
<div class="slider-info">
<div class="slider-info-content">
<div class="header">
<div class="logo">
SeanTheme
</div>
</div>
<h2><b>Infinite</b> Admin <span class="version">v1.3</span></h2>
<p>Design based on iOS Styling with bunch of re-useable widgets</p>
<ul class="feature-list">
<li><span>WIDGET</span></li>
<li><span>APPLE DESIGN</span></li>
<li><span>CSS3</span></li>
<li><span>HTML5</span></li>
<li><span>Bootstrap 4</span></li>
<li><span>Bootstrap 3</span></li>
<li><span>JQUERY</span></li>
<li><span>LESS</span></li>
<li><span>SCSS</span></li>
</ul>
<div class="btn-list">
<a href="https://seantheme.com/infinite-admin/admin/html/index.html" target="_blank" class="btn btn-default">Preview</a>
<a href="https://wrapbootstrap.com/theme/infinite-admin-responsive-app-template-WB0C64836?ref=seantheme" target="_blank" class="btn btn-primary">Purchase</a>
</div>
<div class="tech-logo">
<img src="/assets/img/icon/jquery.png" />
<img src="/assets/img/icon/less.png" />
<img src="/assets/img/icon/bootstrap.png" />
</div>
<div class="slider-cover-bg">
<a href="https://seantheme.com/infinite-admin/admin/html/index.html" target="_blank">
<img src="/assets/img/infinite-admin.jpg" class="main" />
</a>
</div>
<div class="footer">
&copy; 2013-2024 SeanTheme <br/>All Rights Reserved
</div>
</div>
</div>
<img src="/assets/img/icon/css_html5.png" class="css-html5" alt="html5 css3" />
<div class="slider-cover"></div>
</div>
</div>
</section>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" type="8b9ffc97f5fc393edeb3a81f-text/javascript"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" type="8b9ffc97f5fc393edeb3a81f-text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" type="8b9ffc97f5fc393edeb3a81f-text/javascript"></script>
<script src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js" type="8b9ffc97f5fc393edeb3a81f-text/javascript"></script>
<script type="8b9ffc97f5fc393edeb3a81f-text/javascript">
		$(document).ready(function() {
			var options = {
				dots: true,
				infinite: true,
				centerMode: true,
				centerMode: true,
				slidesToShow: 1,
				autoplay: true,
				nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
				prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>'
			};
			if ($(window).width() <= 767) {
				options.centerPadding = 0;
			}
			$(".center").slick(options);
			$('[data-toggle="tooltip"]').tooltip();
		});
	</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y3Q0VGQKY3" type="8b9ffc97f5fc393edeb3a81f-text/javascript"></script>
<script type="8b9ffc97f5fc393edeb3a81f-text/javascript">
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-Y3Q0VGQKY3');
	</script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="8b9ffc97f5fc393edeb3a81f-|49" defer></script></body>
</html>
