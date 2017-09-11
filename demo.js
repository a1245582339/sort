/**
 * Created by 栗子哥哥 on 2017/8/29.
 */
const  Sort =  require('./lib/index.js')
let Array =[
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

let result = Sort(Array,'Nick',{
    EnglishBeforeChinese:true,
    EnglishUp:false,
});
console.log(result)