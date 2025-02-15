(() => {
    const $counter = document.getElementById("js-counter");

    // まず素数判定関数を定義
    const primeNumber = (num) => { // 素数判定関数
        if (num <= 1) return false; // 1以下は素数でない
        if (num === 2) return true; // 2は素数
        if (num % 2 === 0) return false; // 偶数は素数でない
        for (let i = 3; i <= Math.sqrt(num); i += 2) { // 3から平方根までの奇数で割り切れるかチェック
            if (num % i === 0) return false; // 割り切れる場合は素数でない
        }
        return true; // 素数
    };

    // clickHandler関数を定義
    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if ($targetButton.textContent === "+") {
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }

        // カウンターの値が正の素数の時のみ色を変更
        const currentValue = parseInt($counter.textContent);
        if (currentValue > 0 && primeNumber(currentValue)) {
            $counter.style.color = "#ff0000";  // 正の素数の時は赤色
        } else {
            $counter.style.color = "";  // それ以外は通常の色
        }
    };

    // イベントリスナーを設定
    const buttons = document.getElementsByClassName('js-button'); // ボタンを取得
    Array.from(buttons).forEach(button => { // ボタンを繰り返し処理
        button.addEventListener('click', clickHandler); // クリックされたボタンを取得
    });
})();