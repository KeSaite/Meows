const EN = Object.freeze({
  "a1": "No. Meows reads the server over standard SSH. There is no agent, daemon, Docker image, or extra port to configure.",
  "a2": "Yes. Add a bastion host and monitoring, terminal sessions, and SSH tunnels can all use it.",
  "a3": "Android 14 or later. The interface supports English, Simplified Chinese, Traditional Chinese, Japanese, and Korean.",
  "a4": "Not at the moment. Meows is a native Android app.",
  "brand_home": "Meows home",
  "connection_auth_label": "Authentication",
  "connection_auth_value": "Password, private key, or bastion host",
  "connection_middle_label": "In between",
  "connection_middle_value": "No Meows relay or analytics backend",
  "connection_path_label": "Connection",
  "connection_path_value": "phone → SSH → server",
  "connection_server_label": "Server side",
  "connection_server_value": "No agent and no extra management port",
  "examples_aria": "Command examples",
  "fact_languages_label": "Interface",
  "fact_languages_value": "English · 简体中文 · 繁體中文 · 日本語 · 한국어",
  "fact_permission_label": "Runtime permission",
  "fact_permission_value": "Notifications only, and optional",
  "fact_server_label": "Server side",
  "fact_server_value": "Nothing to install",
  "faq_title": "A few things people usually ask before buying.",
  "final_body": "$4.99 once. Updates are included; there is no subscription, advertising, or telemetry.",
  "final_kicker": "Android 14+",
  "final_title": "Add an SSH host and it is ready.",
  "footer_note": "Native Android, direct SSH. Built and maintained by Li Bainan.",
  "footer_privacy": "Privacy",
  "hero_body": "That turned into Meows. Add an SSH host and the phone shows CPU, memory, disk, network, and the things I used to open a terminal to check.",
  "hero_caption": "The 1.0.154 overview: a world map first, then the live server cards.",
  "hero_kicker": "Android · SSH only · no server agent",
  "hero_price": "$4.99 once",
  "hero_price_note": "No subscription, ads, or in-app purchases",
  "hero_title": "I wanted to check a server without opening my laptop.",
  "inside_lead": "Most of it came from something I kept checking or looking up, then stayed in the app.",
  "inside_title": "What I use on my own servers.",
  "language_auto": "Browser language",
  "language_label": "Language",
  "lens_body": "That is why I added Meows Lens. An IP, domain, URL, or permission string in the terminal or Docker log can be opened where it appears, then passed to DNS, WHOIS, TLS, or the permission calculator.",
  "lens_label": "Terminal + Lens",
  "lens_note": "Nothing runs by itself. Lens shows the available action and waits for a tap.",
  "lens_stack_aria": "Meows tools and Lens",
  "lens_title": "Seeing a domain in a log and then jumping to a separate tool got old.",
  "maker_p1": "Meows only uses SSH, so the compatibility work lands in the client. Old kernels, stripped-down systems, and less common architectures are hard to cover with the machines I own. During 1.0.154, a few people on LowEndTalk gave me real environments to test against; the metric collector and history charts were reworked there.",
  "maker_p2": "The acknowledgements page keeps the names of people who helped during testing. Each one has a different paw avatar.",
  "maker_title": "My own servers do not cover all of these Linux environments.",
  "meta_description": "Monitor Linux servers from Android over SSH. No agent, daemon, or extra port on the server. Includes live metrics, terminal, Docker, tunnels, and network tools.",
  "meta_title": "Meows — SSH Monitor & Terminal for Android",
  "monitor_1": "Live cards for all of my servers",
  "monitor_2": "Processes, mounts, and interfaces under the history chart",
  "monitor_3": "Disconnect and recovery notices, with per-server thresholds",
  "monitor_body": "CPU, memory, disk, network, and TCP history are shown with the processes, mounts, or interfaces behind the number. Alerts are set per server; several thresholds crossing at once are merged into one notification.",
  "monitor_caption": "History stays on the phone; the detail under the chart helps explain the spike.",
  "monitor_label": "Monitoring",
  "monitor_title": "When a curve looks wrong, I want the process or device beside it.",
  "more_body": "Docker management also goes through SSH, so there is no remote API port to expose. The app also has SSH tunnels, bastion hosts, DNS, TLS, WHOIS, subnet, Cron, regex, timestamp, permission tools, and more.",
  "more_label": "Other tools",
  "more_title": "Docker, tunnels, and the small tools I used to search for each time.",
  "nav_get": "Google Play",
  "nav_inside": "Inside the app",
  "nav_label": "Primary navigation",
  "nav_questions": "Questions",
  "nav_why": "Why I made it",
  "privacy_a1": "Encrypted on the device with AES-GCM; the keys are held by Android Keystore.",
  "privacy_a2": "Kept on the phone. Meows has no service that receives it.",
  "privacy_a3": "The phone connects directly to the servers you added over SSH.",
  "privacy_a4": "Encrypted locally before it is uploaded to Google Drive app-private storage.",
  "privacy_body": "Credentials are encrypted on the device with AES-GCM and Android Keystore. Meows has no service that receives monitoring data. The only runtime permission is notifications; the rest of the app still works if it is denied.",
  "privacy_link": "Read the privacy policy →",
  "privacy_q1": "SSH credentials",
  "privacy_q2": "Monitoring data",
  "privacy_q3": "Connection path",
  "privacy_q4": "Optional backup",
  "privacy_title": "The app stores SSH passwords and private keys. I did not want to cut corners here.",
  "q1": "Do I need to install anything on the server?",
  "q2": "Can it reach an internal server?",
  "q3": "Which Android version and languages?",
  "q4": "Is there an iOS version?",
  "server_note_aria": "Server-side setup",
  "server_note_title": "server side",
  "skip": "Skip to content",
  "story_p1": "I used to SSH into them one by one just to see whether CPU, memory, or disk looked wrong. A lot of monitoring setups also wanted another daemon, another port, or a separate dashboard.",
  "story_p2": "These are small machines, and I did not want to change the server environment just to watch it. Meows uses the SSH access that is already there and reads the usual Linux interfaces from the client.",
  "story_quote": "I did not want another agent running just so I could look at the status.",
  "story_title": "A few small VPSs were already enough to make this annoying.",
  "tool_index_intro": "Already in the app",
  "tool_jump": "Bastion hosts",
  "tool_manuals": "Linux & C manuals"
});

const ZH_CN = Object.freeze({
  "a1": "不需要。Meows 全程走标准 SSH，不装 agent、daemon 或 Docker 镜像，也不需要额外开放端口。",
  "a2": "可以，配置跳板机即可。监控、终端和 SSH 隧道都能复用这条连接。",
  "a3": "Android 14 及以上。界面支持简体中文、繁体中文、英文、日语和韩语。",
  "a4": "目前没有，Meows 是原生 Android App。",
  "brand_home": "Meows 首页",
  "connection_auth_label": "认证",
  "connection_auth_value": "密码、私钥，内网机器可以走跳板机",
  "connection_middle_label": "中间服务",
  "connection_middle_value": "没有 Meows 中转，也没有统计后台",
  "connection_path_label": "连接路径",
  "connection_path_value": "手机 → SSH → 服务器",
  "connection_server_label": "服务器端",
  "connection_server_value": "不装 agent，也不开额外管理端口",
  "examples_aria": "命令示例",
  "fact_languages_label": "界面",
  "fact_languages_value": "简中 / 繁中 / 英 / 日 / 韩",
  "fact_permission_label": "运行时权限",
  "fact_permission_value": "只申请通知，而且可以拒绝",
  "fact_server_label": "服务器端",
  "fact_server_value": "不用安装东西",
  "faq_title": "买之前，大家经常会问这几件事。",
  "final_body": "$4.99 一次买断，后续更新免费，没有订阅、广告或遥测。",
  "final_kicker": "Android 14+",
  "final_title": "填一个 SSH 地址就能用。",
  "footer_note": "原生 Android，手机直连 SSH。Li Bainan 独立开发和维护。",
  "footer_privacy": "隐私政策",
  "hero_body": "后来就写了 Meows。填一个 SSH 地址，CPU、内存、磁盘、网络，还有平时得进终端才能看到的东西，手机上直接看。",
  "hero_caption": "1.0.154 的总览：先看世界地图，再往下看服务器实时状态。",
  "hero_kicker": "Android · 纯 SSH · 服务器端零安装",
  "hero_price": "$4.99 一次买断",
  "hero_price_note": "没有订阅、广告和内购",
  "hero_title": "我只是想看一眼\n服务器，不想\n每次都开电脑。",
  "inside_lead": "基本都是我管自己服务器时反复碰到的事情，后来就一点点加进 App 里了。",
  "inside_title": "这些是我平时真正在用的部分。",
  "language_auto": "跟随浏览器",
  "language_label": "语言",
  "lens_body": "所以做了 Meows Lens。终端或 Docker 日志里的 IP、域名、URL、权限字符串都能原地打开，接着查 DNS、WHOIS、TLS 或权限换算。",
  "lens_label": "终端 + Lens",
  "lens_note": "它不会自己查询、打开网页或者执行命令，操作还是要手动点。",
  "lens_stack_aria": "Meows 工具页和 Lens",
  "lens_title": "日志里看到一个域名，再切到工具页查，来回挺麻烦。",
  "maker_p1": "Meows 一直只走 SSH，兼容性的问题也都得在客户端处理。老内核、精简系统、少见架构，光靠我手上的机器覆盖不过来。做 1.0.154 时，LowEndTalk 的几位朋友提供了真实测试环境，指标采集和历史图表就是在这些机器上重新改的。",
  "maker_p2": "App 里留了一页致谢，参与内测的人都有一个不一样的猫爪头像，这些名字也放在里面。",
  "maker_title": "我自己的服务器测不全这些 Linux 环境。",
  "meta_description": "通过 Android 上的 Meows 直接用 SSH 监控 Linux 服务器，服务器端不用安装 agent、守护进程或开放额外端口。包含实时指标、终端、Docker、隧道和网络工具。",
  "meta_title": "Meows — Android SSH 服务器监控与终端",
  "monitor_1": "所有服务器的实时卡片",
  "monitor_2": "曲线下面直接看进程、挂载点和网卡",
  "monitor_3": "每台服务器单独设阈值，断开和恢复都会提醒",
  "monitor_body": "CPU、内存、磁盘、网络和 TCP 的历史曲线下面，会列对应的进程、挂载点或者网卡。告警按服务器单独设置，多项同时超标会合并成一条通知。",
  "monitor_caption": "历史记录留在手机上，曲线下面直接给出这次波动对应的明细。",
  "monitor_label": "监控",
  "monitor_title": "曲线不对时，我想顺手看到是哪个进程或者设备在吃资源。",
  "more_body": "Docker 管理同样走 SSH，不需要暴露远程 API 端口。App 里还有 SSH 隧道、跳板机、DNS、TLS、WHOIS、子网、Cron、正则、时间戳、权限计算等等。",
  "more_label": "其他工具",
  "more_title": "Docker、隧道，还有那些每次用都要临时搜索的小工具。",
  "nav_get": "Google Play",
  "nav_inside": "App 里面",
  "nav_label": "主导航",
  "nav_questions": "常见问题",
  "nav_why": "为什么做",
  "privacy_a1": "在设备端用 AES-GCM 加密，密钥交给 Android Keystore 保管。",
  "privacy_a2": "只留在手机上，Meows 没有接收这些数据的服务。",
  "privacy_a3": "手机通过 SSH 直接连接你添加的服务器。",
  "privacy_a4": "上传前先在设备端加密，再存到 Google Drive 的应用私有空间。",
  "privacy_body": "凭据用 AES-GCM 加密，密钥由 Android Keystore 保管。Meows 没有接收监控数据的后台；唯一的运行时权限是通知，拒绝后其他功能照常用。",
  "privacy_link": "查看隐私政策 →",
  "privacy_q1": "SSH 凭据",
  "privacy_q2": "监控数据",
  "privacy_q3": "连接路径",
  "privacy_q4": "可选备份",
  "privacy_title": "App 里存着 SSH 密码和私钥，这部分不能省事。",
  "q1": "服务器上需要安装东西吗？",
  "q2": "没有公网 IP 的内网服务器能用吗？",
  "q3": "需要哪个 Android 版本？支持哪些语言？",
  "q4": "有 iOS 版吗？",
  "server_note_aria": "服务器端配置",
  "server_note_title": "服务器端",
  "skip": "跳到正文",
  "story_p1": "以前只是想确认 CPU、内存或者磁盘有没有异常，也得一台一台 SSH 上去。很多监控方案还要再装一个 daemon、再开端口，或者多维护一个面板。",
  "story_p2": "小鸡本来资源就不多，我也不想为了监控再改服务器环境。Meows 直接用现成的 SSH，Linux 本来就有的接口由客户端自己读。",
  "story_quote": "我不想为了看状态，先给小鸡多跑一个 agent。",
  "story_title": "手上几台小鸡，就已经够麻烦了。",
  "tool_index_intro": "已经放进 App 的",
  "tool_jump": "跳板机",
  "tool_manuals": "Linux / C 手册"
});

const ZH_TW = Object.freeze({
  "a1": "不需要。Meows 全程走標準 SSH，不裝 agent、daemon 或 Docker 映像，也不用額外開放連接埠。",
  "a2": "可以，設定跳板機即可。監控、終端機和 SSH 隧道都能共用這條連線。",
  "a3": "Android 14 及以上。介面支援簡體中文、繁體中文、英文、日文和韓文。",
  "a4": "目前沒有，Meows 是原生 Android App。",
  "brand_home": "Meows 首頁",
  "connection_auth_label": "驗證",
  "connection_auth_value": "密碼、私鑰，內網機器可以走跳板機",
  "connection_middle_label": "中間服務",
  "connection_middle_value": "沒有 Meows 中轉，也沒有統計後端",
  "connection_path_label": "連線路徑",
  "connection_path_value": "手機 → SSH → 伺服器",
  "connection_server_label": "伺服器端",
  "connection_server_value": "不裝 agent，也不開額外管理連接埠",
  "examples_aria": "命令範例",
  "fact_languages_label": "介面",
  "fact_languages_value": "簡中 / 繁中 / 英 / 日 / 韓",
  "fact_permission_label": "執行階段權限",
  "fact_permission_value": "只要求通知，而且可以拒絕",
  "fact_server_label": "伺服器端",
  "fact_server_value": "不用安裝東西",
  "faq_title": "買之前，大家常會問這幾件事。",
  "final_body": "$4.99 一次買斷，後續更新免費，沒有訂閱、廣告或遙測。",
  "final_kicker": "Android 14+",
  "final_title": "填一個 SSH 位址就能用。",
  "footer_note": "原生 Android，手機直連 SSH。Li Bainan 獨立開發和維護。",
  "footer_privacy": "隱私權政策",
  "hero_body": "後來就寫了 Meows。填一個 SSH 位址，CPU、記憶體、磁碟、網路，還有平常得進終端機才能看到的東西，手機上直接看。",
  "hero_caption": "1.0.154 的總覽：先看世界地圖，再往下看伺服器即時狀態。",
  "hero_kicker": "Android · 純 SSH · 伺服器端零安裝",
  "hero_price": "$4.99 一次買斷",
  "hero_price_note": "沒有訂閱、廣告和應用程式內購",
  "hero_title": "我只是想看一眼\n伺服器，不想\n每次都開電腦。",
  "inside_lead": "基本上都是我管理自己伺服器時反覆碰到的事，後來就慢慢加進 App 裡。",
  "inside_title": "這些是我平常真的會用到的部分。",
  "language_auto": "跟隨瀏覽器",
  "language_label": "語言",
  "lens_body": "所以做了 Meows Lens。終端機或 Docker 日誌裡的 IP、網域、URL、權限字串都能在原位置打開，接著查 DNS、WHOIS、TLS 或權限換算。",
  "lens_label": "終端機 + Lens",
  "lens_note": "它不會自己查詢、開網頁或執行命令，操作還是要手動點。",
  "lens_stack_aria": "Meows 工具頁和 Lens",
  "lens_title": "日誌裡看到一個網域，再切到工具頁查，來回挺麻煩。",
  "maker_p1": "Meows 一直只走 SSH，相容性的問題也都得在客戶端處理。舊核心、精簡系統、少見架構，光靠我手上的機器涵蓋不了。做 1.0.154 時，LowEndTalk 的幾位朋友提供了真實測試環境，指標採集和歷史圖表就是在這些機器上重新改的。",
  "maker_p2": "App 裡留了一頁致謝，參與內測的人都有一個不一樣的貓掌頭像，名字也放在裡面。",
  "maker_title": "我自己的伺服器測不完這些 Linux 環境。",
  "meta_description": "透過 Android 上的 Meows 直接用 SSH 監控 Linux 伺服器，伺服器端不用安裝 agent、常駐程式或開放額外連接埠。包含即時指標、終端機、Docker、隧道和網路工具。",
  "meta_title": "Meows — Android SSH 伺服器監控與終端機",
  "monitor_1": "所有伺服器的即時卡片",
  "monitor_2": "曲線下面直接看程序、掛載點和網卡",
  "monitor_3": "每台伺服器分開設門檻，斷線和恢復都會提醒",
  "monitor_body": "CPU、記憶體、磁碟、網路和 TCP 的歷史曲線下面，會列出對應的程序、掛載點或網卡。告警按伺服器分開設定，多項同時超標會合併成一則通知。",
  "monitor_caption": "歷史記錄留在手機上，曲線下面會直接列出這次波動對應的明細。",
  "monitor_label": "監控",
  "monitor_title": "曲線不對時，我想順手看到是哪個程序或裝置在吃資源。",
  "more_body": "Docker 管理同樣走 SSH，不用暴露 Remote API 連接埠。App 裡還有 SSH 隧道、跳板機、DNS、TLS、WHOIS、子網路、Cron、正規表示式、時間戳、權限計算等等。",
  "more_label": "其他工具",
  "more_title": "Docker、隧道，還有那些每次用都得臨時搜尋的小工具。",
  "nav_get": "Google Play",
  "nav_inside": "App 裡面",
  "nav_label": "主導覽",
  "nav_questions": "常見問題",
  "nav_why": "為什麼做",
  "privacy_a1": "在裝置端使用 AES-GCM 加密，金鑰交給 Android Keystore 保管。",
  "privacy_a2": "只留在手機上，Meows 沒有接收這些資料的服務。",
  "privacy_a3": "手機透過 SSH 直接連線到你加入的伺服器。",
  "privacy_a4": "上傳前先在裝置端加密，再存入 Google Drive 的應用程式私人空間。",
  "privacy_body": "憑證使用 AES-GCM 加密，金鑰由 Android Keystore 保管。Meows 沒有接收監控資料的後端；唯一的執行階段權限是通知，拒絕後其他功能照常用。",
  "privacy_link": "查看隱私權政策 →",
  "privacy_q1": "SSH 憑證",
  "privacy_q2": "監控資料",
  "privacy_q3": "連線路徑",
  "privacy_q4": "可選備份",
  "privacy_title": "App 裡存著 SSH 密碼和私鑰，這部分不能省事。",
  "q1": "伺服器上需要安裝東西嗎？",
  "q2": "沒有公網 IP 的內網伺服器能用嗎？",
  "q3": "需要哪個 Android 版本？支援哪些語言？",
  "q4": "有 iOS 版嗎？",
  "server_note_aria": "伺服器端設定",
  "server_note_title": "伺服器端",
  "skip": "跳到正文",
  "story_p1": "以前只是想確認 CPU、記憶體或磁碟有沒有異常，也得一台一台 SSH 上去。很多監控方案還要再裝一個 daemon、再開連接埠，或者多維護一個面板。",
  "story_p2": "小機器本來資源就不多，我也不想為了監控再改伺服器環境。Meows 直接用現成的 SSH，Linux 本來就有的介面由客戶端自己讀。",
  "story_quote": "我不想只是看個狀態，就先讓伺服器多跑一個 agent。",
  "story_title": "手上幾台小機器，就已經夠麻煩了。",
  "tool_index_intro": "已經放進 App 的",
  "tool_jump": "跳板機",
  "tool_manuals": "Linux / C 手冊"
});

const JA = Object.freeze({
  "a1": "いいえ。標準 SSH だけを使います。agent、daemon、Docker イメージ、追加ポートは不要です。",
  "a2": "はい。踏み台ホストを設定すると、監視、ターミナル、SSH トンネルで同じ接続を使えます。",
  "a3": "Android 14 以降。英語、簡体字中国語、繁体字中国語、日本語、韓国語に対応します。",
  "a4": "現在はありません。Meows はネイティブ Android アプリです。",
  "brand_home": "Meows ホーム",
  "connection_auth_label": "認証",
  "connection_auth_value": "パスワード、秘密鍵、踏み台ホスト",
  "connection_middle_label": "中間サービス",
  "connection_middle_value": "Meows の中継も解析バックエンドもなし",
  "connection_path_label": "接続",
  "connection_path_value": "スマートフォン → SSH → サーバー",
  "connection_server_label": "サーバー側",
  "connection_server_value": "agent なし、追加の管理ポートなし",
  "examples_aria": "コマンド例",
  "fact_languages_label": "インターフェース",
  "fact_languages_value": "英語 / 簡体字 / 繁体字 / 日本語 / 韓国語",
  "fact_permission_label": "実行時権限",
  "fact_permission_value": "通知のみ。拒否しても利用可能",
  "fact_server_label": "サーバー側",
  "fact_server_value": "インストール不要",
  "faq_title": "購入前によく聞かれることです。",
  "final_body": "$4.99 の買い切り。アップデートは無料で、サブスク、広告、テレメトリはありません。",
  "final_kicker": "Android 14+",
  "final_title": "SSH ホストを追加すれば使えます。",
  "footer_note": "ネイティブ Android、端末から直接 SSH。Li Bainan が個人で開発・保守しています。",
  "footer_privacy": "プライバシー",
  "hero_body": "それで Meows を作りました。SSH ホストを追加すると、CPU、メモリ、ディスク、ネットワーク、それまでターミナルで確認していた項目をスマートフォンで見られます。",
  "hero_caption": "1.0.154 の概要画面。世界地図の下にリアルタイムのサーバーカードが続きます。",
  "hero_kicker": "Android · SSH のみ · サーバー agent なし",
  "hero_price": "$4.99 の買い切り",
  "hero_price_note": "サブスク、広告、アプリ内課金なし",
  "hero_title": "サーバーを少し確認するだけなのに、毎回 PC を開きたくなかった。",
  "inside_lead": "サーバーを管理しながら何度も確認したものを、少しずつアプリに残してきました。",
  "inside_title": "自分のサーバーで実際に使っている部分です。",
  "language_auto": "ブラウザーの言語",
  "language_label": "言語",
  "lens_body": "そこで Meows Lens を追加しました。ターミナルや Docker ログの IP、ドメイン、URL、権限文字列をその場で開き、DNS、WHOIS、TLS、権限計算へ渡せます。",
  "lens_label": "ターミナル + Lens",
  "lens_note": "自動では実行しません。利用できる操作を表示し、選択を待ちます。",
  "lens_stack_aria": "Meows のツールと Lens",
  "lens_title": "ログでドメインを見つけるたびに、別のツールへ移るのが面倒でした。",
  "maker_p1": "Meows は SSH だけを使うため、互換性の処理はクライアント側に集まります。古いカーネル、最小構成のシステム、珍しいアーキテクチャは手元のマシンだけでは足りません。1.0.154 では LowEndTalk の数人が実環境を提供してくれ、そこでメトリクス収集と履歴グラフを作り直しました。",
  "maker_p2": "テストを手伝ってくれた名前は謝辞ページに残しています。それぞれ異なる肉球アバターがあります。",
  "maker_title": "自分のサーバーだけでは、これらの Linux 環境をテストしきれません。",
  "meta_description": "Android から SSH で Linux サーバーを監視します。サーバー側にエージェントやデーモンを導入したり、追加ポートを開放したりする必要はありません。ライブ指標、ターミナル、Docker、トンネル、ネットワークツールを備えています。",
  "meta_title": "Meows — Android向けSSHサーバー監視・ターミナル",
  "monitor_1": "全サーバーのリアルタイムカード",
  "monitor_2": "グラフの下にプロセス、マウント、NIC の詳細",
  "monitor_3": "サーバー別のしきい値と切断・復旧通知",
  "monitor_body": "CPU、メモリ、ディスク、ネットワーク、TCP の履歴の下に、対応するプロセス、マウント、インターフェースを表示します。アラートはサーバーごとに設定し、複数項目の超過は一つの通知にまとめます。",
  "monitor_caption": "履歴は端末内に残り、変化に対応する詳細もグラフの下で確認できます。",
  "monitor_label": "監視",
  "monitor_title": "グラフがおかしいとき、どのプロセスやデバイスが原因かも横で見たい。",
  "more_body": "Docker 管理も SSH 経由なので、Remote API ポートを公開しません。SSH トンネル、踏み台、DNS、TLS、WHOIS、サブネット、Cron、正規表現、タイムスタンプ、権限計算なども入っています。",
  "more_label": "その他のツール",
  "more_title": "Docker、トンネル、使うたびに検索していた小さなツール。",
  "nav_get": "Google Play",
  "nav_inside": "アプリの中",
  "nav_label": "メインナビゲーション",
  "nav_questions": "よくある質問",
  "nav_why": "作った理由",
  "privacy_a1": "端末上で AES-GCM 暗号化し、鍵は Android Keystore が保持します。",
  "privacy_a2": "スマートフォン内にのみ保存します。Meows が受信するサービスはありません。",
  "privacy_a3": "スマートフォンから追加したサーバーへ SSH で直接接続します。",
  "privacy_a4": "端末上で暗号化してから、Google Drive のアプリ専用領域へアップロードします。",
  "privacy_body": "認証情報は端末上で AES-GCM 暗号化し、鍵は Android Keystore が管理します。Meows には監視データを受け取るサービスがありません。実行時権限は通知だけで、拒否しても他の機能は使えます。",
  "privacy_link": "プライバシーポリシーを読む →",
  "privacy_q1": "SSH 認証情報",
  "privacy_q2": "監視データ",
  "privacy_q3": "接続経路",
  "privacy_q4": "任意のバックアップ",
  "privacy_title": "SSH のパスワードと秘密鍵を保存するアプリなので、ここは省けません。",
  "q1": "サーバーに何かインストールしますか？",
  "q2": "グローバル IP のない内部サーバーも使えますか？",
  "q3": "対応する Android と言語は？",
  "q4": "iOS 版はありますか？",
  "server_note_aria": "サーバー側の設定",
  "server_note_title": "サーバー側",
  "skip": "本文へ移動",
  "story_p1": "CPU、メモリ、ディスクに異常がないか見るだけでも、一台ずつ SSH で入っていました。監視構成によっては daemon、追加ポート、別のダッシュボードまで必要です。",
  "story_p2": "小さなサーバーなので、監視のためだけに環境を変えたくありませんでした。Meows は既存の SSH を使い、Linux にある通常のインターフェースをクライアント側で読み取ります。",
  "story_quote": "状態を見るためだけに、もう一つ agent を動かしたくありませんでした。",
  "story_title": "小さな VPS が数台あるだけでも、確認は面倒でした。",
  "tool_index_intro": "アプリに入っているもの",
  "tool_jump": "踏み台ホスト",
  "tool_manuals": "Linux / C マニュアル"
});

const KO = Object.freeze({
  "a1": "아니요. 표준 SSH만 사용합니다. agent, daemon, Docker 이미지, 추가 포트가 필요하지 않습니다.",
  "a2": "네. 점프 호스트를 설정하면 모니터링, 터미널, SSH 터널에서 같은 연결을 사용할 수 있습니다.",
  "a3": "Android 14 이상. 영어, 중국어 간체, 중국어 번체, 일본어, 한국어를 지원합니다.",
  "a4": "현재는 없습니다. Meows는 네이티브 Android 앱입니다.",
  "brand_home": "Meows 홈",
  "connection_auth_label": "인증",
  "connection_auth_value": "비밀번호, 개인 키, 점프 호스트",
  "connection_middle_label": "중간 서비스",
  "connection_middle_value": "Meows 중계와 분석 백엔드 없음",
  "connection_path_label": "연결",
  "connection_path_value": "휴대폰 → SSH → 서버",
  "connection_server_label": "서버 측",
  "connection_server_value": "agent 없음, 추가 관리 포트 없음",
  "examples_aria": "명령 예시",
  "fact_languages_label": "인터페이스",
  "fact_languages_value": "영어 / 중국어 간체 / 중국어 번체 / 일본어 / 한국어",
  "fact_permission_label": "런타임 권한",
  "fact_permission_value": "알림만 요청하며 거부 가능",
  "fact_server_label": "서버 측",
  "fact_server_value": "설치할 것 없음",
  "faq_title": "구매 전에 자주 받는 질문입니다.",
  "final_body": "$4.99 한 번 구매. 업데이트는 무료이며 구독, 광고, 텔레메트리가 없습니다.",
  "final_kicker": "Android 14+",
  "final_title": "SSH 호스트를 추가하면 바로 쓸 수 있습니다.",
  "footer_note": "네이티브 Android, 휴대폰에서 직접 SSH. Li Bainan이 개인 개발 및 유지보수합니다.",
  "footer_privacy": "개인정보",
  "hero_body": "그래서 Meows를 만들었습니다. SSH 호스트를 추가하면 CPU, 메모리, 디스크, 네트워크와 평소 터미널에서 확인하던 항목을 휴대폰에서 바로 볼 수 있습니다.",
  "hero_caption": "1.0.154 개요 화면. 먼저 세계 지도, 그 아래에 실시간 서버 카드가 이어집니다.",
  "hero_kicker": "Android · SSH만 사용 · 서버 agent 없음",
  "hero_price": "$4.99 한 번 구매",
  "hero_price_note": "구독, 광고, 인앱 구매 없음",
  "hero_title": "서버 상태만 잠깐 보려고 매번 노트북을 열고 싶지 않았습니다.",
  "inside_lead": "서버를 관리하면서 계속 확인하거나 검색하던 것들을 조금씩 앱 안에 남겼습니다.",
  "inside_title": "제 서버에서 실제로 쓰는 부분입니다.",
  "language_auto": "브라우저 언어 따르기",
  "language_label": "언어",
  "lens_body": "그래서 Meows Lens를 추가했습니다. 터미널이나 Docker 로그의 IP, 도메인, URL, 권한 문자열을 그 자리에서 열고 DNS, WHOIS, TLS, 권한 계산으로 넘길 수 있습니다.",
  "lens_label": "터미널 + Lens",
  "lens_note": "자동으로 실행하지 않습니다. 가능한 작업을 보여 주고 사용자의 선택을 기다립니다.",
  "lens_stack_aria": "Meows 도구와 Lens",
  "lens_title": "로그에서 도메인을 볼 때마다 다른 도구로 옮겨 가는 것이 번거로웠습니다.",
  "maker_p1": "Meows는 SSH만 사용하므로 호환성 처리는 클라이언트에 모입니다. 오래된 커널, 최소 설치 시스템, 드문 아키텍처는 제 서버만으로 부족합니다. 1.0.154를 만들 때 LowEndTalk의 몇 분이 실제 테스트 환경을 제공했고, 그 환경에서 지표 수집과 기록 그래프를 다시 손봤습니다.",
  "maker_p2": "테스트를 도와준 이름은 앱의 감사 페이지에 남겨 두었습니다. 각 사람에게 서로 다른 발바닥 아바타가 있습니다.",
  "maker_title": "제가 가진 서버만으로는 이런 Linux 환경을 모두 테스트할 수 없습니다.",
  "meta_description": "Android에서 SSH로 Linux 서버를 모니터링합니다. 서버에 에이전트나 데몬을 설치하거나 추가 포트를 열 필요가 없습니다. 실시간 지표, 터미널, Docker, 터널, 네트워크 도구가 들어 있습니다.",
  "meta_title": "Meows — Android SSH 서버 모니터링 및 터미널",
  "monitor_1": "모든 서버의 실시간 카드",
  "monitor_2": "그래프 아래의 프로세스, 마운트, 인터페이스 상세",
  "monitor_3": "서버별 임계값과 연결 끊김·복구 알림",
  "monitor_body": "CPU, 메모리, 디스크, 네트워크, TCP 기록 아래에 관련 프로세스, 마운트, 인터페이스를 표시합니다. 알림은 서버별로 설정하고 여러 항목의 초과는 한 알림으로 합칩니다.",
  "monitor_caption": "기록은 휴대폰에 보관하고, 변화에 해당하는 상세 항목도 그래프 아래에 표시합니다.",
  "monitor_label": "모니터링",
  "monitor_title": "그래프가 이상할 때는 어떤 프로세스나 장치가 원인인지도 옆에서 보고 싶었습니다.",
  "more_body": "Docker 관리도 SSH로 처리하므로 Remote API 포트를 열지 않습니다. SSH 터널, 점프 호스트, DNS, TLS, WHOIS, 서브넷, Cron, 정규식, 타임스탬프, 권한 계산 등도 들어 있습니다.",
  "more_label": "기타 도구",
  "more_title": "Docker, 터널, 그리고 쓸 때마다 검색하던 작은 도구들.",
  "nav_get": "Google Play",
  "nav_inside": "앱 안쪽",
  "nav_label": "주요 탐색",
  "nav_questions": "자주 묻는 질문",
  "nav_why": "만든 이유",
  "privacy_a1": "기기에서 AES-GCM으로 암호화하며 키는 Android Keystore가 보관합니다.",
  "privacy_a2": "휴대폰에만 남습니다. Meows가 이 데이터를 받는 서비스는 없습니다.",
  "privacy_a3": "휴대폰이 추가한 서버에 SSH로 직접 연결합니다.",
  "privacy_a4": "기기에서 먼저 암호화한 뒤 Google Drive 앱 전용 공간에 업로드합니다.",
  "privacy_body": "자격 증명은 기기에서 AES-GCM으로 암호화하고 키는 Android Keystore가 보관합니다. Meows에는 모니터링 데이터를 받는 서비스가 없습니다. 런타임 권한은 알림 하나이며 거부해도 다른 기능은 그대로 쓸 수 있습니다.",
  "privacy_link": "개인정보 처리방침 읽기 →",
  "privacy_q1": "SSH 자격 증명",
  "privacy_q2": "모니터링 데이터",
  "privacy_q3": "연결 경로",
  "privacy_q4": "선택적 백업",
  "privacy_title": "SSH 비밀번호와 개인 키를 저장하는 앱이라서 이 부분은 대충 할 수 없었습니다.",
  "q1": "서버에 무엇을 설치해야 하나요?",
  "q2": "공인 IP가 없는 내부 서버도 되나요?",
  "q3": "Android 버전과 지원 언어는?",
  "q4": "iOS 버전이 있나요?",
  "server_note_aria": "서버 측 설정",
  "server_note_title": "서버 측",
  "skip": "본문으로 이동",
  "story_p1": "CPU, 메모리, 디스크가 괜찮은지 보려고 서버마다 SSH로 들어갔습니다. 모니터링 구성에 따라 daemon, 추가 포트, 별도 대시보드까지 더 필요했습니다.",
  "story_p2": "작은 서버라서 상태를 보려고 환경을 더 바꾸고 싶지 않았습니다. Meows는 이미 있는 SSH를 쓰고, Linux의 일반 인터페이스를 클라이언트에서 읽습니다.",
  "story_quote": "상태를 보기 위해 agent 하나를 더 돌리고 싶지 않았습니다.",
  "story_title": "작은 VPS 몇 대만 있어도 확인이 꽤 번거로웠습니다.",
  "tool_index_intro": "앱에 들어 있는 것",
  "tool_jump": "점프 호스트",
  "tool_manuals": "Linux / C 매뉴얼"
});

const I18N = Object.freeze({ en: EN, zhCN: ZH_CN, zhTW: ZH_TW, ja: JA, ko: KO });
const LANG_ATTR = Object.freeze({ en: "en", zhCN: "zh-Hans", zhTW: "zh-Hant", ja: "ja", ko: "ko" });
const LANGUAGE_NAMES = Object.freeze({
  en: { label: "English", code: "EN" },
  zhCN: { label: "简体中文", code: "简" },
  zhTW: { label: "繁體中文", code: "繁" },
  ja: { label: "日本語", code: "日" },
  ko: { label: "한국어", code: "한" }
});

// The store badge is intentionally the original English Google Play asset for every page language.
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

function detectLanguage() {
  const language = (navigator.language || "en").toLowerCase();
  if (language.startsWith("zh")) {
    return language.includes("tw") || language.includes("hk") || language.includes("mo") || language.includes("hant") ? "zhTW" : "zhCN";
  }
  if (language.startsWith("ja")) return "ja";
  if (language.startsWith("ko")) return "ko";
  return "en";
}

function applyLanguage(choice) {
  const key = choice === "auto" ? detectLanguage() : (I18N[choice] ? choice : "en");
  const dict = I18N[key];

  document.documentElement.lang = LANG_ATTR[key];
  document.documentElement.dataset.language = key;
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
  const switcher = document.querySelector("[data-language-switcher]");
  const trigger = document.getElementById("language-trigger");
  const menu = document.getElementById("language-menu");
  const currentLabel = document.getElementById("language-current-label");
  const currentCode = document.getElementById("language-current-code");
  const options = [...menu.querySelectorAll("[data-language-choice]")];
  const validChoices = new Set(["auto", ...Object.keys(I18N)]);

  let saved = "auto";
  try { saved = localStorage.getItem("meows-site-language") || "auto"; } catch (_) {}
  let selectedChoice = validChoices.has(saved) ? saved : "auto";
  let activeLanguage = "en";

  function updateSwitcher(appliedKey) {
    const name = LANGUAGE_NAMES[appliedKey] || LANGUAGE_NAMES.en;
    const dict = I18N[appliedKey] || I18N.en;
    currentLabel.textContent = name.label;
    currentCode.textContent = name.code;
    trigger.setAttribute("aria-label", `${dict.language_label}: ${name.label}${selectedChoice === "auto" ? ` · ${dict.language_auto}` : ""}`);

    options.forEach((option) => {
      option.setAttribute("aria-selected", String(option.dataset.languageChoice === selectedChoice));
    });
  }

  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (returnFocus) trigger.focus();
  }

  function openMenu(focusSelected = false) {
    menu.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    if (focusSelected) {
      const selected = options.find((option) => option.dataset.languageChoice === selectedChoice) || options[0];
      selected.focus();
    }
  }

  function chooseLanguage(choice) {
    selectedChoice = validChoices.has(choice) ? choice : "auto";
    try { localStorage.setItem("meows-site-language", selectedChoice); } catch (_) {}
    activeLanguage = applyLanguage(selectedChoice);
    updateSwitcher(activeLanguage);
    closeMenu(true);
  }

  activeLanguage = applyLanguage(selectedChoice);
  updateSwitcher(activeLanguage);

  const handleThemeChange = () => updateScreenshots(activeLanguage);
  if (typeof THEME_MEDIA.addEventListener === "function") {
    THEME_MEDIA.addEventListener("change", handleThemeChange);
  } else if (typeof THEME_MEDIA.addListener === "function") {
    THEME_MEDIA.addListener(handleThemeChange);
  }

  trigger.addEventListener("click", () => {
    if (menu.hidden) openMenu(false);
    else closeMenu(false);
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(true);
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", () => chooseLanguage(option.dataset.languageChoice));
  });

  menu.addEventListener("keydown", (event) => {
    const focusedIndex = options.indexOf(document.activeElement);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = focusedIndex < 0 ? 0 : (focusedIndex + direction + options.length) % options.length;
      options[nextIndex].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1].focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
    } else if (event.key === "Tab") {
      closeMenu(false);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!menu.hidden && !switcher.contains(event.target)) closeMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) closeMenu(true);
  });
});
