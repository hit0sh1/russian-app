// ローカルストレージキー
const STORAGE_KEY = 'russian-learning-progress';

// アプリケーションの状態
let appState = {
    currentIndex: 0,
    completedSentences: new Set()
};

// data.jsから文章データを使用
const sentences = russianSentences;

// 初期化
function init() {
    loadProgress();
    setupEventListeners();
    displaySentence();
    
    // サービスワーカーの登録
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
}

// 進捗の読み込み
function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const data = JSON.parse(saved);
        appState.currentIndex = data.currentIndex || 0;
        appState.completedSentences = new Set(data.completedSentences || []);
    }
}

// 進捗の保存
function saveProgress() {
    const data = {
        currentIndex: appState.currentIndex,
        completedSentences: Array.from(appState.completedSentences)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// イベントリスナーの設定
function setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', () => navigateSentence(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateSentence(1));
    document.getElementById('playFullSentence').addEventListener('click', playFullSentence);
    document.getElementById('playWordAudio').addEventListener('click', playWordAudio);
    
    // ポップアップを閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.word') && !e.target.closest('.word-popup')) {
            hideWordPopup();
        }
    });
}

// 文章の表示
function displaySentence() {
    const sentence = sentences[appState.currentIndex];
    const sentenceText = document.getElementById('sentenceText');
    const sentenceTranslation = document.getElementById('sentenceTranslation');
    
    // 文章をクリア
    sentenceText.innerHTML = '';
    
    // 単語ごとにspan要素を作成
    sentence.words.forEach((wordData, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = wordData.text;
        span.dataset.index = index;
        span.addEventListener('click', (e) => showWordPopup(e, wordData));
        sentenceText.appendChild(span);
        
        // スペースを追加（最後の単語以外）
        if (index < sentence.words.length - 1) {
            sentenceText.appendChild(document.createTextNode(' '));
        }
    });
    
    // 翻訳を表示
    sentenceTranslation.textContent = sentence.translation;
    
    // 進捗を更新
    updateProgress();
    updateNavigationButtons();
    
    // 現在の文を完了済みにマーク
    appState.completedSentences.add(sentence.id);
    saveProgress();
}

// 進捗表示の更新
function updateProgress() {
    document.getElementById('currentSentence').textContent = appState.currentIndex + 1;
    document.getElementById('totalSentences').textContent = sentences.length;
}

// ナビゲーションボタンの更新
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = appState.currentIndex === 0;
    document.getElementById('nextBtn').disabled = appState.currentIndex === sentences.length - 1;
}

// 文章のナビゲーション
function navigateSentence(direction) {
    const newIndex = appState.currentIndex + direction;
    if (newIndex >= 0 && newIndex < sentences.length) {
        appState.currentIndex = newIndex;
        displaySentence();
        hideWordPopup();
    }
}

// 単語ポップアップの表示
function showWordPopup(event, wordData) {
    const popup = document.getElementById('wordPopup');
    const word = event.target;
    
    // アクティブな単語のスタイルを更新
    document.querySelectorAll('.word').forEach(w => w.classList.remove('active'));
    word.classList.add('active');
    
    // ポップアップの内容を設定
    document.getElementById('popupWord').textContent = wordData.word;
    document.getElementById('popupReading').textContent = wordData.reading;
    document.getElementById('popupMeaning').textContent = wordData.meaning;
    
    // ポップアップの位置を設定
    const rect = word.getBoundingClientRect();
    popup.style.left = `${rect.left}px`;
    popup.style.top = `${rect.bottom + 10}px`;
    
    // 画面外にはみ出さないよう調整
    popup.classList.remove('hidden');
    const popupRect = popup.getBoundingClientRect();
    if (popupRect.right > window.innerWidth - 10) {
        popup.style.left = `${window.innerWidth - popupRect.width - 10}px`;
    }
    
    // 現在の単語データを保存
    popup.dataset.currentWord = wordData.word;
}

// 単語ポップアップを隠す
function hideWordPopup() {
    document.getElementById('wordPopup').classList.add('hidden');
    document.querySelectorAll('.word').forEach(w => w.classList.remove('active'));
}

// 文章全体の音声再生（Web Speech APIを使用）
function playFullSentence() {
    const sentence = sentences[appState.currentIndex];
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(sentence.russian);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    }
}

// 単語の音声再生
function playWordAudio() {
    const popup = document.getElementById('wordPopup');
    const word = popup.dataset.currentWord;
    if (word && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ru-RU';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// DOMContentLoadedで初期化
document.addEventListener('DOMContentLoaded', init);