/**
 * Created by 栗子哥哥 on 2017/8/29.
 */
var Sort =  require('./lib/index.js')
var Array =[
    {Sn: 12,Nick:"B-DB-401(张总办公室)"},
    {Sn: 12,Nick:"B-DB-301(大会议室)"},
    {Sn: 12,Nick:"C-DB-103(II集电表)"},
    {Sn: 12,Nick:"C-DB-101(II集电表)"},
    {Sn: 12,Nick:"C-DB-102(II集电表)"},
    {Sn: 12,Nick:"D-DB-205"},
    {Sn: 15,Nick:"小会议室测试"},
    {Sn: 16,Nick:"空调LQ"},
    {Sn: 12,Nick:"空调A07"},
    {Sn: 12,Nick:"空调A07B"},
    {Sn: 12,Nick:"互感器"},];

var Result = Sort(Array,'Nick',{
    EnglishBeforeChinese:true,
    EnglishUp:false,
});



var array =[
    "B-DB-401","B-DB-301","C-DB-103","2",
    "C-DB-101","C-DB-102","D-DB-205","20",
    "小会议室","空调LQ","空调A07","520",
    "空调A07B","互感器"
];

var result = Sort(array,null,{
    EnglishBeforeChinese:false,
    EnglishUp:true,
});

console.log(Result,result)