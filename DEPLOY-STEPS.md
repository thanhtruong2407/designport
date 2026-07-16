# Các bước đưa portfolio lên GitHub

Ngày chuẩn bị: 2026-07-16

## Tóm tắt thay đổi
- **Thêm mới:** case study SCF Vietnam (`projects/scf-vietnam.js` + 24 ảnh `scf-*`, đã nối vào `content.js`). Đã kiểm tra: 23 ảnh dùng trong case study đều có thật, JS hợp lệ, không có link hỏng.
- **Xoá file cũ (175 file):** `site/public/*` (bản build cũ trùng lặp), `case-studies/*.md`, `pages/*.md` (nguồn markdown cũ, đã chuyển sang `site/source/content/`).
- **Xoá 8 ảnh thừa (1.4 MB):** không dùng ở site live và cũng không có trong nguồn YAML.
- **Junk đã cho vào `.gitignore`:** `assets/@@@/`, `.fuse_hidden*`, `.DS_Store`.

> 50 ảnh khác nhìn giống "thừa" nhưng **vẫn nằm trong nguồn YAML** — GIỮ LẠI, không xoá.

## Chạy trong terminal

```bash
cd "/Users/thanhtruong/Downloads/CV and Port Designer/portfolio"
rm -f .git/index.lock

# xoá 7 ảnh thừa đã được track
git rm assets/02-textshadow-ai-rule-inputs-rule-structure.png \
       assets/textshadow-ai-refinement-verification-01.png \
       assets/textshadow-ai-refinement-verification-02.png \
       assets/textshadow-ai-refinement-verification-03.png \
       assets/textshadow-ai-training-prompt.png \
       assets/textshadow-problem-ai-limitation.png \
       assets/textshadow-system-itergration-connect.png

# xoá ảnh SCF thừa (chưa track) để không bị add
rm -f assets/scf-img-decision02-anchor-disable-invoice.png

# stage tất cả (gồm cả việc xoá site/public, case-studies, pages cũ)
git add -A

git commit -m "Add SCF Vietnam case study; remove old duplicated files and unused images"
git push
```

## Kiểm tra trước khi push
Chạy `git status` — cần thấy:
- Case study SCF mới được thêm
- 175 file cũ bị xoá
- 7 ảnh thừa bị gỡ

## Ảnh thừa đã xoá (tham khảo)
- scf-img-decision02-anchor-disable-invoice.png
- 02-textshadow-ai-rule-inputs-rule-structure.png
- textshadow-ai-refinement-verification-01.png
- textshadow-ai-refinement-verification-02.png
- textshadow-ai-refinement-verification-03.png
- textshadow-ai-training-prompt.png
- textshadow-problem-ai-limitation.png
- textshadow-system-itergration-connect.png
