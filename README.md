# HockeyApp Module

## Description

HockeyApp SDK module for Titanium. Currently only unauthenticated support is available, including crash reports.

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/nl.rebelic.hockeyapp)
Download the [latest ZIP-file](https://github.com/timanrebel/Hockeyapp/tree/master/iphone/dist) and consult the [Titanium Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module) on how install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install nl.rebelic.hockeyapp`

## Usage

Put the following code in your app.js (or alloy.js if you are using Alloy) to enable the module.

```javascript
	var hockeyapp = require('nl.rebelic.hockeyapp');
	hockeyapp.start('<yourappid>');
```

## Changelog

* 0.2 Working on iOS and Android

## Author

Timan Rebel

## License

The MIT License (MIT)

Copyright (c) 2014 Timan Rebel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
