define([
    'jquery'
], function ($) {
    'use strict';
    return function (targetWidget) {
        $.widget('mage.sidebar', targetWidget, {
            update: function () {
                console.log('Custom Swatch Renderer init function call successfully'); // you can write here your code according to your requirement this._super();
                return this._super();
            }
        }); // the widget alias should be like for the target widget

        return $.mage.sidebar; //  the widget by parent alias should be returned
    };
});