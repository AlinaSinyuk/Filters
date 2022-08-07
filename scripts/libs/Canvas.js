(function(canvasUtils) {

    window.canvasUtils = window.canvasUtils || canvasUtils(window, document);

})(function(window, document) {

    canvasUtils = {};

    canvasUtils.VERSION = 1.0;


    canvasUtils.Util = function(image, canvas) {

            this.image = image;
            this.canvas = canvas || document.createElement("canvas");
            this.canvasCxt = this.canvas.getContext('2d');
            
            this.canvas.width = this.image.width;
            this.canvas.height = this.image.height;
            
            var adjustment = Math.abs(this.canvas.width - this.canvas.height);
            if (this.canvas.width > this.canvas.height) {
                this.canvas.height += adjustment;
            } else {
                this.canvas.width += adjustment;
            }
            this.filters = [];
        }

    
    canvasUtils.Util.prototype = (function() {

        function _draw() {
            
            this.canvasCxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            this.canvasCxt.drawImage(this.image, 0, 0, this.image.width, this.image.height);
        }

        return {
          
            paint: function() {
                _draw.apply(this);
                return this.canvas;
            },
           
            applyFilter: function(filter, resetFilters) {
                resetFilters = resetFilters || true;
                if (resetFilters) {
                    this.filters = [];
                }
                if (filter) this.filters.push(filter);
                if (this.filters.length > 0) {
                    this.canvasCxt.filter = this.filters.toString().replace(",", " ");
                } else {
                    this.canvasCxt.filter = "none";
                }

                _draw.apply(this);
            },
           
            rotate: function(direction) {
            	var rotation = 0;
                switch (direction) {
                    case "left":
                        rotation -= 90;
                        this.canvasCxt.translate(0, this.canvas.height);
                        break;
                    case "right":
                        rotation += 90;
                        this.canvasCxt.translate(this.canvas.width, 0);
                        break;
                    default:
                        console.error("Only left and right supported right now");
                        break;
                }
         
                this.canvasCxt.rotate(rotation * Math.PI / 180);
                
                _draw.apply(this);

                
                this.canvasCxt.restore();

            },
            resetFilters: function() {
                this.filters = [];
                this.applyFilter();
            }
        }
    })();

    return canvasUtils;
});