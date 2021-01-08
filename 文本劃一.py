#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import 異碼字表 as 字表

print('　●●　除宂、除訛、劃一　●●')
def 劃一(t):
	nn = 0#;替換之字 = ['','','','']
	for ym in 字表.正宂:
		nn = nn + len(re.findall('['+ym[1:]+']',t))
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.稍訛重構:
		nn = nn + len(re.findall('['+ym[1:]+']',t))
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.純訛:
		nn = nn + len(re.findall('['+ym[1:]+']',t))
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.隸定不同:
		nn = nn + len(re.findall('['+ym[1:]+']',t))
		t = re.sub('['+ym[1:]+']',ym[0],t)
	return {"得":t, "計":nn}
讀檔名 = '隋書16.txt';寫檔名 = '隋書16-.txt'
try:
	原文件 = open(讀檔名,mode='br')
	bom2 = 原文件.read(2);原文件.close()
	if bom2 == b'\xfe\xff':
		原文件 = open(讀檔名,mode='r',encoding='utf-16be');print('編碼：萬國編碼-16正敘')
	elif bom2 == b'\xff\xfe':
		原文件 = open(讀檔名,mode='r',encoding='utf-16le');print('編碼：萬國編碼-16倒敘')
	else:
		原文件 = open(讀檔名,mode='r');print('編碼：可能是萬國編碼-8')
	全文 = 原文件.read()
	新文件 = open(寫檔名,'w',encoding='utf-16le',newline='\r\n')
	劃一全文 = 劃一(全文)#;print(劃一全文)
	print('共替換了 %d 處。' % 劃一全文["計"]);新文件.write(劃一全文["得"])
	#諸段 = 原文件.readlines();print('凡 %d 段' % len(諸段))
	#for 段 in 諸段:
	#	段 = 劃一(段)
	#	新文件.write(段)
finally:
	if 原文件:
		原文件.close()
	if 新文件:
		新文件.close()