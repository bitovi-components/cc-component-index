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
				value: null,
				type: val => typeof val === "string" ? val.split(" ") : val
			},
			current: ""
		}
		// Other properties
		// None
		// Internal properties
		// None
		// ViewModel Methods
	},
	events: {
		// Use can-EVENT when possible, keep methods in the scope above and
		// call them here if you need templated binding.
		inserted: function() {
			// Nothing
		}
	}
});
