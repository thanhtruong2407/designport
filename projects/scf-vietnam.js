window.portfolioProjectDetails = window.portfolioProjectDetails || {};

window.portfolioProjectDetails["scf-vietnam"] = {
  "hideOutcomesSummary": true,
  "popupSections": [
    {
      "label": "How I approached this",
      "title": "One process, two lenses",
      "body": [
        "I worked in the Double Diamond: Discover, Define, Develop, Deliver. Two lenses guided it.",
        "Design Thinking framed the first half. It kept the work on the dealer's real problem before jumping to a solution. This shaped Discover and Define. Its later stages, prototype and test, carried into Develop and Deliver.",
        "Systems Thinking drove the build. The hard part was not the loan. It was making two banking systems, two sets of laws, and eight roles behave as one product. This shaped Develop, where the operating rule was that no screen is independent.",
        "Before any design work, I talked to the PM, BA, and domain experts on the client side. Not to gather requirements, but to understand what was already decided and what I had to work within.",
        "In Define, I worked with the BA and PM to break down each problem, asking whether we were solving the real issue or a symptom. I framed every challenge from the dealer's side, not the bank's.",
        "In Develop, design ran in sprints alongside development. For each challenge I presented multiple options with explicit trade-offs. The rationale was part of the deliverable, not an afterthought."
      ],
      "diagramLabel": "Double Diamond process",
      "diagramImageSrc": "./assets/scf-img-double-diamond-process.png",
      "diagramImageAlt": "Double Diamond process diagram mapping Discover, Define, Develop, and Deliver to the case study"
    },
    {
      "label": "The opportunity",
      "title": "Bring supply chain finance to Vietnam's small distributor network",
      "body": [
        "SCF is a B2B supply chain finance platform. It started in India, connecting 300,000+ small businesses to working capital through the anchor companies they already trade with. In 2022 it expanded to Vietnam.",
        "**Business goal:** bring supply chain finance to Vietnam's small distributor network. Help dealers get working capital through their existing anchors. Fully digital, no branch visit.",
        "The market research came from the client side. I used it to frame the problem the product had to solve. The data showed the gap was real, not assumed."
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
        "A small dealer wants to buy goods from their distributor on credit. They have a good trading record. But they have no cash and no collateral. No bank will lend to them.",
        "**Root cause:** banks evaluate assets. The real proof of reliability is the dealer's transaction history with the distributor. That data exists, but no one was using it.",
        "Neither side could fix this alone. Banks had capital but no access to supply-chain trade data. SCF had anchor relationships and invoice history, but Vietnamese law only lets licensed banks issue credit. The partnership let each side bring what the other couldn't build.",
        "**Product goal:** make formal credit accessible to Vietnam's small distributors. No collateral, no paperwork, no branch visit. A dealer inside an anchor network should apply and get approved on their own, and always know where they stand without calling anyone.",
        "The lending idea already worked in India. I didn't need to invent it. I needed to make it work in Vietnam. The hard part wasn't the loan. It was making eight roles, two systems, and Vietnamese regulation work together underneath it.",
        "**What I did:** I framed the problem from the dealer's side, separated the business goal from the product goal, and set the constraints every later decision had to respect."
      ],
      "asideImageSrc": "./assets/scf-img-product-goal-self-serve-credit.png",
      "asideImageAlt": "Product goal - self-serve credit with no collateral, no paperwork, no branch visit",
      "diagramImageSrc": "./assets/scf-img-dealer-journey-swimlane.png",
      "diagramImageAlt": "Dealer journey swimlane across dealer, anchor, SCF and bank"
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
          "body": "Vietnam has two ID types: a tax code for companies, a personal ID for household traders. The bank's KYC treats them differently. And Vietnamese lending law requires a business plan for unsecured credit, which small shop owners can't write. Get any of these wrong and the launch stops. Not as a UX problem, but as a legal one.",
          "image": {
            "src": "./assets/scf-img-two-id-types-vietnam.png",
            "alt": "Two ID types in Vietnam - tax code vs personal ID"
          }
        },
        {
          "number": "02",
          "cardClass": "bg-white dark:bg-slate-900",
          "title": "Two separate systems had to feel like one - SCF and Bank",
          "body": "When a dealer applies, the request moves into the bank's own internet banking system for review and payout, then comes back to SCF. Two products. Two teams. Two visual styles. To the dealer, it had to feel like one flow, with no sign a second system existed.",
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
        "These two problems were too big to design against directly. You can't put 'rebuild for Vietnam' on a screen.",
        "So my main work was breaking them down. This is the part that carried the project. Not the screens. The chain from problem, to challenge, to decision is where the design thinking lived, and where I added the most value.",
        "The rest of this case study follows that chain: one foundation decision first, then four decisions that did the heavy lifting. I decomposed each problem into four concrete challenges, then turned each into a single design decision I could build and defend:"
      ],
      "bullets": [
        "A two-ID system",
        "A legally required business plan",
        "Two banking systems that had to feel like one",
        "A shared status model across two banks"
      ],
      "diagramImageSrc": "./assets/scf-img-problem-to-decision-breakdown.png",
      "diagramImageAlt": "Breakdown from two big problems into four concrete challenges and decisions"
    },
    {
      "label": "Foundation decision",
      "title": "The decision under everything: eight roles, one system",
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> A credit application moves through eight roles before money reaches a dealer:</p><ul class=\"mb-6 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Super Admin / Maker Admin / Checker Admin</strong><span class=\"text-slate-500 dark:text-slate-400\">: platform operations</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Master Anchor / Anchor</strong><span class=\"text-slate-500 dark:text-slate-400\">: distributor side. Anchor uploads invoices; Master Anchor oversees several anchor brands</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">FI Maker / FI Checker</strong><span class=\"text-slate-500 dark:text-slate-400\">: bank staff who review and approve</span></li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\"><strong class=\"font-semibold text-slate-950 dark:text-white\">Dealer</strong><span class=\"text-slate-500 dark:text-slate-400\">: the end user. Never sees the other seven.</span></li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Every handoff was a place something could break. Change a label on the dealer's screen, and the bank staff's view might not match. Update the invoice table for the anchor, and the admin's approval view might shift. A change on one screen could silently break another role's view entirely.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Treat no screen as independent. Before any change could be signed off, I mapped its impact across every other role. That map was the gate for sign-off across all three phases. Why: with eight roles on four apps, the risk wasn't a bad screen. It was a hidden seam between screens.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Every change had to go through the impact map first, so shipping any single decision took longer. In return, no launch surprise came from a role nobody had checked.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> What I added was the discipline: no screen ships until its impact is mapped across every other role. I built and maintained the cross-role impact map, and made it the sign-off gate across all three phases.</p>",
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
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> Before the bank can run KYC, the system needs to know the dealer&#39;s business type.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Vietnam has no single business ID.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">A company uses a tax code (MST).</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">A household trader uses a personal ID (CCCD).</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">These two ID types map to three forms: Business Dealer, SME, and Personal Dealer.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Each form triggers a different bank KYC check.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">So the type has to be known first.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">But sorting a dealer into the right type is a hard call. When lawmakers drafted the 2020 Enterprise Law, they debated whether to bring household businesses into the law and left them out, handing the rules to a separate decree. (Source: <a href=\"https://www.vietnamplus.vn/quoc-hoi-thao-luan-ve-dua-ho-kinh-doanh-vao-du-thao-luat-doanh-nghiep-post641403.vnp\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">VietnamPlus, 2020</a>) The categories were unclear even to lawmakers. Only about 25% of Vietnam&#39;s 5 million household businesses were formally registered as of 2022. (Source: <a href=\"https://hanoitimes.vn/why-are-millions-of-home-based-businesses-in-vietnam-ignoring-registering-as-companies.659867.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Hanoi Times, 2022</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">So a dealer probably can&#39;t classify themselves either. At that scale, wrong guesses are likely. And there was no clean registry to check against. So I moved the hard part onto the product, not the dealer.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> The Anchor&#39;s file picks the form before the dealer ever sees it.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The Anchor submits a recommendation file first.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The system reads that file and identifies the dealer&#39;s program.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The system picks one of three form variants I built, one per dealer type: Business Dealer, SME, and Personal Dealer.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Only then does the invite link go out.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The dealer opens the link, lands on a form already shaped for their type, and just confirms their identity.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">This works because the answer comes from the Anchor&#39;s file, not the dealer. And if an ID doesn&#39;t match, the error points at the file, not them.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> This depends on the Anchor&#39;s file being accurate. If the file is wrong, the dealer hits an error they can&#39;t fix. We accepted that. It&#39;s an ops problem upstream of the dealer, not a product one.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> I worked out the form-from-file approach with the team. Then I designed the three form variants, the error messages, and the in-context consent placement. The India product used one ID, so it never hit this. The two-ID problem and the file-driven form were built for Vietnam.</p>",
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
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> This is distributor finance. The Anchor sells to the dealer and issues the invoice. That invoice becomes the proof of a real trade. So the product replaces the business plan with this trading history. (The model came from the India product.)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">After every order, the Anchor uploads an invoice with the dealer, the amount, and the payment date. Each upload adds to a record. Over time that record becomes what the bank evaluates for credit. My job was to make it work across every role that touches it.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> The invoice is now the proof, so a wrong invoice means a wrong credit decision. Three roles depend on the same record.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The Anchor creates the invoices.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The dealer&#39;s credit limit depends on them.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The bank reads them to approve credit.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">If someone uploads wrong invoice information, the record breaks. The dealer then can&#39;t use that invoice to request disbursement. Trading history only works if you can fix a record without erasing it.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Invoice fraud in Vietnam is not a small risk. In 2023, one ring sold over 1 million fake invoices to more than 88,000 organizations, worth close to 64,000 billion VND. (Source: <a href=\"https://cand.com.vn/Ban-tin-113/xet-xu-100-bi-cao-trong-vu-mua-ban-trai-phep-hoa-don-gan-64-000-ty-dong-i717585/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">CAND, 2023</a>) That is why the law does not let anyone erase a mistake. Under Decree 123/2020 and Official Letter 1647/TCT-CS (May 2023), a seller cannot delete a wrong e-invoice. They must issue an adjustment invoice and keep the original on record. (Source: <a href=\"https://luatvietnam.vn/thue-phi-le-phi/nen-lap-hoa-don-dieu-chinh-hay-thay-the-565-94892-article.html\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">LuatVietnam</a>) So the product could not treat an uploaded invoice as final.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Build invoice handling as a role-based flow, not a one-way upload.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The Anchor and Admin create, disable, and re-upload invoices.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The dealer views invoices and selects which to finance, but never creates one.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">A wrong invoice gets disabled, not deleted, so the history stays auditable.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The dealer sees which invoices are inactive and why, instead of an unexplained gap in their limit.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> This only works for dealers inside an active anchor network. A standalone borrower has no invoices to build a record. We accepted that. It&#39;s who the product is for.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> I mapped how one wrong invoice hits each role, then designed the invoice functions role by role. The inactive-invoice mechanism was mine. The India product never needed it.</p>",
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
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> To finish applying, the dealer has to complete a step that runs inside SSB&#39;s own system, not SCF&#39;s.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> Two constraints can&#39;t be changed.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The dealer must log in with SSB directly. SSB is the licensed lender, and browser policy, security, and banking law all require it.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The bank&#39;s UI keeps its own look, which SCF can&#39;t restyle.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">So the open question was where that step should live. The default answer is a redirect. Send the dealer out to SSB, let them finish there, send them back. I mapped what that version asks of a dealer:</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They don&#39;t know the application needs a second app at all.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They may not open SSB at all, so the application stops there.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They open SSB but can&#39;t find where to continue.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They re-type basic information they already gave SCF.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They don&#39;t know which app to check for status, SCF or SSB.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">They apply rarely, so by the next time they have forgotten the process runs across two apps.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">In Qatalog&#39;s Workgeist Report, 6 out of 10 people said it was hard to keep track of information spread across different apps, and it took 9.5 minutes to get back into focus after switching apps. (Source: <a href=\"https://conclude.io/blog/context-switching-is-killing-your-productivity/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Qatalog Workgeist Report, via Conclude</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Every item on that list is a place to drop off, and they stack. For a first-time finance-app user, that is most of the funnel.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Industry direction.</strong> In 2021, Capgemini&#39;s World Retail Banking Report argued that banks should adopt Banking-as-a-Service and embed finance into everyday life, instead of making customers come to the bank. (Source: <a href=\"https://www.capgemini.com/news/press-releases/world-retail-banking-report-2021-to-create-new-value-banks-can-adopt-banking-as-a-service-to-embed-finance-in-consumer-lifestyles/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-500 dark:text-brand-300\">Capgemini, 2021</a>)</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">Embedding was not only the friendlier option for our dealers. It was where the industry was already going.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> Embed the bank&#39;s screen inside SCF. Accept the two constraints, own everything else around them.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Keep the bank&#39;s screen between SCF&#39;s header and bottom navigation, so the dealer can see they never left SCF.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Prefill the bank&#39;s form from SCF data, so the dealer re-enters nothing behind the required login.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">When the dealer comes back from the bank, return them to where they left off, not to the start.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Build a progress tracker, owned by SCF, that turns the bank&#39;s internal process into a few readable stages.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">The two systems are still there. The dealer just can&#39;t get lost between them.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> The screen shows two visual styles at once. SCF&#39;s colors, fonts, and components on the outside, the bank&#39;s on the inside. It does not look like one product.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> I worked out what embedding actually had to cover, and owned making it feel like one product. I defined the bank&#39;s process as a single stage inside SCF, and set the entry point into it. I designed a place in SCF to surface the bank&#39;s messages, so the dealer reads them inside SCF instead of logging into the bank each time.</p>",
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
      "customHtml": "<p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What it is.</strong> A dealer submits a request to draw money, then waits. As the request moves through the bank, its status changes at each step. The dealer has one question: <em>do I need to do anything right now?</em></p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The challenge.</strong> The bank&#39;s system tracks eleven different statuses for our partner alone. These are built for banking operations, not for a dealer. Looking at the screen, a dealer can&#39;t tell:</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">What is happening to their request.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">Whether they need to do something.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">The bigger risk is the future. Each bank has its own set of statuses. Show them raw, and every new bank adds another pile. The SCF experience breaks apart from one bank to the next.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">The decision.</strong> SCF becomes the single owner of every status the dealer sees. Every status, from any bank, is translated into one of five plain-Vietnamese badges before it reaches a screen.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">The request detail page has three layers, each more specific than the last.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The SCF badge says the outcome in one word.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The bank&#39;s message says why.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">The invoice table shows the exact invoice to fix.</li></ul><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\">No layer repeats the one above it.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Trade-off.</strong> Several of the bank&#39;s statuses collapse into a single SCF status. So the dealer can&#39;t tell exactly which internal step the request is on. We accepted that. Those steps are the bank&#39;s internal work. The dealer can&#39;t act on them anyway, so showing them would only cause worry.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">Payoff.</strong> When the second bank partner joined with a completely different set of statuses, adding it meant mapping those statuses to the same five badges. A setup task of days, not a redesign of months.</p><p class=\"mb-5 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300\"><strong class=\"font-semibold text-slate-900 dark:text-white\">What I did.</strong> I owned this end to end. I spotted the mismatch and framed the translation as SCF&#39;s job, not the bank&#39;s. Then I built it.</p><ul class=\"mb-5 grid gap-2\"><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">I mapped the bank&#39;s eleven statuses into five badges, and wrote each badge label in plain Vietnamese. I set the grouping rule: statuses group by what the dealer should do next, not by what the bank is doing internally.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">I designed the three-layer request detail page.</li><li class=\"relative pl-5 text-base leading-8 text-slate-600 before:absolute before:left-0 before:top-3.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-500 dark:text-slate-300\">I owned the edge cases. I started from the bank&#39;s statuses and drew the happy-path flow. Then I mapped every branch where it could break. That gave twelve cases, all derived from the disbursement state machine before a single screen was built. I designed the screen for each one, so a dealer who hits an edge case still sees what to fix.</li></ul>",
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
      "tableIntro": "The four decisions held up across the dimensions that mattered for a regulated, multi-party product:",
      "displayAs": "table",
      "columns": [
        {
          "number": "01",
          "title": "8 roles as one system",
          "subsections": [
            {
              "label": "Trust",
              "body": "No label mismatch reaches the dealer"
            },
            {
              "label": "Compliance",
              "body": "Status changes cascade across all portals"
            },
            {
              "label": "Accessibility",
              "body": "—"
            },
            {
              "label": "Scalability",
              "body": "Pattern applies to any new bank"
            }
          ]
        },
        {
          "number": "02",
          "title": "Don't ask dealers to classify",
          "subsections": [
            {
              "label": "Trust",
              "body": "Error points at the file, not the dealer"
            },
            {
              "label": "Compliance",
              "body": "Consent embedded in context (Decree 13/2023)"
            },
            {
              "label": "Accessibility",
              "body": "Dealer confirms, doesn't classify"
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
              "body": "Bank evaluates real trade history"
            },
            {
              "label": "Compliance",
              "body": "—"
            },
            {
              "label": "Accessibility",
              "body": "Dealer writes no document"
            },
            {
              "label": "Scalability",
              "body": "Works for any anchor–dealer relationship"
            }
          ]
        },
        {
          "number": "04",
          "title": "Embed the bank's screen",
          "subsections": [
            {
              "label": "Trust",
              "body": "Separate login isolates risk"
            },
            {
              "label": "Compliance",
              "body": "Bank verifies each transaction (banking law)"
            },
            {
              "label": "Accessibility",
              "body": "Dealer never leaves SCF"
            },
            {
              "label": "Scalability",
              "body": "Template for every future bank"
            }
          ]
        },
        {
          "number": "05",
          "title": "11 codes → 5 badges",
          "subsections": [
            {
              "label": "Trust",
              "body": "Dealer gets a clear answer, never raw codes"
            },
            {
              "label": "Compliance",
              "body": "—"
            },
            {
              "label": "Accessibility",
              "body": "Plain Vietnamese, no banking knowledge needed"
            },
            {
              "label": "Scalability",
              "body": "Second bank added by mapping codes, not redesigning"
            }
          ]
        }
      ],
      "summary": "The reason the pattern held: the eleven-to-five collapse happened at the display level, not the data level. Every badge still maps back to a specific code. Nothing was lost, only translated. That's what let the pattern absorb a new bank instead of breaking under it.",
      "closingNote": "**The dealer completed the journey.** Put the four decisions end to end and they trace the whole path the dealer walks: invited and onboarded, through the bank without leaving SCF, the right invoice selected, and always knowing where they stand. The shop owner from the start of this case study gets working capital on their own. No branch, no paperwork, no collateral.",
      "imageSrc": "./assets/scf-img-what-shipped-placeholder.png",
      "imageAlt": "Placeholder image"
    },
    {
      "label": "How we'd measure success",
      "title": "Designed against a clear baseline, with defined metrics",
      "body": [
        "Beyond what shipped, we defined metrics to measure the product more deeply. The engagement ended before launch, so I have no post-launch data to check them against. This is the framework we built toward, not proven results. Saying that plainly is part of the record.",
        "**The baseline we designed against:** a traditional bank loan in Vietnam takes 1–3 weeks. The borrower gathers documents, visits a branch, and submits a business plan. Our target was same-day, for requests submitted inside the bank's cut-off window (6:00–16:00, Mon–Fri).",
        "We defined three metrics the product was built to move. Each traces back to a decision above:"
      ],
      "displayAs": "table",
      "columns": [
        {
          "number": "01",
          "title": "Onboarding completion rate",
          "subsections": [
            {
              "label": "What it measures",
              "body": "How many dealers who start the flow finish, without dropping off or calling support."
            },
            {
              "label": "Which decision it measures",
              "body": "Decision 1: the form is shaped from the anchor's file, so the dealer never has to classify themselves."
            },
            {
              "label": "Good direction",
              "body": "Higher. Track per cohort, weekly through each anchor rollout."
            }
          ]
        },
        {
          "number": "02",
          "title": "Time from disbursement request to funds",
          "subsections": [
            {
              "label": "What it measures",
              "body": "How long a dealer waits from request to money in hand, for requests inside the cut-off window."
            },
            {
              "label": "Which decision it measures",
              "body": "Decision 3: the bank's screen runs inside SCF, so the dealer doesn't stall at the handoff. Weeks become hours."
            },
            {
              "label": "Good direction",
              "body": "Lower. Median per week, cut-off requests only."
            }
          ]
        },
        {
          "number": "03",
          "title": "Support ticket rate per dealer",
          "subsections": [
            {
              "label": "What it measures",
              "body": "How often a dealer must call support instead of fixing a request themselves."
            },
            {
              "label": "Which decision it measures",
              "body": "Decision 4: five badges and the three-layer detail let the dealer self-resolve instead of calling."
            },
            {
              "label": "Good direction",
              "body": "Lower. Per active dealer per month, watched after each release or new bank."
            }
          ]
        }
      ],
      "summary": "**What I did:** I worked with the team to set the baseline and these three metrics, so a future team has clear success criteria to measure against."
    },
    {
      "label": "What I'd do differently",
      "title": "What I would change next time",
      "body": [
        "**Get closer to end users, with real data.** The delivery team never worked with users directly. That was the engagement model, not a choice. I worked with client-side experts who knew the customers and the product well, and their input shaped every decision. But I couldn't confirm how dealers actually behaved, and there was no tracking to check after launch. Next time I'd push for both: direct access to users, even occasional, and tracking on the decisions that mattered most.",
        "**Note:** Product and partner bank names have been anonymized to respect confidentiality. All flows, decisions, and outcomes are real."
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
