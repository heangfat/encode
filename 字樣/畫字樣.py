# pip install text2svg
from text2svg import *

字集 = '高京亭豪毫亯亮喬鬲畐異冀章辰亏帶寡督曾念皆習鬼卑敫隹烏宜帥桑兆癸亥㱃酉西襾庚隸㔾䜌審竊薩髟部㫃於堯發嚴垂助䌛繇朋頃建廷弦疑壽將酱冈夬舛舜愛易長才弟笑'
邊長 = 40
字號 = int(邊長*0.75)
register_font('漢文隸書.ttf')
for 字 in 字集:
	text = TextInfo(字,字+"-隸.svg",邊長,邊長,font='漢文隸書',font_size=字號, START_Y=-邊長/5)
	text2svg(text)
