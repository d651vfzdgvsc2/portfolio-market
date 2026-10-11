/* 中英文切换 · 潘昕作品集
   用法：在每个页面 </head> 前加  <script src="lang.js" defer></script>
   - 默认中文，点导航栏「EN / 中」按钮切换，选择记忆在浏览器本地
   - 只翻译页面里登记过的文案；技术栈/代码等英文原样保留 */
(function () {
  var I18N = {
    /* ---------- 导航 / 页脚 / 通用 ---------- */
    "首页": "Home",
    "实习经历": "Experience",
    "项目展示": "Projects",
    "专利成果": "Patents",
    "联系方式": "Contact",
    "实习": "Experience",
    "项目": "Projects",
    "专利": "Patents",
    "联系": "Contact",
    "潘昕": "Pan Xin",
    "作品集": "Portfolio",
    "更新于 2026.10 · 潘昕 · AI 应用与交付作品集": "Updated 2026.10 · Pan Xin · AI Application & Delivery Portfolio",
    "下一项": "",
    "项": "",
    "下一页 · 实习经历": "Next · Experience",
    "上一页 · 首页": "Prev · Home",
    "上一页 · 实习经历": "Prev · Experience",
    "下一页 · 项目展示": "Next · Projects",
    "上一页 · 项目展示": "Prev · Projects",
    "下一页 · 专利成果": "Next · Patents",
    "上一页 · 专利成果": "Prev · Patents",
    "下一页 · 联系方式": "Next · Contact",
    "回到首页": "Back to Home",
    "您的浏览器不支持视频播放。": "Your browser does not support video playback.",

    /* ---------- 首页 index ---------- */
    "大模型交付工程师（FDE）/ AI 应用工程师（可接受全国调配及长期出差、驻场交付）": "LLM Delivery Engineer (FDE) / AI Application Engineer (open to nationwide relocation, long-term travel & on-site delivery)",
    "AI 应用与交付作品集": "AI Application & Delivery Portfolio",
    "园林专业背景，具备「业务痛点洞察 + AI 工程化落地」的闭环能力。": "Landscape-architecture background with a closed loop of pain-point insight and AI engineering delivery.",
    "AI 应用开发": "AI Application Dev",
    "Agent 智能工作流": "Agent Workflows",
    "政企项目交付": "Gov/Enterprise Delivery",
    "在线查看简历": "View Résumé Online",
    "下载简历（PDF）": "Download Résumé (PDF)",
    "完整实践项目": "Projects Delivered",
    "国家专利（第一发明/设计人）": "National Patents (First Inventor/Designer)",
    "发明专利（已受理）": "Invention Patents (Accepted)",
    "外观设计专利（1 项已授权）": "Design Patents (1 Granted)",
    "实习经历 · 政企 AI 项目（推荐先看）": "Internship · Gov/Enterprise AI Project (Start Here)",
    "主导面向香港政务 / 公共教育场景的粤语多模态 AI Agent，从 0→1 交付：独立接入 3 家语音厂商、打通学生端 + 教师端、完成公网部署与客户演示，项目已进入客户采购评估/招投标流程。": "Led a Cantonese multimodal AI Agent for Hong Kong government / public-education scenarios, delivered 0→1: integrated 3 voice vendors, connected student and teacher ends, completed public-cloud deployment and client demos; the project has entered client procurement evaluation / bidding.",
    "个人简介": "Profile",
    "应届本科毕业生，专业出身园林，能力聚焦 AI 应用与大模型项目交付。": "Final-year undergraduate; landscape-architecture major, focused on AI applications and LLM project delivery.",
    "基本信息": "Basic Info",
    "姓名": "Name",
    "学历": "Education",
    "本科（2023–2027，应届）": "Bachelor (2023–2027, graduating)",
    "专业": "Major",
    "园林（韶关学院）": "Landscape Architecture (Shaoguan University)",
    "专业核心": "Core Courses",
    "园林规划设计、园林工程、计算机辅助设计（CAD）、GIS 空间信息": "Landscape planning and design, landscape engineering, CAD, GIS spatial information",
    "核心能力": "Core Skills",
    "Python、大模型 API 调用与 AI 工程化开发（DeepSeek / 视觉大模型 / OpenAI 兼容接口）": "Python, LLM API integration and AI engineering (DeepSeek / vision LLM / OpenAI-compatible APIs)",
    "多 Agent 协同：Orchestrator 状态机编排、共享黑板、确定性校验，LangGraph 状态图编排": "Multi-Agent orchestration: Orchestrator state machine, shared blackboard, deterministic verification, LangGraph state-graph orchestration",
    "MCP 协议配置与工具调用（Function Calling）": "MCP protocol configuration and tool calling (Function Calling)",
    "Prompt Engineering 与视觉大模型应用；图像矢量化（OpenCV）": "Prompt engineering and vision-LLM applications; image vectorization (OpenCV)",
    "Node.js / Express / RESTful API 后端开发与 SQL（PostgreSQL）数据持久化": "Node.js / Express / RESTful API backend and SQL (PostgreSQL) data persistence",
    "AI 开发工具：Codex / Claude Code / OpenCode / WorkBuddy；需求拆解、PRD 编写与专利方案整理": "AI dev tools: Codex / Claude Code / OpenCode / WorkBuddy; requirement breakdown, PRD writing and patent drafting",
    "设计工具：Figma（流程图 / 界面原型绘制）": "Design tools: Figma (flowcharts / UI prototyping)",
    "我的成果": "My Work",
    "3 个项目、4 项专利，点一下直接看。": "3 projects and 4 patents — click to explore.",
    "3 个完整项目 · 多 Agent 协同办公数据处理 / 图像转 CAD 矢量化 / 参考图驱动的 AI 演示设计工作流（DeckCraft）": "3 complete projects · multi-Agent office data processing / image-to-CAD vectorization / reference-image-driven AI presentation design (DeckCraft)",
    "4 项国家专利 · 2 项发明专利 + 2 项外观设计专利，其中 1 项外观设计已授权": "4 national patents · 2 invention patents + 2 design patents, 1 design patent granted",

    /* ---------- 实习页 internship ---------- */
    "一段政企 AI 项目从 0 到 1 的完整交付实践。": "A complete 0→1 delivery practice of a government/enterprise AI project.",
    "粤语多模态 AI Agent POC（面向香港政务 / 公共教育场景 · 政企项目）": "Cantonese Multimodal AI Agent POC (Hong Kong government / public-education scenarios · Gov/Enterprise)",
    "政企 · 0→1 交付": "Gov/Ent · 0→1 Delivery",
    "实习单位": "Employer",
    "角色定位": "Role",
    "项目简介": "Overview",
    "我的职责": "Responsibilities",
    "技术实现": "Tech Stack",
    "项目亮点": "Highlights",
    "项目价值": "Value",
    "保密说明": "Confidentiality",
    "因涉及政企项目，本页为脱敏描述；界面截图为演示环境、数据均为模拟，不含客户名称与真实数据。": "Because this involves a government/enterprise project, this page is a desensitized description; screenshots are from a demo environment and all data is simulated, containing no client names or real data.",
    "广州市科传计算机科技股份有限公司 · AI 实习生（2026.08 – 至今）": "Guangzhou Kechuan Computer Technology Co., Ltd. · AI Intern (2026.08 – present)",
    "作为 2 人项目组主力，主导核心链路：独立完成 3 家 ASR/TTS 接入调优、成本测算与客户演示": "Core member of a 2-person team, led the core path: independently integrated and tuned 3 ASR/TTS vendors, cost estimation and client demos",
    "把「粤语学习 × AI」从想法做成能演示、能落地的政企产品。面向香港政务 / 公共教育场景，主导搭建粤语多模态 AI Agent POC，整合 ASR、TTS 与大模型 Agent 能力，打通学生端 + 教师端全链路，完成本地联调与公网部署。": "Turned Cantonese learning × AI from an idea into a demonstrable, deployable gov/ent product. For Hong Kong government / public-education scenarios, led building a Cantonese multimodal AI Agent POC integrating ASR, TTS and LLM Agent capabilities, connecting the full student and teacher pipeline, completing local integration and public-cloud deployment.",
    "端到端主导：从需求拆解、方案设计与技术选型，到集成开发、部署上线、客户演示，协同排查接口、部署与模型调用异常，全程负责": "End-to-end ownership: from requirement breakdown, solution design and tech selection to integration, deployment and client demos; coordinated troubleshooting of API, deployment and model-call issues.",
    "独立完成 3 家 ASR/TTS 厂商 API 接入与参数调优，攻克粤语识别、中英混合语言检测等落地难点": "Independently integrated 3 ASR/TTS vendor APIs and tuned parameters, tackling Cantonese recognition and Chinese-English code-mixing detection.",
    "设计与实现 AI 教练的 Agent 教学逻辑：实时判断学生语种与表达，自动选择教学动作（持续引导回粤语 / 自然纠错 / 开启新话题），实现个性化陪练": "Designed and implemented the AI coach Agent teaching logic: judge the student language and expression in real time and auto-select teaching actions (keep guiding back to Cantonese / natural correction / start a new topic) for personalized practice.",
    "设计成本与调用控制：自由聊天按 8 小时窗口限制最多 50 轮，翻译 / 查词按 1 小时窗口设 30–100 次配额，配合发音评分结果缓存与超限自动收尾，控制大模型与语音 API 的 token / 调用成本": "Designed cost and call control: free chat capped at 50 turns per 8-hour window; translation / dictionary lookups at 30–100 calls per 1-hour window; with pronunciation-score caching and auto wrap-up on limit, controlling LLM and voice API token / call cost.",
    "基于客户方提供的真实使用场景参数（目标用户规模 × 使用频次），完成日常 / 峰值双负载的 token 成本测算（覆盖周 / 月 / 年三维度），支撑客户采购决策": "Using real-scenario parameters (target user scale × usage frequency), completed daily / peak dual-load token cost estimates (weekly / monthly / yearly), supporting the procurement decision.",
    "打通学生端+教师端，学习数据经PostgreSQL持久化，交付闭环产品而非单点Demo": "Connected student and teacher ends, persisted learning data via PostgreSQL, delivering a closed-loop product rather than a single-point demo.",
    "代表项目对公司领导汇报、对客户方进行 POC 演示，推动项目从内部验证走向市场": "Reported the project to company leadership and gave POC demos to the client, driving the project from internal validation toward the market.",
    "多厂商语音接入（豆包 / 阿里 / 讯飞）": "Multi-vendor voice integration (Doubao / Alibaba / iFlytek)",
    "粤语识别 / 中英混检": "Cantonese recognition / code-mixing detection",
    "简繁归一（OpenCC）": "Simplified-Traditional normalization (OpenCC)",
    "大模型 Agent（语种自适应调度）": "LLM Agent (language-adaptive orchestration)",
    "成本 / 调用控制": "Cost / call control",
    "公网部署": "Public-cloud deployment",
    "入职 3 周内完成 POC 上线部署，并具备对外演示能力": "Deployed the POC online within 3 weeks of joining, ready for external demos.",
    "从 0 到 1 进入客户采购评估/招投标流程 —— 项目走向商业化的关键一步": "Went 0→1 into the client procurement evaluation / bidding process — a key step toward commercialization.",
    "独立承担学生端开发、教师端整合与全部对外演示": "Independently handled student-end development, teacher-end integration and all external demos.",
    "完整走通「需求拆解 → 集成 → 部署上线 → 客户演示 → 推动采购」的政企 AI 交付链路，证明的不只是「会写代码」，而是「能独立把 AI 项目落地并推向市场」。": "Completed the full gov/ent AI delivery chain of requirement breakdown → integration → deployment → client demo → driving procurement, proving not just the ability to write code but the ability to independently land an AI project and take it to market.",
    "系统架构：语音输入 → ASR → 大模型 Agent（语种判断 → 教学动作调度）→ LLM 生成 → TTS → 输出": "System architecture: voice input → ASR → LLM Agent (language detection → teaching-action orchestration) → LLM generation → TTS → output",
    "首页｜ASR + LLM Agent（语种自适应调度）+ TTS 多模态交互": "Home | ASR + LLM Agent (language-adaptive) + TTS multimodal interaction",
    "语音评测：ASR 识别 → 规则引擎多维加权评分（完成度 / 准确率 / 录音质量）→ 逐字错误定位 + 音调轨迹": "Speech assessment: ASR → rule-engine weighted scoring (completeness / accuracy / audio quality) → per-character error localization + pitch contour",
    "多轮观点对话：LLM Agent 按语种调度教学动作 + 生成式点评与改进建议": "Multi-turn opinion dialogue: LLM Agent orchestrates teaching actions by language + generative feedback and suggestions",
    "产品能力：": "Product capabilities: ",
    "ASR 语音识别 · LLM Agent 调度 · TTS 语音合成": "ASR · LLM Agent orchestration · TTS",
    " —— 面向粤语学习的多模态应用。": " — a multimodal app for Cantonese learning.",
    "系统架构与数据流": "System architecture and data flow",
    "产品首页": "Product home",
    "跟读评分": "Read-aloud scoring",
    "讨论模式": "Discussion mode",

    /* ---------- 项目页 projects · 项目一 AgentFlow ---------- */
    "共 3 个项目，覆盖多 Agent 协同、Agent 工作流与 AI 应用开发。": "3 projects covering multi-Agent orchestration, Agent workflows and AI application development.",
    "AgentFlow：基于多Agent协同的Excel智能数据处理系统": "AgentFlow: Multi-Agent Collaborative Excel Data Processing System",
    "多 Agent · MCP": "Multi-Agent · MCP",
    "MCP 协议": "MCP Protocol",
    "多 Agent 协同": "Multi-Agent Collaboration",
    "状态机编排": "State-machine Orchestration",
    "共享黑板": "Shared Blackboard",
    "OpenCV · 聚类算法提取主色": "OpenCV · Clustering for main colors",
    "DeepSeek 视觉模型": "DeepSeek Vision Model",
    "SSE 流式": "SSE Streaming",
    "项目背景": "Background",
    "问题定义": "Problem",
    "解决方案": "Solution",
    "个人贡献": "My Contribution",
    "设计视角": "Design View",
    "把一句话办公需求变成可校验、可追溯、可控成本的自动化执行。针对单 Agent 处理办公表格时职责混淆、易编造数据、成本不可控的问题，设计多 Agent 协同平台，覆盖多表核对 / 对账、批量填报、数据清洗三类场景，实现从规划、查数、执行、校验到报告的自动化闭环。": "Turn a one-line office request into verifiable, traceable, cost-controlled automated execution. Targeting single-Agent issues in office spreadsheets (blurred responsibilities, data fabrication, uncontrolled cost), designed a multi-Agent platform covering reconciliation, batch entry and data cleaning, achieving an automated loop from planning, retrieval, execution and verification to reporting.",
    "办公场景中大量表格任务（对账、批量填报、数据清洗）属于高频重复劳动；单 Agent 方案把规划、写表、校验混在一个循环里，出错难定位、幻觉难兜底、token 成本不可控。": "Many spreadsheet tasks (reconciliation, batch entry, data cleaning) are high-frequency repetitive work; single-Agent setups mix planning, writing and verification in one loop — hard to pinpoint errors, hard to catch hallucinations, uncontrolled token cost.",
    "1）职责混淆：规划 / 查数 / 执行 / 校验耦合，出错难定位；2）幻觉叠加：模型既当运动员又当裁判，写了错值没人纠；3）成本失控：所有决策都走 LLM，token 消耗不可控。": "1) Blurred responsibilities: planning / retrieval / execution / verification coupled, hard to debug; 2) Hallucination stacking: the model is both player and referee, errors go uncorrected; 3) Cost runaway: every decision goes through the LLM, token usage uncontrolled.",
    "以「LLM 只做决策、代码守底线」为原则：用自研 Orchestrator 状态机调度 5 个职责隔离 Agent（Planner / Retrieval / Executor / Verifier / Reporter），Agent 间通过共享黑板（Blackboard）串行协作。关键设计是把校验判定用确定性代码写死（Verifier 不调用大模型），堵死多 Agent 互相放大幻觉；配套全局 Token 预算熔断、数据强制溯源（查不到标 not_found、绝不编造）、写前自动备份、写后代码级校验、人工审批门与确定性兜底。引擎与场景解耦，换场景只改一个 JSON。": "Principle: the LLM only decides, code keeps the bottom line. A self-built Orchestrator state machine schedules 5 responsibility-isolated Agents (Planner / Retrieval / Executor / Verifier / Reporter) collaborating serially via a shared Blackboard. Key design: verification logic is hard-coded deterministically (Verifier calls no LLM), blocking multi-Agent hallucination amplification; with global token-budget circuit breaker, mandatory data traceability (not_found if not found, never fabricate), pre-write auto-backup, post-write code-level verification, human approval gate and deterministic fallback. Engine and scenarios are decoupled — switching scenarios only changes one JSON.",
    "用确定性校验替代\"让模型自证正确\"：结论由代码背书而非模型自评，可信度可复现": "Replaced letting the model prove itself right with deterministic verification: conclusions backed by code, not self-grading, and reproducible.",
    "真实评测：多表核对任务在正确率持平（3/3）的前提下，tokens 较单 Agent 基线降低 64%（29,344 vs 81,429）": "Real evaluation: on reconciliation tasks, with equal accuracy (3/3), tokens dropped 64% vs the single-Agent baseline (29,344 vs 81,429).",
    "全链路护栏：Token 预算熔断 + 成本分账、数据强制溯源、写前备份、校验失败自动带反馈重规划": "Full-chain guardrails: token-budget circuit breaker + cost accounting, mandatory data traceability, pre-write backup, auto re-planning with feedback on verification failure.",
    "自研轻量状态机而非套用框架：可控、可观测、可回放（黑板 + 轨迹 + 报告全量落盘）": "Self-built lightweight state machine instead of a framework: controllable, observable, replayable (blackboard + trace + report fully persisted).",
    "v2.1 支持多文件并行：17 张报价表 2.07s → 1.22s，约 1.7x 提速": "v2.1 supports multi-file parallelism: 17 quote sheets 2.07s → 1.22s, about 1.7x speedup.",
    "产品化交付：Web端上传即锁定处理范围、结果一键下载回原Excel，无打包无解压": "Productized delivery: web upload locks the processing scope, one-click download back to the original Excel — no packaging, no unzipping.",
    "清洗安全闭环：清洗结论结构化可视化（重复记录 + 缺失字段逐条列出），并从机制上堵死\"把清洗报告写回数据表\"的污染路径（执行器只允许补空缺、禁止加列/写报告）": "Cleaning safety loop: structured visualization of cleaning conclusions (duplicate records + missing fields listed one by one), and mechanically blocks the contamination path of writing the cleaning report back into the data table (the executor may only fill gaps, no adding columns / writing reports).",
    "把\"大模型能填表\"推进到\"多 Agent 协同 + 结果可信 + 成本可控\"，形成可复用的通用引擎，同一套引擎适配不同客户场景。": "Moved from the LLM can fill tables to multi-Agent collaboration + trustworthy results + controlled cost, forming a reusable general engine that adapts to different client scenarios.",
    "把「规划→执行→校验」全程可视化、上传即锁定范围、结果可追溯——让不懂技术的用户「敢用、看得懂」。": "Visualize the whole planning→execution→verification flow, lock scope on upload, keep results traceable — so non-technical users dare to use it and understand it.",
    "独立完成 Orchestrator 状态机与 5 个职责隔离 Agent 的架构设计与开发；实现共享黑板协作、确定性校验规则库、Token 预算与成本分账、全链路护栏与多文件并行执行；落地可交付的 Web 界面（上传即锁定处理范围、结果一键直下）与清洗防污染机制；以 v1 单 Agent 版为基线完成 A/B 评测。": "Independently designed and developed the Orchestrator state machine and 5 responsibility-isolated Agents; implemented blackboard collaboration, a deterministic verification rule base, token budgeting and cost accounting, full-chain guardrails and multi-file parallel execution; delivered a usable web UI (lock scope on upload, one-click download) and an anti-contamination cleaning mechanism; ran A/B evaluation against the v1 single-Agent baseline.",
    "PRD 摘要（产品需求文档.pdf）": "PRD Summary (Product Requirements.pdf)",
    "文档包含项目背景、用户角色、功能需求（任务规划 / 查数 / 批量填报 / 确定性校验 / 报告）、非功能性需求与验收标准。核心链路：用户一句话 → Orchestrator 状态机 → Planner → Retrieval → Executor → Verifier → Reporter 五个 Agent 经共享黑板协作 → 写前备份 + 写后确定性校验 → 报告落盘。": "Covers background, user roles, functional requirements (task planning / retrieval / batch entry / deterministic verification / reporting), non-functional requirements and acceptance criteria. Core path: one-line request → Orchestrator state machine → five Agents Planner → Retrieval → Executor → Verifier → Reporter collaborating via a shared blackboard → pre-write backup + post-write deterministic verification → report persisted.",
    "下载产品需求文档（PDF）": "Download PRD (PDF)",
    "查看源码（GitHub）": "View Source (GitHub)",
    "AgentFlow 流程图 · Figma 绘制": "AgentFlow flowchart · drawn in Figma",
    "AgentFlow 界面 · 对账结果与执行报告": "AgentFlow UI · reconciliation results and execution report",
    "AgentFlow 演示视频": "AgentFlow demo video",
    "AgentFlow 流程图": "AgentFlow flowchart",
    "AgentFlow 对账结果界面": "AgentFlow reconciliation result UI",

    /* ---------- 项目页 · 项目二 Sketch2CAD ---------- */
    "Sketch2CAD：图像到CAD图纸的多Agent矢量化系统": "Sketch2CAD: Multi-Agent Vectorization System from Image to CAD Drawings",
    "多 Agent · 图像/CAD": "Multi-Agent · Image/CAD",
    "针对\"图片 / 线稿转可编辑 CAD 图纸\"这一高频重复劳动，设计并实现「图像清洗 → 精确矢量化 → 多 Agent 协同 → 渲染回图客观仲裁」系统，覆盖工程图与假山等有机形状双场景，输出可编辑 DXF。": "Targeting the high-frequency repetitive work of converting images / line art into editable CAD drawings, designed and implemented an image cleanup → precise vectorization → multi-Agent collaboration → render-back objective arbitration system, covering both engineering drawings and organic shapes such as rockeries, outputting editable DXF.",
    "传统 CAD 制图中\"把图片重新画成矢量图\"是完全的重复劳动：人工描图慢、易错、成本高；传统光栅转矢量工具只会描像素边界，输出成千上万条碎线段，不懂\"这是直线 / 圆 / 标注\"。": "Redrawing images into vectors is fully repetitive work in CAD: manual tracing is slow, error-prone and costly; traditional raster-to-vector tools only trace pixel edges, producing thousands of fragmented segments with no notion of line / circle / dimension.",
    "纯大模型能\"看图写代码\"，但给不出精确坐标，画出来\"大概像\"、尺寸对不上；传统矢量化工具又不懂语义。业界尚无\"一键全自动出完美 CAD\"的方案。": "Pure LLMs can look at an image and write code but cannot give precise coordinates — results roughly look like it with mismatched dimensions; traditional vectorization tools lack semantics. No fully-automatic one-click perfect CAD solution exists in the industry.",
    "核心思路「精确的事交给算法，理解的事交给AI，对错由渲染回图的客观指标裁决」。": "Core idea: precise things to algorithms, understanding to AI, correctness judged by objective render-back metrics.",
    "① 图像清洗层（二值化/去噪/图框标题栏剔除/剖面线剔除）": "① Image cleanup (binarization / denoising / frame-title-block removal / hatching removal)",
    "② 矢量量化：确定性CV矢量化（直线/圆/圆弧检测与拟合）+ 图元装配（共线合并/角度吸附/矩形装配），以及「中心线提取（骨架化+追踪）+图元拟合（直线/圆弧/圆）」": "② Vectorization: deterministic CV vectorization (line/circle/arc detection and fitting) + primitive assembly (collinear merge / angle snapping / rectangle assembly), plus centerline extraction (skeletonization + tracing) + primitive fitting (line/arc/circle)",
    "③ 多Agent协同（识别/提取/校验/决策，LangGraph编排）": "③ Multi-Agent collaboration (recognize / extract / verify / decide, orchestrated by LangGraph)",
    "④ 渲染回图客观仲裁，按综合图像质量分（结构相似度等多维指标）取最优并保最优回退。工程图走「多臂集成」流水线；假山等自由曲线走「中心线提取+图元拟合」，纯本地离线。": "④ Render-back objective arbitration — pick the best by a composite image-quality score (structural similarity plus multi-dimensional metrics) with best-keep fallback. Engineering drawings use a multi-arm ensemble pipeline; rockeries and free curves use centerline extraction + primitive fitting, fully local and offline.",
    "骨架化 · 图元拟合": "Skeletonization · Primitive fitting",
    "多臂集成 + 客观仲裁：A(确定性 CV) / CL(中心线拟合) / SPEC(大模型出结构化图元) / D(接地代码) / B(纯语义) / DS(大模型直画) 多路线并行提案，渲染回图按综合图像质量分（结构相似度等多维指标）取最优，保证输出永不差于当轮基线": "Multi-arm ensemble + objective arbitration: A (deterministic CV) / CL (centerline fitting) / SPEC (LLM-structured primitives) / D (grounded code) / B (pure semantic) / DS (LLM direct draw) propose in parallel; render-back picks the best by a composite image-quality score (structural similarity plus multi-dimensional metrics), guaranteeing output never worse than the baseline for that round.",
    "中心线矢量量化：骨架化 → 追踪 → 端点吸附 / 合并 → 拟合直线 / 圆弧 / 圆，把\"碎折线\"变成干净可编辑图元；图上文字用 OCR + 大模型纠错": "Centerline vectorization: skeletonization → tracing → endpoint snapping / merging → fitting lines / arcs / circles, turning fragmented polylines into clean editable primitives; text on drawings corrected via OCR + LLM.",
    "工程严谨性：修复评测指标实现 bug（掩码取反导致重合度指标失真）、单臂失败自动跳过、结果缓存": "Engineering rigor: fixed a metric implementation bug (mask inversion distorting overlap metrics), auto-skip on single-arm failure, result caching.",
    "A/B/C/D/E + DS 对照实验发现规律：接地式生成在 CV 可靠时最优、纯语义 / 大模型整体生成在 CV 失效时更稳，据此设计集成仲裁": "A/B/C/D/E + DS controlled experiments revealed patterns: grounded generation is best when CV is reliable; pure-semantic / LLM whole-image generation is more stable when CV fails — informing the ensemble arbitration design.",
    "校验信号必须客观：不让 AI 自评，用\"渲染回图 + 像素 / 结构指标，主指标为结构相似度（SSIM）\"做外部裁判": "Verification signals must be objective: no AI self-grading; use render-back + pixel / structural metrics, chiefly structural similarity (SSIM), as an external referee.",
    "图元装配把\"碎线\"变成\"结构化形状\"，输出更干净、可编辑": "Primitive assembly turns fragmented lines into structured shapes, output cleaner and editable.",
    "简单 / 中等图 SSIM 0.75~0.84，复杂装配图较基线 0.38→0.63；假山对标商用工具独立实现、更干净（约 2 秒）；相关成果已申请国家发明专利": "Simple / medium drawings reach SSIM 0.75–0.84; complex assembly drawings 0.38→0.63 vs baseline; rockeries independently implemented against a commercial tool, cleaner (~2s); the work has filed for a national invention patent.",
    "把\"图片转可编辑 CAD\"落地为辅助级矢量化工具（AI 出 70~80% 初稿、人工精修），按图形类型分流，覆盖工程图与假山双场景。": "Landed image-to-editable CAD as an assistive vectorization tool (AI produces a 70–80% draft, humans refine), split by drawing type, covering both engineering drawings and rockeries.",
    "双模式 + 进度可见 +「保最优」可回退，把描图重复劳动与试错成本降到最低，降低新手心理门槛。": "Dual mode + visible progress + best-keep fallback minimize repetitive tracing and trial-and-error, lowering the barrier for beginners.",
    "独立完成整体架构与核心开发；实现确定性 CV 矢量化与图元装配，新增「中心线拟合通道（骨架化 + 图元拟合）」与「规格臂（大模型出结构化图元）」；用 LangGraph 编排识别、提取、校验、决策四个 Agent；把客观仲裁从\"比 SSIM\"升级为\"综合图像质量分（结构相似度等多维指标）\"，并实现单臂容错与结果缓存；通过多臂对照实验提出\"多臂集成 + 客观仲裁\"方案。": "Independently completed the overall architecture and core development; implemented deterministic CV vectorization and primitive assembly, added the centerline fitting channel (skeletonization + primitive fitting) and the spec arm (LLM-structured primitives); orchestrated the four Agents (recognize, extract, verify, decide) with LangGraph; upgraded objective arbitration from comparing SSIM to a composite image-quality score; implemented single-arm fault tolerance and result caching; proposed the multi-arm ensemble + objective arbitration scheme via multi-arm controlled experiments.",
    "文档包含项目背景、用户角色、功能需求（图像清洗 / 矢量化 / 多 Agent 协同 / 渲染回图仲裁 / DXF 输出）、非功能性需求与验收标准。核心链路：输入图片 → 模式选择（工程图 / 假山）→ 清洗与 CV 矢量化 → 多 Agent 提案与校验 → 按综合分客观仲裁取最优 → 输出可编辑 DXF。": "Covers background, user roles, functional requirements (image cleanup / vectorization / multi-Agent collaboration / render-back arbitration / DXF output), non-functional requirements and acceptance criteria. Core path: input image → mode select (engineering drawing / rockery) → cleanup and CV vectorization → multi-Agent proposal and verification → objective arbitration by composite score → editable DXF output.",
    "Sketch2CAD 流程图 · Figma 绘制": "Sketch2CAD flowchart · drawn in Figma",
    "图纸矢量化系统 · 界面": "Drawing vectorization system · UI",
    "假山 / CAD 矢量化工作流": "Rockery / CAD vectorization workflow",
    "Sketch2CAD 演示视频": "Sketch2CAD demo video",
    "Sketch2CAD 流程图": "Sketch2CAD flowchart",
    "图纸矢量化系统界面": "Drawing vectorization system UI",
    "假山 / CAD 矢量化": "Rockery / CAD vectorization",

    /* ---------- 项目页 · 项目三 DeckCraft ---------- */
    "DeckCraft：参考图驱动的 AI 演示设计工作流": "DeckCraft: Reference-Image-Driven AI Presentation Design Workflow",
    "AI 体验设计 · 工作流 · 原型": "AI Experience Design · Workflow · Prototype",
    "面向\"想做 PPT 但不会设计\"的用户，把一张参考图或一句话需求，拆解成": "For users who want a PPT but cannot design, break a reference image or a one-line request into ",
    "结构化、可编辑的设计规范": "a structured, editable design spec",
    "（配色 / 版式 / 字体），再": " (colors / layout / fonts), then ",
    "直接产出可下载的 .pptx": "directly produce a downloadable .pptx",
    "——把\"写提示词\"升级为可交付的演示设计工作流。": " — upgrading writing prompts into a deliverable presentation-design workflow.",
    "非设计用户往往能说清\"想要什么感觉\"，却难以把它转成可执行的设计规范；结果是反复试错、出稿慢、风格不稳定，设计经验也无法沉淀复用。": "Non-designers can say what feel they want but struggle to turn it into an executable design spec; the result is repeated trial-and-error, slow drafts, unstable style, and design experience that cannot accumulate or be reused.",
    "1）需求 → 设计规范的转化全靠人；2）风格经验难以沉淀、复用；3）产出只是文本提示词，用户还得自己做 PPT。": "1) Turning requirements into a design spec is entirely manual; 2) style experience is hard to accumulate and reuse; 3) output is just text prompts — users still have to build the PPT themselves.",
    "以「精确的事交给算法、理解的事交给 AI、经验沉淀为规范」为原则：① 参考图 → OpenCV 聚类算法提取主色（确定性）+ 视觉大模型理解主题 / 版式 / 字体 → ": "Principle: precise things to algorithms, understanding to AI, experience distilled into specs: ① reference image → OpenCV clustering extracts main colors (deterministic) + vision LLM understands topic / layout / fonts → ",
    "可编辑的设计规范": "an editable design spec",
    "；② 规范 + 需求 → 大模型生成演示大纲；③ python-pptx 依规范渲染 → ": "; ② spec + request → LLM generates a presentation outline; ③ python-pptx renders per spec → ",
    "直接产出 .pptx": "directly produce a .pptx",
    "；④ 规范可保存复用（Skill 化）。": "; ④ specs are saveable and reusable (as a Skill).",
    "参考图 → 结构化设计规范：不是把图丢给模型，而是拆成": "Reference image → structured design spec: not throwing the image at the model, but breaking it into an ",
    "可编辑": "editable",
    "的配色 / 版式 / 字体规范（主色由聚类算法确定性提取，语义交模型）": " spec of colors / layout / fonts (main colors deterministically extracted by clustering, semantics to the model)",
    "端到端交付：直接产出": "End-to-end delivery: directly produce ",
    "可打开的 .pptx": "an openable .pptx",
    "，而不是只给一段文字": ", not just a block of text",
    "设计规范可复用（Skill 化）：风格可沉淀、可一键套用": "Design specs reusable (as a Skill): style can accumulate and be applied in one click",
    "交互原型能力：原生 HTML / CSS / JS 界面 + SSE 流式反馈 + 迭代优化 + 历史记录": "Interactive prototyping: native HTML / CSS / JS UI + SSE streaming feedback + iterative refinement + history",
    "相关成果已申请国家发明专利": "Related work has filed for a national invention patent",
    "把\"提示词助手\"升级为\"可交付的演示设计工作流\"，降低非设计用户的出稿门槛，并让风格可复用、可稳定。": "Upgraded the prompt assistant into a deliverable presentation-design workflow, lowering the barrier for non-designers and making style reusable and stable.",
    "参考图 → 可编辑设计规范 → 两种产出（出提示词省钱 / 一键出 .pptx），把设计经验沉淀为可复用规范（Skill）。": "Reference image → editable design spec → two outputs (prompt-only to save cost / one-click .pptx), distilling design experience into reusable specs (Skills).",
    "独立完成需求分析、信息架构与交互原型；设计并实现\"参考图 → 设计规范 → 成品\"工作流；完成聚类算法提取主色、视觉模型风格拆解、python-pptx 渲染与流式交互；打磨前端界面与可用性。": "Independently handled requirements analysis, information architecture and interactive prototyping; designed and implemented the reference image → design spec → finished product workflow; completed clustering-based main-color extraction, vision-model style breakdown, python-pptx rendering and streaming interaction; polished the front-end UI and usability.",
    "文档包含项目背景、目标用户与场景、功能需求（需求输入 / 参考图上传 / 参考图拆解为设计规范 / 生成并下载 PPT / 流式输出 / 再优化 / 历史记录）、接口设计、非功能需求与验收标准。核心链路：参考图或需求 → Flask 校验（非空 / 限流 / Key）→ 聚类算法提取主色 + 视觉模型理解风格 → 可编辑设计规范 → 模型生成大纲 → python-pptx 渲染并下载 .pptx。": "Covers background, target users and scenarios, functional requirements (request input / reference-image upload / image-to-spec breakdown / PPT generation and download / streaming output / refinement / history), API design, non-functional requirements and acceptance criteria. Core path: reference image or request → Flask validation (non-empty / rate-limit / key) → clustering main-color extraction + vision-model style understanding → editable design spec → model outline → python-pptx renders and downloads .pptx.",
    "执行流程图 · Figma 绘制": "Execution flowchart · drawn in Figma",
    "DeckCraft 界面 · 参考图拆解为可编辑设计规范": "DeckCraft UI · reference image broken into an editable design spec",
    "DeckCraft 演示视频": "DeckCraft demo video",
    "执行流程图": "Execution flowchart",
    "DeckCraft 界面": "DeckCraft UI",

    /* ---------- 专利页 patents ---------- */
    "共 4 项国家专利（均为第一发明人 / 第一设计人），其中 1 项外观设计专利已授权，覆盖 AI 应用与原创产品设计。": "4 national patents (all as first inventor / first designer), 1 design patent granted, covering AI applications and original product design.",
    "发明专利（2 项 · 已受理）": "Invention Patents (2 · Accepted)",
    "外观设计专利（2 项 · 1 项已授权）": "Design Patents (2 · 1 Granted)",
    "AI 提示词自动化生成与 PPT 定制工具相关发明专利": "Invention Patent: AI Prompt Auto-Generation & PPT Customization Tool",
    "园林假山 CAD 辅助设计系统相关发明专利": "Invention Patent: Landscape Rockery CAD Aided-Design System",
    "《金钱书》文化主题装饰摆件 · 外观设计专利": "“Money Book” Cultural-Themed Decorative Ornament · Design Patent",
    "摆件 · 外观设计专利": "Ornament · Design Patent",
    "类型：": "Type: ",
    "国家发明专利": "National Invention Patent",
    "国家外观设计专利": "National Design Patent",
    "专利与成果": "Patents & Achievements",
    "专": "INV",
    "设": "DSN",
    "| 申请号：": "| App No.: ",
    "| 分类号：": "| Class No.: ",
    "| 身份：第一发明人（已受理）": "| Role: First Inventor (Accepted)",
    "| 身份：第一设计人（已受理）": "| Role: First Designer (Accepted)",
    "| 身份：第一设计人（已授权）": "| Role: First Designer (Granted)",
    "申请号：": "App No.: ",
    "分类号：": "Class No.: ",
    "身份：第一发明人（已受理）": "Role: First Inventor (Accepted)",
    "身份：第一设计人（已受理）": "Role: First Designer (Accepted)",
    "身份：第一设计人（已授权）": "Role: First Designer (Granted)",
    "对应项目三 DeckCraft：参考图 → 结构化设计规范（聚类算法提取主色 + 视觉模型理解风格）→ 直接产出可下载的 PPT。": "Corresponds to Project 3 DeckCraft: reference image → structured design spec (clustering main-color extraction + vision-model style understanding) → directly produce a downloadable PPT.",
    "对应项目二：图像到 CAD 图纸的多 Agent 矢量化系统，覆盖工程图与假山等场景，实现图片到可编辑 DXF 的自动化输出。": "Corresponds to Project 2: the multi-Agent image-to-CAD vectorization system, covering engineering drawings and rockeries, achieving automated image-to-editable-DXF output.",
    "原创产品设计：以传统钱币文化与植物生长形态结合，盘绕式枝干结构表现财富积累与生命成长的寓意。": "Original product design: combining traditional coin culture with plant-growth forms; a coiled branch structure expressing wealth accumulation and life growth.",
    "原创产品设计：通过树木形态模拟自然生长结构，将植物元素与现代装饰结合。": "Original product design: simulating natural growth via tree form, combining plant elements with modern decoration.",
    "《金钱书》设计": "“Money Book” design",
    "摆件设计（已授权）": "Ornament design (granted)",
    "《金钱书》外观设计": "“Money Book” design patent",
    "摆件外观设计": "Ornament design patent",

    /* ---------- 联系页 contact ---------- */
    "期待与您进一步交流。": "Looking forward to talking further.",
    "潘": "P",
    "求职意向": "Objective",
    "电话": "Phone",
    "邮箱": "Email",
    "韶关学院 · 园林专业 · 本科（2023.09–2027.06）": "Shaoguan University · Landscape Architecture · Bachelor (2023.09–2027.06)",
    "简历更新于 2026.10": "Résumé updated 2026.10"
  };

  var TITLES = {
    "潘昕 · AI 应用与交付作品集": "Pan Xin · AI Application & Delivery Portfolio",
    "实习经历 · 潘昕作品集": "Experience · Pan Xin Portfolio",
    "项目展示 · 潘昕作品集": "Projects · Pan Xin Portfolio",
    "专利成果 · 潘昕作品集": "Patents · Pan Xin Portfolio",
    "联系方式 · 潘昕作品集": "Contact · Pan Xin Portfolio"
  };

  /* 统一按去除首尾空格后的 key 匹配，避免词典里的空格导致漏译 */
  var MAP = {};
  (function () {
    for (var k in I18N) {
      if (Object.prototype.hasOwnProperty.call(I18N, k)) MAP[k.trim()] = I18N[k];
    }
  })();

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, TITLE: 1 };
  var ATTRS = ["alt", "title", "placeholder", "aria-label"];
  var textNodes = [];
  var textOrig = [];   // parallel array of original (zh) values
  var attrStore = [];  // {el, attr, orig}
  var zhTitle = document.title;

  function collect(node) {
    if (node.nodeType === 1) {
      if (SKIP[node.tagName]) return;
      for (var i = 0; i < ATTRS.length; i++) {
        if (node.hasAttribute(ATTRS[i])) {
          attrStore.push({ el: node, attr: ATTRS[i], orig: node.getAttribute(ATTRS[i]) });
        }
      }
      var kids = node.childNodes;
      for (var j = 0; j < kids.length; j++) collect(kids[j]);
    } else if (node.nodeType === 3) {
      if (node.nodeValue && node.nodeValue.indexOf("\u00a0") !== -1) {
        node.nodeValue = node.nodeValue.replace(/\u00a0/g, " ").replace(/  +/g, " ");
      }
      textNodes.push(node);
      textOrig.push(node.nodeValue);
    }
  }

  function apply(lang) {
    var i;
    if (lang === "en") {
      for (i = 0; i < textNodes.length; i++) {
        var t = textOrig[i];
        var k = t.trim();
        if (k && Object.prototype.hasOwnProperty.call(MAP, k)) {
          textNodes[i].nodeValue = t.replace(k, MAP[k]);
        }
      }
      for (i = 0; i < attrStore.length; i++) {
        var a = attrStore[i];
        var ak = (a.orig || "").trim();
        if (ak && Object.prototype.hasOwnProperty.call(MAP, ak)) {
          a.el.setAttribute(a.attr, a.orig.replace(ak, MAP[ak]));
        }
      }
      if (TITLES[zhTitle]) document.title = TITLES[zhTitle];
      document.documentElement.lang = "en";
    } else {
      for (i = 0; i < textNodes.length; i++) textNodes[i].nodeValue = textOrig[i];
      for (i = 0; i < attrStore.length; i++) attrStore[i].el.setAttribute(attrStore[i].attr, attrStore[i].orig);
      document.title = zhTitle;
      document.documentElement.lang = "zh-CN";
    }
  }

  function makeButton() {
    var navInner = document.querySelector(".nav-inner");
    if (!navInner) return null;
    var btn = document.createElement("button");
    btn.className = "lang-switch";
    btn.type = "button";
    navInner.appendChild(btn);
    return btn;
  }

  function init() {
    collect(document.body);
    var btn = makeButton();
    var cur = "zh";
    try { cur = localStorage.getItem("px_lang") || "zh"; } catch (e) { cur = "zh"; }
    apply(cur);
    function label() { if (btn) btn.textContent = (cur === "en") ? "中" : "EN"; }
    label();
    if (btn) {
      btn.addEventListener("click", function () {
        cur = (cur === "en") ? "zh" : "en";
        apply(cur);
        try { localStorage.setItem("px_lang", cur); } catch (e) {}
        label();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
