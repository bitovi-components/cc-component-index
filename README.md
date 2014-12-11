# <common-components>

This project tracks an index of components and renders their demo.html
pages in iframes.

## Installation

`bower install --save bitovi/common-components`

## Usage

In your javascript:

```js
import "bower_components/common-components";

var componentRepos = ["bitovi/cc-hello-world"];
```

In your template:

```html
<common-components components="bitovi/cc-hello-world,bitovi/can-router,bitovi/can-router-route"></common-components>
```

## API

### Attributes

* `{String|Array<String>} components` - Array of github repository names in bower format.

### Methods


### Events


### Content

## Developing

* `npm install`
* `grunt serve [--port PORT=8125]`
* Go to [demo page](http://localhost:8125)

## Testing

* `npm install`
* `grunt test`

You can run the test server and visit `/test.html` to run the tests in the
browser, as well. Tests currently use mocha.
