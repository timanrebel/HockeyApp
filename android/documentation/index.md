# Hockeyapp Module

## Description

HockeyApp SDK module for Titanium. Currently only unauthenticated support is available, including crash reports. 

## Accessing the ios Module

To access this module from JavaScript, you would do the following:

	var hockeyapp = require("nl.rebelic.hockeyapp");

The hockeyapp variable is a reference to the Module object.	

## Usage

Put the following code in your app.js (or alloy.js if you are using Alloy) to enable the module.

```javascript
	var hockeyapp = require('nl.rebelic.hockeyapp');
	hockeyapp.start('<yourappid>');
```

## Author

TIman Rebel

## License

The module is licensed under the MIT license.