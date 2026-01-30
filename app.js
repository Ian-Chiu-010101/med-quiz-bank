async function loadQuestions() {
  const res = await fetch('./data/questions.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Cannot load questions.json');
  return await res.json();
}

(async () => {
  try {
    const data = await loadQuestions();
    document.getElementById('status').textContent =
      `題庫載入成功：${data.length} 題`;
  } catch (e) {
    document.getElementById('status').textContent =
      `題庫載入失敗：${e.message}`;
  }
})();
