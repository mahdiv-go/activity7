function show() {
    const button = document.activeElement;
    const form = button instanceof HTMLElement ? button.closest("form") : null;
    const section = button instanceof HTMLElement ? button.closest("div[id]") : null;
    const resultId = section ? getResultId(section.id) : "result";
    const result = document.getElementById(resultId);

    if (!form || !result) {
        return;
    }

    const numInput = form.querySelector('input[name="num1"]');
    const textInput = form.querySelector('input[name="text1"]');
    const count = numInput ? parseInt(numInput.value, 10) : NaN;
    const text = textInput ? textInput.value.trim() : "";

    if (!Number.isInteger(count) || count <= 0) {
        result.textContent = "Please enter a positive number.";
        return;
    }

    if (!text) {
        result.textContent = "Please enter some text.";
        return;
    }

    const loopType = section ? section.id : "for";
    let output = "";

    if (loopType === "while") {
        
        let i = 1;
        while (i <= count) {
            output += i + ": " + text + "\n";
            i += 1;
        }
    } else if (loopType === "do-while") {
        
        let i = 1;
        do {
            output += i + ": " + text + "\n";
            i += 1;
        } while (i <= count);
    } else {
        
        for (let i = 1; i <= count; i++) {
            output += i + ": " + text + "\n";
        }
    }

    result.textContent = output;
}

function clearFields() {
    const button = document.activeElement;
    const form = button instanceof HTMLElement ? button.closest("form") : null;
    const section = button instanceof HTMLElement ? button.closest("div[id]") : null;
    const resultId = section ? getResultId(section.id) : "result";
    const result = document.getElementById(resultId);

    if (form) {
        form.reset();
    }

    if (result) {
        result.textContent = "";
    }
}

function getResultId(sectionId) {
    if (sectionId === "while") {
        return "result1";
    }
    if (sectionId === "do-while") {
        return "result2";
    }
    return "result";
}
