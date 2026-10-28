import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public', 'assets', 'food');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate rich SVGs with matching aesthetic
const items = [
  {
    file: 'smash-burger.svg',
    bg: '#2A1713',
    accent: '#E52320',
    title: 'SMASH BURGER',
    art: `
      <!-- Bun Top -->
      <path d="M100 190 Q200 80 300 190 Z" fill="#D9822B" stroke="#8C4910" stroke-width="4"/>
      <!-- Sesame seeds -->
      <ellipse cx="160" cy="140" rx="4" ry="7" fill="#FDE4B3" transform="rotate(-20 160 140)"/>
      <ellipse cx="200" cy="130" rx="4" ry="7" fill="#FDE4B3"/>
      <ellipse cx="240" cy="145" rx="4" ry="7" fill="#FDE4B3" transform="rotate(25 240 145)"/>
      <ellipse cx="180" cy="165" rx="4" ry="7" fill="#FDE4B3" transform="rotate(10 180 165)"/>
      <ellipse cx="220" cy="168" rx="4" ry="7" fill="#FDE4B3" transform="rotate(-15 220 168)"/>
      <!-- Lettuce -->
      <path d="M85 195 Q130 180 170 195 Q210 180 250 195 Q280 180 315 195 Q300 215 270 210 Q220 220 170 205 Q120 220 85 195 Z" fill="#58A336"/>
      <!-- Tomato -->
      <rect x="95" y="205" width="210" height="18" rx="9" fill="#E23624"/>
      <!-- Melted Cheese 1 -->
      <path d="M90 222 L310 222 L290 255 L260 230 L220 260 L180 228 L140 255 L110 226 Z" fill="#FFB703"/>
      <!-- Smashed Patty 1 -->
      <rect x="80" y="220" width="240" height="26" rx="10" fill="#4A2511"/>
      <!-- Melted Cheese 2 -->
      <path d="M90 248 L310 248 L270 280 L230 252 L190 285 L150 254 L110 278 Z" fill="#FFB703"/>
      <!-- Smashed Patty 2 -->
      <rect x="75" y="246" width="250" height="28" rx="12" fill="#3D1C06"/>
      <!-- Pickles -->
      <ellipse cx="140" cy="245" rx="20" ry="8" fill="#75933C"/>
      <ellipse cx="260" cy="245" rx="20" ry="8" fill="#75933C"/>
      <!-- Bun Bottom -->
      <rect x="95" y="274" width="210" height="35" rx="16" fill="#C47321" stroke="#8C4910" stroke-width="4"/>
    `
  },
  {
    file: 'chicken-burger.svg',
    bg: '#251515',
    accent: '#FF4D2D',
    title: 'CRUNCH CHICKEN',
    art: `
      <!-- Bun Top -->
      <path d="M100 180 Q200 70 300 180 Z" fill="#D9822B" stroke="#8C4910" stroke-width="4"/>
      <!-- Sesame -->
      <ellipse cx="190" cy="120" rx="4" ry="7" fill="#FDE4B3"/>
      <ellipse cx="230" cy="135" rx="4" ry="7" fill="#FDE4B3" transform="rotate(30 230 135)"/>
      <ellipse cx="160" cy="140" rx="4" ry="7" fill="#FDE4B3" transform="rotate(-20 160 140)"/>
      <!-- Chili Mayo drip -->
      <path d="M95 185 Q200 180 305 185 Q290 205 270 190 Q240 215 210 188 Q180 210 150 192 Q120 212 95 185 Z" fill="#E84A36"/>
      <!-- Shredded slaw -->
      <path d="M85 190 C120 180 150 200 190 188 C230 202 270 180 315 192 L310 212 C270 200 230 218 190 204 C150 216 110 200 85 212 Z" fill="#99D066"/>
      <!-- Crunchy Crispy Fried Chicken Breast -->
      <path d="M70 208 C90 190 150 200 190 195 C250 190 310 202 330 220 C325 250 300 268 260 260 C210 270 160 265 120 270 C80 265 65 235 70 208 Z" fill="#B3541E" stroke="#7A3008" stroke-width="4"/>
      <!-- Crunch flakes -->
      <circle cx="110" cy="225" r="5" fill="#E8963D"/>
      <circle cx="160" cy="235" r="7" fill="#E8963D"/>
      <circle cx="220" cy="230" r="6" fill="#E8963D"/>
      <circle cx="280" cy="238" r="5" fill="#E8963D"/>
      <circle cx="250" cy="250" r="4" fill="#E8963D"/>
      <!-- Pickles -->
      <ellipse cx="150" cy="210" rx="18" ry="6" fill="#5F7B2B"/>
      <!-- Bun Bottom -->
      <rect x="95" y="265" width="210" height="35" rx="16" fill="#C47321" stroke="#8C4910" stroke-width="4"/>
    `
  },
  {
    file: 'hot-honey-chicken.svg',
    bg: '#2E1906',
    accent: '#FFAA00',
    title: 'HOT HONEY TENDERS',
    art: `
      <!-- Tenders -->
      <path d="M90 220 C90 150 160 140 210 180 C260 140 330 180 310 260 C270 300 140 300 90 220 Z" fill="#B24F18" stroke="#742A05" stroke-width="4"/>
      <path d="M140 180 C180 140 250 160 270 210 C250 260 170 260 140 180 Z" fill="#C66224"/>
      <!-- Golden Honey Glaze -->
      <path d="M120 180 Q160 140 220 160 Q260 180 280 220 C270 250 220 270 180 250 C140 240 110 210 120 180 Z" fill="#FFB703" opacity="0.85"/>
      <circle cx="150" cy="220" r="3" fill="#FFE58F"/>
      <circle cx="190" cy="200" r="4" fill="#FFE58F"/>
      <circle cx="240" cy="210" r="3" fill="#FFE58F"/>
      <!-- Chili flakes -->
      <polygon points="170,190 176,194 172,200 166,196" fill="#E51D18"/>
      <polygon points="210,180 218,184 214,190 208,186" fill="#E51D18"/>
      <polygon points="230,225 236,229 232,235 226,231" fill="#E51D18"/>
      <!-- Honey drips -->
      <path d="M140 250 Q145 285 140 290 Q135 285 140 250 Z" fill="#FFB703"/>
      <path d="M220 260 Q225 295 220 300 Q215 295 220 260 Z" fill="#FFB703"/>
    `
  },
  {
    file: 'wings.svg',
    bg: '#250B08',
    accent: '#E52320',
    title: 'MOD BUFFALO WINGS',
    art: `
      <!-- Bucket / Bowl -->
      <path d="M110 200 L130 310 Q200 325 270 310 L290 200 Z" fill="#C91818" stroke="#8E0F0F" stroke-width="4"/>
      <ellipse cx="200" cy="200" rx="90" ry="25" fill="#E52320" stroke="#8E0F0F" stroke-width="4"/>
      <!-- Wings sticking out -->
      <path d="M130 190 C120 140 160 110 180 160 C170 180 150 200 130 190 Z" fill="#8C2C0B"/>
      <path d="M170 170 C170 120 220 100 240 150 C230 180 190 190 170 170 Z" fill="#AA360D"/>
      <path d="M210 180 C230 130 270 130 270 180 C250 195 230 195 210 180 Z" fill="#752307"/>
      <!-- Glaze highlights -->
      <ellipse cx="160" cy="145" rx="8" ry="15" fill="#E54F20" transform="rotate(-15 160 145)"/>
      <ellipse cx="210" cy="135" rx="8" ry="15" fill="#E54F20" transform="rotate(20 210 135)"/>
      <!-- Sesame seeds -->
      <circle cx="165" cy="150" r="2.5" fill="#FFF"/>
      <circle cx="180" cy="165" r="2.5" fill="#FFF"/>
      <circle cx="215" cy="140" r="2.5" fill="#FFF"/>
      <circle cx="235" cy="160" r="2.5" fill="#FFF"/>
      <!-- Celery stick -->
      <rect x="250" y="110" width="16" height="90" rx="6" fill="#7CB342" transform="rotate(25 250 110)"/>
    `
  },
  {
    file: 'fries.svg',
    bg: '#261C09',
    accent: '#FFB703',
    title: 'LOUD FRIES',
    art: `
      <!-- Red Fry Cup / Carton -->
      <path d="M130 170 L150 310 Q200 325 250 310 L270 170 Z" fill="#D91E18" stroke="#8C100C" stroke-width="4"/>
      <!-- Fries bursting out -->
      <rect x="155" y="90" width="16" height="120" rx="3" fill="#FFC837" stroke="#D48806" stroke-width="2" transform="rotate(-12 155 90)"/>
      <rect x="180" y="75" width="18" height="130" rx="3" fill="#FFD666" stroke="#D48806" stroke-width="2" transform="rotate(-3 180 75)"/>
      <rect x="210" y="80" width="17" height="125" rx="3" fill="#FFC837" stroke="#D48806" stroke-width="2" transform="rotate(10 210 80)"/>
      <rect x="235" y="100" width="16" height="115" rx="3" fill="#FFD666" stroke="#D48806" stroke-width="2" transform="rotate(22 235 100)"/>
      <rect x="140" y="115" width="15" height="100" rx="3" fill="#FAAD14" stroke="#D48806" stroke-width="2" transform="rotate(-25 140 115)"/>
      <!-- Carton Front lip -->
      <path d="M130 170 Q200 200 270 170 L250 310 Q200 325 150 310 Z" fill="#E52320"/>
      <!-- Star on carton -->
      <polygon points="200,210 205,225 220,225 208,235 212,250 200,240 188,250 192,235 180,225 195,225" fill="#FFF"/>
      <!-- Peri-peri specks -->
      <circle cx="170" cy="110" r="2" fill="#E51D18"/>
      <circle cx="190" cy="95" r="2" fill="#E51D18"/>
      <circle cx="225" cy="115" r="2" fill="#E51D18"/>
    `
  },
  {
    file: 'chicken-biryani.svg',
    bg: '#251505',
    accent: '#FA8C16',
    title: 'SINDHI BIRYANI',
    art: `
      <!-- Clay pot / Handi -->
      <ellipse cx="200" cy="270" rx="110" ry="40" fill="#753514" stroke="#481F0A" stroke-width="4"/>
      <path d="M90 270 C90 200 310 200 310 270 Z" fill="#8C3F18"/>
      <!-- Golden Rice Mound -->
      <ellipse cx="200" cy="235" rx="95" ry="45" fill="#E69138"/>
      <path d="M110 240 Q200 170 290 240 Z" fill="#F5B041"/>
      <!-- Rice grains -->
      <ellipse cx="160" cy="220" rx="8" ry="2" fill="#FFF" transform="rotate(20 160 220)"/>
      <ellipse cx="200" cy="205" rx="8" ry="2" fill="#FFF" transform="rotate(-15 200 205)"/>
      <ellipse cx="240" cy="225" rx="8" ry="2" fill="#FFF" transform="rotate(30 240 225)"/>
      <ellipse cx="180" cy="230" rx="8" ry="2" fill="#FFF7CC" transform="rotate(-30 180 230)"/>
      <!-- Roasted Chicken piece -->
      <path d="M180 185 C170 160 205 145 230 165 C250 185 240 215 205 210 Z" fill="#A04000" stroke="#6E2C00" stroke-width="2"/>
      <!-- Spiced Potato / Aloo -->
      <ellipse cx="150" cy="210" rx="18" ry="14" fill="#D4AC0D" stroke="#B7950B" stroke-width="2"/>
      <!-- Mint leaves & Fried Onions -->
      <ellipse cx="215" cy="180" rx="10" ry="5" fill="#27AE60" transform="rotate(-40 215 180)"/>
      <ellipse cx="230" cy="185" rx="9" ry="4" fill="#229954" transform="rotate(20 230 185)"/>
      <!-- Steam lines -->
      <path d="M170 140 Q160 110 175 80" stroke="#FFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M200 135 Q215 105 200 75" stroke="#FFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M230 145 Q240 115 225 85" stroke="#FFF" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6"/>
    `
  },
  {
    file: 'nihari.svg',
    bg: '#230E07',
    accent: '#D4380D',
    title: 'BEEF NIHARI',
    art: `
      <!-- Traditional Karahi Bowl -->
      <ellipse cx="200" cy="230" rx="110" ry="50" fill="#2B2B2B" stroke="#111" stroke-width="5"/>
      <!-- Rich Roghan Stew -->
      <ellipse cx="200" cy="225" rx="100" ry="40" fill="#801C08"/>
      <!-- Roghan Oil shimmer -->
      <ellipse cx="200" cy="222" rx="85" ry="32" fill="#B32B0F"/>
      <!-- Tender Beef Shank -->
      <path d="M160 215 C155 190 200 185 235 200 C250 220 230 240 185 235 Z" fill="#4A1809"/>
      <!-- Julienne Ginger & Green Chilies -->
      <line x1="170" y1="210" x2="210" y2="200" stroke="#FFEAA7" stroke-width="3" stroke-linecap="round"/>
      <line x1="180" y1="225" x2="220" y2="215" stroke="#FFEAA7" stroke-width="3" stroke-linecap="round"/>
      <line x1="195" y1="205" x2="225" y2="220" stroke="#00B894" stroke-width="4" stroke-linecap="round"/>
      <line x1="165" y1="220" x2="185" y2="230" stroke="#00B894" stroke-width="4" stroke-linecap="round"/>
      <!-- Tandoori Naan side -->
      <path d="M80 180 C110 130 160 140 150 190 Z" fill="#F5CBA7" stroke="#D35400" stroke-width="2"/>
      <circle cx="115" cy="160" r="4" fill="#BA4A00"/>
      <circle cx="130" cy="170" r="3" fill="#BA4A00"/>
    `
  },
  {
    file: 'karahi.svg',
    bg: '#2B110B',
    accent: '#FA541C',
    title: 'TIKKA KARAHI',
    art: `
      <!-- Karahi with handles -->
      <circle cx="85" cy="220" r="18" fill="none" stroke="#555" stroke-width="6"/>
      <circle cx="315" cy="220" r="18" fill="none" stroke="#555" stroke-width="6"/>
      <ellipse cx="200" cy="230" rx="105" ry="50" fill="#222" stroke="#444" stroke-width="4"/>
      <!-- Karahi masala gravy -->
      <ellipse cx="200" cy="225" rx="95" ry="42" fill="#B03A2E"/>
      <!-- Chicken tikka chunks -->
      <rect x="145" y="200" width="35" height="28" rx="8" fill="#E67E22" stroke="#935116" stroke-width="2" transform="rotate(15 145 200)"/>
      <rect x="195" y="195" width="40" height="30" rx="8" fill="#D35400" stroke="#7E3A06" stroke-width="2" transform="rotate(-10 195 195)"/>
      <rect x="170" y="225" width="36" height="26" rx="8" fill="#BA4A00" stroke="#6E2C00" stroke-width="2" transform="rotate(5 170 225)"/>
      <!-- Char marks -->
      <line x1="155" y1="205" x2="175" y2="210" stroke="#331A00" stroke-width="3"/>
      <line x1="205" y1="202" x2="225" y2="208" stroke="#331A00" stroke-width="3"/>
      <!-- Coriander -->
      <circle cx="190" cy="215" r="4" fill="#2ECC71"/>
      <circle cx="215" cy="225" r="4" fill="#2ECC71"/>
      <circle cx="165" cy="220" r="4" fill="#2ECC71"/>
    `
  },
  {
    file: 'halwa-puri.svg',
    bg: '#251D0B',
    accent: '#FAAD14',
    title: 'HALWA PURI',
    art: `
      <!-- Thali Plate -->
      <ellipse cx="200" cy="230" rx="120" ry="60" fill="#D0D7DE" stroke="#8C959F" stroke-width="4"/>
      <ellipse cx="200" cy="230" rx="108" ry="52" fill="#EAECEF"/>
      <!-- Puffed Puri 1 -->
      <ellipse cx="150" cy="210" rx="50" ry="32" fill="#F39C12" stroke="#B9770E" stroke-width="3" transform="rotate(-15 150 210)"/>
      <!-- Puffed Puri 2 -->
      <ellipse cx="230" cy="205" rx="52" ry="34" fill="#F8C471" stroke="#D68910" stroke-width="3" transform="rotate(20 230 205)"/>
      <!-- Halwa bowl -->
      <circle cx="150" cy="245" r="24" fill="#E67E22" stroke="#A04000" stroke-width="2"/>
      <circle cx="150" cy="245" r="18" fill="#F39C12"/>
      <!-- Chana tarkari bowl -->
      <circle cx="250" cy="240" r="26" fill="#D35400" stroke="#900C3F" stroke-width="2"/>
      <circle cx="250" cy="240" r="20" fill="#E59866"/>
      <circle cx="245" cy="238" r="4" fill="#FAD7A0"/>
      <circle cx="255" cy="242" r="4" fill="#FAD7A0"/>
    `
  },
  {
    file: 'paratha-roll.svg',
    bg: '#20180F',
    accent: '#D48806',
    title: 'ANDA PARATHA ROLL',
    art: `
      <!-- Paper wrap -->
      <path d="M120 260 L240 140 L290 190 L170 310 Z" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="2"/>
      <path d="M140 240 L220 160 L240 180 L160 260 Z" fill="#E02424" opacity="0.8"/>
      <!-- Crispy spiral Paratha Roll -->
      <path d="M90 290 L220 120 C230 105 260 115 270 135 L140 310 Z" fill="#F5CBA7" stroke="#BA4A00" stroke-width="3"/>
      <!-- Fried egg stuffing & onions -->
      <ellipse cx="250" cy="130" rx="16" ry="12" fill="#F39C12" transform="rotate(30 250 130)"/>
      <ellipse cx="240" cy="138" rx="10" ry="7" fill="#FFF"/>
      <!-- Mint chutney drip -->
      <path d="M225 150 Q235 180 215 190" stroke="#27AE60" stroke-width="5" stroke-linecap="round" fill="none"/>
    `
  },
  {
    file: 'samosa.svg',
    bg: '#2B1A0A',
    accent: '#FA8C16',
    title: 'SAMOSA CHAAT',
    art: `
      <!-- Golden Triangular Samosa -->
      <polygon points="200,120 110,250 290,250" fill="#E67E22" stroke="#A04000" stroke-width="4"/>
      <!-- Samosa folding ridge -->
      <line x1="200" y1="120" x2="200" y2="250" stroke="#BA4A00" stroke-width="3" stroke-linecap="round"/>
      <path d="M110 250 Q200 270 290 250" fill="#D35400"/>
      <!-- Chaat drizzled yogurt & chutney -->
      <path d="M140 210 Q160 230 190 215 Q220 200 250 220" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M150 225 Q180 240 210 225 Q240 210 260 230" stroke="#8E44AD" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Sev sprinkles -->
      <line x1="160" y1="200" x2="175" y2="205" stroke="#F1C40F" stroke-width="3"/>
      <line x1="220" y1="210" x2="235" y2="215" stroke="#F1C40F" stroke-width="3"/>
      <line x1="190" y1="230" x2="205" y2="232" stroke="#F1C40F" stroke-width="3"/>
    `
  },
  {
    file: 'nachos.svg',
    bg: '#291708',
    accent: '#FADB14',
    title: 'LOADED NACHOS',
    art: `
      <!-- Tray / Skillet -->
      <rect x="90" y="190" width="220" height="90" rx="16" fill="#1F2937" stroke="#111827" stroke-width="4"/>
      <!-- Tortilla chips triangles -->
      <polygon points="120,160 100,210 150,210" fill="#F1C40F" stroke="#D4AC0D" stroke-width="2"/>
      <polygon points="160,150 140,200 190,200" fill="#F39C12" stroke="#D68910" stroke-width="2"/>
      <polygon points="210,145 190,195 240,195" fill="#F1C40F" stroke="#D4AC0D" stroke-width="2"/>
      <polygon points="250,155 230,205 280,205" fill="#F39C12" stroke="#D68910" stroke-width="2"/>
      <!-- Molten Cheese Blanket -->
      <path d="M100 200 Q150 180 200 190 Q250 180 300 200 L290 230 Q200 250 110 230 Z" fill="#FFC107"/>
      <!-- Jalapeño rings -->
      <circle cx="140" cy="210" r="8" fill="#2ECC71" stroke="#27AE60" stroke-width="3"/>
      <circle cx="190" cy="205" r="8" fill="#2ECC71" stroke="#27AE60" stroke-width="3"/>
      <circle cx="240" cy="210" r="8" fill="#2ECC71" stroke="#27AE60" stroke-width="3"/>
      <!-- Sour cream dollop -->
      <ellipse cx="200" cy="180" rx="16" ry="10" fill="#FFF"/>
    `
  },
  {
    file: 'chai.svg',
    bg: '#25150D',
    accent: '#D46B08',
    title: 'MATKA CHAI',
    art: `
      <!-- Terracotta Matka Clay Cup -->
      <path d="M135 150 C120 180 130 260 160 290 Q200 300 240 290 C270 260 280 180 265 150 Z" fill="#A0522D" stroke="#68341A" stroke-width="4"/>
      <!-- Cup rim -->
      <ellipse cx="200" cy="150" rx="65" ry="18" fill="#8B4513" stroke="#68341A" stroke-width="4"/>
      <!-- Hot Karak Chai surface -->
      <ellipse cx="200" cy="152" rx="55" ry="14" fill="#C07248"/>
      <ellipse cx="200" cy="152" rx="45" ry="10" fill="#D68962"/>
      <!-- Malai cream swirl -->
      <path d="M185 152 Q200 148 215 154" stroke="#FFF" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
      <!-- Crushed cardamom specks -->
      <circle cx="190" cy="151" r="2" fill="#27AE60"/>
      <circle cx="210" cy="153" r="1.5" fill="#27AE60"/>
      <!-- Rising Steaming aroma -->
      <path d="M175 125 Q165 95 180 65" stroke="#FFEAA7" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>
      <path d="M205 120 Q220 90 205 60" stroke="#FFEAA7" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>
      <path d="M225 128 Q235 98 220 70" stroke="#FFEAA7" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.7"/>
    `
  },
  {
    file: 'cold-brew.svg',
    bg: '#161922',
    accent: '#1890FF',
    title: 'VANILLA COLD BREW',
    art: `
      <!-- Clear Glass Tumbler -->
      <path d="M140 110 L155 290 Q200 300 245 290 L260 110 Z" fill="#FFFFFF" fill-opacity="0.15" stroke="#FFFFFF" stroke-width="3"/>
      <!-- Dark Cold Brew Coffee -->
      <path d="M144 140 L155 285 Q200 295 245 285 L256 140 Z" fill="#3E2723"/>
      <!-- Ice cubes floating -->
      <rect x="165" y="150" width="30" height="30" rx="5" fill="#E1F5FE" fill-opacity="0.6" stroke="#B3E5FC" stroke-width="1.5" transform="rotate(15 165 150)"/>
      <rect x="205" y="165" width="28" height="28" rx="5" fill="#E1F5FE" fill-opacity="0.6" stroke="#B3E5FC" stroke-width="1.5" transform="rotate(-20 205 165)"/>
      <!-- Cream float pouring down -->
      <path d="M144 140 Q200 135 256 140 L253 170 Q230 160 215 190 Q200 165 185 195 Q170 160 147 170 Z" fill="#FFF8E7"/>
      <!-- Straw -->
      <line x1="225" y1="70" x2="190" y2="280" stroke="#E52320" stroke-width="8" stroke-linecap="round"/>
    `
  },
  {
    file: 'lemonade.svg',
    bg: '#0F231D',
    accent: '#52C41A',
    title: 'MINT LIME SPARKLER',
    art: `
      <!-- Glass -->
      <path d="M140 110 L155 290 Q200 300 245 290 L260 110 Z" fill="#FFFFFF" fill-opacity="0.15" stroke="#FFFFFF" stroke-width="3"/>
      <!-- Sparkling Green liquid -->
      <path d="M144 135 L155 285 Q200 295 245 285 L256 135 Z" fill="#2ECC71" fill-opacity="0.75"/>
      <!-- Lime wheel on rim -->
      <circle cx="150" cy="115" r="28" fill="#F4D03F" stroke="#27AE60" stroke-width="4"/>
      <circle cx="150" cy="115" r="22" fill="#A9DFBF"/>
      <line x1="150" y1="93" x2="150" y2="137" stroke="#FFF" stroke-width="2"/>
      <line x1="128" y1="115" x2="172" y2="115" stroke="#FFF" stroke-width="2"/>
      <!-- Spearmint leaves -->
      <ellipse cx="205" cy="155" rx="14" ry="7" fill="#1E8449" transform="rotate(30 205 155)"/>
      <ellipse cx="185" cy="175" rx="14" ry="7" fill="#27AE60" transform="rotate(-40 185 175)"/>
      <!-- Fizz bubbles -->
      <circle cx="180" cy="240" r="3" fill="#FFF" opacity="0.8"/>
      <circle cx="210" cy="220" r="4" fill="#FFF" opacity="0.8"/>
      <circle cx="170" cy="190" r="3" fill="#FFF" opacity="0.8"/>
      <circle cx="220" cy="180" r="2" fill="#FFF" opacity="0.8"/>
      <!-- Paper straw -->
      <line x1="230" y1="75" x2="185" y2="280" stroke="#F1C40F" stroke-width="7" stroke-linecap="round"/>
    `
  },
  {
    file: 'lava-cake.svg',
    bg: '#1F120E',
    accent: '#722ED1',
    title: 'MOLTEN LAVA CAKE',
    art: `
      <!-- Plate -->
      <ellipse cx="200" cy="265" rx="115" ry="40" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="3"/>
      <!-- Dark Chocolate Cake -->
      <path d="M130 260 L145 180 Q200 170 255 180 L270 260 Z" fill="#3D1D16" stroke="#210F0A" stroke-width="3"/>
      <!-- Cake Top -->
      <ellipse cx="200" cy="180" rx="55" ry="18" fill="#4E271E"/>
      <!-- Molten Chocolate Gush Cut -->
      <path d="M170 205 Q200 195 230 205 L225 265 Q200 275 175 265 Z" fill="#1A0A06"/>
      <!-- Liquid Ganache puddle -->
      <ellipse cx="200" cy="262" rx="45" ry="12" fill="#200C07"/>
      <!-- Scoop of Vanilla Gelato -->
      <circle cx="200" cy="150" r="28" fill="#FFFDE7" stroke="#FFF9C4" stroke-width="2"/>
      <!-- Mint sprig on ice cream -->
      <ellipse cx="200" cy="125" rx="6" ry="3" fill="#2ECC71" transform="rotate(-30 200 125)"/>
      <!-- Cocoa dusting -->
      <circle cx="160" cy="260" r="2" fill="#4E271E"/>
      <circle cx="240" cy="262" r="2" fill="#4E271E"/>
    `
  },
  {
    file: 'gulab-jamun.svg',
    bg: '#251307',
    accent: '#FA8C16',
    title: 'GULAB JAMUN',
    art: `
      <!-- Porcelain Bowl -->
      <ellipse cx="200" cy="245" rx="100" ry="45" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4"/>
      <!-- Rose saffron sugar syrup -->
      <ellipse cx="200" cy="240" rx="85" ry="32" fill="#D97706" opacity="0.85"/>
      <!-- Jamun 1 -->
      <circle cx="170" cy="225" r="34" fill="#6B2D0E" stroke="#451A05" stroke-width="2"/>
      <ellipse cx="160" cy="215" rx="10" ry="6" fill="#A14E1B" opacity="0.8"/>
      <!-- Jamun 2 -->
      <circle cx="225" cy="220" r="32" fill="#58240A" stroke="#3A1604" stroke-width="2"/>
      <ellipse cx="215" cy="210" rx="9" ry="5" fill="#8C3F14" opacity="0.8"/>
      <!-- Saffron strands & pistachio slivers -->
      <line x1="165" y1="210" x2="175" y2="215" stroke="#E51D18" stroke-width="2"/>
      <line x1="220" y1="205" x2="230" y2="210" stroke="#E51D18" stroke-width="2"/>
      <ellipse cx="180" cy="225" rx="4" ry="2" fill="#27AE60"/>
      <ellipse cx="210" cy="230" rx="4" ry="2" fill="#27AE60"/>
    `
  },
  {
    file: 'churros.svg',
    bg: '#23180D',
    accent: '#FAAD14',
    title: 'CHURRO BITES',
    art: `
      <!-- Churro sticks -->
      <rect x="120" y="140" width="35" height="130" rx="12" fill="#D97706" stroke="#92400E" stroke-width="3" transform="rotate(-25 120 140)"/>
      <rect x="175" y="110" width="35" height="145" rx="12" fill="#F59E0B" stroke="#B45309" stroke-width="3" transform="rotate(-5 175 110)"/>
      <rect x="230" y="125" width="35" height="135" rx="12" fill="#D97706" stroke="#92400E" stroke-width="3" transform="rotate(20 230 125)"/>
      <!-- Sugar crystal sparkle dots -->
      <circle cx="150" cy="160" r="2.5" fill="#FFF"/>
      <circle cx="185" cy="140" r="2.5" fill="#FFF"/>
      <circle cx="210" cy="180" r="2.5" fill="#FFF"/>
      <circle cx="245" cy="170" r="2.5" fill="#FFF"/>
      <!-- Nutella dipping cup -->
      <path d="M160 250 L170 305 Q200 312 230 305 L240 250 Z" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="3"/>
      <ellipse cx="200" cy="250" rx="40" ry="12" fill="#3D1D16"/>
      <ellipse cx="200" cy="250" rx="32" ry="8" fill="#5A2E22"/>
    `
  },
  {
    file: 'favicon.svg',
    bg: '#E52320',
    accent: '#FFF',
    title: 'S',
    art: `
      <!-- Bold S Logo -->
      <circle cx="200" cy="200" r="160" fill="#E52320"/>
      <text x="200" y="275" font-family="'Syne', 'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="220" text-anchor="middle" fill="#FFFFFF">S</text>
    `
  }
];

items.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="grad-${item.file.replace('.svg','')}" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="${item.accent}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${item.bg}" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" rx="32" fill="url(#grad-${item.file.replace('.svg','')})"/>
  <!-- Decorative subtle background badge -->
  <circle cx="200" cy="200" r="150" fill="none" stroke="${item.accent}" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.3"/>
  ${item.art}
</svg>`;

  fs.writeFileSync(path.join(outDir, item.file), svg.trim(), 'utf-8');
});

console.log(`Generated ${items.length} SVGs in ${outDir}`);
