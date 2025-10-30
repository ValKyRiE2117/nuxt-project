// composables/useDestinations.js
export const useDestinations = () => {
  const destinations = [
    {
      id: 1,
      country: "Indonesia",
      city: "Bali",
      description: "Tropical paradise with stunning beaches and rich culture",
      packages: 12,
      priceFrom: 899,
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    },
    {
      id: 2,
      country: "France",
      city: "Paris",
      description: "The city of lights, romance, and world-class cuisine",
      packages: 8,
      priceFrom: 1199,
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
    },
    {
      id: 3,
      country: "Japan",
      city: "Tokyo",
      description: "Modern metropolis blending tradition with innovation",
      packages: 15,
      priceFrom: 1499,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    },
    {
      id: 4,
      country: "Greece",
      city: "Santorini",
      description: "Iconic white buildings with breathtaking sunsets",
      packages: 10,
      priceFrom: 1299,
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    },
    {
      id: 5,
      country: "Italy",
      city: "Rome",
      description: "Ancient history meets modern Italian lifestyle",
      packages: 14,
      priceFrom: 1099,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    },
    {
      id: 6,
      country: "Thailand",
      city: "Bangkok",
      description: "Vibrant city with temples, markets, and street food",
      packages: 11,
      priceFrom: 799,
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    },
    {
      id: 7,
      country: "United Arab Emirates",
      city: "Dubai",
      description: "Luxury shopping, ultramodern architecture, and desert",
      packages: 13,
      priceFrom: 1599,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    },
    {
      id: 8,
      country: "Spain",
      city: "Barcelona",
      description: "Art, architecture, and Mediterranean beaches",
      packages: 9,
      priceFrom: 999,
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    },
    {
      id: 9,
      country: "United Kingdom",
      city: "London",
      description: "Historic landmarks and multicultural experiences",
      packages: 16,
      priceFrom: 1399,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    },
    {
      id: 10,
      country: "Turkey",
      city: "Istanbul",
      description: "Where East meets West in culture and cuisine",
      packages: 10,
      priceFrom: 899,
      image:
        "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    },
    {
      id: 11,
      country: "Australia",
      city: "Sydney",
      description: "Iconic harbor, beaches, and cosmopolitan culture",
      packages: 12,
      priceFrom: 1899,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    },
    {
      id: 12,
      country: "United States",
      city: "New York",
      description: "The city that never sleeps, endless possibilities",
      packages: 18,
      priceFrom: 1699,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    },
    {
      id: 13,
      country: "Morocco",
      city: "Marrakech",
      description: "Exotic markets, palaces, and desert adventures",
      packages: 8,
      priceFrom: 949,
      image:
        "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
    },
    {
      id: 14,
      country: "Egypt",
      city: "Cairo",
      description: "Ancient pyramids and timeless history",
      packages: 7,
      priceFrom: 1099,
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
    },
  ];

  const getAllDestinations = () => destinations;

  const getDestinationByCity = (city) => {
    return destinations.find(
      (dest) => dest.city.toLowerCase() === city.toLowerCase()
    );
  };

  return {
    destinations,
    getAllDestinations,
    getDestinationByCity,
  };
};
