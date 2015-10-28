(function($) {
$.fn.filter = function( options ) {
    options = options || {};
    // Establish our default settings
    options = $.extend({
        debug : false, // default false
        debugMessage : 'Selected options will be shown in console as you have passed debug: true in plugin',
        separator : "&&",
        assigner : "=",
        afterSelect : function(){
            if(options.debug){
                console.log('in after select');
            }
        }

    }, options);
    if(options.debug){
        console.log('options ', options);
        $(this).prepend(options.debugMessage);
    }
    var objectData = objectData || {};
    objectData.options = options;
    objectData.objectSelect = objectData.objectSelect || {};
    $($(this).find('input')).click(function() {
        setName = $(this).attr('name');
        setVal = $(this).val();
        if(this.type == 'checkbox' || this.type == 'radio'){

        }else{
            throw 'undefind input type'; // exception of non radio / checkbox input type
        }
        if ($(this).is(':checked')) {
              if (objectData.objectSelect.hasOwnProperty(setName) === true) { 
                if(this.type == 'radio'){
                    objectData.objectSelect[setName] = [setVal];
                }else{
                    objectData.objectSelect[setName].push(setVal);
                }
              } else { 
                objectData.objectSelect[setName] = [setVal];
              }
        } else if (!$(this).is(':checked') && this.type == 'checkbox') { 
              if (objectData.objectSelect[setName].indexOf(setVal) === 0) {
                  if(Object.keys(objectData.objectSelect[setName]).length === 1){
                        delete objectData.objectSelect[setName];
                  } else {
                      objectData.objectSelect[setName].splice(objectData.objectSelect[setName].indexOf(setVal), 1);
                  }
              } else if (objectData.objectSelect[setName].indexOf(setVal) > 0) {
                objectData.objectSelect[setName].splice(objectData.objectSelect[setName].indexOf(setVal), 1);
              }
        }
        options.afterSelect();
        if (options.debug) {
            console.log('action performed on '+this.type+' selected >>'+ $(this).is(':checked') , this);
            console.log(setName, ' >> ', setVal);
        }

    });
    
    this.appliedFilters = function(){
        return objectData.objectSelect; // returns selected filters only
    }
    this.options = function(){
        return objectData.options; // returns options only 
    }
    this.checkDebug = function(){
        if(options.debug){
            console.log('options ', options);
            $(this).prepend(options.debugMessage);
        }
        return true;
    }
    this.generateUri = function(){ // it generates URl string with selected
        var queryObject = queryObject || objectData.objectSelect;
        var createUrlAttr = '';
        var nextParam = false;
        $.each(queryObject, function (key, value) {
            if (!nextParam) {
                nextParam = true;
                createUrlAttr = key + options.assigner + value;
            } else {
                createUrlAttr = createUrlAttr + options.separator + key + options.assigner + value;
            }
        });
        return createUrlAttr;
    }
    this.markSelected = function(selectionValue){ // it generates URl string with selected
        var queryObject = queryObject || objectData.objectSelect;
        var createUrlAttr = '';
        var nextParam = false;
        $.each(queryObject, function (key, value) {
            if (!nextParam) {
                nextParam = true;
                createUrlAttr = key + options.assigner + value;
            } else {
                createUrlAttr = createUrlAttr + options.separator + key + options.assigner + value;
            }
        });
        return createUrlAttr;
    }
    var checkValue = function (selector,val){
        var returns = false;
        selector.each(function(k,v){
            if(v.value == val){
                returns = true;
            };
        });
        return returns;
    }
    this.validateJson = function(object){
        if(typeof(object) == 'object'){
            $.each(object, function(key, value) {
                if($.isArray(value)){
                    $.each(value,function(k,v){
                        if(!checkValue($('[name='+key+']'),v)){
                            throw 'Wrong data inserted'+ ' in '+key+' at location' +' '+k; // exception for not available data 
                        }
                    });
                }else{
                    throw 'Wrong data inserted'+ ' '+key; // exception for wrong json
                }
                
            });
            return true;
        }else{
            throw 'Parameter passed is not object';
        }
    }
    return this;

}

}(jQuery));
