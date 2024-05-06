new autoComplete({
    data: {                              // Data src [Array, Function, Async] | (REQUIRED)
      src: films,
    },
    selector: "#autoComplete",           // Input field selector (of id autoComplete)     | (Optional)
    threshold: 2,                        // Min. Chars length to be typed before start Engine | (Optional)
    debounce: 100,                       // Post duration for engine to start(before it starts suggesting) | (Optional)
    searchEngine: "strict",              // Search Engine type/mode   | (Optional)
    resultsList: {                       // Rendered results list object and appended after input field  | (Optional)
        render: true,
        container: source => {
            source.setAttribute("id", "film_list");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5,                         // Max. number of rendered results | (Optional)
    highlight: true,                       // Highlight matching results      | (Optional)
    resultItem: {                          // Rendered result item            | (Optional)
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: "li"
    },
    noResults: () => {                     // Action script on noResults      | (Optional)
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: feedback => {             // Action script onSelection event | (Optional)
        document.getElementById('autoComplete').value = feedback.selection.value;
    }
});