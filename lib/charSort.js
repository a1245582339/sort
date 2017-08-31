/**
 * Created by 栗子哥哥 on 2017/8/29.
 */

var Type = require('./judgeType')
var staticType = require("./staticType")
var Spell = require('../method/spell')


module.exports  = function (stringA,stringB,options) {
    var result;
    if(stringA===stringB){
        result = 0
    }else{
        var AType = Type(stringA);
        var BType = Type(stringB);
        //stringA,stringB is Chinese
        if(AType===BType&&(AType===staticType.Chinese)){
           /* console.log('均为汉字')*/
            result = options.SpellSort?Spell(stringA,stringB,options):stringA.localeCompare(stringB)
            
        }
        //stringA,stringB is SpecialCharacter
        else if(AType===staticType.SpecialCharacter&&BType===staticType.SpecialCharacter){
         /*   console.log('均为特殊字符')*/
            result = stringA.localeCompare(stringB)
        }
        //stringA,stringB is number
        else  if(AType===BType&&AType===staticType.Number){
            /*console.log('均为数字')*/
            result =options.NumberUp?(stringA>stringB?1:-1):(stringA>stringB?-1:1)
        }
        //stringA,stringB is English
        else if((AType===BType&&AType===staticType.LowerCaseEnglish) ||  //LowerCase
             (AType===BType&&AType===staticType.UpperCaseEnglish) //UpperCase
        ){
            /*console.log('均为英文')*/
            let a = stringA.toLocaleLowerCase ();
            let b = stringB.toLocaleLowerCase ();
            result = a>b?1:-1
        }
        /*else if((AType===staticType.LowerCaseEnglish&&BType === staticType.UpperCaseEnglish) || //大小写
            (BType===staticType.LowerCaseEnglish&&AType === staticType.UpperCaseEnglish)){ 
            result = AType===staticType.LowerCaseEnglish?1:-1
        }
        //stringA,stringB is special character
        else if(AType ===staticType.SpecialCharacter || BType ===staticType.SpecialCharacter){
            return  AType ===staticType.SpecialCharacter?-1:1
        }
        else if((AType===staticType.Chinese&&BType>staticType.Chinese) || (BType===staticType.Chinese&&AType>staticType.Chinese) ){
            result = AType===staticType.Chinese?1:-1
        }*/
        else{
           /* console.log('其它')*/
            result = stringA.localeCompare(stringB)
        }
    }

    return result
}