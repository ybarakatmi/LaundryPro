export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingTimeMinutes: number;
};

export type BlogPost = BlogPostMeta & { blocks: BlogBlock[] };

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const blogPosts: BlogPost[] = [
  {
    slug: "guide-to-laundromat-services-ypsilanti",
    title: "The Complete Guide to Laundromat Services in Ypsilanti, MI",
    date: "2026-01-15",
    excerpt:
      "Self-service, wash & fold, pick-up, and delivery explained—plus how Laundry Pro on Washtenaw Ave fits your routine near EMU.",
    image: unsplash("photo-1582735689369-4fe89db7114c"),
    imageAlt:
      "Rows of modern washing machines at a clean laundromat, representing Laundry Pro style service in Ypsilanti Michigan",
    readingTimeMinutes: 7,
    blocks: [
      {
        type: "h2",
        text: "Why Ypsilanti residents still choose laundromats in 2026",
      },
      {
        type: "p",
        text: "Even with smaller in-unit washers in many apartments, a full-service laundromat remains the fastest way to tackle bedding, athletic gear, and weekly loads without wearing out your home machine. In Ypsilanti, Michigan—especially for Eastern Michigan University students and busy families on Washtenaw Avenue—having a bright, dependable place to do laundry can save hours every month. Laundry Pro was built for exactly that: brand-new high-efficiency equipment, a spotless floor plan, and hours that respect night classes, late shifts, and weekend rushes.",
      },
      {
        type: "h2",
        text: "Self-service laundry: what to expect",
      },
      {
        type: "p",
        text: "Self-service laundry is the classic laundromat experience. You sort, load, and start the machines yourself, then fold on wide tables while your clothes dry. At Laundry Pro, washers and dryers are new, easy to use, and paired with free WiFi so you can study or stream while you wait. Dryers are priced starting at just 25¢ per cycle—an everyday value for students budgeting around textbooks and rent. Bring your own detergent or purchase supplies on site, follow garment care labels, and you can finish multiple loads in a single visit.",
      },
      {
        type: "h3",
        text: "Wash and fold: hands-off convenience",
      },
      {
        type: "p",
        text: "Wash and fold is ideal when you want clean, neatly folded clothes without standing at the machines. You drop off sorted laundry, and the team washes, dries, and folds it to professional standards. Laundry Pro offers wash and fold at $1.50 per pound with same-day turnaround when dropped off early—perfect before a busy EMU exam week or after travel. Communicate stains, temperature preferences, and delicates up front so every load is handled the way you expect.",
      },
      {
        type: "h3",
        text: "Pick-up, drop-off, and delivery",
      },
      {
        type: "p",
        text: "Pick-up service brings the laundromat to your door: schedule a time, leave bags in a secure spot, and Laundry Pro handles washing and folding. Drop-off is the in-store version—walk in, hand off your bags, and pick up when notified. Delivery closes the loop for households juggling kids, caregiving, or long campus days. All three options pair naturally with Laundry Pro’s late hours; you can call (734) 883-6714 or use the online scheduling form to book the service that matches your week.",
      },
      {
        type: "h2",
        text: "Bulky items and comforters",
      },
      {
        type: "p",
        text: "Home machines often struggle with comforters, blankets, and pillows. Commercial washers at Laundry Pro are sized for bulky items, helping detergents rinse thoroughly and reducing wear on fabrics. Ask about the comforter special to save on deep-cleaning the bedding that keeps Michigan winters comfortable. Planning a move or hosting guests near Ypsilanti? Knock out bedding and curtains in one efficient stop instead of risking an unbalanced load at home.",
      },
      {
        type: "h2",
        text: "Make laundry night a Washtenaw Avenue ritual",
      },
      {
        type: "p",
        text: "Laundry Pro sits at 1510 Washtenaw Ave, Suite D—next to Toarmina's Pizza, home of the World's Biggest Pizza. Many guests start a wash cycle, stroll over for a slice or wings, and return with plenty of time to dry and fold. That pairing turns a chore into a mini break, especially for EMU students walking distance from campus. Whether you need self-service speed or full-service convenience, Laundry Pro combines modern equipment, fair pricing, and a location designed for real life in Ypsilanti.",
      },
    ],
  },
  {
    slug: "save-money-on-laundry",
    title: "How to Save Money on Laundry — Tips from Laundry Pro",
    date: "2026-02-03",
    excerpt:
      "Stretch your budget with smart sorting, dryer discipline, and Laundry Pro’s 25¢ dryer cycles and $1.50/lb wash & fold in Ypsilanti.",
    image: "/storefront-day.jpeg",
    imageAlt:
      "Laundry supplies and folded towels suggesting affordable laundry habits at Laundry Pro Ypsilanti Michigan",
    readingTimeMinutes: 6,
    blocks: [
      {
        type: "h2",
        text: "Start with sorting and load size",
      },
      {
        type: "p",
        text: "Half-full washers waste water and detergent; overstuffed drums prevent proper agitation. Sort lights, darks, and heavy items like towels or jeans so every cycle runs at peak efficiency. At Laundry Pro in Ypsilanti, high-efficiency machines are calibrated for commercial performance, meaning you get cleaner results per dollar when loads are balanced. Pre-treat stains at home with a dab of detergent to avoid rewashes that silently double your cost.",
      },
      {
        type: "h2",
        text: "Dry smarter, not longer",
      },
      {
        type: "p",
        text: "Dryers consume most of the coins customers spend in a laundromat. Shake out clothes before they go in, separate lightweight fabrics from heavy cotton, and check mid-cycle—many items finish faster than the timer suggests. Laundry Pro advertises dryers from 25¢ per cycle, among the lowest dryer rates in town, so trimming even five minutes per visit adds up for EMU students doing laundry weekly. Clean the lint area if you see buildup; better airflow means shorter dry times and lower spend.",
      },
      {
        type: "h3",
        text: "When wash and fold pays for itself",
      },
      {
        type: "p",
        text: "Wash and fold at $1.50 per pound is predictable: you know the price before you drop off. If your time is tight—clinical rotations, double shifts, or finals—paying per pound can be cheaper than losing study hours or paying for parking loops. Bundle delicates in mesh bags, empty pockets, and label any special instructions to avoid surprises. Same-day service at Laundry Pro helps you stay on schedule without buying extra clothing just because the hamper backed up.",
      },
      {
        type: "h2",
        text: "Bundle trips with errands on Washtenaw Ave",
      },
      {
        type: "p",
        text: "Fuel and time are part of laundry economics. Because Laundry Pro neighbors Toarmina's Pizza, you can combine dinner, group study, or a quick meeting with your wash cycle instead of making a second trip across Ypsilanti. Pairing tasks lowers the “hidden cost” of chores. If you live near EMU, walking or biking to 1510 Washtenaw Ave, Suite D can remove parking expenses entirely on laundry night.",
      },
      {
        type: "h2",
        text: "Use loyalty habits, not gimmicks",
      },
      {
        type: "p",
        text: "Skip unnecessary double rinses unless allergies require it, measure detergent with the cap lines, and wash most clothes on cold to cut hot-water spend where fabrics allow. For bulky bedding, commercial machines at Laundry Pro finish the job in one cycle—cheaper than multiple retries at home that stress your personal washer. Call (734) 883-6714 if you are unsure which service level fits your budget; the team can recommend self-service, drop-off, or delivery based on weight and turnaround.",
      },
    ],
  },
  {
    slug: "wash-and-fold-emu-students",
    title: "Why Wash & Fold Service is a Game-Changer for Busy EMU Students",
    date: "2026-02-20",
    excerpt:
      "Between classes, work, and campus life, EMU students use Laundry Pro’s wash & fold and late hours to stay ahead—without sacrificing sleep.",
    image: unsplash("photo-1523240795612-9a054b0db644"),
    imageAlt:
      "Student workspace suggesting Eastern Michigan University student life near Laundry Pro Ypsilanti",
    readingTimeMinutes: 7,
    blocks: [
      {
        type: "h2",
        text: "Time is the real syllabus",
      },
      {
        type: "p",
        text: "Eastern Michigan University students juggle lectures, labs, part-time jobs, and internships. Laundry rarely earns a spot on the calendar—until you are out of socks. Wash and fold at Laundry Pro translates hamper chaos into neatly stacked clothes, priced at $1.50 per pound with same-day options when you plan ahead. Instead of guarding machines between classes, you drop off on Washtenaw Avenue and reclaim hours for studying or campus organizations.",
      },
      {
        type: "h2",
        text: "Late-night hours meet campus schedules",
      },
      {
        type: "p",
        text: "Laundry Pro stays open from 6:00 AM to 2:00 AM, seven days a week. That window catches early risers heading to 8 AM sections and night owls finishing shifts downtown. If your building’s laundry room is busy or out of order, a short trip off campus gives you industrial machines and space to spread out. Free WiFi lets you upload assignments while dryers hum in the background—turning “laundry night” into productive time.",
      },
      {
        type: "h3",
        text: "Pick-up and delivery for crunch weeks",
      },
      {
        type: "p",
        text: "During midterms or student teaching, even drop-off can feel like a stretch. Schedule pick-up or delivery through Laundry Pro’s online form so bags leave your porch or dorm cluster without another errand. You still get professional folding standards, stain attention when you flag it, and predictable pricing. For roommates, combining loads can hit minimum weights faster and simplify splitting the bill.",
      },
      {
        type: "h2",
        text: "Budget-friendly self-service still on the menu",
      },
      {
        type: "p",
        text: "Not every week needs full-service. When you have time but want better equipment than a dorm washer, Laundry Pro’s self-service floor delivers spotless conditions and dryers from 25¢ per cycle. Many EMU students alternate: self-service on light weeks, wash and fold during finals. Knowing both options exist prevents panic when your schedule implodes.",
      },
      {
        type: "h2",
        text: "Fuel up next door at Toarmina's Pizza",
      },
      {
        type: "p",
        text: "Laundry Pro’s location beside Toarmina's Pizza means you can grab a slice, wings, or subs without losing your machine. Pairing food with laundry breaks helps students avoid skipping meals during marathon study days. It is a practical Ypsilanti perk—community businesses supporting the same stretch of Washtenaw Ave that EMU students travel every week. Visit Laundry Pro at 1510 Washtenaw Ave, Suite D, call (734) 883-6714, and build a laundry plan that finally fits student life.",
      },
    ],
  },
  {
    slug: "laundry-pro-toarminas-pizza-combo",
    title: "Laundry Pro + Toarmina's Pizza: The Best Combo in Ypsilanti",
    date: "2026-03-08",
    excerpt:
      "Turn wash day into a mini night out: brand-new machines at Laundry Pro and legendary pizza next door on Washtenaw Avenue.",
    image: unsplash("photo-1513104890138-7c749659a591"),
    imageAlt:
      "Pizza close-up suggesting Toarmina's Pizza next to Laundry Pro laundromat Ypsilanti Michigan",
    readingTimeMinutes: 6,
    blocks: [
      {
        type: "h2",
        text: "Two local favorites, one convenient stop",
      },
      {
        type: "p",
        text: "Ypsilanti runs on small businesses that understand neighborhood rhythms. Laundry Pro and Toarmina's Pizza share more than an address—they share customers who want quality without hassle. Laundry Pro brings spotless floors, Dexter high-efficiency machines, and late hours until 2 AM; Toarmina's brings the World's Biggest Pizza, wings, subs, and the kind of comfort food that makes waiting actually enjoyable. Together they turn a chore into a ritual people recommend to friends.",
      },
      {
        type: "h2",
        text: "How to time your wash and your slice",
      },
      {
        type: "p",
        text: "Start washers first—they typically take longer than a pizza order. While cycles run, place a Toarmina's order online or walk next door for dine-in. By the time you are back, transition loads to dryers priced from 25¢ per cycle. Folding tables at Laundry Pro give you room to sort clean clothes while dinner settles. Students from EMU appreciate the walkable loop: campus to Washtenaw Ave, laundry started, hot food, dry clothes, home before curfew or study group.",
      },
      {
        type: "h3",
        text: "Perfect for families and weekend resets",
      },
      {
        type: "p",
        text: "Parents know laundry piles up faster than homework. Bring bulky bedding to Laundry Pro’s oversized washers, let kids pick toppings next door, and return for dry cycles with full bellies. The pairing reduces tantrums and keeps everyone moving. If you prefer full-service, schedule wash and fold or delivery and still celebrate small wins with pizza pickup on the way home.",
      },
      {
        type: "h2",
        text: "Safety, cleanliness, and community pride",
      },
      {
        type: "p",
        text: "A bright laundromat signals respect for customers. Laundry Pro emphasizes cleanliness and modern payment options like DexterPay-friendly equipment, while Toarmina's focuses on consistent kitchen quality. Both businesses anchor 1510 Washtenaw Ave as a place you can trust after dark—important when many competitors close early. Free WiFi and attentive staff round out the experience so you never feel stuck watching a spinner alone.",
      },
      {
        type: "h2",
        text: "Plan your next Washtenaw Avenue night",
      },
      {
        type: "p",
        text: "Check Laundry Pro’s Instagram for busy-hour tips, promotions, and community shoutouts, then browse Toarmina's menu before you visit. Need wash and fold, pick-up, or delivery? Call (734) 883-6714 or use the scheduling tools on this site. However you mix pizza and laundry, the combo saves time, supports Ypsilanti owners, and reminds you that practical errands can still feel like a treat.",
      },
    ],
  },
];

export function getAllPosts(): BlogPostMeta[] {
  return blogPosts.map(
    ({ slug, title, date, excerpt, image, imageAlt, readingTimeMinutes }) => ({
      slug,
      title,
      date,
      excerpt,
      image,
      imageAlt,
      readingTimeMinutes,
    }),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.slug !== slug).slice(0, limit);
}
