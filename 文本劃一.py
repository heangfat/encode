#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys,getopt
import re
sys.path.append("~/文件/")
#import 異碼字表 as 字表
import json

print('　●●　除宂、除訛、劃一　●●')
宂碼彙 = open('宂碼彙.json')
字彙 = json.load(宂碼彙)
宂碼彙.close()
def 劃一(t,攺正文=True):
	nn = 0#;替換之字 = ['','','','']
	替換字彙 = {}; 略過 = ('稍訛重構')
	結果 = t
	if not 攺正文:
		#夾注 = re.findall(r'\(\(=.+?=\)\)',t)
		正文中 = re.findall(r'=\)\).+?\(\(=',t,re.S); 正文首 = re.match(r'(.*?)\(\(=',t,re.S); 正文尾倒 = re.match(r'(.*?)\)\)=',t[::-1],re.S)
		結果 = re.sub(r'=\)\).+?\(\(=','=))((=',t,flags=re.S);結果 = re.sub(r'^.*?\(\(=', '((=', 結果, flags=re.S);結果 = re.sub(r'^.*?\)\)=','))=', 結果[::-1], flags=re.S)[::-1]
	for 類名,字組 in 字彙.items():
		if 類名 in 略過:
			continue
		替換字彙[類名] = ''
		for ym in 字組:
			匹配 = re.findall('['+ym[1:]+']',結果)
			if len(匹配)>0:
				替換字彙[類名] += ''.join(匹配)
				nn += len(匹配)
			結果 = re.sub('['+ym[1:]+']',ym[0],結果)
		if len(替換字彙[類名])>0:
			print(f'◉{類名}：{替換字彙[類名]}')
		else:
			print(f'◉{類名}（无）')
	if not 攺正文:
		for 字句 in 正文中:
			結果 = re.sub(r'=\)\)\(\(=', 字句, 結果, 1)
		if 正文首 != None:
			結果 = 正文首.group(1)+ 結果
		if 正文尾倒 != None:
			結果 += 正文尾倒.group(1)[::-1]
		print('未攺正文')
	return {"得":結果, "計":nn}
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
