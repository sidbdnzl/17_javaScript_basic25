// 1.オブジェクトで色を用意
// 3.4色制作して、配列にする
const settingColors =
    [{ r: 255, g: 0, b: 0 }, //赤
    { r: 0, g: 255, b: 0 }, //緑
    { r: 0, g: 0, b: 255 }, //青
    { r: 255, g: 255, b: 0 } //黄色
    ];
// 5.documentの縦の長さ取得
const fullHeight = document.documentElement.scrollHeight;
console.log(fullHeight); //2400(単位は書いてないけどpx)

// 8.スクロール量を計算
// 画面に見えている高さ（ブラウザの表示部分）
const viewHeight = document.documentElement.clientHeight;
// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;


// 2.オブジェクトの色をbodyの背景色にする
const bodyElm = document.body; //ドットに繋いであるので、オブジェクト
// document.querySelector('body');
console.log(bodyElm);
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';

// 10.関数の定義
function changeColor(index) {
    const color = settingColors[index];
    document.body.style.backgroundColor =
        `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function colorChange() {
    document.body.style.backgroundColor =
        'rgb(' +
        settingColors[0].r +
        ',' +
        settingColors[0].g +
        ',' +
        settingColors[0].b +
        ')';
}

// 4.スクロールするたびにイベント
window.addEventListener('scroll', function () {
    console.log('スクローーーーる');
    // 現在のスクロール位置
    const scrollY = window.scrollY;
    console.log(scrollY);
    // 6.1 / 4進んだら色が変わるようにする
    // 7.スクロールを4分割
    // 9.変数scrollableを4分割
    // 11.関数の呼び出し（実行）の実引数
    if (scrollY <= scrollable / 4) {
        changeColor(0);
    } else if (scrollY <= scrollable / 2) {
        changeColor(1);
    } else if (scrollY <= (scrollable * 3) / 4) {
        changeColor(2);
    } else {
        changeColor(3);
    }
});

const dummyContent = document.querySelector('.dummy');
for (let i = 0; i < 1000; i++) {
    dummyContent.textContent += `テキスト${i}`;
}

window.addEventListener('scroll', function () {
    const button = document.querySelector('.moveToTop');
    if (this.window.scrollY >= 200) {
        button.style.display = 'block';
    }
});

const button = document.querySelector('.moveToTop');
button.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
