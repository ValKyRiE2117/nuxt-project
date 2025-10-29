// composables/usePackages.js
export const usePackages = () => {
  // Helper function to create URL-friendly slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // All packages data
  const packages = [
    {
      id: 1,
      title: "Bali Beach Paradise",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      maxPeople: 10,
      rating: 4.9,
      reviews: 145,
      originalPrice: 1299,
      price: 999,
      discount: "23% OFF",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
      description:
        "Experience the ultimate tropical getaway in Bali with pristine beaches, cultural wonders, and unforgettable adventures. This package includes accommodation at luxury beachfront resorts, guided tours to iconic temples, exciting water sports, and authentic Balinese dining experiences.",
      itinerary: [
        {
          title: "Arrival & Beach Welcome",
          description:
            "Check-in to your beachfront resort and enjoy a welcome dinner by the ocean.",
        },
        {
          title: "Temple Tours",
          description:
            "Visit iconic temples including Tanah Lot and Uluwatu Temple.",
        },
        {
          title: "Water Sports Adventure",
          description:
            "Surfing, snorkeling, and diving in crystal clear waters.",
        },
        {
          title: "Cultural Experience",
          description:
            "Traditional Balinese cooking class and dance performance.",
        },
        {
          title: "Rice Terraces & Waterfalls",
          description:
            "Explore Tegalalang Rice Terraces and hidden waterfalls.",
        },
        {
          title: "Spa & Relaxation",
          description: "Full day of pampering at a luxury spa.",
        },
        {
          title: "Departure",
          description: "Transfer to airport with unforgettable memories.",
        },
      ],
      included: [
        "Accommodation (6 nights)",
        "Daily breakfast",
        "Airport transfers",
        "All guided tours",
        "Water sports activities",
        "Cultural experiences",
        "Travel insurance",
        "Professional tour guide",
      ],
    },
    {
      id: 2,
      title: "Romantic Paris Getaway",
      location: "Paris, France",
      duration: "5 Days / 4 Nights",
      maxPeople: 8,
      rating: 4.8,
      reviews: 98,
      originalPrice: 1599,
      price: 1299,
      discount: "19% OFF",
      badge: "Hot Deal",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&q=80",
      description:
        "Fall in love with Paris all over again with this romantic getaway. Explore iconic landmarks, indulge in world-class cuisine, and create unforgettable memories in the City of Light. This package includes luxury accommodation, skip-the-line tickets to major attractions, and authentic French dining experiences.",
      itinerary: [
        {
          title: "Arrival & Seine River Cruise",
          description:
            "Check-in to your luxury hotel and enjoy an evening Seine River cruise.",
        },
        {
          title: "Eiffel Tower & Champs-Élysées",
          description:
            "Visit the iconic Eiffel Tower and stroll down the famous Champs-Élysées.",
        },
        {
          title: "Louvre & Notre-Dame",
          description:
            "Explore the world-renowned Louvre Museum and Notre-Dame Cathedral.",
        },
        {
          title: "Versailles Palace",
          description:
            "Day trip to the magnificent Palace of Versailles and its gardens.",
        },
        {
          title: "Departure",
          description: "Transfer to airport with cherished Parisian memories.",
        },
      ],
      included: [
        "Accommodation (4 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Skip-the-line tickets",
        "Seine River cruise",
        "Versailles day trip",
        "Travel insurance",
        "Professional guide",
      ],
    },
    {
      id: 3,
      title: "Japan Cultural Experience",
      location: "Tokyo & Kyoto",
      duration: "10 Days / 9 Nights",
      maxPeople: 12,
      rating: 5,
      reviews: 203,
      originalPrice: 2499,
      price: 1999,
      discount: "20% OFF",
      badge: "Featured",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
      description:
        "Immerse yourself in Japan's rich culture and traditions. From the bustling streets of Tokyo to the serene temples of Kyoto, experience the perfect blend of modern innovation and ancient heritage. This comprehensive package includes accommodation, rail passes, cultural activities, and authentic Japanese cuisine.",
      itinerary: [
        {
          title: "Arrival in Tokyo",
          description:
            "Welcome to Tokyo! Check-in and explore the vibrant Shibuya district.",
        },
        {
          title: "Tokyo Highlights",
          description:
            "Visit Senso-ji Temple, Tokyo Tower, and Akihabara electronics district.",
        },
        {
          title: "Mt. Fuji Day Trip",
          description:
            "Full-day excursion to iconic Mt. Fuji and surrounding lakes.",
        },
        {
          title: "Tokyo to Kyoto",
          description:
            "Travel by bullet train to Kyoto, the cultural heart of Japan.",
        },
        {
          title: "Kyoto Temples",
          description:
            "Explore Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.",
        },
        {
          title: "Arashiyama Bamboo Grove",
          description:
            "Walk through the magical bamboo forest and visit traditional gardens.",
        },
        {
          title: "Tea Ceremony & Geisha District",
          description:
            "Participate in a traditional tea ceremony and explore Gion district.",
        },
        {
          title: "Nara Day Trip",
          description:
            "Visit Nara Park, meet the famous deer, and see Todai-ji Temple.",
        },
        {
          title: "Osaka Excursion",
          description:
            "Explore Osaka Castle and enjoy the vibrant Dotonbori district.",
        },
        {
          title: "Departure",
          description:
            "Transfer to airport with unforgettable Japanese memories.",
        },
      ],
      included: [
        "Accommodation (9 nights)",
        "Daily breakfast",
        "JR Rail Pass (7 days)",
        "Airport transfers",
        "All guided tours",
        "Mt. Fuji excursion",
        "Tea ceremony experience",
        "Travel insurance",
      ],
    },
    {
      id: 4,
      title: "Greek Islands Adventure",
      location: "Santorini, Greece",
      duration: "8 Days / 7 Nights",
      maxPeople: 10,
      rating: 4.7,
      reviews: 87,
      originalPrice: 1799,
      price: 1499,
      discount: "17% OFF",
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80",
      description:
        "Discover the breathtaking beauty of the Greek Islands. From Santorini's iconic white-washed buildings and blue domes to pristine beaches and ancient ruins, this package offers the perfect Mediterranean escape. Includes luxury accommodation, island tours, wine tastings, and authentic Greek cuisine.",
      itinerary: [
        {
          title: "Arrival in Santorini",
          description:
            "Welcome to Santorini! Check-in to your cliffside hotel with caldera views.",
        },
        {
          title: "Oia Village & Sunset",
          description:
            "Explore the picturesque Oia village and watch the world-famous sunset.",
        },
        {
          title: "Volcano & Hot Springs",
          description:
            "Boat trip to the volcanic islands and natural hot springs.",
        },
        {
          title: "Wine Tasting Tour",
          description:
            "Visit local wineries and taste exceptional Santorini wines.",
        },
        {
          title: "Beach Day",
          description: "Relax at Red Beach and Perissa Black Sand Beach.",
        },
        {
          title: "Akrotiri Archaeological Site",
          description:
            "Explore the ancient Minoan city preserved by volcanic ash.",
        },
        {
          title: "Sailing Excursion",
          description:
            "Full-day catamaran sailing around the caldera with lunch.",
        },
        {
          title: "Departure",
          description:
            "Transfer to airport with memories of Greek island paradise.",
        },
      ],
      included: [
        "Accommodation (7 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Volcano boat tour",
        "Wine tasting experience",
        "Sailing excursion",
        "Archaeological site tickets",
        "Travel insurance",
      ],
    },
  ];

  // Get all packages
  const getAllPackages = () => {
    return packages;
  };

  // Get package by slug
  const getPackageBySlug = (slug) => {
    return packages.find((pkg) => createSlug(pkg.title) === slug);
  };

  // Get package by ID
  const getPackageById = (id) => {
    return packages.find((pkg) => pkg.id === id);
  };

  return {
    packages,
    getAllPackages,
    getPackageBySlug,
    getPackageById,
    createSlug,
  };
};
