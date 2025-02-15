(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0; // カウンターの値を0にする
        $counter.style.color = "#000"; // カウンターの色を黒にする
    };
    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
})();