$(document).ready(function () {
    var myDropzone = new Dropzone("#file-uploader", {
        url: "http://s3trials.localhost/Home/Save/",
        previewsContainer: "#dropzone-previews",
        previewTemplate: $("#template").html(),
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        autoProcessQueue: false,
        headers: {
            /*"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",*/
            "Access-Control-Allow-Origin": "http://mike-upjohn.cms.localhost"
        }
    });

    myDropzone.on("addedfile", function (file) {
        console.log("Added file: " + file);
    });

    myDropzone.on("totaluploadprogress", function (progress) {
        console.log("Total Upload Progress: " + progress + "%");
    });

    myDropzone.on("sending", function (file) {
        console.log("Sending: " + file);
    });

    myDropzone.on("queuecomplete", function (progress) {
        console.log("Queue Complete: " + progress);
    });

    $("#actions .start").click(function(e) {
        e.preventDefault();
        myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
        myDropzone.processFiles(myDropzone.getFilesWithStatus(Dropzone.QUEUED));
    });

    $("#actions .cancel").click(function(e) {
        e.preventDefault();
        myDropzone.removeAllFiles(true);
    });
});