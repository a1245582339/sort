/**
 * Created by 栗子哥哥 on 2017/8/29.
 */

var judgeType = require('./judgeType')
var staticType = require("./staticType")


module.exports  = function (stringA,stringB,options) {
    console.log(judgeType('-'))

    var result;
    if(stringA===stringB){
        result = 0
    }else{
        var AType = judgeType(stringA);
        var BType = judgeType(stringB);
        if(AType===BType&&AType===staticType.Chinese){
            result = options.SpellSort?stringA.localeCompare(stringB):0
        }
        else  if(AType===BType&&AType===staticType.Number){
            result = options.SpellSort?stringA.localeCompare(stringB):0
        }

        else if((AType===staticType.Chinese&&BType>staticType.Chinese) || (BType===staticType.Chinese&&AType>staticType.Chinese) ){
            result = AType===staticType.Chinese?1:-1
        }
        else if((AType===staticType.LowerCaseEnglish&&BType === staticType.UpperCaseEnglish) ||(BType===staticType.LowerCaseEnglish&&AType === staticType.UpperCaseEnglish)){
            result = AType===staticType.LowerCaseEnglish?1:-1
        }
        else if((AType===BType&&AType===staticType.LowerCaseEnglish) || (AType===BType&&AType===staticType.UpperCaseEnglish)){
            let a = stringA.toLocaleLowerCase ();
            let b = stringB.toLocaleLowerCase ();
            result = a>b?1:-1
        }
        else if(AType ===staticType.SpecialCharacter || BType ===staticType.SpecialCharacter){
            console.log(1)
            return  AType ===staticType.SpecialCharacter?-1:1
        }
        else{
            result = 0
        }
    }
   
    
    return result
}