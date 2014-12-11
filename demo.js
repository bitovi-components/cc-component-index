// Libraries
import can from "can";
import "can/view/stache/stache";

// Components
import "./cc-component-index";

// NOTE: use can.$ instead of $
can.$(() => {
	window.data = new can.Map({
	});
	can.$("body").prepend(can.view("#demo-template")(window.data));
});
