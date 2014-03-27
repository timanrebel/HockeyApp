# HockeyApp Module

Not yet ready for production (although iOS implementation works)

## Description

HockeyApp SDK module for Titanium. Currently only unauthenticated support is available, including crash reports. 

The module is licensed under the MIT license.

## Referencing the module in your Titanium Mobile application ##

Simply add the following lines to your `tiapp.xml` file:

```xml    
    <modules>
        <module platform="iphone">nl.rebelic.hockeyapp</module> 
        <module platform="android">nl.rebelic.hockeyapp</module> 
    </modules>
```

## Example

Put the following code in your app.js (or alloy.js if you are using Alloy) to enable the module.

```javascript
	var hockeyapp = require('nl.rebelic.hockeyapp');
	hockeyapp.start('<yourappid>');
```

