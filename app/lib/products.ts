export type ProductFact = {
  label: string;
  value: string;
};

export type ProductBlock = {
  title: string;
  paragraphs: string[];
  quote?: string;
  image: string;
  imageAlt: string;
};

export type ProductPoint = {
  title: string;
  body: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  chip: string;
  cardTitle: string;
  cardSummary: string;
  image: string;
  imageAlt: string;
  name: string;
  h1: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  facts: ProductFact[];
  overview: ProductBlock;
  benefitsTitle: string;
  benefitsIntro: string;
  benefits: ProductPoint[];
  processTitle: string;
  processIntro: string;
  processImage: string;
  processImageAlt: string;
  process: ProductPoint[];
  specsTitle: string;
  specs: ProductSpec[];
  applicationsTitle: string;
  applications: ProductPoint[];
  faqTitle: string;
  faq: ProductFaq[];
  ctaTitle: string;
  ctaDescription: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "cold-pressed-argan-oil",
    chip: "Cold Pressed",
    cardTitle: "Preserved Nutrients and Purity",
    cardSummary:
      "Our cold pressed extraction method preserves natural nutrients, rich antioxidants, light golden color, and the subtle, organic aroma of the argan kernel.",
    image: "/assets/img/what-is-argan-oil.webp",
    imageAlt: "Cold pressed extraction of Moroccan argan seeds and golden oil",
    name: "Cold Pressed Moroccan Argan Oil",
    h1: "Cold Pressed Moroccan Argan Oil Wholesale",
    lede: "Mechanically cold pressed from unroasted argan kernels in southwestern Morocco. This cosmetic-grade oil keeps vitamin E, essential fatty acids, and a light golden color intact — ready for serums, hair oils, and private label filling.",
    metaTitle: "Bulk Cold Pressed Argan Oil | Wholesale Cosmetic Grade",
    metaDescription:
      "Buy bulk cold-pressed Moroccan argan oil wholesale. Unrefined cosmetic grade for serums and hair oils. COA, factory-direct packing from Agadir.",
    keywords: [
      "argan oil wholesale",
      "cold pressed argan oil wholesale",
      "unrefined argan oil bulk",
      "cosmetic grade argan oil bulk",
      "pure argan oil for serums",
      "unroasted argan kernel oil",
    ],
    facts: [
      { label: "Extraction", value: "Mechanical cold press, no solvents" },
      { label: "Grade", value: "Cosmetic, unroasted kernels" },
      { label: "Profile", value: "Light gold, mild nutty aroma" },
      { label: "Use", value: "Face, hair, body, and blends" },
    ],
    overview: {
      title: "Why cold pressing matters for wholesale buyers",
      paragraphs: [
        "Cold pressed Moroccan argan oil is produced without chemical solvents and without the high heat used in cheaper refining. Kernels are cracked, then mechanically pressed so tocopherols, polyphenols, and oleic and linoleic acids stay in the oil instead of being stripped away.",
        "Formulators notice the difference in color, scent, and skin feel. A genuine cold pressed oil is light gold rather than dark amber, absorbs without a greasy film, and carries a subtle nutty aroma — not perfume, and not a rancid note from overheated kernels.",
        "We supply this grade as a single-ingredient oil (INCI: Argania Spinosa Kernel Oil) for brands that need a clean, traceable cosmetic raw material. It can be bottled as a pure facial or hair oil, or used as a stable lipid phase in creams, balms, and serums.",
      ],
      quote:
        "No hexane, no deodorizing, no blending with cheaper seed oils. The oil you receive is the oil that left the press.",
      image: "/assets/img/production-argan.jpg",
      imageAlt: "Traditional cold pressing of argan kernels in Morocco",
    },
    benefitsTitle: "What this oil brings to a formula",
    benefitsIntro:
      "Cold pressed argan oil is specified by cosmetic chemists because the nutrient profile survives extraction. That makes it useful as both a hero ingredient and a carrier oil.",
    benefits: [
      {
        title: "Vitamin E and antioxidants",
        body: "Natural tocopherols help protect the oil and the skin lipid barrier. This is why cold pressed argan oil is used in anti-aging serums and leave-on hair treatments.",
      },
      {
        title: "Essential fatty acids",
        body: "Oleic and linoleic acids support softness, elasticity, and a non-occlusive finish — suitable for face oils as well as body and beard products.",
      },
      {
        title: "Light sensory profile",
        body: "Unroasted kernels keep color pale gold and aroma mild. That is the expected cosmetic grade, distinct from roasted culinary oil.",
      },
      {
        title: "Formulation stability",
        body: "When stored away from heat and light, cold pressed argan oil remains a reliable lipid phase for emulsions, anhydrous serums, and hair oils.",
      },
    ],
    processTitle: "How we cold press for export",
    processIntro:
      "The process is mechanical from kernel to drum. Heat is not used as an extraction aid, and no solvent is introduced at any stage.",
    processImage: "/assets/img/argan-oil-from-morocco.jpg",
    processImageAlt: "Argan kernels prepared for cold pressing in Morocco",
    process: [
      {
        title: "Kernel selection",
        body: "Ripe fruit is collected in the Agadir argan region, dried, and cracked. Only sound, unroasted kernels go to the press for cosmetic oil.",
      },
      {
        title: "Mechanical pressing",
        body: "Kernels are pressed at controlled temperature. The oil is allowed to settle naturally so solids drop out without aggressive refining.",
      },
      {
        title: "Filtration and batch testing",
        body: "The oil is filtered, then checked for appearance, odor, peroxide value, and fatty acid profile before it is released for packing.",
      },
      {
        title: "Export packing",
        body: "Finished oil is filled into bottles, jerrycans, drums, or IBC totes according to your order, with lot numbers matching the certificate of analysis.",
      },
    ],
    specsTitle: "Typical specifications",
    specs: [
      { label: "INCI name", value: "Argania Spinosa Kernel Oil" },
      { label: "Botanical source", value: "Argania spinosa, Morocco" },
      { label: "Extraction", value: "Cold pressed, unroasted kernels" },
      { label: "Appearance", value: "Clear to slightly cloudy light golden oil" },
      { label: "Odor", value: "Mild, characteristic nutty aroma" },
      { label: "Additives", value: "None — 100% pure, unblended" },
      { label: "Packaging", value: "1 L to 1000 L IBC, private label on request" },
      { label: "Documents", value: "COA, SDS, origin, organic certificates" },
    ],
    applicationsTitle: "Where brands use cold pressed argan oil",
    applications: [
      {
        title: "Facial serums and moisturizers",
        body: "A few percent in an emulsion, or 100% as a facial oil, for hydration and a smooth, non-greasy finish.",
      },
      {
        title: "Hair oils and scalp treatments",
        body: "Leave-in serums, pre-shampoo oils, and professional salon treatments that need shine without heavy buildup.",
      },
      {
        title: "Beard and body care",
        body: "Beard oils, body oils, and massage blends that benefit from a light texture and a clean ingredient list.",
      },
      {
        title: "Private label SKUs",
        body: "A single-ingredient hero product that is easy to market and fill into dropper, pump, or roll-on bottles.",
      },
    ],
    faqTitle: "Cold pressed argan oil — buyer questions",
    faq: [
      {
        question: "Is your cold pressed argan oil refined or deodorized?",
        answer:
          "No. Cosmetic grade oil is filtered after pressing, not steam deodorized or chemically refined. Color, scent, and nutrient markers stay close to the pressed oil.",
      },
      {
        question: "What is the difference versus culinary argan oil?",
        answer:
          "Culinary argan oil is pressed from roasted kernels and has a stronger nutty flavor. Cold pressed cosmetic oil uses unroasted kernels for a lighter color, milder scent, and skincare use.",
      },
      {
        question: "Can I order samples before a bulk shipment?",
        answer:
          "Yes. We send samples so you can check color, odor, and skin feel against your spec before confirming drums or IBC volumes.",
      },
      {
        question: "What is the typical MOQ?",
        answer:
          "Wholesale bulk starts at 5 liters. Private label filling starts from about 50 to 100 units depending on bottle size.",
      },
    ],
    ctaTitle: "Request a cold pressed argan oil quote",
    ctaDescription:
      "Tell us the volume, packaging, and destination country. We will reply with pricing, lead time, and the documents required for your market.",
  },
  {
    slug: "organic-certified-argan-oil",
    chip: "Organic and Certified",
    cardTitle: "USDA and ECOCERT Standard",
    cardSummary:
      "100% organic certification. We supply ECOCERT and USDA Organic certified Moroccan argan oil, meeting strict international purity regulations.",
    image: "/assets/img/certified-organic.jpg",
    imageAlt: "Certified organic USDA and ECOCERT Moroccan argan oil",
    name: "USDA and ECOCERT Organic Argan Oil",
    h1: "USDA & ECOCERT Organic Argan Oil Wholesale",
    lede: "Certified organic Moroccan argan oil for brands that must document origin, farming practice, and processing. ECOCERT and USDA Organic paperwork travels with every wholesale lot, so your labels and import files stay aligned.",
    metaTitle: "Organic Argan Oil Wholesale | USDA & ECOCERT Morocco",
    metaDescription:
      "Organic argan oil wholesale from Morocco. USDA Organic and ECOCERT lots with batch certificates for USA and EU cosmetic brands.",
    keywords: [
      "organic argan oil wholesale",
      "USDA organic argan oil supplier",
      "ECOCERT argan oil Morocco",
      "certified organic Moroccan oil",
      "organic cosmetic oil bulk",
      "organic argan oil exporter",
    ],
    facts: [
      { label: "Certification", value: "ECOCERT and USDA Organic" },
      { label: "Scope", value: "Farming, press, and export lot" },
      { label: "Purity", value: "100% organic, unblended oil" },
      { label: "Markets", value: "USA, EU, and worldwide B2B" },
    ],
    overview: {
      title: "Organic certification that holds up at customs and on pack",
      paragraphs: [
        "Organic claims only work if the certificate chain is complete. Our organic argan oil is produced from certified groves in Morocco and processed under an organic control system recognized for both European and USDA Organic markets.",
        "Each wholesale shipment can include the organic certificate, transaction or batch documents, and a certificate of analysis. That package is what retailers, Amazon listings, and EU cosmetic files typically ask for when a product is labeled organic.",
        "The oil itself remains 100% Argania Spinosa Kernel Oil — cold pressed, unblended, and free from fragrance or cheaper vegetable oils. Certification sits on top of purity; it does not replace it.",
      ],
      quote:
        "If you print USDA Organic or COSMOS/ECOCERT language on a label, you need matching lot documents. We supply both the oil and the file.",
      image: "/assets/img/cosmetic-argan.jpg",
      imageAlt: "Certified organic Moroccan argan oil batch documentation",
    },
    benefitsTitle: "Why certified organic oil is a commercial advantage",
    benefitsIntro:
      "Organic status is not only a quality story. It is a procurement requirement for many clean-beauty retailers, pharmacies, and private label programs.",
    benefits: [
      {
        title: "Access to regulated markets",
        body: "USDA Organic and ECOCERT documentation supports US and EU organic labeling rules instead of leaving your brand with an unverifiable claim.",
      },
      {
        title: "Clean-beauty positioning",
        body: "Retail buyers and e-commerce platforms increasingly ask for organic certificates before listing a hero oil or serum.",
      },
      {
        title: "Batch-level proof",
        body: "Certificates are tied to the lot you receive, not a generic brochure. Audits and retailer questionnaires are easier to answer.",
      },
      {
        title: "Same oil, stronger file",
        body: "You still get cold pressed cosmetic argan oil. Certification adds traceability and farming standards without changing the INCI.",
      },
    ],
    processTitle: "How organic status is maintained",
    processIntro:
      "Organic integrity is controlled from grove to export. Mixing with conventional oil is not permitted on certified lots.",
    processImage: "/assets/img/argan-oil-morocco.jpg",
    processImageAlt: "Certified organic argan groves and cooperative harvest in Morocco",
    process: [
      {
        title: "Certified groves",
        body: "Fruit comes from argan forests and cooperatives operating under an organic inspection system in southwestern Morocco.",
      },
      {
        title: "Segregated processing",
        body: "Kernels and oil for organic orders are handled as identified lots so conventional material cannot enter the same batch.",
      },
      {
        title: "Inspection and certificates",
        body: "The control body issues organic certificates. We attach the relevant documents to your commercial invoice and packing list.",
      },
      {
        title: "Export release",
        body: "Organic lots ship with COA, SDS, origin papers, and organic files required by your broker or certification body.",
      },
    ],
    specsTitle: "Organic product specifications",
    specs: [
      { label: "INCI name", value: "Argania Spinosa Kernel Oil" },
      { label: "Organic status", value: "ECOCERT and USDA Organic" },
      { label: "Composition", value: "100% organic argan oil, no fillers" },
      { label: "Extraction", value: "Cold pressed from unroasted kernels" },
      { label: "Compliance markets", value: "USA, European Union, and export" },
      { label: "Lab file", value: "COA plus organic certificate per lot" },
      { label: "Packaging", value: "Retail bottles, drums, and IBC totes" },
      { label: "Private label", value: "Organic-claim SKUs on request" },
    ],
    applicationsTitle: "Best-fit uses for certified organic oil",
    applications: [
      {
        title: "Organic skincare lines",
        body: "Face oils, creams, and serums sold under USDA Organic or ECOCERT/COSMOS claims.",
      },
      {
        title: "Clean haircare",
        body: "Hair oils and scalp treatments for brands that need documented organic content rather than a marketing phrase.",
      },
      {
        title: "Pharmacy and natural retail",
        body: "Buyers in these channels typically request certificates before placing a first order.",
      },
      {
        title: "Private label organic SKUs",
        body: "We can fill and label organic argan oil under your brand with matching documentation.",
      },
    ],
    faqTitle: "Organic certification — buyer questions",
    faq: [
      {
        question: "Do you provide certificates for every shipment?",
        answer:
          "Yes. Organic lots ship with the relevant ECOCERT/USDA documents plus a batch COA. Tell us your market so we attach the correct set.",
      },
      {
        question: "Can conventional and organic oil be mixed?",
        answer:
          "No. Organic wholesale lots are segregated. If you need conventional oil for a different SKU, we treat it as a separate order.",
      },
      {
        question: "Is the oil suitable for USDA Organic finished products?",
        answer:
          "The oil is certified organic. Your finished formula still needs to meet USDA or EU organic rules for the other ingredients and labeling. We supply the ingredient file your certifier will ask for.",
      },
      {
        question: "Is there a price difference versus conventional oil?",
        answer:
          "Certified organic oil is quoted separately because inspection, segregation, and documentation add cost. Ask for both grades if you run mixed ranges.",
      },
    ],
    ctaTitle: "Request certified organic argan oil",
    ctaDescription:
      "Share your target market, volume, and whether you need USDA Organic, ECOCERT, or both on the file. We will send a quote with the matching certificate set.",
  },
  {
    slug: "bulk-argan-oil",
    chip: "Flexible Packaging",
    cardTitle: "Liters to IBC Totes",
    cardSummary:
      "We supply in bulk sizes ranging from 1-liter bottles and 5-liter jerrycans to 200-liter drums and 1000-liter IBC containers, adapting to any business size.",
    image: "/assets/img/ibc-containers.jpg",
    imageAlt: "Bulk Moroccan argan oil in liters, drums, and IBC containers ready for export",
    name: "Bulk Moroccan Argan Oil",
    h1: "Bulk Argan Oil Wholesale – 1 Liter to 1000L IBC",
    lede: "Export-ready Moroccan argan oil packed to the volume you actually run: sample bottles, 5-liter jerrycans, 200-liter drums, and 1000-liter IBC totes. Same oil, same lot documents, scaled to startups and factories.",
    metaTitle: "Bulk Argan Oil Wholesale | 1L, 5L, 200L Drums & IBC Totes",
    metaDescription:
      "Order wholesale Moroccan argan oil in 1-liter bottles, 5L jerrycans, 200L drums, and 1000L IBC totes. Export-ready packaging from Agadir, Morocco.",
    keywords: [
      "bulk argan oil wholesale",
      "argan oil IBC tote",
      "200 liter argan oil drum",
      "buy argan oil in bulk",
      "wholesale argan oil packaging",
      "argan oil exporter Morocco drums",
    ],
    facts: [
      { label: "MOQ", value: "From 5 liters wholesale" },
      { label: "Formats", value: "1 L, 5 L, 200 L, 1000 L" },
      { label: "Freight", value: "Air, express, or sea cargo" },
      { label: "Lead time", value: "Packed to order from Agadir" },
    ],
    overview: {
      title: "Packaging that matches how you manufacture",
      paragraphs: [
        "Bulk argan oil buyers rarely need a single bottle size. A formulator testing a serum wants liters. A contract manufacturer filling a national SKU wants drums. A large private label program may move IBC totes. We pack the same cold pressed Moroccan oil across that range so you do not change supplier as you scale.",
        "Containers are chosen for export: food-grade or industrial-grade as specified, sealed, labeled with lot number, and stacked for air or ocean freight from Agadir or Casablanca. Palletization and IBC cages are available for high-volume orders.",
        "Every format ships with the same documentation standard — certificate of analysis, SDS, and origin papers — so your incoming QC can match the lot on the drum to the file in your ERP.",
      ],
      quote:
        "Start at 5 liters to validate the oil. Move to drums or IBC when the formula is locked. The grade and the paperwork stay consistent.",
      image: "/assets/img/bulk-drums-morocco.jpg",
      imageAlt: "Wholesale argan oil drums prepared for export in Morocco",
    },
    benefitsTitle: "Why buyers choose flexible bulk packing",
    benefitsIntro:
      "The oil is only useful if it arrives in a container you can handle, store, and pour without waste or contamination.",
    benefits: [
      {
        title: "Low entry volume",
        body: "5-liter MOQ lets beauty startups and salons test quality and freight cost before committing to drums.",
      },
      {
        title: "Factory-scale drums",
        body: "200-liter drums are the standard for cosmetic plants and refill operations that dose oil into mixing tanks.",
      },
      {
        title: "IBC efficiency",
        body: "1000-liter totes reduce handling per kilo and cut packaging waste on recurring high-volume contracts.",
      },
      {
        title: "Clear landed-cost quotes",
        body: "We quote by format and Incoterm so you can compare air freight for urgent liters versus sea freight for drums.",
      },
    ],
    processTitle: "From press to pallet",
    processIntro:
      "Filling happens after the batch is approved. Packaging is selected from your purchase order, not a one-size default.",
    processImage: "/assets/img/pallet-export.jpg",
    processImageAlt: "Palletized bulk argan oil drums ready for global export",
    process: [
      {
        title: "Confirm volume and format",
        body: "You specify liters, jerrycans, drums, or IBC, plus destination port and preferred freight mode.",
      },
      {
        title: "Fill and lot-mark",
        body: "Approved oil is filled, sealed, and marked with batch codes that match the COA.",
      },
      {
        title: "Palletize for export",
        body: "Goods are packed for air or sea with the bracing and labeling required for international cargo.",
      },
      {
        title: "Dispatch with documents",
        body: "Commercial invoice, packing list, COA, SDS, and certificates travel with the shipment or ahead by email.",
      },
    ],
    specsTitle: "Available wholesale formats",
    specs: [
      { label: "1 liter", value: "Bottles for sampling, spas, and small refill" },
      { label: "5 liter", value: "Jerrycans — typical first wholesale order" },
      { label: "200 liter", value: "Export drums for manufacturers" },
      { label: "1000 liter", value: "IBC totes for high-volume contracts" },
      { label: "Private label", value: "Retail bottles filled at source" },
      { label: "MOQ", value: "From 5 L bulk / 50–100 labeled units" },
      { label: "Shipping", value: "DHL, air freight, LCL or FCL sea" },
      { label: "Origin", value: "Packed in Agadir, Morocco" },
    ],
    applicationsTitle: "Who orders bulk packaging",
    applications: [
      {
        title: "Cosmetic manufacturers",
        body: "Drums and IBC totes for emulsions, hair oils, and contract filling lines.",
      },
      {
        title: "Distributors",
        body: "Break-bulk liters and jerrycans for regional beauty wholesalers.",
      },
      {
        title: "Private label brands",
        body: "Bulk oil plus optional filling into your branded bottles in Morocco.",
      },
      {
        title: "Spas and salons",
        body: "1 L and 5 L formats for in-house treatments and retail refill.",
      },
    ],
    faqTitle: "Bulk packaging — buyer questions",
    faq: [
      {
        question: "What is the minimum order for bulk oil?",
        answer:
          "Wholesale bulk starts at 5 liters. Drums and IBC totes are quoted per container. Private label bottle runs start around 50 to 100 units.",
      },
      {
        question: "Can I mix formats in one shipment?",
        answer:
          "Yes, when the total volume meets the MOQ. For example, sample liters plus a drum can travel on the same packing list.",
      },
      {
        question: "Do drums and IBC totes include export documents?",
        answer:
          "Yes. COA, SDS, packing list, and origin documents are issued for the lot, regardless of container size.",
      },
      {
        question: "How do you ship 200 L drums and IBC totes?",
        answer:
          "Sea freight (LCL or FCL) is usual for drums and totes. Air freight is available when lead time is tight and volume is moderate.",
      },
    ],
    ctaTitle: "Get a bulk packaging quote",
    ctaDescription:
      "Send the volume, preferred container, and destination port. We will return pricing, packing options, and an estimated dispatch date.",
  },
  {
    slug: "traceable-argan-oil",
    chip: "Documentation",
    cardTitle: "Full Batch Traceability",
    cardSummary:
      "Every single wholesale argan oil batch comes with comprehensive documentation: Certificates of Analysis (COA), SDS (Safety Data Sheets), and export paperwork.",
    image: "/assets/img/cosmetic-argan.jpg",
    imageAlt: "Certified Moroccan argan oil batch quality analysis and documentation",
    name: "Traceable Wholesale Argan Oil with COA and SDS",
    h1: "Traceable Argan Oil Wholesale with COA and SDS",
    lede: "Lot-coded Moroccan argan oil with a document set your quality team can file: certificate of analysis, SDS, origin papers, and organic certificates when required. Traceability from cooperative to container, not a generic spec sheet.",
    metaTitle: "Traceable Argan Oil Wholesale | COA, SDS & Export Docs",
    metaDescription:
      "Every wholesale argan oil batch ships with COA, SDS, origin papers, and organic certificates. Full traceability from Moroccan cooperatives to your facility.",
    keywords: [
      "argan oil certificate of analysis",
      "argan oil SDS wholesale",
      "traceable Moroccan argan oil",
      "batch tested argan oil exporter",
      "COA SDS argan oil Morocco",
      "export documentation argan oil",
    ],
    facts: [
      { label: "COA", value: "Physicochemical tests per batch" },
      { label: "SDS", value: "Safety data for transport and storage" },
      { label: "Origin", value: "Lot linked to Moroccan source" },
      { label: "Export", value: "Invoice, packing list, certificates" },
    ],
    overview: {
      title: "Documentation is part of the product",
      paragraphs: [
        "International cosmetic and food buyers cannot accept oil with only a marketing PDF. Incoming QC, customs brokers, and retailer audits all ask for the same core file: what the oil is, how it tests, how it ships, and where it came from.",
        "We treat each wholesale batch as a documented lot. After pressing and filtration, the oil is tested. The certificate of analysis is tied to the lot number printed on bottles, drums, or IBC totes. The SDS covers handling and transport. Origin and organic papers complete the export set.",
        "That is the difference between a commodity drum and an ingredient you can put into a cosmetic product information file or a food import dossier.",
      ],
      quote:
        "If a document is missing, the oil is not release-ready. We do not ship undocumented lots.",
      image: "/assets/img/argan-oil-bulk-supply.jpg",
      imageAlt: "Wholesale argan oil supply with batch coding and export documents",
    },
    benefitsTitle: "What full traceability unlocks",
    benefitsIntro:
      "Traceable lots reduce friction at the border, in your lab, and with downstream customers who inherit your ingredient file.",
    benefits: [
      {
        title: "Faster customs clearance",
        body: "Brokers receive origin, commercial, and safety documents with the shipment instead of chasing them after arrival.",
      },
      {
        title: "Incoming QC match",
        body: "Your lab can compare the COA to the lot code on the drum and to your internal specification.",
      },
      {
        title: "Retailer and audit ready",
        body: "Amazon, pharmacies, and ISO-audited plants routinely request COA and SDS for botanical oils.",
      },
      {
        title: "Recall path",
        body: "If a question arises, the lot number traces back through packing to the press batch and cooperative source.",
      },
    ],
    processTitle: "How a batch is documented",
    processIntro:
      "Paperwork is generated from the same lot that is packed — not copied from a previous year.",
    processImage: "/assets/img/cosmetic-argan-bottles.jpg",
    processImageAlt: "Lot-coded cosmetic argan oil bottles prepared with batch documents",
    process: [
      {
        title: "Assign a lot number",
        body: "Each production batch receives a unique code used on labels, drums, and the COA.",
      },
      {
        title: "Laboratory analysis",
        body: "Appearance, odor, and key physicochemical markers are recorded for that lot.",
      },
      {
        title: "Compile the export file",
        body: "COA, SDS, certificate of origin, and organic certificates (when ordered) are attached to the commercial documents.",
      },
      {
        title: "Release for shipment",
        body: "Goods leave Agadir only when packing marks and the document set refer to the same lot.",
      },
    ],
    specsTitle: "Documents issued with wholesale lots",
    specs: [
      { label: "Certificate of Analysis", value: "Batch-specific lab results" },
      { label: "Safety Data Sheet", value: "GHS-aligned SDS for argan oil" },
      { label: "Certificate of origin", value: "Morocco origin for customs" },
      { label: "Organic certificates", value: "ECOCERT / USDA when ordered" },
      { label: "Commercial invoice", value: "Aligned with packing list" },
      { label: "Packing list", value: "Formats, weights, and lot codes" },
      { label: "ONSSA / export", value: "Moroccan export authorizations as required" },
      { label: "INCI", value: "Argania Spinosa Kernel Oil" },
    ],
    applicationsTitle: "Who needs documented lots",
    applications: [
      {
        title: "Cosmetic manufacturers",
        body: "PIF and GMP systems require identifiable lots and safety data for each ingredient.",
      },
      {
        title: "Importers and distributors",
        body: "Customs and downstream customers ask for COA and origin on first and repeat orders.",
      },
      {
        title: "Private label brands",
        body: "Retail listings and marketplace compliance often need SDS and certificates on file.",
      },
      {
        title: "Food-grade buyers",
        body: "Edible argan oil shipments follow the same lot logic with the appropriate food documents.",
      },
    ],
    faqTitle: "Traceability — buyer questions",
    faq: [
      {
        question: "Is the COA generic or batch-specific?",
        answer:
          "Batch-specific. The lot number on the COA matches the marks on your bottles, drums, or IBC totes.",
      },
      {
        question: "Can you send documents before the goods arrive?",
        answer:
          "Yes. We email the commercial set and certificates so your broker can pre-alert customs.",
      },
      {
        question: "Do you provide SDS in English?",
        answer:
          "Yes. SDS is issued for transport and workplace handling. Additional languages can be discussed for specific markets.",
      },
      {
        question: "What if my customer requests extra tests?",
        answer:
          "Tell us the method or marker you need. Additional laboratory tests can be arranged for a lot before or after packing.",
      },
    ],
    ctaTitle: "Request a documented wholesale lot",
    ctaDescription:
      "List the certificates your market requires. We will confirm the document set, volume, and packing before you place the order.",
  },
  {
    slug: "cooperative-argan-oil",
    chip: "Ethical Supply",
    cardTitle: "Direct Cooperative Sourcing",
    cardSummary:
      "Our direct cooperative sourcing model ensures 100% authenticity and supports sustainable harvesting practices by local women's cooperatives in Morocco.",
    image: "/assets/img/production-argan.jpg",
    imageAlt: "Traditional extraction of argan kernels by local cooperatives in Morocco",
    name: "Cooperative Sourced Moroccan Argan Oil",
    h1: "Argan Oil Wholesale from Berber Cooperatives in Morocco",
    lede: "Argan oil purchased at origin from Amazigh women's cooperatives in the Agadir region — not from anonymous traders. Direct sourcing keeps the oil authentic, the supply chain short, and more value with the communities that crack the kernels.",
    metaTitle: "Argan Oil Supplier Morocco | Berber Cooperatives Wholesale",
    metaDescription:
      "Argan oil supplier in Morocco working with Berber women cooperatives. Factory-direct wholesale export from Agadir, Souss-Massa.",
    keywords: [
      "argan oil supplier Morocco",
      "Berber cooperative argan oil",
      "cooperative argan oil wholesale",
      "women cooperative argan oil Morocco",
      "direct from source argan oil",
      "Amazigh cooperative argan oil",
    ],
    facts: [
      { label: "Source", value: "Cooperatives in Agadir region" },
      { label: "Model", value: "Direct, no anonymous blending" },
      { label: "Community", value: "Women's groups and local labor" },
      { label: "Forest", value: "UNESCO argan biosphere harvest" },
    ],
    overview: {
      title: "Authenticity starts with who pressed the kernels",
      paragraphs: [
        "Most of the skilled work in argan oil — collecting fruit, cracking nuts, and traditional know-how — sits with cooperatives across the Souss-Massa argan forest. Buying through long chains of traders makes it easy for oil to be blended, relabeled, or mixed with cheaper seeds before it reaches an exporter.",
        "We work directly with cooperatives so the oil you import is single-origin Moroccan argan oil with a known production path. That is how we can stand behind purity claims and still talk honestly about social impact: wages, local employment, and reinvestment stay closer to the people who produce the kernels.",
        "For brands, the commercial benefit is the same as the ethical one. A short chain is easier to audit, easier to explain on a product page, and harder to fake.",
      ],
      quote:
        "Direct cooperative supply is a quality control method as much as a sustainability story.",
      image: "/assets/img/argan-oil-morocco.jpg",
      imageAlt: "Amazigh women sourcing argan kernels sustainably in Morocco",
    },
    benefitsTitle: "What direct cooperative supply gives your brand",
    benefitsIntro:
      "Buyers choose this model when they need both a verifiable origin story and oil that has not been through an opaque wholesale market.",
    benefits: [
      {
        title: "Known origin",
        body: "Oil is linked to cooperatives in the Agadir argan region rather than a blended pool of unnamed lots.",
      },
      {
        title: "Fairer value split",
        body: "Direct purchasing supports wages and local processing instead of stacking intermediary margins.",
      },
      {
        title: "Traditional skill, export specs",
        body: "Kernel work stays with cooperatives; filtration, testing, packing, and freight meet international B2B standards.",
      },
      {
        title: "Story you can publish",
        body: "Packaging and websites can describe a real supply chain — cooperatives, cold pressing, and documents — without vague 'sourced in Morocco' language.",
      },
    ],
    processTitle: "From forest to export desk",
    processIntro:
      "Harvesting follows the rhythm of the argan forest. Export packing follows your purchase order.",
    processImage: "/assets/img/argan-beauty.jpg",
    processImageAlt: "Pure cooperative argan oil used in hair and skin care",
    process: [
      {
        title: "Harvest in the argan forest",
        body: "Ripe fruit is collected under practices meant to protect the UNESCO-listed argan woodland in southwestern Morocco.",
      },
      {
        title: "Cooperative processing",
        body: "Women's groups dry fruit, crack shells, and prepare kernels. This is the labor-intensive step that defines genuine argan oil.",
      },
      {
        title: "Cold pressing and control",
        body: "Kernels are pressed, the oil is filtered and tested, and lots are coded for the documents that travel with export.",
      },
      {
        title: "Wholesale dispatch",
        body: "We handle quotes, packing, freight, and certificates so you receive cooperative oil in a format your plant can use.",
      },
    ],
    specsTitle: "Cooperative supply specifications",
    specs: [
      { label: "Origin", value: "Southwestern Morocco, Agadir region" },
      { label: "Supply model", value: "Direct cooperative sourcing" },
      { label: "INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "Extraction", value: "Cold pressed, unroasted for cosmetic grade" },
      { label: "Social", value: "Women's cooperatives and local employment" },
      { label: "Environment", value: "Argan forest harvest, reduced middlemen" },
      { label: "Documents", value: "COA, SDS, origin, organic on request" },
      { label: "Formats", value: "Liters, drums, IBC, private label" },
    ],
    applicationsTitle: "Brands that specify cooperative oil",
    applications: [
      {
        title: "Clean and fair-trade beauty",
        body: "Lines that publish origin stories and need a supply chain that matches the copy.",
      },
      {
        title: "Spa and wellness",
        body: "Treatments sold around Moroccan heritage and women's cooperative production.",
      },
      {
        title: "Private label with a source story",
        body: "Retail oils that mention Morocco on pack and must be able to prove it.",
      },
      {
        title: "Distributors of authentic oils",
        body: "Importers who compete against diluted 'argan' products by showing a shorter chain.",
      },
    ],
    faqTitle: "Cooperative sourcing — buyer questions",
    faq: [
      {
        question: "Is the oil blended from many unknown lots?",
        answer:
          "No. We source from cooperatives we work with and keep lots identified. That is the point of a direct model.",
      },
      {
        question: "Can you share origin information for our website?",
        answer:
          "Yes. We can describe the region, cooperative model, and process at a level suitable for packaging and product pages, without inventing a farm that does not exist.",
      },
      {
        question: "Does ethical sourcing change the oil specification?",
        answer:
          "You still receive cold pressed cosmetic (or food-grade if ordered) argan oil with COA and SDS. The difference is the supply path behind that spec.",
      },
      {
        question: "Do you work only with women's cooperatives?",
        answer:
          "Women's groups carry most of the kernel work in this industry. Our purchasing is built around those cooperatives and the local labor around Agadir.",
      },
    ],
    ctaTitle: "Source argan oil from cooperatives",
    ctaDescription:
      "Tell us your volume and whether you need organic certification. We will quote cooperative-sourced oil packed for your market.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  return PRODUCTS.filter((product) => product.slug !== slug);
}
