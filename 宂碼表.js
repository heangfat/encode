/* 一字為一字串。儘量按部件折行。 */
const 正宂 = ['幐㬺','㖈䎛','㘽㦳',
'為爲为','偽僞伪','溈潙沩','媯嬀妫','蒍蔿',
'呂吕','侶侣','宮宫',
'黃黄','橫横','粵粤','奧奥',
'內内','吶呐',
'辨辧','劍劎剣剑','劒劔剱','刃刄','仞仭','釰釼','靭靱',
'絕絶绝','凡凢凣','帆㠶',
'吳吴呉','娛娱娯','悞悮','俁俣㑨',
'兌兊兑','說説说','銳鋭锐','閱閲阅','悅恱悦','脫脱','稅税','蛻蜕','敓敚','梲棁','挩捝','涗涚',
'晉晋','戩戬',
'巢巣','處䖏',
'兖兗','袞衮','滾滚','蔉蓘',
'彥彦','顏顔颜','產産',
'兒児','焰焔熖㷔','陷陥䧟','稻稲','滔㴞','舂㫪',
'朮术','剎刹','弒弑','樧榝','幺么','麼麽','嬤嬷',/*怷怸*/
'爭争','靜静','淨浄','箏筝','凈净','崢峥','掙挣','猙狰','睜睁',
'青靑','清淸',
'真眞','填塡','顛顚','巔巓','慎愼','槙槇','鎮鎭镇','鷏鷆','值値','惪悳','俱倶','查査',
'彔录','綠緑绿','錄録','剝剥','淥渌','祿禄',
'彝彞','彜彛','彙彚','緣縁缘','緒緖绪',
'敳敱','敆㪉','敲㪣','敘敍','漵潊','斆斅敩','强強','繦繈',
'晚晩','走赱','复㚆','番畨','樣様','栐柡','密宻',
'舉擧','櫸欅','攑㩮',
'遙遥','搖摇揺','瑤瑶','謠謡谣',
'即卽','唧喞','既旣','塈墍','暨曁','槩㮣','概槪','溉漑','廄廏',
'并幷','併倂','屏屛','帡帲','瓶甁','箳簈','胼腁','軿輧','迸逬','餅餠','駢騈',
'研硏','妍姸','笄筓','訮詽','豜豣','邢郉','鈃銒钘',
'侯矦','喉㗋','猴㺅',
'京亰','景㬌','稤䅫','高髙',
'世卋㔺'/*丗*/,'枼枽',
'虛虚虗','噓嘘','戲戱戯',
'陰隂','蔭䕃','乘乗','剩剰','垂埀',
'舍舎','舖舗',
'卷巻','圈圏',
'襄㐮','壤壌','孃嬢','穰穣','讓譲','釀醸','囊嚢','橐槖',
'俞兪','偷偸','媮婾','喻喩','榆楡',
'卒䘚','倅伜','悴忰','椊枠','瘁疩','碎砕','粹粋','綷紣','翠翆','醉酔','淬㳃',
'奐奂','喚唤','換换','渙涣','煥焕','瘓痪',
'眾衆','潀潨','郎郞郒','部郶','邦邫','拜拝',
'尚尙','飲飮饮','巂雟','鄉郷鄕鄊','囪囱','桑桒','顙䫙','告吿','久乆','插揷挿','歃㰱','簑簔',
'赤灻','煮煑','烈烮','熊㷱','能䏻',//熋、䀆
'臀臋','膂膐','尾㞑','舄舃','潟澙',
'冊册','刪删','姍姗','柵栅','狦㹪',
'皋皐臯','嗥噑嘷','暤暭曍','皞皡皥','槔槹橰','獆獔獋','翱翶翺','鷎鷱',
'遊逰','游㳺','於扵',
'柳栁桞','留㽞畄',
'冭夳',
'關闗関','聯聮䏈聨聫联',
'亡亾兦','罔㒺','忘㤀','丐匄匃','揭掲','渴渇','巟㠩','㡆㡃',
'搜捜','瘦痩',
'萸茰','㥚㤤','諛䛕','斔螤',
'罕䍐䍑','罭䍞','從従徔','縱縦',
'或㦯','斝斚','面靣','回囬','廻廽','迴逥','蛔蜖','圖圗图図','員貟员贠','圓圎圆円','松柗','船舩','拘抅','鉤鈎','肙䏍','娟姢','涓㳙','琄㻆','鵑䳌鹃','雄䧺','統綂统','忩总','捴搃','総縂','聡聪',
'沒没','歿殁','疐㚄','嚏嚔',
'恆恒','揯搄','緪縆','䱍䱎','䱭䱴',
'尔尒尓','你伱','鉨鉩鈢','妳㚷',
'賓賔','濱濵','檳㯽',
'宜冝宐','疊疉','曡㬪','氎㲲','㩹㩸',
'參叅㕘参','別别','柺枴','戶戸户','遠逺','藝兿','歴厯','卯戼','埒埓','頤頥颐','熙煕熈㷩','夔虁蘷','楚椘䠂','柹枾','䪢䪣','濇瀒','斲斵','鬭鬬','華蕐䔢','羋芈','咩哶','哅㕼',
'勻匀','教敎','壽夀','黑黒','曾曽','增増','會㑹会','每毎',
'枏柟','耼聃','蚦蚺','衻袡袇','髥髯','㚩姌','䑙舑','䒣苒','坍㘱',
'卮巵','栀梔',
'犮叐','拔㧞抜','跋䟦','髮髪',
'看㸔','事叓亊㕝','史㕜','堇菫','巺㢲','徵徴','備僃'];

const 純訛 = ['臥卧','毀毁','污汚','閏閠闰','鳳鳯','派沠','虐䖈䨋','屆届㧂','蒙䝉','俎爼','步歨','邊邉','微㣲','輒輙','究䆒','土圡','篡簒','寇宼窛','賫賷','髡髠','肉宍','肻肯','霸覇','遟遅','夢夣','渫㳿','枣栆','鬮䰗䦰阄','丑丒','昂昻','刱剙剏','往徃','凬凮','釜釡','出岀','乾乹亁','媲嫓','曌瞾','丘丠','緐䋣','遞逓','惪恴','搜摉','備俻偹','鼠䑕','吞呑','丟丢','烈煭','皀㿝','皃㒵','器噐','嶻巀','坐㘴','麪麫','昚眘','显㫫','麗䴡','朙眀','珤㻄','敻夐','讒䜛','僊僲','燛㷗','燮夑','玖㺵','喪䘮','解觧','歲歳嵗','辥辪','尪尫㒬','迊匝','貳貮','幼㓜',
'大亣','奇竒','㟢嵜','步歩','涉渉','艷艶','灧灔','灩灎','寧寜寕','甯寗','繼継继','斷㫁断','卻却㕁','腳脚','郤郄','賴頼','瀨瀬','戾戻','淚涙','策䇿筞萗','刺㓨刾','幣幤','弊㢢','廉亷㢘','濂濓','鐮䥥镰','銜衘䘖','㘅㗸','禿秃','頹頺頽颓','函凾','涵㴠','因囙','恩㤙','莽莾','蟒蠎','懷懐','壞壊','捷㨗掶','倢偼','婕媫','散㪚','潸澘',
'祕秘','穎頴颕','稟禀','凜凛','廩廪','懍懔','檁檩','燣燷','癛癝',
'柳桺','駠駵',
'留畱','榴橊','溜澑','瑠璢','瘤癅','籀籒','罶羀','鎦鐂','飀飅','騮驑','塯㙧','㨨㩅',
'替㬱','潛濳潜','簪簮','鐕鐟','譖譛','䣟䣠','僭僣','憯㦧',
'鶪鵙䴗','思恖','顋顖','傻儍','糉糭','椶㯶','鍐鑁',
'韱韯','懺懴','殲殱','瀸瀐','籤籖','纖纎','攕㩥','櫼㰇','䃸䃱','䘋䘂','讖䜟',
'悤怱','傯偬','憁愡','摠揔㹅','樬楤','牕牎','總緫','聰聦','蔥葱','鏓鍯,','驄騘','熜㷓','窻䆫','蟌䗓'];

const 隸定不同 = ['汙汚','玨珏','宿㝛','弼弻','貴䝿贵','眉睂','原厡','年秊','展㞡','禼卨','款歀','隸隷','折㪿','冀兾','兔兎','丘㐀','是昰','虎乕','栗㮚','夬叏','普暜','僊㒨','農䢉','霰䨷','尪尩',
'函圅','菡䓿','䤴䥁','旁㫄','榜㮄','更㪅','綆䌄','齊亝斉','濟㴉済','躋䠁','劑剤','纃緕','薺萕','儕㑪','擠㨈','昔㫺','錯䥘错','去厺㚎','法㳒','粦㷠','遴䢯','驎䮼','票㶾','尉㷉','衜衟','䭫䭬',
'叟叜','廋廀','嫂㛮','艘䑹','螋䗏','醙䤇','鎪䤹','颼䬒','騪䮟'];

/* 筆畫稍訛，而部件變化，致理據重構，而音義不變。雖非宂碼，卻亦影響搜索。 */
const 稍訛重構 = ['溫温','媼媪','慍愠','搵揾','氳氲','縕緼缊','蘊藴蕴','榲榅','熅煴','膃腽','蒕蒀','薀蕰','轀輼辒','醞醖','鰮鰛鳁',
'攺改','罵駡','衋䀌','鬱鬰欎欝','謚諡谥','輩軰','寛寬','柹柿','遟遲','夜亱','庶庻','㓝刑','恥耻','誄䛶','巹卺','旨㫖','拋抛','寶寳','妬妒','覓覔','搉㩁','屑㞕',
'淒凄','涼凉','況况','減减','決决','盜盗','準凖','湌飡','柒㭍','瀆凟',//'沖冲'
'贊賛赞','儹儧','攢攅攒','欑櫕','灒濽','瓚瓉瓒','纘纉缵','讚讃','酇鄼酂','鑽鑚','巑㠝','趲䟎趱',
'歷歴厯','曆暦',
'珍珎','趁趂','跈䟢',
'盍盇','蓋葢','豔豓','嗑㗐',
'羈覊羁','羇覉',
'淄湽','葘菑','輜輺辎','錙鍿锱',
'劫刧刦刼','㤼㥘','劇勮'];
