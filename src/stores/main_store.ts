export const available_ui_libraries = [
	{ value: 'carbon', label: 'Carbon' },
	{ value: 'material', label: 'Material' },
	{ value: 'daisy', label: 'Daisy' }
];

export const daisy_categorized_components: {
	[key: string]: string[];
} = {
	actions: ['Button', 'Dropdown', 'Modal', 'Swap'],
	data_display: [
		'Alert',
		'Avatar',
		'Badge',
		'Card',
		'Carousel',
		'Collapse',
		'Countdown',
		'Kbd',
		'Progress',
		'Radial progress',
		'Stat',
		'Table',
		'Tooltip'
	],
	data_input: [
		'Checkbox',
		'Text input',
		'Radio',
		'Range',
		'Rating',
		'Select',
		'Textarea',
		'Toggle',
		'Artboard',
		'Button group',
		'Divider',
		'Drawer',
		'Footer',
		'Hero',
		'Indicator',
		'Input group',
		'Mask',
		'Stack'
	],
	navigation: ['Breadcrumbs', 'Link', 'Menu', 'Navbar', 'Pagination', 'Steps', 'Tab'],
	mockup: ['Code', 'Phone', 'Window']
};

// export const daisy_components = new Array();
// each(Object.keys(daisy_categorized_components), (key: string) => {
// 	each(daisy_categorized_components[key], (component: String) => {
// 		daisy_components.push(component);
// 	});
// });

export const carbon_components = [
	'Accordion',
	'AspectRatio',
	'Breadcrumb',
	'Breakpoint',
	'Button',
	'ButtonSet',
	'Checkbox',
	'ClickableTile',
	'CodeSnippet',
	'ComboBox',
	'ComposedModal',
	'ContentSwitcher',
	'ContextMenu',
	'CopyButton',
	'DataTable',
	'DatePicker',
	'Dropdown',
	'ExpandableTile',
	'FileUploader',
	'FluidForm',
	'Form',
	'Grid',
	'ImageLoader',
	'InlineLoading',
	'InlineNotification',
	'Link',
	'Loading',
	'LocalStorage',
	'Modal',
	'MultiSelect',
	'NumberInput',
	'OrderedList',
	'OverflowMenu',
	'Pagination',
	'PaginationNav',
	'PasswordInput',
	'Popover',
	'ProgressBar',
	'ProgressIndicator',
	'RadioButton',
	'RadioTile',
	'RecursiveList',
	'Search',
	'Select',
	'SelectableTile',
	'text',
	'SkeletonText',
	'Slider',
	'StructuredList',
	'Tabs',
	'Tag',
	'TextArea',
	'TextInput',
	'Theme',
	'Tile',
	'TimePicker',
	'ToastNotification',
	'Toggle',
	'Tooltip',
	'TooltipDefinition',
	'TooltipIcon',
	'TreeView',
	'Truncate',
	'UIShell',
	'UnorderedList'
];
