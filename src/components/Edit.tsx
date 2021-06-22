/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import React from "react";
import { __ } from "@wordpress/i18n";

import { addFilter, addAction } from "@wordpress/hooks";
import { useEffect } from "@wordpress/components";
import { getBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

import { txtDomain } from "../index";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
// import { useBlockProps } from '@wordpress/block-editor'
// import * as blockEdit from '@wordpress/block-editor'
// import {
// 	BlockEditorProvider,
// 	BlockList,
// 	BlockTools,
// 	WritingFlow,
// 	ObserveTyping,
// 	BlockContextProvider
// } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "../editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<p>
				{/* {console.log(getBlockTypes())} */}
				{__("Scafold-block – hello from the editor!", txtDomain)}
			</p>
		</div>
	);
}
