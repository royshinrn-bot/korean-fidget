/* Korean Fidget — offline dictionary (no API, bundled)
   Batch 1: ~130 high-frequency words. Keys = Korean word.
   Each entry: { en, zh, ja, es, fr, ru, pt, ar, hi, it }
   Expanding toward 500. */
window.DICT = {
  // ── people / family ──
  "사람": {en:"person", zh:"人", ja:"人", es:"persona", fr:"personne", ru:"человек", pt:"pessoa", ar:"شخص", hi:"व्यक्ति", it:"persona"},
  "사랑": {en:"love", zh:"爱", ja:"愛", es:"amor", fr:"amour", ru:"любовь", pt:"amor", ar:"حب", hi:"प्यार", it:"amore"},
  "친구": {en:"friend", zh:"朋友", ja:"友達", es:"amigo", fr:"ami", ru:"друг", pt:"amigo", ar:"صديق", hi:"दोस्त", it:"amico"},
  "가족": {en:"family", zh:"家人", ja:"家族", es:"familia", fr:"famille", ru:"семья", pt:"família", ar:"عائلة", hi:"परिवार", it:"famiglia"},
  "엄마": {en:"mom", zh:"妈妈", ja:"ママ", es:"mamá", fr:"maman", ru:"мама", pt:"mãe", ar:"أمي", hi:"माँ", it:"mamma"},
  "아빠": {en:"dad", zh:"爸爸", ja:"パパ", es:"papá", fr:"papa", ru:"папа", pt:"pai", ar:"أبي", hi:"पापा", it:"papà"},
  "아기": {en:"baby", zh:"婴儿", ja:"赤ちゃん", es:"bebé", fr:"bébé", ru:"малыш", pt:"bebê", ar:"طفل", hi:"शिशु", it:"bebè"},
  "아이": {en:"child", zh:"孩子", ja:"子供", es:"niño", fr:"enfant", ru:"ребёнок", pt:"criança", ar:"طفل", hi:"बच्चा", it:"bambino"},
  "남자": {en:"man", zh:"男人", ja:"男", es:"hombre", fr:"homme", ru:"мужчина", pt:"homem", ar:"رجل", hi:"आदमी", it:"uomo"},
  "여자": {en:"woman", zh:"女人", ja:"女", es:"mujer", fr:"femme", ru:"женщина", pt:"mulher", ar:"امرأة", hi:"औरत", it:"donna"},
  "이름": {en:"name", zh:"名字", ja:"名前", es:"nombre", fr:"nom", ru:"имя", pt:"nome", ar:"اسم", hi:"नाम", it:"nome"},
  "나": {en:"I / me", zh:"我", ja:"私", es:"yo", fr:"moi", ru:"я", pt:"eu", ar:"أنا", hi:"मैं", it:"io"},
  "너": {en:"you", zh:"你", ja:"あなた", es:"tú", fr:"toi", ru:"ты", pt:"você", ar:"أنت", hi:"तुम", it:"tu"},
  "우리": {en:"we / us", zh:"我们", ja:"私たち", es:"nosotros", fr:"nous", ru:"мы", pt:"nós", ar:"نحن", hi:"हम", it:"noi"},

  // ── nature ──
  "하늘": {en:"sky", zh:"天空", ja:"空", es:"cielo", fr:"ciel", ru:"небо", pt:"céu", ar:"سماء", hi:"आसमान", it:"cielo"},
  "해": {en:"sun", zh:"太阳", ja:"太陽", es:"sol", fr:"soleil", ru:"солнце", pt:"sol", ar:"شمس", hi:"सूरज", it:"sole"},
  "달": {en:"moon / month", zh:"月亮", ja:"月", es:"luna", fr:"lune", ru:"луна", pt:"lua", ar:"قمر", hi:"चाँद", it:"luna"},
  "별": {en:"star", zh:"星星", ja:"星", es:"estrella", fr:"étoile", ru:"звезда", pt:"estrela", ar:"نجمة", hi:"तारा", it:"stella"},
  "산": {en:"mountain", zh:"山", ja:"山", es:"montaña", fr:"montagne", ru:"гора", pt:"montanha", ar:"جبل", hi:"पहाड़", it:"montagna"},
  "강": {en:"river", zh:"河", ja:"川", es:"río", fr:"rivière", ru:"река", pt:"rio", ar:"نهر", hi:"नदी", it:"fiume"},
  "바다": {en:"sea", zh:"海", ja:"海", es:"mar", fr:"mer", ru:"море", pt:"mar", ar:"بحر", hi:"समुद्र", it:"mare"},
  "물": {en:"water", zh:"水", ja:"水", es:"agua", fr:"eau", ru:"вода", pt:"água", ar:"ماء", hi:"पानी", it:"acqua"},
  "불": {en:"fire", zh:"火", ja:"火", es:"fuego", fr:"feu", ru:"огонь", pt:"fogo", ar:"نار", hi:"आग", it:"fuoco"},
  "바람": {en:"wind", zh:"风", ja:"風", es:"viento", fr:"vent", ru:"ветер", pt:"vento", ar:"رياح", hi:"हवा", it:"vento"},
  "비": {en:"rain", zh:"雨", ja:"雨", es:"lluvia", fr:"pluie", ru:"дождь", pt:"chuva", ar:"مطر", hi:"बारिश", it:"pioggia"},
  "눈": {en:"eye / snow", zh:"眼睛／雪", ja:"目／雪", es:"ojo / nieve", fr:"œil / neige", ru:"глаз / снег", pt:"olho / neve", ar:"عين / ثلج", hi:"आँख / बर्फ़", it:"occhio / neve"},
  "나무": {en:"tree", zh:"树", ja:"木", es:"árbol", fr:"arbre", ru:"дерево", pt:"árvore", ar:"شجرة", hi:"पेड़", it:"albero"},
  "꽃": {en:"flower", zh:"花", ja:"花", es:"flor", fr:"fleur", ru:"цветок", pt:"flor", ar:"زهرة", hi:"फूल", it:"fiore"},
  "풀": {en:"grass", zh:"草", ja:"草", es:"hierba", fr:"herbe", ru:"трава", pt:"grama", ar:"عشب", hi:"घास", it:"erba"},
  "돌": {en:"stone", zh:"石头", ja:"石", es:"piedra", fr:"pierre", ru:"камень", pt:"pedra", ar:"حجر", hi:"पत्थर", it:"pietra"},

  // ── animals ──
  "개": {en:"dog", zh:"狗", ja:"犬", es:"perro", fr:"chien", ru:"собака", pt:"cachorro", ar:"كلب", hi:"कुत्ता", it:"cane"},
  "고양이": {en:"cat", zh:"猫", ja:"猫", es:"gato", fr:"chat", ru:"кошка", pt:"gato", ar:"قطة", hi:"बिल्ली", it:"gatto"},
  "새": {en:"bird", zh:"鸟", ja:"鳥", es:"pájaro", fr:"oiseau", ru:"птица", pt:"pássaro", ar:"طائر", hi:"पक्षी", it:"uccello"},
  "소": {en:"cow", zh:"牛", ja:"牛", es:"vaca", fr:"vache", ru:"корова", pt:"vaca", ar:"بقرة", hi:"गाय", it:"mucca"},
  "말": {en:"horse / words", zh:"马／话", ja:"馬／言葉", es:"caballo / palabra", fr:"cheval / parole", ru:"лошадь / слова", pt:"cavalo / fala", ar:"حصان / كلام", hi:"घोड़ा / बात", it:"cavallo / parole"},
  "돼지": {en:"pig", zh:"猪", ja:"豚", es:"cerdo", fr:"cochon", ru:"свинья", pt:"porco", ar:"خنزير", hi:"सूअर", it:"maiale"},
  "닭": {en:"chicken", zh:"鸡", ja:"鶏", es:"pollo", fr:"poulet", ru:"курица", pt:"galinha", ar:"دجاجة", hi:"मुर्गी", it:"pollo"},
  "토끼": {en:"rabbit", zh:"兔子", ja:"うさぎ", es:"conejo", fr:"lapin", ru:"кролик", pt:"coelho", ar:"أرنب", hi:"खरगोश", it:"coniglio"},
  "곰": {en:"bear", zh:"熊", ja:"熊", es:"oso", fr:"ours", ru:"медведь", pt:"urso", ar:"دب", hi:"भालू", it:"orso"},
  "물고기": {en:"fish", zh:"鱼", ja:"魚", es:"pez", fr:"poisson", ru:"рыба", pt:"peixe", ar:"سمكة", hi:"मछली", it:"pesce"},

  // ── food ──
  "밥": {en:"cooked rice / meal", zh:"饭", ja:"ご飯", es:"arroz", fr:"riz", ru:"рис", pt:"arroz", ar:"أرز", hi:"चावल", it:"riso"},
  "국": {en:"soup", zh:"汤", ja:"スープ", es:"sopa", fr:"soupe", ru:"суп", pt:"sopa", ar:"حساء", hi:"सूप", it:"zuppa"},
  "고기": {en:"meat", zh:"肉", ja:"肉", es:"carne", fr:"viande", ru:"мясо", pt:"carne", ar:"لحم", hi:"माँस", it:"carne"},
  "빵": {en:"bread", zh:"面包", ja:"パン", es:"pan", fr:"pain", ru:"хлеб", pt:"pão", ar:"خبز", hi:"रोटी", it:"pane"},
  "우유": {en:"milk", zh:"牛奶", ja:"牛乳", es:"leche", fr:"lait", ru:"молоко", pt:"leite", ar:"حليب", hi:"दूध", it:"latte"},
  "커피": {en:"coffee", zh:"咖啡", ja:"コーヒー", es:"café", fr:"café", ru:"кофе", pt:"café", ar:"قهوة", hi:"कॉफ़ी", it:"caffè"},
  "차": {en:"tea / car", zh:"茶／车", ja:"お茶／車", es:"té / coche", fr:"thé / voiture", ru:"чай / машина", pt:"chá / carro", ar:"شاي / سيارة", hi:"चाय / गाड़ी", it:"tè / auto"},
  "사과": {en:"apple", zh:"苹果", ja:"りんご", es:"manzana", fr:"pomme", ru:"яблоко", pt:"maçã", ar:"تفاحة", hi:"सेब", it:"mela"},
  "포도": {en:"grapes", zh:"葡萄", ja:"ぶどう", es:"uvas", fr:"raisin", ru:"виноград", pt:"uvas", ar:"عنب", hi:"अंगूर", it:"uva"},
  "딸기": {en:"strawberry", zh:"草莓", ja:"いちご", es:"fresa", fr:"fraise", ru:"клубника", pt:"morango", ar:"فراولة", hi:"स्ट्रॉबेरी", it:"fragola"},
  "소금": {en:"salt", zh:"盐", ja:"塩", es:"sal", fr:"sel", ru:"соль", pt:"sal", ar:"ملح", hi:"नमक", it:"sale"},
  "설탕": {en:"sugar", zh:"糖", ja:"砂糖", es:"azúcar", fr:"sucre", ru:"сахар", pt:"açúcar", ar:"سكر", hi:"चीनी", it:"zucchero"},
  "과일": {en:"fruit", zh:"水果", ja:"果物", es:"fruta", fr:"fruit", ru:"фрукт", pt:"fruta", ar:"فاكهة", hi:"फल", it:"frutta"},

  // ── body ──
  "머리": {en:"head / hair", zh:"头", ja:"頭", es:"cabeza", fr:"tête", ru:"голова", pt:"cabeça", ar:"رأس", hi:"सिर", it:"testa"},
  "코": {en:"nose", zh:"鼻子", ja:"鼻", es:"nariz", fr:"nez", ru:"нос", pt:"nariz", ar:"أنف", hi:"नाक", it:"naso"},
  "입": {en:"mouth", zh:"嘴", ja:"口", es:"boca", fr:"bouche", ru:"рот", pt:"boca", ar:"فم", hi:"मुँह", it:"bocca"},
  "귀": {en:"ear", zh:"耳朵", ja:"耳", es:"oreja", fr:"oreille", ru:"ухо", pt:"orelha", ar:"أذن", hi:"कान", it:"orecchio"},
  "손": {en:"hand", zh:"手", ja:"手", es:"mano", fr:"main", ru:"рука", pt:"mão", ar:"يد", hi:"हाथ", it:"mano"},
  "발": {en:"foot", zh:"脚", ja:"足", es:"pie", fr:"pied", ru:"нога", pt:"pé", ar:"قدم", hi:"पैर", it:"piede"},
  "몸": {en:"body", zh:"身体", ja:"体", es:"cuerpo", fr:"corps", ru:"тело", pt:"corpo", ar:"جسم", hi:"शरीर", it:"corpo"},

  // ── home / objects ──
  "집": {en:"house / home", zh:"家", ja:"家", es:"casa", fr:"maison", ru:"дом", pt:"casa", ar:"بيت", hi:"घर", it:"casa"},
  "문": {en:"door", zh:"门", ja:"ドア", es:"puerta", fr:"porte", ru:"дверь", pt:"porta", ar:"باب", hi:"दरवाज़ा", it:"porta"},
  "책": {en:"book", zh:"书", ja:"本", es:"libro", fr:"livre", ru:"книга", pt:"livro", ar:"كتاب", hi:"किताब", it:"libro"},
  "종이": {en:"paper", zh:"纸", ja:"紙", es:"papel", fr:"papier", ru:"бумага", pt:"papel", ar:"ورق", hi:"कागज़", it:"carta"},
  "가방": {en:"bag", zh:"包", ja:"かばん", es:"bolso", fr:"sac", ru:"сумка", pt:"bolsa", ar:"حقيبة", hi:"बैग", it:"borsa"},
  "신발": {en:"shoes", zh:"鞋", ja:"靴", es:"zapatos", fr:"chaussures", ru:"обувь", pt:"sapatos", ar:"حذاء", hi:"जूते", it:"scarpe"},
  "옷": {en:"clothes", zh:"衣服", ja:"服", es:"ropa", fr:"vêtements", ru:"одежда", pt:"roupa", ar:"ملابس", hi:"कपड़े", it:"vestiti"},
  "모자": {en:"hat", zh:"帽子", ja:"帽子", es:"sombrero", fr:"chapeau", ru:"шляпа", pt:"chapéu", ar:"قبعة", hi:"टोपी", it:"cappello"},
  "시계": {en:"clock / watch", zh:"钟表", ja:"時計", es:"reloj", fr:"montre", ru:"часы", pt:"relógio", ar:"ساعة", hi:"घड़ी", it:"orologio"},
  "전화": {en:"phone", zh:"电话", ja:"電話", es:"teléfono", fr:"téléphone", ru:"телефон", pt:"telefone", ar:"هاتف", hi:"फ़ोन", it:"telefono"},
  "의자": {en:"chair", zh:"椅子", ja:"椅子", es:"silla", fr:"chaise", ru:"стул", pt:"cadeira", ar:"كرسي", hi:"कुर्सी", it:"sedia"},
  "돈": {en:"money", zh:"钱", ja:"お金", es:"dinero", fr:"argent", ru:"деньги", pt:"dinheiro", ar:"مال", hi:"पैसा", it:"denaro"},
  "우산": {en:"umbrella", zh:"雨伞", ja:"傘", es:"paraguas", fr:"parapluie", ru:"зонт", pt:"guarda-chuva", ar:"مظلة", hi:"छाता", it:"ombrello"},

  // ── places ──
  "학교": {en:"school", zh:"学校", ja:"学校", es:"escuela", fr:"école", ru:"школа", pt:"escola", ar:"مدرسة", hi:"स्कूल", it:"scuola"},
  "병원": {en:"hospital", zh:"医院", ja:"病院", es:"hospital", fr:"hôpital", ru:"больница", pt:"hospital", ar:"مستشفى", hi:"अस्पताल", it:"ospedale"},
  "가게": {en:"store / shop", zh:"商店", ja:"店", es:"tienda", fr:"magasin", ru:"магазин", pt:"loja", ar:"متجر", hi:"दुकान", it:"negozio"},
  "시장": {en:"market", zh:"市场", ja:"市場", es:"mercado", fr:"marché", ru:"рынок", pt:"mercado", ar:"سوق", hi:"बाज़ार", it:"mercato"},
  "공원": {en:"park", zh:"公园", ja:"公園", es:"parque", fr:"parc", ru:"парк", pt:"parque", ar:"حديقة", hi:"पार्क", it:"parco"},
  "나라": {en:"country", zh:"国家", ja:"国", es:"país", fr:"pays", ru:"страна", pt:"país", ar:"بلد", hi:"देश", it:"paese"},
  "도시": {en:"city", zh:"城市", ja:"都市", es:"ciudad", fr:"ville", ru:"город", pt:"cidade", ar:"مدينة", hi:"शहर", it:"città"},
  "길": {en:"road / street", zh:"路", ja:"道", es:"calle", fr:"rue", ru:"дорога", pt:"rua", ar:"طريق", hi:"सड़क", it:"strada"},
  "방": {en:"room", zh:"房间", ja:"部屋", es:"habitación", fr:"chambre", ru:"комната", pt:"quarto", ar:"غرفة", hi:"कमरा", it:"stanza"},

  // ── time ──
  "오늘": {en:"today", zh:"今天", ja:"今日", es:"hoy", fr:"aujourd'hui", ru:"сегодня", pt:"hoje", ar:"اليوم", hi:"आज", it:"oggi"},
  "내일": {en:"tomorrow", zh:"明天", ja:"明日", es:"mañana", fr:"demain", ru:"завтра", pt:"amanhã", ar:"غدًا", hi:"कल", it:"domani"},
  "어제": {en:"yesterday", zh:"昨天", ja:"昨日", es:"ayer", fr:"hier", ru:"вчера", pt:"ontem", ar:"أمس", hi:"कल (बीता)", it:"ieri"},
  "아침": {en:"morning", zh:"早上", ja:"朝", es:"mañana", fr:"matin", ru:"утро", pt:"manhã", ar:"صباح", hi:"सुबह", it:"mattina"},
  "저녁": {en:"evening", zh:"晚上", ja:"夕方", es:"tarde / noche", fr:"soir", ru:"вечер", pt:"noite", ar:"مساء", hi:"शाम", it:"sera"},
  "밤": {en:"night", zh:"夜晚", ja:"夜", es:"noche", fr:"nuit", ru:"ночь", pt:"noite", ar:"ليل", hi:"रात", it:"notte"},
  "시간": {en:"time / hour", zh:"时间", ja:"時間", es:"tiempo / hora", fr:"temps / heure", ru:"время / час", pt:"tempo / hora", ar:"وقت / ساعة", hi:"समय / घंटा", it:"tempo / ora"},
  "지금": {en:"now", zh:"现在", ja:"今", es:"ahora", fr:"maintenant", ru:"сейчас", pt:"agora", ar:"الآن", hi:"अभी", it:"adesso"},

  // ── colors ──
  "색": {en:"color", zh:"颜色", ja:"色", es:"color", fr:"couleur", ru:"цвет", pt:"cor", ar:"لون", hi:"रंग", it:"colore"},
  "빨강": {en:"red", zh:"红色", ja:"赤", es:"rojo", fr:"rouge", ru:"красный", pt:"vermelho", ar:"أحمر", hi:"लाल", it:"rosso"},
  "파랑": {en:"blue", zh:"蓝色", ja:"青", es:"azul", fr:"bleu", ru:"синий", pt:"azul", ar:"أزرق", hi:"नीला", it:"blu"},
  "노랑": {en:"yellow", zh:"黄色", ja:"黄", es:"amarillo", fr:"jaune", ru:"жёлтый", pt:"amarelo", ar:"أصفر", hi:"पीला", it:"giallo"},
  "초록": {en:"green", zh:"绿色", ja:"緑", es:"verde", fr:"vert", ru:"зелёный", pt:"verde", ar:"أخضر", hi:"हरा", it:"verde"},

  // ── numbers (native Korean) ──
  "하나": {en:"one", zh:"一", ja:"一つ", es:"uno", fr:"un", ru:"один", pt:"um", ar:"واحد", hi:"एक", it:"uno"},
  "둘": {en:"two", zh:"二", ja:"二つ", es:"dos", fr:"deux", ru:"два", pt:"dois", ar:"اثنان", hi:"दो", it:"due"},
  "셋": {en:"three", zh:"三", ja:"三つ", es:"tres", fr:"trois", ru:"три", pt:"três", ar:"ثلاثة", hi:"तीन", it:"tre"},
  "넷": {en:"four", zh:"四", ja:"四つ", es:"cuatro", fr:"quatre", ru:"четыре", pt:"quatro", ar:"أربعة", hi:"चार", it:"quattro"},
  "다섯": {en:"five", zh:"五", ja:"五つ", es:"cinco", fr:"cinq", ru:"пять", pt:"cinco", ar:"خمسة", hi:"पाँच", it:"cinque"},
  "여섯": {en:"six", zh:"六", ja:"六つ", es:"seis", fr:"six", ru:"шесть", pt:"seis", ar:"ستة", hi:"छह", it:"sei"},
  "일곱": {en:"seven", zh:"七", ja:"七つ", es:"siete", fr:"sept", ru:"семь", pt:"sete", ar:"سبعة", hi:"सात", it:"sette"},
  "여덟": {en:"eight", zh:"八", ja:"八つ", es:"ocho", fr:"huit", ru:"восемь", pt:"oito", ar:"ثمانية", hi:"आठ", it:"otto"},
  "아홉": {en:"nine", zh:"九", ja:"九つ", es:"nueve", fr:"neuf", ru:"девять", pt:"nove", ar:"تسعة", hi:"नौ", it:"nove"},
  "열": {en:"ten", zh:"十", ja:"十", es:"diez", fr:"dix", ru:"десять", pt:"dez", ar:"عشرة", hi:"दस", it:"dieci"},

  // ── common verbs (dictionary form) ──
  "가다": {en:"to go", zh:"去", ja:"行く", es:"ir", fr:"aller", ru:"идти", pt:"ir", ar:"يذهب", hi:"जाना", it:"andare"},
  "오다": {en:"to come", zh:"来", ja:"来る", es:"venir", fr:"venir", ru:"приходить", pt:"vir", ar:"يأتي", hi:"आना", it:"venire"},
  "먹다": {en:"to eat", zh:"吃", ja:"食べる", es:"comer", fr:"manger", ru:"есть", pt:"comer", ar:"يأكل", hi:"खाना", it:"mangiare"},
  "자다": {en:"to sleep", zh:"睡觉", ja:"寝る", es:"dormir", fr:"dormir", ru:"спать", pt:"dormir", ar:"ينام", hi:"सोना", it:"dormire"},
  "보다": {en:"to see", zh:"看", ja:"見る", es:"ver", fr:"voir", ru:"видеть", pt:"ver", ar:"يرى", hi:"देखना", it:"vedere"},
  "하다": {en:"to do", zh:"做", ja:"する", es:"hacer", fr:"faire", ru:"делать", pt:"fazer", ar:"يفعل", hi:"करना", it:"fare"},
  "사다": {en:"to buy", zh:"买", ja:"買う", es:"comprar", fr:"acheter", ru:"покупать", pt:"comprar", ar:"يشتري", hi:"खरीदना", it:"comprare"},
  "읽다": {en:"to read", zh:"读", ja:"読む", es:"leer", fr:"lire", ru:"читать", pt:"ler", ar:"يقرأ", hi:"पढ़ना", it:"leggere"},
  "놀다": {en:"to play", zh:"玩", ja:"遊ぶ", es:"jugar", fr:"jouer", ru:"играть", pt:"brincar", ar:"يلعب", hi:"खेलना", it:"giocare"},
  "웃다": {en:"to laugh", zh:"笑", ja:"笑う", es:"reír", fr:"rire", ru:"смеяться", pt:"rir", ar:"يضحك", hi:"हँसना", it:"ridere"},
  "울다": {en:"to cry", zh:"哭", ja:"泣く", es:"llorar", fr:"pleurer", ru:"плакать", pt:"chorar", ar:"يبكي", hi:"रोना", it:"piangere"},
  "걷다": {en:"to walk", zh:"走", ja:"歩く", es:"caminar", fr:"marcher", ru:"ходить", pt:"caminhar", ar:"يمشي", hi:"चलना", it:"camminare"},
  "뛰다": {en:"to run", zh:"跑", ja:"走る", es:"correr", fr:"courir", ru:"бегать", pt:"correr", ar:"يركض", hi:"दौड़ना", it:"correre"},

  // ── common adjectives (dictionary form) ──
  "크다": {en:"to be big", zh:"大", ja:"大きい", es:"grande", fr:"grand", ru:"большой", pt:"grande", ar:"كبير", hi:"बड़ा", it:"grande"},
  "작다": {en:"to be small", zh:"小", ja:"小さい", es:"pequeño", fr:"petit", ru:"маленький", pt:"pequeno", ar:"صغير", hi:"छोटा", it:"piccolo"},
  "좋다": {en:"to be good", zh:"好", ja:"良い", es:"bueno", fr:"bon", ru:"хороший", pt:"bom", ar:"جيد", hi:"अच्छा", it:"buono"},
  "많다": {en:"to be many", zh:"多", ja:"多い", es:"mucho", fr:"beaucoup", ru:"много", pt:"muito", ar:"كثير", hi:"बहुत", it:"molto"},
  "춥다": {en:"to be cold", zh:"冷", ja:"寒い", es:"frío", fr:"froid", ru:"холодно", pt:"frio", ar:"بارد", hi:"ठंडा", it:"freddo"},
  "덥다": {en:"to be hot", zh:"热", ja:"暑い", es:"caluroso", fr:"chaud", ru:"жарко", pt:"quente", ar:"حار", hi:"गरम", it:"caldo"}
};
