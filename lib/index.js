/**
 * Created by 栗子哥哥 on 2017/8/28.
 */

"use strict";

var Sort = require('./sort.js')

module.exports =  function SORT(array,value,options,callback) {
    if(!Array.isArray(array)){
        throw new TypeError("Expected a plain array")
    }
   /* if (typeof callback === 'function') {
        
    }*/
    var defaultOptions = {SpellSort:true,NumberUp: true,EnglishBeforeChinese:false};
    var opt = Object.assign({},defaultOptions,options);
    array  = array || [];
    array.sort(function (a,b) {
        //return -1 0 1
        return value?Sort(a[value],b[value],opt):Sort(a,b,opt)
    })
    callback&&callback();
    return array || []
    
}

