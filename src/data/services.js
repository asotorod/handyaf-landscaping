export const services = [
  {
    key: 'landscape-design',
    title: 'Landscape Design',
    shortDescription: 'Custom landscape designs tailored to your vision and property.',
    description: 'Transform your outdoor space with our professional landscape design services. We work closely with you to understand your vision, lifestyle, and property characteristics to create a custom design that enhances your home\'s beauty and functionality. Our designs blend aesthetics with practicality, ensuring your landscape is both stunning and sustainable.',
    features: [
      'Custom design consultations',
      '3D renderings and plans',
      'Plant selection and placement',
      'Hardscape integration',
      'Drainage solutions',
      'Phased implementation options'
    ],
    image: '/images/services/landscape-design.jpg',
    icon: 'design'
  },
  {
    key: 'landscape-planting',
    title: 'Landscape Planting',
    shortDescription: 'Expert plant selection and installation for thriving gardens.',
    description: 'Bring your landscape to life with our professional planting services. We select the right plants for your climate, soil conditions, and aesthetic preferences. From flowering perennials to ornamental trees, we ensure every plant is installed correctly and positioned for optimal growth and visual impact.',
    features: [
      'Native plant specialists',
      'Seasonal color planning',
      'Tree and shrub installation',
      'Flower bed design',
      'Soil preparation and amendments',
      'Mulching and finishing'
    ],
    image: '/images/services/landscape-planting.jpg',
    icon: 'planting'
  },
  {
    key: 'landscape-lighting',
    title: 'Landscape Lighting',
    shortDescription: 'Illuminate your property with stunning outdoor lighting.',
    description: 'Extend the beauty and usability of your outdoor spaces into the evening hours with professional landscape lighting. We design and install lighting systems that highlight architectural features, illuminate pathways, and create ambiance throughout your property while enhancing security.',
    features: [
      'LED energy-efficient systems',
      'Path and accent lighting',
      'Architectural uplighting',
      'Security lighting',
      'Smart controls and timers',
      'Low-voltage systems'
    ],
    image: '/images/services/landscape-lighting.jpg',
    icon: 'lighting'
  },
  {
    key: 'enhancement-lawn-care',
    title: 'Enhancement & Lawn Care',
    shortDescription: 'Complete lawn maintenance and property enhancement services.',
    description: 'Keep your property looking its best year-round with our comprehensive lawn care and enhancement services. From regular mowing and trimming to seasonal cleanups and fertilization, we provide everything your landscape needs to thrive and impress.',
    features: [
      'Weekly mowing and edging',
      'Fertilization programs',
      'Weed control',
      'Aeration and overseeding',
      'Spring and fall cleanups',
      'Pruning and trimming'
    ],
    image: '/images/services/lawn-care.jpg',
    icon: 'lawncare'
  },
  {
    key: 'commercial-snow-removal',
    title: 'Commercial Snow Removal',
    shortDescription: 'Reliable commercial snow and ice management services.',
    description: 'Keep your commercial property safe and accessible throughout the winter months with our professional snow removal services. We offer 24/7 response, reliable equipment, and experienced crews to handle snow and ice management for businesses of all sizes.',
    features: [
      '24/7 emergency response',
      'Plowing and shoveling',
      'Salt and ice treatment',
      'Parking lot clearing',
      'Sidewalk maintenance',
      'Seasonal contracts available'
    ],
    image: '/images/services/snow-removal.jpg',
    icon: 'snow'
  }
];

export const getServiceByKey = (key) => {
  return services.find(service => service.key === key);
};
