function buildBreadcrumb(container, items, options) {
  var darkMode = options && options.darkMode;

  var nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Breadcrumb");
  nav.className =
    "mx-auto flex w-full max-w-7xl flex-wrap items-center gap-2 " +
    "text-[11px] font-semibold uppercase text-slate-500" +
    (darkMode ? " dark:text-slate-400" : "");

  items.forEach(function (item, i) {
    if (i > 0) {
      var sep = document.createElement("span");
      sep.setAttribute("aria-hidden", "true");
      sep.className = "text-slate-400" + (darkMode ? " dark:text-slate-600" : "");
      sep.textContent = "/";
      nav.appendChild(sep);
    }

    var isLast = i === items.length - 1;

    if (isLast || !item.href) {
      var span = document.createElement("span");
      span.className =
        "font-medium cursor-default text-brand-600" +
        (darkMode ? " dark:text-brand-400" : "");
      span.setAttribute("aria-current", "page");
      span.textContent = item.label;
      nav.appendChild(span);
    } else {
      var a = document.createElement("a");
      a.className =
        "transition hover:text-brand-600" +
        (darkMode ? " dark:hover:text-brand-400" : "");
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    }
  });

  container.innerHTML = "";
  container.appendChild(nav);
}

window.buildBreadcrumb = buildBreadcrumb;
