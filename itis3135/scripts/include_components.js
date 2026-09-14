document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach(async (element) => {
        const filePath = element.getAttribute("data-include");
        if (!filePath) return;

        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            const html = await response.text();
            element.innerHTML = html;
        } catch (error) {
            element.innerHTML = "";
        }
    });
});

