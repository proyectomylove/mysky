/**
 * ------------------------------------------------------------------------
 * Para abrir el moda de copyright
 * ------------------------------------------------------------------------
 */

$(document).ready(function () {
    $(document).keydown(function (event) {
        if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();
            var copyrightModal = new bootstrap.Modal(document.getElementById('modalCopyright'));
            copyrightModal.show();
        }
    });
});
