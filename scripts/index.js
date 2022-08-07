var myCanvasUtil;
var img = qs("#inpt-img");
var can = qs("#out-can");

img.on("load", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil = new canvasUtils.Util(img, can);
    myCanvasUtil.paint();
    qsa(".filters-btn").rmattr("disabled", "false");
});

img.attr("src", "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg?auto=compress&cs=tinysrgb&dpr=2&w=400");


//filter 
qs("#filter-original").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.resetFilters();
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-grayscale").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.applyFilter("grayscale(100%)");
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-sepia").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.applyFilter("sepia(100%)");
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-blur").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.applyFilter("blur(1px)");
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-brightness").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.applyFilter("brightness(130%)");
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-rotate-left").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.rotate("left");
    qsa(".filters-btn").rmattr("disabled", "false");
});
qs("#filter-rotate-right").on("click", function (e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil.rotate("right");
    qsa(".filters-btn").rmattr("disabled", "false");
});


//image upload
function handleFiles(files) {
    var reader = new FileReader();

    var file = files[0];
    if (file) {
        reader.readAsDataURL(file);
    } else {
        console.error("Error while reading file");
    }

    reader.onload = function () {
        img.src = reader.result;
    }
}