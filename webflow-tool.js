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
	Section : 'add-tab-Section',
	Container : 'add-tab-Container',
	Grid : 'add-tab-Grid',
	Row : 'add-tab-Row',
	DivBlock : 'add-tab-DivBlock',
	List : 'add-tab-List',
	ListItem : 'add-tab-ListItem',
	LinkBlock : 'add-tab-LinkBlock',
	Button : 'add-tab-Button',
	Heading : 'add-tab-Heading',
	Paragraph : 'add-tab-Paragraph',
	TextLink : 'add-tab-TextLink',
	TextBlock : 'add-tab-TextBlock',
	Blockquote : 'add-tab-Blockquote',
	RichText : 'add-tab-RichText',
	DynamoWrapper : 'add-tab-DynamoWrapper',
	Image : 'add-tab-Image',
	Video : 'add-tab-Video',
	YouTubeVideo : 'add-tab-YouTubeVideo',
	Animation : 'add-tab-Animation',
	FormForm : 'add-tab-FormForm',
	FormBlockLabel : 'add-tab-FormBlockLabel',
	FormTextInput : 'add-tab-FormTextInput',
	FormFileUploadWrapper : 'add-tab-FormFileUploadWrapper',
	FormTextarea : 'add-tab-FormTextarea',
	FormCheckboxInput : 'add-tab-FormCheckboxInput',
	FormRadioInput : 'add-tab-FormRadioInput',
	FormSelect : 'add-tab-FormSelect',
	FormReCaptcha : 'add-tab-FormReCaptcha',
	FormButton : 'add-tab-FormButton',
	BackgroundVideoWrapper : 'add-tab-BackgroundVideoWrapper',
	DropdownWrapper : 'add-tab-DropdownWrapper',
	HtmlEmbed : 'add-tab-HtmlEmbed',
	LightboxWrapper : 'add-tab-LightboxWrapper',
	NavbarWrapper : 'add-tab-NavbarWrapper',
	SearchForm : 'add-tab-SearchForm',
	SliderWrapper : 'add-tab-SliderWrapper',
	TabsWrapper : 'add-tab-TabsWrapper',
	MapWidget : 'add-tab-MapWidget',
	Facebook : 'add-tab-Facebook',
	Twitter : 'add-tab-Twitter'
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