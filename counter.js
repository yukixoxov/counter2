(() => {
    const $counter = document.getElementById("js-counter");

    function audio() {
        document.getElementById("button-audio").currentTime = 0; //連続クリックに対応
        document.getElementById("button-audio").play(); //クリックしたら音を再生
    }

    // まず素数判定関数を定義
    const primeNumber = (num) => {
        // 素数判定関数
        if (num <= 1) return false; // 1以下は素数でない
        if (num === 2) return true; // 2は素数
        if (num % 2 === 0) return false; // 偶数は素数でない
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            // 3から平方根までの奇数で割り切れるかチェック
            if (num % i === 0) return false; // 割り切れる場合は素数でない
        }
        return true; // 素数
    };

    // clickHandler関数を定義
    const clickHandler = (e) => {
        audio();
        // ボタンのテキストから操作を判断して値を更新
        const operation = e.currentTarget.textContent; // クリックされたボタンのテキストを取得
        const value = operation.includes("10") ? 10 : 1; // 10の場合は10、それ以外は1
        const sign = operation.includes("+") ? 1 : -1; // +の場合は1、-の場合は-1

        // カウンターの値を更新
        const newValue = parseInt($counter.textContent) + value * sign; // カウンターの値を更新し、新しい値を代入
        $counter.textContent = newValue; // カウンターの値を更新し、新しい値を代入

        // 正の素数かどうかで色を変更
        $counter.style.color =
            newValue > 0 && primeNumber(newValue) ? "#ff0000" : "";
    };

    // イベントリスナーを設定
    const buttons = document.getElementsByClassName("js-button"); // ボタンを取得
    Array.from(buttons).forEach((button) => {
        // ボタンを繰り返し処理
        button.addEventListener("click", clickHandler); // クリックされたボタンを取得
    });
})();
