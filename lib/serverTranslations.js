// Server-side translation utility
const translations = {
  en: {
    breadcrumb: {
      blogList: "Blog & Announcements",
      blogDetail: "Blog Post"
    },
    search: {
      title: "Search",
      placeholder: "Keyword ..."
    },
    categories: {
      title: "Category",
      clear: "Clear",
      blog: "Blog Post",
      announcement: "Announcement",
      event: "Event"
    },
    affiliates: {
      title: "Affiliates",
      partner: "Partner",
      sponsor: "Sponsor"
    },
    pagination: {
      prev: "Prev",
      next: "Next"
    },
    post: {
      readMore: "Read More",
      tags: "Tags :",
      author: "Admin",
      externalLink: "external link"
    }
  },
  fr: {
    breadcrumb: {
      blogList: "Blog & Annonces",
      blogDetail: "Article de Blog"
    },
    search: {
      title: "Recherche",
      placeholder: "Mot-clé ..."
    },
    categories: {
      title: "Catégorie",
      clear: "Effacer",
      blog: "Article de Blog",
      announcement: "Annonce",
      event: "Événement"
    },
    affiliates: {
      title: "Affiliés",
      partner: "Partenaire",
      sponsor: "Sponsor"
    },
    pagination: {
      prev: "Précédent",
      next: "Suivant"
    },
    post: {
      readMore: "Lire la suite",
      tags: "Étiquettes :",
      author: "Administrateur",
      externalLink: "lien externe"
    }
  }
};

export function getTranslation(key, lang = 'en') {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function getServerTranslations(lang = 'en') {
  return translations[lang] || translations.en;
}
