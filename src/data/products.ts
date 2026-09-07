import imgSunflower from '../assets/Sunflower.png'
import imgMrFrog from '../assets/Mr. Frogenton.png'
import imgMrFrog2 from '../assets/Mr. Frogenton (2).png'
import imgMrsFrog from '../assets/Mrs. Frogenton.png'
import imgTulip from '../assets/Tulip.png'
import imgTulip2 from '../assets/Tulip (2).png'
import imgTulip3 from '../assets/Tulip (3).png'
import imgTulip4 from '../assets/Tulip (4).png'
import imgTulip5 from '../assets/Tulip (5).png'
import imgTulips from '../assets/Tulips (2).png'
import imgSunflowerBag from '../assets/Sunflower Bag.png'
import imgSunflowerKeychain from '../assets/Sunflower Keychain.png'
import imgRoseBouquet from '../assets/Rose Bouqet.png'
import imgRose from '../assets/Rose.png'
import imgRose2 from '../assets/Rose (2).png'
import imgRose3 from '../assets/Rose (3).png'
import imgRosePot from '../assets/Rose Pot.png'
import imgRosePot2 from '../assets/Rose Pot (2).png'
import imgTulipPurse from '../assets/Tulip Purse.png'
import imgTulipPurse2 from '../assets/Tulip Purse (2).png'
import imgDrawstringPouch from '../assets/Drawstring pouch.png'
import imgDrawstringPouch2 from '../assets/Drawstring pouch (2).png'
import imgDrawstringPouch3 from '../assets/Drawstring Pouch (3).png'
import imgDrawstringPouch4 from '../assets/Drawstring Pouch (4).png'
import imgSucculentPot from '../assets/Succulent Pot.png'
import imgSucculentPot2 from '../assets/Succulent Pot (2).png'
import imgLavender from '../assets/Lavenders.png'
import imgLilyValley from '../assets/Lily of the Valley.png'
import imgLilyValleyKeychain from '../assets/Lily of the valley Keychain.png'
import imgLilyValleyKeychain2 from '../assets/Lily of the valley keychain (2).png'
import imgLilyValleyKeychain3 from '../assets/Lily of the valley Keychain (3).png'
import imgButterflyKeychain from '../assets/Butterfly Keychain.png'
import imgButterflyKeychain2 from '../assets/Butterfly Keychain (2).png'
import imgButterflyKeychain3 from '../assets/Butterfly Keychain (3).png'
import imgButterflyCharm from '../assets/Butterfly Charm.png'
import imgButterflyCharm2 from '../assets/Butterfly Charm (2).png'
import imgButterflyCharm3 from '../assets/Butterfly Charm (3).png'
import imgButterflyTop from '../assets/Butterfly Top.png'
import imgStrawhatKeychain from '../assets/Strawhat Keychain.png'
import imgStrawberryKeychain from '../assets/Strawberry Keychain.png'
import imgSakuraKeychain from '../assets/Sakura Keychain.png'
import imgDaisyKeychain from '../assets/Daisy Keychain.png'
import imgDaisyKeychain2 from '../assets/Daisy Keychain (2).png'
import imgCherryKeychain from '../assets/Cherry Keychain.png'
import imgJamheartKeychain from '../assets/Jamheart Keychain.png'
import imgJamheartKeychain2 from '../assets/Jamheart Keychain (2).png'
import imgJamheartKeychain3 from '../assets/Jamheart Keychain (3).png'
import imgPaintPaletteKeychain from '../assets/Paint palette Keychain.png'
import imgNarutomakiKeychain from '../assets/Narutomaki Keychain.png'
import imgBowTie from '../assets/Bow Tie.png'
import imgBowTie2 from '../assets/Bow Tie (2).png'
import imgHairClips from '../assets/Hair Clips.png'
import imgBagCharm from '../assets/Bag charm.png'
import imgParanda from '../assets/Paranda.png'
import imgParanda2 from '../assets/Paranda (2).png'
import imgParanda3 from '../assets/Paranda (3).png'
import imgRose58 from '../assets/58.png'
import imgRose59 from '../assets/59.png'
import imgRose60 from '../assets/60.png'
import imgRose61 from '../assets/61.png'
import imgRose62 from '../assets/62.png'
import imgRose64 from '../assets/64.png'

export type Category = 'Amigurumi' | 'Flowers' | 'Bags' | 'Keychains' | 'Home Decor' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  description: string;
  category: Category;
  customizable: boolean;
  featured: boolean;
  image: string;
  images: string[];
}

export const PRODUCTS: Product[] = [
  // ── Flowers ──
  {
    id: 'p1',
    name: 'Sunflower',
    price: 950,
    sizes: ['Small (15 cm)', 'Medium (22 cm)', 'Large (30 cm)'],
    description: 'A cuddly crocheted teddy bear with a tiny sunflower crown. Perfect as a gift or keepsake.',
    category: 'Flowers',
    customizable: true,
    featured: true,
    image: imgSunflower,
    images: [imgSunflower],
  },
  {
    id: 'p2',
    name: 'Mr. Frogenton',
    price: 800,
    sizes: ['Small (15 cm)', 'Medium (22 cm)'],
    description: 'A charming crocheted frog gentleman — dapper, cuddly, and full of character.',
    category: 'Amigurumi',
    customizable: true,
    featured: true,
    image: imgMrFrog,
    images: [imgMrFrog, imgMrFrog2],
  },
  {
    id: 'p3',
    name: 'Mrs. Frogenton',
    price: 800,
    sizes: ['Small (15 cm)', 'Medium (22 cm)'],
    description: 'The perfect companion to Mr. Frogenton — a lovely crocheted frog lady with a sweet personality.',
    category: 'Amigurumi',
    customizable: true,
    featured: false,
    image: imgMrsFrog,
    images: [imgMrsFrog],
  },

  // ── Flowers ──
  {
    id: 'p4',
    name: 'Rose Bouquet',
    price: 4500,
    sizes: ['Mini (3 stems)', 'Standard (6 stems)', 'Bouquet (12 stems)'],
    description: 'Eternal crochet flowers in your choice of colours — roses, tulips, and daisies hand-stitched to last forever.',
    category: 'Flowers',
    customizable: true,
    featured: true,
    image: imgRoseBouquet,
    images: [imgRoseBouquet],
  },
  {
    id: 'p5',
    name: 'Classic Rose',
    price: 850,
    sizes: ['Single Stem', 'Set of 3', 'Set of 6'],
    description: 'A beautifully crafted crochet rose that never wilts. Available in any colour.',
    category: 'Flowers',
    customizable: true,
    featured: true,
    image: imgRose,
    images: [imgRose, imgRose2, imgRose3, imgRose58, imgRose59, imgRose60, imgRose61, imgRose62, imgRose64],
  },
  {
    id: 'p6',
    name: 'Rose in a Pot',
    price: 1200,
    sizes: ['Small', 'Medium'],
    description: 'A charming crochet rose planted in a tiny pot — a everlasting desk or shelf accent.',
    category: 'Home Decor',
    customizable: true,
    featured: false,
    image: imgRosePot,
    images: [imgRosePot, imgRosePot2],
  },
  {
    id: 'p7',
    name: 'Tulip',
    price: 750,
    sizes: ['Mini (3 stems)', 'Standard (6 stems)'],
    description: 'A cheerful bunch of crochet tulips in your favourite colour palette.',
    category: 'Flowers',
    customizable: true,
    featured: true,
    image: imgTulip,
    images: [imgTulip3, imgTulip4, imgTulip5],
  },
  {
    id: 'p8',
    name: 'Lavender Bunch',
    price: 650,
    sizes: ['Small (3 stems)', 'Standard (6 stems)'],
    description: 'Delicate crochet lavender stems — a calming, everlasting arrangement for any space.',
    category: 'Flowers',
    customizable: true,
    featured: false,
    image: imgLavender,
    images: [imgLavender],
  },
  {
    id: 'p10',
    name: 'Succulent in a Pot',
    price: 1200,
    sizes: ['Small', 'Medium'],
    description: 'A low-maintenance crochet succulent that stays green forever. Perfect for desks and shelves.',
    category: 'Home Decor',
    customizable: true,
    featured: false,
    image: imgSucculentPot,
    images: [imgSucculentPot, imgSucculentPot2],
  },
  {
    id: 'p31',
    name: 'Tulip Bouquet',
    price: 2250,
    sizes: ['Set of 4', 'Set of 6'],
    description: 'Thick, absorbent crochet coasters in coordinated pastel hues. Protect your table in style.',
    category: 'Flowers',
    customizable: false,
    featured: false,
    image: imgTulips,
    images: [imgTulips],
  },

  // ── Bags ──
  {
    id: 'p11',
    name: 'Sunflower Tote Bag',
    price: 5800,
    sizes: ['One Size'],
    description: 'Handwoven cotton crochet tote with a sunflower motif. Spacious, stylish, and completely sustainable.',
    category: 'Bags',
    customizable: true,
    featured: true,
    image: imgSunflowerBag,
    images: [imgSunflowerBag],
  },
  {
    id: 'p12',
    name: 'Tulip Purse',
    price: 1100,
    sizes: ['One Size'],
    description: 'A sweet crochet purse adorned with tulip details — small enough for essentials, big on style.',
    category: 'Bags',
    customizable: true,
    featured: false,
    image: imgTulipPurse,
    images: [imgTulipPurse, imgTulipPurse2],
  },
  {
    id: 'p13',
    name: 'Drawstring Pouch',
    price: 900,
    sizes: ['Small', 'Medium', 'Large'],
    description: 'Versatile crochet drawstring pouches — perfect for gifts, storage, or on-the-go essentials.',
    category: 'Bags',
    customizable: true,
    featured: false,
    image: imgDrawstringPouch,
    images: [imgDrawstringPouch, imgDrawstringPouch2, imgDrawstringPouch3, imgDrawstringPouch4],
  },

  // ── Keychains ──
  {
    id: 'p14',
    name: 'Sunflower Keychain',
    price: 400,
    sizes: ['One Size (~6 cm)'],
    description: 'A tiny crochet sunflower to brighten your keys or bag.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgSunflowerKeychain,
    images: [imgSunflowerKeychain],
  },
  {
    id: 'p15',
    name: 'Lily of the Valley Keychain',
    price: 450,
    sizes: ['One Size (~7 cm)'],
    description: 'A delicate crochet lily of the valley charm for your keys or bag.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgLilyValley,
    images: [imgLilyValley, imgLilyValleyKeychain, imgLilyValleyKeychain2, imgLilyValleyKeychain3],
  },
  {
    id: 'p16',
    name: 'Butterfly Keychain',
    price: 450,
    sizes: ['One Size (~6 cm)'],
    description: 'A beautiful crochet butterfly that adds a whimsical touch to your keys.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgButterflyKeychain,
    images: [imgButterflyKeychain, imgButterflyKeychain2, imgButterflyKeychain3],
  },
  {
    id: 'p17',
    name: 'Luffy Hat Keychain',
    price: 400,
    sizes: ['One Size (~5 cm)'],
    description: 'An adorable miniature crochet straw hat — a cute and unique keychain.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgStrawhatKeychain,
    images: [imgStrawhatKeychain],
  },
  {
    id: 'p18',
    name: 'Strawberry Keychain',
    price: 450,
    sizes: ['One Size (~5 cm)'],
    description: 'A sweet little crochet strawberry — the perfect pop of colour for your bag or keys.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgStrawberryKeychain,
    images: [imgStrawberryKeychain],
  },
  {
    id: 'p19',
    name: 'Sakura Keychain',
    price: 450,
    sizes: ['One Size (~6 cm)'],
    description: 'A delicate crochet cherry blossom keychain inspired by spring.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgSakuraKeychain,
    images: [imgSakuraKeychain],
  },
  {
    id: 'p20',
    name: 'Daisy Keychain',
    price: 450,
    sizes: ['One Size (~5 cm)'],
    description: 'A cheerful crochet daisy to brighten your day.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgDaisyKeychain,
    images: [imgDaisyKeychain, imgDaisyKeychain2],
  },
  {
    id: 'p21',
    name: 'Cherry Keychain',
    price: 450,
    sizes: ['One Size (~5 cm)'],
    description: 'A pair of adorable crochet cherries — sweet and playful.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgCherryKeychain,
    images: [imgCherryKeychain],
  },
  {
    id: 'p22',
    name: 'Jamheart Keychain',
    price: 450,
    sizes: ['One Size (~5 cm)'],
    description: 'A cute crochet heart keychain with a jam-sweet charm.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgJamheartKeychain,
    images: [imgJamheartKeychain, imgJamheartKeychain2, imgJamheartKeychain3],
  },
  {
    id: 'p23',
    name: 'Paint Palette Keychain',
    price: 400,
    sizes: ['One Size (~6 cm)'],
    description: 'A tiny crochet paint palette — perfect for artists and creatives.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgPaintPaletteKeychain,
    images: [imgPaintPaletteKeychain],
  },
  {
    id: 'p24',
    name: 'Narutomaki Keychain',
    price: 400,
    sizes: ['One Size (~5 cm)'],
    description: 'A fun crochet narutomaki (fish cake) keychain for anime fans.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgNarutomakiKeychain,
    images: [imgNarutomakiKeychain],
  },

  // ── Accessories ──
  {
    id: 'p25',
    name: 'Butterfly Charm',
    price: 500,
    sizes: ['One Size (~5 cm)'],
    description: 'A dainty crochet butterfly charm — attach it to your bag, keys, or use as a decoration.',
    category: 'Keychains',
    customizable: true,
    featured: false,
    image: imgButterflyCharm,
    images: [imgButterflyCharm, imgButterflyCharm2, imgButterflyCharm3],
  },
  {
    id: 'p26',
    name: 'Butterfly Top',
    price: 2500,
    sizes: ['One Size'],
    description: 'A beautiful crochet butterfly hair accessory — handmade and unique.',
    category: 'Accessories',
    customizable: true,
    featured: false,
    image: imgButterflyTop,
    images: [imgButterflyTop],
  },
  {
    id: 'p27',
    name: 'Bow Tie',
    price: 900,
    sizes: ['One Size'],
    description: 'A cute crochet bow tie — perfect as a hair accessory or bag embellishment.',
    category: 'Accessories',
    customizable: true,
    featured: false,
    image: imgBowTie,
    images: [imgBowTie, imgBowTie2],
  },
  {
    id: 'p28',
    name: 'Hair Clips',
    price: 500,
    sizes: ['Set of 2', 'Set of 4'],
    description: 'Handmade crochet hair clips — delicate, lightweight, and colourful.',
    category: 'Accessories',
    customizable: true,
    featured: false,
    image: imgHairClips,
    images: [imgHairClips],
  },
  {
    id: 'p29',
    name: 'Star Bag Charm',
    price: 700,
    sizes: ['One Size'],
    description: 'A playful crochet charm to personalise your bag or purse.',
    category: 'Bags',
    customizable: true,
    featured: false,
    image: imgBagCharm,
    images: [imgBagCharm],
  },
  {
    id: 'p30',
    name: 'Paranda',
    price: 1400,
    sizes: ['Standard'],
    description: 'A traditional crochet paranda — vibrant, handcrafted hair accessory rooted in Pakistani craft.',
    category: 'Accessories',
    customizable: true,
    featured: false,
    image: imgParanda,
    images: [imgParanda, imgParanda2, imgParanda3],
  },
];
export const CATEGORIES: Category[] = ['Amigurumi', 'Flowers', 'Bags', 'Keychains', 'Home Decor', 'Accessories'];

export const WHATSAPP_NUMBER = '923284396241';
