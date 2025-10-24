// load containers by id and insert
export function loadComponent(id, path, callback) {
  const container = document.getElementById(id);
  if (!container) {
    console.warn(`⚠️ Can't find id="${id}"`);
    return;
  }

  fetch(path)
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;
      console.log(`✅ ${id} cargado desde ${path}`);
      if (typeof callback === "function") callback();
    })
    .catch(err => console.error(`❌ Loading error of  ${id}:`, err));
}
