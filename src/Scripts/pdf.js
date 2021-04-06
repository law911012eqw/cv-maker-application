import html2pdf from 'html2pdf.js'

window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", (e) => {
            e.preventDefault();
            const form = document.getElementById("main-form");
            let opt = {
                margin: 1,
                filename: 'cv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { width: form.clientWidth, height: form.clientHeight, scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'l' }
            };
            html2pdf().from(form).set(opt).save();
        })
}