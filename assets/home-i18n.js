const EN = Object.freeze({
  "a1": "No. Meows reads the server over standard SSH. There is no agent, daemon, Docker image, or extra port to configure.",
  "a2": "Yes. Add a bastion host, and Meows can use it for monitoring, terminal sessions, and SSH tunnels.",
  "a3": "Android 14 or later. The interface supports English, Simplified Chinese, Traditional Chinese, Japanese, and Korean.",
  "a4": "Not at the moment. Meows is a native Android app.",
  "brand_home": "Meows home",
  "connection_auth_label": "Sign-in and route",
  "connection_auth_value": "Password or private key, directly or through a bastion",
  "connection_middle_label": "In between",
  "connection_middle_value": "No Meows relay or analytics backend",
  "connection_path_label": "Connection",
  "connection_path_value": "Android device → SSH → server",
  "connection_server_label": "Server side",
  "connection_server_value": "No agent and no extra management port",
  "examples_aria": "Command examples",
  "fact_languages_label": "Interface",
  "fact_languages_value": "English · 简体中文 · 繁體中文 · 日本語 · 한국어",
  "fact_permission_label": "Runtime permission",
  "fact_permission_value": "Notifications only, and you can decline",
  "fact_server_label": "Server side",
  "fact_server_value": "No additional software",
  "faq_title": "Questions before buying.",
  "final_body": "One-time purchase. Updates are included, with no subscription, ads, or telemetry.",
  "final_kicker": "Android 14+",
  "final_title": "Add a server to start monitoring.",
  "footer_docs": "Manual",
  "footer_note": "Native Android app. SSH connections start on your device. Independently developed and maintained by Li Bainan.",
  "footer_privacy": "Privacy",
  "footer_terms": "Terms of Use",
  "hero_body": "Meows brings CPU, memory, disk, network, and other server details to your phone over SSH.",
  "hero_caption": "The overview starts with a world map, followed by live server cards.",
  "hero_kicker": "Android · SSH only · no server agent",
  "hero_price": "One-time purchase",
  "hero_price_note": "No subscription, ads, or in-app purchases",
  "hero_title": "Check your servers without opening your laptop.",
  "inside_lead": "Check live metrics, open a terminal, or look up details from the same app.",
  "inside_title": "Monitoring, terminal, and server tools.",
  "language_auto": "Browser language",
  "language_label": "Language",
  "lens_body": "Tap an IP address, domain, URL, or permission string in the terminal or a Docker log, then choose the matching DNS, WHOIS, TLS, or permission action in Meows Lens.",
  "lens_label": "Terminal + Lens",
  "lens_note": "Lens does not run a lookup, open a page, or execute a command on its own. You choose what to do.",
  "lens_stack_aria": "Meows tools and Lens",
  "lens_title": "Look up values directly from terminal output.",
  "maker_p1": "Because Meows only uses SSH, the Android app has to handle differences between Linux systems. I cannot cover old kernels, stripped-down systems, and uncommon architectures with the machines I own. People on LowEndTalk let me test against more real servers, which led to changes in metric collection and history charts.",
  "maker_p2": "I kept the names of those testers on the acknowledgements page, with a different paw avatar for each person.",
  "maker_title": "My own servers do not cover all of these Linux environments.",
  "meta_description": "Monitor Linux servers from Android over SSH. No agent, daemon, or extra port on the server. Includes live metrics, terminal, Docker, tunnels, and network tools.",
  "meta_title": "Meows",
  "monitor_1": "Live cards for all of my servers",
  "monitor_2": "Processes, mounts, and interfaces under the history chart",
  "monitor_3": "Disconnect and recovery notices, with per-server thresholds",
  "monitor_body": "CPU, memory, disk, network, and TCP history are shown with the processes, mounts, or interfaces behind the number. Alerts are set per server. If several thresholds are crossed at once, Meows merges them into one notification.",
  "monitor_caption": "History stays on the phone. The detail under the chart helps explain the spike.",
  "monitor_label": "Monitoring",
  "monitor_title": "Read the chart alongside process and device details.",
  "more_body": "Docker management also goes through SSH, so there is no remote API port to expose. The app also has SSH tunnels, bastion hosts, DNS, TLS, WHOIS, subnet, Cron, regex, timestamp, permission tools, and more.",
  "more_label": "Other tools",
  "more_title": "Docker management, SSH tunnels, and network tools.",
  "nav_docs": "Manual",
  "nav_get": "Google Play",
  "nav_inside": "Features",
  "nav_label": "Primary navigation",
  "nav_questions": "Questions",
  "nav_why": "Why I made it",
  "privacy_a1": "Encrypted on the device with AES-GCM. Android Keystore holds the keys.",
  "privacy_a2": "Kept on the phone. Meows has no service that receives it.",
  "privacy_a3": "SSH connections start on the phone and go to the servers or bastion hosts you configure.",
  "privacy_a4": "Encrypted on the device before it is uploaded to Meows' hidden app data folder in Google Drive.",
  "privacy_body": "Credentials are encrypted on the device with AES-GCM and Android Keystore. Meows has no service that receives monitoring data. The only runtime permission is notifications. Declining it does not disable the rest of the app.",
  "privacy_link": "Read the privacy policy →",
  "privacy_q1": "SSH credentials",
  "privacy_q2": "Monitoring data",
  "privacy_q3": "Connection path",
  "privacy_q4": "Optional backup",
  "privacy_title": "How Meows handles credentials and monitoring data.",
  "q1": "Do I need to install anything on the server?",
  "q2": "Can it reach an internal server?",
  "q3": "Which Android version and languages?",
  "q4": "Is there an iOS version?",
  "server_note_aria": "Server-side setup",
  "server_note_title": "server side",
  "skip": "Skip to content",
  "story_p1": "I used to SSH into them one by one just to see whether CPU, memory, or disk looked wrong. A lot of monitoring setups also wanted another daemon, another port, or a separate dashboard.",
  "story_p2": "These are small machines, and I did not want to change their setup just to monitor them. Meows uses the SSH access already there and reads the system information Linux provides over that connection.",
  "story_quote": "I did not want another agent running just so I could look at the status.",
  "story_title": "Why I built Meows for my own servers.",
  "tool_index_intro": "Already in the app",
  "tool_jump": "Bastion hosts",
  "tool_manuals": "Linux & C manuals"
});

const ZH_CN = Object.freeze({
  "a1": "不需要。Meows 全程走标准 SSH，不装 agent、daemon 或 Docker 镜像，也不需要额外开放端口。",
  "a2": "可以。添加跳板机后，监控、终端和 SSH 隧道都能通过它连接。",
  "a3": "Android 14 及以上。界面支持简体中文、繁体中文、英文、日语和韩语。",
  "a4": "目前没有，Meows 是原生 Android App。",
  "brand_home": "Meows 首页",
  "connection_auth_label": "登录方式与路径",
  "connection_auth_value": "密码或私钥，可以直连，也可以走跳板机",
  "connection_middle_label": "中间服务",
  "connection_middle_value": "没有 Meows 中转，也没有统计后台",
  "connection_path_label": "连接路径",
  "connection_path_value": "Android 设备 → SSH → 服务器",
  "connection_server_label": "服务器端",
  "connection_server_value": "不装 agent，也不开额外管理端口",
  "examples_aria": "命令示例",
  "fact_languages_label": "界面",
  "fact_languages_value": "简中 / 繁中 / 英 / 日 / 韩",
  "fact_permission_label": "运行时权限",
  "fact_permission_value": "只申请通知，而且可以拒绝",
  "fact_server_label": "服务器端",
  "fact_server_value": "无需安装额外程序",
  "faq_title": "买之前常见的几个问题。",
  "final_body": "一次买断，包含后续更新，没有订阅、广告或遥测。",
  "final_kicker": "Android 14+",
  "final_title": "添加服务器后，监控就会开始。",
  "footer_docs": "使用说明",
  "footer_note": "原生 Android 应用，SSH 连接从设备发起。由 Li Bainan 独立开发和维护。",
  "footer_privacy": "隐私政策",
  "footer_terms": "使用条款",
  "hero_body": "Meows 通过 SSH 在手机上显示 CPU、内存、磁盘、网络及其他服务器信息。",
  "hero_caption": "总览顶部是世界地图，下面是服务器的实时状态。",
  "hero_kicker": "Android · 纯 SSH · 服务器端零安装",
  "hero_price": "一次买断",
  "hero_price_note": "没有订阅、广告和内购",
  "hero_title": "看服务器状态，不必打开电脑。",
  "inside_lead": "查看实时指标、打开终端，或查询日志中的信息，都可以在应用内完成。",
  "inside_title": "监控、终端与服务器工具。",
  "language_auto": "跟随浏览器",
  "language_label": "语言",
  "lens_body": "点选终端或 Docker 日志里的 IP、域名、URL 或权限字符串，在 Meows Lens 中选择对应的 DNS、WHOIS、TLS 或权限换算。",
  "lens_label": "终端 + Lens",
  "lens_note": "它不会自己查询、打开网页或者执行命令，操作还是要手动点。",
  "lens_stack_aria": "Meows 工具页和 Lens",
  "lens_title": "从终端输出直接查询。",
  "maker_p1": "Meows 只走 SSH，不同 Linux 环境的差异只能由客户端处理。老内核、精简系统、少见架构，光靠我手上的机器测不全。LowEndTalk 的几位朋友提供了真实环境，我据此重做了指标采集和历史图表。",
  "maker_p2": "参与内测的人都留在 App 的致谢页里，每个人有一个不同的猫爪头像。",
  "maker_title": "我自己的服务器测不全这些 Linux 环境。",
  "meta_description": "通过 Android 上的 Meows 直接用 SSH 监控 Linux 服务器，服务器端不用安装 agent、守护进程或开放额外端口。包含实时指标、终端、Docker、隧道和网络工具。",
  "meta_title": "Meows",
  "monitor_1": "所有服务器的实时卡片",
  "monitor_2": "曲线下面直接看进程、挂载点和网卡",
  "monitor_3": "每台服务器单独设阈值，断开和恢复都会提醒",
  "monitor_body": "CPU、内存、磁盘、网络和 TCP 的历史曲线下面，会列对应的进程、挂载点或者网卡。告警按服务器单独设置，多项同时超标会合并成一条通知。",
  "monitor_caption": "历史记录留在手机上，曲线下面直接给出这次波动对应的明细。",
  "monitor_label": "监控",
  "monitor_title": "结合进程和设备明细查看历史曲线。",
  "more_body": "Docker 管理同样走 SSH，不需要暴露远程 API 端口。App 里还有 SSH 隧道、跳板机、DNS、TLS、WHOIS、子网、Cron、正则、时间戳、权限计算等等。",
  "more_label": "其他工具",
  "more_title": "Docker 管理、SSH 隧道与网络工具。",
  "nav_docs": "使用说明",
  "nav_get": "Google Play",
  "nav_inside": "功能",
  "nav_label": "主导航",
  "nav_questions": "常见问题",
  "nav_why": "为什么做",
  "privacy_a1": "在设备端用 AES-GCM 加密，密钥交给 Android Keystore 保管。",
  "privacy_a2": "只留在手机上，Meows 没有接收这些数据的服务。",
  "privacy_a3": "SSH 连接从手机发起，只会连到你配置的服务器或跳板机。",
  "privacy_a4": "先在设备端加密，再上传到 Google Drive 中 Meows 专用的隐藏应用数据目录。",
  "privacy_body": "凭据用 AES-GCM 加密，密钥由 Android Keystore 保管。Meows 没有接收监控数据的后台。唯一的运行时权限是通知，拒绝后不影响其他功能。",
  "privacy_link": "查看隐私政策 →",
  "privacy_q1": "SSH 凭据",
  "privacy_q2": "监控数据",
  "privacy_q3": "连接路径",
  "privacy_q4": "可选备份",
  "privacy_title": "凭据和监控数据如何处理。",
  "q1": "服务器上需要安装东西吗？",
  "q2": "没有公网 IP 的内网服务器能用吗？",
  "q3": "需要哪个 Android 版本？支持哪些语言？",
  "q4": "有 iOS 版吗？",
  "server_note_aria": "服务器端配置",
  "server_note_title": "服务器端",
  "skip": "跳到正文",
  "story_p1": "以前只是想确认 CPU、内存或者磁盘有没有异常，也得一台一台 SSH 上去。很多监控方案还要再装一个 daemon、再开端口，或者多维护一个面板。",
  "story_p2": "这些小型服务器的资源有限，我不想为了监控再改动环境。Meows 使用现有的 SSH，在手机端读取 Linux 提供的系统信息。",
  "story_quote": "我不想为了查看状态，让服务器再运行一个 agent。",
  "story_title": "为什么为自己的服务器做了 Meows。",
  "tool_index_intro": "已经放进 App 的",
  "tool_jump": "跳板机",
  "tool_manuals": "Linux / C 手册"
});

const ZH_TW = Object.freeze({
  "a1": "不需要。Meows 全程走標準 SSH，不裝 agent、daemon 或 Docker 映像，也不用額外開放連接埠。",
  "a2": "可以。新增跳板機後，監控、終端機和 SSH 隧道都能透過它連線。",
  "a3": "Android 14 及以上。介面支援簡體中文、繁體中文、英文、日文和韓文。",
  "a4": "目前沒有，Meows 是原生 Android App。",
  "brand_home": "Meows 首頁",
  "connection_auth_label": "登入方式與路徑",
  "connection_auth_value": "密碼或私鑰，可以直連，也可以走跳板機",
  "connection_middle_label": "中間服務",
  "connection_middle_value": "沒有 Meows 中繼服務，也沒有分析後端",
  "connection_path_label": "連線路徑",
  "connection_path_value": "Android 裝置 → SSH → 伺服器",
  "connection_server_label": "伺服器端",
  "connection_server_value": "不裝 agent，也不開額外管理連接埠",
  "examples_aria": "命令範例",
  "fact_languages_label": "介面",
  "fact_languages_value": "簡中 / 繁中 / 英 / 日 / 韓",
  "fact_permission_label": "執行階段權限",
  "fact_permission_value": "只要求通知，而且可以拒絕",
  "fact_server_label": "伺服器端",
  "fact_server_value": "無需安裝額外程式",
  "faq_title": "購買前常見的幾個問題。",
  "final_body": "一次買斷，包含後續更新，沒有訂閱、廣告或遙測。",
  "final_kicker": "Android 14+",
  "final_title": "新增伺服器後，監控就會開始。",
  "footer_docs": "使用說明",
  "footer_note": "原生 Android App，SSH 連線由裝置發起。由 Li Bainan 獨立開發和維護。",
  "footer_privacy": "隱私權政策",
  "footer_terms": "使用條款",
  "hero_body": "Meows 透過 SSH 在手機上顯示 CPU、記憶體、磁碟、網路及其他伺服器資訊。",
  "hero_caption": "總覽頂部是世界地圖，下面是伺服器的即時狀態。",
  "hero_kicker": "Android · 純 SSH · 伺服器端零安裝",
  "hero_price": "一次買斷",
  "hero_price_note": "沒有訂閱、廣告和應用程式內購",
  "hero_title": "查看伺服器狀態，不必打開電腦。",
  "inside_lead": "查看即時指標、開啟終端機，或查詢日誌中的資訊，都能在 App 內完成。",
  "inside_title": "監控、終端機與伺服器工具。",
  "language_auto": "跟隨瀏覽器",
  "language_label": "語言",
  "lens_body": "點選終端機或 Docker 日誌中的 IP、網域、URL 或權限字串，在 Meows Lens 中選擇對應的 DNS、WHOIS、TLS 或權限換算。",
  "lens_label": "終端機 + Lens",
  "lens_note": "它不會自行查詢、開啟網頁或執行命令，所有操作都要由你點選。",
  "lens_stack_aria": "Meows 工具頁和 Lens",
  "lens_title": "直接從終端機輸出查詢。",
  "maker_p1": "Meows 只走 SSH，不同 Linux 環境的差異只能由用戶端處理。舊核心、精簡系統、少見架構，光靠我手上的機器測不全。LowEndTalk 的幾位朋友提供了真實環境，我據此重做了指標收集和歷史圖表。",
  "maker_p2": "參與內測的人都留在 App 的致謝頁裡，每個人有一個不同的貓掌頭像。",
  "maker_title": "只靠我手邊的伺服器，無法涵蓋這些 Linux 環境。",
  "meta_description": "透過 Android 上的 Meows 直接用 SSH 監控 Linux 伺服器，伺服器端不用安裝 agent、常駐程式或開放額外連接埠。包含即時指標、終端機、Docker、隧道和網路工具。",
  "meta_title": "Meows",
  "monitor_1": "所有伺服器的即時卡片",
  "monitor_2": "曲線下面直接看程序、掛載點和網卡",
  "monitor_3": "每台伺服器分開設門檻，斷線和恢復都會提醒",
  "monitor_body": "CPU、記憶體、磁碟、網路和 TCP 的歷史曲線下面，會列出對應的程序、掛載點或網卡。告警按伺服器分開設定，多項同時超標會合併成一則通知。",
  "monitor_caption": "歷史記錄留在手機上，曲線下面會直接列出這次波動對應的明細。",
  "monitor_label": "監控",
  "monitor_title": "搭配程序和裝置明細查看歷史曲線。",
  "more_body": "Docker 管理同樣走 SSH，不用暴露 Remote API 連接埠。App 裡還有 SSH 隧道、跳板機、DNS、TLS、WHOIS、子網路、Cron、正規表示式、時間戳、權限計算等等。",
  "more_label": "其他工具",
  "more_title": "Docker 管理、SSH 隧道與網路工具。",
  "nav_docs": "使用說明",
  "nav_get": "Google Play",
  "nav_inside": "功能",
  "nav_label": "主導覽",
  "nav_questions": "常見問題",
  "nav_why": "為什麼做",
  "privacy_a1": "在裝置端使用 AES-GCM 加密，金鑰交給 Android Keystore 保管。",
  "privacy_a2": "只留在手機上，Meows 沒有接收這些資料的服務。",
  "privacy_a3": "SSH 連線由手機發起，只會連到你設定的伺服器或跳板機。",
  "privacy_a4": "先在裝置端加密，再上傳到 Google Drive 中 Meows 專用的隱藏應用程式資料夾。",
  "privacy_body": "認證資料使用 AES-GCM 加密，金鑰由 Android Keystore 保管。Meows 沒有接收監控資料的後端。唯一的執行階段權限是通知，拒絕後不影響其他功能。",
  "privacy_link": "查看隱私權政策 →",
  "privacy_q1": "SSH 認證資料",
  "privacy_q2": "監控資料",
  "privacy_q3": "連線路徑",
  "privacy_q4": "可選備份",
  "privacy_title": "認證資料與監控資料如何處理。",
  "q1": "伺服器上需要安裝東西嗎？",
  "q2": "沒有公網 IP 的內網伺服器能用嗎？",
  "q3": "需要哪個 Android 版本？支援哪些語言？",
  "q4": "有 iOS 版嗎？",
  "server_note_aria": "伺服器端設定",
  "server_note_title": "伺服器端",
  "skip": "跳到正文",
  "story_p1": "以前只是想確認 CPU、記憶體或磁碟有沒有異常，也得一台一台 SSH 上去。很多監控方案還要再裝一個 daemon、再開連接埠，或者多維護一個面板。",
  "story_p2": "這些小型伺服器的資源本來就不多，我也不想只為了監控去改動環境。Meows 直接使用既有的 SSH，從手機端讀取 Linux 提供的系統資訊。",
  "story_quote": "我不想只是看個狀態，就先讓伺服器多跑一個 agent。",
  "story_title": "為什麼為自己的伺服器開發 Meows。",
  "tool_index_intro": "已經放進 App 的",
  "tool_jump": "跳板機",
  "tool_manuals": "Linux / C 手冊"
});

const JA = Object.freeze({
  "a1": "いいえ。標準 SSH だけを使います。agent、daemon、Docker イメージ、追加ポートは不要です。",
  "a2": "はい。踏み台ホストを設定すると、監視、ターミナル、SSH トンネルの接続に利用できます。",
  "a3": "Android 14 以降。英語、簡体字中国語、繁体字中国語、日本語、韓国語に対応します。",
  "a4": "現在はありません。Meows はネイティブ Android アプリです。",
  "brand_home": "Meows ホーム",
  "connection_auth_label": "認証と接続経路",
  "connection_auth_value": "パスワードまたは秘密鍵、直接接続または踏み台経由",
  "connection_middle_label": "中間サービス",
  "connection_middle_value": "Meows の中継も解析バックエンドもなし",
  "connection_path_label": "接続",
  "connection_path_value": "Android デバイス → SSH → サーバー",
  "connection_server_label": "サーバー側",
  "connection_server_value": "agent なし、追加の管理ポートなし",
  "examples_aria": "コマンド例",
  "fact_languages_label": "インターフェース",
  "fact_languages_value": "英語 / 簡体字 / 繁体字 / 日本語 / 韓国語",
  "fact_permission_label": "実行時権限",
  "fact_permission_value": "通知のみ。拒否しても利用可能",
  "fact_server_label": "サーバー側",
  "fact_server_value": "追加ソフトウェアは不要",
  "faq_title": "購入前によくある質問。",
  "final_body": "買い切りで、アップデートも含まれます。サブスクリプション、広告、テレメトリはありません。",
  "final_kicker": "Android 14+",
  "final_title": "サーバーを追加すると監視が始まります。",
  "footer_docs": "マニュアル",
  "footer_note": "ネイティブ Android アプリです。SSH 接続は端末から開始されます。Li Bainan が個人で開発・保守しています。",
  "footer_privacy": "プライバシー",
  "footer_terms": "利用規約",
  "hero_body": "Meows は SSH 経由で CPU、メモリ、ディスク、ネットワークなどのサーバー情報をスマートフォンに表示します。",
  "hero_caption": "概要画面は世界地図から始まり、その下にリアルタイムのサーバーカードが続きます。",
  "hero_kicker": "Android · SSH のみ · サーバー agent なし",
  "hero_price": "買い切り",
  "hero_price_note": "サブスク、広告、アプリ内課金なし",
  "hero_title": "PC を開かずにサーバーの状態を確認。",
  "inside_lead": "リアルタイムの指標確認、ターミナル操作、ログ内の情報検索を一つのアプリで行えます。",
  "inside_title": "監視、ターミナル、サーバーツール。",
  "language_auto": "ブラウザーの言語",
  "language_label": "言語",
  "lens_body": "ターミナルや Docker ログの IP、ドメイン、URL、権限文字列をタップし、Meows Lens で対応する DNS、WHOIS、TLS、権限計算を選べます。",
  "lens_label": "ターミナル + Lens",
  "lens_note": "検索、ウェブページの表示、コマンド実行が勝手に始まることはありません。操作は自分でタップして選びます。",
  "lens_stack_aria": "Meows のツールと Lens",
  "lens_title": "ターミナルの出力から直接調べる。",
  "maker_p1": "Meows は SSH だけを使うため、Linux 環境ごとの差は Android アプリ側で処理します。古いカーネル、最小構成のシステム、珍しいアーキテクチャは手元のマシンだけではテストしきれません。LowEndTalk の数人が実環境を提供してくれたことで、メトリクス収集と履歴グラフを作り直せました。",
  "maker_p2": "テストを手伝ってくれた人の名前は謝辞ページに残し、一人ずつ異なる肉球アバターを付けています。",
  "maker_title": "自分のサーバーだけでは、これらの Linux 環境をテストしきれません。",
  "meta_description": "Android から SSH で Linux サーバーを監視します。サーバー側にエージェントやデーモンを導入したり、追加ポートを開放したりする必要はありません。ライブ指標、ターミナル、Docker、トンネル、ネットワークツールを備えています。",
  "meta_title": "Meows",
  "monitor_1": "全サーバーのリアルタイムカード",
  "monitor_2": "グラフの下にプロセス、マウント、NIC の詳細",
  "monitor_3": "サーバー別のしきい値と切断・復旧通知",
  "monitor_body": "CPU、メモリ、ディスク、ネットワーク、TCP の履歴の下に、対応するプロセス、マウント、インターフェースを表示します。アラートはサーバーごとに設定し、複数項目の超過は一つの通知にまとめます。",
  "monitor_caption": "履歴は端末内に残り、変化に対応する詳細もグラフの下で確認できます。",
  "monitor_label": "監視",
  "monitor_title": "履歴グラフとプロセスやデバイスの詳細を確認。",
  "more_body": "Docker 管理も SSH 経由なので、Remote API ポートを公開しません。SSH トンネル、踏み台、DNS、TLS、WHOIS、サブネット、Cron、正規表現、タイムスタンプ、権限計算なども入っています。",
  "more_label": "その他のツール",
  "more_title": "Docker 管理、SSH トンネル、ネットワークツール。",
  "nav_docs": "マニュアル",
  "nav_get": "Google Play",
  "nav_inside": "機能",
  "nav_label": "メインナビゲーション",
  "nav_questions": "よくある質問",
  "nav_why": "作った理由",
  "privacy_a1": "端末上で AES-GCM 暗号化し、鍵は Android Keystore が保持します。",
  "privacy_a2": "スマートフォン内にのみ保存します。Meows には、このデータを受信するサービスがありません。",
  "privacy_a3": "SSH 接続はスマートフォンから開始され、設定したサーバーまたは踏み台ホストへ接続します。",
  "privacy_a4": "端末上で暗号化してから、Google Drive の Meows 専用アプリデータフォルダへアップロードします。",
  "privacy_body": "認証情報は端末上で AES-GCM 暗号化し、鍵は Android Keystore が管理します。Meows には監視データを受け取るサービスがありません。実行時権限は通知だけで、拒否しても他の機能には影響しません。",
  "privacy_link": "プライバシーポリシーを読む →",
  "privacy_q1": "SSH 認証情報",
  "privacy_q2": "監視データ",
  "privacy_q3": "接続経路",
  "privacy_q4": "任意のバックアップ",
  "privacy_title": "認証情報と監視データの取り扱い。",
  "q1": "サーバーに何かインストールしますか？",
  "q2": "グローバル IP のない内部サーバーも使えますか？",
  "q3": "対応する Android と言語は？",
  "q4": "iOS 版はありますか？",
  "server_note_aria": "サーバー側の設定",
  "server_note_title": "サーバー側",
  "skip": "本文へ移動",
  "story_p1": "CPU、メモリ、ディスクに異常がないか見るだけでも、一台ずつ SSH で入っていました。監視構成によっては daemon、追加ポート、別のダッシュボードまで必要です。",
  "story_p2": "小さなサーバーなので、監視のためだけに環境を変えたくありませんでした。Meows は既存の SSH 接続を使い、Linux が提供するシステム情報を端末側から読み取ります。",
  "story_quote": "状態を見るためだけに、もう一つ agent を動かしたくありませんでした。",
  "story_title": "自分のサーバーのために Meows を作った理由。",
  "tool_index_intro": "アプリに入っているもの",
  "tool_jump": "踏み台ホスト",
  "tool_manuals": "Linux / C マニュアル"
});

const KO = Object.freeze({
  "a1": "아니요. 표준 SSH만 사용합니다. agent, daemon, Docker 이미지, 추가 포트가 필요하지 않습니다.",
  "a2": "네. 점프 호스트를 설정하면 모니터링, 터미널, SSH 터널 연결에 사용할 수 있습니다.",
  "a3": "Android 14 이상. 영어, 중국어 간체, 중국어 번체, 일본어, 한국어를 지원합니다.",
  "a4": "현재는 없습니다. Meows는 네이티브 Android 앱입니다.",
  "brand_home": "Meows 홈",
  "connection_auth_label": "인증과 연결 경로",
  "connection_auth_value": "비밀번호 또는 개인 키, 직접 연결 또는 점프 호스트 경유",
  "connection_middle_label": "중간 서비스",
  "connection_middle_value": "Meows 중계와 분석 백엔드 없음",
  "connection_path_label": "연결",
  "connection_path_value": "Android 기기 → SSH → 서버",
  "connection_server_label": "서버 측",
  "connection_server_value": "agent 없음, 추가 관리 포트 없음",
  "examples_aria": "명령 예시",
  "fact_languages_label": "인터페이스",
  "fact_languages_value": "영어 / 중국어 간체 / 중국어 번체 / 일본어 / 한국어",
  "fact_permission_label": "런타임 권한",
  "fact_permission_value": "알림만 요청하며 거부 가능",
  "fact_server_label": "서버 측",
  "fact_server_value": "추가 소프트웨어 불필요",
  "faq_title": "구매 전에 자주 묻는 질문.",
  "final_body": "일회성 구매이며 업데이트가 포함됩니다. 구독, 광고, 텔레메트리는 없습니다.",
  "final_kicker": "Android 14+",
  "final_title": "서버를 추가하면 모니터링이 시작됩니다.",
  "footer_docs": "사용 설명서",
  "footer_note": "Android 네이티브 앱으로, SSH 연결은 기기에서 시작됩니다. Li Bainan이 독립적으로 개발하고 유지보수합니다.",
  "footer_privacy": "개인정보",
  "footer_terms": "이용약관",
  "hero_body": "Meows는 SSH를 통해 CPU, 메모리, 디스크, 네트워크 등 서버 정보를 휴대폰에 표시합니다.",
  "hero_caption": "개요 화면은 세계 지도로 시작하고 그 아래에 실시간 서버 카드가 이어집니다.",
  "hero_kicker": "Android · SSH만 사용 · 서버 agent 없음",
  "hero_price": "일회성 구매",
  "hero_price_note": "구독, 광고, 인앱 구매 없음",
  "hero_title": "노트북을 열지 않고 서버 상태를 확인하세요.",
  "inside_lead": "실시간 지표 확인, 터미널 작업, 로그 속 정보 조회를 한 앱에서 할 수 있습니다.",
  "inside_title": "모니터링, 터미널, 서버 도구.",
  "language_auto": "브라우저 언어 따르기",
  "language_label": "언어",
  "lens_body": "터미널이나 Docker 로그에서 IP, 도메인, URL, 권한 문자열을 누르고 Meows Lens에서 알맞은 DNS, WHOIS, TLS, 권한 계산 작업을 선택하세요.",
  "lens_label": "터미널 + Lens",
  "lens_note": "조회, 웹페이지 열기, 명령 실행이 저절로 시작되지는 않습니다. 작업은 직접 눌러서 선택합니다.",
  "lens_stack_aria": "Meows 도구와 Lens",
  "lens_title": "터미널 출력에서 바로 조회하세요.",
  "maker_p1": "Meows는 SSH만 사용하므로 Linux 환경마다 생기는 차이를 Android 앱에서 처리합니다. 오래된 커널, 최소 설치 시스템, 드문 아키텍처는 제가 가진 서버만으로 모두 시험할 수 없습니다. LowEndTalk의 몇 분이 실제 환경을 제공해 주어 지표 수집과 기록 그래프를 다시 손볼 수 있었습니다.",
  "maker_p2": "테스트를 도와준 사람의 이름은 감사 페이지에 남기고, 각자 다른 발바닥 아바타를 붙였습니다.",
  "maker_title": "제가 가진 서버만으로는 이런 Linux 환경을 모두 테스트할 수 없습니다.",
  "meta_description": "Android에서 SSH로 Linux 서버를 모니터링합니다. 서버에 에이전트나 데몬을 설치하거나 추가 포트를 열 필요가 없습니다. 실시간 지표, 터미널, Docker, 터널, 네트워크 도구가 들어 있습니다.",
  "meta_title": "Meows",
  "monitor_1": "모든 서버의 실시간 카드",
  "monitor_2": "그래프 아래의 프로세스, 마운트, 인터페이스 상세",
  "monitor_3": "서버별 임계값과 연결 끊김·복구 알림",
  "monitor_body": "CPU, 메모리, 디스크, 네트워크, TCP 기록 아래에 관련 프로세스, 마운트, 인터페이스를 표시합니다. 알림은 서버별로 설정하고 여러 항목의 초과는 한 알림으로 합칩니다.",
  "monitor_caption": "기록은 휴대폰에 보관하고, 변화에 해당하는 상세 항목도 그래프 아래에 표시합니다.",
  "monitor_label": "모니터링",
  "monitor_title": "기록 그래프와 프로세스·장치 상세를 함께 확인하세요.",
  "more_body": "Docker 관리도 SSH로 처리하므로 Remote API 포트를 열지 않습니다. SSH 터널, 점프 호스트, DNS, TLS, WHOIS, 서브넷, Cron, 정규식, 타임스탬프, 권한 계산 등도 들어 있습니다.",
  "more_label": "기타 도구",
  "more_title": "Docker 관리, SSH 터널, 네트워크 도구.",
  "nav_docs": "사용 설명서",
  "nav_get": "Google Play",
  "nav_inside": "기능",
  "nav_label": "주요 탐색",
  "nav_questions": "자주 묻는 질문",
  "nav_why": "만든 이유",
  "privacy_a1": "기기에서 AES-GCM으로 암호화하며 키는 Android Keystore가 보관합니다.",
  "privacy_a2": "휴대폰에만 저장됩니다. Meows에는 이 데이터를 받는 서비스가 없습니다.",
  "privacy_a3": "SSH 연결은 휴대폰에서 시작되며 설정한 서버 또는 점프 호스트로 연결됩니다.",
  "privacy_a4": "기기에서 먼저 암호화한 뒤 Google Drive의 Meows 전용 앱 데이터 폴더에 업로드합니다.",
  "privacy_body": "자격 증명은 기기에서 AES-GCM으로 암호화하고 키는 Android Keystore가 보관합니다. Meows에는 모니터링 데이터를 받는 서비스가 없습니다. 런타임 권한은 알림 하나이며 거부해도 다른 기능에는 영향이 없습니다.",
  "privacy_link": "개인정보 처리방침 읽기 →",
  "privacy_q1": "SSH 자격 증명",
  "privacy_q2": "모니터링 데이터",
  "privacy_q3": "연결 경로",
  "privacy_q4": "선택적 백업",
  "privacy_title": "자격 증명과 모니터링 데이터 처리 방식.",
  "q1": "서버에 무엇을 설치해야 하나요?",
  "q2": "공인 IP가 없는 내부 서버도 되나요?",
  "q3": "Android 버전과 지원 언어는?",
  "q4": "iOS 버전이 있나요?",
  "server_note_aria": "서버 측 설정",
  "server_note_title": "서버 측",
  "skip": "본문으로 이동",
  "story_p1": "CPU, 메모리, 디스크가 괜찮은지 보려고 서버마다 SSH로 들어갔습니다. 모니터링 구성에 따라 daemon, 추가 포트, 별도 대시보드까지 더 필요했습니다.",
  "story_p2": "작은 서버라서 모니터링만을 위해 환경을 바꾸고 싶지 않았습니다. Meows는 기존 SSH 연결을 이용해 휴대폰에서 Linux 시스템 정보를 읽습니다.",
  "story_quote": "상태를 보기 위해 agent 하나를 더 돌리고 싶지 않았습니다.",
  "story_title": "제 서버를 위해 Meows를 만든 이유.",
  "tool_index_intro": "앱에 들어 있는 것",
  "tool_jump": "점프 호스트",
  "tool_manuals": "Linux / C 매뉴얼"
});

const I18N = Object.freeze({ en: EN, zhCN: ZH_CN, zhTW: ZH_TW, ja: JA, ko: KO });

// 所有页面语言均保留 Google Play 官方英文徽章
const PLAY_BADGE = Object.freeze({ src: "assets/playbadge/en.svg", alt: "Get it on Google Play" });

const SCREENSHOTS_LIGHT = Object.freeze({
  en: {
    overview: "assets/screenshots/en/overview.webp",
    charts: "assets/screenshots/en/charts.webp",
    tools: "assets/screenshots/en/tools.webp",
    lens: "assets/screenshots/en/lens.webp",
    thanks: "assets/screenshots/en/thanks.webp"
  },
  zhCN: {
    overview: "assets/screenshots/zhCN/overview.webp",
    charts: "assets/screenshots/zhCN/charts.webp",
    tools: "assets/screenshots/zhCN/tools.webp",
    lens: "assets/screenshots/zhCN/lens.webp",
    thanks: "assets/screenshots/zhCN/thanks.webp"
  },
  zhTW: {
    overview: "assets/screenshots/zhTW/overview.webp",
    charts: "assets/screenshots/zhTW/charts.webp",
    tools: "assets/screenshots/zhTW/tools.webp",
    lens: "assets/screenshots/zhTW/lens.webp",
    thanks: "assets/screenshots/zhTW/thanks.webp"
  },
  ja: {
    overview: "assets/screenshots/ja/overview.webp",
    charts: "assets/screenshots/ja/charts.webp",
    tools: "assets/screenshots/ja/tools.webp",
    lens: "assets/screenshots/ja/lens.webp",
    thanks: "assets/screenshots/ja/thanks.webp"
  },
  ko: {
    overview: "assets/screenshots/ko/overview.webp",
    charts: "assets/screenshots/ko/charts.webp",
    tools: "assets/screenshots/ko/tools.webp",
    lens: "assets/screenshots/ko/lens.webp",
    thanks: "assets/screenshots/ko/thanks.webp"
  }
});

const SCREENSHOTS_DARK = Object.freeze({
  en: {
    overview: "assets/screenshots-dark/en/overview.webp",
    charts: "assets/screenshots-dark/en/charts.webp",
    tools: "assets/screenshots-dark/en/tools.webp",
    lens: "assets/screenshots-dark/en/lens.webp",
    thanks: "assets/screenshots-dark/en/thanks.webp"
  },
  zhCN: {
    overview: "assets/screenshots-dark/zhCN/overview.webp",
    charts: "assets/screenshots-dark/zhCN/charts.webp",
    tools: "assets/screenshots-dark/zhCN/tools.webp",
    lens: "assets/screenshots-dark/zhCN/lens.webp",
    thanks: "assets/screenshots-dark/zhCN/thanks.webp"
  },
  zhTW: {
    overview: "assets/screenshots-dark/zhTW/overview.webp",
    charts: "assets/screenshots-dark/zhTW/charts.webp",
    tools: "assets/screenshots-dark/zhTW/tools.webp",
    lens: "assets/screenshots-dark/zhTW/lens.webp",
    thanks: "assets/screenshots-dark/zhTW/thanks.webp"
  },
  ja: {
    overview: "assets/screenshots-dark/ja/overview.webp",
    charts: "assets/screenshots-dark/ja/charts.webp",
    tools: "assets/screenshots-dark/ja/tools.webp",
    lens: "assets/screenshots-dark/ja/lens.webp",
    thanks: "assets/screenshots-dark/ja/thanks.webp"
  },
  ko: {
    overview: "assets/screenshots-dark/ko/overview.webp",
    charts: "assets/screenshots-dark/ko/charts.webp",
    tools: "assets/screenshots-dark/ko/tools.webp",
    lens: "assets/screenshots-dark/ko/lens.webp",
    thanks: "assets/screenshots-dark/ko/thanks.webp"
  }
});

const SCREENSHOT_ALTS = Object.freeze({
  en: {
    overview: "Meows overview with a world map and server card",
    charts: "Meows CPU history chart and process detail",
    tools: "Meows Settings page with Linux and network tools",
    lens: "Meows Lens actions for a selected domain",
    thanks: "Meows acknowledgements page with unique paw avatars"
  },
  zhCN: {
    overview: "Meows 世界地图与服务器卡片",
    charts: "Meows CPU 历史曲线与进程明细",
    tools: "Meows 设置页中的 Linux 与网络工具",
    lens: "Meows Lens 的域名操作与查询结果",
    thanks: "Meows 致谢页与独一无二的猫爪头像"
  },
  zhTW: {
    overview: "Meows 世界地圖與伺服器卡片",
    charts: "Meows CPU 歷史曲線與程序明細",
    tools: "Meows 設定頁中的 Linux 與網路工具",
    lens: "Meows Lens 的網域操作與查詢結果",
    thanks: "Meows 致謝頁與不同的貓掌頭像"
  },
  ja: {
    overview: "Meows の世界地図とサーバーカード",
    charts: "Meows の CPU 履歴グラフとプロセス詳細",
    tools: "Meows 設定画面の Linux・ネットワークツール",
    lens: "Meows Lens のドメイン操作と結果",
    thanks: "Meows の謝辞ページと肉球アバター"
  },
  ko: {
    overview: "Meows 세계 지도와 서버 카드",
    charts: "Meows CPU 기록 그래프와 프로세스 상세",
    tools: "Meows 설정 화면의 Linux 및 네트워크 도구",
    lens: "Meows Lens 도메인 작업과 결과",
    thanks: "Meows 감사 페이지와 발바닥 아바타"
  }
});

const THEME_MEDIA = window.matchMedia("(prefers-color-scheme: dark)");

function updateScreenshots(languageKey) {
  const lightScreens = SCREENSHOTS_LIGHT[languageKey] || SCREENSHOTS_LIGHT.en;
  const darkScreens = SCREENSHOTS_DARK[languageKey] || {};
  const preferredScreens = THEME_MEDIA.matches ? darkScreens : lightScreens;
  const englishScreens = SCREENSHOTS_LIGHT.en;
  const localizedAlts = SCREENSHOT_ALTS[languageKey] || SCREENSHOT_ALTS.en;
  const englishAlts = SCREENSHOT_ALTS.en;

  document.querySelectorAll("[data-shot]").forEach((image) => {
    const slot = image.dataset.shot;
    const primarySource = preferredScreens[slot] || lightScreens[slot] || englishScreens[slot];
    const localizedLightFallback = lightScreens[slot] || englishScreens[slot];
    const englishLightFallback = englishScreens[slot];
    if (!primarySource) return;

    let attemptedLocalizedFallback = false;
    let attemptedEnglishFallback = false;
    image.onerror = () => {
      if (!attemptedLocalizedFallback && primarySource !== localizedLightFallback) {
        attemptedLocalizedFallback = true;
        image.src = localizedLightFallback;
        if (localizedAlts[slot]) image.alt = localizedAlts[slot];
        return;
      }
      if (!attemptedEnglishFallback && localizedLightFallback !== englishLightFallback) {
        attemptedEnglishFallback = true;
        image.src = englishLightFallback;
        image.alt = englishAlts[slot] || image.alt;
        return;
      }
      image.onerror = null;
    };

    image.removeAttribute("srcset");
    image.src = primarySource;
    image.dataset.activeLanguage = languageKey;
    image.dataset.activeTheme = THEME_MEDIA.matches ? "dark" : "light";
    if (localizedAlts[slot]) image.alt = localizedAlts[slot];
  });
}

function applyLanguage(key) {
  const dict = I18N[key] || I18N.en;
  document.title = dict.meta_title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = dict.meta_description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dict[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = dict[element.dataset.i18nAriaLabel];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-play-badge]").forEach((image) => {
    image.src = PLAY_BADGE.src;
    image.alt = PLAY_BADGE.alt;
  });

  updateScreenshots(key);

  return key;
}

window.addEventListener("DOMContentLoaded", () => {
  const language = window.MeowsLanguage.initialize({
    languages: Object.keys(I18N),
    apply: applyLanguage,
    labels: (key) => {
      const dict = I18N[key] || I18N.en;
      return {
        languageLabel: dict.language_label,
        automaticLabel: dict.language_auto
      };
    }
  });

  const handleThemeChange = () => updateScreenshots(language.activeLanguage);
  if (typeof THEME_MEDIA.addEventListener === "function") {
    THEME_MEDIA.addEventListener("change", handleThemeChange);
  } else if (typeof THEME_MEDIA.addListener === "function") {
    THEME_MEDIA.addListener(handleThemeChange);
  }
});
