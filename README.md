# sort
A simple JavaScript sorting function in English and Chinese

## Install
Start by downloading the dependencies:
     $ npm install haboll/sort

## Import
     var sort = require('sort')
     import sort from 'sort'

## Examples
The function receive 3 parameter.The first parameter must be a array you need sort,the second parameter is a string or null,the third parameter is a object.
example 1:
        var sort = require('sort')
        var Array =[
             {Nick:"B-DB-401"},{Nick:"B-DB-301"},{Nick:"C-DB-103"},{Nick:"2"},
             {Nick:"C-DB-101"},{Nick:"C-DB-102"},{Nick:"D-DB-205"},   {Nick:"20"},
             {Nick:"小会议室"},{Nick:"空调LQ"},{Nick:"空调A07"},{Nick:"520"},
             {Nick:"空调A07B"},{Nick:"互感器"}
         ];

        var result = sort(Array,'Nick',{
            EnglishBeforeChinese:true,
            EnglishUp:false,
        });

example 2:
        var sort = require('sort')
        var Array =[
             "B-DB-401","B-DB-301","C-DB-103","2",
             "C-DB-101",Nick:"C-DB-102","D-DB-205","20",
             "小会议室","空调LQ","空调A07","520",
             "空调A07B","互感器"
         ];

        var result = sort(Array,null,{
            EnglishBeforeChinese:false,
            EnglishUp:true,
        });


        you can change the order by modifying the object.
        The default object:
        {
             SpellSort:true,                    //中文是否按拼音首字母排序
             SpellUp:true,                      //中文是否按拼音首字母正序排序，即a-z
             NumberUp: true,                    //数字从大往小排序
             EnglishBeforeChinese:true,         //中英文排序是否英文在前
             EnglishUp:true,                    //英文排序是否按正序排序， 即a-z
        }

        see the demo for more details.
