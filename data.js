// ロシア語学習データ
// 実際のアプリケーションでは、560文すべてのデータを含める必要があります
// 各文章は頻出単語を効率的に学習できるよう設計されています

const russianSentences = [
    // 基本的な挨拶と自己紹介
    {
        id: 1,
        russian: "Привет, как дела?",
        words: [
            { text: "Привет,", word: "привет", reading: "privét", meaning: "こんにちは", pos: "感嘆詞" },
            { text: "как", word: "как", reading: "kak", meaning: "どのように", pos: "副詞" },
            { text: "дела?", word: "дела", reading: "delá", meaning: "物事、調子", pos: "名詞" }
        ],
        translation: "こんにちは、調子はどう？",
        category: "挨拶"
    },
    {
        id: 2,
        russian: "Меня зовут Анна.",
        words: [
            { text: "Меня", word: "меня", reading: "menyá", meaning: "私を", pos: "代名詞" },
            { text: "зовут", word: "звать", reading: "zovút", meaning: "呼ぶ", pos: "動詞" },
            { text: "Анна.", word: "Анна", reading: "Ánna", meaning: "アンナ（人名）", pos: "固有名詞" }
        ],
        translation: "私の名前はアンナです。",
        category: "自己紹介"
    },
    {
        id: 3,
        russian: "Очень приятно познакомиться.",
        words: [
            { text: "Очень", word: "очень", reading: "óchen'", meaning: "とても", pos: "副詞" },
            { text: "приятно", word: "приятно", reading: "priyátno", meaning: "嬉しい、心地よい", pos: "副詞" },
            { text: "познакомиться.", word: "познакомиться", reading: "poznakómit'sya", meaning: "知り合いになる", pos: "動詞" }
        ],
        translation: "お会いできて嬉しいです。",
        category: "挨拶"
    },
    
    // 日常生活
    {
        id: 4,
        russian: "Я изучаю русский язык уже два года.",
        words: [
            { text: "Я", word: "я", reading: "ya", meaning: "私", pos: "代名詞" },
            { text: "изучаю", word: "изучать", reading: "izucháyu", meaning: "勉強する", pos: "動詞" },
            { text: "русский", word: "русский", reading: "rússkiy", meaning: "ロシアの", pos: "形容詞" },
            { text: "язык", word: "язык", reading: "yazýk", meaning: "言語", pos: "名詞" },
            { text: "уже", word: "уже", reading: "uzhé", meaning: "すでに", pos: "副詞" },
            { text: "два", word: "два", reading: "dva", meaning: "2", pos: "数詞" },
            { text: "года.", word: "год", reading: "góda", meaning: "年", pos: "名詞" }
        ],
        translation: "私はもう2年間ロシア語を勉強しています。",
        category: "学習"
    },
    {
        id: 5,
        russian: "Это очень интересная книга о истории России.",
        words: [
            { text: "Это", word: "это", reading: "éto", meaning: "これは", pos: "代名詞" },
            { text: "очень", word: "очень", reading: "óchen'", meaning: "とても", pos: "副詞" },
            { text: "интересная", word: "интересный", reading: "interésnaya", meaning: "興味深い", pos: "形容詞" },
            { text: "книга", word: "книга", reading: "kníga", meaning: "本", pos: "名詞" },
            { text: "о", word: "о", reading: "o", meaning: "〜について", pos: "前置詞" },
            { text: "истории", word: "история", reading: "istórii", meaning: "歴史", pos: "名詞" },
            { text: "России.", word: "Россия", reading: "Rossíi", meaning: "ロシア", pos: "固有名詞" }
        ],
        translation: "これはロシアの歴史についてのとても面白い本です。",
        category: "読書"
    },
    
    // 天気と季節
    {
        id: 6,
        russian: "Сегодня холодно, но солнечно.",
        words: [
            { text: "Сегодня", word: "сегодня", reading: "sevódnya", meaning: "今日", pos: "副詞" },
            { text: "холодно,", word: "холодно", reading: "khólodno", meaning: "寒い", pos: "副詞" },
            { text: "но", word: "но", reading: "no", meaning: "しかし", pos: "接続詞" },
            { text: "солнечно.", word: "солнечно", reading: "sólnechno", meaning: "晴れている", pos: "副詞" }
        ],
        translation: "今日は寒いですが、晴れています。",
        category: "天気"
    },
    {
        id: 7,
        russian: "Вчера шёл дождь весь день.",
        words: [
            { text: "Вчера", word: "вчера", reading: "vcherá", meaning: "昨日", pos: "副詞" },
            { text: "шёл", word: "идти", reading: "shol", meaning: "降る（雨が）", pos: "動詞" },
            { text: "дождь", word: "дождь", reading: "dozhd'", meaning: "雨", pos: "名詞" },
            { text: "весь", word: "весь", reading: "ves'", meaning: "全て、一日中", pos: "形容詞" },
            { text: "день.", word: "день", reading: "den'", meaning: "日", pos: "名詞" }
        ],
        translation: "昨日は一日中雨が降っていました。",
        category: "天気"
    },
    
    // 食事と料理
    {
        id: 8,
        russian: "Мне нравится русская кухня, особенно борщ.",
        words: [
            { text: "Мне", word: "мне", reading: "mne", meaning: "私に", pos: "代名詞" },
            { text: "нравится", word: "нравиться", reading: "nrávitsya", meaning: "気に入る", pos: "動詞" },
            { text: "русская", word: "русский", reading: "rússkaya", meaning: "ロシアの", pos: "形容詞" },
            { text: "кухня,", word: "кухня", reading: "kúkhnya", meaning: "料理", pos: "名詞" },
            { text: "особенно", word: "особенно", reading: "osóbenno", meaning: "特に", pos: "副詞" },
            { text: "борщ.", word: "борщ", reading: "borshch", meaning: "ボルシチ", pos: "名詞" }
        ],
        translation: "私はロシア料理が好きです、特にボルシチが。",
        category: "食事"
    },
    {
        id: 9,
        russian: "Давайте пойдём в ресторан сегодня вечером.",
        words: [
            { text: "Давайте", word: "давайте", reading: "daváyte", meaning: "〜しましょう", pos: "動詞" },
            { text: "пойдём", word: "пойти", reading: "poydyóm", meaning: "行く", pos: "動詞" },
            { text: "в", word: "в", reading: "v", meaning: "〜へ", pos: "前置詞" },
            { text: "ресторан", word: "ресторан", reading: "restorán", meaning: "レストラン", pos: "名詞" },
            { text: "сегодня", word: "сегодня", reading: "sevódnya", meaning: "今日", pos: "副詞" },
            { text: "вечером.", word: "вечер", reading: "vécherom", meaning: "夕方に", pos: "名詞" }
        ],
        translation: "今晩レストランに行きましょう。",
        category: "食事"
    },
    
    // 家族と友人
    {
        id: 10,
        russian: "Моя семья живёт в Москве.",
        words: [
            { text: "Моя", word: "мой", reading: "moyá", meaning: "私の", pos: "所有代名詞" },
            { text: "семья", word: "семья", reading: "sem'yá", meaning: "家族", pos: "名詞" },
            { text: "живёт", word: "жить", reading: "zhivyót", meaning: "住む", pos: "動詞" },
            { text: "в", word: "в", reading: "v", meaning: "〜に", pos: "前置詞" },
            { text: "Москве.", word: "Москва", reading: "Moskvé", meaning: "モスクワ", pos: "固有名詞" }
        ],
        translation: "私の家族はモスクワに住んでいます。",
        category: "家族"
    },
    
    // 仕事と勉強
    {
        id: 11,
        russian: "Я работаю в офисе каждый день.",
        words: [
            { text: "Я", word: "я", reading: "ya", meaning: "私", pos: "代名詞" },
            { text: "работаю", word: "работать", reading: "rabótayu", meaning: "働く", pos: "動詞" },
            { text: "в", word: "в", reading: "v", meaning: "〜で", pos: "前置詞" },
            { text: "офисе", word: "офис", reading: "ófise", meaning: "オフィス", pos: "名詞" },
            { text: "каждый", word: "каждый", reading: "kázhdyy", meaning: "毎〜", pos: "形容詞" },
            { text: "день.", word: "день", reading: "den'", meaning: "日", pos: "名詞" }
        ],
        translation: "私は毎日オフィスで働いています。",
        category: "仕事"
    },
    {
        id: 12,
        russian: "Студенты готовятся к экзамену.",
        words: [
            { text: "Студенты", word: "студент", reading: "studénty", meaning: "学生たち", pos: "名詞" },
            { text: "готовятся", word: "готовиться", reading: "gotóvyatsya", meaning: "準備する", pos: "動詞" },
            { text: "к", word: "к", reading: "k", meaning: "〜に向けて", pos: "前置詞" },
            { text: "экзамену.", word: "экзамен", reading: "ekzámenu", meaning: "試験", pos: "名詞" }
        ],
        translation: "学生たちは試験の準備をしています。",
        category: "勉強"
    },
    
    // 買い物
    {
        id: 13,
        russian: "Сколько стоит эта рубашка?",
        words: [
            { text: "Сколько", word: "сколько", reading: "skól'ko", meaning: "いくら", pos: "副詞" },
            { text: "стоит", word: "стоить", reading: "stóit", meaning: "値段がする", pos: "動詞" },
            { text: "эта", word: "этот", reading: "éta", meaning: "この", pos: "指示代名詞" },
            { text: "рубашка?", word: "рубашка", reading: "rubáshka", meaning: "シャツ", pos: "名詞" }
        ],
        translation: "このシャツはいくらですか？",
        category: "買い物"
    },
    {
        id: 14,
        russian: "Можно посмотреть другой размер?",
        words: [
            { text: "Можно", word: "можно", reading: "mózhno", meaning: "〜できる", pos: "述語副詞" },
            { text: "посмотреть", word: "посмотреть", reading: "posmotrét'", meaning: "見る", pos: "動詞" },
            { text: "другой", word: "другой", reading: "drugóy", meaning: "別の", pos: "形容詞" },
            { text: "размер?", word: "размер", reading: "razmér", meaning: "サイズ", pos: "名詞" }
        ],
        translation: "別のサイズを見せてもらえますか？",
        category: "買い物"
    },
    
    // 交通と移動
    {
        id: 15,
        russian: "Как добраться до центра города?",
        words: [
            { text: "Как", word: "как", reading: "kak", meaning: "どのように", pos: "副詞" },
            { text: "добраться", word: "добраться", reading: "dobrát'sya", meaning: "たどり着く", pos: "動詞" },
            { text: "до", word: "до", reading: "do", meaning: "〜まで", pos: "前置詞" },
            { text: "центра", word: "центр", reading: "tséntra", meaning: "中心", pos: "名詞" },
            { text: "города?", word: "город", reading: "góroda", meaning: "街", pos: "名詞" }
        ],
        translation: "市の中心部へはどうやって行けばいいですか？",
        category: "交通"
    },
    
    // 趣味と余暇
    {
        id: 16,
        russian: "В свободное время я люблю читать книги.",
        words: [
            { text: "В", word: "в", reading: "v", meaning: "〜に", pos: "前置詞" },
            { text: "свободное", word: "свободный", reading: "svobódnoe", meaning: "自由な", pos: "形容詞" },
            { text: "время", word: "время", reading: "vrémya", meaning: "時間", pos: "名詞" },
            { text: "я", word: "я", reading: "ya", meaning: "私", pos: "代名詞" },
            { text: "люблю", word: "любить", reading: "lyublyú", meaning: "愛する、好む", pos: "動詞" },
            { text: "читать", word: "читать", reading: "chitát'", meaning: "読む", pos: "動詞" },
            { text: "книги.", word: "книга", reading: "knígi", meaning: "本（複数）", pos: "名詞" }
        ],
        translation: "自由時間に私は本を読むのが好きです。",
        category: "趣味"
    },
    
    // 健康と医療
    {
        id: 17,
        russian: "У меня болит голова.",
        words: [
            { text: "У", word: "у", reading: "u", meaning: "〜のところで", pos: "前置詞" },
            { text: "меня", word: "меня", reading: "menyá", meaning: "私", pos: "代名詞" },
            { text: "болит", word: "болеть", reading: "bolít", meaning: "痛む", pos: "動詞" },
            { text: "голова.", word: "голова", reading: "golová", meaning: "頭", pos: "名詞" }
        ],
        translation: "頭が痛いです。",
        category: "健康"
    },
    
    // 時間と日付
    {
        id: 18,
        russian: "Который час сейчас?",
        words: [
            { text: "Который", word: "который", reading: "kotóryy", meaning: "何（時）", pos: "疑問代名詞" },
            { text: "час", word: "час", reading: "chas", meaning: "時", pos: "名詞" },
            { text: "сейчас?", word: "сейчас", reading: "seychás", meaning: "今", pos: "副詞" }
        ],
        translation: "今何時ですか？",
        category: "時間"
    },
    
    // 感情と意見
    {
        id: 19,
        russian: "Я думаю, что это хорошая идея.",
        words: [
            { text: "Я", word: "я", reading: "ya", meaning: "私", pos: "代名詞" },
            { text: "думаю,", word: "думать", reading: "dúmayu", meaning: "思う", pos: "動詞" },
            { text: "что", word: "что", reading: "chto", meaning: "〜ということ", pos: "接続詞" },
            { text: "это", word: "это", reading: "éto", meaning: "これは", pos: "代名詞" },
            { text: "хорошая", word: "хороший", reading: "khoróshaya", meaning: "良い", pos: "形容詞" },
            { text: "идея.", word: "идея", reading: "idéya", meaning: "アイデア", pos: "名詞" }
        ],
        translation: "私はこれは良いアイデアだと思います。",
        category: "意見"
    },
    
    // 文化と伝統
    {
        id: 20,
        russian: "Новый год - самый любимый праздник в России.",
        words: [
            { text: "Новый", word: "новый", reading: "nóvyy", meaning: "新しい", pos: "形容詞" },
            { text: "год", word: "год", reading: "god", meaning: "年", pos: "名詞" },
            { text: "-", word: "-", reading: "-", meaning: "-", pos: "記号" },
            { text: "самый", word: "самый", reading: "sámyy", meaning: "最も", pos: "形容詞" },
            { text: "любимый", word: "любимый", reading: "lyubímyy", meaning: "愛されている", pos: "形容詞" },
            { text: "праздник", word: "праздник", reading: "prázdnik", meaning: "祝日", pos: "名詞" },
            { text: "в", word: "в", reading: "v", meaning: "〜で", pos: "前置詞" },
            { text: "России.", word: "Россия", reading: "Rossíi", meaning: "ロシア", pos: "固有名詞" }
        ],
        translation: "新年はロシアで最も愛されている祝日です。",
        category: "文化"
    }
];

// データをエクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = russianSentences;
}