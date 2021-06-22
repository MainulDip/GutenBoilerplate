import { registerBlockType, getBlockTypes } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import domReady from "@wordpress/dom-ready";
import React, { Fragment } from "react";
import classnames from "classnames";
import { assign } from "lodash";

// Extending Block
import { addFilter } from "@wordpress/hooks";
import { ToggleControl, PanelBody } from "@wordpress/components";
import {
	InspectorAdvancedControls,
	InspectorControls,
} from "@wordpress/block-editor";
import { createHigherOrderComponent } from "@wordpress/compose";
import { cloneElement } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Edit from "./components/edit";
import Save from "./components/save";
import deprecated from "./deprecated";
import "./style.scss";

// import {getSaveContent} from '@wordpress/block-editor'

export const txtDomain: string = "wp-extended-block-ts-lg";
const nameSpace: string = "wp-mainul-dip/";
const blockNmae: string = "wp-extended-block-ts";

// registerBlockType(`${nameSpace}${blockNmae}`, {
// 	title: __("Extended-Block", txtDomain),
// 	description: __("An example typescript block.", txtDomain),
// 	category: "widgets",
// 	icon: "smiley",
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},
// 	attributes: null,
// 	edit: Edit,
// 	save: Save,
// });

domReady(() => {
	// console.log(getBlockTypes());
	// @ts-ignore
	window._wpLoadBlockEditor.then(function () {
		// console.log(getBlockTypes());
		// addFilter(
		// 	"blocks.registerBlockType",
		// 	"editorskit/custom-attributes",
		// 	addAttributes
		// );
		// addFilter(
		// 	"editor.BlockEdit",
		// 	"editorskit/custom-advanced-control",
		// 	withAdvancedControls
		// );
		// addFilter(
		// 	"blocks.getSaveContent.extraProps",
		// 	"editorskit/applyExtraClass",
		// 	applyExtraClass
		// );
	});
});

function addAttributes(settings, blockName) {
	if (blockName === "core/paragraph") {
		// console.log(settings);

		settings.deprecated = deprecated;

		// console.log(blockName);
		settings.attributes = {
			...settings.attributes,
			mobileHidden: { type: "boolean", default: false },
		};
		console.log(settings.deprecated);
		return settings;
	}
	//check if object exists for old Gutenberg version compatibility
	// if (typeof settings.attributes !== "undefined") {
	// 	settings.attributes = Object.assign(settings.attributes, {
	// 		visibleOnMobile: {
	// 			type: "boolean",
	// 			default: true,
	// 		},
	// 	});
	// }

	return settings;
}

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	// alert("hello BlockEdit");
	// console.log(BlockEdit);
	return (props) => {
		// console.log(props);
		const { attributes, setAttributes, isSelected } = props;

		const { mobileHidden } = attributes;

		if (props.name !== "core/paragraph") {
			return <BlockEdit {...props} />;
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (
					<InspectorAdvancedControls>
						<ToggleControl
							label={__("Hide On Mobile Devices")}
							checked={mobileHidden}
							onChange={() => {
								console.log("mobileHidden changed");
								setAttributes({ mobileHidden: !mobileHidden });
							}}
							help={
								!mobileHidden
									? __("Status: Showing on mobile devices.")
									: __("Status: Hidden on mobile devices.")
							}
						/>
					</InspectorAdvancedControls>
				)}
			</Fragment>
		);
	};
}, "hello");

const applyExtraClass = (...props) => {
	console.log("Filter: blocks.getSaveElement");
	console.log(props);
	const [element, block, attributes] = props;
	// console.log(arguments);
	// alert('hi')
	// console.log("Prop: ", prop);
	// console.log("block: ", block);
	// console.log("Attributes: ", attributes);
	// console.log("Prop: ", Object.keys(prop).length);
	// console.log("block: ", Object.keys(block).length);
	// console.log("Attributes: ", Object.keys(attributes).length);
	// console.log(attributes.content)
	// console.log("Props", props);

	// const { mobileHidden } = attributes;
	// if (mobileHidden)
	// 	prop.className = classnames(prop.className, "mobile-hidden");

	// console.log(mobileHidden);
	// console.log("Prop: ", prop);
	// console.log("block: ", block);
	// console.log("Attributes: ", attributes);

	// console.log("Attributes", attributes);
	// if (block.name === "core/paragraph") {
	// 	// alert("hello from Attributes");
	// 	const { mobileHidden } = attributes;
	// 	// console.log(props);
	// 	// console.log(mobileHidden);
	// 	// props.className =

	// 	// props.className = classnames(props.className, "mobile-hidden");

	// 	//check if attribute exists for old Gutenberg version compatibility
	// 	//add class only when mobileHidden = false
	// 	// if (typeof mobileHidden !== "undefined" && !mobileHidden) {
	// 	// 	props.className = classnames(props.className, "mobile-hidden");
	// 	// }
	// 	// return props;
	// }
	if (block.name === "core/paragraph") {
		const copyElement = cloneElement(
			element,
			// {
			// 	...element.props,
			// 	className: "mobile-hidden",
			// },
			{ ...element.children }
		);
		copyElement.props.className = classnames(
			element.props.className,
			"mobile-hidden"
		);

		// return copyElement;
		console.log("Element and Element Props");
		console.log(copyElement);
		console.log(element);
		// console.log(copyElement)
		return copyElement;
	}

	return element;
};

addFilter(
	"blocks.registerBlockType",
	"editorskit/custom-attributes",
	addAttributes
);
addFilter(
	"editor.BlockEdit",
	"editorskit/custom-advanced-control",
	withInspectorControls
);
// addFilter(
// 	"blocks.getSaveContent.extraProps",
// 	"editorskit/applyExtraClass",
// 	applyExtraClass
// );

addFilter(
	"blocks.getSaveElement",
	"editorskit/applyExtraClass",
	applyExtraClass
);
