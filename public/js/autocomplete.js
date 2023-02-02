const autoComplete = require("@tarekraafat/autocomplete.js");

// autocompletes using names from the database
const autoCompleteJS = new autoComplete({
    placeHolder: "name",
    data: {
        src: ["john smith", "carl warren", "sabrina wolf", "tyler cruz", "alex goodman"],
        cache: true,
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});