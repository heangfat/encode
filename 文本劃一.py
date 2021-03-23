#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys,getopt
import re
sys.path.append("/home/yyrdh/文件/")
import 異碼字表 as 字表

print('　●●　除宂、除訛、劃一　●●')
def 劃一(t):
	nn = 0;替換之字 = ['','','','']
	for ym in 字表.正宂:
		匹配 = re.findall('['+ym[1:]+']',t)
		if len(匹配)>0:
			替換之字[0] = 替換之字[0] + ''.join(匹配)
			nn = nn + len(匹配)
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.稍訛重構:
		匹配 = re.findall('['+ym[1:]+']',t)
		if len(匹配)>0:
			替換之字[1] = 替換之字[1] + ''.join(匹配)
			nn = nn + len(匹配)
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.純訛:
		匹配 = re.findall('['+ym[1:]+']',t)
		if len(匹配)>0:
			替換之字[2] = 替換之字[2] + ''.join(匹配)
			nn = nn + len(匹配)
		t = re.sub('['+ym[1:]+']',ym[0],t)
	for ym in 字表.隸定不同:
		匹配 = re.findall('['+ym[1:]+']',t)
		if len(匹配)>0:
			替換之字[3] = 替換之字[3] + ''.join(匹配)
			nn = nn + len(匹配)
		t = re.sub('['+ym[1:]+']',ym[0],t)
	print('、'.join(替換之字))
	return {"得":t, "計":nn}
讀檔名 = '隋書19.txt';寫檔名 = '隋書19-.txt'
try:
	opts, args = getopt.getopt(sys.argv[1:],"助入:出:",["輸入文件=","輸出文件="])
except getopt.GetoptError:
	print("文本劃一.py -入 <輸入文件> -出 <輸出文件>")
for opt, arg in opts:
	if opt in ("-入", "--輸入文件"):
		讀檔名 = arg
	elif opt in ("-出", "--輸出文件"):
		寫檔名 = arg
	elif opt == '-助':
		print("文本劃一.py -入 <輸入文件> -出 <輸出文件>")
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