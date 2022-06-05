console.log("hello");

// Consts
const DATA_ID = "data-automation-id";
const LEFT_PANES = {
	"Add Element": { bem_id: "Add", btn_id: "left-sidebar-add-button" },
	Symbols: { bem_id: "SymbolsSymbols", btn_id: "left-sidebar-symbols-button" },
	Navigator: { btn_id: "left-sidebar-navigator-button" },
	Pages: { bem_id: "Pages", btn_id: "left-sidebar-pages-button" },
	CMS: { bem_id: "CMS Collections", btn_id: "left-sidebar-cms-button" },
	Assets: { bem_id: "Assets", btn_id: "left-sidebar-assets-button" },
	Settings: { bem_id: "Settings", btn_id: "left-sidebar-settings-button" },
};

// Data ID Getter
let dataID = id => {
	return $(`[${DATA_ID}="${id}"]`);
};

// Declare Getters
let bem = () => $(".bem-Pane");

// Open Left Panes
let LeftPane = key => {
	let openPane = () => {
		dataID(LEFT_PANES[key]["btn_id"]).click();
	};

	if (key == "Navigator") {
		if (dataID("panel-header").text() != "" || dataID("Header").text() == "") {
			openPane();
			return;
		}
	} else {
		try {
			let alreadyOpen =
				dataID("panel-header").text() == LEFT_PANES[key]["bem_id"];
			if (!alreadyOpen) {
				openPane();
			}
		} catch {
			openPane();
		}
	}
};
