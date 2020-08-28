/* 一字為一字串。儘量按部件折行。 */
const 正宂 = ['幐㬺',
'為爲为','偽僞伪','溈潙沩','媯嬀妫','蒍蔿',
'呂吕','侶侣','宮宫',
'黃黄','橫横',
'內内','吶呐',
'劍劎剣剑',' 劒劔剱','刃刄','仞仭','釰釼','靭靱',
'絕絶绝',
'吳吴呉','娛娱娯','悞悮','俁俣',
'兌兑','說説说','銳鋭锐','閱閲阅','悅悦','脫脱','稅税','蛻蜕','敓敚','梲棁','挩捝','涗涚',
'晉晋','戩戬',
'兖兗','袞衮','滾滚',
'彥彦','顏顔颜','產産',
'爭争','靜静','淨浄','箏筝','凈净','崢峥','掙挣','猙狰','睜睁',
'青靑','清淸',
'真眞','填塡','顛顚','巔巓','慎愼','槙槇','鎮鎭镇','鷏鷆','值値','惪悳'/*㥁*/,
'彔录','綠緑绿','錄録','剝剥','淥渌','祿禄',
'緣縁缘','緒緖绪',
'敘敍','漵潊','强強','繦繈',
'晚晩','走赱','番畨',
'舉擧','櫸欅','攑㩮',
'遙遥','搖摇揺','瑤瑶','謠謡谣',
'即卽','唧喞','既旣','塈墍','暨曁','槩㮣','概槪','溉漑','廄廏',
'并幷','併倂','屏屛','帡帲','瓶甁','箳簈','胼腁','軿輧','迸逬','餅餠','駢騈',
'研硏','妍姸','笄筓','訮詽','豜豣','邢郉','鈃銒钘',
'虛虚虗','噓嘘','戲戱戯',
'陰隂','蔭䕃',
'舍舎','舖舗',
'俞兪','偷偸','媮婾','喻喩','榆楡',
'眾衆','潀潨','郎郞郒','部郶','邦邫','京亰','景㬌','稤䅫','高髙',
'尚尙','飲飮饮','巂雟','鄉郷鄕鄊','桑桒','顙䫙',
'赤灻','煮煑',//'熊熋'
'冊册','刪删','姍姗','柵栅','狦㹪',
'皋皐臯','嗥噑嘷','暤暭曍','皞皡皥','槔槹橰','獆獔獋','翱翶翺','鷎鷱',
'遊逰','游㳺','於扵',
'圖圗图図','員貟员贠','圓圎圆円',
'別别','戶戸户','遠逺','藝兿','歴厯',
'教敎','壽夀','曾曽','增増','會㑹会',
'犮叐','拔㧞抜','跋䟦','髮髪'];//'鳳鳯'
/* 筆畫稍訛，而部件變化，致理據重構，而音義不變。雖非宂碼，卻亦影響搜索。 */
const 稍訛重構 = ['溫温','媼媪','慍愠','搵揾','氳氲','縕緼缊','蘊藴蕴','榲榅','熅煴','膃腽','蒕蒀','薀蕰','轀輼辒','醞醖','鰮鰛鳁',
'改攺','罵駡',
'淒凄','涼凉','況况','減减','決决','盜盗',//'沖冲'
'鬱鬰欎欝',
'贊賛赞','儹儧','攢攅攒','欑櫕','灒濽','瓚瓉瓒','纘纉缵','讚讃','酇鄼酂','鑽鑚','巑㠝','趲䟎趱',
'歷歴厯','曆暦'];