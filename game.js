// Oyun durumunu tutan nesne tanımlanıyor.
let state = {
    playerNames: { X: 'Player X', O: 'Player O' }, // Oyuncu adları varsayılan olarak tanımlanıyor.
    board: [], // Oyun tahtası boş bir dizi olarak başlatılıyor.
    currentPlayer: 'X', // İlk hamleyi yapacak oyuncu "X" olarak ayarlanıyor.
    winner: null, // Oyunun kazananı başlangıçta "null" olarak tanımlanıyor.
    winningLine: null, // Kazanan çizginin koordinatları başlangıçta "null" olarak ayarlanıyor.
    scores: { X: 0, O: 0 }, // Oyuncu skorları sıfırdan başlatılıyor.
    gameHistory: [], // Hamle geçmişi boş bir dizi olarak tutuluyor.
    timeLeft: 30, // Her hamle için kalan süre 30 saniye olarak ayarlanıyor.
    isComputerOpponent: false, // Bilgisayara karşı oynama seçeneği varsayılan olarak kapalı.
    difficulty: 'easy', // Oyunun zorluk seviyesi varsayılan olarak "easy" (kolay) olarak ayarlanıyor.
    theme: 'light', // Oyun teması varsayılan olarak "light" (açık tema).
    language: 'en', // Varsayılan dil İngilizce.
    customIcons: { X: 'X', O: 'O' }, // Oyuncuların kullandığı simgeler varsayılan olarak "X" ve "O".
    boardSize: 3, // Oyun tahtasının boyutu varsayılan olarak 3x3.
    timer: null, // Zamanlayıcı referansı başlangıçta null.
    gameMode: null // Oyun modu başlangıçta belirlenmemiş.
};

// Oyun için farklı dillerdeki metinlerin tanımlandığı çeviri nesnesi.
const translations = {
    en: { // İngilizce çeviriler.
        win: 'Player {player} wins!', // Kazanan oyuncu için mesaj.
        draw: ['It\'s a draw!', 'Equal power fight!', 'Nobody won, but it was fun!'], // Beraberlik mesajları.
        turn: 'Player {player}\'s turn', // Sıradaki oyuncu için mesaj.
        welcome: 'Welcome to TicTacToe', // Ana sayfa hoş geldiniz mesajı.
        twoPlayers: '2 Players', // İki oyuncu modu seçeneği.
        vsComputer: 'vs Computer', // Bilgisayara karşı oynama seçeneği.
        settings: 'Settings', // Ayarlar düğmesi metni.
        gameSettings: 'Game Settings', // Ayarlar sayfası başlığı.
        back: 'Back', // Geri düğmesi metni.
        backToMain: 'Back to Main', // Ana menüye dön düğmesi metni.
        enterNames: 'Enter Player Names', // Oyuncu isimlerini girme başlığı.
        player1Name: 'Player X Name', // Oyuncu X ismi etiketi.
        player2Name: 'Player O Name', // Oyuncu O ismi etiketi.
        startGame: 'Start Game', // Oyunu başlat düğmesi metni.
        cancel: 'Cancel', // İptal düğmesi metni.
        undoMove: 'Undo Move', // Hamleyi geri alma düğmesi metni.
        newGame: 'New Game', // Yeni oyun başlat düğmesi metni.
        timeLeft: 'Time left: ', // Kalan süre etiketi.
        seconds: 's', // Süre birimi saniye.
        difficulty: {
            easy: 'Easy', // Kolay zorluk seviyesi.
            medium: 'Medium', // Orta zorluk seviyesi.
            hard: 'Hard' // Zor zorluk seviyesi.
        },
        theme: {
            light: 'Light Theme', // Açık tema seçeneği.
            dark: 'Dark Theme', // Koyu tema seçeneği.
        }
    },
    tr: { // Türkçe çeviriler.
        win: 'Oyuncu {player} kazandı!', // Kazanan oyuncu için mesaj.
        draw: ['Berabere!', 'Güçler eşit!', 'Kimse kazanmadı ama eğlenceliydi!'], // Beraberlik mesajları.
        turn: 'Sıra Oyuncu {player}\'da', // Sıradaki oyuncu için mesaj.
        welcome: 'XOX Oyununa Hoşgeldiniz', // Ana sayfa hoş geldiniz mesajı.
        twoPlayers: '2 Oyuncu', // İki oyuncu modu seçeneği.
        vsComputer: 'Bilgisayara Karşı', // Bilgisayara karşı oynama seçeneği.
        settings: 'Ayarlar', // Ayarlar düğmesi metni.
        gameSettings: 'Oyun Ayarları', // Ayarlar sayfası başlığı.
        back: 'Geri', // Geri düğmesi metni.
        backToMain: 'Ana Menüye Dön', // Ana menüye dön düğmesi metni.
        enterNames: 'Oyuncu İsimlerini Girin', // Oyuncu isimlerini girme başlığı.
        player1Name: 'X Oyuncusu İsmi', // Oyuncu X ismi etiketi.
        player2Name: 'O Oyuncusu İsmi', // Oyuncu O ismi etiketi.
        startGame: 'Oyunu Başlat', // Oyunu başlat düğmesi metni.
        cancel: 'İptal', // İptal düğmesi metni.
        undoMove: 'Hamleyi Geri Al', // Hamleyi geri alma düğmesi metni.
        newGame: 'Yeni Oyun', // Yeni oyun başlat düğmesi metni.
        timeLeft: 'Kalan süre: ', // Kalan süre etiketi.
        seconds: 'sn', // Süre birimi saniye.
        difficulty: {
            easy: 'Kolay', // Kolay zorluk seviyesi.
            medium: 'Orta', // Orta zorluk seviyesi.
            hard: 'Zor' // Zor zorluk seviyesi.
        },
        theme: {
            light: 'Açık Tema', // Açık tema seçeneği.
            dark: 'Koyu Tema', // Koyu tema seçeneği.
        }
    },
    ar: { // Arapça çeviriler.
        win: 'اللاعب {player} فاز!', // Kazanan oyuncu için mesaj.
        draw: ['تعادل!', 'قتال متكافئ!', 'لم يفز أحد، لكنها كانت ممتعة!'], // Beraberlik mesajları.
        turn: 'دور اللاعب {player}', // Sıradaki oyuncu için mesaj.
        welcome: 'مرحباً بكم في لعبة اكس او', // Ana sayfa hoş geldiniz mesajı.
        twoPlayers: 'لاعبان', // İki oyuncu modu seçeneği.
        vsComputer: 'ضد الكمبيوتر', // Bilgisayara karşı oynama seçeneği.
        settings: 'الإعدادات', // Ayarlar düğmesi metni.
        gameSettings: 'إعدادات اللعبة', // Ayarlar sayfası başlığı.
        back: 'رجوع', // Geri düğmesi metni.
        backToMain: 'العودة للرئيسية', // Ana menüye dön düğmesi metni.
        enterNames: 'أدخل أسماء اللاعبين', // Oyuncu isimlerini girme başlığı.
        player1Name: 'اسم اللاعب X', // Oyuncu X ismi etiketi.
        player2Name: 'اسم اللاعب O', // Oyuncu O ismi etiketi.
        startGame: 'ابدأ اللعبة', // Oyunu başlat düğmesi metni.
        cancel: 'إلغاء', // İptal düğmesi metni.
        undoMove: 'تراجع عن الحركة', // Hamleyi geri alma düğmesi metni.
        newGame: 'لعبة جديدة', // Yeni oyun başlat düğmesi metni.
        timeLeft: 'الوقت المتبقي: ', // Kalan süre etiketi.
        seconds: 'ث', // Süre birimi saniye.
        difficulty: {
            easy: 'سهل', // Kolay zorluk seviyesi.
            medium: 'متوسط', // Orta zorluk seviyesi.
            hard: 'صعب' // Zor zorluk seviyesi.
        },
        theme: {
            light: 'مظهر فاتح', // Açık tema seçeneği.
            dark: 'مظهر داكن', // Koyu tema seçeneği.
        }
    }
};


// Oyunu başlatma işlevi.
function startGame(mode) {
    state.gameMode = mode; // Seçilen oyun modu (iki oyunculu veya bilgisayara karşı) kaydediliyor.
    state.isComputerOpponent = (mode === 'computer'); // Eğer oyun modu bilgisayara karşı ise, bu bilgi güncelleniyor.

    if (mode === 'two-player') { // İki oyunculu mod seçildiyse...
        document.getElementById('playerNameDialog').classList.add('active'); // Oyuncu isimleri için diyalog kutusu açılıyor.
    } else { // Bilgisayara karşı modda...
        document.querySelector('.landing-page').classList.remove('active'); // Ana sayfa görünümden kaldırılıyor.
        document.querySelector('.game-container').classList.remove('hidden'); // Oyun konteyneri görünür hale getiriliyor.
        initGame(); // Oyun başlatılıyor.
    }
}

// Oyuncu isimlerini alıp oyunu başlatan işlev.
function submitPlayerNames() {
    const player1Name = document.getElementById('player1Name').value.trim(); // Oyuncu 1 adı alınıyor ve boşluklar temizleniyor.
    const player2Name = document.getElementById('player2Name').value.trim(); // Oyuncu 2 adı alınıyor ve boşluklar temizleniyor.

    if (player1Name && player2Name) { // İki isim de girilmişse...
        state.playerNames.X = player1Name; // Oyuncu X adı güncelleniyor.
        state.playerNames.O = player2Name; // Oyuncu O adı güncelleniyor.
        closePlayerDialog(); // Oyuncu adı diyalogu kapatılıyor.
        document.querySelector('.landing-page').classList.remove('active'); // Ana sayfa görünümden kaldırılıyor.
        document.querySelector('.game-container').classList.remove('hidden'); // Oyun konteyneri görünür hale getiriliyor.
        updateScoreboard(); // Skor tablosu güncelleniyor.
        initGame(); // Oyun başlatılıyor.
    } else { // Eğer isimler eksikse...
        alert('Please enter names for both players'); // Kullanıcıya isimleri girmesi için uyarı veriliyor.
    }
}

// Oyuncu isimleri diyalog kutusunu kapatan işlev.
function closePlayerDialog() {
    document.getElementById('playerNameDialog').classList.remove('active'); // Diyalog kutusu görünümden kaldırılıyor.
    document.getElementById('player1Name').value = ''; // Oyuncu 1 adı temizleniyor.
    document.getElementById('player2Name').value = ''; // Oyuncu 2 adı temizleniyor.
}

// Ayarlar sayfasını gösteren işlev.
function showSettings() {
    document.querySelector('.landing-page').classList.remove('active'); // Ana sayfa görünümden kaldırılıyor.
    document.querySelector('.settings-page').classList.add('active'); // Ayarlar sayfası görünür hale getiriliyor.
}

// Ana menüye dönen işlev.
function backToMain() {
    document.querySelector('.settings-page').classList.remove('active'); // Ayarlar sayfası görünümden kaldırılıyor.
    document.querySelector('.game-container').classList.add('hidden'); // Oyun konteyneri gizleniyor.
    document.querySelector('.landing-page').classList.add('active'); // Ana sayfa görünür hale getiriliyor.
    state.scores = { X: 0, O: 0 }; // Skorlar sıfırlanıyor.
    updateScoreboard(); // Skor tablosu güncelleniyor.
}

// Yeni oyun başlatıldığında undo butonunu tekrar göster ve timer'ı başlat
function initGame() {
    // Tahtayı temizle ve sıfırla
    const size = state.boardSize; // Tahta boyutunu al.
    state.board = Array(size).fill().map(() => Array(size).fill(null)); // Tahtayı boş bir dizi ile sıfırla.
    state.currentPlayer = 'X'; // İlk oyuncu olarak \"X\" ayarla.
    state.winner = null; // Kazananı sıfırla.
    state.winningLine = null; // Kazanan çizgiyi sıfırla.
    state.gameHistory = []; // Hamle geçmişini sıfırla.

    // Undo butonunu tekrar göster
    const undoButton = document.getElementById('undo'); // Undo butonunu seç.
    if (undoButton) { // Eğer buton varsa...
        undoButton.style.display = 'block'; // Butonu tekrar görünür yap.
    }

    // Tahtayı güncelle
    updateBoard(); // Görsel olarak tahtayı sıfırla.

    // Timer'ı başlat
    startTimer(); // Yeni oyun için zamanlayıcıyı başlat.
}

// Oyun tahtasını güncelleyen işlev.
function updateBoard() {
    const boardElement = document.querySelector('.game-board'); // Tahta HTML elementi seçiliyor.
    boardElement.style.gridTemplateColumns = `repeat(${state.boardSize}, var(--cell-size))`; // Tahtanın boyutuna göre kolonlar ayarlanıyor.
    boardElement.innerHTML = ''; // Tahta temizleniyor.

    state.board.forEach((row, i) => { // Her bir satır için...
        row.forEach((cell, j) => { // Her bir hücre için...
            const cellElement = document.createElement('div'); // Yeni bir div (hücre) oluşturuluyor.
            cellElement.className = 'cell'; // Hücreye \"cell\" sınıfı atanıyor.
            if (cell) { // Eğer hücre doluysa...
                cellElement.textContent = state.customIcons[cell]; // Hücreye oyuncunun simgesi yerleştiriliyor.
                cellElement.classList.add(cell.toLowerCase()); // Hücreye oyuncunun sınıfı atanıyor (örneğin: \"x\" veya \"o\").
            }
            if (state.winningLine?.some(([x, y]) => x === i && y === j)) { // Eğer hücre kazanan çizgideyse...
                cellElement.classList.add('winning'); // Kazanan hücre vurgulanıyor.
            }
            cellElement.addEventListener('click', () => handleMove(i, j)); // Hücreye tıklandığında hareket işlevi çağrılıyor.
            boardElement.appendChild(cellElement); // Hücre tahtaya ekleniyor.
        });
    });
}

// Oyuncunun yaptığı hamleyi işleyen işlev.
function handleMove(row, col) {
    if (state.winner || state.board[row][col]) return; // Eğer oyun bitti veya hücre doluysa hiçbir şey yapma.

    makeMove(row, col); // Hamle yapılıyor.
    
    if (state.isComputerOpponent && !state.winner) { // Eğer bilgisayara karşı oynanıyorsa ve oyun bitmediyse...
        setTimeout(computerMove, 500); // Bilgisayar hamlesi 500ms gecikmeyle yapılır.
    }
}

// makeMove fonksiyonunda oyun bittiğinde endGame'i çağıralım
function makeMove(row, col) {
    // Tahtanın mevcut durumunu geçmişe ekle
    state.gameHistory.push(state.board.map(row => [...row])); // Hamle öncesindeki tahtayı geçmişe kaydediyor.
    
    // Hücreyi güncelle
    state.board[row][col] = state.currentPlayer; // Hücreye mevcut oyuncunun simgesini ekliyor.
    
    // Hareket sesi çal
    playSound('move-sound'); // Hamle yapıldığında bir ses efekti çalınıyor.
    
    // Kazananı kontrol et
    const result = checkWinner(); // Kazanan veya berabere durumu kontrol ediliyor.
    if (result.winner) { // Eğer bir kazanan varsa...
        state.winner = result.winner; // Kazanan oyuncu bilgisi kaydediliyor.
        state.winningLine = result.line; // Kazanan çizginin koordinatları kaydediliyor.
        state.scores[result.winner]++; // Kazananın skoru artırılıyor.
        playSound('win-sound'); // Kazanma sesi çalınıyor.
        updateScoreboard(); // Skor tablosu güncelleniyor.
        endGame(); // Oyun sona erdiği için endGame çağrılıyor.
    } else if (isBoardFull()) { // Eğer tahta doluysa (berabere durumu)...
        state.winner = 'draw'; // Berabere durumu kaydediliyor.
        playSound('draw-sound'); // Beraberlik sesi çalınıyor.
        endGame(); // Oyun sona erdiği için endGame çağrılıyor.
    }

    // Oyuncu sırasını değiştir
    state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'; // Sıradaki oyuncuya geçiliyor.

    // Tahtayı güncelle
    updateBoard(); // Görsel olarak tahta güncelleniyor.

    // Mesajı güncelle
    updateMessage(); // Ekrandaki oyun mesajı güncelleniyor.

    // Zamanlayıcıyı sıfırla
    resetTimer(); // Yeni tur için zamanlayıcı sıfırlanıyor.
}

// Bilgisayarın hamlesini yapan işlev.
function computerMove() {
    if (state.winner) return; // Eğer oyun bitti ise hiçbir şey yapma.

    let move; // Bilgisayarın yapacağı hamleyi tutacak değişken.
    switch (state.difficulty) { // Oyunun zorluk seviyesine göre...
        case 'hard': // Zor seviyede en iyi hamle yapılıyor.
            move = getBestMove();
            break;
        case 'medium': // Orta seviyede bazen en iyi bazen rastgele hamle yapılıyor.
            move = Math.random() < 0.7 ? getBestMove() : getRandomMove();
            break;
        default: // Kolay seviyede tamamen rastgele hamle yapılıyor.
            move = getRandomMove();
    }

    makeMove(move.row, move.col); // Belirlenen hamle yapılıyor.
}

// Bilgisayar için en iyi hamleyi hesaplayan işlev.
function getBestMove() {
    let bestScore = -Infinity; // Başlangıçta en iyi skor negatif sonsuz.
    let bestMove = null; // En iyi hamle başlangıçta yok.

    for (let i = 0; i < state.boardSize; i++) { // Tahtadaki her satır için...
        for (let j = 0; j < state.boardSize; j++) { // Tahtadaki her hücre için...
            if (!state.board[i][j]) { // Eğer hücre boşsa...
                state.board[i][j] = 'O'; // Bilgisayar hamlesi yapılmış gibi dene.
                let score = minimax(state.board, 0, false); // Minimax algoritmasıyla skor hesapla.
                state.board[i][j] = null; // Tahtayı eski haline getir.

                if (score > bestScore) { // Eğer skor daha iyi ise...
                    bestScore = score; // En iyi skor güncelleniyor.
                    bestMove = { row: i, col: j }; // En iyi hamle kaydediliyor.
                }
            }
        }
    }
    return bestMove; // En iyi hamle döndürülüyor.
}

// Minimax algoritması, bilgisayarın en iyi hamlesini belirlemek için kullanılır.
function minimax(board, depth, isMaximizing) {
    const result = checkWinner(); // Oyunun durumu kontrol ediliyor.
    if (result.winner === 'X') return -1; // Eğer insan kazandıysa skor -1.
    if (result.winner === 'O') return 1; // Eğer bilgisayar kazandıysa skor 1.
    if (isBoardFull()) return 0; // Eğer tahta doluysa skor 0.

    if (isMaximizing) { // Bilgisayarın sıradaki hamlesi için...
        let bestScore = -Infinity; // Başlangıçta negatif sonsuz.
        for (let i = 0; i < state.boardSize; i++) {
            for (let j = 0; j < state.boardSize; j++) {
                if (!board[i][j]) { // Eğer hücre boşsa...
                    board[i][j] = 'O'; // Bilgisayar hamlesi yapılıyormuş gibi dene.
                    bestScore = Math.max(bestScore, minimax(board, depth + 1, false)); // En iyi skoru bul.
                    board[i][j] = null; // Tahtayı eski haline getir.
                }
            }
        }
        return bestScore; // En iyi skor döndürülüyor.
    } else { // İnsan oyuncunun sıradaki hamlesi için...
        let bestScore = Infinity; // Başlangıçta pozitif sonsuz.
        for (let i = 0; i < state.boardSize; i++) {
            for (let j = 0; j < state.boardSize; j++) {
                if (!board[i][j]) { // Eğer hücre boşsa...
                    board[i][j] = 'X'; // İnsan hamlesi yapılıyormuş gibi dene.
                    bestScore = Math.min(bestScore, minimax(board, depth + 1, true)); // En iyi skoru bul.
                    board[i][j] = null; // Tahtayı eski haline getir.
                }
            }
        }
        return bestScore; // En iyi skor döndürülüyor.
    }
}

// Rastgele bir hamle belirleyen işlev.
function getRandomMove() {
    const emptyCells = []; // Boş hücreler tutulacak.
    state.board.forEach((row, i) => { // Her satır için...
        row.forEach((cell, j) => { // Her hücre için...
            if (!cell) emptyCells.push({ row: i, col: j }); // Eğer hücre boşsa listeye ekle.
        });
    });
    return emptyCells[Math.floor(Math.random() * emptyCells.length)]; // Rastgele bir boş hücre döndür.
}

// Kazananı kontrol eden işlev.
function checkWinner() {
    const size = state.boardSize; // Tahta boyutunu alıyoruz.
    
    // Satırları ve sütunları kontrol et.
    for (let i = 0; i < size; i++) {
        if (checkLine(state.board[i])) { // Bir satırın tamamı aynı oyuncuya ait mi?
            return { 
                winner: state.board[i][0], // Kazanan oyuncu.
                line: Array(size).fill().map((_, j) => [i, j]) // Kazanan çizginin koordinatları.
            };
        }
        if (checkLine(state.board.map(row => row[i]))) { // Bir sütunun tamamı aynı oyuncuya ait mi?
            return { 
                winner: state.board[0][i], // Kazanan oyuncu.
                line: Array(size).fill().map((_, j) => [j, i]) // Kazanan çizginin koordinatları.
            };
        }
    }

    // Çaprazları kontrol et.
    const diagonal1 = Array(size).fill().map((_, i) => state.board[i][i]); // Sol üstten sağ alta çapraz.
    const diagonal2 = Array(size).fill().map((_, i) => state.board[i][size - 1 - i]); // Sağ üstten sol alta çapraz.

    if (checkLine(diagonal1)) { // Eğer sol üstten sağ alta çapraz aynı oyuncuya aitse...
        return { 
            winner: diagonal1[0], // Kazanan oyuncu.
            line: Array(size).fill().map((_, i) => [i, i]) // Çaprazın koordinatları.
        };
    }
    if (checkLine(diagonal2)) { // Eğer sağ üstten sol alta çapraz aynı oyuncuya aitse...
        return { 
            winner: diagonal2[0], // Kazanan oyuncu.
            line: Array(size).fill().map((_, i) => [i, size - 1 - i]) // Çaprazın koordinatları.
        };
    }

    return { winner: null, line: null }; // Eğer kazanan yoksa.
}

// Belirli bir çizginin (satır, sütun veya çapraz) tamamının aynı oyuncuya ait olup olmadığını kontrol eder.
function checkLine(line) {
    return line[0] && line.every(cell => cell === line[0]); // Tüm hücreler aynı ve boş değilse true döner.
}

// Tahtanın tamamen dolu olup olmadığını kontrol eden işlev.
function isBoardFull() {
    return state.board.every(row => row.every(cell => cell !== null)); // Her hücre doluysa true döner.
}

// Zamanlayıcıyı başlatan işlev.
function startTimer() {
    clearInterval(state.timer); // Mevcut zamanlayıcı durduruluyor.
    state.timeLeft = 30; // Süre sıfırlanıyor (30 saniye).
    updateTimer(); // Zamanlayıcı güncelleniyor.
    state.timer = setInterval(() => { // Her saniyede bir...
        state.timeLeft--; // Süre 1 saniye azalıyor.
        updateTimer(); // Zamanlayıcı güncelleniyor.
        if (state.timeLeft === 0) { // Süre bittiğinde...
            const move = getRandomMove(); // Rastgele bir hamle seçiliyor.
            if (move) makeMove(move.row, move.col); // Hamle yapılıyor.
        }
    }, 1000); // 1 saniyede bir çalışır.
}

// Zamanlayıcıyı sıfırlayan işlev.
function resetTimer() {
    state.timeLeft = 30; // Süre sıfırlanıyor (30 saniye).
    updateTimer(); // Zamanlayıcı güncelleniyor.
}

// Zamanlayıcıyı güncelleyen işlev.
function updateTimer() {
    document.querySelector('.timer span').textContent = state.timeLeft; // Süre HTML'de güncelleniyor.
}

// Oyun durumuyla ilgili mesajları güncelleyen işlev.
function updateMessage() {
    const messageElement = document.querySelector('.game-message'); // Mesaj alanı seçiliyor.
    const messages = translations[state.language]; // Geçerli dildeki çeviriler alınıyor.

    if (state.winner === 'draw') { // Eğer oyun berabereyse...
        const randomDraw = messages.draw[Math.floor(Math.random() * messages.draw.length)]; // Rastgele bir beraberlik mesajı seçiliyor.
        messageElement.textContent = randomDraw; // Mesaj güncelleniyor.
    } else if (state.winner) { // Eğer bir kazanan varsa...
        messageElement.textContent = messages.win.replace('{player}', state.playerNames[state.winner]); // Kazanan mesajı güncelleniyor.
    } else { // Oyun devam ediyorsa...
        messageElement.textContent = messages.turn.replace('{player}', state.playerNames[state.currentPlayer]); // Sıradaki oyuncu mesajı güncelleniyor.
    }
}

// Ana menüye dönme işlevi.
function backToMain() {
    document.querySelector('.settings-page').classList.remove('active'); // Ayarlar sayfası görünümden kaldırılıyor.
    document.querySelector('.game-container').classList.add('hidden'); // Oyun konteyneri gizleniyor.
    document.querySelector('.landing-page').classList.add('active'); // Ana sayfa görünür hale getiriliyor.
    
    state.scores = { X: 0, O: 0 }; // Skorlar sıfırlanıyor.
    state.playerNames = { X: 'Player X', O: 'Player O' }; // Oyuncu isimleri varsayılanlara sıfırlanıyor.
    updateScoreboard(); // Skor tablosu güncelleniyor.
}

// Skor tablosunu güncelleyen işlev.
function updateScoreboard() {
    document.querySelector('.player-x-score').textContent = 
        `${state.playerNames.X}: ${state.scores.X}`; // Oyuncu X'in skoru güncelleniyor.
    document.querySelector('.player-o-score').textContent = 
        `${state.playerNames.O}: ${state.scores.O}`; // Oyuncu O'nun skoru güncelleniyor.
}

// Ses çalan işlev.
function playSound(id) {
    const sound = document.getElementById(id); // Ses öğesi seçiliyor.
    sound.currentTime = 0; // Ses sıfırdan başlatılıyor.
    sound.play().catch(() => {}); // Ses çalınıyor (hata olursa göz ardı ediliyor).
}


// Oyunu kaydetme işlevi.
function saveGame() {
    localStorage.setItem('ticTacToeGame', JSON.stringify(state)); // Mevcut oyun durumu JSON formatında localStorage'a kaydediliyor.
}

// Oyunu yükleme işlevi.
function loadGame() {
    const savedState = localStorage.getItem('ticTacToeGame'); // LocalStorage'dan kaydedilmiş oyun durumu alınıyor.
    if (savedState) { // Eğer kaydedilmiş bir durum varsa...
        Object.assign(state, JSON.parse(savedState)); // Kaydedilmiş durum mevcut duruma aktarılıyor.
        updateBoard(); // Tahta güncelleniyor.
        updateScoreboard(); // Skor tablosu güncelleniyor.
        updateMessage(); // Oyun mesajı güncelleniyor.
    }
}

// Hamleyi geri alma işlevi.
function undoMove() {
    if (state.gameHistory.length > 0) { // Eğer bir hamle geçmişi varsa...
        state.board = state.gameHistory.pop(); // Geçmişteki son tahtayı geri yükle.
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'; // Oyuncu sırası değiştiriliyor.
        state.winner = null; // Kazanan bilgisi sıfırlanıyor.
        state.winningLine = null; // Kazanan çizgi sıfırlanıyor.
        updateBoard(); // Tahta güncelleniyor.
        updateMessage(); // Mesaj güncelleniyor.
        resetTimer(); // Zamanlayıcı sıfırlanıyor.
    }
}

// Oyun bittiğinde çağrılacak fonksiyon
function endGame() {
    // Timer'ı durdur
    clearInterval(state.timer); // Zamanlayıcıyı durduruyor.

    // Undo butonunu kaldır
    const undoButton = document.getElementById('undo'); // Undo butonunu seçiyor.
    if (undoButton) { // Eğer buton varsa...
        undoButton.style.display = 'none'; // Butonu gizle.
    }
}

// Oyunun dilini güncelleyen işlev.
function updateLanguage() {
    const lang = state.language; // Geçerli dil alınıyor.
    const t = translations[lang]; // Seçilen dilin çevirileri alınıyor.
    
    // Ana sayfa.
    document.querySelector('.landing-page h1').textContent = t.welcome; // Hoş geldiniz mesajı güncelleniyor.
    document.querySelector('.mode-buttons button:first-child').textContent = t.twoPlayers; // İki oyuncu modu düğmesi güncelleniyor.
    document.querySelector('.mode-buttons button:last-child').textContent = t.vsComputer; // Bilgisayara karşı düğmesi güncelleniyor.
    document.querySelector('.settings-button').textContent = t.settings; // Ayarlar düğmesi güncelleniyor.
    
    // Oyuncu adı diyalogu.
    document.querySelector('.dialog-content h2').textContent = t.enterNames; // Oyuncu isimleri başlığı güncelleniyor.
    document.querySelector('#player1Name').placeholder = t.player1Name; // Oyuncu 1 adı için yer tutucu metin.
    document.querySelector('#player2Name').placeholder = t.player2Name; // Oyuncu 2 adı için yer tutucu metin.
    document.querySelector('.dialog-buttons button:first-child').textContent = t.startGame; // Oyunu başlat düğmesi metni.
    document.querySelector('.dialog-buttons button:last-child').textContent = t.cancel; // İptal düğmesi metni.
    
    // Ayarlar sayfası.
    document.querySelector('.settings-page h2').textContent = t.gameSettings; // Ayarlar sayfası başlığı.
    document.querySelector('.settings-page .back-button').textContent = t.back; // Geri düğmesi metni.
    
    // Tema seçenekleri.
    const themeSelect = document.getElementById('theme'); // Tema seçici.
    themeSelect.options[0].textContent = t.theme.light; // Açık tema metni.
    themeSelect.options[1].textContent = t.theme.dark; // Koyu tema metni.
    
    // Zorluk seçenekleri.
    const difficultySelect = document.getElementById('difficulty'); // Zorluk seçici.
    difficultySelect.options[0].textContent = t.difficulty.easy; // Kolay zorluk metni.
    difficultySelect.options[1].textContent = t.difficulty.medium; // Orta zorluk metni.
    difficultySelect.options[2].textContent = t.difficulty.hard; // Zor zorluk metni.
    
    // Oyun konteyneri.
    document.querySelector('.game-container .back-button').textContent = t.backToMain; // Ana menüye dön düğmesi.
    document.querySelector('#undo').textContent = t.undoMove; // Hamleyi geri al düğmesi.
    document.querySelector('#reset').textContent = t.newGame; // Yeni oyun düğmesi.
    
    // Zamanlayıcı.
    const timerElement = document.querySelector('.timer'); // Zamanlayıcı HTML elementi.
    timerElement.innerHTML = `${t.timeLeft}<span>${state.timeLeft}</span>${t.seconds}`; // Zamanlayıcı metni güncelleniyor.
    
    // Özel simge yer tutucuları.
    document.querySelector('#player-x-icon').placeholder = t.player1Name; // Oyuncu X için yer tutucu.
    document.querySelector('#player-o-icon').placeholder = t.player2Name; // Oyuncu O için yer tutucu.
    
    // Oyun mesajı ve skor tablosu güncelleniyor.
    updateMessage();
    updateScoreboard();
}

// Sayfa yüklendiğinde dinleyiciler ekleniyor.
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(); // Sayfa yüklendiğinde dil güncelleniyor.

    // Ayarlar dinleyicileri.
    document.getElementById('language').addEventListener('change', (e) => {
        state.language = e.target.value; // Dil seçimi güncelleniyor.
        updateLanguage(); // Dil güncelleniyor.
    });

    document.getElementById('theme').addEventListener('change', (e) => {
        state.theme = e.target.value; // Tema seçimi güncelleniyor.
        document.body.setAttribute('data-theme', e.target.value); // Tema vücut elementine uygulanıyor.
    });

    document.getElementById('difficulty').addEventListener('change', (e) => {
        state.difficulty = e.target.value; // Zorluk seviyesi güncelleniyor.
    });

    document.getElementById('board-size').addEventListener('change', (e) => {
        state.boardSize = parseInt(e.target.value); // Tahta boyutu güncelleniyor.
        initGame(); // Yeni tahta boyutuyla oyun başlatılıyor.
    });

    // Özel simgeler.
    document.getElementById('player-x-icon').addEventListener('change', (e) => {
        state.customIcons.X = e.target.value || 'X'; // Oyuncu X simgesi güncelleniyor.
        updateBoard(); // Tahta güncelleniyor.
    });

    document.getElementById('player-o-icon').addEventListener('change', (e) => {
        state.customIcons.O = e.target.value || 'O'; // Oyuncu O simgesi güncelleniyor.
        updateBoard(); // Tahta güncelleniyor.
    });

    // Kontrol düğmeleri.
    document.getElementById('undo').addEventListener('click', undoMove); // Hamleyi geri al düğmesi.
    document.getElementById('reset').addEventListener('click', initGame); // Yeni oyun düğmesi.
});
