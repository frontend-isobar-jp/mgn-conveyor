/*

Megane Template

Website: http://megane-template.com/
License: Dentsu Isobar All Rights Reserved.

*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.mgnConveyor = factory();
    }
}(this, function() {

    function mgnConveyor(selector, option) {

        this.selector = selector;
        this.conveyor = document.querySelectorAll( this.selector );

        //option
        if(option == null) option = {};
        this.speed = option.speed ? option.speed/10 : 30;

        this.item = "." + this.selector.split(".")[1]+"_item";
        this.wrap = "." + this.selector.split(".")[1]+"_wrap";
        this.wrapInner = "." + this.selector.split(".")[1]+"_wrap_inner";

        this.itemWidth = null;
        this.defaultLength = null;
    	this.flag = true;

        this.x = 0;

        if(this.conveyor[0]) {
            this.Init();
        }

    }

    /**
    **
    ** Init
    **
    **/
    mgnConveyor.prototype.Init = function() {

        var this_ = this;

        this.conveyor[0].style.width = 2000 + "em";

        this.CreateHTML();

        this.Move = setInterval( function() {
            this_.Render();
        },this.speed);

        window.addEventListener('resize', function() {
            this_.WinResize()
        });

    }

    /**
    **
    ** CreateHTML
    **
    **/
    mgnConveyor.prototype.CreateHTML = function() {

        var ITEM = this.conveyor[0].children;
        this.defaultLength = ITEM.length;

        //
        // CSS
        //
        var itemCSS = "display: table-cell;";
            itemCSS += "white-space: nowrap;";

        var wrapInnerCSS = "display: inline-block;";


        //
        // clone
        //
        var cloneItem = [],
            cloneItem2 = [];

        for (var i = 0; i < this.defaultLength; i++) {

            ITEM[ i ].style.cssText = itemCSS;

            cloneItem.push( ITEM[ i ].cloneNode(true) )
            cloneItem2.push( ITEM[ i ].cloneNode(true) )

        }

        //append
        for (var i = 0; i < this.defaultLength; i++) {

            this.PrependTo( cloneItem[ (this.defaultLength-1) - i ], this.conveyor[0] );
            this.AppendTo( cloneItem2[ i ], this.conveyor[0] );

        }

        //
        // Wrap
        //
        for (var i = 0; i <this.conveyor[0].children.length; i++) {

            this.AddClass(ITEM[i],this.item.split(".")[1]);
            this.WrapInner( ITEM[i], '<div class="'+ this.wrap.split(".")[1] +'_inner" style="'+ wrapInnerCSS +'">', '</div>' )

        }

        this.Wrap( this.conveyor[0], '<div class="'+ this.wrap.split(".")[1]+'">', '</div>' );

        //
        this.conveyor = document.querySelectorAll( this.selector );
        this.itemElm = document.querySelectorAll( this.item );

        // width
        for (var i = 0; i < this.itemElm.length; i++) {
            this.itemWidth += this.itemElm[i].children[0].clientWidth;
        }

        this.conveyor[0].style.width = (this.itemWidth + 10) + "px";

    }

    /**
    **
    ** Init
    **
    **/
    mgnConveyor.prototype.WinResize = function() {

        this.itemWidth = 0;

        for (var i = 0; i < this.itemElm.length; i++) {
            this.itemWidth += this.itemElm[i].children[0].clientWidth;
        }

        this.conveyor[0].style.width = (this.itemWidth + 10) + "px";

    }


    mgnConveyor.prototype.Render = function() {

        this.x -= 1;

        var css = "transform: translateX("+ this.x +"px);";
            css += "-ms-transform: translateX("+ this.x +"px);";
            css += "-webkit-transform: translateX("+ this.x +"px);";

        this.conveyor[0].style.cssText = css;

        if( this.x % ( this.itemWidth/3*2 ) == 0 ) {
            this.x = 0;
        }

    }

    mgnConveyor.prototype.Stop = function() {

        if(!this.conveyor[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }

        if( this.flag ) {
            this.flag = false;
            clearInterval(this.Move);
        }

    }

    mgnConveyor.prototype.Start = function() {
        var this_ = this;
        if(!this.conveyor[0]) {
            console.error( this.selector + ": Not Found" );
            return false;
        }
        if( !this.flag ) {
            this.flag = true;
            this.Move = setInterval( function() {
                this_.Render();
            },this.speed);
        }
    }
    mgnConveyor.prototype.AddClass = function( element, _className ) {
        if (element.classList) {
            element.classList.add(_className);
        } else {
            element.className += ' ' + _className;
        }
    }
    mgnConveyor.prototype.Wrap = function( elm, tagStart, tagEnd ) {
        elm.outerHTML = tagStart + elm.outerHTML + tagEnd;
    }
    mgnConveyor.prototype.WrapInner = function( elm, tagStart, tagEnd ) {
        elm.innerHTML = tagStart + elm.innerHTML + tagEnd;
    }
    mgnConveyor.prototype.PrependTo = function( elm, target ) {
        target.insertBefore( elm, target.firstElementChild );
    }
    mgnConveyor.prototype.AppendTo = function( elm, target ) {
        target.appendChild( elm );
    }

    return mgnConveyor;

}));
