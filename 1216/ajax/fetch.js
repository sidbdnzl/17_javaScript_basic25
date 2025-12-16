const result = document.querySelector('.resultFetch');

// 関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (result) {
            // jsonメソッドでJSONデータをオブジェクトに変換して返す
            // 1つ目の.then
            return result.json();
        })
        .then(function (json) {
            // console.log(json)
            result.innerHTML = `<p>${json.news}</p>`;
        })
        .catch(function (error) {
            console.log(error);
        });
};

// loadNews関数を実行
loadNews();
// ボタンをクリックしたときのイベント
const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    // 読み込みし直し
    loadNews();
})
