
// ----------------------------
// ★ 星座判定関数（new Date 使用）
// ----------------------------
function getZodiac(month, day) {
    const zodiac = [
        { sign: "山羊座", from: "12-22", to: "01-19", id: "capricorn" },
        { sign: "水瓶座", from: "01-20", to: "02-18", id: "aquarius" },
        { sign: "魚座", from: "02-19", to: "03-20", id: "pisces" },
        { sign: "牡羊座", from: "03-21", to: "04-19", id: "aries" },
        { sign: "牡牛座", from: "04-20", to: "05-20", id: "taurus" },
        { sign: "双子座", from: "05-21", to: "06-21", id: "gemini" },
        { sign: "蟹座", from: "06-22", to: "07-22", id: "cancer" },
        { sign: "獅子座", from: "07-23", to: "08-22", id: "leo" },
        { sign: "乙女座", from: "08-23", to: "09-22", id: "virgo" },
        { sign: "天秤座", from: "09-23", to: "10-23", id: "libra" },
        { sign: "蠍座", from: "10-24", to: "11-22", id: "scorpio" },
        { sign: "射手座", from: "11-23", to: "12-21", id: "sagittarius" }
    ];

    const userDate = new Date(2000, month - 1, day);

    for (let z of zodiac) {
        const [fromM, fromD] = z.from.split("-").map(Number);
        const [toM, toD] = z.to.split("-").map(Number);

        const fromDate = new Date(2000, fromM - 1, fromD);
        const toDate = new Date(2000, toM - 1, toD);

        if (fromDate > toDate) {
            if (userDate >= fromDate || userDate <= toDate) return z;
        } else {
            if (userDate >= fromDate && userDate <= toDate) return z;
        }
    }

    return null;
}


// ★ ランダム
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// ----------------------------
// ★ 占い表示関数（共通）
// ----------------------------
function showFortune(signName, imgId) {
    const fortunes = [
        "新しい挑戦が成功しやすい月。積極的に行動すると◎",
        "人間関係がスムーズに進む運勢。協力が大事",
        "落ち着いて判断すると良い結果につながる月",
        "金運アップ。小さな努力が実を結ぶでしょう",
        "運気上昇！嬉しい出来事が舞い込みそう"
    ];

    const colors = ["青", "赤", "緑", "白", "紫", "金色"];
    const items = ["ハンカチ", "腕時計", "キーホルダー", "ノート", "アクセサリー"];

    const imgSrc = document.getElementById(imgId).src;

    // 12星座画像を非表示
    document.getElementById("imagesBox").style.display = "none";

    document.getElementById("result").innerHTML = `
        <h3>${signName}</h3>
        <img src="${imgSrc}" style="width:150px; display:block; margin:0 auto;">
        <p><strong>12月の運勢：</strong> ${randomFrom(fortunes)}</p>
        <p><strong>ラッキーカラー：</strong> ${randomFrom(colors)}</p>
        <p><strong>ラッキーアイテム：</strong> ${randomFrom(items)}</p>
    `;
}


// ----------------------------
// ★ 「占う」ボタン
// ----------------------------
function tellFortune() {
    const m = parseInt(document.getElementById("month").value);
    const d = parseInt(document.getElementById("day").value);

    const z = getZodiac(m, d);
    if (!z) return;

    showFortune(z.sign, z.id);
}


// ----------------------------
// ★ 画像クリックで占う
// ----------------------------
function clickImage(id) {

    const map = {
        aries: "牡羊座",
        taurus: "牡牛座",
        gemini: "双子座",
        cancer: "蟹座",
        leo: "獅子座",
        virgo: "乙女座",
        libra: "天秤座",
        scorpio: "蠍座",
        sagittarius: "射手座",
        capricorn: "山羊座",
        aquarius: "水瓶座",
        pisces: "魚座"
    };

    showFortune(map[id], id);
}


// ----------------------------
// ★ select と画像クリックイベント（動かない原因を解消）
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {

    // ▼ 月
    const monthSelect = document.getElementById("month");
    for (let m = 1; m <= 12; m++) {
        monthSelect.innerHTML += `<option value="${m}">${m}</option>`;
    }

    // ▼ 日
    const daySelect = document.getElementById("day");
    for (let d = 1; d <= 31; d++) {
        daySelect.innerHTML += `<option value="${d}">${d}</option>`;
    }

    // ▼ 画像クリック
    document.querySelectorAll(".horoscope_images img").forEach(img => {
        img.addEventListener("click", () => clickImage(img.id));
    });
});
