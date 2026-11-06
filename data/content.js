/*
  Cutzy site copy and replaceable media map.
  Replaceable image slots used by the six pages:
  - media/logo.png (cropped from the supplied logo; retain the original wordmark)
  - media/hair-consultation.jpg (home hero, academy, about and enquiry image)
  - media/arjun-portrait.jpg (consultant portrait and men's grooming card)
  - media/salon-front.jpg (salon exterior and gallery)
  - media/chestnut-finish.jpg, media/guest-finish.jpg, media/brunette-waves.jpg
    (service cards, reel-style cards and gallery)
  Update these local paths when new approved salon photos or reels are supplied.
*/
window.CUTZY_CONTENT = {
  contact: {
    phoneDisplay: "+91 7397 945 737",
    phoneLink: "tel:+917397945737",
    whatsapp: "https://wa.me/917397945737",
    address: "Shop no, First Floor, 1/2, Main Road, opp. Ganesh Chole Bhature Wala, Bhola Nath Nagar, Shalimar Park, Shahdara, Delhi 110032",
    hours: "Open daily, closes at 10 PM",
    instagram: "https://www.instagram.com/cutzy_salon/",
    instagramHandle: "@cutzy_salon"
  },
  nav: [
    { label: "Home", href: "index.html", key: "home" },
    { label: "Services", href: "services.html", key: "services" },
    { label: "Academy", href: "academy.html", key: "academy" },
    { label: "Gallery", href: "gallery.html", key: "gallery" },
    { label: "About", href: "about.html", key: "about" }
  ],
  serviceCards: [
    { name: "Hair", caption: "Cut, care & styling", image: "media/guest-finish.jpg", service: "Hair" },
    { name: "Colour", caption: "Tone, depth & dimension", image: "media/chestnut-finish.jpg", service: "Colour" },
    { name: "Skin", caption: "Thoughtful skin rituals", image: "media/hair-consultation.jpg", service: "Skin" },
    { name: "Makeup", caption: "Polished, personal looks", image: "media/guest-finish.jpg", service: "Makeup" },
    { name: "Men's grooming", caption: "Considered everyday detail", image: "media/arjun-portrait.jpg", service: "Men's Grooming" },
    { name: "Mehandi", caption: "Art for your occasion", image: "media/brunette-waves.jpg", service: "Mehandi" }
  ],
  reels: [
    { label: "A little more movement", image: "media/brunette-waves.jpg" },
    { label: "Colour, in its own light", image: "media/chestnut-finish.jpg" },
    { label: "The finishing touch", image: "media/guest-finish.jpg" },
    { label: "Inside the studio", image: "media/hair-consultation.jpg" }
  ],
  gallery: [
    { title: "Soft movement", category: "Hair", image: "media/brunette-waves.jpg", shape: "tall" },
    { title: "Chestnut dimension", category: "Colour", image: "media/chestnut-finish.jpg", shape: "wide" },
    { title: "A considered consultation", category: "Hair", image: "media/hair-consultation.jpg", shape: "tall" },
    { title: "A moment in the studio", category: "Bridal", image: "media/guest-finish.jpg", shape: "wide" },
    { title: "Cutzy, from the street", category: "Men", image: "media/salon-front.jpg", shape: "tall" },
    { title: "A fresh finish", category: "Makeup", image: "media/guest-finish.jpg", shape: "tall" }
  ],
  /* Sample copy below is editorial placeholder text; replace with guest-approved reviews before launch. */
  testimonials: [
    { quote: "They listened first, then created a look that felt completely my own.", source: "Guest note · sample copy" },
    { quote: "The colour feels effortless, glossy and beautifully considered.", source: "Guest note · sample copy" },
    { quote: "A warm team, thoughtful advice and a finish I couldn't stop looking at.", source: "Guest note · sample copy" }
  ]
};
