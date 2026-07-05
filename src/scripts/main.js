import { initHeroEntrance } from '../components/heroEntrance.js';
import { initHeroCursor } from '../components/heroCursor.js';
import { initCarouselTilt } from '../components/carouselTilt.js';
import { initAboutProgress } from '../components/aboutProgress.js';

const TRUECUT="/assets/img/img_005_e527539b6454.webp";
window.TRUE_COLORS=["/assets/img/img_006_236495991969.webp", "/assets/img/img_007_5f15a71ddffe.webp", "/assets/img/img_008_4d4ba266edb0.webp", "/assets/img/img_009_00adfb336e1b.webp", "/assets/img/img_010_bb47c1b51428.webp", "/assets/img/img_011_5377b9ee9acc.webp", "/assets/img/img_012_e3af9a549e53.webp", "/assets/img/img_013_a8c7cbfc2c80.webp", "/assets/img/img_014_99dd4b806f1f.webp", "/assets/img/img_015_9a3d9737541a.webp", "/assets/img/img_016_d60319b8a53d.webp", "/assets/img/img_017_76af74efa836.webp", "/assets/img/img_018_18c0686f78ee.webp", "/assets/img/img_019_56befcb04c51.webp", "/assets/img/img_020_54ff41ccb23c.webp", "/assets/img/img_021_03786481273d.webp", "/assets/img/img_022_01d7f1760eea.webp", "/assets/img/img_023_9f3000c826b9.webp", "/assets/img/img_024_f314bd9e0d00.webp", "/assets/img/img_025_fa590439f0a0.webp", "/assets/img/img_026_b57f99a0a381.webp", "/assets/img/img_027_7e3ef080e2a4.webp", "/assets/img/img_028_bb4a677d3718.webp", "/assets/img/img_029_0bf1f292499d.webp"];
window.TRUE_HATS=["/assets/img/img_030_b92a7e1db085.webp", "/assets/img/img_031_46082759a140.webp", "/assets/img/img_032_208725052002.webp", "/assets/img/img_033_31ab05f025e2.webp", "/assets/img/img_034_772617a249fb.webp", "/assets/img/img_035_e40f28858893.webp", "/assets/img/img_036_fc2cac85e84e.webp", "/assets/img/img_037_900fd5a01ccc.webp", "/assets/img/img_038_eca3912c2abd.webp", "/assets/img/img_039_4da37668f3ca.webp", "/assets/img/img_040_eff67453bbbf.webp"];
window.TRUE_GLASSES=["/assets/img/img_041_5606a999ee1a.webp", "/assets/img/img_042_321feffd9c50.webp", "/assets/img/img_043_3f6c9a1b1dd2.webp", "/assets/img/img_044_f71569b013bf.webp", "/assets/img/img_045_829ca72ed68a.webp", "/assets/img/img_046_01f8a257ffec.webp", "/assets/img/img_047_4a7b2af396f6.webp", "/assets/img/img_048_2a01ca9c4019.webp", "/assets/img/img_049_fae4ba1fa0b1.webp", "/assets/img/img_050_49cf5d03475d.webp", "/assets/img/img_051_c9ba7c8322ce.webp"];

/* ===== i18n ===== */
const I18N={
  hi:{ko:"Hello, I'm",en:"Hello, I'm"},
  more:{ko:"Read Now →",en:"Read Now →"},
  lp_eye:{ko:"시리즈를 고르세요",en:"Pick a series"},
  lp_hint:{ko:"드래그 · 스크롤 · 클릭으로 탐색",en:"Drag · scroll · click to explore"},
  back_ch:{ko:"← 시리즈",en:"← Series"},
  works:{ko:"작품",en:"Works"},
  d_inquire:{ko:"작품 문의",en:"Inquire"}, d_share:{ko:"공유",en:"Share"},
  aq_eye:{ko:"들어가 보세요",en:"Dive in"},
  aq_h:{ko:"트루를 만나요.",en:"Meet True."},
  aq_p:{ko:"금붕어 트루는 살아 있어요. 클릭하면 뽀뽀하고, 끌면 따라오고, 먹이를 주면 이야기를 들려줘요.",
        en:"True the goldfish is alive. Click for a kiss, drag to lead, and drop food to unlock a story."},
  aq_tip:{ko:"빈 곳을 눌러 밥을 주고, 팔레트의 트루를 눌러 친구를 추가하세요.",en:"Tap the water to feed, and tap a True from the palette to add a friend."},
  aq_reset:{ko:"↺ 전체 초기화",en:"↺ Reset"},
  aq_dl:{ko:"⬇ 사진 저장",en:"⬇ Save photo"},
  mk_label:{ko:"🎨 나만의 트루 만들기",en:"🎨 Make Your Own True"},
  mk_eye:{ko:"커스터마이즈",en:"Make your own"},
  mk_h:{ko:"나만의 트루",en:"My Own True"},
  mk_p:{ko:"트루를 터치해 색을 바꾸고, 아래 아이템으로 꾸며보세요.",en:"Tap True to change color, then dress it up with the items below."},
  mk_glasses:{ko:"🕶️ 선글라스",en:"🕶️ Glasses"}, mk_hat:{ko:"🧶 모자",en:"🧶 Hat"}, mk_scarf:{ko:"🧣 목도리",en:"🧣 Scarf"}, mk_cone:{ko:"🎉 꼬깔",en:"🎉 Party hat"},
  mk_color:{ko:"🎨 색 바꾸기",en:"🎨 Color"}, mk_dl:{ko:"⬇ 사진 저장",en:"⬇ Save photo"},
  mk_reset:{ko:"↺ 처음으로",en:"↺ Reset"},
  mk_tip:{ko:"트루를 터치하면 색이 바뀌어요",en:"Tap True to change its color"},
  ch_true_k:{ko:"금붕어 True",en:"Goldfish True"}, ch_love_k:{ko:"아기천사 Love",en:"Baby angel Love"},
  aq_tank:{ko:"🐟 트루의 어항 · 미니 게임",en:"🐟 True's Tank · Mini Game"},
  ch_eye:{ko:"캐릭터",en:"The characters"},
  ch_h:{ko:"트루 & 러브",en:"True & Love"},
  ch_body:{
    ko:`<p>[<span class="em">True Love</span>]는 오래 꿈꿔온 ‘진실된 사랑’에 대한 탐구에서 시작됐어요. 세상은 흔히 진정한 사랑을 의심하지만, 이 시리즈는 그 부정에도 꺾이지 않는 믿음을 담습니다.</p>
        <p>함께 등장하는 금붕어 ‘<span class="em">트루(True)</span>’와 아기천사 ‘<span class="em">러브(Love)</span>’는 각각 무한한 가능성과 순수한 시작을 상징해요. 사랑은 결핍 없는 완벽이 아니라, 서로의 불완전함을 있는 그대로 수용할 때 비로소 깊어집니다.</p>
        <p>본연을 직면하고, 결점을 포용하며, 상대를 있는 그대로 바라보는 태도 — 갈등 속에서 더 단단해질 때 비로소 ‘진정한 사랑’이 됩니다.</p>`,
    en:`<p>[<span class="em">True Love</span>] began with a long-held question about real love. The world often doubts that such love exists; this series holds a belief that does not bend to that doubt.</p>
        <p>The two who appear together — the goldfish ‘<span class="em">True</span>’ and the baby angel ‘<span class="em">Love</span>’ — stand for infinite possibility and a pure beginning. Love is not a flawless state without lack, but something that deepens only when we accept each other's imperfection as it is.</p>
        <p>Facing who we truly are, embracing flaws, seeing the other exactly as they are — when a bond grows stronger through its conflicts, it earns the name ‘true love'.</p>`
  },
  wo_eye:{ko:"작가 노트",en:"Artist note"},
  wo_h:{ko:"무한한 가능성을 품은 금붕어를 그립니다.",en:"I paint goldfish that hold infinite possibility."},
  wo_body:{
    ko:`<p class="lead">저는 금붕어 <span class="em">트루(True)</span>를 통해 삶 속에서 성장하는 과정을 그립니다.</p>
        <p>작은 어항에서는 <span class="em">5~15cm</span> 정도 자라지만, 넓은 호수에서는 <span class="em">40cm 그 이상</span>까지도 성장하는 금붕어의 생물학적 특징은 제 작업의 출발점이 되었습니다. 어떤 환경을 만나고 무엇을 경험하는지에 따라 전혀 다른 모습으로 성장할 수 있다는 사실은 저로 하여금 인간의 삶을 사유하게 만들었습니다.</p>
        <p>작품 속 트루(True)는 이러한 사유의 집약체입니다. 새로운 환경을 마주하고, 다양한 감정을 경험하며, 불안을 정화하고, 타인을 이해하며, 나 자신의 모습을 찾아갑니다. 이 여정은 내재되어 있는 <span class="em">무한한 가능성</span>을 상징하는 메타포이자, 작가적 자아의 확장입니다.</p>
        <p>결국 제가 추구하는 예술은 성장의 은유를 시각적으로 구현하는 것입니다.</p>`,
    en:`<p class="lead">Through the goldfish <span class="em">True</span>, I paint the process of growing within life.</p>
        <p>A goldfish grows to about <span class="em">5–15cm</span> in a small bowl, yet reaches <span class="em">40cm or more</span> in a wide lake — this biological trait became the starting point of my work. That the same creature can grow into an entirely different form depending on the environment it meets and what it experiences led me to reflect on human life.</p>
        <p>In my work, True is the crystallization of this thought. It faces new environments, feels many emotions, purifies anxiety, understands others, and finds its own self. This journey is a metaphor for the <span class="em">infinite possibility</span> within, and an extension of my artistic self.</p>
        <p>In the end, the art I pursue is a visual embodiment of the metaphor of growth.</p>`
  },
  exh_sub:{ko:"주요 전시",en:"Selected exhibitions"},
  lv_h1:{ko:"당신의 무한한 가능성을",en:"I'm cheering for your"},
  lv_h2:{ko:"응원합니다.",en:"infinite possibility!"},
  lv_sub:{ko:"트루와 러브가 당신의 방문을 기다리고 있어요. 작품·전시 문의는 언제든 환영입니다.",
          en:"True and Love are waiting for your visit. Artwork & exhibition inquiries are always welcome."},
  lv_inq:{ko:"작품 문의하기 →",en:"Inquire artwork →"},
  contact_h:{ko:"연락하기",en:"Get in touch"},
  contact_sub:{ko:"작품 구매·전시 문의를 보내주세요.",en:"For purchase or exhibition inquiries, write below."},
  f_name:{ko:"이름",en:"Name"}, f_email:{ko:"이메일",en:"Email"}, f_msg:{ko:"메시지",en:"Message"}, f_send:{ko:"보내기",en:"Send"},
  c_or:{ko:"또는 직접 연락하세요",en:"or reach out directly"},
  toast_copy:{ko:"링크를 복사했어요",en:"Link copied"}, inquire_pre:{ko:"작품 문의",en:"Artwork inquiry"}
};
let lang='ko';
function applyLang(l){ lang=l; document.documentElement.lang=l; document.getElementById('langBtn').textContent=l==='ko'?'EN':'KR';
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(I18N[k]) el.innerHTML=I18N[k][l]; }); }
document.getElementById('langBtn').addEventListener('click',()=>applyLang(lang==='ko'?'en':'ko'));

/* ===== series (5) + works ===== */
const NOTE={ko:"무한한 가능성을 향해 자라나는 트루의 한 장면. 어항의 한계를 끌어안으면서도 그 너머를 바라봅니다.",en:"A scene of True growing toward infinite possibility — embracing the bowl’s limit while looking beyond it."};
const SIZES=[""];
const SERIES=[{"key": "true", "name": "TRUE", "count": 2, "hex": "#FF7A2D", "fg": "#ffffff", "mood": {"ko": "시작 · 존재 · 자아", "en": "Origin · Being · Self"}, "desc": {"ko": "[True]는 금붕어 트루(True)가 다양한 세상을 항해하며 삶의 풍경을 마주하는 시리즈입니다. 변화하는 공간은 새로운 경험과 가능성을 상징하며, 트루의 여정은 우리 모두가 자신의 삶을 확장해 나가는 과정을 은유합니다.", "en": "[True] follows the goldfish True as it voyages through many worlds and meets the landscapes of life. Each changing space stands for new experience and possibility, and True's journey becomes a metaphor for how each of us expands our own life."}, "hero": "/assets/img/img_052_459b9b94e840.webp", "bg": "linear-gradient(rgba(6,6,10,.60),rgba(6,6,10,.72)), url('/assets/img/img_053_77007b54b9f4.webp') center/cover"}, {"key": "incarnate", "name": "True's Incarnate", "count": 2, "hex": "#8FD13A", "fg": "#ffffff", "mood": {"ko": "생명력 · 성장 · 변화", "en": "Vitality · Growth · Change"}, "desc": {"ko": "[True's Incarnate]는 트루가 더 깊은 교감과 다차원적인 감정을 경험하기 위해 물리적 형태를 뛰어넘어 인간의 모습을 취하는 과정을 담았습니다. 이는 단순한 외형의 변신이 아니라, 타인의 삶을 깊이 이해하고 자신의 내면을 한계 없이 확장하고자 하는 능동적인 성장의 상징입니다.", "en": "[True's Incarnate] captures True stepping beyond its physical form to take on a human shape, reaching for deeper connection and more dimensional emotion. It is not a mere change of appearance, but a symbol of active growth — a will to understand another's life deeply and to expand one's inner world without limit."}, "hero": "/assets/img/img_054_e5fa3c68a53e.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_055_13a524cd00a5.webp') center/cover"}, {"key": "luck", "name": "Good Luck Goldfish", "count": 17, "hex": "#2C6BFF", "fg": "#ffffff", "mood": {"ko": "희망 · 행운 · 가능성", "en": "Hope · Luck · Possibility"}, "desc": {"ko": "성장의 여정에는 필연적으로 불안과 두려움이 따릅니다. [Good Luck Goldfish]는 한국 전통의 액막이 명태에서 영감을 받아, 여정 속 부정적인 감정을 긍정과 희망으로 전환하는 수호의 상징으로 트루를 묘사합니다. 감정을 외면하지 않고 온전히 마주할 때 얻게 되는 마음의 힘을 이야기합니다.", "en": "Every journey of growth inevitably carries anxiety and fear. Inspired by the Korean tradition of the dried pollack hung to ward off misfortune, [Good Luck Goldfish] portrays True as a guardian that turns the negative feelings met along the way into hope and affirmation — the strength of heart we gain when we face our emotions fully rather than turning away."}, "hero": "/assets/img/img_056_5cd5749ea187.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_057_24fc1763931c.webp') center/cover"}, {"key": "love", "name": "True Love", "count": 4, "hex": "#FF4FA8", "fg": "#ffffff", "mood": {"ko": "감정 · 관계 · 공감", "en": "Emotion · Bond · Empathy"}, "desc": {"ko": "[True Love]는 진실된 사랑에 대한 믿음에서 출발한 시리즈입니다. 작품 속 트루(True)와 러브(Love)는 무한한 가능성과 순수한 마음을 상징하며, 서로의 불완전함을 있는 그대로 받아들일 때 사랑은 더욱 깊어진다는 메시지를 전합니다. 사랑 또한 이해를 통해 서로의 세계를 넓혀주는 또 하나의 ‘넓은 호수’임을 이야기합니다.", "en": "[True Love] begins from a belief in real, true love. The goldfish True and the baby angel Love stand for infinite possibility and a pure heart, carrying the message that love deepens when we accept each other's imperfection exactly as it is — another 'wide lake' that, through understanding, widens each other's world."}, "hero": "/assets/img/img_058_d1c3f2087d4d.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_059_695967732be8.webp') center/cover"}, {"key": "dreams", "name": "Dreams", "count": 5, "hex": "#19C3B0", "fg": "#ffffff", "mood": {"ko": "상상 · 꿈 · 치유", "en": "Imagination · Dream · Healing"}, "desc": {"ko": "[Dreams]는 사회 속에서 각자가 자신만의 색과 삶의 방향을 찾아가는 여정을 담은 시리즈입니다. 작품 속 금붕어들은 우리 모두를 상징하며, 서로 다른 꿈과 개성을 지닌 존재들이 함께 살아가는 세상을 그려냅니다. 각자의 자리에서 자신의 색을 잃지 않고 살아가는 것의 의미를 이야기합니다.", "en": "[Dreams] follows the journey of finding one's own color and direction of life within society. The goldfish here stand for all of us — beings with different dreams and personalities living together in one world — and speak of what it means to keep living without losing your own color, right where you are."}, "hero": "/assets/img/img_060_fc38e163e561.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_061_5bbf0485f0f1.webp') center/cover"}, {"key": "other", "name": "Other Works", "count": 12, "hex": "#9B5DE5", "fg": "#ffffff", "mood": {"ko": "확장 · 실험 · 이야기", "en": "Expansion · Experiment · Story"}, "desc": {"ko": "", "en": ""}, "hero": "/assets/img/img_062_a1415ea1046c.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_063_30101c66a5ff.webp') center/cover"}, {"key": "drawing", "name": "Drawing", "count": 9, "hex": "#FFB02E", "fg": "#ffffff", "mood": {"ko": "창작 · 실험 · 자유", "en": "Creation · Experiment · Freedom"}, "desc": {"ko": "", "en": ""}, "hero": "/assets/img/img_064_4fa82807cad8.webp", "bg": "linear-gradient(rgba(8,8,12,.30),rgba(8,8,12,.46)), url('/assets/img/img_065_edd0243de053.webp') center/cover"}];const WORKS=[{"series": "true", "seriesName": "TRUE", "hex": "#FF7A2D", "t": "TRUE 01", "y": 2025, "size": "25×25cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_066_f0ec5678b8c0.webp", "status": "sold"}, {"series": "true", "seriesName": "TRUE", "hex": "#FF7A2D", "t": "TRUE 02", "y": 2026, "size": "25×25cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_052_459b9b94e840.webp", "status": "sold"}, {"series": "incarnate", "seriesName": "True's Incarnate", "hex": "#8FD13A", "t": "True's Incarnate 01", "y": 2025, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_054_e5fa3c68a53e.webp", "status": "available"}, {"series": "incarnate", "seriesName": "True's Incarnate", "hex": "#8FD13A", "t": "True's Incarnate 02", "y": 2026, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_067_94fecdea0547.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 01", "y": 2025, "size": "22.7×15.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_068_230f77bd5c03.webp", "status": "sold"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 02", "y": 2025, "size": "22.7×15.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_069_7e6ba256949d.webp", "status": "sold"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 03", "y": 2025, "size": "22.7×15.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_070_2876638901a7.webp", "status": "sold"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 04", "y": 2025, "size": "22.7×15.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_071_4264e82650ef.webp", "status": "sold"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 05", "y": 2025, "size": "22.7×15.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_072_a30c046d2af7.webp", "status": "sold"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 06", "y": 2025, "size": "91×116.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_073_d841025980fa.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 07", "y": 2025, "size": "91×116.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_074_c9f7a32f2bf8.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 08", "y": 2025, "size": "45.5×53cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_075_4780b26cc6c5.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 09", "y": 2025, "size": "45.5×53cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_076_852869f1d33e.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 10", "y": 2025, "size": "45.5×53cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_077_4d5c08f96fb4.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 11", "y": 2025, "size": "45.5×53cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_078_8c0b2e641be4.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "The Beginning of Good Luck Goldfish", "y": 2025, "size": "162.2×130.3cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_056_5cd5749ea187.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 13", "y": 2025, "size": "72.7×90.9cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_079_3d40fff69285.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 14", "y": 2026, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_080_92cfa0948543.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 15", "y": 2026, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_081_fb12b9dad6e3.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 16", "y": 2026, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_082_be5d40df6777.webp", "status": "available"}, {"series": "luck", "seriesName": "Good Luck Goldfish", "hex": "#2C6BFF", "t": "Good Luck Goldfish 17", "y": 2026, "size": "40.9×31.8cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_083_8786a77cf944.webp", "status": "available"}, {"series": "love", "seriesName": "True Love", "hex": "#FF4FA8", "t": "Love", "y": 2026, "size": "100×80.3cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_058_d1c3f2087d4d.webp", "status": "available"}, {"series": "love", "seriesName": "True Love", "hex": "#FF4FA8", "t": "Love hugs True", "y": 2024, "size": "116.8×91cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_084_79cc33c898ec.webp", "status": "sold"}, {"series": "love", "seriesName": "True Love", "hex": "#FF4FA8", "t": "True", "y": 2026, "size": "100×80.3cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_085_ff9d924c1c93.webp", "status": "available"}, {"series": "love", "seriesName": "True Love", "hex": "#FF4FA8", "t": "True hugs Love", "y": 2024, "size": "116.8×91cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_086_ec80d7ad7821.webp", "status": "available"}, {"series": "dreams", "seriesName": "Dreams", "hex": "#19C3B0", "t": "The Path to Dreams", "y": 2025, "size": "162.2×130.3cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_060_fc38e163e561.webp", "status": "available"}, {"series": "dreams", "seriesName": "Dreams", "hex": "#19C3B0", "t": "Time for Dreams 01", "y": 2024, "size": "90.9×72.7cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_087_303582dbbaaf.webp", "status": "available"}, {"series": "dreams", "seriesName": "Dreams", "hex": "#19C3B0", "t": "Time for Dreams 02", "y": 2024, "size": "90.9×72.7cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_088_228c27b92fc8.webp", "status": "available"}, {"series": "dreams", "seriesName": "Dreams", "hex": "#19C3B0", "t": "Time for Dreams 03", "y": 2024, "size": "90.9×72.7cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_089_0b132a03c502.webp", "status": "available"}, {"series": "dreams", "seriesName": "Dreams", "hex": "#19C3B0", "t": "내가 잠든 사이에", "y": 2024, "size": "116.8×91cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_090_d270d6b046ca.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "Angel Baby", "y": 2025, "size": "45.5×37.9cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_062_a1415ea1046c.webp", "status": "sold"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "Dreams come True", "y": 2025, "size": "25.8×17.9cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_091_52a81e14b427.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "Dreams come True", "y": 2025, "size": "25.8×17.9cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_092_de7d2282eb88.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "Dear, Flower", "y": 2024, "size": "72.7×90.9cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_093_5e6ee6d96e8c.webp", "status": "sold"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "To.", "y": 2025, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_094_0b87556e21e0.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 01", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_095_04efa956a905.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 02", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_096_d029af368843.webp", "status": "sold"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 03", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_097_4a025e41594f.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 04", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_098_6d6f9a7590aa.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 05", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_099_1088340d6195.webp", "status": "available"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "True's Favorite 06", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_100_1bb95e03f317.webp", "status": "sold"}, {"series": "other", "seriesName": "Other Works", "hex": "#9B5DE5", "t": "네가 행복했으면 좋겠어", "y": 2024, "size": "72.7×60.6cm", "medium": "Acrylic on Canvas", "img": "/assets/img/img_101_b47ab99a40fd.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.06", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_102_9ac21304fe61.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.07", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_064_4fa82807cad8.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.08", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_103_b4b4ae60aba2.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.09", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_104_a9804626bb9d.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.10", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_105_52ad3819a2e1.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.11", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_106_8bce449f3b79.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.17", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_107_fbcce38edaf5.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.18", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_108_f23684517729.webp", "status": "available"}, {"series": "drawing", "seriesName": "Drawing", "hex": "#FFB02E", "t": "2026.05.19", "y": 2026, "size": "29.7×21cm", "medium": "Oil pastel on Paper", "img": "/assets/img/img_109_0cdc79fe4085.webp", "status": "available"}];
const SMETA={}; SERIES.forEach(s=>SMETA[s.key]=s);


/* ===== goldfish cursor ===== */
const cur=document.getElementById('cur');
let mX=innerWidth/2,mY=innerHeight/2,lastX=mX;
addEventListener('pointermove',e=>{ mX=e.clientX; mY=e.clientY;
  const dir=(mX<lastX)?-1:1; lastX=mX;
  cur.style.transform=`translate(${mX-17}px,${mY-14}px) scaleX(${dir})`;
  heroDistort(); },{passive:true});
document.addEventListener('pointerover',e=>{ if(e.target.closest('a,button,.lp-card,.wcard,input,textarea,.aqua-fish')) cur.classList.add('big'); });
document.addEventListener('pointerout',e=>{ if(e.target.closest('a,button,.lp-card,.wcard,input,textarea,.aqua-fish')) cur.classList.remove('big'); });

/* ===== hero water distortion (dramatic; mouse refracts FIAYOON) ===== */
const waterDisp=document.getElementById('waterDisp');
let dispBoost=0, dispT=0;
const _reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
function heroDistort(){ if(current==='hello'&&waterDisp) dispBoost=6; }
// Recomputing an feDisplacementMap every frame is GPU-costly, so we only
// run it while the hero is actually on screen, and skip it entirely under
// prefers-reduced-motion (the SVG keeps a gentle static displacement).
if(!_reduceMotion){
  setInterval(()=>{ if(!waterDisp||current!=='hello') return; dispT+=0.03; dispBoost*=0.93;
    const base=8+Math.sin(dispT)*2.5; waterDisp.setAttribute('scale',(base+dispBoost).toFixed(1)); },50);
} else if(waterDisp){ waterDisp.setAttribute('scale','4'); }

/* ===== router with circle wipe ===== */
const views={hello:'v-hello',about:'v-about',gallery:'v-gallery',series:'v-series',detail:'v-detail',contact:'v-contact',aquarium:'v-aquarium'};
const SECTION_COLOR={hello:'#F4B81E',about:'#EC2E7B',gallery:'#2545D8',contact:'#1F9E55'};
let current='hello',busy=false;
const wipe=document.getElementById('wipe'),wc=document.getElementById('wc');

/* ===== single controllable page background (crossfade) ===== */
const pagebg=document.getElementById('pagebg'),pagebg2=document.getElementById('pagebg2');
let pgCur='var(--hero-pop)';
const PG={ hello:'var(--hero-pop)', about:'var(--about-pop)', contact:'var(--hero-pop)', aquarium:'#0f2f45' };
const ART_BG='#FCFBF8';
function pageBgFor(id){
  if(id==='gallery'||id==='series'||id==='detail') return ART_BG;
  return PG[id]||'var(--hero-pop)';
}
const bgfx=document.getElementById('pagebgfx');
function setFx(hex){ if(!hex) return; bgfx.style.setProperty('--fx',hex); bgfx.classList.remove('pop'); void bgfx.offsetWidth; bgfx.classList.add('pop'); }
function setPageBG(css,animate){
  if(css===pgCur) return;
  if(animate===false){ pagebg.style.background=css; pgCur=css; pagebg2.style.opacity='0'; return; }
  pagebg2.style.background=css; pagebg2.style.opacity='1';
  clearTimeout(setPageBG._t);
  setPageBG._t=setTimeout(()=>{ pagebg.style.background=css; pagebg2.style.opacity='0'; pgCur=css; },560);
}
function setReveal(v,on){ v.querySelectorAll('[data-reveal]').forEach((el,i)=>{ el.style.transitionDelay=on?(40+i*45)+'ms':'0ms'; el.classList.toggle('in',on); }); }
function setNav(id){ const map={about:'about',gallery:'gallery',series:'gallery',detail:'gallery',contact:'contact',aquarium:'aquarium'};
  document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on', b.dataset.go===map[id])); }
function themeColor(id){
  if(id==='gallery') return (SERIES[lp.idx]&&SERIES[lp.idx].hex)||'var(--hero-pop)';
  if(id==='series') return (SMETA[curSeries]&&SMETA[curSeries].hex)||'var(--hero-pop)';
  if(id==='detail') return (WORKS[dCur]&&WORKS[dCur].hex)||'var(--hero-pop)';
  return pageBgFor(id);
}
function go(id,ev){ if(id===current||busy) return; busy=true;
  const color=themeColor(id), ox=ev&&ev.clientX?ev.clientX:innerWidth/2, oy=ev&&ev.clientY?ev.clientY:innerHeight*0.5;
  const diag=Math.hypot(innerWidth,innerHeight),scale=(2.3*diag)/46;
  wc.style.background=color; wc.style.left=ox+'px'; wc.style.top=oy+'px';
  wc.style.transition='none'; wc.style.transform='translate(-50%,-50%) scale(0)'; wc.style.opacity='1'; wipe.style.visibility='visible';
  requestAnimationFrame(()=>{ wc.style.transition='transform .42s cubic-bezier(.65,0,.35,1)'; wc.style.transform=`translate(-50%,-50%) scale(${scale})`; });
  setTimeout(()=>{ const prev=document.getElementById(views[current]),next=document.getElementById(views[id]);
    setReveal(prev,false); prev.classList.remove('active'); next.classList.add('active'); current=id;
    setPageBG(pageBgFor(id),false);
    var _art=(id==='gallery'||id==='series'||id==='detail');
    bgfx.style.opacity=_art?'1':'0';
    if(_art){ setFx(id==='gallery'?SERIES[lp.idx].hex:(id==='detail'?WORKS[dCur].hex:SMETA[curSeries].hex)); }
    document.getElementById('pagebg').classList.toggle('fx-on',_art); document.getElementById('pagebg2').classList.toggle('fx-on',_art);
    setNav(id); cur.style.opacity=1;
    if(id==='about'){ next.scrollTop=0; abReveal(); if(next._refreshProgress) next._refreshProgress(); }
    if(id==='aquarium'){ aqua.start(); ensureAqua3D().then(a=>{ if(current==='aquarium') a.start(); }); } else { aqua.stop(); aqua3d.stop(); }
    if(id==='gallery') lp.layout(true);
    if(id==='detail'){ var _da=document.querySelector('#v-detail .d-art'); if(_da){ _da.classList.remove('pin'); void _da.offsetWidth; _da.classList.add('pin'); } }
    setTimeout(()=>setReveal(next,true),60);
    wc.style.transition='opacity .4s ease'; wc.style.opacity='0';
    setTimeout(()=>{ wipe.style.visibility='hidden'; wc.style.opacity='1'; busy=false; },420);
  },430);
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',e=>go(b.dataset.go,e)));
document.getElementById('moreBtn').addEventListener('click',e=>go('gallery',e));

/* ===== ARTWORK LP carousel ===== */
const lpStage=document.getElementById('lpStage'),lpDots=document.getElementById('lpDots');
const lp={ idx:0, cards:[], n:SERIES.length,
  build(){ lpStage.innerHTML=''; lpDots.innerHTML=''; this.cards=[];
    SERIES.forEach((s,i)=>{ const c=document.createElement('div'); c.className='lp-card'+(s.dark?' dark':'');
      c.style.setProperty('--cc',s.hex); c.style.setProperty('--grad',s.grad);
      c.innerHTML=`<div class="lp-bg"></div>${s.hero?`<img class="lp-img" src="${s.hero}" alt="${s.name}" loading="lazy" decoding="async">`:''}
        <div class="lp-label"><span class="lp-no">${String(i+1).padStart(2,'0')}.</span><span class="lp-name">${s.name}</span></div>
        <div class="lp-enter">→</div>`;
      c.addEventListener('click',e=>{ if(i===this.idx) openSeries(s.key,e); else this.go(i); });
      lpStage.appendChild(c); this.cards.push(c);
      const d=document.createElement('button'); d.addEventListener('click',()=>this.go(i)); lpDots.appendChild(d);
    });
    this.layout(false);
  },
  layout(animate){ this.cards.forEach((c,i)=>{ let o=i-this.idx;
      // wrap to nearest
      if(o> this.n/2) o-=this.n; if(o< -this.n/2) o+=this.n;
      const ax=Math.abs(o);
      let x,scale,rotY,z,op,tz;
      if(o===0){ x=0; scale=1; rotY=0; z=30; op=1; tz=60; }
      else if(o>0){ x=46+ (o-1)*9; scale=.82-(o-1)*.08; rotY=-26; z=20-o; op=o<=2?1:0; tz=-120*o; }
      else { x=-120+(o+1)*9; scale=.82-(ax-1)*.08; rotY=26; z=20-ax; op=o>=-1?.55:0; tz=-120*ax; }
      c.style.transition=animate?'transform .72s cubic-bezier(.22,.61,.36,1),opacity .55s ease':'none';
      // translateZ gives genuine perspective recession (not just scale),
      // so off-center cards physically sit deeper in the scene.
      c.style.setProperty('--tz', tz+'px');
      if(o===0){
        // centered card composes the pointer-tilt vars (set by carouselTilt.js)
        c.style.transform=`translate(-50%,-50%) translateX(${x}%) translateZ(${tz}px) scale(${Math.max(scale,.5)}) rotateY(calc(${rotY}deg + var(--tiltY,0deg))) rotateX(var(--tiltX,0deg))`;
      } else {
        c.style.setProperty('--tiltX','0deg'); c.style.setProperty('--tiltY','0deg');
        c.style.transform=`translate(-50%,-50%) translateX(${x}%) translateZ(${tz}px) scale(${Math.max(scale,.5)}) rotateY(${rotY}deg)`;
      }
      c.style.zIndex=z; c.style.opacity=op; c.style.pointerEvents=op>0?'auto':'none';
      c.classList.toggle('center', o===0);
    });
    [...lpDots.children].forEach((d,i)=>d.classList.toggle('on',i===this.idx));
    const s=SERIES[this.idx]; document.documentElement.style.setProperty('--lpaccent',s.hex);
    document.documentElement.style.setProperty('--lpfg','#15130E');
    if(current==='gallery') setFx(s.hex);
  },
  go(i){ this.idx=(i%this.n+this.n)%this.n; this.layout(true); },
  next(){ this.go(this.idx+1); }, prev(){ this.go(this.idx-1); }
};
document.getElementById('lpNext').addEventListener('click',()=>lp.next());
document.getElementById('lpPrev').addEventListener('click',()=>lp.prev());
let wheelLock=false,wheelEndT=0;
document.getElementById('v-gallery').addEventListener('wheel',e=>{ if(current!=='gallery')return; e.preventDefault();
  clearTimeout(wheelEndT); wheelEndT=setTimeout(()=>{ wheelLock=false; },200); // release only after the gesture (and its momentum) stops
  if(wheelLock) return;
  if(Math.abs(e.deltaY)<6 && Math.abs(e.deltaX)<6) return; // ignore tiny jitter
  wheelLock=true;
  (e.deltaY>0||e.deltaX>0)?lp.next():lp.prev(); },{passive:false});
// drag
let dragX=null;
lpStage.addEventListener('pointerdown',e=>{ dragX=e.clientX; });
addEventListener('pointerup',e=>{ if(dragX===null)return; const dx=e.clientX-dragX; if(Math.abs(dx)>54){ dx<0?lp.next():lp.prev(); } dragX=null; });
addEventListener('keydown',e=>{ if(current==='gallery'){ if(e.key==='ArrowRight')lp.next(); if(e.key==='ArrowLeft')lp.prev(); if(e.key==='Enter')openSeries(SERIES[lp.idx].key); } });

/* ===== series page ===== */
let curSeries=SERIES[0].key;
const worksGrid=document.getElementById('worksGrid');
function buildSeries(){ const s=SMETA[curSeries]; const V=document.getElementById('v-series'); V.style.setProperty('--theme',s.hex);
  document.documentElement.style.setProperty('--curfg', '#15130E');
  document.getElementById('siTitle').textContent=s.name;
  document.getElementById('siTag').textContent=s.count+' Works';
  document.getElementById('siMood').textContent=s.mood[lang];
  { const _sd=document.getElementById('siDesc'); _sd.textContent=s.desc[lang]||''; _sd.style.display=(s.desc[lang]&&s.desc[lang].trim())?'':'none'; }
  document.getElementById('siCount').textContent=s.count+(lang==='ko'?'점':' pieces');
  const hero=document.getElementById('siHero'); hero.innerHTML=s.hero?`<img src="${s.hero}" alt="${s.name}" loading="lazy" decoding="async">`:`<div class="ph">✦</div>`;
  worksGrid.innerHTML='';
  WORKS.map((w,gi)=>({...w,gi})).filter(w=>w.series===curSeries).forEach((w,ix)=>{
    const b=document.createElement('button'); b.className='wcard'; b.style.animationDelay=(ix*42)+'ms';
    const badge=w.status==='sold'?`<span class="sold">SOLD</span>`:'';
    const f=w.img?`<div class="wf">${badge}<img src="${w.img}" alt="${w.t}" loading="lazy" decoding="async"></div>`:`<div class="wf"><div class="ph">✦</div></div>`;
    b.innerHTML=`${f}<div class="wt">${w.t}</div><div class="wy">${w.y} · ${w.medium}</div>${w.size?`<div class="wsz">${w.size}</div>`:''}`;
    b.addEventListener('click',e=>openDetail(w.gi,e)); worksGrid.appendChild(b);
  });
}
function openSeries(key,ev){ curSeries=key; buildSeries(); go('series',ev); }

/* ===== detail ===== */
let dCur=0;
const dImg=document.getElementById('dImg'),dSeries=document.getElementById('dSeries'),dTtl=document.getElementById('dTtl'),dSpec=document.getElementById('dSpec'),dNote=document.getElementById('dNote');
function fillDetail(gi){ const w=WORKS[gi]; dCur=gi; document.getElementById('v-detail').style.setProperty('--theme',w.hex);
  dSeries.textContent=w.seriesName; dTtl.textContent=w.t;
  const L={Year:{ko:'연도',en:'Year'},Medium:{ko:'매체',en:'Medium'},Size:{ko:'크기',en:'Size'},Status:{ko:'상태',en:'Status'}};
  const ST={available:{ko:'판매 가능',en:'Available'},sold:{ko:'판매 완료',en:'Sold'}};
  const st=w.status?(ST[w.status]||{ko:w.status,en:w.status}):null;
  dSpec.innerHTML=`<div class="row"><span class="k">${L.Year[lang]}</span><span>${w.y}</span></div><div class="row"><span class="k">${L.Medium[lang]}</span><span>${w.medium||'Acrylic on Canvas'}</span></div>${w.size?`<div class="row"><span class="k">${L.Size[lang]}</span><span>${w.size}</span></div>`:''}${st?`<div class="row"><span class="k">${L.Status[lang]}</span><span>${st[lang]}</span></div>`:''}`;
  dNote.textContent=''; dNote.style.display='none';
  if(w.img){ dImg.style.display='block'; dImg.src=w.img; dImg.alt=w.t; } else dImg.style.display='none';
  const art=document.querySelector('#v-detail .d-art'); if(art){ art.classList.remove('pin'); void art.offsetWidth; art.classList.add('pin'); }
}
function openDetail(gi,ev){ fillDetail(gi); go('detail',ev); }
function stepDetail(d){ const inS=WORKS.map((w,i)=>i).filter(i=>WORKS[i].series===WORKS[dCur].series);
  let p=inS.indexOf(dCur); p=(p+d+inS.length)%inS.length; fillDetail(inS[p]);
  const v=document.getElementById('v-detail'); setReveal(v,false); setTimeout(()=>setReveal(v,true),30); }
document.getElementById('dPrev').addEventListener('click',()=>stepDetail(-1));
document.getElementById('dNext').addEventListener('click',()=>stepDetail(1));
document.getElementById('dBack').addEventListener('click',e=>go('series',e));
document.getElementById('dInquire').addEventListener('click',e=>{ const w=WORKS[dCur]; go('contact',e);
  setTimeout(()=>{ const m=document.getElementById('cMsg'); m.value=`[${I18N.inquire_pre[lang]}] ${w.t} — ${w.seriesName} (${w.y}, ${w.medium}, ${w.size})\n\n`; },360); });
document.getElementById('dShare').addEventListener('click',()=>doShare(WORKS[dCur]));
addEventListener('keydown',e=>{ if(current==='detail'){ if(e.key==='ArrowRight')stepDetail(1); if(e.key==='ArrowLeft')stepDetail(-1); if(e.key==='Escape')go('series'); } });

/* ===== exhibitions data ===== */
const EXH=[
  {yr:'2026',groups:[{t:{ko:'개인전',en:'Solo'},items:[{dt:'2026. 02.',v:'Artewith Gallery Cheongdam',a:'14, Yeongdong-daero 131-gil, Gangnam-gu, Seoul'}]}]},
  {yr:'2025',groups:[
    {t:{ko:'개인전',en:'Solo'},items:[{dt:'2025. 01.–04.',v:'Schedule Seongsu',a:'104, Achasan-ro, Seongdong-gu, Seoul'}]},
    {t:{ko:'단체전',en:'Group'},items:[{dt:'2025. 08.',v:'Artewith Gallery Cheongdam',a:'14, Yeongdong-daero 131-gil, Gangnam-gu, Seoul'},{dt:'2025. 12.',v:'Gallery Gaudium',a:'77, Seongsuil-ro, Seongdong-gu, Seoul'}]}]},
  {yr:'2024',groups:[
    {t:{ko:'단체전',en:'Group'},items:[{dt:'2024. 11.',v:'Artewith Gallery Cheongdam',a:'14, Yeongdong-daero 131-gil, Gangnam-gu, Seoul'},{dt:'2024. 10.',v:'Eunhasu Seoul Gallery',a:'50, Bongeunsa-ro 105-gil, Gangnam-gu, Seoul'}]}]},
];
function buildExh(elId){ const wrap=document.getElementById(elId); wrap.innerHTML='';
  EXH.forEach(y=>{ const yb=document.createElement('div'); yb.className='year-block';
    let g=''; y.groups.forEach(gr=>{ let it=''; gr.items.forEach(i=>{ it+=`<div class="ex-item"><div class="l1"><span class="dt">${i.dt}</span>${i.v}</div><div class="l2">${i.a}</div></div>`; });
      g+=`<div class="ex-group"><div class="gt">${gr.t[lang]}</div>${it}</div>`; });
    yb.innerHTML=`<div class="yr">${y.yr}</div><div>${g}</div>`; wrap.appendChild(yb);
  });
}

/* ===== about reveal + closing stars ===== */
function abRevealInView(){ const v=document.getElementById('v-about'); if(!v) return;
  const vr=v.getBoundingClientRect(), vh=v.clientHeight;
  v.querySelectorAll('[data-ar]').forEach(el=>{ const r=el.getBoundingClientRect(); if(r.top-vr.top < vh*0.9) el.classList.add('in'); });
}
function abReveal(){ const v=document.getElementById('v-about'); if(!v) return;
  v.querySelectorAll('[data-ar]').forEach(el=>el.classList.remove('in'));
  requestAnimationFrame(()=>{ abRevealInView(); requestAnimationFrame(abRevealInView); });
}
(function(){ const v=document.getElementById('v-about'); if(v) v.addEventListener('scroll',abRevealInView,{passive:true}); })();

/* ===== scroll-depth parallax (About) + hero pointer depth ===== */
(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const v=document.getElementById('v-about');
  if(v){ const bg=v.querySelector('.ab-bg'); const orbs=[...v.querySelectorAll('.ab-orb')]; let tick=false;
    function upd(){ tick=false; const s=v.scrollTop;
      if(bg) bg.style.transform='translate3d(0,'+(s*0.05).toFixed(1)+'px,0)';
      orbs.forEach(o=>{ const k=parseFloat(o.dataset.par)||0.1; o.style.transform='translate3d(0,'+(-s*k).toFixed(1)+'px,0)'; }); }
    v.addEventListener('scroll',()=>{ if(!tick){ tick=true; requestAnimationFrame(upd); } },{passive:true}); upd();
  }
  const fw=document.getElementById('fishWindow'), stage=document.querySelector('.hero-stage');
  let hx=0,hy=0,tx=0,ty=0,active=false;
  function hloop(){ hx+=(tx-hx)*0.06; hy+=(ty-hy)*0.06;
    if(fw) fw.style.transform='translate3d('+(hx*14).toFixed(2)+'px,'+(hy*11).toFixed(2)+'px,0) scale(1.03)';
    if(stage) stage.style.transform='translate3d('+(hx*-7).toFixed(2)+'px,'+(hy*-5).toFixed(2)+'px,0)';
    if(active||Math.abs(hx-tx)>0.001||Math.abs(hy-ty)>0.001) requestAnimationFrame(hloop); else running2=false; }
  let running2=false;
  addEventListener('pointermove',e=>{ if(typeof current!=='undefined'&&current!=='hello') return; active=true;
    tx=(e.clientX/innerWidth-0.5)*2; ty=(e.clientY/innerHeight-0.5)*2; if(!running2){ running2=true; requestAnimationFrame(hloop); } },{passive:true});
  addEventListener('pointerleave',()=>{ active=false; tx=0; ty=0; });
})();

const abObserver=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ e.target.querySelectorAll('[data-ar]').forEach((el,i)=>{ el.style.transitionDelay=(i*70)+'ms'; el.classList.add('in'); }); } }); },{threshold:.18});
document.querySelectorAll('.ab-sec').forEach(s=>abObserver.observe(s));
// closing stars
(function(){ const w=document.getElementById('loveStars'); if(!w) return; let h='';
  for(let i=0;i<90;i++){ const s=(Math.random()<.15?2.5:1)+Math.random()*1.8;
    h+=`<i style="left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s}px;animation-delay:${Math.random()*3}s;animation-duration:${2+Math.random()*3}s"></i>`; }
  for(let k=0;k<5;k++){ const down=Math.random()<.5; const a=down?(18+Math.random()*26):(150+Math.random()*22);
    const d=480+Math.random()*380, left=8+Math.random()*82, top=4+Math.random()*32, dur=5.5+Math.random()*4, delay=Math.random()*8;
    h+=`<span class="shoot" style="left:${left}%;top:${top}%;--a:${a}deg;--d:${d}px;animation:shootfly ${dur}s ease-in ${delay}s infinite"></span>`; }
  h+='<div class="space-obj planet-a"></div><div class="space-obj planet-b"></div><div class="space-obj earth"></div><div class="space-obj moon"></div>';
  w.innerHTML=h; })();

/* ===== TRUE AQUARIUM (interactive) ===== */
const aqua=(function(){
  const section=document.getElementById('ab-aqua');
  const canvas=document.getElementById('aquaCanvas'),fishEl=document.getElementById('aquaFish'),unlock=document.getElementById('aquaUnlock');
  const palette=document.getElementById('aqPalette');
  const COLORS=(window.TRUE_COLORS||[]);
  const RESIDENT=(typeof TRUECUT!=='undefined')?TRUECUT:(fishEl.querySelector('img')?fishEl.querySelector('img').src:'');
  const STORIES={ko:[
    "\ud2b8\ub8e8\ub294 \u2018\ubb34\ud55c\ud55c \uac00\ub2a5\uc131\u2019\uc744 \uc0c1\uc9d5\ud558\ub294 \uae08\ubd95\uc5b4\uc608\uc694.",
    "\uc5b4\ud56d\uc774 \ud074\uc218\ub85d \uae08\ubd95\uc5b4\ub294 \ub354 \ud06c\uac8c \uc790\ub780\ub300\uc694.",
    "\ub2c8\uccb4\uc758 \u2018\uc544\ubaa8\ub974 \ud30c\ud2f0\u2019 \u2014 \uc6b4\uba85\uc744 \uc0ac\ub791\ud558\ub77c.",
    "\ud2b8\ub8e8\ub294 \uc5b8\uc820\uac00 \uc778\uac04\uc73c\ub85c \ud654\uc2e0(incarnate)\ud574\uc694.",
    "\uc791\uac00\ub294 \uc784\uc0c1\ubbf8\uc220\uce58\ub8cc\ub97c \uacf5\ubd80\ud558\uace0 \uc788\uc5b4\uc694.",
    "\ub2f9\uc2e0 \uc548\uc758 \uc7a0\uc7ac\ub825\ub3c4, \ubd84\uba85\ud788 \uc790\ub77c\uace0 \uc788\uc5b4\uc694." ],
    en:[ "True is a goldfish that stands for \u2018infinite possibility'.",
    "A goldfish grows larger when its bowl is larger.",
    "Nietzsche's amor fati \u2014 love your fate.",
    "One day, True incarnates into a human.",
    "The artist studies clinical art therapy.",
    "Your potential, too, is surely growing." ]};
  let running=false,raf=0,fx=innerWidth*.5,fy=innerHeight*.52,tx=fx,ty=fy,facing=1,
      dragging=false,follow=false,clicks=0,clickT=0,unlocked=0,pellets=[],lastBub=0,mood='idle',moodT=0;
  let added=[],builtPalette=false;
  function rndStory(){ const arr=STORIES[lang]; unlock.textContent=arr[Math.min(unlocked,arr.length-1)]; unlocked=Math.min(unlocked+1,arr.length); }
  function loadImg(src){ return new Promise(res=>{ if(!src){res(null);return;} const i=new Image(); i.onload=()=>res(i); i.onerror=()=>res(null); i.src=src; }); }
  function bubble(x,y){ const b=document.createElement('div'); b.className='bubble'; const s=5+Math.random()*9;
    b.style.cssText=`width:${s}px;height:${s}px;left:${x}px;top:${y}px`; canvas.appendChild(b);
    const dur=900+Math.random()*900,rise=60+Math.random()*80,drift=(Math.random()-.5)*40;
    b.animate([{transform:'translate(0,0)',opacity:.9},{transform:`translate(${drift}px,${-rise}px)`,opacity:0}],{duration:dur,easing:'ease-out'}).onfinish=()=>b.remove(); }
  function heart(x,y,c){ const h=document.createElement('div'); h.className='heartpop'; h.textContent=c; h.style.left=x+'px'; h.style.top=y+'px'; canvas.appendChild(h); setTimeout(()=>h.remove(),1000); }
  function setMood(m,dur){ mood=m; moodT=performance.now()+dur; }
  // ---- palette of colored True ----
  function buildPalette(){ if(builtPalette||!palette) return; builtPalette=true;
    const list=COLORS.length?COLORS:[RESIDENT];
    const track=document.getElementById('aqTrack'), dotsW=document.getElementById('aqDots');
    const PER=6, pages=Math.max(1,Math.ceil(list.length/PER)); let page=0;
    function render(){ track.innerHTML=''; list.slice(page*PER,page*PER+PER).forEach(src=>{ const b=document.createElement('button'); b.type='button'; b.className='aq-thumb'; b.innerHTML=`<img src="${src}" alt="" loading="lazy" decoding="async">`; b.addEventListener('click',()=>addFish(src)); track.appendChild(b); });
      [...dotsW.children].forEach((d,i)=>d.classList.toggle('on',i===page)); }
    dotsW.innerHTML=''; for(let i=0;i<pages;i++){ const d=document.createElement('span'); d.className='aq-dot'; const idx=i; d.addEventListener('click',()=>{ page=idx; render(); }); dotsW.appendChild(d); }
    const pv=document.getElementById('aqPrev'), nx=document.getElementById('aqNext');
    if(pv) pv.addEventListener('click',()=>{ page=(page-1+pages)%pages; render(); });
    if(nx) nx.addEventListener('click',()=>{ page=(page+1)%pages; render(); });
    render(); }
  function addFish(src){ const el=document.createElement('div'); el.className='aqua-add';
    const sz=54+Math.random()*46; el.style.width=sz+'px'; el.innerHTML=`<img src="${src}" alt="True">`;
    const W=section.clientWidth,H=section.clientHeight;
    const o={el,x:40+Math.random()*Math.max(80,W-120),y:H*(.32+Math.random()*.44),v:.3+Math.random()*.55,dir:Math.random()<.5?-1:1,ph:Math.random()*6,sz,src};
    o.el.style.transform=`translate(${o.x}px,${o.y}px) scaleX(${o.dir})`;
    canvas.appendChild(el); added.push(o);
    el.animate([{opacity:0,filter:'brightness(1.6)'},{opacity:1,filter:'brightness(1)'}],{duration:340,easing:'ease-out'});
    heart(o.x+sz/2,o.y,'\u2728');
    el.addEventListener('pointerdown',ev=>{ ev.stopPropagation(); removeFish(o); }); }
  function removeFish(o){ const i=added.indexOf(o); if(i<0) return; added.splice(i,1); heart(o.x+o.sz/2,o.y,'\ud83d\udca8');
    o.el.animate([{opacity:1},{opacity:0,transform:o.el.style.transform+' scale(.3)'}],{duration:240,easing:'ease-in'}).onfinish=()=>o.el.remove(); }
  function clearAll(){ added.forEach(o=>o.el.remove()); added=[]; }
  // ---- main loop ----
  function frame(now){ if(!running) return;
    if(dragging){ tx=mX; ty=mY; } else if(follow){ tx=mX; ty=mY; }
    else { if(Math.random()<.012){ tx=innerWidth*(.2+Math.random()*.6); ty=innerHeight*(.28+Math.random()*.5); } }
    if(pellets.length){ const p=pellets[0]; tx=p.x; ty=p.y; }
    const ease=dragging?.35:.045; fx+=(tx-fx)*ease; fy+=(ty-fy)*ease;
    if(tx<fx-2) facing=-1; else if(tx>fx+2) facing=1;
    let wob=Math.sin(now/420)*5, sc=1, rot=Math.sin(now/620)*4;
    if(mood==='kiss'){ sc=.86; } if(mood==='surprise'){ rot=Math.sin(now/40)*10; sc=1.08; }
    if(now>moodT) mood='idle';
    fishEl.style.transform=`translate(${fx-fishEl.offsetWidth/2}px,${fy-fishEl.offsetHeight/2+wob}px) scaleX(${facing*sc}) rotate(${rot}deg)`;
    for(let i=pellets.length-1;i>=0;i--){ const p=pellets[i]; p.y+=p.vy; p.vy=Math.min(p.vy+0.04,2.4); p.el.style.top=p.y+'px';
      const d=Math.hypot(p.x-fx,p.y-fy);
      if(d<60){ p.el.remove(); pellets.splice(i,1); setMood('kiss',420); heart(fx,fy-30,'\u2728'); rndStory(); }
      else if(p.y>innerHeight-20){ p.el.remove(); pellets.splice(i,1); } }
    const W=section.clientWidth,H=section.clientHeight;
    added.forEach(o=>{ o.x+=o.v*o.dir; o.y+=Math.sin(now/700+o.ph)*.35;
      if(o.x<-80){ o.x=W+50; } if(o.x>W+80){ o.x=-50; }
      o.el.style.transform=`translate(${o.x}px,${o.y}px) scaleX(${o.dir})`; });
    if(current==='aquarium' && now-lastBub>140 && mY<innerHeight && Math.random()<.5){ lastBub=now; bubble(mX+(Math.random()-.5)*20,mY); }
    raf=requestAnimationFrame(frame); }
  // ---- interactions ----
  fishEl.addEventListener('pointerdown',e=>{ e.stopPropagation(); dragging=true; fishEl.classList.add('grab');
    clicks++; const t=performance.now(); if(t-clickT<600&&clicks>=3){ setMood('surprise',700); heart(fx,fy-34,'\u2757'); clicks=0; } else { setMood('kiss',420); heart(fx,fy-30,'\ud83d\udc8b'); } clickT=t; rndStory(); });
  addEventListener('pointerup',()=>{ if(dragging){ dragging=false; fishEl.classList.remove('grab'); follow=true; setTimeout(()=>follow=false,1400); } });
  section.addEventListener('pointerdown',e=>{ if(e.target.closest('.aqua-fish,.aqua-add,.aq-palette,.aq-tools,.aqua-tip,a,button')) return;
    const p={x:e.clientX,y:e.clientY,vy:.4}; const el=document.createElement('div'); el.className='pellet'; el.style.left=p.x+'px'; el.style.top=p.y+'px'; canvas.appendChild(el); p.el=el; pellets.push(p);
    for(let i=0;i<4;i++) bubble(e.clientX+(Math.random()-.5)*16,e.clientY); });
  // ---- download the finished aquarium (uses the real tank background) ----
  let bgImg=null;
  (function(){ try{ const bi=getComputedStyle(section).backgroundImage||''; const m=bi.match(/url\(["']?(data:[^"')]+)["']?\)/); if(m){ const im=new Image(); im.onload=()=>{bgImg=im;}; im.src=m[1]; } }catch(e){} })();
  function drawCover(ctx,img,W,H){ if(!img||!img.naturalWidth){ ctx.fillStyle='#123a52'; ctx.fillRect(0,0,W,H); return; }
    const ir=img.naturalWidth/img.naturalHeight, cr=W/H; let dw,dh; if(ir>cr){ dh=H; dw=H*ir; } else { dw=W; dh=W/ir; }
    ctx.drawImage(img,(W-dw)/2,(H-dh)/2,dw,dh); ctx.fillStyle='rgba(10,40,60,.22)'; ctx.fillRect(0,0,W,H); }
  function saveDataUrl(durl){ const a=document.createElement('a'); a.href=durl; a.download='my-true-aquarium.png'; document.body.appendChild(a); a.click(); a.remove(); }
  function showSaveOverlay(durl){ const ov=document.createElement('div'); ov.className='aq-saveov'; const ko=(lang==='ko');
    ov.innerHTML=`<button class="aq-x" type="button" aria-label="close">✕</button><div class="aq-saveinner"><img src="${durl}" alt="My True Aquarium"><p>${ko?'이미지를 길게 눌러 저장하세요':'Press &amp; hold the image to save'}</p><div class="aq-saverow"><button class="aq-btn aq-close" type="button">${ko?'← 뒤로가기':'← Back'}</button></div></div>`;
    document.body.appendChild(ov); const close=()=>ov.remove();
    ov.querySelector('.aq-x').addEventListener('click',close);
    ov.querySelector('.aq-close').addEventListener('click',close);
    ov.addEventListener('click',e=>{ if(e.target===ov) close(); }); }
  function download(){
    const W=section.clientWidth,H=section.clientHeight,S=2;
    const cv=document.createElement('canvas'); cv.width=W*S; cv.height=H*S; const ctx=cv.getContext('2d'); ctx.scale(S,S);
    drawCover(ctx,bgImg,W,H);
    const rect=section.getBoundingClientRect();
    function drawEl(imgEl,cx,cy,w,fc){ if(!imgEl||!imgEl.complete||!imgEl.naturalWidth) return; const h=w*(imgEl.naturalHeight/imgEl.naturalWidth);
      ctx.save(); ctx.translate(cx,cy); ctx.scale(fc,1); ctx.drawImage(imgEl,-w/2,-h/2,w,h); ctx.restore(); }
    added.forEach(o=>drawEl(o.el.querySelector('img'), o.x+o.sz/2, o.y+o.sz/2, o.sz, o.dir>=0?1:-1));
    drawEl(fishEl.querySelector('img'), fx-rect.left, fy-rect.top, (fishEl.offsetWidth||120), facing>=0?1:-1);
    let durl; try{ durl=cv.toDataURL('image/png'); }catch(e){ return; }
    const isMobile=(typeof matchMedia!=='undefined'&&matchMedia('(pointer:coarse)').matches)||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent||'');
    let file=null; try{ const bin=atob(durl.split(',')[1]); const arr=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i); file=new File([new Blob([arr],{type:'image/png'})],'my-true-aquarium.png',{type:'image/png'}); }catch(e){}
    if(file && navigator.canShare && navigator.canShare({files:[file]})){ navigator.share({files:[file],title:'My True Aquarium'}).catch(()=>{ isMobile?showSaveOverlay(durl):saveDataUrl(durl); }); return; }
    if(isMobile){ showSaveOverlay(durl); return; }
    saveDataUrl(durl);
  }
  const rBtn=document.getElementById('aqReset'); if(rBtn) rBtn.addEventListener('click',clearAll);
  const dBtn=document.getElementById('aqDownload'); if(dBtn) dBtn.addEventListener('click',download);
  return { start(){ if(running) return; running=true; unlocked=0; unlock.textContent=''; buildPalette();
      fx=innerWidth*.5; fy=innerHeight*.52; tx=fx; ty=fy; raf=requestAnimationFrame(frame); },
    stop(){ running=false; cancelAnimationFrame(raf); } };
})();

/* ===== Phase 4+6: Three.js depth layer — lazy-loaded on first aquarium visit ===== */
let aqua3d = { start(){}, stop(){}, loadModel(){} };
let aqua3dLoading = false;
function ensureAqua3D(){
  if(aqua3dLoading || aqua3d._real) return Promise.resolve(aqua3d);
  aqua3dLoading = true;
  // Three.js (~180KB gz) is pulled in only here, so the intro/gallery/about
  // pages never pay for it. Dynamic import() lets Vite split it into its
  // own chunk that downloads the first time someone opens TRUE AQUARIUM.
  return import('../components/aquarium3D.js').then(m=>{
    aqua3d = m.createAquarium3D(document.getElementById('aquaCanvas'));
    aqua3d._real = true;
    // When you export a real model, uncomment:
    // aqua3d.loadModel('/assets/models/true.glb');
    return aqua3d;
  }).catch(e=>{ console.warn('[aquarium3D] failed to load:', e); return aqua3d; });
}

/* ===== contact / share ===== */
document.getElementById('cSend').addEventListener('click',()=>{ const n=cName.value.trim(),e=cEmail.value.trim(),m=cMsg.value.trim();
  const subj=`[FiaYoon] Inquiry${n?(' — '+n):''}`; const body=`${m}\n\n— ${n||''} ${e?('('+e+')'):''}`;
  location.href=`mailto:fiayoon@gmail.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`; });
function toast(m){ const t=document.getElementById('toast'); t.textContent=m; t.classList.add('show'); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1800); }
function doShare(w){ const url=location.href,title='FiaYoon'+(w?` — ${w.t}`:'');
  if(navigator.share) navigator.share({title,text:title,url}).catch(()=>{}); else navigator.clipboard?.writeText(url).then(()=>toast(I18N.toast_copy[lang])).catch(()=>toast(url)); }

document.querySelectorAll('.flipcard').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('flip')));





/* ===== re-render language-dependent pieces on toggle ===== */
const _applyLang=applyLang;
applyLang=function(l){ _applyLang(l); lp.build(); if(current==='series') buildSeries(); buildExh('exhList'); };

/* ===== init ===== */
applyLang('ko'); lp.build(); buildExh('exhList');
initHeroEntrance();
initHeroCursor();
initCarouselTilt();
initAboutProgress();
addEventListener('load',()=>{ setTimeout(()=>document.getElementById('veil').classList.add('gone'),900); });
