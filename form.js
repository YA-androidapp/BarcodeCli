document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("btn-append")
        .addEventListener("click", function () {
            var texts = document.getElementsByClassName("texts");
            var cntforms = texts.length;

            var formdivs = document.getElementById("formdivs");

            var formdiv = document.createElement("div");
            formdiv.setAttribute("class", "texts");
            formdiv.setAttribute("id", "form-" + (cntforms + 1));

            var input = document.createElement("input");
            input.setAttribute("class", "texts-key");
            input.setAttribute("id", "texts-key-" + (cntforms + 1));
            input.setAttribute("maxlength", "100");
            input.setAttribute("placeholder", "hint-key-" + (cntforms + 1));
            input.setAttribute("size", "10");
            input.setAttribute("type", "text");
            input.setAttribute("value", "");
            formdiv.appendChild(input);

            var input = document.createElement("input");
            input.setAttribute("class", "texts-val");
            input.setAttribute("id", "texts-val-" + (cntforms + 1));
            input.setAttribute("maxlength", "100");
            input.setAttribute("placeholder", "hint-val-" + (cntforms + 1));
            input.setAttribute("size", "10");
            input.setAttribute("type", "text");
            input.setAttribute("value", "");
            formdiv.appendChild(input);

            formdivs.appendChild(formdiv);
        });

    document
        .getElementById("btn-remove")
        .addEventListener("click", function () {
            var formdivs = document.getElementById("formdivs");
            if (formdivs.hasChildNodes()) {
                if(formdivs.lastChild.getAttribute("class") == "texts"){
                    formdivs.removeChild(formdivs.lastChild);
                }
            }
        });
});

function removeAll() {
    var formdivs = document.getElementById("formdivs");
    if (formdivs.hasChildNodes()) {
        while (formdivs.lastChild) {
            //The list is LIVE so it will re-index each call
            formdivs.removeChild(formdivs.lastChild);
        }
    }
}

function EncodeHTMLForm(data) {
    // var data = { foo: 'abc', bar: 100 };
    var params = [];
    for (var name in data) {
        var value = data[name];
        var param =
            encodeURIComponent(name) + "=" + encodeURIComponent(value);
        params.push(param);
    }
    return params.join("&").replace(/%20/g, "+");
}