// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;
// 初期設定
const MAX_HP2 = 100;
const DAMAGE_MIN2 = 8;
const DAMAGE_MAX2 = 20;

//震えるアニメーション関数の定義
function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth; //再描写
  enemyArea.classList.add('hit');
}
function shakeEnemy2() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit2');
  enemyArea.offsetWidth; //再描写
  enemyArea.classList.add('hit2');
}

// 状態（HP）
let hp = MAX_HP;

// 状態（HP）
let hp2 = MAX_HP2;

// モンスター
const enemy = document.querySelector('.enemyImg');
const enemy2 = document.querySelector('.enemyImg2')

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');
const hpText2 = document.querySelector('.hpText2 span');
const hpBar2 = document.querySelector('.hpBar2');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

const attackButton2 = document.querySelector('.attackBtn2')

// 効果音を取得
const seHit = document.querySelector('#se-hit');
const seDefeat = document.querySelector('#se-defeat');
// 効果音を取得
const seHit2 = document.querySelector('#se-hit');
const seDefeat2 = document.querySelector('#se-defeat');

// ①ランダムダメージの実装
attackButton.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage;//最初は100-10

  // ②HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    // ③撃破時のエフェクト適用（enemy—fly または enemy—squash）
    enemy.classList.add('enemy--fly');
    // ④撃破後のボタン無効化処理
    attackButton.disabled = true;
    //変数に入れずに、そのまま,でつなぐ書き方でもOK
    // ⑤撃破メッセージの表示
    document.querySelector('.log').textContent = "モンスターを倒した！"
    seDefeat.play();
  } else {
    hpText.textContent = hp;//テキストを置き換える
    hpBar.value = hp;
    // ⑥攻撃時の効果を追加
    shakeEnemy();
    seHit.currentTime = 0; //current = 現在
    seHit.play();

  }
});

attackButton2.addEventListener('click', function () {
  const damage = Math.floor(Math.random() * (DAMAGE_MAX2 - DAMAGE_MIN2 + 1)) + DAMAGE_MIN2;
  hp = hp - damage;//最初は100-10

  // ②HP表示の更新ロジック修正（マイナス値の防止）
  if (hp <= 0) {
    hpText2.textContent = 0;
    hpBar2.value = 0;
    // ③撃破時のエフェクト適用（enemy—fly または enemy—squash）
    enemy2.classList.add('enemy--fly2');
    // ④撃破後のボタン無効化処理
    attackButton2.disabled = true;
    //変数に入れずに、そのまま,でつなぐ書き方でもOK
    // ⑤撃破メッセージの表示
    document.querySelector('.log').textContent = "モンスターを倒した！"
    seDefeat2.play();
  } else {
    hpText2.textContent = hp;//テキストを置き換える
    hpBar2.value = hp;
    // ⑥攻撃時の効果を追加
    shakeEnemy2();
    seHit2.currentTime = 0; //current = 現在
    seHit2.play();

  }
});



// 効果音の追加（オプション）
// リスタート機能の実装（オプション）
