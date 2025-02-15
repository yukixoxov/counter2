(() => {
    const $counter = document.getElementById("js-counter");
    function audio() {
        document.getElementById('button-audio').currentTime = 0; //連続クリックに対応
        document.getElementById('button-audio').play(); //クリックしたら音を再生
    }
    const clickHandler = () => {
        audio(); // 音を再生
        $counter.textContent = 0; // カウンターの値を0にする
        $counter.style.color = "#000"; // カウンターの色を黒にする
    };
    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();