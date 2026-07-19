window.portfolioProjectDetails = window.portfolioProjectDetails || {};

window.portfolioProjectDetails["scf-vietnam-vi"] = {
  "hideOutcomesSummary": true,
  "popupSections": [
    {
      "label": "How I approached this",
      "title": "One process, two lenses",
      "body": [
        "Tôi chạy theo Double Diamond: Discover, Define, Develop, Deliver. Hai lăng kính dẫn đường xuyên suốt.",
        "Design Thinking lo nửa đầu. Nó buộc tôi bám vào vấn đề thật của dealer trước khi nghĩ tới giải pháp, và nó định hình Discover với Define. Hai bước sau của nó, prototype và test, kéo dài sang Develop và Deliver.",
        "Systems Thinking lo phần xây. Khoản vay không khó. Khó là bắt hai hệ thống ngân hàng, hai bộ quy định và tám vai trò chạy như một sản phẩm. Đây là phần định hình Develop, với một nguyên tắc: không màn hình nào đứng một mình.",
        "Trước khi vẽ bất cứ thứ gì, tôi ngồi với PM, BA và các domain expert phía client. Không phải để lấy requirement, mà để biết cái gì đã chốt và tôi được phép xoay trong khoảng nào.",
        "Sang Define, tôi cùng BA và PM bóc từng vấn đề ra, luôn hỏi lại: mình đang chữa gốc hay chữa triệu chứng? Mọi bài toán tôi đều nhìn từ phía dealer, không nhìn từ phía ngân hàng.",
        "Sang Develop, thiết kế chạy theo sprint song song với dev. Mỗi bài toán tôi đưa ra vài phương án kèm trade-off rõ ràng. Lý do đằng sau quyết định là một phần của bản giao, không phải thứ giải thích thêm cho có."
      ],
      "diagramLabel": "Double Diamond process",
      "diagramImageSrc": "./assets/scf-img-double-diamond-process.png",
      "diagramImageAlt": "Double Diamond process diagram mapping Discover, Define, Develop, and Deliver to the case study"
    },
    {
      "label": "The opportunity",
      "title": "Bring supply chain finance to Vietnam's small distributor network",
      "body": [
        "SCF là nền tảng supply chain finance B2B. Nó bắt đầu ở Ấn Độ, nối hơn 300.000 doanh nghiệp nhỏ với vốn lưu động thông qua chính các anchor mà họ đang buôn bán cùng. Năm 2022, SCF mở sang Việt Nam.",
        "**Business goal:** đưa supply chain finance về mạng lưới nhà phân phối nhỏ ở Việt Nam. Dealer lấy vốn lưu động qua anchor sẵn có. Toàn bộ online, không phải ra chi nhánh.",
        "Market research do phía client cung cấp. Tôi dùng nó để định hình bài toán sản phẩm phải giải. Số liệu cho thấy khoảng trống này có thật, không phải phỏng đoán."
      ],
      "stats": [
        {
          "value": "507,640+",
          "label": "Small businesses (MSMEs) in Vietnam",
          "detail": "Source: ADBI Working Paper 941, 2019"
        },
        {
          "value": "60%+",
          "label": "Cannot access formal credit",
          "detail": "Only 39% of SMEs have bank loans"
        },
        {
          "value": "USD 356M",
          "label": "Alternative lending market, 2023",
          "detail": "And still growing"
        }
      ]
    },
    {
      "label": "The problem",
      "title": "Good traders, no collateral, no bank will lend",
      "body": [
        "Một tiệm nhỏ muốn lấy hàng từ nhà phân phối và trả tiền sau. Họ buôn bán đàng hoàng nhiều năm. Nhưng trong tay không có tiền mặt, cũng không có tài sản thế chấp. Không ngân hàng nào cho họ vay.",
        "**Dealer là ai.** Một chủ tiệm nhỏ. Có cửa hàng thật, nhập hàng đều đặn từ một anchor. Lịch sử buôn bán sạch. Nhưng họ chưa từng vay chính thức, không có tài sản thế chấp, và không viết nổi một phương án kinh doanh. Phần lớn chưa đụng vào app tài chính bao giờ. Chúng tôi giả định họ sẵn sàng bỏ dở một yêu cầu khó hiểu hơn là nhấc máy gọi tổng đài. Mọi quyết định phía dưới đều là giả thuyết xây cho người này.",
        "**Root cause:** ngân hàng chấm điểm bằng tài sản. Còn thứ thật sự chứng minh dealer đáng tin lại là lịch sử giao dịch của họ với nhà phân phối. Dữ liệu đó có sẵn, chỉ là chưa ai dùng.",
        "Một mình bên nào cũng không giải nổi. Ngân hàng có vốn nhưng không chạm được vào dữ liệu buôn bán trong chuỗi cung ứng. SCF có quan hệ anchor và lịch sử hóa đơn, nhưng luật Việt Nam chỉ cho ngân hàng có giấy phép được cấp tín dụng. Bắt tay nhau thì mỗi bên bù đúng chỗ bên kia thiếu.",
        "**Product goal:** mở tín dụng chính thức cho các nhà phân phối nhỏ. Không thế chấp, không hồ sơ giấy, không ra chi nhánh. Dealer nằm trong mạng lưới anchor phải tự nộp và tự được duyệt, và lúc nào cũng biết hồ sơ mình đang ở đâu mà không phải gọi cho ai.",
        "Mô hình cho vay này đã chạy ở Ấn Độ rồi. Tôi không cần nghĩ lại từ đầu. Tôi cần làm nó chạy được ở Việt Nam. Cái khó không phải khoản vay, mà là ghép tám vai trò, hai hệ thống và quy định pháp lý Việt Nam khớp với nhau ở bên dưới.",
        "**What I did:** đặt lại bài toán từ phía dealer, tách mục tiêu kinh doanh khỏi mục tiêu sản phẩm, và chốt những ràng buộc mà mọi quyết định sau này phải tôn trọng."
      ],
      "asideImageSrc": "./assets/scf-img-product-goal-self-serve-credit.png",
      "asideImageAlt": "Product goal - self-serve credit with no collateral, no paperwork, no branch visit"
    },
    {
      "label": "What made it hard",
      "title": "Two problems sat under every screen",
      "displayAs": "simpleCards",
      "columns": [
        {
          "number": "01",
          "cardClass": "bg-white dark:bg-slate-900",
          "title": "Rebuilt for Vietnam, not translated",
          "body": "Việt Nam có hai loại định danh: mã số thuế cho doanh nghiệp, CCCD cho hộ kinh doanh. KYC bên ngân hàng xử lý hai loại này theo hai đường khác nhau. Luật cho vay lại bắt buộc phải có phương án kinh doanh mới được vay tín chấp, mà chủ tiệm nhỏ thì không viết được. Sai một trong hai là launch dừng. Không phải dừng vì UX, mà dừng vì pháp lý.",
          "image": {
            "src": "./assets/scf-img-two-id-types-vietnam.png",
            "alt": "Two ID types in Vietnam - tax code vs personal ID"
          }
        },
        {
          "number": "02",
          "cardClass": "bg-white dark:bg-slate-900",
          "title": "Two separate systems had to feel like one - SCF and Bank",
          "body": "Dealer nộp hồ sơ, yêu cầu chạy sang hệ thống internet banking của ngân hàng để duyệt và giải ngân, rồi quay về SCF. Hai sản phẩm. Hai team. Hai phong cách giao diện. Với dealer, tất cả phải là một luồng, không được để lộ ra là có hệ thống thứ hai.",
          "image": {
            "src": "./assets/scf-img-scf-bank-one-flow.png",
            "alt": "SCF and Bank systems feeling like one flow"
          }
        }
      ]
    },
    {
      "label": "How I broke the problems down",
      "title": "From two big problems to decisions I could build",
      "body": [
        "Hai bài toán này quá to để thiết kế thẳng. Bạn không đặt \"làm lại cho Việt Nam\" lên một màn hình được.",
        "Nên việc chính của tôi là bóc nhỏ chúng. Đây mới là phần gánh cả dự án. Không phải mấy màn hình. Chuỗi từ vấn đề, sang thử thách, sang quyết định là chỗ design thinking thật sự nằm, và là chỗ tôi đóng góp nhiều nhất.",
        "Phần còn lại của case study đi theo đúng chuỗi đó: một quyết định nền trước, rồi bốn quyết định gánh phần nặng. Tôi tách mỗi bài toán thành bốn thử thách cụ thể, rồi biến mỗi thử thách thành một quyết định thiết kế đủ nhỏ để xây được và bảo vệ được:"
      ],
      "bullets": [
        "Hai loại định danh",
        "Phương án kinh doanh mà luật bắt buộc phải có",
        "Hai hệ thống ngân hàng phải cảm giác như một",
        "Một mô hình trạng thái dùng chung cho hai ngân hàng"
      ],
      "diagramImageSrc": "./assets/scf-img-problem-to-decision-breakdown.png",
      "diagramImageAlt": "Breakdown from two big problems into four concrete challenges and decisions"
    },
    {
      "label": "Foundation decision",
      "title": "The decision under everything: eight roles, one system",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Một hồ sơ tín dụng đi qua tám vai trò trước khi tiền tới tay dealer:</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Super Admin / Maker Admin / Checker Admin</strong><span class=\"text-slate-500 dark:text-slate-400\">: vận hành nền tảng</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Master Anchor / Anchor</strong><span class=\"text-slate-500 dark:text-slate-400\">: phía nhà phân phối. Anchor upload hóa đơn; Master Anchor quản nhiều anchor brand</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">FI Maker / FI Checker</strong><span class=\"text-slate-500 dark:text-slate-400\">: nhân sự ngân hàng, người review và duyệt</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Dealer</strong><span class=\"text-slate-500 dark:text-slate-400\">: người dùng cuối. Không bao giờ thấy bảy vai trò kia.</span></li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Mỗi lần bàn giao là một chỗ có thể vỡ. Đổi một chữ trên màn hình dealer, view của nhân sự ngân hàng có thể lệch theo. Sửa bảng hóa đơn cho anchor, màn duyệt của admin có thể xô lệch. Một thay đổi ở một chỗ có thể âm thầm làm hỏng hẳn view của vai trò khác.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Coi như không màn hình nào đứng một mình. Trước khi chốt bất kỳ thay đổi nào, tôi map tác động của nó lên tất cả vai trò còn lại. Bản map đó là cửa ải sign-off suốt cả ba phase. Lý do: với tám vai trò trên bốn app, rủi ro không nằm ở một màn hình xấu. Rủi ro nằm ở mối nối khuất giữa các màn hình.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Thay đổi nào cũng phải qua impact map trước, nên ship từng quyết định lâu hơn. Bù lại, không có cú bất ngờ nào lúc launch đến từ một vai trò chưa ai rà.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> Cấu trúc tám vai trò là của nền tảng. Thứ tôi thêm vào là kỷ luật: chưa map xong tác động lên mọi vai trò thì chưa ship. Tôi dựng và giữ cross-role impact map, và biến nó thành cửa ải sign-off cho cả ba phase.</p>",
      "carousel": {
        "title": "Foundation decision showcase",
        "slides": [
          {
            "label": "Eight roles, four portals",
            "description": "The eight roles sit across four portals: SCF Admin (Super Admin, Maker Admin, Checker Admin), SCF Anchor (Master Anchor, Anchor), SCF Dealer App (Dealer), and SCF FI Portal (FI Maker, FI Checker). SSB Internet Banking runs behind the scenes to disburse funds and sync status. It's not one of the eight — but every status change still has to pass through it.",
            "imageSrc": "./assets/scf-img-foundation-roles-portals.png"
          },
          {
            "label": "Maker/checker flow",
            "description": "Example from the impact map: a Maker Admin edits an Anchor's business info. The record goes to \"Pending Verification\" and a Checker Admin has to approve it before the change goes live. Before sign-off, I traced this same edit into the Anchor Overview list on both dashboards — not just the two screens where the edit happens.",
            "imageSrc": "./assets/scf-img-foundation-maker-checker.png"
          }
        ]
      }
    },
    {
      "label": "Key decision 01 of 4",
      "title": "Don't ask dealers which type they are",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Ngân hàng muốn chạy KYC thì hệ thống phải biết trước dealer thuộc loại hình kinh doanh nào.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Việt Nam không có một mã định danh doanh nghiệp duy nhất.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Doanh nghiệp dùng mã số thuế (MST).</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hộ kinh doanh dùng CCCD.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hai loại định danh này đẻ ra ba form: Business Dealer, SME, Personal Dealer.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Mỗi form kéo theo một quy trình KYC khác nhau bên ngân hàng.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Vậy là phải biết loại hình trước đã.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Nhưng xếp một dealer vào đúng nhóm là chuyện không dễ. Hồi soạn Luật Doanh nghiệp 2020, Quốc hội từng bàn có nên đưa hộ kinh doanh vào luật hay không, rồi quyết định để ra ngoài và giao cho một nghị định riêng. (Nguồn: <a href=\"https://www.vietnamplus.vn/quoc-hoi-thao-luan-ve-dua-ho-kinh-doanh-vao-du-thao-luat-doanh-nghiep-post641403.vnp\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">VietnamPlus, 2020</a>) Ngay người làm luật còn chưa rạch ròi được ranh giới loại hình. Tính đến 2022, chỉ khoảng 25% trong 5 triệu hộ kinh doanh ở Việt Nam đăng ký chính thức. (Nguồn: <a href=\"https://hanoitimes.vn/why-are-millions-of-home-based-businesses-in-vietnam-ignoring-registering-as-companies.659867.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Hanoi Times, 2022</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Vậy thì dealer nhiều khả năng cũng khai sai. Ở quy mô đó, sai là chuyện gần như chắc chắn. Mà cũng chẳng có registry nào sạch để tra ngược. Nên tôi đẩy phần khó về phía sản phẩm, không đẩy sang dealer.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> File của Anchor chọn form trước, dealer không phải chọn gì cả.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Anchor nộp file recommendation trước.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hệ thống đọc file, xác định dealer thuộc program nào.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hệ thống chọn một trong ba biến thể form tôi đã dựng: Business Dealer, SME, Personal Dealer.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Xong xuôi mới gửi link mời đi.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dealer mở link, thấy ngay form đúng loại của mình, và chỉ việc xác nhận danh tính.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Cách này chạy được vì câu trả lời lấy từ file của Anchor chứ không lấy từ dealer. Và nếu định danh không khớp, lỗi chỉ về phía file chứ không chỉ vào mặt dealer.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Toàn bộ phụ thuộc vào việc file của Anchor có đúng hay không. File sai thì dealer gặp lỗi mà tự họ không sửa được. Chúng tôi chấp nhận. Đó là vấn đề vận hành ở phía trên dealer, không phải vấn đề của sản phẩm.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> Hướng form-from-file là tôi làm cùng team. Còn ba biến thể form, các thông báo lỗi, và chỗ đặt consent trong ngữ cảnh là tôi thiết kế. Bản Ấn Độ chỉ có một loại định danh nên chưa từng gặp bài này. Chuyện hai loại định danh và cơ chế form-from-file là làm riêng cho Việt Nam.</p>",
      "carousel": {
        "title": "Key decision 01 showcase",
        "slides": [
          {
            "label": "Why type comes first",
            "description": "Vietnam has no single business ID. A company uses a tax code (MST); a household trader uses a personal ID (CCCD). These map to three form types — Business Dealer, SME, and Personal Dealer — each with its own bank KYC. So the type has to be known before onboarding can start.",
            "imageSrc": "./assets/scf-img-decision01-challenge.png"
          },
          {
            "label": "Decision flow",
            "description": "The recommendation file picks the form before the dealer opens the link. It routes to one of three variants — Business Dealer (ĐKKD / MST), SME (MST), or Personal Dealer (CCCD). The dealer just confirms identity — no self-classifying.",
            "imageSrc": "./assets/scf-img-decision01-flow-diagram.png"
          },
          {
            "label": "Three form variants",
            "description": "One form per dealer type. Business Dealer is a multi-step stepper (ĐKKD / MST); SME and Personal Dealer are single long-scroll forms, keyed on MST and CCCD.",
            "imageSrc": "./assets/scf-img-decision01-three-forms.png"
          },
          {
            "label": "Onboarding flow",
            "description": "The onboarding map across all three types: Anchor uploads the file, dealer opens the link, verifies ID, fills the form, OTP, done — plus the reject and missing-ID paths.",
            "imageSrc": "./assets/scf-img-decision01-onboarding-flow.png"
          }
        ]
      }
    },
    {
      "label": "Key decision 02 of 4",
      "title": "Manage the invoice, don't just upload it",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Đây là distributor finance. Anchor bán hàng cho dealer và xuất hóa đơn. Hóa đơn đó chính là bằng chứng của một giao dịch thật. Sản phẩm lấy lịch sử buôn bán này thay cho phương án kinh doanh. (Mô hình lấy từ bản Ấn Độ.)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Sau mỗi đơn, Anchor upload một hóa đơn gồm tên dealer, số tiền, ngày thanh toán. Mỗi lần upload là một dòng cộng vào hồ sơ. Lâu dần, hồ sơ đó thành thứ ngân hàng nhìn vào để chấm tín dụng. Việc của tôi là làm nó chạy trơn qua mọi vai trò có đụng vào.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Hóa đơn giờ là bằng chứng, nên một hóa đơn sai kéo theo một quyết định tín dụng sai. Ba vai trò cùng dựa vào một hồ sơ.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Anchor tạo hóa đơn.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hạn mức của dealer phụ thuộc vào chúng.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Ngân hàng đọc chúng để duyệt.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Ai đó nhập sai thông tin hóa đơn là hồ sơ hỏng. Dealer khi ấy không dùng được hóa đơn đó để xin giải ngân. Lịch sử buôn bán chỉ có giá trị nếu sửa được một dòng mà không xóa nó đi.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Gian lận hóa đơn ở Việt Nam không phải rủi ro nhỏ. Năm 2023, một đường dây bán hơn 1 triệu hóa đơn khống cho hơn 88.000 tổ chức, giá trị gần 64.000 tỷ đồng. (Nguồn: <a href=\"https://cand.com.vn/Ban-tin-113/xet-xu-100-bi-cao-trong-vu-mua-ban-trai-phep-hoa-don-gan-64-000-ty-dong-i717585/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">CAND, 2023</a>) Vì vậy luật không cho phép xóa sai sót. Theo Nghị định 123/2020 và Công văn 1647/TCT-CS (5/2023), người bán không được xóa hóa đơn điện tử sai. Họ phải xuất hóa đơn điều chỉnh và giữ nguyên bản gốc trong hồ sơ. (Nguồn: <a href=\"https://luatvietnam.vn/thue-phi-le-phi/nen-lap-hoa-don-dieu-chinh-hay-thay-the-565-94892-article.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">LuatVietnam</a>) Nghĩa là sản phẩm không được coi hóa đơn đã upload là bản chốt.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Dựng phần hóa đơn thành một luồng có phân quyền, không phải một cú upload một chiều.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Anchor và Admin được tạo, disable và upload lại hóa đơn.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dealer chỉ xem hóa đơn và chọn hóa đơn nào đem đi tài trợ, không bao giờ tạo.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Hóa đơn sai bị disable chứ không bị xóa, lịch sử vẫn audit được.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dealer nhìn thấy hóa đơn nào đang inactive và vì sao, thay vì thấy hạn mức tự nhiên hụt đi mà không hiểu lý do.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Cách này chỉ chạy với dealer nằm trong một mạng lưới anchor đang hoạt động. Người vay đứng một mình thì không có hóa đơn nào để dựng hồ sơ. Chúng tôi chấp nhận. Đó đúng là tệp sản phẩm nhắm tới.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> Tôi map xem một hóa đơn sai đập vào từng vai trò ra sao, rồi thiết kế các chức năng hóa đơn theo từng vai trò. Cơ chế inactive-invoice là của tôi. Bản Ấn Độ chưa bao giờ cần đến nó.</p>",
      "carousel": {
        "title": "Key decision 02 showcase",
        "slides": [
          {
            "label": "Why an invoice can't be deleted",
            "description": "Fake invoices are a real risk in Vietnam — in 2023 one ring sold over 1 million of them. Under Decree 123/2020 and Letter 1647/TCT-CS, a wrong e-invoice can't be deleted: the seller issues an adjustment or a replacement, and the original stays on record. So the product had to correct invoices, not erase them.",
            "imageSrc": "./assets/scf-img-decision02-challenge.png"
          },
          {
            "label": "Disable flow, end to end",
            "description": "A demo of the disable-invoice flow, starting from the Admin role, and how each other role is impacted. The invoice is disabled, not deleted, so the record is corrected without erasing the history.",
            "imageSrc": "./assets/scf-img-decision02-disable-flow.png"
          },
          {
            "label": "Dealer invoice list",
            "description": "Each invoice shows amount, due date, and status, so the dealer sees the full record at a glance.",
            "imageSrc": "./assets/scf-img-decision02-dealer-invoice-list.png"
          },
          {
            "label": "Dealer selects an invoice to finance",
            "description": "The dealer selects an invoice to finance and sends it for disbursement. The dealer never creates an invoice, only selects.",
            "imageSrc": "./assets/scf-img-decision02-dealer-select-finance.png"
          },
          {
            "label": "Inactive invoice, admin view",
            "description": "The admin sees the same invoice as disabled. The record is kept, not deleted, so history stays auditable.",
            "imageSrc": "./assets/scf-img-decision02-anchor-inactive-invoice.png"
          }
        ]
      }
    },
    {
      "label": "Key decision 03 of 4",
      "title": "Put the bank's screen inside our app",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Muốn nộp xong hồ sơ, dealer phải làm một bước chạy trong hệ thống của ngân hàng, không phải của SCF.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Có hai ràng buộc không đụng vào được.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dealer bắt buộc đăng nhập trực tiếp với ngân hàng. Đó là bên cho vay có giấy phép, và chính sách trình duyệt, bảo mật lẫn luật ngân hàng đều đòi như vậy.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Giao diện ngân hàng giữ nguyên phong cách của họ, SCF không restyle được.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Câu hỏi còn lại là bước đó nên đặt ở đâu. Đáp án mặc định là redirect: đẩy dealer sang app ngân hàng, làm xong rồi đẩy về. Tôi thử liệt kê xem phương án đó bắt dealer phải gánh những gì:</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ không biết là hồ sơ này còn cần tới một app thứ hai.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ có thể không mở app ngân hàng, thế là hồ sơ dừng luôn ở đó.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ mở app ngân hàng nhưng không tìm ra chỗ để làm tiếp.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ phải gõ lại những thông tin đã khai cho SCF.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ không biết nên vào app nào để xem trạng thái.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Họ ít khi nộp hồ sơ, nên tới lần sau đã quên mất quy trình chạy qua hai app.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Trong Workgeist Report của Qatalog, 6 trên 10 người nói khó theo dõi thông tin nằm rải giữa nhiều app, và mất 9,5 phút mới tập trung lại được sau mỗi lần chuyển app. (Nguồn: <a href=\"https://conclude.io/blog/context-switching-is-killing-your-productivity/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Qatalog Workgeist Report, qua Conclude</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Mỗi gạch đầu dòng ở trên là một chỗ rơi rụng, và chúng cộng dồn lên nhau. Với người lần đầu dùng app tài chính, cộng lại là gần hết funnel.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Industry direction.</strong> Năm 2021, World Retail Banking Report của Capgemini đã nói ngân hàng nên đi theo Banking-as-a-Service, nhúng dịch vụ tài chính vào đời sống hằng ngày, thay vì bắt khách hàng tìm đến mình. (Nguồn: <a href=\"https://www.capgemini.com/news/press-releases/world-retail-banking-report-2021-to-create-new-value-banks-can-adopt-banking-as-a-service-to-embed-finance-in-consumer-lifestyles/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Capgemini, 2021</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Nhúng không chỉ dễ thở hơn cho dealer của chúng tôi. Nó còn là hướng ngành đang đi sẵn.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Nhúng màn hình ngân hàng vào trong SCF. Chấp nhận hai ràng buộc kia, còn lại nắm hết.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Đặt màn hình ngân hàng nằm giữa header và bottom navigation của SCF, để dealer thấy rõ mình chưa rời khỏi SCF.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Prefill form của ngân hàng bằng dữ liệu SCF, dealer không phải gõ lại gì ngoài phần đăng nhập bắt buộc.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dealer từ ngân hàng quay về thì thả họ đúng chỗ đang dở, không thả về đầu.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Dựng một progress tracker do SCF nắm, gói quy trình nội bộ của ngân hàng lại thành vài giai đoạn đọc được.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Hai hệ thống vẫn nằm đó. Chỉ là dealer không lạc giữa chúng nữa.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Màn hình hiện hai phong cách cùng lúc. Màu, font, component của SCF ở ngoài, của ngân hàng ở trong. Nhìn không ra một sản phẩm liền mạch.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> Tôi xác định việc nhúng phải phủ tới đâu, và nhận phần làm cho nó cảm giác như một sản phẩm. Tôi gói quy trình ngân hàng lại thành một stage duy nhất trong SCF và đặt điểm vào cho stage đó. Tôi thiết kế chỗ hiển thị thông báo của ngân hàng ngay trong SCF, để dealer đọc tại chỗ thay vì phải đăng nhập vào ngân hàng chỉ để xem tin.</p>",
      "carousel": {
        "title": "Key decision 03 showcase",
        "slides": [
          {
            "label": "Why not just send them to the bank",
            "description": "App switching costs users: 6 in 10 lose track of information across apps, and it takes 9.5 minutes to refocus. Capgemini says the same from the bank's side — embed finance into everyday life.",
            "imageSrc": "./assets/scf-img-decision03-challenge.png"
          },
          {
            "label": "The embed, bank screen inside SCF",
            "description": "The bank's screen sits between SCF's header and bottom navigation, so the dealer can see they never left SCF.",
            "imageSrc": "./assets/scf-img-decision03-embed.png"
          },
          {
            "label": "One journey, three screens",
            "description": "Dashboard, application detail with the SCF progress tracker, then the SSB form. The header and navigation stay the same the whole way, so the handoff reads as one product.",
            "imageSrc": "./assets/scf-img-decision03-dashboard.png"
          }
        ]
      }
    },
    {
      "label": "Key decision 04 of 4",
      "title": "Translate the bank's statuses, don't show them",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Dealer gửi yêu cầu rút tiền rồi ngồi chờ. Yêu cầu chạy qua ngân hàng, mỗi bước lại đổi trạng thái một lần. Dealer chỉ có đúng một câu hỏi: <em>giờ tôi có phải làm gì không?</em></p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Riêng đối tác hiện tại đã có mười một trạng thái. Chúng sinh ra cho vận hành ngân hàng, không phải cho dealer. Nhìn vào màn hình, dealer không đoán được:</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Yêu cầu của mình đang xảy ra chuyện gì.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Mình có phải làm gì không.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Rủi ro lớn hơn nằm ở tương lai. Mỗi ngân hàng một bộ trạng thái riêng. Cứ bê nguyên ra thì thêm một ngân hàng là thêm một đống. Trải nghiệm SCF sẽ vỡ vụn, ngân hàng này một kiểu, ngân hàng kia một kiểu.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> SCF nắm luôn toàn bộ trạng thái mà dealer nhìn thấy. Trạng thái từ ngân hàng nào cũng phải dịch thành một trong năm badge tiếng Việt dễ hiểu trước khi lên màn hình.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Trang chi tiết yêu cầu chia làm ba lớp, lớp sau cụ thể hơn lớp trước.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Badge của SCF nói kết quả bằng một chữ.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Thông báo của ngân hàng nói vì sao.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Bảng hóa đơn chỉ đúng hóa đơn cần sửa.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Không lớp nào lặp lại lớp trên nó.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Nhiều trạng thái của ngân hàng gộp lại thành một trạng thái SCF, nên dealer không biết chính xác yêu cầu đang nằm ở bước nội bộ nào. Chúng tôi chấp nhận. Đó là việc bên trong của ngân hàng, dealer có thấy cũng không làm gì được, hiện ra chỉ tổ khiến họ lo.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Payoff.</strong> Đến khi ngân hàng thứ hai vào với một bộ trạng thái hoàn toàn khác, việc phải làm chỉ là map bộ đó về đúng năm badge cũ. Một task setup vài ngày, không phải một cuộc redesign vài tháng.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> Phần này tôi nắm từ đầu tới cuối. Tôi phát hiện ra chỗ lệch và đặt lại vấn đề: dịch trạng thái là việc của SCF, không phải của ngân hàng. Rồi tôi xây nó.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Tôi map mười một trạng thái của ngân hàng về năm badge, và tự viết label từng badge bằng tiếng Việt dễ hiểu. Tôi chốt nguyên tắc gom nhóm: gom theo việc dealer cần làm tiếp, không gom theo việc ngân hàng đang làm bên trong.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Tôi thiết kế trang chi tiết yêu cầu ba lớp.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Tôi nhận luôn phần edge case. Tôi lấy trạng thái ngân hàng làm gốc, vẽ happy path trước, rồi map hết các nhánh có thể vỡ. Ra mười hai case, tất cả suy ra từ state machine của disbursement trước khi vẽ màn hình nào. Tôi thiết kế màn cho từng case, để dealer rơi vào tình huống lạ vẫn biết phải sửa gì.</li></ul>",
      "carousel": {
        "title": "Key decision 04 showcase",
        "slides": [
          {
            "label": "Status mapping, all sources to five badges",
            "description": "How SSB request status and message, SSB invoice status, and the SCF request process all collapse into the five SCF badges.",
            "imageSrc": "./assets/scf-img-decision04-status-mapping.png"
          },
          {
            "label": "Three-layer request detail page",
            "description": "The ĐNGN detail page in three layers: SCF badge (outcome), bank message (why), invoice table (what to fix).",
            "imageSrc": "./assets/scf-img-decision04-three-layer-detail.png"
          },
          {
            "label": "Edge-case map",
            "description": "Twelve cases grouped into seven, all derived from the disbursement state machine before any screen was drawn.",
            "imageSrc": "./assets/scf-img-decision04-edge-case-diagram.png"
          },
          {
            "label": "Edge-case screens and role matrix",
            "description": "Figma screens for the edge cases, with a matrix of which role sees what and does what.",
            "imageSrc": "./assets/scf-img-decision04-edge-case-screens.png"
          },
          {
            "label": "Dealer dashboard, request list",
            "description": "The dealer's list of ĐNGN requests, each carrying one of the five badges.",
            "imageSrc": "./assets/scf-img-decision04-dealer-dashboard.png"
          }
        ]
      }
    },
    {
      "label": "What shipped",
      "title": "One product design, two banks, one reusable pattern",
      "statsCardStyle": "white",
      "stats": [
        {
          "value": "300+",
          "label": "Dealers approved",
          "detail": "Fully digital, by August 2023"
        },
        {
          "value": "2 banks",
          "label": "Partners, no redesign",
          "detail": "Second bank added by mapping codes"
        }
      ],
      "tableIntro": "Bốn quyết định này đứng vững trên những chiều quan trọng với một sản phẩm nhiều bên và chịu quản lý:",
      "displayAs": "table",
      "columns": [
        {
          "number": "01",
          "title": "8 roles as one system",
          "subsections": [
            {
              "label": "Trust",
              "body": "Không có chữ nào lệch lọt tới dealer"
            },
            {
              "label": "Compliance",
              "body": "Đổi trạng thái lan đều qua mọi portal"
            },
            {
              "label": "Accessibility",
              "body": "—"
            },
            {
              "label": "Scalability",
              "body": "Pattern dùng lại được cho ngân hàng mới"
            }
          ]
        },
        {
          "number": "02",
          "title": "Don't ask dealers to classify",
          "subsections": [
            {
              "label": "Trust",
              "body": "Lỗi chỉ về file, không chỉ vào dealer"
            },
            {
              "label": "Compliance",
              "body": "Consent đặt đúng ngữ cảnh (Nghị định 13/2023)"
            },
            {
              "label": "Accessibility",
              "body": "Dealer xác nhận, không phải phân loại"
            },
            {
              "label": "Scalability",
              "body": "—"
            }
          ]
        },
        {
          "number": "03",
          "title": "Invoice replaces business plan",
          "subsections": [
            {
              "label": "Trust",
              "body": "Ngân hàng chấm bằng lịch sử buôn bán thật"
            },
            {
              "label": "Compliance",
              "body": "—"
            },
            {
              "label": "Accessibility",
              "body": "Dealer không phải viết tài liệu nào"
            },
            {
              "label": "Scalability",
              "body": "Chạy với mọi quan hệ anchor–dealer"
            }
          ]
        },
        {
          "number": "04",
          "title": "Embed the bank's screen",
          "subsections": [
            {
              "label": "Trust",
              "body": "Đăng nhập riêng giúp cô lập rủi ro"
            },
            {
              "label": "Compliance",
              "body": "Ngân hàng xác thực từng giao dịch (luật ngân hàng)"
            },
            {
              "label": "Accessibility",
              "body": "Dealer không rời khỏi SCF"
            },
            {
              "label": "Scalability",
              "body": "Template cho mọi ngân hàng sau này"
            }
          ]
        },
        {
          "number": "05",
          "title": "11 codes → 5 badges",
          "subsections": [
            {
              "label": "Trust",
              "body": "Dealer nhận câu trả lời rõ, không thấy mã thô"
            },
            {
              "label": "Compliance",
              "body": "—"
            },
            {
              "label": "Accessibility",
              "body": "Tiếng Việt dễ hiểu, không cần biết ngân hàng"
            },
            {
              "label": "Scalability",
              "body": "Thêm ngân hàng bằng map mã, không phải redesign"
            }
          ]
        }
      ],
      "summary": "Lý do pattern này trụ được: việc gộp mười một xuống năm xảy ra ở tầng hiển thị, không phải tầng dữ liệu. Mỗi badge vẫn truy ngược về đúng một mã. Không mất gì cả, chỉ là dịch lại. Nhờ vậy pattern hấp thụ được ngân hàng mới thay vì gãy dưới sức nặng của nó.",
      "closingNote": "**Dealer đi trọn hành trình.** Đặt bốn quyết định nối nhau, chúng vẽ ra đúng con đường dealer đi: được mời và onboard, đi qua ngân hàng mà không rời SCF, chọn đúng hóa đơn, lúc nào cũng biết mình đang ở đâu. Đây chính là mục tiêu sản phẩm đặt ra từ đầu: người chủ tiệm ở đầu bài tự mình lấy được vốn lưu động. Không chi nhánh, không hồ sơ giấy, không thế chấp.",
      "imageSrc": "./assets/scf-img-what-shipped-placeholder.png",
      "imageAlt": "Placeholder image"
    },
    {
      "label": "How we'd measure success",
      "title": "Designed against a clear baseline, with defined metrics",
      "body": [
        "Ngoài phần đã ship, chúng tôi có dựng một bộ chỉ số để đo sâu hơn. Hợp đồng kết thúc trước launch nên tôi không có số liệu thật để đối chiếu. Đây là framework hướng tới, không phải kết quả đã chứng minh. Nói thẳng chuyện đó cũng là một phần của việc ghi nhận trung thực.",
        "**Baseline để so:** một khoản vay ngân hàng truyền thống ở Việt Nam mất 1–3 tuần. Người vay đi gom giấy tờ, ra chi nhánh, nộp phương án kinh doanh. Mục tiêu của chúng tôi là xong trong ngày, với các yêu cầu nộp trong khung cut-off của ngân hàng (6:00–16:00, Thứ Hai–Thứ Sáu).",
        "Ba chỉ số dưới đây là những thứ sản phẩm được xây để tác động. Mỗi chỉ số truy ngược về một quyết định ở trên:"
      ],
      "displayAs": "table",
      "columns": [
        {
          "number": "01",
          "title": "Onboarding completion rate",
          "subsections": [
            {
              "label": "What it measures",
              "body": "Bao nhiêu dealer bắt đầu rồi đi tới cuối, không bỏ dở, không phải gọi support."
            },
            {
              "label": "Which decision it measures",
              "body": "Quyết định 1: form định hình sẵn từ file anchor, dealer không phải tự khai loại."
            },
            {
              "label": "Good direction",
              "body": "Càng cao càng tốt. Theo cohort, đo hằng tuần qua từng đợt rollout anchor."
            }
          ]
        },
        {
          "number": "02",
          "title": "Time from disbursement request to funds",
          "subsections": [
            {
              "label": "What it measures",
              "body": "Dealer chờ bao lâu từ lúc gửi yêu cầu tới lúc nhận tiền, tính trên các yêu cầu trong khung cut-off."
            },
            {
              "label": "Which decision it measures",
              "body": "Quyết định 3: màn ngân hàng chạy trong SCF nên dealer không kẹt ở điểm bàn giao. Từ vài tuần rút còn vài giờ."
            },
            {
              "label": "Good direction",
              "body": "Càng thấp càng tốt. Median theo tuần, chỉ tính yêu cầu trong cut-off."
            }
          ]
        },
        {
          "number": "03",
          "title": "Support ticket rate per dealer",
          "subsections": [
            {
              "label": "What it measures",
              "body": "Dealer phải gọi support bao nhiêu lần thay vì tự sửa được."
            },
            {
              "label": "Which decision it measures",
              "body": "Quyết định 4: năm badge cộng trang chi tiết ba lớp cho phép dealer tự gỡ."
            },
            {
              "label": "Good direction",
              "body": "Càng thấp càng tốt. Tính trên mỗi dealer hoạt động mỗi tháng, theo dõi sau mỗi release hoặc mỗi ngân hàng mới."
            }
          ]
        }
      ],
      "summary": "**What I did:** tôi làm cùng team để chốt baseline và ba chỉ số này, để team sau có tiêu chí rõ ràng mà đo."
    },
    {
      "label": "What I'd do differently",
      "title": "What I would change next time",
      "body": [
        "**Đến gần người dùng cuối hơn, và có số liệu thật.** Team triển khai chưa từng làm việc trực tiếp với người dùng. Đó là mô hình hợp tác, không phải lựa chọn của tôi. Tôi làm việc với các chuyên gia phía client, những người hiểu rõ khách hàng và sản phẩm, và input của họ định hình mọi quyết định. Nhưng tôi không kiểm chứng được dealer thật sự hành xử ra sao, và cũng không có tracking để soi lại sau launch. Lần sau tôi sẽ đẩy cả hai thứ: được tiếp xúc người dùng, dù chỉ thỉnh thoảng, và có tracking trên những quyết định quan trọng nhất.",
        "**Ghi chú:** tên sản phẩm và tên ngân hàng đối tác đã được ẩn danh để tôn trọng bảo mật. Toàn bộ luồng, quyết định và kết quả đều là thật."
      ]
    }
  ],
  "outcomesLabel": "Outcome",
  "outcomes": [
    {
      "value": "300+",
      "label": "Dealers approved (digital)"
    },
    {
      "value": "2",
      "label": "Bank partners, no redesign"
    },
    {
      "value": "11 → 5",
      "label": "Status codes into badges"
    },
    {
      "value": "8",
      "label": "Roles unified as one system"
    }
  ]
};
