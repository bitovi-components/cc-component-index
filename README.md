# <cc-component-index>

This project tracks an index of components and renders their demo.html
pages in iframes.

## Installation

`bower install --save bitovi/cc-component-index`

## Usage

In your javascript:

```js
import "bower_components/cc-component-index/cc-component-index";
```

In your template:

```html
<cc-component-index components="bitovi-components/cc-hello-world
	                            bitovi-components/cc-component-index">
</cc-component-index>
```

## API

### Attributes

#### `{String|Array<ComponentDef>} components`

This string or array will define which components appear in the component
list. Components can be anywhere web-accessible and have two syntaxes they can
be provided in:

* `username/repo` will automatically generate a component entry, looking for a
`demo.html` page in the root of a repository. This version uses
[rawgit](http://rawgit.com) as a CDN.

* `{displayName: String, docs: StringURL, demo: StringURL, test: StringURL}`
will use `displayName` for the name and ID in the component listing. `docs`,
`demo`, and `test` should be CDN URLs to hosted versions of the rendered
documentation, `demo.html`, and `test.html` pages that can be loaded up in an
iframe.

### Methods

### Events

### Content

## Developing

* `npm install`
* `grunt serve [--port PORT=8125]`
* Go to [demo page](http://localhost:8125/demo.html)

## Testing

* `npm install`
* `grunt test`

You can run the test server and visit `/test.html` to run the tests in the
browser, as well. Tests currently use mocha.
