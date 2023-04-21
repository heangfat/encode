import matplotlib.pyplot as plt

def 直方圖(圖片文件='wordlib/万.gif'):
	img = plt.imread(圖片文件)
	plt.imshow(img)
	plt.hist(img[:,:,0], bins=256, range=(0,255))# 只有0、51、102、153、204、255
	plt.title('直方圖')
	plt.grid(True)
	plt.show()

import numpy as np
from PIL import Image
import potrace,os,json

def 列文字(json檔='訛族.json'):
	with open(json檔) as f:
		d = json.load(f)
	問題字集 = ''.join(d.values())
	return 問題字集
def 調重心(圖片文件='wordlib/万.gif',閾=200):
	im_gray = np.array(Image.open(圖片文件).convert('L'))
	im_bool = im_gray > 閾
	im_bool = im_bool[8:-8,8:-8]
	圖央 = np.array(im_bool.shape)/2
	墨點 = np.nonzero(im_bool==False)
	框心 = np.array([墨點[0].max()+ 墨點[0].min(), 墨點[1].max()+ 墨點[1].min()])/2
	重心 = np.mean(墨點, axis=1).round()
	偏 = np.int16((框心+重心)/2 - 圖央)
	if(偏[1]==0):
		修正圖 = np.copy(im_bool)
	elif(偏[1]>0):# 偏右:
		修正圖 = np.concatenate((im_bool[:,偏[1]:], np.full((im_bool.shape[0],偏[1]), True)), axis=1)
	else:# 偏左:
		修正圖 = np.concatenate((np.full((im_bool.shape[0],-偏[1]), True), im_bool[:,:偏[1]]), axis=1)
	#print(im_gray.shape, im_gray[0:10,0:5])
	#Image.fromarray(im_bool).show('萬')
	return 修正圖
def 主():
	路徑 = 'wordlib';目標文件夾 = '需要之字'
	原圖集 = os.listdir(路徑)
	os.makedirs(目標文件夾)
	字集 = 列文字()
	for 原圖 in 原圖集:
		原字 = 原圖[:-4]
		if 原字 not in 字集:
			continue
		修正圖 = 調重心(os.path.join(路徑,原圖))
		#矢量圖 = potrace.Bitmap(修正圖).trace()
		Image.fromarray(修正圖).save(os.path.join(目標文件夾,原字+'.png'))
主()