(() => {

    navigator.getUserMedia = navigator.webkitGetUserMedia;

    function handleSuccess(videoEL, stream) {
        videoEL.src = window.URL.createObjectURL(stream);
    }
    function handleError(err) {
        console.log(err);
    }


    window.addEventListener('DOMContentLoaded', () => {
        const videoEl = document.getElementById('video');
        const canvasEl = document.getElementById('canvas');
        const recordEl = document.getElementById('record');
        const photosEl = document.querySelector('.photosContainer');
        const counterEl = document.getElementById('counter');

        const constraints = {
            audio: false,
            video: {
                mandatory: {
                    minWidth: 835,
                    minHeight: 480,
                    maxWidth: 853,
                    maxHeight: 480
                }
            }
        };

        navigator.getUserMedia(constraints, stream => handleSuccess(videoEl, stream), handleError);
    });

})();