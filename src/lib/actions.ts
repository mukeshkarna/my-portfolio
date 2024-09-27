"use client";
export function print() {
    window.print();
}

/**
 * Generates a PDF of the resume and opens it in a new window.
 */
export function generatePDF(): void {
    const resumeElement = document.getElementById("resume") as HTMLElement;
    if (!resumeElement) {
        console.error("Resume element not found");
        return;
    }
    const resumeHTML = resumeElement.outerHTML;

    // Create a printable element
    const printableElement = document.createElement("div");
    printableElement.innerHTML = resumeHTML;
    document.body.appendChild(printableElement);

    // Open a new window
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
        console.error("Failed to open print window");
        document.body.removeChild(printableElement);
        return;
    }

    // Write the document content into the new window
    printWindow.document.write(`<!DOCTYPE html>
    <html>
    <head>
        <title>Resume</title>
        ${Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
            .map(node => node.outerHTML)
            .join("\n")}
    </head>
    <body>
        ${resumeHTML}
    </body>
    </html>`);

    printWindow.document.close();
    printWindow.focus();

    // Uncomment this line to trigger print dialog
    // printWindow.print();

    document.body.removeChild(printableElement);
}
