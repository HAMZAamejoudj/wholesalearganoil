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

