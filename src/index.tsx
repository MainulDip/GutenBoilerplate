import { registerBlockType, getBlockTypes } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import domReady from "@wordpress/dom-ready";

/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import Save from "./components/save";
import "./style.scss";


registerBlockType("mkaz/tsblock", {
	title: __("My Custom Block", "guten-scafold-block"),
	description: __("An example typescript block.", "guten-scafold-block"),
	category: "widgets",
	icon: "smiley",
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: null,
	edit: Edit,
	save: Save,
});

domReady(() => {
	console.log(getBlockTypes());
	// @ts-ignore
	window._wpLoadBlockEditor.then(function () {
		console.log(getBlockTypes());
	});
});
