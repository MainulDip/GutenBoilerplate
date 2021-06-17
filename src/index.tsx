/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss'
import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import edit from './components/Edit'
import save from './components/Save'

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import Edit from './components/edit';
import Save from './components/save';

registerBlockType('mkaz/tsblock', {
	title: __('Tsblock', 'tsblock'),
	description: __(
		'An example typescript block.',
		'tsblock'
	),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: null,
	edit,
	save,
})