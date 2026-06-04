window.portfolioProjectDetails = window.portfolioProjectDetails || {};

/* ─── inline visuals ─────────────────────────────────────────────────────── */

var _huV1 = `
<div id="hu-v1">
<style>
#hu-v1{font-family:system-ui,sans-serif;}
#hu-v1{font-size:inherit;}
#hu-v1 .ax{font-size:.52em;fill:#94a3b8;}
#hu-v1 .guide{stroke:#e2e8f0;stroke-width:1;stroke-dasharray:4 3;}
#hu-v1 .dpath{fill:none;stroke:#6366f1;stroke-width:2;stroke-dasharray:720;stroke-dashoffset:720;transition:stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1);}
#hu-v1 .dpath.go{stroke-dashoffset:0;}
#hu-v1 .afill{fill:#eef2ff;opacity:0;transition:opacity .6s ease .8s;}
#hu-v1 .afill.go{opacity:1;}
#hu-v1 .dot{fill:#6366f1;opacity:0;transition:opacity .3s ease;}
#hu-v1 .dot-b{fill:#fff;stroke:#6366f1;stroke-width:2;}
#hu-v1 .dot.go{opacity:1;}
#hu-v1 .dlbl{font-size:.66em;fill:#64748b;opacity:0;transition:opacity .4s ease 1.3s;}
#hu-v1 .dlbl.go{opacity:1;}
#hu-v1 .leg{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:.75rem;}
#hu-v1 .leg span{display:flex;align-items:center;gap:6px;font-size:.82em;color:#64748b;}
#hu-v1 .dot-s{width:8px;height:8px;border-radius:50%;background:#6366f1;display:inline-block;flex-shrink:0;}
#hu-v1 .dot-o{width:8px;height:8px;border-radius:50%;border:1.5px solid #94a3b8;display:inline-block;flex-shrink:0;}
</style>
<svg viewBox="0 0 680 185" style="width:100%;height:auto;overflow:visible;" role="img" aria-label="Team velocity used Week 3 as baseline after onboarding and grew to ~1.5x by Week 8">
  <line x1="60" y1="20" x2="60" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="150" x2="650" y2="150" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="60" y1="110" x2="650" y2="110" class="guide"/>
  <line x1="60" y1="70"  x2="650" y2="70"  class="guide"/>
  <line x1="60" y1="30"  x2="650" y2="30"  class="guide"/>
  <text x="50"  y="154" class="ax" text-anchor="end">0</text>
  <text x="50"  y="114" class="ax" text-anchor="end">50%</text>
  <text x="50"  y="74"  class="ax" text-anchor="end">100%</text>
  <text x="50"  y="34"  class="ax" text-anchor="end">150%</text>
  <text x="90"  y="170" class="ax" text-anchor="middle">Wk 1</text>
  <text x="166" y="170" class="ax" text-anchor="middle">Wk 2</text>
  <text x="242" y="170" class="ax" text-anchor="middle">Wk 3</text>
  <text x="318" y="170" class="ax" text-anchor="middle">Wk 4</text>
  <text x="394" y="170" class="ax" text-anchor="middle">Wk 5</text>
  <text x="470" y="170" class="ax" text-anchor="middle">Wk 6</text>
  <text x="546" y="170" class="ax" text-anchor="middle">Wk 7</text>
  <text x="622" y="170" class="ax" text-anchor="middle">Wk 8</text>
  <path class="afill" d="M90,106 C118,101 142,95 166,90 C196,82 218,74 242,70 C274,66 292,65 318,64 C346,62 370,58 394,56 C422,52 448,48 470,44 C498,40 524,37 546,36 C574,34 598,31 622,30 L622,150 L90,150 Z"/>
  <path class="dpath" d="M90,106 C118,101 142,95 166,90 C196,82 218,74 242,70 C274,66 292,65 318,64 C346,62 370,58 394,56 C422,52 448,48 470,44 C498,40 524,37 546,36 C574,34 598,31 622,30"/>
  <circle class="dot" cx="90"  cy="106" r="4"/>
  <circle class="dot" cx="166" cy="90"  r="4"/>
  <circle class="dot dot-b" cx="242" cy="70"  r="4"/>
  <circle class="dot" cx="318" cy="64"  r="4"/>
  <circle class="dot" cx="394" cy="56"  r="4"/>
  <circle class="dot" cx="470" cy="44"  r="4"/>
  <circle class="dot" cx="546" cy="36"  r="4"/>
  <circle class="dot" cx="622" cy="30"  r="4"/>
  <text class="dlbl" x="630" y="26"  text-anchor="start">~1.5×</text>
  <text class="dlbl" x="250" y="66" text-anchor="start">Baseline</text>
</svg>
<div class="leg">
  <span><i class="dot-s"></i>Velocity (rows / week)</span>
  <span><i class="dot-o"></i>Week 3 = baseline after onboarding</span>
</div>
</div>
<script>
(function(){
  var el=document.getElementById('hu-v1');if(!el)return;
  var done=false;
  var ob=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting&&!done){
        done=true;
        setTimeout(function(){
          el.querySelector('.dpath').classList.add('go');
          el.querySelector('.afill').classList.add('go');
          el.querySelectorAll('.dlbl').forEach(function(n){n.classList.add('go');});
          el.querySelectorAll('.dot').forEach(function(d,i){
            setTimeout(function(){d.classList.add('go');},800+i*100);
          });
        },200);
        ob.unobserve(el);
      }
    });
  },{threshold:.2});
  ob.observe(el);
})();
</script>`;

/* ─── Visual 2 : Before → After review flow ─────────────────────────────── */

var _huV2 = `
<div id="hu-v2">
<style>
#hu-v2{font-family:system-ui,sans-serif;}
#hu-v2{font-size:inherit;}
#hu-v2 .col-head{font-size:.75em;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;font-weight:600;margin-bottom:1rem;}
#hu-v2 .pills{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:1rem;}
#hu-v2 .pill{font-size:.75em;padding:3px 8px;border-radius:20px;border:1px solid;}
#hu-v2 .pill-n{background:#f1f5f9;color:#64748b;border-color:#e2e8f0;}
#hu-v2 .pill-c{background:#eff6ff;color:#1e40af;border-color:#bfdbfe;}
#hu-v2 .pill-s{background:#f0fdf4;color:#166534;border-color:#bbf7d0;}
#hu-v2 .arrow{font-size:.82em;color:#94a3b8;display:flex;align-items:center;gap:4px;margin:5px 0;}
#hu-v2 .arrow::before{content:'↓';font-size:1em;}
#hu-v2 .rbox{border:1px solid #e2e8f0;border-radius:8px;padding:.5em .75em;margin-bottom:6px;font-size:.875em;color:#0f172a;display:flex;align-items:center;justify-content:space-between;}
#hu-v2 .rbox-peer{border-color:#bbf7d0;}
#hu-v2 .badge{font-size:.75em;padding:2px 7px;border-radius:20px;}
#hu-v2 .badge-all{background:#f1f5f9;color:#64748b;}
#hu-v2 .badge-c{background:#eff6ff;color:#1e40af;}
#hu-v2 .badge-s{background:#f0fdf4;color:#166534;}
#hu-v2 .note{display:block;margin:.75rem 0;font-size:.88em;line-height:1.6;color:#64748b;}
#hu-v2 .note strong{font-weight:600;color:#334155;}
#hu-v2 .result{display:inline-flex;align-items:center;gap:6px;font-size:.875em;font-weight:500;padding:.35em .85em;border-radius:20px;margin-top:1rem;}
#hu-v2 .result-q{background:#fef9c3;color:#854d0e;}
#hu-v2 .result-g{background:#f0fdf4;color:#166534;}
#hu-v2 .flow-card{flex:1;min-width:0;border:1px solid #e2e8f0;border-radius:14px;background:#fff;padding:1rem;box-shadow:0 10px 30px rgba(15,23,42,.05);}
#hu-v2 .flow-card-after{border-color:#bbf7d0;background:linear-gradient(180deg,#fff,#f8fffb);}
#hu-v2 .flow-grid{display:flex;gap:1.5rem;align-items:stretch;}
#hu-v2 .divider{display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:1.1em;flex-shrink:0;align-self:stretch;}
@media(max-width:760px){
  #hu-v2 .flow-grid{flex-direction:column;gap:1rem;}
  #hu-v2 .divider{height:1rem;transform:rotate(90deg);}
  #hu-v2 .rbox{align-items:flex-start;gap:.45rem;flex-wrap:wrap;}
  #hu-v2 .badge{white-space:nowrap;}
}
</style>
<div class="flow-grid">

  <!-- BEFORE -->
  <div class="flow-card">
    <p class="col-head">Before</p>
    <div class="pills">
      <span class="pill pill-n">File 01</span>
      <span class="pill pill-n">File 02</span>
      <span class="pill pill-n">File 03</span>
      <span class="pill pill-n">File 04</span>
      <span class="pill pill-n">···</span>
      <span class="pill pill-n">34 files</span>
    </div>
    <div class="arrow">All 34 spec files</div>
    <span class="note"><strong>Constraint:</strong> only 3 senior reviewers, ~1 hour/day each.</span>
    <div class="rbox">Team Leader        <span class="badge badge-all">All files</span></div>
    <div class="rbox">Software Architect <span class="badge badge-all">All files</span></div>
    <div class="rbox">Bridge SE          <span class="badge badge-all">All files</span></div>
    <span class="result result-q">Review queue builds up</span>
  </div>

  <div class="divider">→</div>

  <!-- AFTER -->
  <div class="flow-card flow-card-after">
    <p class="col-head">After</p>
    <div class="pills">
      <span class="pill pill-c">Complex</span>
      <span class="pill pill-c">Complex</span>
      <span class="pill pill-s">Simple</span>
      <span class="pill pill-s">Simple</span>
      <span class="pill pill-s">···</span>
    </div>
    <div class="arrow">Complex items → senior review flow</div>
    <div class="rbox">Team Leader        <span class="badge badge-c">Complex only</span></div>
    <div class="rbox">Software Architect <span class="badge badge-c">Complex only</span></div>
    <div class="rbox">Bridge SE          <span class="badge badge-c">Complex only</span></div>
    <div class="rbox rbox-peer">Peer Review  <span class="badge badge-s">Simple items</span></div>
    <span class="note"><strong>Quality gate:</strong> fewer feedback items each round, no repeated basic errors from Round 2.</span>
    <span class="result result-g">~30% faster review turnaround</span>
  </div>

</div>
</div>`;

/* ─── Visual 3 : Replan timeline ─────────────────────────────────────────── */

var _huV3 = `
<div id="hu-v3">
<style>
#hu-v3{font-family:system-ui,sans-serif;}
#hu-v3{font-size:inherit;}
#hu-v3 .timeline{border:1px solid #e2e8f0;border-radius:14px;background:linear-gradient(180deg,#fff,#f8fafc);padding:1rem 1rem 1.1rem;box-shadow:0 10px 30px rgba(15,23,42,.05);}
#hu-v3 .event-rail{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin-bottom:1.15rem;padding-top:.35rem;}
#hu-v3 .event-rail::before{content:'';position:absolute;left:8%;right:8%;top:1.05rem;height:2px;background:#cbd5e1;}
#hu-v3 .event{position:relative;z-index:1;display:flex;flex-direction:column;gap:.28rem;align-items:flex-start;min-width:0;}
#hu-v3 .event-dot{width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid #94a3b8;box-shadow:0 0 0 4px #fff;transform:scale(.72);transition:transform .45s cubic-bezier(.4,0,.2,1),border-color .45s ease,background .45s ease;}
#hu-v3 .event.go .event-dot{transform:scale(1);border-color:#2563eb;background:#dbeafe;}
#hu-v3 .event-k{color:#94a3b8;font-size:.68em;font-weight:700;text-transform:uppercase;letter-spacing:.08em;}
#hu-v3 .event-title{color:#0f172a;font-size:.86em;font-weight:700;line-height:1.3;}
#hu-v3 .event-text{color:#64748b;font-size:.76em;line-height:1.45;margin:0;max-width:12rem;}
#hu-v3 .lane{display:grid;grid-template-columns:100px 1fr;gap:.9rem;align-items:center;margin:.78rem 0;}
#hu-v3 .lane-label{font-size:.78em;color:#64748b;line-height:1.35;}
#hu-v3 .lane-track{position:relative;height:30px;border-radius:6px;background:#f1f5f9;overflow:hidden;}
#hu-v3 .segment{position:absolute;top:0;bottom:0;border-radius:6px;display:flex;align-items:center;padding:0 .65rem;color:#fff;font-size:.72em;font-weight:600;white-space:nowrap;transform:scaleX(0);transform-origin:left;transition:transform .9s cubic-bezier(.4,0,.2,1);}
#hu-v3 .segment.go{transform:scaleX(1);}
#hu-v3 .seg-plan{left:0;width:80%;background:#16a34a;}
#hu-v3 .seg-risk{left:54%;width:26%;background:#dc2626;}
#hu-v3 .seg-replan{left:70%;width:24%;background:#2563eb;}
#hu-v3 .approval{position:absolute;left:91%;top:50%;width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid #16a34a;transform:translate(-50%,-50%) scale(0);transition:transform .45s cubic-bezier(.4,0,.2,1) 1s;}
#hu-v3 .approval.go{transform:translate(-50%,-50%) scale(1);}
#hu-v3 .callout{margin-top:1rem;border-left:3px solid #2563eb;background:#eff6ff;border-radius:8px;padding:.75rem .85rem;color:#1e3a8a;font-size:.88em;line-height:1.6;}
#hu-v3 .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin-top:1rem;}
#hu-v3 .step{border:1px solid #e2e8f0;border-radius:10px;background:#fff;padding:.75rem;min-height:74px;}
#hu-v3 .step-k{display:block;color:#94a3b8;font-size:.68em;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem;}
#hu-v3 .step-txt{font-size:.86em;color:#475569;line-height:1.55;margin:0;}
@media(max-width:640px){
  #hu-v3 .timeline{padding:.85rem;}
  #hu-v3 .event-rail{grid-template-columns:1fr;gap:.65rem;margin-bottom:1rem;padding-left:1.15rem;padding-top:0;}
  #hu-v3 .event-rail::before{left:.45rem;right:auto;top:.25rem;bottom:.25rem;width:2px;height:auto;}
  #hu-v3 .event{display:grid;grid-template-columns:22px 1fr;column-gap:.55rem;align-items:start;}
  #hu-v3 .event-dot{grid-row:1 / span 3;width:16px;height:16px;margin-top:.15rem;}
  #hu-v3 .event-text{max-width:none;}
  #hu-v3 .lane{grid-template-columns:1fr;gap:.35rem;margin:.9rem 0;}
  #hu-v3 .lane-track{height:34px;}
  #hu-v3 .segment{font-size:.68em;padding:0 .5rem;}
  #hu-v3 .steps{grid-template-columns:1fr 1fr;gap:.6rem;}
}
</style>

<div id="hu-v3-timeline" class="timeline">
  <div class="event-rail" aria-label="Delay recovery events">
    <div class="event">
      <span class="event-dot" aria-hidden="true"></span>
      <span class="event-k">Start</span>
      <span class="event-title">Plan committed</span>
      <p class="event-text">Delivery schedule was set without historical data.</p>
    </div>
    <div class="event">
      <span class="event-dot" aria-hidden="true"></span>
      <span class="event-k">Mid-project</span>
      <span class="event-title">Delay signal found</span>
      <p class="event-text">Velocity tracking showed part of the file set was at risk.</p>
    </div>
    <div class="event">
      <span class="event-dot" aria-hidden="true"></span>
      <span class="event-k">Replan</span>
      <span class="event-title">Schedule revised</span>
      <p class="event-text">Root causes were explained with clear next steps.</p>
    </div>
    <div class="event">
      <span class="event-dot" aria-hidden="true"></span>
      <span class="event-k">Approval</span>
      <span class="event-title">Client aligned</span>
      <p class="event-text">The client approved the new plan without escalation.</p>
    </div>
  </div>
  <div class="lane">
    <span class="lane-label">Original delivery plan</span>
    <div class="lane-track">
      <div class="segment seg-plan">~80% delivered as committed</div>
    </div>
  </div>
  <div class="lane">
    <span class="lane-label">Delay risk</span>
    <div class="lane-track">
      <div class="segment seg-risk">~20% at risk</div>
    </div>
  </div>
  <div class="lane">
    <span class="lane-label">Recovery plan</span>
    <div class="lane-track">
      <div class="segment seg-replan">Revised schedule</div>
      <span class="approval" aria-label="Client approval"></span>
    </div>
  </div>
  <div class="callout">The main issue was not only the 20% delay. The stronger signal was early risk detection, transparent communication, and client approval for a revised plan.</div>
  <div class="steps">
    <div class="step">
      <span class="step-k">01 Detect</span>
      <p class="step-txt">Tracked velocity and saw delays forming before the deadline.</p>
    </div>
    <div class="step">
      <span class="step-k">02 Diagnose</span>
      <p class="step-txt">Confirmed complexity and missing client information as the cause.</p>
    </div>
    <div class="step">
      <span class="step-k">03 Replan</span>
      <p class="step-txt">Proposed a revised schedule with clear next steps.</p>
    </div>
    <div class="step">
      <span class="step-k">04 Align</span>
      <p class="step-txt">Explained the change to the client and received approval.</p>
    </div>
  </div>
</div>
<script>
(function(){
  var el=document.getElementById('hu-v3-timeline');if(!el)return;
  var done=false;
  var ob=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting&&!done){
        done=true;
        setTimeout(function(){
          el.querySelectorAll('.segment').forEach(function(s,i){
            setTimeout(function(){s.classList.add('go');},i*220);
          });
          el.querySelectorAll('.event').forEach(function(s,i){
            setTimeout(function(){s.classList.add('go');},i*180);
          });
          var approval=el.querySelector('.approval');
          if(approval)setTimeout(function(){approval.classList.add('go');},850);
        },300);
        ob.unobserve(el);
      }
    });
  },{threshold:.2});
  ob.observe(el);
})();
</script>`;

/* ─── project detail ─────────────────────────────────────────────────────── */

window.portfolioProjectDetails["hu"] = {
  "hideOutcomesSummary": true,
  "outcomesLabel": "Project results",
  "outcomes": [
    { "value": "~80%", "label": "On-time delivery" },
    { "value": "~90%", "label": "Client satisfaction" },
    { "value": "~30%", "label": "Review time saved" },
    { "value": "~1.5×", "label": "Team speed by end" }
  ],
  "popupSections": [
    {
      "label": "Context",
      "title": "What was the project?",
      "body": [
        "Led spec and UX team at FPT Software to define 34 specification files covering 600+ UI screens for a Japanese automotive client. Managed task planning, progress tracking, and team coordination (70% management / 30% spec execution). Delivered ~80% of files on time with 90% client satisfaction and improved team velocity by 1.5x."
      ]
    },
    {
      "label": "Problem 01",
      "title": "No process, unfamiliar format",
      "body": [
        "The client required Excel-based specs — uncommon in the industry. No historical data existed to estimate from, so the team needed time to learn the project before velocity could become reliable.",
        "I built a WBS plan, shipped early drafts for fast client feedback, documented every lesson into a team guideline, and treated Week 3 as the first stable baseline after the onboarding period."
      ],
      "customHtml": _huV1,
      "highlight": {
        "label": "Result",
        "body": "Team velocity reached ~1.5× the Week 3 baseline by Week 8, after two release cycles — without adding headcount. Tools: WBS, Design Thinking."
      }
    },
    {
      "label": "Problem 02",
      "title": "Review bottleneck slowed delivery",
      "body": [
        "34 spec files had to pass through only 3 senior reviewers, each with limited review capacity (~1 hour/day). Routing every file through the same review path created a growing backlog and delayed delivery.",
        "To reduce the bottleneck, simple items were reviewed internally while senior reviewers focused only on complex cases. Quality was controlled through measurable pass criteria: feedback count had to decrease each round, and no repeated basic errors from Round 2 onward."
      ],
      "customHtml": _huV2,
      "highlight": {
        "label": "Result",
        "body": "Reduced review turnaround time by ~30% while maintaining review quality through clear pass criteria."
      }
    },
    {
      "label": "Problem 03",
      "title": "20% of files were late",
      "body": [
        "Unexpected complexity and missing client information made some estimates wrong. Delays started forming mid-project.",
        "I caught this early via velocity tracking, proposed a revised plan, and communicated transparently to the client with a clear explanation. The client approved without escalation."
      ],
      "customHtml": _huV3,
      "highlight": {
        "label": "Result",
        "body": "Client approved the revised plan. Trust maintained — no escalation to senior management.  Tools: Gantt Chart, Stakeholder Communication."
      }
    },
    {
      "label": "Results and Learnings",
      "title": "Delivered with strong satisfaction and clearer delivery signals",
      "body": [
        "Despite starting with zero historical data and an unfamiliar spec format, the project hit its core delivery and quality targets. The retrospective also clarified what should be defined earlier in future delivery work."
      ],
      "groups": [
        {
          "label": "Key metrics",
          "displayAs": "compactMetricCards",
          "metrics": [
            { "metric": "On-time delivery",  "result": "~80% of files",  "note": "Delivered as committed" },
            { "metric": "Client satisfaction","result": "~90%",           "note": "High-visibility project with daily management reporting" },
            { "metric": "Review time saved",  "result": "~30%",           "note": "Via peer review system for simple items" },
            { "metric": "Team velocity",      "result": "~1.5× faster",   "note": "vs. Week 3 baseline by Week 8 — no additional headcount" }
          ]
        },
        {
          "label": "Learnings",
          "displayAs": "simpleCards",
          "columns": [
            {
              "number": "01",
              "title": "Track 2–3 weeks before estimating",
              "body": "Week 1 data alone is too unstable. A 2–3 week tracking window would give a more reliable baseline before estimating."
            },
            {
              "number": "02",
              "title": "Define quality criteria before peer review",
              "body": "Quality criteria should be clear before peer review starts, not after the first round. This would reduce rework and align reviewers earlier."
            },
            {
              "number": "03",
              "title": "Inform stakeholders earlier",
              "body": "Even a rough risk signal buys time for replanning. I would share early signals sooner instead of waiting for a clearer issue."
            }
          ]
        }
      ]
    }
  ]
};
