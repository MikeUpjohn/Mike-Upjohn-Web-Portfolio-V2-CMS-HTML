$(document).ready(function () {
    var dropzone = new Dropzone("#dropzone-uploader", {
        url: "http://s3trials.localhost/Home/Save/",
        previewsContainer: "#dropzone-previews",
        previewTemplate: $("#template").html(),
        thumbnailWidth: 175,
        thumbnailHeight: 100,
        autoProcessQueue: false,
        autoQueue: false,
        maxFilesize: 1024,
        timeout: 600000,
        uploadMultiple: false,
        parallelUploads: 0,
        headers: {
            "Access-Control-Allow-Origin": "http://mike-upjohn.cms.localhost"
        }
    });

    dropzone.on("addedfile", function (file) {
        file.previewElement.querySelector(".delete").onclick = function () {
            dropzone.removeFile(file);
        };
    });

    dropzone.on("totaluploadprogress", function (progress) {
        console.log(progress + "%");
        document.querySelector(".progress-bar").style.width = progress + "%";
    });

    $("#actions .start").click(function(e) {
        e.preventDefault();
        dropzone.enqueueFiles(dropzone.getFilesWithStatus(Dropzone.ADDED));
        dropzone.processFiles(dropzone.getFilesWithStatus(Dropzone.QUEUED));
    });

    $("#actions .cancel").click(function(e) {
        e.preventDefault();
        dropzone.removeAllFiles(true);
    });
});