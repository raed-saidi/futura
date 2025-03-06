"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Define translations
const translations = {
  en: {
    // Header
    search: "Search...",
    women: "Women",
    men: "Men",
    newArrivals: "New Arrivals",
    premium: "Premium Brands",
    luxury: "Luxury Brands",

    // Navigation
    allProducts: "All Products",

    // Women's pages
    womenCollection: "Women's Collection",
    womenSubtitle: "Elegance meets innovation in our curated selection",
    womenPremium: "Women's Premium Brands",
    womenPremiumSubtitle: "Discover our curated selection of premium women's fashion",
    womenLuxury: "Women's Luxury Brands",
    womenLuxurySubtitle: "Indulge in our exclusive collection of luxury women's fashion",

    // Men's pages
    menCollection: "Men's Collection",
    menSubtitle: "Bold designs for the modern man",
    menPremium: "Men's Premium Brands",
    menPremiumSubtitle: "Discover our curated selection of premium men's fashion",
    menLuxury: "Men's Luxury Brands",
    menLuxurySubtitle: "Indulge in our exclusive collection of luxury men's fashion",

    // New Arrivals pages
    newArrivalsTitle: "New Arrivals",
    newArrivalsSubtitle: "Be the first to discover our latest innovations",
    newArrivalsPremium: "New Premium Arrivals",
    newArrivalsPremiumSubtitle: "Be the first to discover our latest premium collections",
    newArrivalsLuxury: "New Luxury Arrivals",
    newArrivalsLuxurySubtitle: "Explore our exclusive new luxury collections",

    // Products
    viewAllProducts: "View All Products",
    addToCart: "Add to Cart",
    noProductsFound: "No products found matching your filters.",

    // Filters
    filters: "Filters",
    clearFilters: "Clear Filters",
    productType: "Product Type",
    color: "Color",
    size: "Size",
    priceRange: "Price Range",
    min: "Min",
    max: "Max",

    // Footer
    shop: "Shop",
    brands: "Brands",
    premiumWomen: "Premium Women",
    luxuryWomen: "Luxury Women",
    premiumMen: "Premium Men",
    luxuryMen: "Luxury Men",
    help: "Help",
    faq: "FAQ",
    shippingReturns: "Shipping & Returns",
    contactUs: "Contact Us",
    sizeGuide: "Size Guide",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",

    // Shopping Cart
    yourCart: "Your Cart",
    emptyCart: "Your cart is empty",
    startShopping: "Start Shopping",
    total: "Total",
    clearCart: "Clear Cart",
    returnToShop: "Return to Shop",
    checkout: "Checkout",

    // Theme
    lightMode: "Light Mode",
    darkMode: "Dark Mode",

    // Language
    language: "Language",
    english: "English",
    french: "French",

    // About Us page
    aboutUsTitle: "About Us",
    aboutUsSubtitle: "Discover the story behind OnlyBrands",
    ourStory: "Our Story",
    ourStoryText1:
      "Founded in 2020, OnlyBrands began with a simple vision: to create a curated marketplace where fashion enthusiasts could discover premium and luxury brands in one place.",
    ourStoryText2:
      "What started as a small online boutique has grown into a global platform, connecting discerning customers with the world's most coveted fashion brands.",
    ourMission: "Our Mission",
    ourMissionText:
      "We're on a mission to transform the way people discover and shop for high-end fashion. By combining cutting-edge technology with a passion for style, we aim to create the most personalized and seamless shopping experience possible.",
    ourValues: "Our Values",
    valueQuality: "Quality",
    valueQualityText:
      "We carefully select each brand and product to ensure the highest standards of craftsmanship and materials.",
    valueSustainability: "Sustainability",
    valueSustainabilityText:
      "We're committed to promoting sustainable fashion and working with brands that share our environmental values.",
    valueInnovation: "Innovation",
    valueInnovationText:
      "We constantly explore new technologies and approaches to enhance the shopping experience for our customers.",

    // Work in Progress page
    workInProgressTitle: "Under Construction",
    workInProgressMessage: "We're currently working on",
    workInProgressSubmessage: "Please check back soon for updates!",
    thisPage: "this page",
  },
  fr: {
    // Header
    search: "Rechercher...",
    women: "Femmes",
    men: "Hommes",
    newArrivals: "Nouveautés",
    premium: "Marques Premium",
    luxury: "Marques de Luxe",

    // Navigation
    allProducts: "Tous les Produits",

    // Women's pages
    womenCollection: "Collection Femmes",
    womenSubtitle: "L'élégance rencontre l'innovation dans notre sélection",
    womenPremium: "Marques Premium Femmes",
    womenPremiumSubtitle: "Découvrez notre sélection de mode premium pour femmes",
    womenLuxury: "Marques de Luxe Femmes",
    womenLuxurySubtitle: "Plongez dans notre collection exclusive de mode de luxe pour femmes",

    // Men's pages
    menCollection: "Collection Hommes",
    menSubtitle: "Des designs audacieux pour l'homme moderne",
    menPremium: "Marques Premium Hommes",
    menPremiumSubtitle: "Découvrez notre sélection de mode premium pour hommes",
    menLuxury: "Marques de Luxe Hommes",
    menLuxurySubtitle: "Plongez dans notre collection exclusive de mode de luxe pour hommes",

    // New Arrivals pages
    newArrivalsTitle: "Nouveautés",
    newArrivalsSubtitle: "Soyez les premiers à découvrir nos dernières innovations",
    newArrivalsPremium: "Nouveautés Premium",
    newArrivalsPremiumSubtitle: "Soyez les premiers à découvrir nos dernières collections premium",
    newArrivalsLuxury: "Nouveautés de Luxe",
    newArrivalsLuxurySubtitle: "Explorez nos nouvelles collections de luxe exclusives",

    // Products
    viewAllProducts: "Voir Tous les Produits",
    addToCart: "Ajouter au Panier",
    noProductsFound: "Aucun produit ne correspond à vos filtres.",

    // Filters
    filters: "Filtres",
    clearFilters: "Effacer les Filtres",
    productType: "Type de Produit",
    color: "Couleur",
    size: "Taille",
    priceRange: "Fourchette de Prix",
    min: "Min",
    max: "Max",

    // Footer
    shop: "Boutique",
    brands: "Marques",
    premiumWomen: "Femmes Premium",
    luxuryWomen: "Femmes Luxe",
    premiumMen: "Hommes Premium",
    luxuryMen: "Hommes Luxe",
    help: "Aide",
    faq: "FAQ",
    shippingReturns: "Livraison & Retours",
    contactUs: "Contactez-nous",
    sizeGuide: "Guide des Tailles",
    followUs: "Suivez-nous",
    allRightsReserved: "Tous droits réservés",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",

    // Shopping Cart
    yourCart: "Votre Panier",
    emptyCart: "Votre panier est vide",
    startShopping: "Commencer vos Achats",
    total: "Total",
    clearCart: "Vider le Panier",
    returnToShop: "Retourner à la Boutique",
    checkout: "Commander",

    // Theme
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",

    // Language
    language: "Langue",
    english: "Anglais",
    french: "Français",

    // About Us page
    aboutUsTitle: "À Propos de Nous",
    aboutUsSubtitle: "Découvrez l'histoire derrière OnlyBrands",
    ourStory: "Notre Histoire",
    ourStoryText1:
      "Fondée en 2020, OnlyBrands a commencé avec une vision simple : créer une marketplace où les passionnés de mode pourraient découvrir des marques premium et de luxe en un seul endroit.",
    ourStoryText2:
      "Ce qui a commencé comme une petite boutique en ligne est devenu une plateforme mondiale, connectant des clients exigeants avec les marques de mode les plus convoitées au monde.",
    ourMission: "Notre Mission",
    ourMissionText:
      "Notre mission est de transformer la façon dont les gens découvrent et achètent de la mode haut de gamme. En combinant une technologie de pointe avec une passion pour le style, nous visons à créer l'expérience d'achat la plus personnalisée et fluide possible.",
    ourValues: "Nos Valeurs",
    valueQuality: "Qualité",
    valueQualityText:
      "Nous sélectionnons soigneusement chaque marque et produit pour garantir les plus hauts standards de fabrication et de matériaux.",
    valueSustainability: "Durabilité",
    valueSustainabilityText:
      "Nous nous engageons à promouvoir la mode durable et à travailler avec des marques qui partagent nos valeurs environnementales.",
    valueInnovation: "Innovation",
    valueInnovationText:
      "Nous explorons constamment de nouvelles technologies et approches pour améliorer l'expérience d'achat de nos clients.",

    // Work in Progress page
    workInProgressTitle: "En Construction",
    workInProgressMessage: "Nous travaillons actuellement sur",
    workInProgressSubmessage: "Veuillez revenir bientôt pour les mises à jour !",
    thisPage: "cette page",
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check if language preference is stored in localStorage
    const savedLanguage = localStorage.getItem("language")
    // Check if browser language is French
    const browserLanguage = navigator.language.startsWith("fr") ? "fr" : "en"

    // Return saved language or browser language
    return savedLanguage || browserLanguage
  })

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"))
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

