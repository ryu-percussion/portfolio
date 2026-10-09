/* =========================================================
   CONTENT FILE — ここだけ編集すれば、サイトの主要コンテンツを変更できます。
   ========================================================= */
const SITE_CONTENT = {
  ja: {
    nav:{about:"About",career:"Career",skills:"Skills",projects:"Projects",research:"Research",contact:"Contact",store:"Store"},
    hero:{
      eyebrow:"Researcher / Artist / Craftsman",
      title:"ryu percussion<br><em>Ryunosuke Takada</em>",
      lead:"数学、音楽、アートの境界の相対化",
      cta:"Explore the work"
    },
    statement:{kicker:"01 — PHILOSOPHY",title:"Music is the <em>mathematics</em> of sense,<br>mathematics is the <em>music</em> of reason.<small class=\"statement-ja\">音楽は感覚の数学であり、数学は理性の音楽である</small>"},
    about:{
      title:"Ryunosuke Takada<br>/ 高田龍之介",
      p1:"2007年生まれ（19歳）。定量的・数理的アプローチの基盤を持ちながら、「数学、音楽、アートの境界の相対化」をコアテーマに、独立した研究・創作活動を展開する。現在経済学部2年次。",
      p2:"抽象的な数理概念や高次元の幾何学的構造を、視覚や聴覚といった異なる認知モダリティへと等価に翻訳することにより、知覚の相対化を促すアプローチを研究。音楽領域では、スネアドラムのソロ楽器としての可能性を拡張し、演奏・作曲・モデリングに基づく楽器設計・ブランド運営までを垂直統合的に手掛ける。",
      p3:"また、日本におけるSTEAM教育およびギフテッド教育の新たなフレームワークを模索。学問・芸術・ものづくりの境界を越え、数理的思考と身体的感性の調和による新たな表現の創造と社会実装に取り組む。"
    },
    career:{
      title:"Building ideas<br>into reality.",
      items:[
        ["2024年10月 – 現在","ryu percussion"],
        ["2026年02月 – 現在","steAm, inc."]
      ]
    },
    skills:{
      title:"Tools for<br>curiosity.",
      items:[
        ["Mathematics & Physics (数理・物理)","研究基盤：複素解析、トポロジー、解析的数論（ζ関数）、ソニフィケーション。 数理モデル：確率過程（マルコフ連鎖、点過程）、群論、非ユークリッド幾何学。 物理・音響：音響物理学、振動・波動論、リズム生成の数理解析。"],
        ["Music & Composition (音楽・作曲)","演奏：スネアドラム（ソロ）、ピアノ、各種打楽器。 理論・作曲：数理的作曲、確率モデル、マルコフ連鎖、クセナキス的手法、音響的多元構造、編曲、サウンドデザイン、ポリリズム。 応用：物理音響モデリングに基づく楽器設計、音響解析。"],
        ["Programming & AI (プログラミング・人工知能)","使用言語：Python, C++, C, Java。 DSP：FFT、PSD、ウェーブレット変換、零点分布解析。 システム開発：深層学習を用いた作曲モデル、確率的作曲システム、音響データ解析ツール。"],
        ["Design & Communication (デザイン・表現)","ビジュアル：油絵、グラフィックデザイン、データ・ビジュアライゼーション。 空間・プロダクト：楽器デザイン、メディアアート、音響インスタレーション。 言語：ドイツ語、フランス語、英語、日本語、イタリア語、スペイン語。"]
      ]
    },
    projects:{
      title:"Selected<br>work.",
      e8:{meta:"SOFTWARE & INTERACTIVE SYSTEMS · 2026",title:"E8 Simulation / Sonification",body:"E_8ルート系の240個の8次元ベクトルを、28の回転平面を操作しながら2次元に射影し、レーダー走査によってリアルタイムに可聴化するインタラクティブ・システム。「Audio Start」を押すと音が鳴ります。"},
      featured:{meta:"LATEST WORK / 最新曲",title:"Asymmetry",sub:"for solo snare drum",
        lines:["高田龍之介によるスネアドラム・ソロ楽譜。","スティックとブラシ。スネアドラムの可能性を、もっと。","多彩な現代奏法とサウンド。挑戦的で魅力的。","リサイタルから、コンクール、アンコールまで。","すぐに、PDFでダウンロード。"],
        specs:["演奏時間: 約4分10秒","演奏人数: 1人","難易度: やや難しい","楽器: スネアドラム（スティック1本、ブラシ1本）"],
        links:[["楽譜を購入する (PDF)","https://ryupercussion.lemonsqueezy.com/checkout/buy/3d689611-1800-44b5-a8bf-cb41c35832c2"],["YouTubeで聴く","https://www.youtube.com/watch?v=mDIQSvGN7VM&t=25s"]]},
      items:[
        ["BUSINESS & PRODUCT DESIGN","ryu percussion","研究知見を実装した打楽器プロジェクト。企画・製作から演奏、販売、ブランディングまでを一貫して行う。Products: Snare Drum, Snare Stand, Percussion Stands, Percussion Mallets"],
        ["ACADEMIC RESEARCH · 2025","リーマンゼータ零点の多角的ソニフィケーション","リーマンゼータ関数 ζ(s) の非自明な零点分布をソニフィケーション（可聴化）し、数論的構造の知覚的有効性と認知マッピングを評価する試み。"],
        ["ACADEMIC RESEARCH · 2025","スネアドラムの構成要素がその音響特性に与える物理的影響の定量的評価","スネアドラムの主要な物理要素がティンバー（音色）に与える影響を定量化。ryu percussionにおけるプロダクト設計の理論的基盤。"],
        ["SOFTWARE & INTERACTIVE SYSTEMS · 2026","高次元ポリリズム・シーケンサー","E_8ルート系などの高次元対称性を、グラスマン多様体上の測地線補間を用いて2次元スクリーンに射影し、リアルタイムのソニフィケーションへと変換するインタラクティブ・システム。"],
        ["SOFTWARE & INTERACTIVE SYSTEMS · 2024","Mathematical Composition System","マルコフ連鎖などの確率過程と統計的手法を統合した、アルゴリズミックなリズム・音響生成システム。"],
        ["SOFTWARE & INTERACTIVE SYSTEMS","音響信号処理の自動可視化ツール","FFT、PSD、ウェーブレット変換等の音響データ解析結果をバッチ処理で自動可視化し、研究・開発プロセスを最適化するパイプライン。"],
        ["PERFORMANCE","Snare Solo / Snare × Piano / Experimental Percussion","スネアドラムやピアノを用いた現代的アプローチのほか、身近な素材を用いた前衛的なソロ・パフォーマンスの実践。"],
        ["EDUCATIONAL DESIGN","Integrated STEAM & Gifted Education","数学、音楽、芸術、プログラミングを横断する統合的教育モデルの構想。STEAM教育とギフテッド教育を融合させ、知性と感性を連動させる多様で創造的なカリキュラムを提案・実装。"]
      ]
    },
    research:{
      title:"Questions<br>worth pursuing.",
      items:[
        ["解析的数論のソニフィケーション","関数の構造と、音響パラメータとの構造的対応を研究。数理構造の知覚に新たなアプローチを見出す。"],
        ["高次元数理構造のクロスモーダル・マッピング","E_8ルート系などの高次元幾何学構造を、グラスマン多様体上の測地線補間や動的回転を用いて2次元平面に射影し、視覚化と音響化を同時に行うシステムを構築。"],
        ["アルゴリズミック作曲と数理モデル","クセナキスの確率論的手法、マルコフ連鎖、群論、非ユークリッド幾何学などの数理モデルを用いた作曲アルゴリズムを構築。"],
        ["音響物理学と楽器設計への応用","スネアドラム等の打楽器が発する音響の物理的特性を、実験とシミュレーションによって定量的・数理的に評価。この知見を楽器設計に直接フィードバックし、音響特性を意図的にデザインする。"]
      ]
    },
    contact:{
      title:"Let's make<br><em>something new.</em>",
      body:"研究、共同プロジェクト、音楽活動（作曲・演奏依頼等）にご興味がございましたら、下記SNS・メールよりお気軽にお声がけください。"
    },
    footer:{back:"Back to top ↑"}
  },
  en: {
    nav:{about:"About",career:"Career",skills:"Skills",projects:"Projects",research:"Research",contact:"Contact",store:"Store"},
    hero:{
      eyebrow:"Researcher / Artist / Craftsman",
      title:"ryu percussion<br><em>Ryunosuke Takada</em>",
      lead:"Relativizing the boundaries between mathematics, music, and art",
      cta:"Explore the work"
    },
    statement:{kicker:"01 — PHILOSOPHY",title:"Music is the <em>mathematics</em> of sense,<br>mathematics is the <em>music</em> of reason."},
    about:{
      title:"Ryunosuke Takada<br>/ ryu percussion",
      p1:"Born in 2007 (19 years old), Ryunosuke works from a rigorous quantitative and mathematical foundation, with “relativizing the boundaries between mathematics, music, and art” as a core theme. He is currently a second-year undergraduate in the Faculty of Economics.",
      p2:"His research explores cross-modal translation: mapping abstract mathematical concepts and high-dimensional geometric structures into visual and auditory modalities. In music, he expands the snare drum as a solo instrument through performance, composition, mathematical acoustic modeling, instrument design, and brand management.",
      p3:"He also explores new frameworks for STEAM and gifted education in Japan, crossing academia, art, and making to develop forms of expression and social implementation that harmonize mathematical reasoning with embodied sensibility."
    },
    career:{
      title:"Building ideas<br>into reality.",
      items:[
        ["Oct 2024 – Present","ryu percussion"],
        ["Feb 2026 – Present","steAm, inc."]
      ]
    },
    skills:{
      title:"Tools for<br>curiosity.",
      items:[
        ["Mathematics & Physics","Research: Complex Analysis, Topology, Analytic Number Theory (ζ-function), Sonification. Modeling: Stochastic Processes, Markov Chains, Point Processes, Group Theory, Non-Euclidean Geometry. Acoustics: Acoustic Physics, Vibration & Wave Theory, Mathematical Analysis of Rhythm Generation."],
        ["Music & Composition","Performance: Snare Drum (Soloist), Piano, Multi-Percussion. Theory: Algorithmic and Mathematical Composition, Stochastic Models, Markov Chains, Xenakisian Approaches, Sound Design, Polyrhythms. Application: Physical Acoustic Modeling and Acoustic Analysis."],
        ["Programming & AI","Languages: Python, C++, C, Java. DSP: FFT, PSD, Wavelet Transform, Zero-Distribution Analysis. Systems: Deep-learning compositional models, stochastic composition systems, acoustic data analysis tools."],
        ["Design & Communication","Visual Arts: Oil Painting, Graphic Design, Data Visualization. Spatial & Product: Instrument Architecture, Media Art, Acoustic Installations. Languages: German, French, English, Japanese, Italian, Spanish."]
      ]
    },
    projects:{
      title:"Selected<br>work.",
      e8:{meta:"SOFTWARE & INTERACTIVE SYSTEMS · 2026",title:"E8 Simulation / Sonification",body:"An interactive system that projects the 240 eight-dimensional vectors of the E_8 root system onto a 2D plane through 28 rotation planes, sonifying them in real time with a radar sweep. Press “Audio Start” to hear it."},
      featured:{meta:"LATEST WORK",title:"Asymmetry",sub:"for solo snare drum",
        lines:["Original solo snare drum score by Ryunosuke Takada.","One stick. One brush. Snare drum, expanded.","Modern techniques. Rich textures. Made to captivate an audience.","For recitals, contests, and encores.","Instant PDF download."],
        specs:["Duration: ca. 4'10\"","Players: 1","Difficulty: A bit challenging","Instrumentation: Snare drum (1 stick, 1 brush)"],
        links:[["Buy the score (PDF)","https://ryupercussion.lemonsqueezy.com/checkout/buy/3d689611-1800-44b5-a8bf-cb41c35832c2"],["Watch on YouTube","https://www.youtube.com/watch?v=mDIQSvGN7VM&t=25s"]]},
      items:[
        ["BUSINESS & PRODUCT DESIGN","ryu percussion","A percussion project implementing research into physical products, spanning planning, manufacturing, performance, sales, and branding. Products: Snare Drum, Snare Stand, Percussion Stands, Percussion Mallets."],
        ["ACADEMIC RESEARCH · 2025","Multifaceted Sonification of Riemann Zeta Zeros","An exploration into sonifying the non-trivial zeros of the Riemann Zeta function ζ(s), evaluating the perceptual validity and cognitive mapping of number-theoretic structures."],
        ["ACADEMIC RESEARCH · 2025","Quantitative Evaluation of the Physical Impacts of Snare Drum Components on Acoustic Characteristics","A study quantifying how key structural variables alter the timbre of a snare drum, forming a theoretical foundation for ryu percussion product design."],
        ["SOFTWARE & INTERACTIVE SYSTEMS · 2026","High-Dimensional Polyrhythmic Sequencer","An interactive system projecting high-dimensional symmetries such as the E_8 root system onto a 2D screen using geodesic interpolation on Grassmann manifolds and converting them into real-time sonification."],
        ["SOFTWARE & INTERACTIVE SYSTEMS · 2024","Mathematical Composition System","An algorithmic rhythm and acoustic generation system integrating stochastic processes such as Markov chains with statistical methods."],
        ["SOFTWARE & INTERACTIVE SYSTEMS","Automated Visualization Pipeline for Acoustic Signal Processing","A batch-processing pipeline that automatically visualizes FFT, PSD, Wavelet Transform and other acoustic analysis results to optimize research and development."],
        ["PERFORMANCE","Snare Solo / Snare × Piano / Experimental Percussion","Contemporary approaches using snare drum and piano, alongside avant-garde solo performance using everyday materials."],
        ["EDUCATIONAL DESIGN","Integrated STEAM & Gifted Education","An interdisciplinary educational model crossing mathematics, music, art, and programming, integrating STEAM and gifted education into creative multi-modal curricula."]
      ]
    },
    research:{
      title:"Questions<br>worth pursuing.",
      items:[
        ["Sonification of Analytic Number Theory","Investigating structural correspondence between mathematical functions and acoustic parameters to create new perceptual entry points into mathematical structures."],
        ["Cross-Modal Mapping of High-Dimensional Mathematical Structures","Projecting high-dimensional geometries such as E_8 onto a 2D plane through geodesic interpolation and dynamic rotation on Grassmann manifolds, generating visual and auditory representations together."],
        ["Algorithmic Composition & Mathematical Models","Developing compositional algorithms using stochastic music approaches associated with Xenakis, Markov chains, group theory, and non-Euclidean geometry."],
        ["Acoustic Physics & Instrument Design","Quantitatively evaluating the physical characteristics of percussion acoustics through experiments and simulation, then feeding those findings directly back into instrument design."]
      ]
    },
    contact:{
      title:"Let's make<br><em>something new.</em>",
      body:"For research inquiries, collaborative projects, or commissions in composition and performance, feel free to reach out via social media or email below."
    },
    footer:{back:"Back to top ↑"}
  }
};
