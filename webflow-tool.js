console.log("hello");

// Consts
const DATA_ID = "data-automation-id";
const LEFT_PANES = {
	"Add Element": { bem_id: "Add", btn_id: "left-sidebar-add-button" },
	Symbols: {
		bem_id: "SymbolsSymbols",
		btn_id: "left-sidebar-symbols-button",
	},
	Navigator: { btn_id: "left-sidebar-navigator-button" },
	Pages: { bem_id: "Pages", btn_id: "left-sidebar-pages-button" },
	CMS: { bem_id: "CMS Collections", btn_id: "left-sidebar-cms-button" },
	Assets: { bem_id: "Assets", btn_id: "left-sidebar-assets-button" },
	Settings: { bem_id: "Settings", btn_id: "left-sidebar-settings-button" },
};
const RIGHT_TABS = {
	Style: "style-tab",
	Settings: "settings-tab",
	AllStyles: "all-styles-tab",
	Interactions: "interactions-tab"
}
const ELEMENTS = {
	Section: 'Section',
	Container: 'Container',
	Grid: 'Grid',
	Row: 'Row',
	DivBlock: 'DivBlock',
	List: 'List',
	ListItem: 'ListItem',
	LinkBlock: 'LinkBlock',
	Button: 'Button',
	Heading: 'Heading',
	Paragraph: 'Paragraph',
	TextLink: 'TextLink',
	TextBlock: 'TextBlock',
	Blockquote: 'Blockquote',
	RichText: 'RichText',
	DynamoWrapper: 'DynamoWrapper',
	Image: 'Image',
	Video: 'Video',
	YouTubeVideo: 'YouTubeVideo',
	Animation: 'Animation',
	FormForm: 'FormForm',
	FormBlockLabel: 'FormBlockLabel',
	FormTextInput: 'FormTextInput',
	FormFileUploadWrapper: 'FormFileUploadWrapper',
	FormTextarea: 'FormTextarea',
	FormCheckboxInput: 'FormCheckboxInput',
	FormRadioInput: 'FormRadioInput',
	FormSelect: 'FormSelect',
	FormReCaptcha: 'FormReCaptcha',
	FormButton: 'FormButton',
	BackgroundVideoWrapper: 'BackgroundVideoWrapper',
	DropdownWrapper: 'DropdownWrapper',
	HtmlEmbed: 'HtmlEmbed',
	LightboxWrapper: 'LightboxWrapper',
	NavbarWrapper: 'NavbarWrapper',
	SearchForm: 'SearchForm',
	SliderWrapper: 'SliderWrapper',
	TabsWrapper: 'TabsWrapper',
	MapWidget: 'MapWidget',
	Facebook: 'Facebook',
	Twitter: 'Twitter'
}
const STYLE_OPTIONS = {
	"Display": {
		SELECTOR: '#layout-display-options div[data-automation-id="SegmentedControl"] > div',
		OPTIONS: {
			"Block": 0,
			"Flex": 1,
			"Grid": 2,
			"Inline-Block": 3,
			"Inline": 4,
			"None": 5
		}
	},
	"Position": {
		PREFUNC: () => { $('#sp-position').click(); },
		SELECTOR: '[role="option"]',
		OPTIONS: {
			"Static": 0,
			"Relative": 1,
			"Absolute": 2,
			"Fixed": 3,
			"Sticky": 4
		}
	},
	"Font-Weight": {
		PREFUNC: () => { $('$sp-fontWeight').click(); },
		SELECTOR: '[role="option"]',
		OPTIONS: {
			100: 0,
			200: 1,
			300: 2,
			400: 3,
			500: 4,
			600: 5,
			700: 6,
			800: 7,
			900: 8
		}
	},
	"Text-Align": {
		SELECTOR: 'div[data-automation-id="SegmentedControl"][aria-labelledby="sp-align"] > div',
		OPTIONS: {
			"Left": 0,
			"Center": 1,
			"Right": 2,
			"Justify": 3
		}
	},
	"Center-Horizontally":{
		PREFUNC: () => { $('[data-icon="CenterHorizontally"]').parent().click(); }
	}
};

// Data ID Getter
let dataID = id => {
	return $(`[${DATA_ID}="${id}"]`);
};
let dataSel = id => {
	return `[${DATA_ID}="${id}"]`;
}

// Declare Getters
let bem = () => $(".bem-Pane");
let bemHeading = () => dataID("panel-header").text();

// Open Left Panes
let LeftPane = key => {
	let openPane = () => dataID(LEFT_PANES[key]["btn_id"]).click();

	if (key == "Navigator") {
		if (bemHeading() != "" || dataID("Header").text() == "") openPane();
	}

	else {

		try {
			if (bemHeading() != LEFT_PANES[key]["bem_id"]) openPane();
		}

		catch
		{
			openPane();
		}
	}
};

let AddElement = (element) => {
	LeftPane("Add Element");

	// Wait 50ms
	setTimeout(() => { dataID("add-tab-" + element).click(); }, 50);
}

// Right Tabs
let RightTab = key => {
	$('#right-sidebar .' + key).click();
}

// Style Tab
let ClassInput = () => {
	RightTab(RIGHT_TABS.Style);
	dataID("selector-widget").find('input').click();
}

let StyleOption = (option, value) => {
	RightTab(RIGHT_TABS.Style);

	setTimeout(() => {

		if (STYLE_OPTIONS[option]["PREFUNC"]) STYLE_OPTIONS[option]["PREFUNC"]();

		let selector = STYLE_OPTIONS[option].SELECTOR;
		let index = STYLE_OPTIONS[option].OPTIONS[value];

		$(selector)[index].click();
	}
		, 50);
}

let TextColor = () => {
	RightTab(RIGHT_TABS.Style);

	setTimeout(() => {
		dataID('Typography').find(dataSel('swatch')).click();
		dataID('hex-color-input').select();
	}, 50);
}

let BGColor = () => {
	RightTab(RIGHT_TABS.Style);

	setTimeout(() => {
		dataID('Typography').find(dataSel('swatch')).click();
		dataID('hex-color-input').select();
	}, 50);
}