console.log("hello");

// Data ID Getter
let dataID = id => {
	return $(`[${DATA_ID}="${id}"]`);
};
let dataSel = id => {
	return `[${DATA_ID}="${id}"]`;
}

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
const OPTIONS = {
	"Display": {
		TAB: RIGHT_TABS.Style,
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
		TAB: RIGHT_TABS.Style,
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
		TAB: RIGHT_TABS.Style,
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
		TAB: RIGHT_TABS.Style,
		SELECTOR: 'div[data-automation-id="SegmentedControl"][aria-labelledby="sp-align"] > div',
		OPTIONS: {
			"Left": 0,
			"Center": 1,
			"Right": 2,
			"Justify": 3
		}
	},
	"Center-Horizontally": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { $('[data-icon="CenterHorizontally"]').parent().click(); }
	},
	"Pos-Absolute": {
		TAB: RIGHT_TABS.Style,
		SELECTOR: dataSel('PositionBody') + ' div:nth-child(3) > div[aria-label]',
		OPTIONS: {
			"Top Left": 0,
			"Top Right": 1,
			"Bottom Left": 2,
			"Bottom Right": 3,
			"Left": 4,
			"Right": 5,
			"Bottom": 6,
			"Top": 7,
			"Full": 8
		}
	},
	"Width--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#width-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="width-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"Auto": 7
		}
	},
	"MinWidth--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#minWidth-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="minWidth-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"Auto": 7
		}
	},
	"MaxWidth--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#maxWidth-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="maxWidth-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"None": 7
		}
	},
	"Height--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#height-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="height-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"Auto": 7
		}
	},
	"MinHeight--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#minHeight-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="minHeight-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"Auto": 7
		}
	},
	"MaxHeight--Unit": {
		TAB: RIGHT_TABS.Style,
		PREFUNC: () => { dataID("Size").find('#maxHeight-UnitSelect').click(); },
		SELECTOR: '[aria-labelledby="maxHeight-UnitSelect"] [role="option"]',
		OPTIONS: {
			"PX": 0,
			"%": 1,
			"EM": 2,
			"REM": 3,
			"CH": 4,
			"VW": 5,
			"VH": 6,
			"None": 7
		}
	},
};

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

let _ = (option, value = "") => {
	RightTab(OPTIONS[option]["TAB"]);

	setTimeout(() => {

		if (OPTIONS[option]["PREFUNC"]) OPTIONS[option]["PREFUNC"]();

		let selector = OPTIONS[option].SELECTOR;
		let index = OPTIONS[option].OPTIONS[value];

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