(function(window, document) {
  
    window.qs = function(selector) {
        return document.querySelector(selector);
    }
    window.qsa = function(selector) {
        return document.querySelectorAll(selector);
    }

    
    window.HTMLElement.prototype.attr = function(name, value) {
        if (!value) {
            return this.getAttribute(name);
        }
        this.setAttribute(name, value);
    };

    window.HTMLElement.prototype.on = function(event, handler) {
        this.addEventListener(event, handler);
    }

    
    window.cel = function(tagName) {
        return document.createElement(tagName);
    }

    window.NodeList.prototype.attr = function(name, value) {
        if (!value) {
            for (var i = this.length - 1; i >= 0; i--) {
                if (this[i][name]) {
                    return
                }
            }
            return this[0][name];
        }

        for (var i = this.length - 1; i >= 0; i--) {
            this[i][name] = value;
        }

    }

    window.NodeList.prototype.rmattr = function(name) {
    	for (var i = this.length - 1; i >= 0; i--) {
            this[i].removeAttribute(name);
        }
    }
})(window, document);