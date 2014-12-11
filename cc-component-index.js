// Libraries and plugins
import can from "can";
import "can/map/define/define";
import types from "util/types";

// Models
// import "components/greeting-model";

// Components
// import "components/my-favorite-component";

// Template
import template from "./template.stache!";

// Styles
import "./styles.less!";

export default can.Component.extend({
	tag: "cc-component-index",
	template: template,
	scope: {
		// Definitions with special behavior or objects
		define: {
			components: {
				type: function(val) {
					return this._decomposeComponents(
						typeof val === "string" ?
							val.split(/\s+/) :
							val);
				}
			}
		},
		// Other properties
		current: "",
		// Internal properties
		// None
		// ViewModel Methods
		// None
		// Internal Methods
		_decomposeComponents: function(components) {
			var newComponents = [];
			can.each(components||[], c => {
				var match = /\s*([^\/\s]+\/\S+)\s*/.exec(c);
				newComponents.push(match ? {
					displayName: match[1],
					// We assume foo/bar components follow the standard pattern.
					docs: "https://github.com/"+match[1]+"/blob/master/README.md",
					demo: "http://rawgit.com/"+match[1]+"/master/demo.html",
					test: "http://rawgit.com/"+match[1]+"/master/test.html"
				} : c);
			});
			return newComponents;
		}
	},
	helpers: {
		equal: function(a, b, options) {
			a = a.isComputed ? a() : a;
			b = b.isComputed ? b() : b;
			return a === b ? options.fn() : options.inverse();
		}
	},
	events: {
		// Use can-EVENT when possible, keep methods in the scope above and
		// call them here if you need templated binding.
		inserted: function() {
			// Nothing
		}
	}
});
