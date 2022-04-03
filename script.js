
// 年齢計算処理
function calcAge() {
  // id="person-birthday"の要素を探す
  const birthday = document.getElementById('person-birthday');
  // 文字列の形式がYYYY-MM-DDかどうかをチェック
  if(birthday && birthday.textContent.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
    // 現在時刻との差(ミリ秒)を計算
    const diffTime = new Date().getTime() - new Date(birthday.textContent).getTime();
    // 年に換算
    const age = Math.floor(diffTime / (356.2425 * 24 * 3600 * 1000));
    // HTMLにテキストを戻す
    birthday.textContent = `${birthday.textContent} (${age}歳)`
  }
}

calcAge();