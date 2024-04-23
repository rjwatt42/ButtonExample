
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"showSampleBtn","type":"Action","title":"show","default":false},{"name":"makeSampleBtn","type":"Action","title":"make","default":false}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Buttons Example",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.ActionButton,
					typeName: 'ActionButton',
					name: "showSampleBtn"
				},
				{
					type: DefaultControls.ActionButton,
					typeName: 'ActionButton',
					name: "makeSampleBtn"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
