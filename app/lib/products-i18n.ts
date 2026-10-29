import { PRODUCTS, type Product } from "./products";
import type { Locale } from "../i18n/config";

// Localized product records for FR, ES, AR
type ProductLocalization = Partial<Omit<Product, "slug" | "image" | "processImage">>;

const FR_PRODUCTS: Record<string, ProductLocalization> = {
  "cold-pressed-argan-oil": {
    chip: "Pression à Froid",
    cardTitle: "Nutriments et Pureté Préservés",
    cardSummary:
      "Notre extraction par pression mécanique à froid préserve les antioxydants, la vitamine E, la teinte dorée lumineuse et l'arôme délicat d'amande fraîche.",
    name: "Huile d'Argan du Maroc Pressée à Froid",
    h1: "Huile d'Argan du Maroc Pressée à Froid en Gros",
    lede:
      "Extraite mécaniquement à froid à partir d'amandons non torréfiés du sud-ouest marocain. Ce grade cosmétique haut de gamme conserve intacts la vitamine E et les acides gras essentiels — prêt pour sérums, soins capillaires et marques blanches.",
    metaTitle: "Huile d'Argan Pressée à Froid en Gros | Grade Cosmétique Vrac",
    metaDescription:
      "Achetez de l'huile d'argan marocaine pressée à froid en gros. Qualité cosmétique non raffinée pour sérums et soins. COA, conditionnement direct usine d'Agadir.",
    keywords: [
      "huile argan gros",
      "huile argan pressee a froid vrac",
      "huile argan non raffinee gros",
      "fournisseur huile argan cosmetique",
      "huile argan amandons crus maroc",
    ],
    facts: [
      { label: "Extraction", value: "Pression mécanique à froid, sans solvants" },
      { label: "Grade", value: "Cosmétique, amandons non torréfiés" },
      { label: "Profil", value: "Or clair limpide, subtil arôme de noisette" },
      { label: "Usage", value: "Visage, cheveux, corps et formulation" },
    ],
    overview: {
      title: "Pourquoi la pression à froid est essentielle pour les professionnels",
      paragraphs: [
        "L'huile d'argan pressée à froid est obtenue sans solvants chimiques et sans montée thermique agressive. Les amandons sont triés puis pressés mécaniquement afin de préserver l'intégralité des tocophérols, polyphénols, acides oléique et linoléique.",
        "Les formulateurs cosmétiques reconnaissent immédiatement la différence de texture, de couleur et de toucher. Une véritable huile pressée à froid est d'un doré translucide, pénètre sans laisser de film gras et diffuse une senteur discrète.",
        "Nous fournissons ce grade sous sa dénomination INCI pure (Argania Spinosa Kernel Oil) pour les marques exigeant une matière première saine, stable et traçable.",
      ],
      quote:
        "Sans hexane, sans désodorisation artificielle et sans coupage. L'huile livrée est exactement celle qui sort de la presse.",
      image: "/assets/img/production-argan.jpg",
      imageAlt: "Extraction traditionnelle par pression à froid d'huile d'argan au Maroc",
    },
    benefitsTitle: "Les apports de cette huile pour vos formules",
    benefitsIntro:
      "L'huile d'argan pressée à froid est plébiscitée par les chimistes cosmétiques pour la richesse de son profil nutritionnel intact.",
    benefits: [
      {
        title: "Vitamine E et antioxydants",
        body: "Les tocophérols naturels protègent la barrière lipidique cutanée contre le stress oxydatif, idéal pour les soins anti-âge.",
      },
      {
        title: "Acides gras essentiels",
        body: "Les oméga-6 et oméga-9 apportent souplesse, élasticité et hydratation sans occlusion cutanée.",
      },
      {
        title: "Toucher soyeux et léger",
        body: "Les amandons crus garantissent une huile fluide à absorption rapide, parfaite pour sérums et huiles de jour.",
      },
      {
        title: "Stabilité galénique",
        body: "Conservée à l'abri de la lumière et de la chaleur, elle offre une phase lipidique remarquablement stable.",
      },
    ],
    processTitle: "Notre protocole d'extraction pour l'export",
    processIntro:
      "Un procédé purement mécanique de l'amandon jusqu'au fût d'expédition, sans aucune chauffe artificielle.",
    processImageAlt: "Amandons d'argan sélectionnés pour la pression à froid",
    process: [
      {
        title: "Sélection rigoureuse des amandons",
        body: "Fruits mûrs récoltés dans le Souss, séchés et dépulpés. Seuls les amandons sains et non torréfiés sont retenus.",
      },
      {
        title: "Pressage mécanique continu",
        body: "Extraction à température maîtrisée avec décantation naturelle pour éliminer les résidus solides sans raffinage.",
      },
      {
        title: "Filtration et analyses de lot",
        body: "Double filtration puis contrôle de l'indice de peroxyde, de l'acidité et du profil d'acides gras avant libération.",
      },
      {
        title: "Conditionnement export sécurisé",
        body: "Mise en fûts, cuves IBC ou flacons avec étiquetage du numéro de lot concordant avec le certificat d'analyse.",
      },
    ],
    specsTitle: "Spécifications techniques types",
    specs: [
      { label: "Nom INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "Origine botanique", value: "Argania spinosa, Maroc" },
      { label: "Procédé", value: "Pression à froid mécanique, amandons crus" },
      { label: "Aspect", value: "Liquide huileux doré limpide" },
      { label: "Odeur", value: "Caractéristique, légère note de noisette" },
      { label: "Pureté", value: "100% pure, sans additif ni conservateur" },
      { label: "Conditionnements", value: "Flacons 50ml à cuves IBC 1000L" },
      { label: "Documents", value: "COA, FDS / SDS, certificats d'origine et bio" },
    ],
    applicationsTitle: "Applications pour les marques",
    applications: [
      {
        title: "Sérums visage et crèmes de soin",
        body: "En actif pur à 100% ou en phase huileuse d'émulsions pour restaurer la barrière cutanée.",
      },
      {
        title: "Soins capillaires et cuir chevelu",
        body: "Bains d'huile, sérums pointes et soins réparateurs professionnels sans effet alourdissant.",
      },
      {
        title: "Huiles de barbe et soins corps",
        body: "Texture idéale pour huiles sèches de massage, soins de rasage et baumes nourrissants.",
      },
      {
        title: "Produits en marque blanche",
        body: "Matière première d'exception pour lancer rapidement une gamme mono-ingrédient haut de gamme.",
      },
    ],
    faqTitle: "Questions fréquentes — Acheteurs professionnels",
    faq: [
      {
        question: "Votre huile d'argan pressée à froid est-elle raffinée ou désodorisée ?",
        answer: "Non. Elle est 100% vierge, non raffinée et non désodorisée pour préserver tous ses principes actifs.",
      },
      {
        question: "Fournissez-vous les documents techniques pour l'enregistrement cosmétique ?",
        answer: "Oui, chaque lot est accompagné de son Bulletin d'Analyses (COA), sa Fiche de Données de Sécurité (FDS) et certificats d'origine.",
      },
    ],
    ctaTitle: "Demander une cotation d'huile pressée à froid",
    ctaDescription:
      "Indiquez votre volume souhaité et recevez sous 24h notre grille tarifaire export avec fiche technique et échantillons.",
  },
  "organic-certified-argan-oil": {
    chip: "Certifiée Biologique",
    cardTitle: "Certifications USDA & ECOCERT",
    cardSummary:
      "Huile d'argan biologique certifiée par ECOCERT et USDA Organic. Traçabilité intégrale depuis les forêts d'arganiers protégées de l'UNESCO.",
    name: "Huile d'Argan Bio Certifiée ECOCERT & USDA",
    h1: "Huile d'Argan Bio Certifiée en Gros (USDA & ECOCERT)",
    lede:
      "Fourniture d'huile d'argan 100% biologique certifiée pour les laboratoires cosmétiques et importateurs exigeants. Certificats de transaction et traçabilité complète de l'arbre au flacon.",
    metaTitle: "Huile d'Argan Bio en Gros | Certifiée ECOCERT & USDA Maroc",
    metaDescription:
      "Achetez de l'huile d'argan bio certifiée en gros. ECOCERT, USDA Organic, fûts et cuves IBC direct producteur d'Agadir au Maroc.",
    keywords: [
      "huile argan bio gros",
      "huile argan ecocert vrac",
      "huile argan usda organic wholesale",
      "fournisseur argan biologique maroc",
    ],
    facts: [
      { label: "Certification", value: "ECOCERT Greenlife & USDA Organic" },
      { label: "Origine", value: "Réserve de biosphère de l'arganeraie UNESCO" },
      { label: "Pureté", value: "100% biologique, sans résidus de pesticides" },
      { label: "Audit", value: "Contrôles annuels et certificats par lot" },
    ],
    overview: {
      title: "Garantie biologique et conformité réglementaire internationale",
      paragraphs: [
        "Les consommateurs et régulateurs exigent des preuves tangibles. Notre huile d'argan biologique dispose des doubles certifications ECOCERT (règlement européen) et USDA-NOP pour le marché américain.",
        "Nous délivrons des certificats de transaction (TC) pour chaque commande export, permettant à votre marque d'apposer les logos officiels sur vos packagings en toute conformité.",
      ],
      quote: "Une conformité biologique stricte et auditée pour valoriser vos formules clean label.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "Certification biologique de l'huile d'argan marocaine",
    },
    benefitsTitle: "La valeur ajoutée du bio pour votre marque",
    benefitsIntro: "Répondez aux exigences croissantes des consommateurs pour des cosmétiques éthiques et biologiques certifiés.",
    benefits: [
      {
        title: "Allégation biologique officielle",
        body: "Droit d'utiliser les logos reconnus internationalement pour justifier votre positionnement premium.",
      },
      {
        title: "Pureté analytique garantie",
        body: "Analyses régulières garantissant l'absence de solvants, métaux lourds et pesticides.",
      },
    ],
    processTitle: "Contrôle de la chaîne de valeur biologique",
    processIntro: "De la cueillette sauvage dans l'arganeraie jusqu'à la mise en fût certifiée.",
    processImageAlt: "Récolte biologique des noix d'argan au Maroc",
    process: [
      { title: "Cueillette en zone certifiée", body: "Récolte manuelle dans les forêts d'arganiers contrôlées par ECOCERT." },
      { title: "Pressage sur ligne dédiée", body: "Ligne d'extraction exclusivement réservée aux lots biologiques." },
    ],
    specsTitle: "Spécifications de conformité biologique",
    specs: [
      { label: "Organisme certificateur", value: "ECOCERT Greenlife / USDA" },
      { label: "Statut", value: "100% Organic certified" },
      { label: "INCI", value: "Argania Spinosa Kernel Oil" },
    ],
    applicationsTitle: "Marchés cibles",
    applications: [
      { title: "Cosmétique biologique certifiée", body: "Ingrédient noble pour gammes Cosmos Organic et USDA Organic." },
    ],
    faqTitle: "Questions sur la certification biologique",
    faq: [
      {
        question: "Fournissez-vous le certificat de transaction pour notre douane ?",
        answer: "Oui, le certificat de transaction ECOCERT ou USDA est émis pour chaque expédition commerciale.",
      },
    ],
    ctaTitle: "Commander de l'huile d'argan bio certifiée",
    ctaDescription: "Recevez nos certificats actuels et notre offre tarifaire pour vos besoins en huile biologique.",
  },
  "bulk-argan-oil": {
    chip: "Vrac Industriel",
    cardTitle: "Fûts de 200L et Cuves IBC 1000L",
    cardSummary:
      "Capacités de production industrielle pour les marques, formulateurs et usines de conditionnement. Livraisons fiables et constantes.",
    name: "Huile d'Argan en Vrac (Fûts & IBC)",
    h1: "Huile d'Argan en Vrac Industriel en Gros",
    lede:
      "Approvisionnement direct pour marques cosmétiques et usines de fabrication. Conditionnements en jerrycans de 25L, fûts métalliques de 200L et conteneurs IBC de 1 000L au départ d'Agadir.",
    metaTitle: "Huile d'Argan en Vrac Industriel | Fûts 200L et Cuves IBC Maroc",
    metaDescription:
      "Fournisseur d'huile d'argan en vrac industriel. Fûts de 200L et conteneurs IBC 1000L. Expédition maritime et aérienne mondiale depuis Agadir.",
    keywords: ["huile argan vrac", "futs huile argan 200l", "cuves ibc argan", "huile argan usine maroc"],
    facts: [
      { label: "Conditionnements", value: "25L, 200L et IBC 1000L" },
      { label: "Expédition", value: "FOB Agadir, CIF, DDP selon destination" },
      { label: "Capacité", value: "Plus de 20 tonnes par mois" },
      { label: "Documents", value: "Connaissement, COA, FDS, certificat d'origine" },
    ],
    overview: {
      title: "Logistique d'exportation taillée pour les industriels",
      paragraphs: [
        "Pour les fabricants industriels, la régularité d'approvisionnement et l'homogénéité des lots sont primordiales. Nous conditionnons l'huile sous atmosphère protectrice pour préserver sa fraîcheur pendant le transport maritime.",
        "Notre plateforme d'Agadir gère l'ensemble des formalités douanières d'exportation pour une livraison fluide dans vos entrepôts.",
      ],
      quote: "Une logistique internationale éprouvée pour sécuriser vos chaînes de production.",
      image: "/assets/img/wholesale-argan-oil.jpg",
      imageAlt: "Fûts d'huile d'argan prêts à l'exportation",
    },
    benefitsTitle: "Avantages de notre service vrac",
    benefitsIntro: "Tarifs dégressifs à l'échelle industrielle et stabilité d'approvisionnement tout au long de l'année.",
    benefits: [
      { title: "Tarifs usine compétitifs", body: "Direct producteur sans intermédiaire pour maximiser vos marges." },
      { title: "Conditionnement aux normes internationales", body: "Fûts homologués pour le transport de denrées et cosmétiques." },
    ],
    processTitle: "Préparation des commandes industrielles",
    processIntro: "Mise en fûts contrôlée et palettisation sécurisée.",
    processImageAlt: "Conditionnement de fûts d'huile d'argan",
    process: [
      { title: "Purge et inertage", body: "Conditionnement sous azote pour prévenir toute oxydation durant le transit." },
      { title: "Palettisation cerclée", body: "Palettes filmées prêtes pour conteneur maritime standardisé." },
    ],
    specsTitle: "Fiche logistique",
    specs: [
      { label: "Poids net fût 200L", value: "Env. 185 kg net" },
      { label: "Cuve IBC 1000L", value: "Env. 920 kg net" },
      { label: "Port d'embarquement", value: "Port d'Agadir / Casablanca" },
    ],
    applicationsTitle: "Utilisations industrielles",
    applications: [
      { title: "Formulations en grande série", body: "Shampoings, après-shampoings et laits corporels industriels." },
    ],
    faqTitle: "Questions sur le vrac industriel",
    faq: [
      {
        question: "Quel est le délai d'expédition pour des fûts de 200L ?",
        answer: "Les commandes en fûts sont généralement prêtes à l'expédition sous 3 à 7 jours ouvrés.",
      },
    ],
    ctaTitle: "Demander un devis pour commande en fûts ou IBC",
    ctaDescription: "Obtenez nos tarifs industriels FOB Agadir ou CIF port de destination.",
  },
  "traceable-argan-oil": {
    chip: "Traçabilité Complète",
    cardTitle: "COA et FDS pour Chaque Lot",
    cardSummary:
      "Documentation analytique complète et transparence totale. Conforme aux normes UE et FDA pour vos dossiers réglementaires.",
    name: "Huile d'Argan Traçable avec COA et FDS",
    h1: "Huile d'Argan Traçable avec Analyses de Laboratoire (COA)",
    lede:
      "Chaque livraison est adossée à un certificat d'analyse complet réalisé en laboratoire certifié : profil d'acides gras, peroxyde et acidité pour votre dossier d'information produit (DIP).",
    metaTitle: "Huile d'Argan Traçable avec COA | Documents Export Maroc",
    metaDescription:
      "Huile d'argan marocaine avec analyses complètes de laboratoire. COA par lot, FDS / MSDS, conformité DIP européen et enregistrement FDA.",
    keywords: ["coa huile argan", "analyses laboratoire argan", "huile argan tracable", "dossier dip argan"],
    facts: [
      { label: "Analyses", value: "Indice peroxyde, acidité oléique, stérols" },
      { label: "Conformité", value: "Règlement CE 1223/2009 et FDA" },
      { label: "Traçabilité", value: "Numéro de lot unique par contenant" },
    ],
    overview: {
      title: "La transparence documentaire indispensable aux marques",
      paragraphs: [
        "L'enregistrement de vos produits cosmétiques requiert des fiches d'analyse irréprochables. Nous fournissons pour chaque expédition les résultats d'analyses physico-chimiques détaillés.",
      ],
      quote: "Une conformité technique absolue pour faciliter vos enregistrements réglementaires.",
      image: "/assets/img/private-label-argan.jpg",
      imageAlt: "Laboratoire de contrôle qualité de l'huile d'argan",
    },
    benefitsTitle: "Sécurité réglementaire",
    benefitsIntro: "Passez sans encombre les audits de qualité et les contrôles douaniers.",
    benefits: [
      { title: "Dossier cosmétique prêt à l'emploi", body: "Données complètes pour vos évaluateurs de sécurité." },
    ],
    processTitle: "Contrôles analytiques",
    processIntro: "Prélèvement et tests systématiques avant chaque départ.",
    processImageAlt: "Tests de laboratoire sur l'huile d'argan",
    process: [
      { title: "Échantillonnage de cuve", body: "Prélèvement représentatif selon les normes ISO." },
      { title: "Analyses chromatographiques", body: "Vérification de la pureté variétale et absence de contamination." },
    ],
    specsTitle: "Paramètres contrôlés",
    specs: [
      { label: "Acidité oléique", value: "< 0.8% (Cosmétique extra vierge)" },
      { label: "Indice de peroxyde", value: "< 10 meq O2/kg" },
    ],
    applicationsTitle: "Utilisations professionnelles",
    applications: [
      { title: "Marques cosmétiques réglementées", body: "Dépôts auprès des autorités sanitaires internationales." },
    ],
    faqTitle: "Questions sur la traçabilité",
    faq: [
      {
        question: "Le COA est-il fourni avant l'expédition ?",
        answer: "Oui, nous pouvons vous transmettre le COA du lot réservé avant l'embarquement pour validation par votre laboratoire.",
      },
    ],
    ctaTitle: "Demander un spécimen de COA",
    ctaDescription: "Consultez un exemple de certificat d'analyse complet et échangez avec notre service qualité.",
  },
  "cooperative-argan-oil": {
    chip: "Approvisionnement Éthique",
    cardTitle: "Coopératives Féminines du Souss",
    cardSummary:
      "Huile d'argan issue directement du travail des femmes berbères dans les coopératives traditionnelles d'Agadir et d'Essaouira.",
    name: "Huile d'Argan des Coopératives Féminines du Maroc",
    h1: "Huile d'Argan Issue des Coopératives Féminines en Gros",
    lede:
      "Approvisionnement éthique et équitable auprès des coopératives de femmes de la région d'Agadir. Soutenez l'émancipation économique locale tout en bénéficiant d'une huile d'exception.",
    metaTitle: "Huile d'Argan des Coopératives en Gros | Commerce Équitable Maroc",
    metaDescription:
      "Achetez de l'huile d'argan marocaine issue des coopératives féminines du Souss. Commerce équitable, impact social positif et qualité artisanale certifiée.",
    keywords: ["cooperative huile argan", "cooperatives femmes maroc", "argan commerce equitable", "argan agadir cooperatif"],
    facts: [
      { label: "Impact", value: "Revenu équitable pour les femmes berbères" },
      { label: "Savoir-faire", value: "Concassage manuel traditionnel" },
      { label: "Région", value: "Villages de la région Souss-Massa" },
    ],
    overview: {
      title: "L'impact social au cœur de votre storytelling de marque",
      paragraphs: [
        "Les coopératives féminines préservent le savoir-faire ancestral du concassage des noix d'argan. En achetant chez nous, vous assurez un débouché stable et équitable à des centaines de familles rurales.",
      ],
      quote: "Une huile d'excellence qui fait vivre les communautés locales de l'arganeraie.",
      image: "/assets/img/what-is-argan-oil.webp",
      imageAlt: "Femmes berbères préparant les noix d'argan en coopérative",
    },
    benefitsTitle: "Pourquoi choisir l'approvisionnement coopératif",
    benefitsIntro: "Un argumentaire de vente puissant et authentique pour les consommateurs engagés.",
    benefits: [
      { title: "Récit de marque authentique", body: "Partagez l'histoire humaine et durable derrière vos soins." },
    ],
    processTitle: "Le rôle des coopératives",
    processIntro: "Un partenariat respectueux fondé sur la juste rémunération du travail manuel.",
    processImageAlt: "Travail coopératif de l'argan",
    process: [
      { title: "Concassage manuel des noix", body: "Geste traditionnel précis pour libérer des amandons intacts." },
    ],
    specsTitle: "Caractéristiques",
    specs: [
      { label: "Filière", value: "Coopératives de l'arganeraie marocaine" },
      { label: "Impact social", value: "Soutien aux femmes rurales du Souss" },
    ],
    applicationsTitle: "Valorisation marketing",
    applications: [
      { title: "Lignes cosmétiques éthiques", body: "Idéal pour marques engagées dans la durabilité et le commerce équitable." },
    ],
    faqTitle: "Questions sur les coopératives",
    faq: [
      {
        question: "Puis-je mentionner les coopératives sur mes emballages ?",
        answer: "Absolument. Nous vous fournissons les éléments de contexte véridiques pour enrichir votre communication.",
      },
    ],
    ctaTitle: "Soutenir la filière coopérative",
    ctaDescription: "Recevez nos tarifs et découvrez comment associer votre marque aux coopératives d'Agadir.",
  },
  "pure-moroccan-argan-oil": {
    chip: "Huile Pure",
    cardTitle: "Huile d'Argan Marocaine 100% Pure",
    cardSummary:
      "L'huile cosmétique mono-ingrédient de référence. Pressée à froid, brute ou désodorisée pour visage, cheveux et corps.",
    name: "Huile d'Argan 100% Pure Marque Blanche",
    h1: "Huile d'Argan 100% Pure — Marque Blanche & Vrac",
    lede:
      "Huile d'argan cosmétique pure pressée à froid, conditionnée sous votre marque. Flacons compte-gouttes verre 30ml, 50ml et 100ml avec bouchons dorés, bambou ou noir mat. Certificat d'analyse pour chaque lot.",
    metaTitle: "Huile d'Argan 100% Pure Marque Blanche | Vrac & Flacons",
    metaDescription:
      "Huile d'argan marocaine 100% pure marque blanche. Flacons compte-gouttes 30ml, 50ml, 100ml. MOQ dès 100 unités. Export direct Agadir avec COA.",
    keywords: [
      "huile argan pure marque blanche",
      "flacon pipette huile argan gros",
      "fournisseur huile argan conditionnee",
      "huile argan personnalisee",
      "huile argan sous votre marque",
    ],
    facts: [
      { label: "Extraction", value: "Pression mécanique à froid 100% pure" },
      { label: "Formats", value: "Flacons pipette verre 30ml, 50ml, 100ml" },
      { label: "MOQ", value: "100 unités (étiquette personnalisée)" },
      { label: "Délais", value: "2 à 3 semaines de fabrication et expédition" },
    ],
    overview: {
      title: "Le produit phare incontournable pour les marques cosmétiques",
      paragraphs: [
        "L'huile d'argan marocaine pure (INCI: Argania Spinosa Kernel Oil) demeure la référence absolue en matière de soin botanique mono-ingrédient. Extraite d'amandons crus sélectionnés au cœur des coopératives de la région d'Agadir, elle offre une teneur maximale en vitamine E et oméga-6.",
        "Pour les instituts, salons, spas et boutiques en ligne, cette formule clé en main permet un lancement rapide avec des marges attractives. Nous fournissons des flacons étiquetés à vos couleurs avec le choix de finitions haut de gamme (bambou, or métallique, noir mat).",
        "Disponible en version vierge naturelle (léger arôme d'amande) ou désodorisée à la vapeur douce pour une compatibilité totale avec vos préférences olfactives.",
      ],
      quote:
        "Zéro solvant, zéro silicone, zéro eau. Le véritable or liquide du Maroc directement embouteillé à la source.",
      image: "/assets/img/cosmetic-argan.jpg",
      imageAlt: "Gouttes d'huile d'argan pure marocaine et flacon en verre doré",
    },
    benefitsTitle: "Atouts majeurs pour votre gamme",
    benefitsIntro:
      "Pourquoi l'huile pure d'argan reste le best-seller intemporel de la beauté naturelle.",
    benefits: [
      {
        title: "Soin universel multi-zones",
        body: "Un seul produit pour hydrater le visage, sublimer les pointes de cheveux et fortifier les ongles.",
      },
      {
        title: "Richesse exceptionnelle en vitamine E",
        body: "Plus de 600 mg/kg de tocophérols naturels luttant contre le vieillissement cutané.",
      },
      {
        title: "Absorption non comédogène",
        body: "Indice comédogène de 0 : pénètre sans obstruer les pores ni laisser de film collant.",
      },
      {
        title: "Fidélité client garantie",
        body: "Produit récurrent à fort taux de réachat grâce à son efficacité visible immédiate.",
      },
    ],
    processTitle: "Notre protocole d'embouteillage sur mesure",
    processIntro:
      "De l'extraction en coopérative jusqu'au carton de vente prêt pour vos canaux de distribution.",
    processImageAlt: "Ligne de conditionnement cosmétique d'huile d'argan au Maroc",
    process: [
      {
        title: "Sélection des amandons",
        body: "Tri rigoureux des amandons crus non torréfiés et pression mécanique à température contrôlée.",
      },
      {
        title: "Double filtration stérile",
        body: "Filtration mécanique éliminant les micro-particules sans altérer les principes actifs.",
      },
      {
        title: "Remplissage en salle propre",
        body: "Dosage de précision sous atmosphère stérile respectant les normes ISO 22716 BPF.",
      },
      {
        title: "Pose d'étiquettes étanches et bague d'inviolabilité",
        body: "Application d'étiquettes waterproof avec marquage du numéro de lot et date limite.",
      },
    ],
    specsTitle: "Spécifications de conditionnement",
    specs: [
      { label: "Dénomination INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "Contenances standards", value: "30 ml, 50 ml, 100 ml" },
      { label: "Types de pipettes", value: "Compte-gouttes verre (bague bambou, or brillant, argent, noir mat)" },
      { label: "Finitions flacons", value: "Ambré anti-UV, dépoli transparent, noir mat, verre violet Miron" },
      { label: "Durée de conservation", value: "24 mois dans un endroit sec et frais" },
      { label: "MOQ", value: "100 unités par référence" },
      { label: "Documents remis", value: "Bulletin d'analyse (COA), FDS, certificat d'origine" },
    ],
    applicationsTitle: "Canaux de distribution cibles",
    applications: [
      {
        title: "Marques de Clean Beauty",
        body: "Idéal comme sérum visage signature à forte valeur perçue.",
      },
      {
        title: "Spas & Instituts de Beauté",
        body: "Soin prestige cabine et produit de revente en boutique.",
      },
      {
        title: "Salons de Coiffure",
        body: "Finition brillante et protectrice pour les cheveux après coiffage.",
      },
      {
        title: "E-Commerce & Marketplaces",
        body: "Lancement facile et rapide avec code-barres conforme.",
      },
    ],
    faqTitle: "Questions fréquentes — Marque Blanche Huile d'Argan",
    faq: [
      {
        question: "Proposez-vous une version désodorisée ?",
        answer:
          "Oui, nous proposons l'huile brute avec son odeur naturelle discrète ainsi qu'une version désodorisée sans solvant.",
      },
      {
        question: "Fournissez-vous les étiquettes et emballages ?",
        answer:
          "Tout à fait. Nous prenons en charge l'impression de vos étiquettes étanches et pouvons aussi conditionner dans vos propres contenants.",
      },
      {
        question: "Quel est le minimum de commande ?",
        answer:
          "Le seuil démarre dès 100 flacons pour un lancement en marque blanche sans risque financier.",
      },
    ],
    ctaTitle: "Lancez votre gamme d'huile d'argan personnalisée",
    ctaDescription:
      "Demandez vos échantillons et votre devis de conditionnement sur mesure auprès de nos équipes à Agadir.",
  },
  "argan-hair-treatment-serum": {
    chip: "Soin Cheveux",
    cardTitle: "Sérum Capillaire Traitant à l'Argan",
    cardSummary:
      "Formule enrichie pour brillance, contrôle des frisottis et protection thermique. Fini soyeux et léger.",
    name: "Sérum Capillaire à l'Argan Marque Blanche",
    h1: "Sérum Capillaire Traitant à l'Argan en Gros & Marque Blanche",
    lede:
      "Sérum professionnel de qualité salon formulé à base d'huile d'argan du Maroc, de silicones volatils doux et de vitamine E. Apporte un éclat miroir instantané, dompte les frisottis et protège jusqu'à 230°C.",
    metaTitle: "Sérum Cheveux à l'Argan Marque Blanche | Soin Capillaire Gros",
    metaDescription:
      "Sérum cheveux à l'argan marque blanche. Flacons pompe 50ml et 100ml. Thermo-protecteur, anti-frizz, brillance salon. MOQ dès 200 unités.",
    keywords: [
      "serum argan cheveux marque blanche",
      "serum capillaire argan gros",
      "soin professionnel argan salon",
      "anti frisottis argan sous marque",
    ],
    facts: [
      { label: "Formule", value: "Huile d'argan + silicones cosmétiques légers + Vitamine E" },
      { label: "Flaconnage", value: "Flacons pompe 50ml et 100ml en verre ambré ou givré" },
      { label: "MOQ", value: "200 unités avec sérigraphie ou étiquette personnalisée" },
      { label: "Propriétés", value: "Protection chaleur 230°C, discipline et brillance miroir" },
    ],
    overview: {
      title: "L'expertise salon au service de vos soins capillaires",
      paragraphs: [
        "L'huile d'argan est plébiscitée dans le monde entier pour sublimer la chevelure. Notre sérum traitant professionnel a été conçu pour offrir l'éclat et la protection de l'argan sans alourdir la fibre capillaire.",
        "Sa texture soyeuse gaine instantanément les pointes abîmées, lisse les écailles et crée un bouclier anti-humidité durable. Il convient à tous les types de cheveux, des plus fins aux plus crépus.",
        "Disponible avec nos flacons pompe luxe dorés ou noirs, avec option de parfum signature oriental, vanille ambrée ou sans parfum.",
      ],
      quote:
        "Brillance miroir, toucher soyeux et protection thermique en quelques gouttes.",
      image: "/assets/img/argan-oil-for-hair.jpg",
      imageAlt: "Application du sérum d'huile d'argan pour des cheveux soyeux et brillants",
    },
    benefitsTitle: "Bénéfices constatés en salon",
    benefitsIntro:
      "Une efficacité immédiate perceptible dès la première application.",
    benefits: [
      {
        title: "Bouclier thermo-protecteur 230°C",
        body: "Préserve la kératine des agressions du fer à lisser et du sèche-cheveux.",
      },
      {
        title: "Action anti-frisottis 48h",
        body: "Imperméabilise la fibre contre les variations d'humidité ambiante.",
      },
      {
        title: "Texture aérienne non grasse",
        body: "Laisse les cheveux légers, fluides et soyeux au toucher.",
      },
      {
        title: "Scellage des pointes fourchues",
        body: "Réduit considérablement la casse mécanique lors du brossage.",
      },
    ],
    processTitle: "Formulation et contrôle qualité",
    processIntro:
      "Conçu en laboratoire cosmétique certifié ISO 22716.",
    processImageAlt: "Laboratoire de formulation de sérum pour cheveux au Maroc",
    process: [
      {
        title: "Mélange haute vitesse",
        body: "Homogénéisation sous vide pour garantir la stabilité sans déphasage.",
      },
      {
        title: "Aromatisation aux normes IFRA",
        body: "Ajout d'essences parfumées testées hypoallergéniques.",
      },
      {
        title: "Contrôle de viscosité",
        body: "Ajustement rigoureux pour un dosage fluide via pompe cosmétique.",
      },
      {
        title: "Conditionnement hermétique",
        body: "Flacons verrouillables évitant tout risque de fuite pendant le transport.",
      },
    ],
    specsTitle: "Spécifications techniques",
    specs: [
      { label: "Usage", value: "Sérum sans rinçage thermo-protecteur et réparateur" },
      { label: "Formats", value: "50 ml et 100 ml" },
      { label: "Flacons", value: "Verre ambré, PET cristal ou dépoli" },
      { label: "Pompes", value: "Pompe traitement cosmétique (or, argent, noir, blanc)" },
      { label: "MOQ", value: "200 unités" },
      { label: "Délais", value: "2 à 4 semaines" },
    ],
    applicationsTitle: "Marchés privilégiés",
    applications: [
      {
        title: "Salons de coiffure professionnels",
        body: "Produit phare de revente comptoir et finition au bac.",
      },
      {
        title: "Marques e-commerce capillaires",
        body: "Soin star pour abonnements et routines complètes.",
      },
    ],
    faqTitle: "FAQ — Sérum Capillaire à l'Argan",
    faq: [
      {
        question: "Ce sérum graisse-t-il les cheveux fins ?",
        answer:
          "Non, les silicones volatils s'évaporent rapidement pour ne laisser qu'un voile soyeux d'argan ultra-léger.",
      },
      {
        question: "Convient-il aux cheveux colorés ou traités au lissage brésilien ?",
        answer:
          "Parfaitement. Il est sans sulfates ni sels décapants, préservant ainsi l'intensité de la couleur et les lissages.",
      },
    ],
    ctaTitle: "Développez votre sérum capillaire sur mesure",
    ctaDescription:
      "Choisissez votre flacon pompe, votre parfum et lancez votre produit de coiffage professionnel.",
  },
  "argan-prickly-pear-face-elixir": {
    chip: "Anti-Âge",
    cardTitle: "Élixir Visage Argan & Figue de Barbarie",
    cardSummary:
      "Mélange précieux associant huile d'argan bio et huile rare de pépins de figue de barbarie pour une régénération cellulaire intense.",
    name: "Élixir Visage Argan & Figue de Barbarie",
    h1: "Élixir Visage Argan & Figue de Barbarie — Anti-Âge Luxe en Gros",
    lede:
      "Le summum du luxe végétal marocain. Une synergie d'huile d'argan pressée à froid et de précieuse huile de pépins de figue de barbarie (Opuntia Ficus-Indica). Conçu pour les gammes anti-âge haut de gamme exigeant une efficacité antirides prouvée.",
    metaTitle: "Élixir Visage Argan & Figue de Barbarie | Anti-Âge Marque Blanche",
    metaDescription:
      "Élixir anti-âge argan et pépins de figue de barbarie sous votre marque. Flacons 30ml/50ml. Formule bio d'exception. Forte marge. MOQ dès 100 unités.",
    keywords: [
      "elixir argan figue de barbarie marque blanche",
      "huile pepin figue de barbarie argan gros",
      "soin anti age luxe maroc sous marque",
      "serum visage argan barbarie",
    ],
    facts: [
      { label: "Actifs clés", value: "Huile d'Argan Bio + Huile de Pépins de Figue de Barbarie pure" },
      { label: "Taux d'antioxydants", value: "Plus de 1000 mg/kg de vitamine E naturelle" },
      { label: "Flaconnage", value: "Flacons verre pipette 30ml et 50ml noir mat ou ambré" },
      { label: "Valeur marchande", value: "Positionnement luxe prestige (60€ à 120€ prix public)" },
    ],
    overview: {
      title: "La synergie anti-âge la plus puissante du terroir marocain",
      paragraphs: [
        "L'huile de pépins de figue de barbarie est considérée comme l'élixir végétal le plus précieux au monde : il faut près d'une tonne de figues pour extraire un seul litre d'huile pure de pépins. Sa concentration record en stérols et en vitamine E surpasse toutes les autres huiles végétales.",
        "En l'associant à l'huile d'argan du Maroc, cet élixir apporte une réponse complète aux peaux matures : lissage des ridules, atténuation des cernes, raffermissement et éclat du teint.",
        "Prêt pour vos flacons sérigraphiés ou étiquetés avec bouchon pipette luxe.",
      ],
      quote:
        "Deux joyaux botaniques marocains réunis dans un nectar de jeunesse à pénétration rapide.",
      image: "/assets/img/Prickly Pear Seed Oil.jpg",
      imageAlt: "Fruits et graines de figue de barbarie pour extraction d'huile",
    },
    benefitsTitle: "Propriétés anti-âge d'exception",
    benefitsIntro:
      "Une richesse hors du commun en acides gras insaturés (oméga-6) et polyphénols.",
    benefits: [
      {
        title: "Action anti-cernes et éclat",
        body: "La vitamine K stimule la microcirculation pour défatiguer le regard.",
      },
      {
        title: "Régénération cellulaire intense",
        body: "Les stérols renforcent le collagène et freinent le photo-vieillissement.",
      },
      {
        title: "Toucher sec immédiat",
        body: "Pénétration ultrarapide sans fini gras ni brillance résiduelle.",
      },
      {
        title: "Barrière protectrice",
        body: "Retient l'hydratation au cœur des cellules cutanées toute la journée.",
      },
    ],
    processTitle: "Extraction à froid et assemblage protecteur",
    processIntro:
      "Procédé délicat et mise sous azote pour préserver chaque molécule active.",
    processImageAlt: "Extraction et test d'huile de figue de barbarie et argan",
    process: [
      {
        title: "Pression à froid des pépins de figue",
        body: "Séparation manuelle des pépins, séchage naturel et pression mécanique à basse température.",
      },
      {
        title: "Dosage synergique équilibré",
        body: "Harmonisation des proportions pour optimiser l'efficacité dermatologique.",
      },
      {
        title: "Purge à l'azote",
        body: "Flaconnage sous atmosphère inerte pour prévenir toute oxydation prématurée.",
      },
      {
        title: "Flaconnage verre anti-UV",
        body: "Conditionnement en verre protecteur filtrant les rayonnements altérants.",
      },
    ],
    specsTitle: "Fiche technique et packaging",
    specs: [
      { label: "INCI", value: "Argania Spinosa Kernel Oil, Opuntia Ficus-Indica Seed Oil, Tocopherol" },
      { label: "Types de peaux", value: "Matures, dévitalisées, sensibles, mixtes" },
      { label: "Flacons", value: "30 ml et 50 ml (verre noir mat, ambré ou violet Miron)" },
      { label: "MOQ", value: "100 unités" },
      { label: "Délais", value: "2 à 3 semaines" },
    ],
    applicationsTitle: "Cibles commerciales",
    applications: [
      {
        title: "Lignes cosmétiques prestige",
        body: "Soin de nuit régénérant ou élixir de jeunesse phare.",
      },
      {
        title: "Spas hôteliers & cliniques esthétiques",
        body: "Soin post-peeling ou récupération post-soin.",
      },
    ],
    faqTitle: "FAQ — Élixir Argan & Figue de Barbarie",
    faq: [
      {
        question: "Quelle est la proportion de figue de barbarie ?",
        answer:
          "Notre formule standard contient une concentration généreuse et cliniquement active (15% à 30%). Nous pouvons adapter le ratio à votre cahier des charges.",
      },
      {
        question: "Ce sérum convient-il aux peaux à tendance acnéique ?",
        answer:
          "Oui, ces deux huiles ont un indice de comédogénicité nul (0) et régulent la production de sébum.",
      },
    ],
    ctaTitle: "Formulez votre élixir anti-âge d'exception",
    ctaDescription:
      "Commandez vos échantillons et découvrez la rentabilité exceptionnelle de ce soin prestigieux.",
  },
  "argan-beard-conditioning-oil": {
    chip: "Soins Homme",
    cardTitle: "Huile Barbe Conditionnante à l'Argan",
    cardSummary:
      "Soin nourrissant pour barbe et peau du visage. Assouplit les poils drus, apaise les démangeaisons et parfume subtilement.",
    name: "Huile Barbe à l'Argan Marque Blanche",
    h1: "Huile à Barbe à l'Argan en Gros & Marque Blanche pour Barbiers",
    lede:
      "Soin artisanal pour barbiers modernes et marques de grooming masculin. Associe l'huile d'argan du Maroc au jojoba et à l'amande douce pour dompter les barbes épaisses, éliminer les pellicules de barbe et hydrater la peau sous-jacente.",
    metaTitle: "Huile Barbe à l'Argan Marque Blanche | Soin Barbier Gros",
    metaDescription:
      "Huile à barbe à l'argan en gros et marque blanche. Flacons 30ml et 60ml. Adoucit le poil, stoppe les démangeaisons. MOQ dès 150 unités pour barbiers.",
    keywords: [
      "huile barbe argan marque blanche",
      "fournisseur huile barbe barbier",
      "soin barbe homme gros",
      "fabricant huile barbe argan maroc",
    ],
    facts: [
      { label: "Actifs clés", value: "Huile d'Argan pure + Jojoba doré + Amande douce" },
      { label: "Parfums au choix", value: "Cèdre de l'Atlas, Bois de Oud, Santal ou Sans Parfum" },
      { label: "Flaconnage", value: "Flacons 30ml et 60ml verre ambré ou noir mat apothicaire" },
      { label: "MOQ", value: "150 unités avec étiquettes personnalisées résistantes à l'huile" },
    ],
    overview: {
      title: "L'incontournable du grooming masculin contemporain",
      paragraphs: [
        "Le poil de barbe exige une viscosité adaptée : un soin assez riche pour discipliner les poils drus, mais suffisamment fluide pour hydrater la peau sans boucher les follicules ni créer de boutons.",
        "Notre formule marocaine associe l'argan protecteur au jojoba équilibrant. Elle calme les tiraillements, prévient les desquamations et confère à la barbe un aspect soigné et un toucher soyeux.",
        "Déclinée dans des fragrances boisées raffinées aux huiles essentielles pures : Cèdre de l'Atlas marocain, Bois d'Oud oriental, ou neutre pour peaux réactives.",
      ],
      quote:
        "Discipline les poils rebelles, élimine les démangeaisons et parfume avec élégance.",
      image: "/assets/img/img3.jfif",
      imageAlt: "Application d'huile à barbe pour le soin et le coiffage masculin",
    },
    benefitsTitle: "Efficacité ciblée barbe et épiderme",
    benefitsIntro:
      "Une double action pour une barbe impeccable et une peau saine.",
    benefits: [
      {
        title: "Supprime les pellicules de barbe",
        body: "Hydrate l'épiderme masqué par les poils et stoppe la sécheresse cutanée.",
      },
      {
        title: "Adoucit les poils rugueux",
        body: "Gaine la kératine pour un poil souple et doux au toucher.",
      },
      {
        title: "Fini mat naturel non collant",
        body: "Pénétration rapide sans transfert gras sur les cols de chemise.",
      },
      {
        title: "Fortifie la racine",
        body: "Apporte les nutriments nécessaires à une pousse dense et homogène.",
      },
    ],
    processTitle: "Assemblage et mise en bouteille barber-shop",
    processIntro:
      "Fabrication artisanale assurant la fraîcheur aromatique de chaque lot.",
    processImageAlt: "Mise en bouteille d'huile à barbe et contrôle qualité",
    process: [
      {
        title: "Synergie des huiles végétales",
        body: "Mélange d'argan, de jojoba et de vitamine E pour une stabilité optimale.",
      },
      {
        title: "Infusion des essences boisées",
        body: "Huiles essentielles sélectionnées sans risque de phototoxicité.",
      },
      {
        title: "Filtration de limpidité",
        body: "Élimination des dépôts pour une couleur dorée éclatante.",
      },
      {
        title: "Flaconnage compte-gouttes",
        body: "Bouchons pipette précis adaptés au dosage goutte à goutte.",
      },
    ],
    specsTitle: "Détails de fabrication",
    specs: [
      { label: "Ingrédients", value: "Argania Spinosa Kernel Oil, Simmondsia Chinensis Seed Oil, Prunus Amygdalus Dulcis Oil, Tocopherol" },
      { label: "Contenances", value: "30 ml et 60 ml" },
      { label: "Flacons", value: "Verre noir mat, ambré apothicaire ou transparent" },
      { label: "Fragrances", value: "Cèdre de l'Atlas, Oud Sauvage, Bois de Santal, Naturel" },
      { label: "MOQ", value: "150 unités" },
      { label: "Délais", value: "2 à 3 semaines" },
    ],
    applicationsTitle: "Débouchés commerciaux",
    applications: [
      {
        title: "Salons barbiers & coiffeurs homme",
        body: "Vente comptoir à forte marge et soin serviette chaude.",
      },
      {
        title: "Boutiques en ligne de grooming",
        body: "SKU incontournable des coffrets cadeaux masculins.",
      },
    ],
    faqTitle: "FAQ — Huile Barbe Marque Blanche",
    faq: [
      {
        question: "Peut-on l'utiliser comme huile avant-rasage ?",
        answer:
          "Absolument. La glisse de l'argan et du jojoba protège la peau contre le feu du rasoir sur les contours du cou.",
      },
      {
        question: "Les étiquettes résistent-elles aux coulures d'huile ?",
        answer:
          "Toutes nos étiquettes sont imprimées sur film vinyle étanche laminé mat ou brillant qui ne se décolore pas.",
      },
    ],
    ctaTitle: "Lancez votre gamme de soins barbe professionnelle",
    ctaDescription:
      "Composez votre parfum signature et démarquez votre marque sur le marché masculin.",
  },
  "argan-body-massage-oil": {
    chip: "Soins Corps",
    cardTitle: "Huile Corps & Massage à l'Argan",
    cardSummary:
      "Huile corporelle nourrissante et polyvalente. Scelle l'hydratation après la douche ou offre une glisse idéale pour les massages en spa.",
    name: "Huile Corps & Massage à l'Argan Marque Blanche",
    h1: "Huile Corps & Massage à l'Argan en Gros pour Spas & Instituts",
    lede:
      "Huile de massage professionnelle formulée à base d'huile d'argan pure du Maroc et d'émollients botaniques soyeux. Glisse fluide et prolongée pour cabines de spa ou huile sèche satinée après le bain.",
    metaTitle: "Huile Corps & Massage à l'Argan Marque Blanche | Spas Gros",
    metaDescription:
      "Huile corps et massage à l'argan en gros marque blanche. Flacons pompe 100ml, 200ml, 250ml. Glisse spa parfaite. MOQ dès 100 unités.",
    keywords: [
      "huile corps argan gros",
      "huile massage argan marque blanche",
      "huile spa argan fournisseur",
      "fournisseur huile corporelle maroc",
    ],
    facts: [
      { label: "Texture", value: "Glisse soyeuse, absorption satinée sans résidu collant" },
      { label: "Flaconnage", value: "Flacons pompe 100ml, 200ml, 250ml ou aluminium brossé" },
      { label: "Destinataires", value: "Spas d'hôtels, centres bien-être, marques corps" },
      { label: "MOQ", value: "100 unités (étiquette) / 500 unités (sérigraphie)" },
    ],
    overview: {
      title: "L'art du rituel hammam et spa marocain",
      paragraphs: [
        "Depuis des siècles, le rituel de beauté marocain célèbre les vertus nourrissantes de l'huile d'argan. Dans l'univers exigeant des spas hôteliers, les praticiens recherchent l'équilibre parfait : une glisse généreuse et fluide qui dure, suivie d'une pénétration qui laisse la peau satinée sans tacher les peignoirs.",
        "Notre formule associe l'huile d'argan à l'amande douce et au noyau d'abricot. Elle détend les tensions musculaires tout en apportant une hydratation intense aux peaux desséchées.",
        "Présentée en flacons pompe pratiques ou flacons en aluminium brossé au style épuré.",
      ],
      quote:
        "Une glisse inégalée pour les praticiens et un voile de douceur durable pour le corps.",
      image: "/assets/img/argan-beauty.jpg",
      imageAlt: "Massage corporel en spa marocain avec huile d'argan dorée",
    },
    benefitsTitle: "Efficacité professionnelle spa",
    benefitsIntro:
      "Approuvée par les kinésithérapeutes et praticiens de spas haut de gamme.",
    benefits: [
      {
        title: "Glisse continue sans accroche",
        body: "Parfaite pour massages californiens, suédois, drainages ou modelages énergétiques.",
      },
      {
        title: "Verrouillage de l'hydratation post-douche",
        body: "Capturée sur peau humide, elle nourrit durablement les peaux atopiques et déshydratées.",
      },
      {
        title: "Apaisement après-soleil",
        body: "Apaise les sensations d'échauffement et redonne souplesse aux peaux exposées au soleil.",
      },
      {
        title: "Lavable sur le linge de spa",
        body: "S'élimine facilement des draps et serviettes au lavage commercial standard.",
      },
    ],
    processTitle: "Préparation et embouteillage",
    processIntro:
      "Formulation équilibrée pour une viscosité stable en toutes saisons.",
    processImageAlt: "Conditionnement et expédition d'huile corporelle",
    process: [
      {
        title: "Synergie d'huiles végétales",
        body: "Dosage précis d'argan et d'huiles légères pour une glisse sans surépaisseur.",
      },
      {
        title: "Infusion aromatique",
        body: "Parfums naturels aux choix : Fleur d'Oranger, Verveine orientale, Rose ou Neutre.",
      },
      {
        title: "Contrôle microbiologique",
        body: "Absence totale d'eau garantissant 24 mois de stabilité naturelle sans conservateurs agressifs.",
      },
      {
        title: "Pose de pompes verrouillables",
        body: "Pompes cosmétiques à débit maîtrisé conçues pour une manipulation aisée en cabine.",
      },
    ],
    specsTitle: "Options de conditionnement",
    specs: [
      { label: "Formats", value: "100 ml, 200 ml, 250 ml, et bidons 1L cabine spa" },
      { label: "Flacons", value: "PET ambré, verre lourd ou aluminium brossé recyclable" },
      { label: "Bouchages", value: "Pompe doseuse crème, bouchon verseur alu ou disc-top" },
      { label: "Parfums", value: "Fleur d'Oranger, Verveine, Lavande sauvage, Neutre" },
      { label: "MOQ", value: "100 unités" },
      { label: "Délais", value: "2 à 3 semaines" },
    ],
    applicationsTitle: "Secteurs ciblés",
    applications: [
      {
        title: "Spas d'hôtels & Resorts",
        body: "Usage cabine et vente en boutique bien-être.",
      },
      {
        title: "Gammes de soins corporels",
        body: "Élixir satiné quotidien pour peaux sèches.",
      },
      {
        title: "Coffrets rituels orientaux",
        body: "À combiner avec savon noir marocain et gant kessa.",
      },
    ],
    faqTitle: "FAQ — Huile Corps & Massage",
    faq: [
      {
        question: "Tache-t-elle les draps de massage ?",
        answer:
          "Non, nos huiles végétales légères s'éliminent aisément en machine à laver avec les détergents professionnels pour spas.",
      },
      {
        question: "Proposez-vous des bidons de recharge ?",
        answer:
          "Oui, nous proposons des formats cabine de 1L, 5L et 25L pour les instituts et spas.",
      },
    ],
    ctaTitle: "Enrichissez votre offre spa avec l'argan",
    ctaDescription:
      "Demandez vos échantillons d'huile corporelle parfumée et créez votre gamme bien-être sur mesure.",
  },
  "usda-organic-argan-oil": {
    chip: "Bio Certifiée",
    cardTitle: "Huile d'Argan Certifiée Bio USDA & ECOCERT",
    cardSummary:
      "Huile biologique avec traçabilité complète jusqu'à la récolte en coopérative. Conforme aux standards internationaux de la clean beauty.",
    name: "Huile d'Argan Bio Certifiée USDA Marque Blanche",
    h1: "Huile d'Argan Certifiée Bio USDA & ECOCERT en Gros",
    lede:
      "Huile d'argan 100% biologique bénéficiant de la double certification USDA NOP et ECOCERT Cosmos Organic. Récolte sauvage en forêt d'arganiers protégée, pressée mécaniquement à froid à Agadir. Flacons verre violet anti-UV pour les réseaux de distribution exigeants.",
    metaTitle: "Huile d'Argan Bio USDA & ECOCERT Gros | Marque Blanche Certifiée",
    metaDescription:
      "Huile d'argan bio certifiée USDA et ECOCERT en gros. Flacons 30ml, 50ml, 100ml. Traçabilité coopérative garantie. MOQ dès 200 unités avec certificat.",
    keywords: [
      "huile argan bio usda gros",
      "huile argan ecocert marque blanche",
      "huile argan certifiee biologique vrac",
      "fournisseur argan cosmos organic maroc",
    ],
    facts: [
      { label: "Certifications", value: "USDA NOP, ECOCERT (Cosmos Organic), ISO 22716" },
      { label: "Traçabilité", value: "Audit complet de la coopérative jusqu'au flacon scellé" },
      { label: "Flaconnage", value: "Flacons 30ml, 50ml, 100ml verre violet anti-UV ou ambré" },
      { label: "MOQ", value: "200 unités avec remise du certificat de transaction (TC)" },
    ],
    overview: {
      title: "L'exigence biologique certifiée pour les grands réseaux de distribution",
      paragraphs: [
        "Sur les marchés internationaux comme les réseaux bio européens, Whole Foods Market ou Sephora, les certifications officielles sont incontournables. Notre huile d'argan bénéficie des audits annuels rigoureux d'ECOCERT et de l'organisme américain USDA NOP.",
        "Les fruits sont cueillis dans la réserve de biosphère de l'arganeraie classée par l'UNESCO, sans aucun pesticide chimique ni fertilisant de synthèse. L'extraction mécanique est totalement isolée pour éviter toute contamination croisée.",
        "Nous fournissons les certificats de transaction (TC) par lot vous autorisant à apposer légalement les logos bio officiels sur vos emballages finaux.",
      ],
      quote:
        "Double certification USDA Organic et ECOCERT avec traçabilité intégrale de la coopérative au consommateur.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "Récolte certifiée biologique d'argan par les coopératives au Maroc",
    },
    benefitsTitle: "L'atout d'une certification officielle",
    benefitsIntro:
      "Pourquoi les certifications officielles font la différence auprès des consommateurs avertis.",
    benefits: [
      {
        title: "Conformité réglementaire totale",
        body: "Autorisée à la revente immédiate aux USA, en Europe, au Royaume-Uni et au Canada.",
      },
      {
        title: "Garantie zéro résidu chimique",
        body: "Analyses indépendantes certifiant l'absence totale de pesticides et métaux lourds.",
      },
      {
        title: "Concentration maximale en antioxydants",
        body: "Procédé doux conservant l'intégralité des polyphénols et du squalène végétal.",
      },
      {
        title: "Impact social et écologique réel",
        body: "Soutient directement les coopératives féminines berbères et la préservation de l'arganeraie.",
      },
    ],
    processTitle: "Audit biologique et extraction",
    processIntro:
      "Ligne de presse dédiée et conditionnement sous verre protecteur.",
    processImageAlt: "Extraction et tests de pureté de l'huile d'argan biologique à Agadir",
    process: [
      {
        title: "Récolte certifiée en forêt sauvage",
        body: "Collecte exclusive dans des parcelles contrôlées de la région du Souss.",
      },
      {
        title: "Pression mécanique dédiée",
        body: "Presses réservées exclusivement au bio nettoyées avec des produits écologiques agréés.",
      },
      {
        title: "Contrôles en laboratoire accrédité",
        body: "Vérification de l'indice de peroxyde (< 10 meq O2/kg) et du profil d'acides gras.",
      },
      {
        title: "Flaconnage verre violet Miron",
        body: "Verre biophotonique bloquant la lumière visible pour protéger les principes actifs bio.",
      },
    ],
    specsTitle: "Profil technique et conformité",
    specs: [
      { label: "Source botanique", value: "Argania spinosa L. Skeels" },
      { label: "Certificats", value: "USDA NOP, ECOCERT Organic (CE 834/2007 & Cosmos Standard)" },
      { label: "Pureté", value: "100.0% Huile d'Argan Vierge Biologique" },
      { label: "Contenances", value: "30 ml, 50 ml, 100 ml en verre" },
      { label: "Flacon", value: "Verre violet Miron ou ambré opaque" },
      { label: "Documents", value: "Certificat de Transaction (TC), COA par lot, FDS" },
      { label: "MOQ", value: "200 unités" },
    ],
    applicationsTitle: "Canaux de vente privilégiés",
    applications: [
      {
        title: "Réseaux de magasins bio et diététiques",
        body: "Conforme aux chartes les plus strictes de la distribution bio.",
      },
      {
        title: "Marques de Clean Beauty certifiées",
        body: "Permet d'arborer les labels bio officiels sur votre packaging.",
      },
      {
        title: "Pharmacies et parapharmacies",
        body: "Prescription idéale pour peaux atopiques et ultra-sensibles.",
      },
    ],
    faqTitle: "FAQ — Huile d'Argan Certifiée Bio",
    faq: [
      {
        question: "Puis-je apposer les logos USDA Organic ou ECOCERT sur mes étiquettes ?",
        answer:
          "Oui. Grâce à notre certification et aux certificats de transaction (TC) remis, votre marque peut légalement utiliser les logos sur ses emballages.",
      },
      {
        question: "Quelle est la différence avec l'argan pressé à froid standard ?",
        answer:
          "L'huile standard est pure, mais la certifiée bio garantit des parcelles auditées sans pesticides et une traçabilité officielle tierce partie.",
      },
    ],
    ctaTitle: "Commandez votre huile d'argan bio certifiée",
    ctaDescription:
      "Demandez les certificats de nos derniers lots et personnalisez votre gamme biologique dès aujourd'hui.",
  },
};

const ES_PRODUCTS: Record<string, ProductLocalization> = {
  "cold-pressed-argan-oil": {
    chip: "Prensado en Frío",
    cardTitle: "Nutrientes y Pureza Intactos",
    cardSummary:
      "Extracción mecánica en frío que preserva los antioxidantes, vitamina E, tono dorado claro y el suave aroma a nuez del fruto del argán.",
    name: "Aceite de Argán de Marruecos Prensado en Frío",
    h1: "Aceite de Argán Marroquí Prensado en Frío al Por Mayor",
    lede:
      "Prensado mecánicamente en frío a partir de semillas crudas en el suroeste de Marruecos. Grado cosmético virgen con vitamina E y ácidos grasos intactos para sérums y cosmética profesional.",
    metaTitle: "Aceite de Argán Prensado en Frío al Por Mayor | Grado Cosmético",
    metaDescription:
      "Compre aceite de argán marroquí prensado en frío al por mayor. Calidad cosmética sin refinar para sérums y cabello. COA directo de fábrica en Agadir.",
    keywords: [
      "aceite argan por mayor",
      "aceite argan prensado en frio a granel",
      "aceite argan cosmetico marruecos",
      "proveedor aceite argan puro",
    ],
    facts: [
      { label: "Extracción", value: "Prensado mecánico en frío, sin solventes" },
      { label: "Grado", value: "Cosmético, semillas crudas sin tostar" },
      { label: "Perfil", value: "Dorado claro, sutil aroma a nuez" },
      { label: "Uso", value: "Rostro, cabello, cuerpo y formulaciones" },
    ],
    overview: {
      title: "Por qué el prensado en frío es decisivo para los compradores mayoristas",
      paragraphs: [
        "El aceite de argán prensado en frío se extrae sin disolventes químicos y sin el calor intenso de los procesos de refinado comunes. Esto permite que los tocoferoles, polifenoles y ácidos grasos permanezcan en el aceite.",
        "Los formuladores aprecian de inmediato su tacto sedoso y su absorción sin película grasa. Ofrecemos este producto bajo denominación INCI 100% pura (Argania Spinosa Kernel Oil).",
      ],
      quote: "Sin hexano, sin desodorización artificial y sin mezclas. El aceite suministrado es puro de prensa.",
      image: "/assets/img/production-argan.jpg",
      imageAlt: "Prensado tradicional en frío de semillas de argán en Marruecos",
    },
    benefitsTitle: "Beneficios para formulaciones cosméticas",
    benefitsIntro: "Aporta nutrientes esenciales que enriquecen cualquier producto de cuidado capilar o facial.",
    benefits: [
      { title: "Vitamina E y antioxidantes", body: "Protege la barrera cutánea frente al envejecimiento prematuro." },
      { title: "Ácidos grasos esenciales", body: "Omegas 6 y 9 que aportan elasticidad y suavidad duradera." },
    ],
    processTitle: "Proceso de extracción para exportación",
    processIntro: "Control mecánico riguroso desde la selección de semillas hasta el llenado de bidones.",
    processImageAlt: "Semillas de argán seleccionadas para prensado",
    process: [
      { title: "Selección de semillas", body: "Frutos recolectados y secados, seleccionando solo semillas sanas." },
      { title: "Prensado mecánico", body: "Extracción a baja temperatura con decantación natural." },
    ],
    specsTitle: "Especificaciones técnicas habituales",
    specs: [
      { label: "Nombre INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "Origen botánico", value: "Argania spinosa, Marruecos" },
      { label: "Método", value: "Prensado en frío mecánico" },
    ],
    applicationsTitle: "Aplicaciones cosméticas",
    applications: [
      { title: "Sérums faciales y cremas", body: "Uso puro o en fase oleosa para nutrición profunda." },
    ],
    faqTitle: "Preguntas de compradores",
    faq: [
      { question: "¿El aceite es refinado o desodorizado?", answer: "No, es 100% virgen sin ningún proceso de desodorización." },
    ],
    ctaTitle: "Solicitar cotización de aceite prensado en frío",
    ctaDescription: "Indíquenos su volumen y reciba oferta comercial con ficha técnica en 24 horas.",
  },
  "organic-certified-argan-oil": {
    chip: "Certificado Ecológico",
    cardTitle: "Sellos USDA y ECOCERT",
    cardSummary:
      "Aceite de argán ecológico certificado por ECOCERT y USDA Organic. Trazabilidad completa desde los bosques de argán protegidos.",
    name: "Aceite de Argán Ecológico Certificado USDA y ECOCERT",
    h1: "Aceite de Argán Ecológico al Por Mayor (ECOCERT y USDA)",
    lede:
      "Suministro de aceite de argán ecológico certificado para laboratorios y marcas cosméticas con estándares exigentes.",
    metaTitle: "Aceite de Argán Ecológico al Por Mayor | ECOCERT y USDA Marruecos",
    metaDescription:
      "Compre aceite de argán ecológico certificado al por mayor. Sellos ECOCERT y USDA Organic, bidones directos desde Agadir.",
    keywords: ["aceite argan ecologico", "aceite argan bio por mayor", "aceite argan ecocert"],
    facts: [
      { label: "Certificación", value: "ECOCERT Greenlife y USDA Organic" },
      { label: "Pureza", value: "100% bio sin pesticidas" },
    ],
    overview: {
      title: "Garantía ecológica auditada para marcas de cosmética natural",
      paragraphs: [
        "Aportamos certificados de transacción por lote para que su marca cumpla con las normativas europeas y americanas de etiquetado bio.",
      ],
      quote: "Certificación internacional verificable para sus fórmulas clean beauty.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "Certificación ecológica de aceite de argán",
    },
    benefitsTitle: "Ventajas de la certificación bio",
    benefitsIntro: "Permite usar los sellos oficiales reconocidos mundialmente.",
    benefits: [
      { title: "Etiquetado oficial ecológico", body: "Valorice sus líneas cosméticas ante los consumidores exigentes." },
    ],
    processTitle: "Control de trazabilidad ecológica",
    processIntro: "Recolección silvestre en zonas de biósfera protegidas.",
    processImageAlt: "Cosecha ecológica de frutos de argán",
    process: [
      { title: "Recolección controlada", body: "Zonas supervisadas anualmente por auditores de ECOCERT." },
    ],
    specsTitle: "Especificaciones",
    specs: [
      { label: "Certificadora", value: "ECOCERT / USDA" },
    ],
    applicationsTitle: "Usos",
    applications: [
      { title: "Cosmética biológica certificada", body: "Para gamas Cosmos Organic y formulaciones naturales." },
    ],
    faqTitle: "Preguntas sobre certificación",
    faq: [
      { question: "¿Envían el certificado de transacción con el pedido?", answer: "Sí, emitimos el certificado oficial para cada envío comercial." },
    ],
    ctaTitle: "Pedir cotización de argán ecológico",
    ctaDescription: "Reciba nuestra lista de precios y certificados actualizados.",
  },
  "bulk-argan-oil": {
    chip: "Granel Industrial",
    cardTitle: "Bidones de 200L y Contenedores IBC 1000L",
    cardSummary:
      "Capacidad para grandes producciones cosméticas y envasadores. Suministro constante y transporte marítimo seguro.",
    name: "Aceite de Argán a Granel (Bidones e IBC)",
    h1: "Aceite de Argán a Granel Industrial al Por Mayor",
    lede:
      "Suministro directo para fabricantes y marcas en bidones de 25L, 200L y contenedores IBC de 1.000L desde Agadir.",
    metaTitle: "Aceite de Argán a Granel Industrial | Bidones 200L e IBC Marruecos",
    metaDescription:
      "Exportador de aceite de argán a granel. Bidones de 200L y contenedores IBC de 1000L con envíos marítimos y aéreos a todo el mundo.",
    keywords: ["aceite argan a granel", "bidones aceite argan", "ibc aceite argan marruecos"],
    facts: [
      { label: "Envases", value: "Garrafas 25L, bidones 200L, IBC 1000L" },
      { label: "Capacidad", value: "Más de 20 toneladas mensuales" },
    ],
    overview: {
      title: "Logística mayorista preparada para la industria",
      paragraphs: [
        "Envasamos bajo atmósfera protectora para evitar la oxidación durante el transporte marítimo hacia Europa, América y Asia.",
      ],
      quote: "Seguridad de suministro continuo para sus líneas de fabricación.",
      image: "/assets/img/wholesale-argan-oil.jpg",
      imageAlt: "Bidones de aceite de argán para exportación",
    },
    benefitsTitle: "Ventajas de compra a granel",
    benefitsIntro: "Precios directos de fábrica sin intermediarios.",
    benefits: [
      { title: "Coste optimizado", body: "Tarifas de exportación competitivas por volumen." },
    ],
    processTitle: "Preparación de envíos",
    processIntro: "Embalaje certificado para transporte internacional de cosmética.",
    processImageAlt: "Preparación de bidones de argán",
    process: [
      { title: "Sellado e inertizado", body: "Protección con nitrógeno para máxima frescura." },
    ],
    specsTitle: "Datos logísticos",
    specs: [
      { label: "Bidón 200L", value: "Aprox. 185 kg netos" },
      { label: "IBC 1000L", value: "Aprox. 920 kg netos" },
    ],
    applicationsTitle: "Aplicaciones",
    applications: [
      { title: "Grandes series cosméticas", body: "Champús, lociones corporales y acondicionadores capilares." },
    ],
    faqTitle: "Preguntas de compra a granel",
    faq: [
      { question: "¿Cuál es el plazo de entrega para bidones de 200L?", answer: "Salen de fábrica en un plazo de 3 a 7 días hábiles." },
    ],
    ctaTitle: "Solicitar presupuesto para granel",
    ctaDescription: "Consulte nuestras tarifas FOB Agadir o CIF para su puerto de destino.",
  },
  "traceable-argan-oil": {
    chip: "Trazabilidad Total",
    cardTitle: "COA y FDS en Cada Lote",
    cardSummary:
      "Documentación técnica y analítica completa conforme a las normativas de la UE y FDA.",
    name: "Aceite de Argán Trazable con COA y FDS",
    h1: "Aceite de Argán Trazable con Certificados de Análisis (COA)",
    lede:
      "Cada envío cuenta con análisis completos de laboratorio: perfil de ácidos grasos, peróxidos y acidez para su dossier cosmético.",
    metaTitle: "Aceite de Argán Trazable con COA | Documentación Exportación Marruecos",
    metaDescription:
      "Aceite de argán marroquí con certificados analíticos. COA por lote, FDS / MSDS y cumplimiento de normativas internacionales.",
    keywords: ["coa aceite argan", "analisis laboratorio argan", "aceite argan trazable"],
    facts: [
      { label: "Análisis", value: "Índice de acidez, peróxidos, esteroles" },
      { label: "Normativa", value: "Reglamento CE 1223/2009 y FDA" },
    ],
    overview: {
      title: "Transparencia analítica para sus registros cosméticos",
      paragraphs: [
        "Facilitamos toda la documentación técnica requerida por sus evaluadores de seguridad antes de iniciar la venta al público.",
      ],
      quote: "Máxima rigurosidad técnica para simplificar sus registros sanitarios.",
      image: "/assets/img/private-label-argan.jpg",
      imageAlt: "Control de calidad en laboratorio de aceite de argán",
    },
    benefitsTitle: "Seguridad técnica",
    benefitsIntro: "Documentación lista para auditorías regulatorias.",
    benefits: [
      { title: "Cumplimiento normativo", body: "Datos analíticos precisos para su dossier cosmético." },
    ],
    processTitle: "Ensayos analíticos",
    processIntro: "Toma de muestras sistemática antes de cada expedición.",
    processImageAlt: "Ensayos de laboratorio",
    process: [
      { title: "Cromatografía de gases", body: "Verificación de la pureza botánica sin alteraciones." },
    ],
    specsTitle: "Parámetros",
    specs: [
      { label: "Acidez oleica", value: "< 0.8% (Cosmético virgen)" },
    ],
    applicationsTitle: "Uso",
    applications: [
      { title: "Marcas con exigencias regulatorias", body: "Registros en portales cosméticos internacionales." },
    ],
    faqTitle: "Preguntas de calidad",
    faq: [
      { question: "¿Envían el COA antes de despachar?", answer: "Sí, podemos facilitarle el informe del lote reservado previamente." },
    ],
    ctaTitle: "Solicitar muestra de certificado COA",
    ctaDescription: "Revise un informe analítico tipo y contacte con nuestro equipo técnico.",
  },
  "cooperative-argan-oil": {
    chip: "Origen Ético",
    cardTitle: "Cooperativas Femeninas de Agadir",
    cardSummary:
      "Aceite de argán procedente del trabajo artesanal de mujeres bereberes en cooperativas locales de la región de Souss.",
    name: "Aceite de Argán de Cooperativas de Mujeres de Marruecos",
    h1: "Aceite de Argán de Cooperativas Femeninas al Por Mayor",
    lede:
      "Aprovisionamiento ético y de comercio justo directamente con cooperativas de mujeres de la región de Agadir.",
    metaTitle: "Aceite de Argán de Cooperativas al Por Mayor | Comercio Justo Marruecos",
    metaDescription:
      "Aceite de argán marroquí de cooperativas femeninas. Comercio justo, impacto social positivo y calidad artesanal certificada.",
    keywords: ["cooperativas argan marruecos", "argan comercio justo", "argan mujeres bereberes"],
    facts: [
      { label: "Impacto", value: "Remuneración justa para familias rurales" },
      { label: "Tradición", value: "Descascarillado manual artesanal" },
    ],
    overview: {
      title: "Impacto social que fortalece la historia de su marca",
      paragraphs: [
        "El trabajo cooperativo asegura ingresos sostenibles para cientos de familias rurales en las zonas del árbol del argán.",
      ],
      quote: "Comercio ético que apoya directamente a las productoras marroquíes.",
      image: "/assets/img/what-is-argan-oil.webp",
      imageAlt: "Mujeres bereberes trabajando en cooperativa de argán",
    },
    benefitsTitle: "Beneficio de compra responsable",
    benefitsIntro: "Un argumento de venta sólido y transparente para consumidores conscientes.",
    benefits: [
      { title: "Historia auténtica", body: "Conecte a sus clientes con la tradición y el impacto humano positivo." },
    ],
    processTitle: "Labor cooperativa",
    processIntro: "Relación comercial directa basada en precios justos.",
    processImageAlt: "Labor artesanal del argán",
    process: [
      { title: "Apertura manual de frutos", body: "Técnica tradicional que asegura semillas intactas sin daño térmico." },
    ],
    specsTitle: "Modelo",
    specs: [
      { label: "Cadena de valor", value: "Cooperativas rurales de Souss-Massa" },
    ],
    applicationsTitle: "Mercado",
    applications: [
      { title: "Cosmética ética y sostenible", body: "Ideal para marcas con valores de impacto social." },
    ],
    faqTitle: "Preguntas sobre cooperativas",
    faq: [
      { question: "¿Podemos comunicar este origen en el envase?", answer: "Sí, facilitamos información verídica del proyecto cooperativo." },
    ],
    ctaTitle: "Apoyar el modelo cooperativo",
    ctaDescription: "Consulte precios y descubra cómo incorporar este valor a su catálogo.",
  },
  "pure-moroccan-argan-oil": {
    chip: "Aceite Puro",
    cardTitle: "Aceite de Argán Marroquí 100% Puro",
    cardSummary:
      "El estándar de oro monoingrediente. Prensado en frío, virgen o desodorizado para rostro, cabello y cuerpo.",
    name: "Aceite de Argán 100% Puro Marca Blanca",
    h1: "Aceite de Argán 100% Puro — Marca Blanca y Mayorista",
    lede:
      "Aceite de argán cosmético puro prensado en frío, envasado para su marca. Frascos gotero de 30ml, 50ml y 100ml con acabados en bambú, oro o negro mate. Certificado de análisis por lote.",
    metaTitle: "Aceite de Argán 100% Puro Marca Blanca | Mayorista y Frascos",
    metaDescription:
      "Aceite de argán 100% puro para marca blanca. Frascos gotero 30ml, 50ml, 100ml. MOQ desde 100 unidades. Exportación directa desde Agadir con COA.",
    keywords: [
      "aceite argan puro marca blanca",
      "frascos gotero argan mayorista",
      "fabricante aceite argan marruecos",
      "aceite argan envasado propio",
    ],
    facts: [
      { label: "Extracción", value: "Prensado mecánico en frío 100% puro" },
      { label: "Formatos", value: "Frascos gotero de vidrio 30ml, 50ml, 100ml" },
      { label: "MOQ", value: "100 unidades (etiqueta personalizada)" },
      { label: "Plazos", value: "2 a 3 semanas de producción y despacho" },
    ],
    overview: {
      title: "El producto insignia imprescindible para marcas de belleza limpia",
      paragraphs: [
        "El aceite de argán puro marroquí (INCI: Argania Spinosa Kernel Oil) es el estándar indiscutible en cosmética botánica monoingrediente. Extraído de almendras crudas recolectadas en cooperativas de Agadir, conserva intactos los tocoferoles (vitamina E) y ácidos grasos esenciales.",
        "Para salones, spas, dermatólogos y marcas online, este producto ofrece el camino más rápido al mercado con márgenes comerciales excepcionales. Entregamos frascos etiquetados con su diseño y goteros de alta gama.",
        "Disponible en versión virgen natural con su suave aroma característico o desodorizado al vapor suave para fórmulas neutras.",
      ],
      quote:
        "Sin rellenos, sin siliconas, sin agua. Auténtico oro líquido de Marruecos envasado en origen.",
      image: "/assets/img/cosmetic-argan.jpg",
      imageAlt: "Gotas de aceite de argán puro y frascos dorados",
    },
    benefitsTitle: "Ventajas competitivas del producto",
    benefitsIntro:
      "Por qué el aceite puro de argán sigue siendo el más vendido internacionalmente.",
    benefits: [
      {
        title: "Versatilidad total",
        body: "Nutre el rostro, suaviza puntas abiertas del cabello y fortalece uñas en un solo frasco.",
      },
      {
        title: "Alta concentración de vitamina E",
        body: "Más de 600 mg/kg de tocoferoles naturales con potente acción antioxidante.",
      },
      {
        title: "Absorción no comedogénica",
        body: "Índice comedogénico 0: penetra sin obstruir poros ni sensación grasa.",
      },
      {
        title: "Fidelización de clientes",
        body: "Alta tasa de repetición de compra gracias a sus resultados visibles inmediatos.",
      },
    ],
    processTitle: "Proceso de envasado y personalización",
    processIntro:
      "Desde la prensa mecánica hasta cajas retail listas para exportar.",
    processImageAlt: "Línea de envasado cosmético de aceite de argán en Agadir",
    process: [
      {
        title: "Selección de almendras",
        body: "Clasificación de semillas crudas y prensado en frío a temperatura controlada.",
      },
      {
        title: "Microfiltración estéril",
        body: "Filtración mecánica que elimina impurezas respetando los activos botánicos.",
      },
      {
        title: "Envasado en sala limpia",
        body: "Llenado neumático de alta precisión bajo norma ISO 22716 BPF.",
      },
      {
        title: "Etiquetado impermeable y precinto",
        body: "Aplicación de etiquetas resistentes al aceite con lote y fecha de caducidad.",
      },
    ],
    specsTitle: "Especificaciones de packaging",
    specs: [
      { label: "Nombre INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "Tamaños disponibles", value: "30 ml, 50 ml, 100 ml" },
      { label: "Tipos de cierre", value: "Pipeta gotero (collarín bambú, oro, plata o negro mate)" },
      { label: "Vidrio", value: "Ámbar con protección UV, mate esmerilado, negro o violeta Miron" },
      { label: "Caducidad", value: "24 meses en lugar fresco y oscuro" },
      { label: "MOQ", value: "100 unidades por referencia" },
      { label: "Documentación", value: "Certificado de Análisis (COA), FDS, origen" },
    ],
    applicationsTitle: "Canales recomendados",
    applications: [
      {
        title: "Marcas Clean Beauty",
        body: "Producto estrella con altos márgenes de ganancia.",
      },
      {
        title: "Spas y centros estéticos",
        body: "Tratamiento exclusivo post-facial y venta directa en mostrador.",
      },
      {
        title: "Salones de peluquería",
        body: "Suero de acabado para brillo y protección térmica.",
      },
      {
        title: "E-Commerce y Amazon",
        body: "Fácil lanzamiento con códigos de barras normativos.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Marca Blanca Argán",
    faq: [
      {
        question: "¿Tienen versión desodorizada?",
        answer:
          "Sí, disponemos tanto de la versión virgen con aroma natural como de la versión desodorizada neutra.",
      },
      {
        question: "¿Incluyen los envases y etiquetas?",
        answer:
          "Ofrecemos solución integral llave en mano (frasco, gotero, etiqueta impermeable) o podemos envasar en sus propios envases.",
      },
      {
        question: "¿Cuál es el pedido mínimo?",
        answer:
          "El pedido mínimo comienza en solo 100 frascos para un inicio sin riesgos financieros.",
      },
    ],
    ctaTitle: "Lance su propia línea de aceite de argán",
    ctaDescription:
      "Solicite muestras y cotice el envasado personalizado con nuestro equipo de exportación en Agadir.",
  },
  "argan-hair-treatment-serum": {
    chip: "Cuidado Capilar",
    cardTitle: "Sérum Capilar de Tratamiento con Argán",
    cardSummary:
      "Fórmula enriquecida para brillo, control del frizz y protección térmica. Acabado sedoso y ligero.",
    name: "Sérum Capilar con Argán Marca Blanca",
    h1: "Sérum Capilar con Argán al por Mayor y Marca Blanca",
    lede:
      "Sérum profesional de salón formulado con aceite de argán de Marruecos, siliconas volátiles ligeras y vitamina E. Aporta brillo espejo al instante, disciplina el encrespamiento y protege térmicamente hasta 230°C.",
    metaTitle: "Sérum Capilar con Argán Marca Blanca | Mayorista Peluquería",
    metaDescription:
      "Sérum capilar de argán marca blanca. Frascos dosificador 50ml y 100ml. Protector térmico, antifrizz y brillo. MOQ desde 200 unidades.",
    keywords: [
      "serum capilar argan marca blanca",
      "serum cabello argan mayorista",
      "protector termico argan peluqueria",
      "serum antifrizz argan marruecos",
    ],
    facts: [
      { label: "Fórmula", value: "Aceite de argán + siliconas ligeras + Vitamina E" },
      { label: "Envase", value: "Frascos dosificador de 50ml y 100ml en vidrio ámbar o satinado" },
      { label: "MOQ", value: "200 unidades con serigrafía o etiqueta" },
      { label: "Ventaja", value: "Protección térmica 230°C y brillo espejo" },
    ],
    overview: {
      title: "Tratamiento capilar profesional para salones y marcas",
      paragraphs: [
        "El aceite de argán es reconocido mundialmente por su capacidad para transformar la fibra capilar. Nuestro sérum profesional combina la nutrición del argán con polímeros ligeros para no apelmazar.",
        "Sella cutículas porosas, desenreda al instante y crea una barrera contra la humedad ambiental para prevenir el frizz en cualquier clima.",
        "Disponible con dosificadores de lujo en acabados dorado o negro mate, con fragancia oriental ambarada, vainilla o sin perfume.",
      ],
      quote:
        "Brillo espejo, tacto sedoso y protección térmica en unas pocas gotas.",
      image: "/assets/img/argan-oil-for-hair.jpg",
      imageAlt: "Aplicación de sérum capilar de argán para brillo y suavidad",
    },
    benefitsTitle: "Resultados comprobados en salón",
    benefitsIntro:
      "Efecto inmediato visible desde la primera gota aplicada.",
    benefits: [
      {
        title: "Protección térmica hasta 230°C",
        body: "Defiende la queratina contra planchas, rizadores y secadores.",
      },
      {
        title: "Control antifrizz 48h",
        body: "Aísla la fibra capilar ante variaciones bruscas de humedad.",
      },
      {
        title: "Absorción ligera sin apelmazar",
        body: "Deja el cabello suelto, con movimiento y sin residuos oleosos.",
      },
      {
        title: "Reparación de puntas abiertas",
        body: "Previene la rotura mecánica durante el cepillado diario.",
      },
    ],
    processTitle: "Formulación y control de calidad",
    processIntro:
      "Fabricado bajo estándares cosméticos ISO 22716 BPF.",
    processImageAlt: "Laboratorio de formulación de sérum capilar en Marruecos",
    process: [
      {
        title: "Emulsión homogénea",
        body: "Mezcla de alta velocidad que asegura total estabilidad sin separación de fases.",
      },
      {
        title: "Aromatización según normas IFRA",
        body: "Incorporación de fragancias cosméticas hipoalergénicas.",
      },
      {
        title: "Control de viscosidad",
        body: "Ajuste preciso para dosificación suave mediante bomba cosmética.",
      },
      {
        title: "Cierre hermético antigoteo",
        body: "Bombas con sistema twist-lock que previenen fugas en envíos internacionales.",
      },
    ],
    specsTitle: "Ficha técnica y packaging",
    specs: [
      { label: "Función", value: "Sérum sin aclarado, protector térmico y elixir de brillo" },
      { label: "Tamaños", value: "50 ml y 100 ml" },
      { label: "Frascos", value: "Vidrio ámbar, PET translúcido o satinado" },
      { label: "Bombas", value: "Bomba dosificadora tratamiento (oro, plata, negro, blanco)" },
      { label: "MOQ", value: "200 unidades" },
      { label: "Plazos", value: "2 a 4 semanas" },
    ],
    applicationsTitle: "Canales de venta",
    applications: [
      {
        title: "Peluquerías y salones profesionales",
        body: "Producto de alta rotación para reventa y acabado.",
      },
      {
        title: "Marcas de cuidado capilar DTC",
        body: "Producto clave para rutinas capilares y cajas de suscripción.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Sérum Capilar",
    faq: [
      {
        question: "¿Engrasa el cabello fino?",
        answer:
          "No, las siliconas ligeras se evaporan rápidamente dejando únicamente una película nutritiva de argán imperceptible al peso.",
      },
      {
        question: "¿Es compatible con cabellos teñidos?",
        answer:
          "Completamente. No contiene sulfatos ni alcoholes agresivos, protegiendo tintes y alisados.",
      },
    ],
    ctaTitle: "Desarrolle su sérum capilar personalizado",
    ctaDescription:
      "Seleccione frasco, dosificador y fragancia para lanzar su propio sérum profesional.",
  },
  "argan-prickly-pear-face-elixir": {
    chip: "Antiedad",
    cardTitle: "Elixir Facial de Argán y Nopal (Higo Chumbo)",
    cardSummary:
      "Fórmula exclusiva que une aceite de argán orgánico y aceite de semillas de higo chumbo para una intensa regeneración celular.",
    name: "Elixir Facial Argán y Nopal Marca Blanca",
    h1: "Elixir Facial de Argán y Nopal — Antiedad de Lujo Mayorista",
    lede:
      "La cúspide del lujo botánico marroquí. Sinergia de aceite de argán prensado en frío y aceite virgen de semillas de higo chumbo (Opuntia Ficus-Indica). Creado para líneas antiedad de alta gama que exigen máxima eficacia antiarrugas.",
    metaTitle: "Elixir Facial Argán y Higo Chumbo | Antiedad Marca Blanca",
    metaDescription:
      "Elixir antiedad de argán y semillas de higo chumbo para su marca. Frascos 30ml/50ml. Alta gama botánica. Alto margen. MOQ desde 100 unidades.",
    keywords: [
      "elixir argan higo chumbo marca blanca",
      "aceite semillas nopal argan mayorista",
      "serum antiedad lujo marruecos marca blanca",
      "aceite opuntia ficus indica",
    ],
    facts: [
      { label: "Activos clave", value: "Aceite de Argán Bio + Semillas de Nopal virgen" },
      { label: "Nivel antioxidante", value: "Más de 1000 mg/kg de vitamina E natural" },
      { label: "Envases", value: "Frascos gotero de 30ml y 50ml en negro mate o ámbar" },
      { label: "Margen", value: "Posicionamiento lujo prestige (PVP 60€ - 120€)" },
    ],
    overview: {
      title: "La combinación antiedad botánica más poderosa de Marruecos",
      paragraphs: [
        "El aceite de semillas de higo chumbo es el extracto botánico más costoso y codiciado del mundo: se requiere cerca de una tonelada de fruta para obtener un solo litro de aceite puro de semillas. Posee la mayor concentración de vitamina E y esteroles del reino vegetal.",
        "Combinado con el aceite de argán marroquí, este elixir proporciona una respuesta integral al envejecimiento cutáneo: difumina líneas de expresión, atenúa ojeras y devuelve la elasticidad a la piel.",
        "Listo para personalizar con frascos de diseño, serigrafía o etiquetas metalizadas.",
      ],
      quote:
        "Dos tesoros legendarios de la flora marroquí unidos en un elixir de juventud de absorción rápida.",
      image: "/assets/img/Prickly Pear Seed Oil.jpg",
      imageAlt: "Semillas y fruto de nopal higo chumbo para extracción de aceite cosmético",
    },
    benefitsTitle: "Propiedades antiedad superiores",
    benefitsIntro:
      "Concentración récord en fitoesteroles, ácidos grasos esenciales y polifenoles.",
    benefits: [
      {
        title: "Aclara ojeras y revitaliza la mirada",
        body: "La vitamina K estimula la microcirculación reduciendo el tono oscuro bajo los ojos.",
      },
      {
        title: "Regeneración celular profunda",
        body: "Los fitoesteroles activan la renovación celular y protegen el colágeno.",
      },
      {
        title: "Acabado de aceite seco",
        body: "Absorción instantánea sin dejar brillo ni sensación grasa en el cutis.",
      },
      {
        title: "Retención de hidratación",
        body: "Refuerza la barrera epidérmica contra la deshidratación diaria.",
      },
    ],
    processTitle: "Prensado en frío y envasado protector",
    processIntro:
      "Extracción delicada con purga de nitrógeno para preservar los principios activos.",
    processImageAlt: "Extracción y control de pureza de aceite de higo chumbo y argán",
    process: [
      {
        title: "Prensado de semillas de nopal",
        body: "Separación manual, secado solar y prensado mecánico sin disolventes.",
      },
      {
        title: "Equilibrio sinérgico",
        body: "Proporción estudiada para maximizar la absorción dérmica.",
      },
      {
        title: "Purga con nitrógeno",
        body: "Eliminación del oxígeno en el frasco para evitar la oxidación prematura.",
      },
      {
        title: "Vidrio protector UV",
        body: "Envasado en frascos opacos que filtran la radiación perjudicial.",
      },
    ],
    specsTitle: "Ficha técnica del producto",
    specs: [
      { label: "INCI", value: "Argania Spinosa Kernel Oil, Opuntia Ficus-Indica Seed Oil, Tocopherol" },
      { label: "Tipos de piel", value: "Madura, desvitalizada, sensible, mixta" },
      { label: "Tamaños", value: "30 ml y 50 ml" },
      { label: "Vidrio", value: "Negro mate, ámbar oscuro o violeta Miron" },
      { label: "MOQ", value: "100 unidades" },
      { label: "Plazos", value: "2 a 3 semanas" },
    ],
    applicationsTitle: "Canales de venta recomendados",
    applications: [
      {
        title: "Cosmética de lujo prestige",
        body: "Sérum de noche reparador o elixir antiedad insignia.",
      },
      {
        title: "Spas y clínicas médico-estéticas",
        body: "Cuidado calmante tras peelings químicos o microneedling.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Elixir Argán y Nopal",
    faq: [
      {
        question: "¿Qué porcentaje de aceite de nopal contiene?",
        answer:
          "Nuestra fórmula estándar incluye una concentración generosa y clínicamente eficaz (entre 15% y 30%). Podemos adaptar la fórmula a su presupuesto.",
      },
      {
        question: "¿Provoca brotes en pieles grasas?",
        answer:
          "No. Ambos aceites tienen índice de comedogenicidad 0 y su alto contenido en ácido linoleico ayuda a equilibrar el sebo.",
      },
    ],
    ctaTitle: "Cree su elixir antiedad de lujo",
    ctaDescription:
      "Solicite muestras de laboratorio y compruebe el extraordinario valor comercial de esta fórmula.",
  },
  "argan-beard-conditioning-oil": {
    chip: "Cuidado Masculino",
    cardTitle: "Aceite Acondicionador de Barba con Argán",
    cardSummary:
      "Fórmula nutritiva para barba y piel facial. Suaviza el vello áspero, elimina el picor y aporta un aroma masculino sutil.",
    name: "Aceite para Barba con Argán Marca Blanca",
    h1: "Aceite para Barba con Argán al por Mayor para Barberías",
    lede:
      "Cuidado artesanal para barberías modernas y marcas de cosmética masculina. Combina aceite de argán de Marruecos con jojoba y almendras dulces para acondicionar barbas densas, evitar la caspa de barba y calmar la piel irritada.",
    metaTitle: "Aceite para Barba con Argán Marca Blanca | Mayorista Barberos",
    metaDescription:
      "Aceite de barba con argán al por mayor y marca blanca. Frascos 30ml y 60ml. Suaviza el vello y calma la piel. MOQ desde 150 unidades.",
    keywords: [
      "aceite barba argan marca blanca",
      "distribuidor aceite barba barberia",
      "aceite barba hombre mayorista",
      "fabricante aceite barba marruecos",
    ],
    facts: [
      { label: "Activos clave", value: "Aceite de Argán puro + Jojoba dorado + Almendras dulces" },
      { label: "Fragancias", value: "Cedro del Atlas, Madera de Oud, Sándalo o Sin Perfume" },
      { label: "Envase", value: "Frascos 30ml y 60ml en vidrio ámbar o negro mate boticario" },
      { label: "MOQ", value: "150 unidades con etiquetas resistentes al aceite" },
    ],
    overview: {
      title: "El pilar esencial del cuidado masculino moderno",
      paragraphs: [
        "El vello facial áspero requiere una textura equilibrada: un aceite suficientemente denso para ablandar las cerdas rebeldes, pero ligero para penetrar en la piel sin obstruir folículos.",
        "Nuestra fórmula marroquí combina argán protector con jojoba seborreguladora. Calma la irritación, previene la descamación y deja la barba impecable con un tacto suave y no graso.",
        "Disponible con fragancias masculinas exclusivas elaboradas con aceites esenciales puros: Cedro del Atlas marroquí, Madera de Oud o neutro para pieles sensibles.",
      ],
      quote:
        "Domina el vello rebelde, elimina el picor y perfuma con distinción.",
      image: "/assets/img/img3.jfif",
      imageAlt: "Cuidado y arreglo de barba con aceite acondicionador de argán",
    },
    benefitsTitle: "Beneficios para la barba y la piel",
    benefitsIntro:
      "Doble acción para una barba cuidada y un cutis descansado.",
    benefits: [
      {
        title: "Elimina la caspa de barba",
        body: "Hidrata la piel bajo el vello deteniendo la descamación.",
      },
      {
        title: "Suaviza las cerdas ásperas",
        body: "Flexibiliza el vello evitando roces y pinchazos incómodos.",
      },
      {
        title: "Acabado mate no pegajoso",
        body: "Se absorbe rápidamente sin manchar camisas ni dejar residuo grasiento.",
      },
      {
        title: "Fortalece el folículo piloso",
        body: "Aporta nutrientes que favorecen un crecimiento denso y saludable.",
      },
    ],
    processTitle: "Elaboración y envasado estilo barbería",
    processIntro:
      "Fabricación en lotes reducidos para garantizar la frescura aromática.",
    processImageAlt: "Envasado y control de calidad de aceite para barba",
    process: [
      {
        title: "Base oleosa equilibrada",
        body: "Combinación de argán, jojoba y vitamina E para una absorción óptima.",
      },
      {
        title: "Infusión de aceites esenciales",
        body: "Aromatización con esencias botánicas no fotosensibles.",
      },
      {
        title: "Filtrado de brillo",
        body: "Clarificación para una transparencia dorada sin sedimentos.",
      },
      {
        title: "Montaje con gotero de precisión",
        body: "Goteros dosificadores que permiten un control gota a gota.",
      },
    ],
    specsTitle: "Detalles del packaging",
    specs: [
      { label: "Ingredientes", value: "Argania Spinosa Kernel Oil, Simmondsia Chinensis Seed Oil, Prunus Amygdalus Dulcis Oil, Tocopherol" },
      { label: "Tamaños", value: "30 ml y 60 ml" },
      { label: "Vidrio", value: "Negro mate, ámbar oscuro o boticario transparente" },
      { label: "Fragancias", value: "Cedro del Atlas, Oud Oriental, Sándalo Cítrico, Neutro" },
      { label: "MOQ", value: "150 unidades" },
      { label: "Plazos", value: "2 a 3 semanas" },
    ],
    applicationsTitle: "Oportunidades de comercialización",
    applications: [
      {
        title: "Barberías y salones masculinos",
        body: "Producto de alta venta en recepción y servicio con toalla caliente.",
      },
      {
        title: "Marcas DTC de cuidado masculino",
        body: "Producto estrella para estuches de regalo y kits de afeitado.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Aceite de Barba",
    faq: [
      {
        question: "¿Sirve como aceite pre-afeitado?",
        answer:
          "Sí, la lubricación del argán y la jojoba crea un escudo eficaz contra la irritación de la cuchilla en cuello y mejillas.",
      },
      {
        question: "¿Las etiquetas resisten los goteos de aceite?",
        answer:
          "Todas nuestras etiquetas se imprimen en vinilo sintético impermeable con laminado mate o brillo que no se deteriora.",
      },
    ],
    ctaTitle: "Lance su propia línea de cuidado de barba",
    ctaDescription:
      "Personalice su fragancia y frasco para destacar su marca en el mercado de barbería.",
  },
  "argan-body-massage-oil": {
    chip: "Cuidado Corporal",
    cardTitle: "Aceite Corporal y Masaje con Argán",
    cardSummary:
      "Aceite corporal nutritivo y versátil. Sella la hidratación tras la ducha o proporciona un deslizamiento idóneo para masajes en spa.",
    name: "Aceite Corporal y Masaje con Argán Marca Blanca",
    h1: "Aceite Corporal y Masaje con Argán al por Mayor para Spas",
    lede:
      "Aceite de masaje profesional formulado con aceite de argán puro de Marruecos y emolientes botánicos sedosos. Ofrece un deslizamiento suave y duradero en cabinas de spa o como aceite seco satinado tras el baño.",
    metaTitle: "Aceite Corporal y Masaje Argán Marca Blanca | Spas Mayorista",
    metaDescription:
      "Aceite corporal y masaje de argán al por mayor marca blanca. Frascos dosificador 100ml, 200ml, 250ml. Deslizamiento perfecto. MOQ desde 100 unidades.",
    keywords: [
      "aceite masaje argan mayorista",
      "aceite corporal argan marca blanca",
      "proveedor aceite spa argan",
      "aceite masaje profesional marruecos",
    ],
    facts: [
      { label: "Textura", value: "Deslizamiento continuo, absorción satinada sin pegajosidad" },
      { label: "Envase", value: "Frascos dosificador 100ml, 200ml, 250ml o aluminio pulido" },
      { label: "Destinatarios", value: "Spas de hoteles, centros de bienestar, marcas corporales" },
      { label: "MOQ", value: "100 unidades (etiqueta) / 500 unidades (serigrafía)" },
    ],
    overview: {
      title: "El ritual del hammam y spa marroquí tradicional",
      paragraphs: [
        "Durante generaciones, el ritual de belleza marroquí ha confiado en las propiedades del aceite de argán. En los spas de lujo actuales, los terapeutas necesitan un aceite con el equilibrio justo: deslizamiento duradero que facilite el masaje, seguido de una absorción que deje la piel luminosa sin manchar albornoces.",
        "Nuestra fórmula une el argán con almendras dulces y hueso de albaricoque. Alivia la tensión muscular y nutre intensamente las pieles deshidratadas.",
        "Presentado en frascos dosificadores ergonómicos o recipientes de aluminio cepillado de estilo minimalista.",
      ],
      quote:
        "Deslizamiento inigualable para terapeutas y un velo de hidratación duradera para el cuerpo.",
      image: "/assets/img/argan-beauty.jpg",
      imageAlt: "Masaje corporal en spa marroquí con aceite de argán dorado",
    },
    benefitsTitle: "Rendimiento profesional de spa",
    benefitsIntro:
      "Aprobado por terapeutas y centros de hidroterapia de prestigio.",
    benefits: [
      {
        title: "Deslizamiento continuo sin tirones",
        body: "Idóneo para masaje sueco, descontracturante, drenaje linfático o relajante.",
      },
      {
        title: "Sella la humedad tras la ducha",
        body: "Aplicado sobre piel húmeda tras el baño retiene el agua en la epidermis durante 24 horas.",
      },
      {
        title: "Calma la piel expuesta al sol",
        body: "Alivia la sensación de tirantez y devuelve flexibilidad a las zonas secas.",
      },
      {
        title: "Lavado fácil en toallas de spa",
        body: "Se elimina fácilmente de la lencería de spa en ciclos de lavado comercial ordinarios.",
      },
    ],
    processTitle: "Preparación y envasado especializado",
    processIntro:
      "Fórmula equilibrada para mantener una viscosidad homogénea en cualquier estación.",
    processImageAlt: "Envasado y logística de aceite corporal para spas",
    process: [
      {
        title: "Mezcla de lípidos ligeros",
        body: "Ajuste milimétrico de viscosidad para permitir un fácil esparcimiento corporal.",
      },
      {
        title: "Aromaterapia relajante",
        body: "Aromas botánicos a elegir: Azahar marroquí, Verbena fresca, Rosa damascena o Neutro.",
      },
      {
        title: "Control microbiológico",
        body: "Ausencia total de agua que asegura 24 meses de estabilidad natural sin conservantes dañinos.",
      },
      {
        title: "Bombas con bloqueo de seguridad",
        body: "Dosificadores diseñados para operar cómodamente incluso con manos aceitosas.",
      },
    ],
    specsTitle: "Opciones de presentación",
    specs: [
      { label: "Tamaños", value: "100 ml, 200 ml, 250 ml, y garrafas de 1L para cabina de spa" },
      { label: "Envases", value: "PET ámbar, vidrio pesado o aluminio cepillado reciclable" },
      { label: "Dosificadores", value: "Bomba loción con bloqueo, tapón de vertido o disc-top" },
      { label: "Aromas", value: "Azahar, Verbena, Lavanda silvestre, Neutro" },
      { label: "MOQ", value: "100 unidades" },
      { label: "Plazos", value: "2 a 3 semanas" },
    ],
    applicationsTitle: "Sectores comerciales",
    applications: [
      {
        title: "Spas de hoteles y resorts",
        body: "Uso en cabina de tratamiento y venta en boutique."
      },
      {
        title: "Marcas de cosmética corporal",
        body: "Aceite seco hidratante diario para el cuerpo."
      },
      {
        title: "Kits de baño oriental",
        body: "Combinado con jabón negro marroquí y guante kessa."
      },
    ],
    faqTitle: "Preguntas Frecuentes — Aceite Corporal y Masaje",
    faq: [
      {
        question: "¿Mancha las sábanas de masaje?",
        answer:
          "No, nuestros aceites vegetales ligeros se eliminan sin dificultad con detergentes estándar de lavandería profesional.",
      },
      {
        question: "¿Disponen de garrafas para rellenar?",
        answer:
          "Sí, suministramos formatos de cabina de 1L, 5L y 25L para uso profesional continuo.",
      },
    ],
    ctaTitle: "Amplíe su oferta de bienestar con argán",
    ctaDescription:
      "Solicite muestras aromatizadas y elabore su catálogo de cuidado corporal a medida.",
  },
  "usda-organic-argan-oil": {
    chip: "Orgánico Certificado",
    cardTitle: "Aceite de Argán Certificado Orgánico USDA y ECOCERT",
    cardSummary:
      "Lote de aceite orgánico con trazabilidad integral hasta la cosecha en cooperativa. Cumple con los estándares internacionales más estrictos.",
    name: "Aceite de Argán Orgánico USDA Marca Blanca",
    h1: "Aceite de Argán Certificado Orgánico USDA y ECOCERT al por Mayor",
    lede:
      "Aceite de argán 100% orgánico certificado bajo los sellos USDA NOP y ECOCERT Cosmos Organic. Recolección silvestre en bosques protegidos de arganes, prensado mecánicamente en Agadir. Envasado en vidrio violeta anti-UV para cadenas comerciales de máxima exigencia.",
    metaTitle: "Aceite Argán Orgánico USDA y ECOCERT Mayorista | Marca Blanca",
    metaDescription:
      "Aceite de argán orgánico certificado USDA y ECOCERT al por mayor. Frascos 30ml, 50ml, 100ml. Trazabilidad completa. MOQ desde 200 unidades.",
    keywords: [
      "aceite argan organico usda mayorista",
      "aceite argan ecocert marca blanca",
      "aceite argan biologico a granel",
      "proveedor cosmos organic argan",
    ],
    facts: [
      { label: "Sellos oficiales", value: "USDA NOP, ECOCERT (Cosmos Organic), ISO 22716" },
      { label: "Trazabilidad", value: "Auditoría completa desde la cooperativa hasta el frasco" },
      { label: "Envase", value: "Frascos 30ml, 50ml, 100ml en vidrio violeta protector o ámbar" },
      { label: "MOQ", value: "200 unidades con certificado de transacción (TC) incluido" },
    ],
    overview: {
      title: "Rigor biológico certificado para la gran distribución internacional",
      paragraphs: [
        "En canales de distribución exigentes como las tiendas orgánicas europeas, Whole Foods Market o Sephora, la certificación oficial es indispensable. Nuestro aceite cuenta con auditorías anuales exhaustivas de ECOCERT y del Departamento de Agricultura de EE. UU. (USDA NOP).",
        "Los frutos se recolectan en la reserva de la biosfera del argán declarada por la UNESCO, libres de pesticidas de síntesis y transgénicos. El prensado mecánico se realiza en líneas segregadas para evitar cualquier contaminación cruzada.",
        "Entregamos certificados de transacción (TC) por lote para que su marca pueda lucir legalmente los sellos oficiales en el packaging final.",
      ],
      quote:
        "Doble certificación USDA Organic y ECOCERT con trazabilidad de origen garantizada.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "Cosecha certificada orgánica de argán en cooperativas de Marruecos",
    },
    benefitsTitle: "El valor del aval orgánico oficial",
    benefitsIntro:
      "Por qué los sellos oficiales impulsan la confianza del consumidor ecológico.",
    benefits: [
      {
        title: "Conformidad regulatoria global",
        body: "Apto para su comercialización inmediata en EE. UU., Unión Europea, Reino Unido y Canadá.",
      },
      {
        title: "Libre de residuos químicos",
        body: "Ensayos analíticos independientes que avalan la ausencia de pesticidas y metales pesados.",
      },
      {
        title: "Máxima concentración biológica",
        body: "Extracción en frío que salvaguarda escualeno vegetal, polifenoles y esteroles naturales.",
      },
      {
        title: "Impacto social comprobado",
        body: "Beneficia directamente a cooperativas de mujeres bereberes y protege el bosque protegido.",
      },
    ],
    processTitle: "Cadena de custodia y extracción biológica",
    processIntro:
      "Líneas de prensado exclusivas y envasado en vidrio biotecnológico.",
    processImageAlt: "Extracción y control de pureza de argán biológico en Agadir",
    process: [
      {
        title: "Cosecha en parcelas certificadas",
        body: "Recolección exclusiva en zonas autorizadas de las comarcas de Taroudant y Chtouka.",
      },
      {
        title: "Prensado mecánico en frío",
        body: "Maquinaria dedicada desinfectada con productos biocompatibles homologados.",
      },
      {
        title: "Análisis en laboratorios independientes",
        body: "Control exhaustivo del índice de peróxidos (< 10 meq O2/kg) y pureza de ácidos grasos.",
      },
      {
        title: "Envasado en vidrio violeta Miron",
        body: "Vidrio biofotónico que bloquea la luz visible perjudicial para proteger los antioxidantes.",
      },
    ],
    specsTitle: "Ficha técnica y normativa",
    specs: [
      { label: "Fuente botánica", value: "Argania spinosa L. Skeels" },
      { label: "Avales", value: "USDA NOP, ECOCERT Organic (CE 834/2007 y Cosmos Standard)" },
      { label: "Pureza", value: "100.0% Aceite Virgen de Argán Orgánico" },
      { label: "Tamaños", value: "30 ml, 50 ml, 100 ml en vidrio" },
      { label: "Frasco", value: "Vidrio violeta Miron o ámbar opaco" },
      { label: "Documentación", value: "Certificado de Transacción (TC), COA por lote, FDS" },
      { label: "MOQ", value: "200 unidades" },
    ],
    applicationsTitle: "Canales estratégicos",
    applications: [
      {
        title: "Cadenas de supermercados ecológicos",
        body: "Cumple los criterios de admisión más exigentes.",
      },
      {
        title: "Marcas de cosmética natural certificada",
        body: "Permite incorporar sellos bio reconocidos en envase.",
      },
      {
        title: "Farmacias y parafarmacias",
        body: "Recomendación ideal para pieles muy sensibles y atópicas.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Argán Orgánico Certificado",
    faq: [
      {
        question: "¿Puedo incluir los logos USDA u ECOCERT en mi etiqueta?",
        answer:
          "Sí. Gracias a nuestra certificación y a los certificados de transacción (TC) facilitados, su marca puede utilizar legítimamente los sellos bio en envases conformes.",
      },
      {
        question: "¿Qué diferencia existe con el argán prensado en frío convencional?",
        answer:
          "El convencional es puro, pero el orgánico certificado garantiza parcelas auditadas sin pesticidas y un control oficial avalado por entidades externas.",
      },
    ],
    ctaTitle: "Compre aceite de argán orgánico certificado",
    ctaDescription:
      "Solicite los certificados de lote recientes y desarrolle su línea ecológica hoy mismo.",
  },
};

const AR_PRODUCTS: Record<string, ProductLocalization> = {
  "cold-pressed-argan-oil": {
    chip: "عصر على البارد",
    cardTitle: "مغذيات طبيعية ونقاء محفوظ",
    cardSummary:
      "طريقتنا في العصر الميكانيكي على البارد تحافظ على مضادات الأكسدة الطبيعية، فيتامين E، واللون الذهبي الشفاف، ورائحة البندق الخفيفة الأصيلة.",
    name: "زيت الأركان المغربي المعصور على البارد",
    h1: "زيت الأركان المغربي المعصور على البارد بالجملة",
    lede:
      "معصور ميكانيكياً على البارد من لوز الأركان الخام غير المحمص في جنوب غرب المغرب. هذا الصنف التجميلي الفاخر يحافظ على فيتامين E والأحماض الدهنية الأساسية دون أي معالجة حرارية — جاهز للسيرومات ومستحضرات العناية بالشعر والعلامات الخاصة.",
    metaTitle: "زيت أركان معصور على البارد بالجملة | جودة تجميلية خام بالبراميل",
    metaDescription:
      "اشترِ زيت أركان مغربي معصور على البارد بالجملة. درجة تجميلية بكر غير مكررة للسيرومات ومستحضرات التجميل. شهادات تحليل COA وتعبئة مباشرة من المصنع بأكادير.",
    keywords: [
      "زيت اركان بالجملة",
      "زيت اركان معصور على البارد",
      "زيت اركان تجميلي خام",
      "مورد زيت اركان المغرب",
      "زيت اركان بكر ممتاز بالجملة",
    ],
    facts: [
      { label: "طريقة الاستخلاص", value: "عصر ميكانيكي على البارد، بدون مذيبات كيميائية" },
      { label: "درجة الجودة", value: "تجميلي بكر، لوز خام غير محمص" },
      { label: "الخصائص", value: "لون ذهبي فاتح، رائحة بندق خفيفة طبيعية" },
      { label: "الاستخدام", value: "للوجه، الشعر، العناية بالجسم والتركيبات التجميلية" },
    ],
    overview: {
      title: "لماذا يُعد العصر على البارد المعيار الذهبي لشركات التجميل والمشترين",
      paragraphs: [
        "يتم إنتاج زيت الأركان المعصور على البارد دون استخدام أي مذيبات كيميائية ودون درجات الحرارة المرتفعة المتبعة في التكرير الرخيص. يتم تكسير الثمار وفرز حبات اللوز ثم عصرها ميكانيكياً بحيث تظل التوكوفيرولات ومضادات الأكسدة وأحماض الأوليك واللينوليك حية داخل الزيت.",
        "يلاحظ خبراء التركيبات التجميلية الفارق المباشر في الملمس والامتصاص السريع دون ترك طبقة دهنية مزعجة. نوفر هذا الصنف بمكون نقي 100% ومطابق لاسم التسمية الدولية (INCI: Argania Spinosa Kernel Oil).",
      ],
      quote: "خالٍ تماماً من الهكسان، وبدون إزالة روائح كيميائية، وبدون خلط مع أي زيوت أخرى. ما يصلك هو الزيت الصافي الخارج من المعصرة مباشرة.",
      image: "/assets/img/production-argan.jpg",
      imageAlt: "العصر الميكانيكي التقليدي لزيت الأركان على البارد في المغرب",
    },
    benefitsTitle: "ما يقدمه هذا الزيت لمنتجاتك وتركيباتك التجميلية",
    benefitsIntro:
      "يختاره كيميائيو مستحضرات التجميل لأن الخصائص الغذائية والعلاجية للزيت تظل سليمة تماماً بعد العصر.",
    benefits: [
      {
        title: "فيتامين E ومضادات أكسدة طبيعية",
        body: "يحمي البشرة ويقوي الحاجز الدهني الواقي، مما يجعله مكوناً رئيسياً في سيرومات مكافحة الشيخوخة وزيوت الشعر.",
      },
      {
        title: "أحماض دهنية أساسية (أوميغا 6 و 9)",
        body: "تمنح البشرة ليونة ونعومة وترطيباً عميقاً دون إغلاق المسام.",
      },
      {
        title: "ملمس خفيف وسريع الامتصاص",
        body: "اللوز غير المحمص يحافظ على قوام خفيف يسهل دمجه في الكريمات وسيرومات النهار.",
      },
    ],
    processTitle: "مراحل العصر والإنتاج المخصصة للتصدير",
    processIntro: "عملية ميكانيكية دقيقة من حبة اللوز إلى برميل الشحن دون حرارة مضافة.",
    processImageAlt: "لوز الأركان الخام الجاهز للعصر على البارد",
    process: [
      { title: "فرز اللوز بعناية", body: "انتقاء اللوز السليم من أشجار سوس وتجنب أي حبات تالفة أو محمصة." },
      { title: "العصر الميكانيكي البارد", body: "استخلاص ميكانيكي بدرجة حرارة منخفضة ثم ترك الزيت للترسيب الطبيعي." },
      { title: "الفلترة المزدوجة والفحص المخبري", body: "تصفية دقيقة وفحص معايير الحموضة والبيروكسيد لكل دفعة." },
      { title: "التعبئة المخصصة للشحن الدولي", body: "تعبئة محكمة بأرقام تشغيلية مطابقة لشهادات التحليل المخبري." },
    ],
    specsTitle: "المواصفات الفنية النموذجية",
    specs: [
      { label: "الاسم المعتمد INCI", value: "Argania Spinosa Kernel Oil" },
      { label: "المصدر النباتي", value: "Argania spinosa، المملكة المغربية" },
      { label: "طريقة الاستخلاص", value: "عصر ميكانيكي على البارد" },
      { label: "المظهر", value: "زيت ذهبي فاتح نقي" },
      { label: "الرائحة", value: "طبيعية خفيفة تشبه البندق" },
      { label: "الوثائق المرفقة", value: "COA، SDS، وشهادات المنشأ والشهادات العضوية" },
    ],
    applicationsTitle: "أبرز الاستخدامات لدى العلامات التجارية",
    applications: [
      { title: "سيرومات الوجه وكريمات العناية", body: "زيت نقي للوجه أو مكون دهني مغذٍ في المستحلبات والكريمات." },
      { title: "مستحضرات الشعر والعناية باللحية", body: "زيوت معالجة للشعر الجاف وسيرومات لمعان احترافية لصالونات التجميل." },
    ],
    faqTitle: "الأسئلة الشائعة من المشترين والشركات",
    faq: [
      { question: "هل زيت الأركان المعصور على البارد مكرر أو منزوع الرائحة؟", answer: "لا، هو زيت بكر خام 100% غير مكرر وغير معالج كيميائياً للحفاظ على فوائده الكاملة." },
    ],
    ctaTitle: "طلب عرض أسعار لزيت الأركان المعصور على البارد",
    ctaDescription: "حدد الكمية المطلوبة وسنوافيك بعرض سعر شامل المواصفات الفنية والعينات خلال 24 ساعة.",
  },
  "organic-certified-argan-oil": {
    chip: "عضوي معتمد",
    cardTitle: "شهادات ECOCERT و USDA Organic",
    cardSummary:
      "زيت أركان عضوي معتمد وموثق بشهادات دولية رسمية، مع تتبع دقيق من أشجار محمية اليونسكو إلى المنتج النهائي.",
    name: "زيت الأركان العضوي المعتمد بشهادات ECOCERT و USDA",
    h1: "زيت الأركان العضوي بالجملة (شهادات ECOCERT و USDA)",
    lede:
      "توريد زيت الأركان العضوي النقي لمختبرات التجميل والمستوردين مع توفير شهادات المعاملات الرسمية وتتبع كامل لمصدر الزيت.",
    metaTitle: "زيت أركان عضوي معتمد بالجملة | ECOCERT و USDA المغرب",
    metaDescription:
      "اشترِ زيت أركان عضوي معتمد بالجملة من المغرب. شهادات ECOCERT و USDA Organic، براميل وخزانات للتصدير المباشر من أكادير.",
    keywords: ["زيت اركان عضوي", "زيت اركان ايكوسيرت", "زيت اركان usda organic بالجملة"],
    facts: [
      { label: "الشهادات", value: "ECOCERT Greenlife و USDA Organic" },
      { label: "النقاء", value: "عضوي 100% خالٍ من المبيدات والمواد المضافة" },
    ],
    overview: {
      title: "ضمان عضوي رسمي معتمد يرفع قيمة علامتك التجارية",
      paragraphs: [
        "نوفر شهادات التتبع والشهادات الرسمية لكل شحنة تجارية، مما يتيح لعلامتك استخدام الشعارات المعتمدة دولياً بثقة مطلقة.",
      ],
      quote: "امتثال كامل لمعايير مستحضرات التجميل العضوية والنظيفة عالمياً.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "شهادات الاعتماد العضوي لزيت الأركان المغربي",
    },
    benefitsTitle: "المزايا للعلامات التجارية",
    benefitsIntro: "تلبية طلب المستهلكين المتزايد على المنتجات الطبيعية والعضوية الموثقة.",
    benefits: [
      { title: "استخدام الشعارات الرسمية", body: "حق وضع علامة ECOCERT أو USDA على عبوات منتجك النهائي." },
    ],
    processTitle: "سلسلة التوريد العضوية",
    processIntro: "جني الثمار من مناطق محمية اليونسكو وعصرها في خطوط إنتاج عضوية معتمدة.",
    processImageAlt: "جني ثمار الأركان العضوية في المغرب",
    process: [
      { title: "جني بري معتمد", body: "جمع الثمار من غابات الأركان الخاضعة لرقابة التفتيش السنوية." },
    ],
    specsTitle: "المواصفات العضوية",
    specs: [
      { label: "جهات الاعتماد", value: "ECOCERT و USDA" },
    ],
    applicationsTitle: "الاستخدامات",
    applications: [
      { title: "مستحضرات التجميل العضوية", body: "للمنتجات المصنفة تحت معايير COSMOS و USDA Organic." },
    ],
    faqTitle: "الأسئلة الشائعة حول الشهادات العضوية",
    faq: [
      { question: "هل ترسلون شهادة المعاملة (TC) مع الشحنة؟", answer: "نعم، تصدر شهادة التتبع الرسمية لكل طلبية تصدير تجارية." },
    ],
    ctaTitle: "طلب عرض أسعار لزيت الأركان العضوي",
    ctaDescription: "احصل على الشهادات الرسمية وقائمة الأسعار المحدثة للكميات العضوية.",
  },
  "bulk-argan-oil": {
    chip: "كميات كبيرة وبراميل",
    cardTitle: "براميل 200 لتر وخزانات IBC 1000 لتر",
    cardSummary:
      "قدرة إنتاجية صناعية كبرى لتلبية احتياجات المصانع وشركات التعبئة مع ضمان استقرار التوريد على مدار العام.",
    name: "زيت الأركان بالكميات الكبيرة (براميل وخزانات)",
    h1: "زيت الأركان المغربي بالبراميل والكميات الصناعية بالجملة",
    lede:
      "توريد مباشر لمصانع وماركات التجميل في عبوات 25 لتر، براميل معدنية 200 لتر، وخزانات IBC سعة 1,000 لتر مباشرة من أكادير.",
    metaTitle: "زيت أركان بالبراميل والكميات الكبيرة | براميل 200 لتر وخزانات المغرب",
    metaDescription:
      "مورد زيت أركان بالبراميل الصناعية والكميات الكبيرة. براميل 200 لتر وخزانات 1000 لتر مع شحن بحري وجوي سريع لجميع دول العالم.",
    keywords: ["زيت اركان بالبراميل", "براميل زيت اركان 200 لتر", "خزانات ibc زيت اركان"],
    facts: [
      { label: "أنواع العبوات", value: "عبوات 25 لتر، براميل 200 لتر، وخزانات IBC 1000 لتر" },
      { label: "القدرة التصديرية", value: "أكثر من 20 طناً شهرياً" },
    ],
    overview: {
      title: "لوجستيات تصدير احترافية ومصممة لخدمة المصانع",
      paragraphs: [
        "تتم التعبئة في ظروف خاصة وبحماية غازية تمنع الأكسدة أثناء رحلة الشحن البحري، مع توفير كافة وثائق التخليص الجمركي.",
      ],
      quote: "استقرار وثقة في التوريد لحماية استمرارية خطوط الإنتاج لديكم.",
      image: "/assets/img/wholesale-argan-oil.jpg",
      imageAlt: "براميل زيت الأركان الجاهزة للتصدير",
    },
    benefitsTitle: "مزايا شراء الكميات الصناعية",
    benefitsIntro: "أسعار مصنع مباشرة وتنافسية تعزز هوامش ربحكم.",
    benefits: [
      { title: "أسعار تنافسية مباشرة من المصدر", body: "توفير التكاليف بالتعامل المباشر مع المصنع دون وسطاء." },
    ],
    processTitle: "تجهيز الشحنات الكبرى",
    processIntro: "تعبئة محكمة وتثبيت احترافي على منصات الشحن الدولي.",
    processImageAlt: "تجهيز شحنات براميل زيت الأركان",
    process: [
      { title: "حماية الشحنة ضد الأكسدة", body: "تعبئة آمنة تضمن بقاء الزيت طازجاً طوال فترة النقل." },
    ],
    specsTitle: "بيانات العبوات والوزن",
    specs: [
      { label: "وزن البرميل 200 لتر", value: "حوالي 185 كغ صافي" },
      { label: "وزن خزان IBC 1000 لتر", value: "حوالي 920 كغ صافي" },
    ],
    applicationsTitle: "الاستخدامات الصناعية",
    applications: [
      { title: "خطوط الإنتاج الضخمة", body: "شامبوهات، بلسم الشعر، ولوشنات الجسم التجميلية." },
    ],
    faqTitle: "أسئلة الكميات الكبيرة",
    faq: [
      { question: "كم تستغرق مدة تجهيز طلبات البراميل؟", answer: "تكون جاهزة للشحن عادة في غضون 3 إلى 7 أيام عمل." },
    ],
    ctaTitle: "طلب عرض سعر للبراميل أو الخزانات",
    ctaDescription: "احصل على أسعارنا التنافسية تسليم ميناء أكادير (FOB) أو واصلة لميناكم (CIF).",
  },
  "traceable-argan-oil": {
    chip: "توثيق مخبري كامل",
    cardTitle: "شهادات تحليل COA وبيانات سلامة SDS",
    cardSummary:
      "تقارير مخبرية معتمدة وشفافية كاملة متوافقة مع متطلبات هيئات الدواء والغذاء ومسؤولي السلامة بالاتحاد الأوروبي.",
    name: "زيت أركان موثق مع شهادات الفحص المخبري COA و SDS",
    h1: "زيت أركان معتمد مع شهادات تحليل مخبرية كاملة (COA)",
    lede:
      "تترافق كل شحنة مع تقرير فحص مخبري شامل صادر عن مختبرات معتمدة: قياس نسب الأحماض الدهنية، البيروكسيد والحموضة لملف التسجيل التجميلي (PIF).",
    metaTitle: "زيت أركان موثق مع شهادات COA | وثائق التصدير الرسمية المغرب",
    metaDescription:
      "زيت أركان مغربي مع تقارير تحليل مخبرية تفصيلية. شهادة تحليل COA لكل دفعة، بيانات سلامة SDS / MSDS، وتوافق تام مع المواصفات الأوروبية والدولية.",
    keywords: ["شهادة تحليل زيت اركان", "تحليل مختبر زيت اركان", "زيت اركان موثق"],
    facts: [
      { label: "الفحوصات", value: "مؤشر الحموضة، البيروكسيد، والأحماض الدهنية" },
      { label: "المطابقة", value: "متوافق مع لوائح الاتحاد الأوروبي وهيئة FDA" },
    ],
    overview: {
      title: "الشفافية التوثيقية اللازمة لتسجيل منتجاتكم",
      paragraphs: [
        "يتطلب تسجيل مستحضرات التجميل في الأسواق العالمية ملفات تقنية واضحة. نوفر تقارير التحليل الكيميائي التفصيلية لكل دفعة.",
      ],
      quote: "دقة تقنية ومخبرية تسهل اعتماد وتسجيل منتجاتكم لدى السلطات الصحية.",
      image: "/assets/img/private-label-argan.jpg",
      imageAlt: "الفحص المخبري لزيت الأركان المغربي",
    },
    benefitsTitle: "الأمان التنظيمي والقانوني",
    benefitsIntro: "اجتياز تدقيق الجودة والجمارك بسهولة وسرعة.",
    benefits: [
      { title: "ملف تسجيل جاهز للمختبرات", body: "بيانات فنية مكتملة لمقيمي سلامة مستحضرات التجميل." },
    ],
    processTitle: "الفحوصات المخبرية",
    processIntro: "أخذ عينات عشوائية واختبارها قبل الإفراج عن أي شحنة.",
    processImageAlt: "اختبارات مخبرية لزيت الأركان",
    process: [
      { title: "تحليل الكروماتوغرافيا الغازية", body: "التأكد من النقاء النباتي التام وغياب أي ملوثات أو غش." },
    ],
    specsTitle: "المعايير المحددة",
    specs: [
      { label: "نسبة حموضة الأوليك", value: "أقل من 0.8% (تجميلي بكر ممتاز)" },
    ],
    applicationsTitle: "الاستخدامات",
    applications: [
      { title: "الماركات الخاضعة لرقابة تنظيمية دقيقة", body: "لتسجيل المنتجات في بوابات مستحضرات التجميل الرسمية." },
    ],
    faqTitle: "أسئلة الجودة والمختبر",
    faq: [
      { question: "هل ترسلون شهادة COA قبل الشحن؟", answer: "نعم، يمكننا تزويدكم بنسخة من شهادة الدفعة المحجوزة للمراجعة قبل الشحن." },
    ],
    ctaTitle: "طلب نموذج شهادة تحليل مخبري",
    ctaDescription: "اطلع على نموذج تقرير فحص مخبري وتحدث مع مسؤولي الجودة لدينا.",
  },
  "cooperative-argan-oil": {
    chip: "مصدر أخلاقي عادل",
    cardTitle: "التعاونيات النسوية بمنطقة سوس",
    cardSummary:
      "زيت أركان مستخرج من العمل اليدوي التراثي لنساء التعاونيات في قرى سوس ماسة والصويرة وأكادير.",
    name: "زيت الأركان من التعاونيات النسوية المغربية",
    h1: "زيت الأركان من التعاونيات النسوية بالجملة (تجارة عادلة)",
    lede:
      "توريد أخلاقي قائم على مبادئ التجارة العادلة مباشرة من التعاونيات النسوية في منطقة أكادير وسوس. ساهم في تمكين المرأة القروية مع الحصول على زيت أصيل فائق الجودة.",
    metaTitle: "زيت أركان من التعاونيات بالجملة | تجارة عادلة وتوريد أخلاقي المغرب",
    metaDescription:
      "اشترِ زيت أركان مغربي أصلي من التعاونيات النسوية في سوس. تجارة عادلة، أثر اجتماعي إيجابي، وجودة تقليدية معتمدة للتصدير.",
    keywords: ["تعاونيات زيت اركان", "تعاونيات نساء المغرب", "زيت اركان تجارة عادلة"],
    facts: [
      { label: "الأثر الاجتماعي", value: "دخل مستدام لتمكين نساء القرى والبوادي" },
      { label: "الحرفة التراثية", value: "تكسير يدوي تقليدي لحبات النوى" },
    ],
    overview: {
      title: "قصة ملهمة وأثر اجتماعي حقيقي يعزز سردية علامتك التجارية",
      paragraphs: [
        "تحافظ التعاونيات النسوية على الإرث التاريخي لتكسير نوى الأركان يدوياً. شراؤك لهذا الزيت يضمن عائداً عادلاً لمئات العائلات الريفية في بيئة شجرة الأركان.",
      ],
      quote: "زيت مميز يساهم مباشرة في تنمية مجتمعات جبال وسهول سوس بالمغرب.",
      image: "/assets/img/what-is-argan-oil.webp",
      imageAlt: "نساء مغربيات يعملن في استخلاص زيت الأركان بالتعاونية",
    },
    benefitsTitle: "لماذا تختار التوريد من التعاونيات",
    benefitsIntro: "رسالة تسويقية صادقة وقوية تخاطب المستهلكين المهتمين بالمسؤولية الاجتماعية.",
    benefits: [
      { title: "سردية أصيلة لعلامتك التجارية", body: "شارك عملاءك قصة إنسانية مستدامة خلف منتجات العناية بالبشرة لديك." },
    ],
    processTitle: "عمل التعاونيات",
    processIntro: "شراكة قائمة على التقدير والتعويض المالي العادل للعمل اليدوي.",
    processImageAlt: "العمل التراثي في تعاونيات الأركان",
    process: [
      { title: "التكسير اليدوي بحجارة الصوان", body: "طريقة تقليدية موروثة تحافظ على حبة اللوز كاملة دون إتلافها." },
    ],
    specsTitle: "المصدر والنموذج",
    specs: [
      { label: "سلسلة التوريد", value: "تعاونيات سوس ماسة، المملكة المغربية" },
    ],
    applicationsTitle: "المجال التسويقي",
    applications: [
      { title: "مستحضرات التجميل الأخلاقية", body: "مثالي للماركات التي تركز على التجارة العادلة والاستدامة المجتمعية." },
    ],
    faqTitle: "أسئلة حول التعاونيات",
    faq: [
      { question: "هل يمكننا ذكر التعاونيات في تغليف منتجاتنا؟", answer: "نعم بالتأكيد، نزودكم بمعلومات دقيقة وقصص موثقة لإثراء تغليف وتسويق علامتكم." },
    ],
    ctaTitle: "دعم نموذج التعاونيات النسوية",
    ctaDescription: "احصل على عروض الأسعار واكتشف كيف تضيف هذه القيمة الإنسانية لكتالوج منتجاتك.",
  },
  "pure-moroccan-argan-oil": {
    chip: "زيت نقي",
    cardTitle: "زيت أركان مغربي نقي 100%",
    cardSummary:
      "المعيار الذهبي لزيوت التجميل أحادية المكون. معصور على البارد، خام ومزال الرائحة للوجه والشعر والجسم.",
    name: "زيت أركان نقي 100% للعلامة الخاصة",
    h1: "زيت أركان مغربي نقي 100% — علامة خاصة وبالجملة",
    lede:
      "زيت أركان مغربي تجميلي نقي 100% معصور على البارد وجاهز للتعبئة باسم علامتك التجارية. عبوات زجاجية مع قطارة بأحجام 30 مل، 50 مل و100 مل مع شهادة تحليل مخبري لكل دفعة.",
    metaTitle: "زيت أركان نقي 100% علامة خاصة | توريد بالجملة",
    metaDescription:
      "زيت أركان مغربي نقي 100% للعلامات الخاصة. عبوات قطارة 30 و50 و100 مل. حد أدنى 100 عبوة. تصدير مباشر من أكادير مع شهادة تحليل.",
    keywords: [
      "زيت اركان نقي علامة خاصة",
      "زيت اركان للوجه بالجملة",
      "تعبئة زيت اركان بالقطارة",
      "مورد زيت اركان للماركات",
      "زيت اركان مغربي اصلي",
    ],
    facts: [
      { label: "العصر", value: "عصر ميكانيكي على البارد 100% نقي" },
      { label: "الأحجام", value: "عبوات قطارة زجاجية 30 مل، 50 مل، 100 مل" },
      { label: "الحد الأدنى", value: "100 عبوة بتسمية علامتك الخاصة" },
      { label: "المدة", value: "2 إلى 3 أسابيع للإنتاج والشحن" },
    ],
    overview: {
      title: "المنتج التجميلي الأساسي والأكثر مبيعاً للعلامات التجارية",
      paragraphs: [
        "يظل زيت الأركان المغربي النقي (INCI: Argania Spinosa Kernel Oil) المعيار الذهبي المطلق في العناية النباتية الطبيعية. يتم استخلاصه من لوز الأركان الخام غير المحمص بعناية في تعاونيات سوس ماسة حول أكادير، لضمان أعلى تركيز من فيتامين E والأحماض الدهنية الأساسية.",
        "بالنسبة لصالونات التجميل، والعيادات الجلدية، والماركات الناشئة، يوفر هذا المنتج الطريق الأسرع لدخول السوق بهوامش ربحية عالية. نوفر عبوات جاهزة للبيع مطبوعة بشعارك وتصميمك مع خيارات أغطية فاخرة كالبامبو، والذهبي، والأسود المطفي.",
        "متوفر بنسخة بكر أصلية برائحتها الطبيعية الخفيفة، أو نسخة منزوعة الرائحة بالبخار لتناسب كافة أذواق المستهلكين.",
      ],
      quote:
        "بدون أي إضافات أو سيليكون أو ماء. الذهب السائل المغربي الحقيقي معبأ مباشرة من المصدر.",
      image: "/assets/img/cosmetic-argan.jpg",
      imageAlt: "قطرات زيت أركان مغربي نقي وعبوات زجاجية فاخرة",
    },
    benefitsTitle: "مزايا استثنائية لصيغتك ومنتجك",
    benefitsIntro:
      "لماذا يعتبر زيت الأركان النقي المنتج الأكثر طلباً واستمرارية عالمياً.",
    benefits: [
      {
        title: "استخدامات متعددة شاملة",
        body: "منتج واحد يعتني بترطيب الوجه، علاج تقصف الشعر، وتغذية الأظافر الجافة.",
      },
      {
        title: "تركيز استثنائي من فيتامين E",
        body: "أكثر من 600 ملغ/كغ من التوكوفيرول الطبيعي لحماية البشرة ومكافحة الأكسدة.",
      },
      {
        title: "امتصاص سريع بدون انسداد للمسام",
        body: "معامل انسداد المسام 0: يتغلغل بعمق دون ترك أي ملمس دهني أو لمعان مزعج.",
      },
      {
        title: "ولاء عالي من العملاء",
        body: "معدل إعادة شراء مرتفع بفضل نتائجه الملموسة الفورية على نضارة البشرة.",
      },
    ],
    processTitle: "مراحل التعبئة والتخصيص لعلامتك",
    processIntro:
      "من معاصر التعاونيات بأكادير حتى علب البيع بالتجزئة الجاهزة للتصدير.",
    processImageAlt: "خط تعبئة وتغليف مستحضرات زيت الأركان بالمغرب",
    process: [
      {
        title: "انتقاء لوز الأركان",
        body: "فرز يدوي دقيق للوز النيئ وعصره ميكانيكياً تحت درجات حرارة منخفضة.",
      },
      {
        title: "فلترة ميكرونية دقيقة",
        body: "تنقية فائقة تزيل الشوائب الدقيقة مع الحفاظ على الفيتامينات والمعادن الطبيعية.",
      },
      {
        title: "تعبئة في بيئة معقمة",
        body: "تعبئة بمكائن ضغط دقيقة وفق معايير الجودة الدولية ISO 22716 BPF.",
      },
      {
        title: "لصق العلامة وختم الأمان",
        body: "تطبيق ملصقات مقاومة للزيوت مع طباعة رقم التشغيلة وتاريخ الصلاحية.",
      },
    ],
    specsTitle: "مواصفات التعبئة والتغليف",
    specs: [
      { label: "الاسم العلمي", value: "Argania Spinosa Kernel Oil" },
      { label: "الأحجام القياسية", value: "30 مل، 50 مل، 100 مل" },
      { label: "نوع الإغلاق", value: "قطارة زجاجية (بامبو، ذهبي، فضي، أسود مطفي)" },
      { label: "خيارات الزجاج", value: "عنبري واقي من الضوء، مصنفر شفاف، أسود، زجاج ميرون بنفسجي" },
      { label: "الصلاحية", value: "24 شهراً في مكان بارد ومظلم" },
      { label: "الحد الأدنى", value: "100 عبوة لكل منتج" },
      { label: "الوثائق المرفقة", value: "شهادة التحليل المخبري (COA)، صحيفة السلامة (MSDS)، شهادة المنشأ" },
    ],
    applicationsTitle: "القنوات التسويقية المستهدفة",
    applications: [
      {
        title: "ماركات التجميل النظيف",
        body: "مثالي كمنتج رئيسي للوجه بهوامش ربحية ممتازة.",
      },
      {
        title: "السبا ومراكز العناية الفاخرة",
        body: "سيروم مخصص لجلسات الوجه وإعادة البيع للزبائن.",
      },
      {
        title: "صالونات تصفيف الشعر",
        body: "سيروم لمعان وحماية حرارية بعد التسريح.",
      },
      {
        title: "المتاجر الإلكترونية وأمازون",
        body: "منتج سهل الإطلاق مع باركود دولي مطابق للمواصفات.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — العلامة الخاصة لزيت الأركان",
    faq: [
      {
        question: "هل توفرون زيت أركان منزوع الرائحة؟",
        answer:
          "نعم، نوفر الزيت البكر برائحته الطبيعية الخفيفة، وكذلك الزيت التجميلي المنقى المزال الرائحة بالبخار دون مواد كيميائية.",
      },
      {
        question: "هل تشمل الخدمة العبوات والتصميم والملصقات؟",
        answer:
          "نعم نوفر حلاً متكاملاً يشمل القنينة والقطارة والطباعة المقاومة للماء، أو يمكنكم إرسال عبواتكم لتعبئتها.",
      },
      {
        question: "ما هو الحد الأدنى للطلب؟",
        answer:
          "يبدأ الحد الأدنى من 100 عبوة فقط لتمكينك من إطلاق علامتك التجارية بأمان وبأقل استثمار.",
      },
    ],
    ctaTitle: "أطلق علامتك الخاصة لزيت الأركان النقي",
    ctaDescription:
      "اطلب عينات التجربة واستشر خبراء التصدير والتعبئة بمقرنا في أكادير.",
  },
  "argan-hair-treatment-serum": {
    chip: "عناية الشعر",
    cardTitle: "سيروم الأركان المعالج للشعر",
    cardSummary:
      "تركيبة غنية تمنح اللمعان، تحارب التطاير، وتوفر حماية حرارية. ملمس حريري سريع الامتصاص.",
    name: "سيروم الأركان للشعر للعلامة الخاصة",
    h1: "سيروم الأركان المعالج للشعر بالجملة والعلامة الخاصة",
    lede:
      "سيروم احترافي بجودة صالونات التجميل معزز بزيت الأركان المغربي النقي، السيليكونات الخفيفة وفيتامين E. يمنح لمعاناً زجاجياً فورياً، يتحكم في الهيشان، ويحمي من حرارة التصفيف حتى 230 درجة مئوية.",
    metaTitle: "سيروم الأركان للشعر علامة خاصة | بالجملة للصالونات",
    metaDescription:
      "سيروم شعر بزيت الأركان للعلامات الخاصة. عبوات مضخة 50 و100 مل. حماية حرارية ومكافحة التطاير. حد أدنى 200 عبوة.",
    keywords: [
      "سيروم شعر زيت اركان علامة خاصة",
      "سيروم اركان للصالونات بالجملة",
      "واقي حرارة للشعر بزيت الاركان",
      "سيروم اركان مضاد للتطاير",
    ],
    facts: [
      { label: "الصيغة", value: "زيت أركان + سيليكونات تجميلية خفيفة + فيتامين E" },
      { label: "التعبئة", value: "عبوات مضخة زجاجية 50 مل و100 مل عنبرية أو مصنفرة" },
      { label: "الحد الأدنى", value: "200 عبوة بطباعة أو ملصق خاص" },
      { label: "الميزة", value: "حماية حرارية حتى 230°C ولمعان حريري" },
    ],
    overview: {
      title: "العلاج الاحترافي للشعر المفضل لدى الصالونات ومصففي الشعر",
      paragraphs: [
        "يشتهر زيت الأركان عالمياً بقدرته الفائقة على إصلاح الشعر التالف. صممنا هذا السيروم العلاجي ليوفر التغذية العميقة مع ملمس فائق الخفة يمنع تزييت الشعر أو التصاقه.",
        "يغلف أطراف الشعر المتقصفة فوراً، ويفك التشابك ويوفر درعاً واقياً ضد رطوبة الجو لمنع التطاير طوال اليوم في كافة الفصول.",
        "متوفر بعبوات مضخة فاخرة باللون الذهبي أو الأسود، مع خيارات عطور شرقية، فانيلا عنبرية، أو بدون عطر.",
      ],
      quote:
        "لمعان زجاجي مذهل، حماية حرارية متكاملة ونعومة حريرية ببضع قطرات.",
      image: "/assets/img/argan-oil-for-hair.jpg",
      imageAlt: "تطبيق سيروم زيت الأركان للعناية بالشعر وتنعيمه",
    },
    benefitsTitle: "نتائج مثبتة في صالونات التجميل",
    benefitsIntro:
      "تأثير فوري وملموس من أول استخدام.",
    benefits: [
      {
        title: "حماية من الحرارة حتى 230°C",
        body: "يحمي ألياف الكيراتين من أضرار المكواة ومجففات الشعر الساخنة.",
      },
      {
        title: "مقاومة تطاير الشعر لمدة 48 ساعة",
        body: "يعزل ألياف الشعر عن تقلبات الرطوبة المحيطة لمنع النفشة.",
      },
      {
        title: "امتصاص فائق بدون مظهر دهني",
        body: "يترك الشعر حيوياً وانسيابياً دون إثقاله.",
      },
      {
        title: "ترميم الأطراف المتقصفة",
        body: "يقلل التكسر الميكانيكي أثناء التمشيط اليومي.",
      },
    ],
    processTitle: "معايير التركيب والجودة",
    processIntro:
      "صُنع في مختبرات متوافقة مع معايير الأيزو العالمية لمستحضرات التجميل.",
    processImageAlt: "مختبر تركيب سيروم الشعر بزيت الأركان بالمغرب",
    process: [
      {
        title: "خلط متجانس عالي السرعة",
        body: "دمج في بيئة خالية من الهواء لمنع انفصال المكونات.",
      },
      {
        title: "تعطير بمعايير IFRA الدولية",
        body: "استخدام زيوت عطرية تم اختبارها لعدم التسبب في الحساسية.",
      },
      {
        title: "ضبط اللزوجة الدقيقة",
        body: "معايرة دقيقة لضمان انسياب السيروم بسلاسة عبر المضخة.",
      },
      {
        title: "إغلاق محكم مانع للتسرب",
        body: "مضخات بتقنية الإغلاق المحكم لضمان وصول الشحنات الدولية بسلامة.",
      },
    ],
    specsTitle: "المواصفات الفنية والتغليف",
    specs: [
      { label: "الاستخدام", value: "سيروم يترك على الشعر، واقي حرارة ولمعان" },
      { label: "الأحجام", value: "50 مل و100 مل" },
      { label: "العبوات", value: "زجاج عنبري، PET كريستالي أو زجاج مثلج" },
      { label: "المضخات", value: "مضخة علاجية تجميلية (ذهبي، فضي، أسود، أبيض)" },
      { label: "الحد الأدنى", value: "200 عبوة" },
      { label: "مدة التجهيز", value: "2 إلى 4 أسابيع" },
    ],
    applicationsTitle: "الأسواق المستهدفة",
    applications: [
      {
        title: "صالونات ومراكز التصفيف",
        body: "منتج أساسي لإعادة البيع بعد جلسات الاستشوار والصبغة.",
      },
      {
        title: "ماركات العناية بالشعر الإلكترونية",
        body: "منتج بطل لروابط وصناديق العناية الدورية.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — سيروم الأركان للشعر",
    faq: [
      {
        question: "هل يثقل الشعر الخفيف أو يجعله دهنياً؟",
        answer:
          "كلا، المكونات الخفيفة تتبخر تدريجياً لتبقي فقط طبقة رقيقة ومغذية من زيت الأركان دون أي ثقل.",
      },
      {
        question: "هل يناسب الشعر المصبوغ والمعالج بالبروتين؟",
        answer:
          "بالتأكيد، فهو خالٍ تماماً من الكبريتات والأملاح الضارة ويحافظ على لون الصبغة ونتائج الفرد.",
      },
    ],
    ctaTitle: "ابتكر سيروم الشعر الخاص بعلامتك",
    ctaDescription:
      "اختر نوع العبوة والمضخة والعطر وأطلق منتج العناية بالشعر الاحترافي الخاص بك.",
  },
  "argan-prickly-pear-face-elixir": {
    chip: "مكافحة الشيخوخة",
    cardTitle: "إكسير الوجه: الأركان وبذور التين الشوكي",
    cardSummary:
      "مزيج فاخر يجمع بين زيت الأركان العضوي وزيت بذور التين الشوكي النادر لتجديد عميق لخلايا البشرة.",
    name: "إكسير الوجه بالأركان والتين الشوكي",
    h1: "إكسير الوجه الفاخر بالأركان وبذور التين الشوكي بالجملة",
    lede:
      "قمة الفخامة النباتية المغربية. تركيبة تجمع زيت الأركان المعصور على البارد وزيت بذور التين الشوكي النادر (الصبير). صُمم لماركات العناية الفاخرة التي تبحث عن أقصى فاعلية في محاربة التجاعيد وتجديد الشباب.",
    metaTitle: "إكسير الوجه أركان وتين شوكي | مكافحة الشيخوخة علامة خاصة",
    metaDescription:
      "إكسير فاخر لمكافحة الشيخوخة بالأركان وبذور التين الشوكي لعلامتك. عبوات 30 و50 مل. هوامش ربح عالية. حد أدنى 100 عبوة.",
    keywords: [
      "اكسير اركان وتين شوكي علامة خاصة",
      "زيت بذور التين الشوكي بالجملة",
      "سيروم فاخر لمكافحة التجاعيد المغرب",
      "زيت الصبير واركان للوجه",
    ],
    facts: [
      { label: "المكونات النشطة", value: "زيت أركان عضوي + زيت بذور تين شوكي بكر نقي" },
      { label: "مضادات الأكسدة", value: "أكثر من 1000 ملغ/كغ من فيتامين E الطبيعي" },
      { label: "التعبئة", value: "عبوات قطارة زجاجية 30 و50 مل سوداء مطفية أو عنبرية" },
      { label: "القيمة السوقية", value: "منتج فاخر (سعر التجزئة المقترح 60$ - 120$ للعبوة)" },
    ],
    overview: {
      title: "أقوى تركيبة نباتية لمكافحة الشيخوخة من التراث المغربي",
      paragraphs: [
        "يُعد زيت بذور التين الشوكي أثمن زيت تجميلي في العالم؛ إذ يتطلب استخراج لتر واحد منه نحو طن كامل من ثمار الصبير. يحتوي على أعلى تركيز من فيتامين E والستيرولات النباتية مقارنة بجميع الزيوت الأخرى.",
        "وعند دمجه مع زيت الأركان المغربي، يقدم هذا الإكسير حلاً متكاملاً للبشرة الناضجة: ينعم الخطوط التعبيرية، يقلل الهالات السوداء، ويعيد النضارة والمرونة للبشرة الباهتة.",
        "جاهز للتعبئة بعبوات فاخرة مع قطارات ذهبية أو سوداء ومطابقة لمعايير التصدير الدولية.",
      ],
      quote:
        "كنزان نباتيان مغربيان اجتمعا في إكسير شبابي ذهبي وسريع الامتصاص.",
      image: "/assets/img/Prickly Pear Seed Oil.jpg",
      imageAlt: "ثمار وبذور التين الشوكي المستخدمة لاستخلاص زيت الوجه الفاخر",
    },
    benefitsTitle: "فاعلية استثنائية لمكافحة التجاعيد",
    benefitsIntro:
      "تركيز قياسي من الأحماض الدهنية الأساسية (أوميغا 6) ومضادات الأكسدة.",
    benefits: [
      {
        title: "تفتيح الهالات السوداء تحت العينين",
        body: "يحتوي على فيتامين K الذي ينشط الدورة الدموية الدقيقة ويخفف السواد.",
      },
      {
        title: "تجديد عميق لخلايا البشرة",
        body: "تحفز الستيرولات النباتية إنتاج الكولاجين وتحمي البشرة من أضرار الشمس.",
      },
      {
        title: "امتصاص سريع بلمسة مخملية جافة",
        body: "يتغلغل فورياً دون ترك أي أثر دهني على الوجه.",
      },
      {
        title: "حبس الرطوبة داخل حاجز البشرة",
        body: "يعزز مرونة الجلد ويمنع الجفاف طوال اليوم.",
      },
    ],
    processTitle: "العصر على البارد والتعبئة بحماية النيتروجين",
    processIntro:
      "استخلاص ميكانيكي دقيق وحقن النيتروجين للحفاظ على فعالية المواد الحيوية.",
    processImageAlt: "استخلاص واختبار نقاوة زيت التين الشوكي وزيت الأركان",
    process: [
      {
        title: "عصر بذور التين الشوكي",
        body: "فصل البذور يدوياً، تجفيفها بالشمس وعصرها ميكانيكياً بدون حرارة.",
      },
      {
        title: "مزج متوازن مدروس",
        body: "تحديد النسبة المثالية لضمان أسرع امتصاص وأعلى فاعلية للبشرة.",
      },
      {
        title: "حقن النيتروجين",
        body: "تفريغ الأكسجين من العبوات قبل إغلاقها لمنع أي أكسدة مبكرة.",
      },
      {
        title: "زجاج واقٍ من الأشعة الضارة",
        body: "التعبئة في زجاج معتم يحمي المركبات النشطة من التلف الضوئي.",
      },
    ],
    specsTitle: "المواصفات الفنية والتغليف",
    specs: [
      { label: "المكونات", value: "Argania Spinosa Kernel Oil, Opuntia Ficus-Indica Seed Oil, Tocopherol" },
      { label: "نوع البشرة", value: "الناضجة، الجافة، الحساسة، والمختلطة" },
      { label: "الأحجام", value: "30 مل و50 مل" },
      { label: "خيارات الزجاج", value: "أسود مطفي، عنبري فاخر، أو بنفسجي ميرون" },
      { label: "الحد الأدنى", value: "100 عبوة" },
      { label: "مدة التجهيز", value: "2 إلى 3 أسابيع" },
    ],
    applicationsTitle: "المجالات التسويقية الموصى بها",
    applications: [
      {
        title: "خطوط التجميل الفاخرة",
        body: "سيروم ليلي مجدد أو إكسير شبابي أيقوني للعلامة.",
      },
      {
        title: "العيادات التجميلية ومراكز السبا",
        body: "عناية مهدئة ومغذية بعد جلسات التقشير والميكرونيدلينغ.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — إكسير الأركان والتين الشوكي",
    faq: [
      {
        question: "ما هي نسبة زيت بذور التين الشوكي في الإكسير؟",
        answer:
          "تحتوي تركيبتنا القياسية على تركيز سريري فعال وعالٍ (بين 15% إلى 30%)، ويمكننا تعديل النسبة وفق رغبتكم وميزانيتكم.",
      },
      {
        question: "هل يسبب انسداد المسام أو ظهور الحبوب؟",
        answer:
          "إطلاقاً، فكلا الزيتين يملكان معامل انسداد مسام صفري (0)، ونسبة حمض اللينوليك العالية تنظم إفراز الدهون وتصفي البشرة.",
      },
    ],
    ctaTitle: "ابتكر إكسير الشباب الفاخر الخاص بك",
    ctaDescription:
      "اطلب عينات المختبر واكتشف القيمة التجارية الاستثنائية لهذا المزيج المرموق.",
  },
  "argan-beard-conditioning-oil": {
    chip: "عناية الرجال",
    cardTitle: "زيت الأركان المرطب لشعر اللحية",
    cardSummary:
      "مزيج مغذٍ لشعر اللحية وبشرة الوجه. يلين الشعر الخشن، يخفف الحكة، ويمنح عطراً ذكورياً راقياً.",
    name: "زيت اللحية بالأركان للعلامة الخاصة",
    h1: "زيت اللحية بالأركان بالجملة والعلامة الخاصة لصالونات الحلاقة",
    lede:
      "عناية فاخرة مصممة لصالونات الحلاقة الراقية وماركات العناية بالرجال. يدمج زيت الأركان المغربي مع الجوجوبا واللوز الحلو لتنعيم شعر اللحية الكثيف، القضاء على قشرة اللحية وتهدئة البشرة الملتهبة تحتها.",
    metaTitle: "زيت اللحية بالأركان علامة خاصة | بالجملة للصالونات الرجالية",
    metaDescription:
      "زيت لحية بزيت الأركان بالجملة ولعلامتك الخاصة. عبوات 30 و60 مل. يلين شعر اللحية ويهدئ البشرة. حد أدنى 150 عبوة.",
    keywords: [
      "زيت لحية اركان علامة خاصة",
      "مورد زيت لحية للحلاقين",
      "زيت دقن بالجملة للماركات",
      "مصنع زيت لحية مغربي",
    ],
    facts: [
      { label: "المكونات", value: "زيت أركان نقي + زيت جوجوبا ذهبي + زيت لوز حلو" },
      { label: "الروائح", value: "خشب أرز الأطلس، خشب العود الملكي، صندل، أو بدون عطر" },
      { label: "العبوات", value: "عبوات 30 و60 مل زجاجية عنبرية أو سوداء مطفية" },
      { label: "الحد الأدنى", value: "150 عبوة بملصقات مقاومة للزيوت" },
    ],
    overview: {
      title: "الأساس الذي لا غنى عنه في روتين العناية الرجالية الحديثة",
      paragraphs: [
        "يتطلب شعر الوجه الخشن توازناً دقيقاً في اللزوجة: زيتاً كثيفاً بما يكفي لتليين الشعيرات القاسية، وفي نفس الوقت خفيفاً ليتغلغل في البشرة دون سد بصيلات الشعر أو التسبب في البثور.",
        "تجمع تركيبتنا المغربية بين أركان الحماية وجوجوبا موازنة الدهون. تزيل الحكة، تمنع جفاف وقشرة اللحية، وتمنح مظهراً مرتباً بملمس ناعم غير دهني.",
        "متوفر بنفحات عطرية خشبية أصيلة مستخلصة من زيوت أساسية طبيعية: خشب أرز الأطلس المغربي، العود الملكي، أو بدون عطر للبشرة الحساسة.",
      ],
      quote:
        "يروض الشعيرات العنيدة، يقضي على الحكة ويمنح رائحة رجالية مميزة.",
      image: "/assets/img/img3.jfif",
      imageAlt: "العناية باللحية وتصفيفها بزيت الأركان للرجال",
    },
    benefitsTitle: "فاعلية مزدوجة لشعر اللحية وبشرة الوجه",
    benefitsIntro:
      "عناية متكاملة تضمن لحية ناعمة وبشرة هادئة وصحية.",
    benefits: [
      {
        title: "القضاء على قشرة وحكة اللحية",
        body: "يرطب البشرة المغطاة بالشعر ويمنع تقشرها وجفافها.",
      },
      {
        title: "تليين الشعر الخشن",
        body: "يمنح الشعيرات مرونة ونعومة تجعلها لطيفة الملمس.",
      },
      {
        title: "مظهر طبيعي غير لاصق",
        body: "يمتصه الشعر سريعاً دون ترك بقع دهنية على الملابس.",
      },
      {
        title: "تقوية بصيلات الشعر",
        body: "يغذي الجذور بالأحماض الدهنية لنمو لحية كثيفة ومتناسقة.",
      },
    ],
    processTitle: "المزج الدقيق والتعبئة بنمط صالونات الحلاقة",
    processIntro:
      "إنتاج في دفعات مدروسة لضمان انتعاش الروائح واستقرار التركيبة.",
    processImageAlt: "تعبئة وضبط جودة زيت اللحية الرجالي",
    process: [
      {
        title: "قاعدة الزيوت الحاملة",
        body: "مزج زيت الأركان مع الجوجوبا وفيتامين E لامتصاص مثالي.",
      },
      {
        title: "التعطير بالزيوت النباتية",
        body: "إضافة زيوت عطرية فاخرة غير مسببة للتحسس.",
      },
      {
        title: "الفلترة والنقاء",
        body: "تنقية شاملة تمنح الزيت صفاءً ذهبياً جذاباً.",
      },
      {
        title: "التعبئة بقطارات دقيقة",
        body: "أغطية قطارة مخصصة لتحديد الجرعة بدقة قطرة بقطرة.",
      },
    ],
    specsTitle: "تفاصيل التعبئة والمكونات",
    specs: [
      { label: "المكونات", value: "Argania Spinosa Kernel Oil, Simmondsia Chinensis Seed Oil, Prunus Amygdalus Dulcis Oil, Tocopherol" },
      { label: "الأحجام", value: "30 مل و60 مل" },
      { label: "الزجاج", value: "أسود مطفي، عنبري تقليدي أو شفاف صيدلاني" },
      { label: "خيارات العطور", value: "أرز الأطلس، عود مدخن، صندل حمضي، بدون عطر" },
      { label: "الحد الأدنى", value: "150 عبوة" },
      { label: "مدة التجهيز", value: "2 إلى 3 أسابيع" },
    ],
    applicationsTitle: "فرص البيع والتوزيع",
    applications: [
      {
        title: "صالونات الحلاقة الفاخرة",
        body: "منتج مربح لخدمة الفوطة الساخنة وإعادة البيع في صالة الاستقبال.",
      },
      {
        title: "المتاجر الرجالية وصناديق الهدايا",
        body: "عنصر أساسي في مجموعات العناية والحلاقة الشخصية.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — زيت اللحية",
    faq: [
      {
        question: "هل يمكن استخدامه كزيت لما قبل الحلاقة؟",
        answer:
          "نعم بالتأكيد، فالانزلاق الممتاز لزيت الأركان والجوجوبا يحمي البشرة من تهيج شفرات الحلاقة على الرقبة والخدين.",
      },
      {
        question: "هل الملصقات مقاومة لقطرات الزيت؟",
        answer:
          "نعم، نطبع ملصقاتنا على فينيل صناعي عازل للماء والزيوت بتشطيب مطفي أو لامع لا يتأثر بالاستخدام اليومي.",
      },
    ],
    ctaTitle: "أطلق علامتك لمنتجات العناية باللحية",
    ctaDescription:
      "خصص العطر والعبوة لتميز علامتك التجارية في سوق الحلاقة الرجالية الصاعد.",
  },
  "argan-body-massage-oil": {
    chip: "عناية الجسم",
    cardTitle: "زيت الأركان للجسم والمساج",
    cardSummary:
      "زيت مغذٍ ومتعدد الاستخدامات للجسم. يحبس الرطوبة بعد الاستحمام ويوفر انسيابية مثالية لجلسات التدليك في السبا.",
    name: "زيت الجسم والمساج بالأركان للعلامة الخاصة",
    h1: "زيت الجسم والمساج بالأركان بالجملة لمراكز السبا والمنتجعات",
    lede:
      "زيت مساج احترافي معد لمراكز السبا الفاخرة، يجمع بين زيت الأركان المغربي النقي ومطريات نباتية حريرية. يوفر انزلاقاً سلساً يدوم طويلاً خلال جلسات التدليك أو كزيت جاف معطر يرطب الجسم بعد الحمام.",
    metaTitle: "زيت مساج وجسم بالأركان علامة خاصة | بالجملة للسبا",
    metaDescription:
      "زيت مساج وجسم بزيت الأركان بالجملة ولعلامتك الخاصة. عبوات مضخة 100 و200 و250 مل. انسيابية فائقة للسبا. حد أدنى 100 عبوة.",
    keywords: [
      "زيت مساج اركان بالجملة",
      "زيت جسم اركان علامة خاصة",
      "مورد زيت مساج للمنتجعات",
      "زيت تدليك مغربي احترافي",
    ],
    facts: [
      { label: "الملمس", value: "انسيابية تدليك ممتازة، امتصاص حريري غير دبق" },
      { label: "العبوات", value: "مضخة 100 و200 و250 مل أو عبوات ألمنيوم أنيقة" },
      { label: "المستهدفون", value: "سبا الفنادق، مراكز الاستجمام، ماركات العناية بالجسم" },
      { label: "الحد الأدنى", value: "100 عبوة بملصق خاص / 500 عبوة بالطباعة المباشرة" },
    ],
    overview: {
      title: "أصالة طقوس الحمام والسبا المغربي الفاخر",
      paragraphs: [
        "على مدى قرون، اعتمدت طقوس الجمال المغربي على الخصائص المغذية لزيت الأركان. في مراكز السبا الحديثة، يبحث المعالجون عن التوازن الدقيق: انسيابية تدوم طويلاً تسهل حركات التدليك دون التصاق، يعقبها امتصاص يترك بشرة الزبون ناعمة ومشرقة دون تلطيخ الملابس.",
        "تمزج صيغتنا زيت الأركان مع اللوز الحلو وزيت بذور المشمش. يخفف من الشد العضلي ويروي البشرة شديدة الجفاف بأحماض أوميغا الدهنية.",
        "متوفر بعبوات مضخة عملية مريحة للاستخدام أثناء الجلسات أو عبوات ألمنيوم مصقول صديقة للبيئة.",
      ],
      quote:
        "انسيابية لا مثيل لها للمعالجين المحترفين وترطيب مخملي يدوم طوال اليوم للجسم.",
      image: "/assets/img/argan-beauty.jpg",
      imageAlt: "جلسة تدليك للجسم في سبا مغربي باستخدام زيت الأركان الذهبي",
    },
    benefitsTitle: "أداء احترافي لجلسات السبا",
    benefitsIntro:
      "معتمد من قبل أخصائيي العلاج الطبيعي ومراكز الاستجمام الراقية.",
    benefits: [
      {
        title: "انزلاق متواصل وسلس",
        body: "مثالي للمساج السويدي، المساج اللمفاوي، وجلسات الاسترخاء العميقة.",
      },
      {
        title: "حبس الرطوبة بعد الاستحمام",
        body: "يطبق على بشرة ندية بعد الاستحمام ليحبس جزيئات الماء داخل الجلد لمدة 24 ساعة.",
      },
      {
        title: "تهدئة البشرة المعرضة للشمس",
        body: "يلطف التهيج بعد حمامات الشمس ويعيد النعومة للمناطق الجافة كالمرفقين والركبتين.",
      },
      {
        title: "سهولة الغسيل من مناشف السبا",
        body: "يزول بسهولة من بياضات ومناشف السبا في دورات الغسيل التجارية العادية."
      },
    ],
    processTitle: "التحضير والتعبئة المتخصصة",
    processIntro:
      "تركيبة متوازنة تضمن استقرار اللزوجة في جميع فصول السنة.",
    processImageAlt: "تعبئة وتجهيز زيت الجسم لمراكز الاستجمام",
    process: [
      {
        title: "مصفوفة الزيوت الخفيفة",
        body: "معايرة دقيقة للزوجة لتسهيل فرد الزيت على مساحات الجسم الكبيرة.",
      },
      {
        title: "العلاج العطري بالأعشاب",
        body: "عطور طبيعية حسب الاختيار: زهر البرتقال المغربي، اللويزة، الورد، أو بدون عطر.",
      },
      {
        title: "الفحص الميكروبيولوجي",
        body: "خلو تام من الماء يضمن صلاحية طبيعية لمدة سنتين دون مواد حافظة قاسية.",
      },
      {
        title: "مضخات عملية مانعة للتسرب",
        body: "مضخات سهلة الفتح والإغلاق ومريحة للمسك بالأيدي المبللة بالزيت.",
      },
    ],
    specsTitle: "خيارات التقديم والتعبئة",
    specs: [
      { label: "الأحجام", value: "100 مل، 200 مل، 250 مل، وجالونات 1 لتر مخصصة لكبائن السبا" },
      { label: "الخامات", value: "PET عنبري، زجاج سميك، أو ألمنيوم مصقول قابل لإعادة التدوير" },
      { label: "الأغطية", value: "مضخة لوشن قابلة للقفل، غطاء ألمنيوم دوار، أو غطاء قرصي" },
      { label: "الروائح", value: "زهر البرتقال، اللويزة، اللافندر الجبلي، بدون عطر" },
      { label: "الحد الأدنى", value: "100 عبوة" },
      { label: "مدة التجهيز", value: "2 إلى 3 أسابيع" },
    ],
    applicationsTitle: "القطاعات التجارية",
    applications: [
      {
        title: "سبا الفنادق والمنتجعات",
        body: "للاستخدام في كبائن العلاج وإعادة البيع للنزلاء.",
      },
      {
        title: "ماركات العناية بالجسم الطبيعية",
        body: "زيت جاف يومي لتغذية ونعومة الجسم.",
      },
      {
        title: "باقات الحمام المغربي المنزلية",
        body: "مع الصابون البلدي المغربي وليفة الكيس الأصلية.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — زيت الجسم والمساج",
    faq: [
      {
        question: "هل يترك بقعاً صفراء على مناشف السبا؟",
        answer:
          "كلا، فالزيوت النباتية الخفيفة التي نستخدمها تنحل بسهولة مع منظفات الغسيل الفندقية العادية بالماء الدافئ.",
      },
      {
        question: "هل توفرون جالونات تعبئة بحجم لتر أو أكثر؟",
        answer:
          "نعم، بالإضافة للعبوات التجارية نوفر عبوات اقتصادية للسبا بأحجام 1 لتر، 5 لتر، و25 لتراً.",
      },
    ],
    ctaTitle: "أثرِ خدمات السبا لديك بزيت الأركان",
    ctaDescription:
      "اطلب عينات الزيوت المعطرة للجسم وصمم مجموعتك الاحترافية اليوم.",
  },
  "usda-organic-argan-oil": {
    chip: "عضوي معتمد",
    cardTitle: "زيت أركان مغربي عضوي معتمد USDA وECOCERT",
    cardSummary:
      "دفعة زيت عضوي مع تتبع كامل للتدقيق وصولاً إلى حصاد التعاونيات. يلبي أعلى معايير التجميل النظيف العالمية.",
    name: "زيت أركان عضوي معتمد USDA للعلامة الخاصة",
    h1: "زيت أركان عضوي معتمد USDA وECOCERT بالجملة",
    lede:
      "زيت أركان مغربي عضوي 100% حاصل على الاعتماد المزدوج الأمريكي USDA NOP والأوروبي ECOCERT Cosmos Organic. محصود من غابات الأركان المحمية ومعصور ميكانيكياً بأكادير. معبأ في زجاج بنفسجي واقٍ لشبكات التوزيع العالمية الصارمة.",
    metaTitle: "زيت أركان عضوي USDA وECOCERT بالجملة | علامة خاصة معتمدة",
    metaDescription:
      "زيت أركان مغربي عضوي معتمد USDA وECOCERT بالجملة. عبوات 30 و50 و100 مل. تتبع كامل للتعاونيات. حد أدنى 200 عبوة مع الشهادة.",
    keywords: [
      "زيت اركان عضوي usda بالجملة",
      "زيت اركان ecocert علامة خاصة",
      "زيت اركان بيو مغربي للماركات",
      "مورد زيت اركان كوزموس اورجانيك",
    ],
    facts: [
      { label: "الاعتمادات", value: "USDA NOP, ECOCERT (Cosmos Organic), ISO 22716" },
      { label: "التتبع", value: "سلسلة تدقيق كاملة من جمع التعاونيات إلى العبوة النهائية" },
      { label: "التعبئة", value: "عبوات زجاجية 30 و50 و100 مل بنفسجية ميرون أو عنبرية" },
      { label: "الحد الأدنى", value: "200 عبوة مع شهادة المعاملة العضوية (TC)" },
    ],
    overview: {
      title: "الصرامة العضوية المعتمدة لشبكات التوزيع الكبرى في العالم",
      paragraphs: [
        "في أسواق التجزئة العالمية مثل كبرى المتاجر العضوية الأوروبية، هول فودز وسيفورا، تعتبر الشهادات الرسمية شرطاً غير قابل للتفاوض. يحظى زيت الأركان لدينا بتدقيق سنوي صارم من قبل ECOCERT ووزارة الزراعة الأمريكية (USDA NOP).",
        "تُجمع الثمار حصرياً من محمية المحيط الحيوي للأركان المصنفة من اليونسكو جنوب غرب المغرب، دون أي مبيدات كيميائية أو أسمدة اصطناعية، مع خطوط عصر ميكانيكية معزولة تماماً لمنع أي اختلاط.",
        "نزود كل عميل بشهادة المعاملة العضوية الرسمية (TC) التي تخول لعلامتك التجارية طباعة شعارات العضوية الدولية المعتمدة على عبواتك النهائية.",
      ],
      quote:
        "اعتماد مزدوج USDA Organic وECOCERT مع تتبع موثق من شجرة الأركان إلى يد المستهلك.",
      image: "/assets/img/certified-organic.jpg",
      imageAlt: "حصاد عضوي معتمد لثمار الأركان في التعاونيات بالمغرب",
    },
    benefitsTitle: "أهمية الاعتماد العضوي الرسمي لعلامتك",
    benefitsIntro:
      "لماذا تفتح الشهادات العضوية الرسمية أبواب كبرى المتاجر العالمية.",
    benefits: [
      {
        title: "مطابقة قانونية كاملة للتصدير",
        body: "جاهز للبيع الفوري في الولايات المتحدة، دول الاتحاد الأوروبي، بريطانيا، وكندا.",
      },
      {
        title: "خلو مؤكد من أي مبيدات",
        body: "تحاليل مخبرية محايدة تثبت الخلو التام من بقايا المبيدات الحشرية والمعادن الثقيلة.",
      },
      {
        title: "حفظ أقصى قدر من المغذيات الحيوية",
        body: "عصر بارد بدون أي حرارة يحافظ على كامل الفينولات والسكوالين النباتي الطبيعي.",
      },
      {
        title: "أثر بيئي واجتماعي حقيقي",
        body: "يدعم النساء القرويات في التعاونيات الأمازيغية ويحمي غابات الأركان التراثية.",
      },
    ],
    processTitle: "سلسلة التتبع والعصر العضوي",
    processIntro:
      "خطوط عصر مخصصة ونظام تعبئة في زجاج بيوفوتوني واقٍ.",
    processImageAlt: "إنتاج وفحص زيت الأركان العضوي بأكادير",
    process: [
      {
        title: "حصاد من غابات معتمدة",
        body: "جمع حصري من مناطق مراقبة في أقاليم تارودانت واشتوكة.",
      },
      {
        title: "عصر ميكانيكي مخصص",
        body: "معاصر مخصصة للزيت العضوي فقط ومعقمة بمواد بيئية مرخصة.",
      },
      {
        title: "تحاليل في مختبرات معتمدة",
        body: "فحص مؤشر البيروكسيد (< 10 meq O2/kg) وبروفايل الأحماض الدهنية.",
      },
      {
        title: "تعبئة في زجاج ميرون بنفسجي",
        body: "زجاج بيوفوتوني يمنع نفاذ الضوء المرئي الضار لحماية مضادات الأكسدة الحساسة.",
      },
    ],
    specsTitle: "الملف الفني والمطابقة",
    specs: [
      { label: "المصدر النباتي", value: "Argania spinosa L. Skeels" },
      { label: "الشهادات", value: "USDA NOP, ECOCERT Organic (EC 834/2007 & Cosmos Standard)" },
      { label: "النقاوة", value: "100.0% زيت أركان بكر عضوي بدون أي خلط" },
      { label: "الأحجام", value: "30 مل، 50 مل، 100 مل زجاج" },
      { label: "الزجاج", value: "زجاج بنفسجي Miron أو زجاج عنبري دوائي" },
      { label: "الوثائق الممنوحة", value: "شهادة المعاملة العضوية (TC)، شهادة التحليل للدفعة، صحيفة السلامة" },
      { label: "الحد الأدنى", value: "200 عبوة" },
    ],
    applicationsTitle: "القنوات التسويقية الموصى بها",
    applications: [
      {
        title: "سلاسل السوبرماركت العضوية",
        body: "مطابق لأدق شروط قبول الموردين العالمية.",
      },
      {
        title: "ماركات الجمال النظيف المعتمدة",
        body: "تتيح طباعة شارات العضوية الرسمية على العلب الكرتونية.",
      },
      {
        title: "الصيدليات ومراكز البشرة الحساسة",
        body: "وصفة مثالية للبشرة المتهيجة وشديدة التحسس.",
      },
    ],
    faqTitle: "الأسئلة الشائعة — زيت الأركان العضوي المعتمد",
    faq: [
      {
        question: "هل يحق لي وضع شعار USDA أو ECOCERT على ملصقي؟",
        answer:
          "نعم، بفضل شهاداتنا الرسمية وشهادة المعاملة (TC) التي نصدرها لطلبيتكم، يحق لعلامتكم وضع الشارات على العبوات المطابقة.",
      },
      {
        question: "ما الفرق بين الزيت المعصور على البارد والزيت العضوي المعتمد؟",
        answer:
          "الزيت المعصور على البارد نقي، لكن العضوي المعتمد يخضع لتدقيق سنوي خارجي يضمن عدم وجود أي أسمدة أو مبيدات في الأراضي ومحيطها.",
      },
    ],
    ctaTitle: "احصل على زيت أركان مغربي عضوي معتمد",
    ctaDescription:
      "اطلب شهادات أحدث الدفعات وشهادات التحليل وصمم علامتك العضوية المعتمدة الآن.",
  },
};

export function getLocalizedProduct(slug: string, locale: Locale = "en"): Product | undefined {
  const baseProduct = PRODUCTS.find((p) => p.slug === slug);
  if (!baseProduct) return undefined;

  let localizedOverlay: ProductLocalization | undefined;
  if (locale === "fr") localizedOverlay = FR_PRODUCTS[slug];
  else if (locale === "es") localizedOverlay = ES_PRODUCTS[slug];
  else if (locale === "ar") localizedOverlay = AR_PRODUCTS[slug];

  if (!localizedOverlay) return baseProduct;

  return {
    ...baseProduct,
    ...localizedOverlay,
    overview: {
      ...baseProduct.overview,
      ...(localizedOverlay.overview ?? {}),
    },
    facts: localizedOverlay.facts ?? baseProduct.facts,
    benefits: localizedOverlay.benefits ?? baseProduct.benefits,
    process: localizedOverlay.process ?? baseProduct.process,
    specs: localizedOverlay.specs ?? baseProduct.specs,
    applications: localizedOverlay.applications ?? baseProduct.applications,
    faq: localizedOverlay.faq ?? baseProduct.faq,
  };
}

export function getLocalizedProducts(locale: Locale = "en"): Product[] {
  return PRODUCTS.map((p) => getLocalizedProduct(p.slug, locale)!);
}

export function getLocalizedRelatedProducts(slug: string, locale: Locale = "en"): Product[] {
  return getLocalizedProducts(locale).filter((p) => p.slug !== slug);
}

