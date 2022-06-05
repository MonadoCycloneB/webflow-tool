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
const ELEMENTS =  {
	Section : 'Section',
	Container : 'Container',
	Grid : 'Grid',
	Row : 'Row',
	DivBlock : 'DivBlock',
	List : 'List',
	ListItem : 'ListItem',
	LinkBlock : 'LinkBlock',
	Button : 'Button',
	Heading : 'Heading',
	Paragraph : 'Paragraph',
	TextLink : 'TextLink',
	TextBlock : 'TextBlock',
	Blockquote : 'Blockquote',
	RichText : 'RichText',
	DynamoWrapper : 'DynamoWrapper',
	Image : 'Image',
	Video : 'Video',
	YouTubeVideo : 'YouTubeVideo',
	Animation : 'Animation',
	FormForm : 'FormForm',
	FormBlockLabel : 'FormBlockLabel',
	FormTextInput : 'FormTextInput',
	FormFileUploadWrapper : 'FormFileUploadWrapper',
	FormTextarea : 'FormTextarea',
	FormCheckboxInput : 'FormCheckboxInput',
	FormRadioInput : 'FormRadioInput',
	FormSelect : 'FormSelect',
	FormReCaptcha : 'FormReCaptcha',
	FormButton : 'FormButton',
	BackgroundVideoWrapper : 'BackgroundVideoWrapper',
	DropdownWrapper : 'DropdownWrapper',
	HtmlEmbed : 'HtmlEmbed',
	LightboxWrapper : 'LightboxWrapper',
	NavbarWrapper : 'NavbarWrapper',
	SearchForm : 'SearchForm',
	SliderWrapper : 'SliderWrapper',
	TabsWrapper : 'TabsWrapper',
	MapWidget : 'MapWidget',
	Facebook : 'Facebook',
	Twitter : 'Twitter'
}

// Data ID Getter
let dataID = id => {
	return $(`[${DATA_ID}="${id}"]`);
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