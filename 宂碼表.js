/* 一字為一字串。儘量按部件折行。 */
const 正宂 = ['幐㬺',
'為爲为','偽僞伪','溈潙沩','媯嬀妫','蒍蔿',
'呂吕','侶侣','宮宫',
'黃黄','橫横',/*粵、奧*/
'內内','吶呐',
'劍劎剣剑',' 劒劔剱','刃刄','仞仭','釰釼','靭靱',
'絕絶绝','污汚汙','凡凢凣','帆㠶',
'吳吴呉','娛娱娯','悞悮','俁俣㑨',
'兌兊兑','說説说','銳鋭锐','閱閲阅','悅恱悦','脫脱','稅税','蛻蜕','敓敚','梲棁','挩捝','涗涚',
'晉晋','戩戬',
'臥卧','毀毁','巢巣',
'兖兗','袞衮','滾滚',
'彥彦','顏顔颜','產産',
'兒児','焰焔熖㷔','陷陥䧟','稻稲','滔㴞','舂㫪',
'朮术','剎刹','弒弑','樧榝','幺么','麼麽','嬤嬷',
'爭争','靜静','淨浄','箏筝','凈净','崢峥','掙挣','猙狰','睜睁',
'青靑','清淸',
'真眞','填塡','顛顚','巔巓','慎愼','槙槇','鎮鎭镇','鷏鷆','值値','惪悳'/*㥁*/,'俱倶','查査',
'彔录','綠緑绿','錄録','剝剥','淥渌','祿禄',
'彝彞','彜彛','彙彚','緣縁缘','緒緖绪',
'敳敱','敘敍','漵潊','强強','繦繈',
'晚晩','走赱','步歩','涉渉','复㚆','番畨','樣様',
'舉擧','櫸欅','攑㩮',
'遙遥','搖摇揺','瑤瑶','謠謡谣',
'艷艶','灧灔','灩灎',
'即卽','唧喞','既旣','塈墍','暨曁','槩㮣','概槪','溉漑','廄廏',
'并幷','併倂','屏屛','帡帲','瓶甁','箳簈','胼腁','軿輧','迸逬','餅餠','駢騈',
'研硏','妍姸','笄筓','訮詽','豜豣','邢郉','鈃銒钘',
'侯矦','喉㗋','猴㺅',
'京亰','景㬌','稤䅫','高髙',
'世卋'/*丗*/,'枼枽',
'虛虚虗','噓嘘','戲戱戯',
'陰隂','蔭䕃','乘乗','剩剰',
'舍舎','舖舗',
'卷巻','圈圏',
'襄㐮','壤壌','孃嬢','穰穣','讓譲','釀醸','囊嚢','橐槖',
'俞兪','偷偸','媮婾','喻喩','榆楡',
'卒䘚','倅伜','悴忰','椊枠','瘁疩','碎砕','粹粋','綷紣','翠翆','醉酔','淬㳃',
'奐奂','喚唤','換换','渙涣','煥焕','瘓痪',
'眾衆','潀潨','郎郞郒','部郶','邦邫','拜拝',
'尚尙','飲飮饮','巂雟','鄉郷鄕鄊','囪囱','歲歳嵗','桑桒','顙䫙','告吿','久乆','插揷挿',
'赤灻','煮煑',//'熊熋',
'冊册','刪删','姍姗','柵栅','狦㹪',
'皋皐臯','嗥噑嘷','暤暭曍','皞皡皥','槔槹橰','獆獔獋','翱翶翺','鷎鷱',
'遊逰','游㳺','於扵',
'柳栁桞','留㽞畄',
'冭夳','奇竒','㟢嵜',//'大亣',
'關闗関','聯聮䏈聨聫联',
'亡亾兦','罔㒺','忘㤀','丐匄匃','揭掲','渴渇','巟㠩','㡆㡃',
'罕䍐䍑','罭䍞',
'或㦯','斝斚','面靣','回囬','廻廽','迴逥','蛔蜖','圖圗图図','員貟员贠','圓圎圆円','松柗',
'沒没','歿殁',
'恆恒','揯搄','緪縆','䱍䱎','䱭䱴',
'尔尒尓','你伱','鉨鉩鈢','妳㚷',
'賓賔','濱濵','檳㯽',
'宜冝宐','疊疉','曡㬪','氎㲲','㩹㩸',
'參叅㕘参','別别','戶戸户','遠逺','藝兿','歴厯','卯戼','埒埓','熙煕熈㷩','萸茰','夔虁蘷',
'教敎','壽夀','黑黒','曾曽','增増','會㑹会','每毎','吞呑','坍㘱',
'枏柟','耼聃','蚦蚺','衻袡','髥髯','㚩姌','䑙舑','䒣苒',
'犮叐','拔㧞抜','跋䟦','髮髪',
'閏閠闰','玨珏'];

const 純訛 = ['鳳鳯','派沠','虐䖈䨋','屆届㧂','蒙䝉','俎爼','步歨','邊邉','微㣲','輒輙','究䆒','土圡','篡簒','寇宼窛',
'寧寜寕','甯寗','繼継继','斷㫁断','卻却','腳脚','賴頼','瀨瀬','戾戻','淚涙',
'祕秘','穎頴颕','稟禀','凜凛','廩廪','懍懔','檁檩','燣燷','癛癝'];

/* 筆畫稍訛，而部件變化，致理據重構，而音義不變。雖非宂碼，卻亦影響搜索。 */
const 稍訛重構 = ['溫温','媼媪','慍愠','搵揾','氳氲','縕緼缊','蘊藴蕴','榲榅','熅煴','膃腽','蒕蒀','薀蕰','轀輼辒','醞醖','鰮鰛鳁',
'改攺','罵駡','衋䀌','鬱鬰欎欝','謚諡谥','輩軰','寛寬',
'淒凄','涼凉','況况','減减','決决','盜盗','準凖','湌飡',//'沖冲'
'贊賛赞','儹儧','攢攅攒','欑櫕','灒濽','瓚瓉瓒','纘纉缵','讚讃','酇鄼酂','鑽鑚','巑㠝','趲䟎趱',
'歷歴厯','曆暦',
'珍珎','趁趂','跈䟢',
'柳桺','駠駵',
'留畱','榴橊','溜澑','瑠璢','瘤癅','籀籒','罶羀','鎦鐂','飀飅','騮驑','塯㙧','㨨㩅',
'盍盇','蓋葢','豔豓','嗑㗐',
'羈覊羁','羇覉','霸覇'];
