/**
 * Created by 栗子哥哥 on 2017/8/29.
 */
var Sort =require('./lib/index.js')
var Array =[
    {Sn: 12,Nick:"红外01"},
    {Sn: 12,Nick:"啊a外01"},
    {Sn: 12,Nick:"吧b外01"},
    {Sn: 12,Nick:"才c外01"},
    {Sn: 12,Nick:"都d外01"},
    {Sn: 12,Nick:"红外01"},
    {Sn: 13,Nick:"B-DB-301(大会议室)"},
    {Sn: 14,Nick:"B-DB-401(张总办公室)"},
    {Sn: 15,Nick:'iloveyou22'},
    {Sn: 16,Nick:'iloveyou*4'},
    {Sn: 12,Nick:"红外02"},
    {Sn: 12,Nick:"红外婆01"},
    {Sn: 12,Nick:"红外啊"},];

var result = Sort(Array,'Nick');
console.log(result)
