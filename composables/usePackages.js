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
      location: "Tokyo, Japan",
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
    {
      id: 5,
      title: "Rome Historical Explorer",
      location: "Rome, Italy",
      duration: "6 Days / 5 Nights",
      maxPeople: 15,
      rating: 4.9,
      reviews: 112,
      originalPrice: 1399,
      price: 1099,
      discount: "21% OFF",
      badge: "Top Rated",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80",
      description:
        "Explore the timeless charm of Rome — from the Colosseum to Vatican City and authentic Italian cuisine.",
      itinerary: [
        {
          title: "Arrival in Rome",
          description: "Welcome dinner with Italian dishes.",
        },
        {
          title: "Ancient Rome",
          description: "Visit the Colosseum and Roman Forum.",
        },
        {
          title: "Vatican City Tour",
          description: "Explore St. Peter’s Basilica and Sistine Chapel.",
        },
        {
          title: "Trastevere Walk",
          description: "Discover local neighborhoods and gelato tasting.",
        },
        {
          title: "Free Exploration",
          description: "Optional shopping or museum visits.",
        },
        { title: "Departure", description: "Transfer to airport." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Vatican entry tickets",
        "Walking tours",
        "Travel insurance",
      ],
    },
    {
      id: 6,
      title: "Bangkok Cultural Escape",
      location: "Bangkok, Thailand",
      duration: "5 Days / 4 Nights",
      maxPeople: 20,
      rating: 4.8,
      reviews: 75,
      originalPrice: 999,
      price: 799,
      discount: "20% OFF",
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
      description:
        "Discover the bustling city of Bangkok, where tradition meets modern vibrance.",
      itinerary: [
        {
          title: "Arrival & Night Market",
          description: "Street food tour and night market walk.",
        },
        {
          title: "Grand Palace & Temples",
          description: "Visit the Emerald Buddha and Wat Arun.",
        },
        {
          title: "Floating Market Tour",
          description: "Explore Damnoen Saduak floating market.",
        },
        {
          title: "Thai Cooking Class",
          description: "Learn authentic Thai cuisine.",
        },
        { title: "Departure", description: "Farewell breakfast and transfer." },
      ],
      included: [
        "Accommodation (4 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Cooking class",
        "Temple entry fees",
        "Travel insurance",
      ],
    },
    {
      id: 7,
      title: "Dubai Luxury Experience",
      location: "Dubai, UAE",
      duration: "6 Days / 5 Nights",
      maxPeople: 12,
      rating: 4.9,
      reviews: 142,
      originalPrice: 1899,
      price: 1599,
      discount: "16% OFF",
      badge: "Luxury",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
      description:
        "Enjoy the glitz and glamor of Dubai with desert safaris, skyscrapers, and luxury experiences.",
      itinerary: [
        {
          title: "Arrival & Marina Dinner",
          description: "Luxury cruise dinner in Dubai Marina.",
        },
        {
          title: "City Tour",
          description: "Visit Burj Khalifa and Dubai Mall.",
        },
        {
          title: "Desert Safari",
          description: "Camel rides, dune bashing, and BBQ dinner.",
        },
        {
          title: "Palm Island",
          description: "Photo stop at Atlantis and Jumeirah Beach.",
        },
        { title: "Departure", description: "Airport transfer." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Desert safari",
        "Marina dinner cruise",
        "Travel insurance",
      ],
    },
    {
      id: 8,
      title: "Barcelona Coastal Discovery",
      location: "Barcelona, Spain",
      duration: "6 Days / 5 Nights",
      maxPeople: 14,
      rating: 4.7,
      reviews: 83,
      originalPrice: 1249,
      price: 999,
      discount: "20% OFF",
      badge: "Featured",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
      description:
        "Explore Gaudí’s masterpieces, beautiful beaches, and vibrant Catalan culture in Barcelona.",
      itinerary: [
        {
          title: "Arrival in Barcelona",
          description: "Evening tapas and flamenco show.",
        },
        {
          title: "City Tour",
          description: "Sagrada Familia and Park Güell visits.",
        },
        { title: "Beach Day", description: "Relax at Barceloneta Beach." },
        {
          title: "Montserrat Excursion",
          description: "Visit the mountain monastery.",
        },
        { title: "Departure", description: "Transfer to airport." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "City tour",
        "Montserrat trip",
        "Travel insurance",
      ],
    },
    {
      id: 9,
      title: "London Heritage Tour",
      location: "London, UK",
      duration: "7 Days / 6 Nights",
      maxPeople: 15,
      rating: 4.8,
      reviews: 125,
      originalPrice: 1699,
      price: 1399,
      discount: "18% OFF",
      badge: "Top Pick",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
      description:
        "Experience the classic charm of London with royal landmarks and modern culture.",
      itinerary: [
        {
          title: "Arrival & London Eye",
          description: "Evening ride with skyline views.",
        },
        {
          title: "Historic Landmarks",
          description: "Buckingham Palace and Big Ben.",
        },
        {
          title: "Museums & Galleries",
          description: "Visit British Museum and Tate Modern.",
        },
        {
          title: "Stonehenge Day Trip",
          description: "Explore ancient wonders.",
        },
        { title: "Departure", description: "Farewell breakfast." },
      ],
      included: [
        "Accommodation (6 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Stonehenge trip",
        "City tour",
        "Travel insurance",
      ],
    },
    {
      id: 10,
      title: "Istanbul Cultural Fusion",
      location: "Istanbul, Turkey",
      duration: "6 Days / 5 Nights",
      maxPeople: 12,
      rating: 4.7,
      reviews: 90,
      originalPrice: 1099,
      price: 899,
      discount: "18% OFF",
      badge: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80",
      description:
        "Dive into Istanbul’s unique blend of European and Asian heritage, mosques, and bazaars.",
      itinerary: [
        {
          title: "Arrival & Dinner",
          description: "Welcome dinner by the Bosphorus.",
        },
        {
          title: "Old City Tour",
          description: "Visit Hagia Sophia and Blue Mosque.",
        },
        {
          title: "Grand Bazaar",
          description: "Shopping and Turkish delights.",
        },
        { title: "Bosphorus Cruise", description: "Evening scenic cruise." },
        { title: "Departure", description: "Airport transfer." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Bosphorus cruise",
        "City tour",
        "Travel insurance",
      ],
    },
    {
      id: 11,
      title: "Sydney Coastal Adventure",
      location: "Sydney, Australia",
      duration: "8 Days / 7 Nights",
      maxPeople: 10,
      rating: 4.9,
      reviews: 110,
      originalPrice: 2199,
      price: 1899,
      discount: "14% OFF",
      badge: "Premium",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
      description:
        "Discover Sydney’s vibrant harbor, beaches, and wildlife with this immersive package.",
      itinerary: [
        {
          title: "Arrival & Harbor Cruise",
          description: "Evening cruise around Sydney Harbour.",
        },
        {
          title: "City Tour",
          description: "Opera House, Harbour Bridge, Darling Harbour.",
        },
        { title: "Blue Mountains", description: "Day trip to national park." },
        { title: "Beach Day", description: "Bondi and Manly beaches." },
        {
          title: "Departure",
          description: "Farewell breakfast and airport transfer.",
        },
      ],
      included: [
        "Accommodation (7 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Harbor cruise",
        "National park trip",
        "Travel insurance",
      ],
    },
    {
      id: 12,
      title: "New York City Explorer",
      location: "New York, USA",
      duration: "6 Days / 5 Nights",
      maxPeople: 15,
      rating: 5.0,
      reviews: 220,
      originalPrice: 1999,
      price: 1699,
      discount: "15% OFF",
      badge: "Best Choice",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      description:
        "Explore the city that never sleeps — from Times Square to Central Park and Broadway.",
      itinerary: [
        { title: "Arrival in NYC", description: "Evening in Times Square." },
        {
          title: "Landmarks Tour",
          description: "Statue of Liberty and Empire State Building.",
        },
        {
          title: "Central Park & Museums",
          description: "Relax and visit MoMA.",
        },
        {
          title: "Shopping & Broadway",
          description: "Catch a show and shop in SoHo.",
        },
        { title: "Departure", description: "Airport transfer." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "City sightseeing",
        "Broadway ticket",
        "Travel insurance",
      ],
    },
    {
      id: 13,
      title: "Marrakech Desert Escape",
      location: "Marrakech, Morocco",
      duration: "5 Days / 4 Nights",
      maxPeople: 12,
      rating: 4.8,
      reviews: 95,
      originalPrice: 1149,
      price: 949,
      discount: "17% OFF",
      badge: "Exotic",
      image:
        "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80",
      description:
        "Uncover the charm of Marrakech with markets, palaces, and a desert adventure.",
      itinerary: [
        {
          title: "Arrival in Marrakech",
          description: "Welcome mint tea and dinner.",
        },
        { title: "Medina Tour", description: "Explore souks and palaces." },
        {
          title: "Desert Safari",
          description: "Camel rides and starry night camp.",
        },
        {
          title: "Majorelle Gardens",
          description: "Relax in Yves Saint Laurent’s garden.",
        },
        { title: "Departure", description: "Airport transfer." },
      ],
      included: [
        "Accommodation (4 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Desert safari",
        "City tour",
        "Travel insurance",
      ],
    },
    {
      id: 14,
      title: "Cairo Ancient Wonders",
      location: "Cairo, Egypt",
      duration: "6 Days / 5 Nights",
      maxPeople: 14,
      rating: 4.9,
      reviews: 130,
      originalPrice: 1299,
      price: 1099,
      discount: "15% OFF",
      badge: "Historical",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
      description:
        "Walk among the Pyramids of Giza, sail the Nile, and explore ancient Egypt’s mysteries.",
      itinerary: [
        {
          title: "Arrival in Cairo",
          description: "Welcome dinner and orientation.",
        },
        { title: "Pyramids & Sphinx", description: "Full-day guided tour." },
        {
          title: "Egyptian Museum",
          description: "Discover Tutankhamun’s treasures.",
        },
        {
          title: "Nile Dinner Cruise",
          description: "Enjoy dinner with live music.",
        },
        { title: "Departure", description: "Transfer to airport." },
      ],
      included: [
        "Accommodation (5 nights)",
        "Daily breakfast",
        "Airport transfers",
        "Nile cruise",
        "Museum entry",
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
