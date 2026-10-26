import { images } from "@/lib/images";

const CDN = "https://cdn.prod.website-files.com/66de71cc2bd368e4376f06b0";

function photo(file) {
  return `${CDN}/${file}`;
}

export const projects = [
  {
    id: "shizuka-gardens",
    title: "Shizuka Gardens",
    location: "Hokkaido, Japan",
    image: photo("66de98097a06601ebd66659b_Sizhuka_Img_02.webp"),
    thumb: images.project1,
    category: "Eco-Resort",
    year: "2021",
    summary:
      "Shizuka Gardens is a luxury eco-resort in Hokkaido designed by Neozen, blending traditional Japanese aesthetics with modern sustainability principles. The project was completed in 2021 and features advanced eco-friendly technologies and biophilic design to create a seamless connection between architecture and nature.",
    details: [
      { label: "Location", value: "Hokkaido, Japan" },
      { label: "Year", value: "2023" },
      { label: "Bathroom", value: "18 (Across multiple villas)" },
      { label: "Bedroom", value: "24 (Across multiple villas)" },
      { label: "Total Land Size", value: "87,120 (2 acres)" },
      { label: "Category", value: "Eco-Resort" },
    ],
    images: {
      hero: photo("66de987342ebf9febb7dc065_Sizhuka_Img_01.webp"),
      portrait: photo("66de98097a06601ebd66659b_Sizhuka_Img_02.webp"),
      band: photo("66de98164ae897514b84568a_Sizhuka_Img_03.webp"),
      wide: photo("66de981b9b602e1b2f6d894e_Sizhuka_Img_04.webp"),
      feature: photo("66de982d6110f91eb2fcad0e_Sizhuka_Img_05.webp"),
      featureSide: photo("66de983a6d28b401d94443c1_Sizhuka_Img_06.webp"),
      featureWide: photo("66de98a6cdae96c41a2031f2_Sizhuka_Img_07.webp"),
    },
    features: [
      {
        name: "Geothermal Heating and Cooling System",
        text: "Provides year-round energy efficiency while reducing carbon emissions by 60%.",
      },
      {
        name: "On-Site Water Filtration and Recycling",
        text: "Natural spring water is filtered and used for both bathing and irrigation, reducing water waste.",
      },
      {
        name: "Locally Sourced and Recycled Materials",
        text: "All construction materials were sourced within a 100-mile radius, incorporating recycled wood and stone to maintain harmony with the local environment.",
      },
    ],
    quote: {
      text: "Working with Neozen was transformative. They not only understood our vision but elevated it beyond what we imagined. Their commitment to sustainability and authentic Japanese design was evident in every detail. The result is a resort that our guests describe as a living, breathing extension of nature. We couldn't have asked for a better partner.",
      name: "Kenji Sato",
      role: "CEO of Shizuka Gardens",
    },
    awards: [
      { org: "World Architecture Festival", detail: "Excellence in eco-resort design.", year: "2022" },
      { org: "Japan Luxury Travel Award", detail: "Innovative green design.", year: "2023" },
      { org: "Japan Institute of Architects", detail: "Fusion of tradition and modernity.", year: "2022" },
    ],
    press: [
      { org: "Architectural Digest Japan", detail: "Seamless blend of tradition and sustainability.", year: "2022" },
      { org: "Dezeen", detail: "Pioneering sustainable resort architecture.", year: "2023" },
      { org: "The Japan Times", detail: "City Life", year: "2022" },
    ],
  },
  {
    id: "kawa-lofts",
    title: "Kawa Lofts",
    location: "Tokyo, Japan",
    image: photo("66de99edb77ec77e8d8bd53e_kawa_loft_image_06.webp"),
    thumb: images.project2,
    category: "Residential",
    year: "2022",
    summary:
      "Kawa Lofts is a luxury residential high-rise in Tokyo designed by Neozen. The project incorporates cutting-edge sustainability features while reflecting both modern and traditional Japanese design. Completed in 2022, it offers residents a tranquil urban retreat with state-of-the-art energy efficiency and smart living solutions.",
    details: [
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Year", value: "2023" },
      { label: "Bathroom", value: "30 (Across 15 floors)" },
      { label: "Bedroom", value: "30 (Across 15 floors)" },
      { label: "Total Land Size", value: "21,780 (0.5 acres)" },
      { label: "Category", value: "Residential" },
    ],
    images: {
      hero: photo("66de9995ab37d10f78ca6527_kawa_loft_image_05.webp"),
      portrait: photo("66de99edb77ec77e8d8bd53e_kawa_loft_image_06.webp"),
      band: photo("66de99f431732567868de0f1_kawa_loft_image_04.webp"),
      wide: photo("66de9a0248db53e49fd568cb_kawa_loft_image_07.webp"),
      feature: photo("66de9a0b80aa808382dcae34_kawa_loft_image_03.webp"),
      featureSide: photo("66de9a14eb29c3528f269a86_kawa_loft_image_02.webp"),
      featureWide: photo("66de9a1d80aa808382dcbae1_kawa_loft_image_01.webp"),
    },
    features: [
      {
        name: "Photovoltaic Glass Windows",
        text: "Solar-integrated windows that generate energy while providing natural light.",
      },
      {
        name: "Vertical Gardens and Green Terraces",
        text: "Multi-level greenery that improves air quality, acts as sound insulation, and reduces urban heat island effects.",
      },
      {
        name: "Smart Energy Management System",
        text: "Automated controls for lighting, heating, and cooling that optimize energy usage based on real-time conditions.",
      },
    ],
    quote: {
      text: "Neozen understood the complexities of urban living and delivered a design that not only met but exceeded our expectations. Their attention to detail in both aesthetics and sustainability has set a new standard for residential buildings in Tokyo. We couldn't be more thrilled with the outcome.",
      name: "Hiroshi Yamada",
      role: "Director of Kawa Lofts",
    },
    awards: [
      { org: "Asia-Pacific Property Awards", detail: "Excellence in high-density housing.", year: "2023" },
      { org: "Japan Institute of Architects", detail: "Sustainability in urban environments.", year: "2023" },
      { org: "Wallpaper Magazine", detail: "Innovative urban living design.", year: "2023" },
    ],
    press: [
      { org: "Wallpaper Magazine", detail: "Next-generation residential towers.", year: "2023" },
      { org: "The Japan Times", detail: "Leading example of eco-luxury living.", year: "2023" },
      { org: "Design Anthology", detail: "Urban vibrancy meets sustainability.", year: "2023" },
    ],
  },
  {
    id: "kinsei-pavilion",
    title: "Kinsei Pavilion",
    location: "Osaka, Japan",
    image: photo("66de9b517a06601ebd697b98_kensei_img_02.webp"),
    thumb: images.project3,
    category: "Cultural Center",
    year: "2021",
    summary:
      "Kinsei Pavilion is a cultural center in Osaka designed by Neozen, combining traditional Japanese architecture with modern, sustainable features. Completed in 2021, the pavilion hosts community events, exhibitions, and workshops, offering a flexible space that embodies the essence of Japanese cultural heritage.",
    details: [
      { label: "Location", value: "Osaka, Japan" },
      { label: "Year", value: "2022" },
      { label: "Bathroom", value: "6" },
      { label: "Bedroom", value: "Multi-use spaces" },
      { label: "Total Land Size", value: "65,340 (1.5 acres)" },
      { label: "Category", value: "Cultural Center" },
    ],
    images: {
      hero: photo("66de9b4d4c97a9b2d89c0973_Kensei_img_01.webp"),
      portrait: photo("66de9b517a06601ebd697b98_kensei_img_02.webp"),
      band: photo("66de9b576d4d6035dda258e7_kensei_img_03.webp"),
      wide: photo("66de9b8d48969ad9594e85ba_Kensei_img_04.webp"),
      feature: photo("66de9b5d7e706cd3a9f86e73_kensei_img_05.webp"),
      featureSide: photo("66de9b610149c952b0311e6e_kensei_img_06.webp"),
      featureWide: photo("66de9b668945e61eaf404c50_kensei_img_07.webp"),
    },
    features: [
      {
        name: "Green Roof with Solar Panels",
        text: "A dual-purpose roof that insulates the building while generating solar energy.",
      },
      {
        name: "Rainwater Harvesting System",
        text: "Collects rainwater for use in the reflective water garden and for irrigation, reducing overall water consumption by 30%.",
      },
      {
        name: "Adaptive Reuse of Materials",
        text: "Reclaimed wood from old Japanese farmhouses was used in the interior, preserving cultural history while reducing waste.",
      },
    ],
    quote: {
      text: "Neozen took our vision and turned it into a space that breathes culture, flexibility, and sustainability. They respected our need for a venue that honors tradition while embracing the future. The Kinsei Pavilion is now a landmark in Osaka, and we couldn't be more proud of the result.",
      name: "Aiko Hashimoto",
      role: "Director of Kinsei Pavilion",
    },
    awards: [
      { org: "Dezeen Awards", detail: "Excellence in cultural architecture.", year: "2023" },
      { org: "Japan Institute of Architects", detail: "Innovative community space design.", year: "2022" },
      { org: "Green Building Awards", detail: "Integration of eco-friendly practices.", year: "2023" },
    ],
    press: [
      { org: "Designboom", detail: "Blend of tradition and modernity.", year: "2023" },
      { org: "ArchDaily", detail: "Sustainable design in public architecture.", year: "2022" },
      { org: "Japan Architect Magazine", detail: "Innovative cultural space.", year: "2023" },
    ],
  },
  {
    id: "zenkai-lounge",
    title: "Zenkai Lounge",
    location: "Nagoya, Japan",
    image: photo("66deba0bb47315ce982419a0_zenkai_img_02.webp"),
    thumb: photo("66deb9bb4d9cb273a66c66f1_Zenkai_img_01.webp"),
    category: "Wellness Lounge",
    year: "2022",
    summary:
      "Zenkai Lounge is a multifunctional wellness and social space in Nagoya designed by Neozen. Completed in 2022, it combines luxury, sustainability, and versatility to create a haven for both active and relaxing experiences. The project focuses on biophilic design and modular spaces that adapt to the needs of urban professionals.",
    details: [
      { label: "Location", value: "Nagoya, Japan" },
      { label: "Year", value: "2022" },
      { label: "Bathroom", value: "5" },
      { label: "Bedroom", value: "Multi-use spaces" },
      { label: "Total Land Size", value: "10,890 (0.25 acres)" },
      { label: "Category", value: "Wellness Lounge" },
    ],
    images: {
      hero: photo("66deb9bb4d9cb273a66c66f1_Zenkai_img_01.webp"),
      portrait: photo("66deba0bb47315ce982419a0_zenkai_img_02.webp"),
      band: photo("66deba0e9d0f91e3fe78ad94_zenkai_img_03.webp"),
      wide: photo("66deba1611be47c3a645ac5d_zenkai_img_04.webp"),
      feature: photo("66deba1b74f730510c5d863b_zenkai_img_05.webp"),
      featureSide: photo("66deba1f4ad083ad18f24108_zenkai_img_06.webp"),
      featureWide: photo("66deba2346408c3259fe4648_zenkai_img_07.webp"),
    },
    features: [
      {
        name: "Energy-Efficient Lighting with Circadian Settings",
        text: "Adjustable lighting that supports natural rhythms, enhancing well-being while conserving energy.",
      },
      {
        name: "Rainwater Harvesting for Cooling System",
        text: "A koi pond fed by collected rainwater, which serves as a cooling feature in the meditation garden.",
      },
      {
        name: "Recycled and Locally Sourced Materials",
        text: "Furniture and fixtures made from sustainable materials, reducing the environmental impact while supporting local craftspeople.",
      },
    ],
    quote: {
      text: "Neozen perfectly captured the essence of what we wanted — a space that's both lively and calming. They understood the need for flexibility in our design and delivered a lounge that feels luxurious while being entirely sustainable. Our guests constantly comment on the unique vibe, and we owe it all to Neozen's attention to detail.",
      name: "Mai Sakamoto",
      role: "Founder of Zenkai Lounge",
    },
    awards: [
      { org: "Hospitality Design Awards", detail: "Innovative wellness environment.", year: "2023" },
      { org: "Asia-Pacific Property Awards", detail: "Excellence in social space design.", year: "2022" },
      { org: "Green Good Design Award", detail: "Eco-friendly design integration.", year: "2023" },
    ],
    press: [
      { org: "Design Anthology", detail: "Biophilic design in urban settings.", year: "2023" },
      { org: "Hospitality Design Magazine", detail: "Unique blend of social and wellness spaces.", year: "2022" },
      { org: "Nagoya Style", detail: "Top destination for urban relaxation.", year: "2023" },
    ],
  },
  {
    id: "hikari-villa",
    title: "Hikari Villa",
    location: "Okinawa, Japan",
    image: photo("66debb8811be47c3a6471803_hikari_img_02.webp"),
    thumb: photo("66debb50317bedbea16bb27f_hikari_img_01.webp"),
    category: "Residential",
    year: "2021",
    summary:
      "Hikari Villa is a luxury retreat in Okinawa designed by Neozen. Completed in 2021, it seamlessly integrates modern amenities with traditional Japanese design elements, creating a serene and light-filled environment. The villa's design prioritizes sustainability while offering stunning views of the coastal landscape.",
    details: [
      { label: "Location", value: "Okinawa, Japan" },
      { label: "Year", value: "2023" },
      { label: "Bathroom", value: "4" },
      { label: "Bedroom", value: "3" },
      { label: "Total Land Size", value: "32,670 (0.75 acres)" },
      { label: "Category", value: "Residential" },
    ],
    images: {
      hero: photo("66debb50317bedbea16bb27f_hikari_img_01.webp"),
      portrait: photo("66debb8811be47c3a6471803_hikari_img_02.webp"),
      band: photo("66debb8c35f90cddbe22f3b8_hikari_img_03.webp"),
      wide: photo("66debb948503446aa7cc9dad_hikari_im_4.webp"),
      feature: photo("66debb9acffa29e2b0eee2b5_hikari_im_5.webp"),
      featureSide: photo("66debb9f4d9cb273a66e3a66_hikari_img_06.webp"),
      featureWide: photo("66debba6a3774b8f642fff3f_hikari_img_07.webp"),
    },
    features: [
      {
        name: "Passive Cooling and Ventilation",
        text: "Deep overhangs, louvered screens, and natural cross-ventilation reduce reliance on air conditioning.",
      },
      {
        name: "Green Roof",
        text: "Enhances insulation and provides a habitat for local flora and fauna.",
      },
      {
        name: "Locally Sourced Materials",
        text: "Use of stone, bamboo, and wood sourced within Okinawa, reducing carbon footprint while supporting local artisans.",
      },
    ],
    quote: {
      text: "Neozen transformed our vision into a breathtaking retreat. Hikari Villa feels like a natural extension of the landscape, blending luxury with tranquility. The sustainable design and attention to detail are truly exceptional, making the villa a serene escape.",
      name: "Yuki Yamamoto",
      role: "Owner of Hikari Villa",
    },
    awards: [
      { org: "International Design Awards", detail: "Excellence in luxury villa design.", year: "2022" },
      { org: "Asia-Pacific Green Building Award", detail: "Innovative eco-friendly residential design.", year: "2023" },
      { org: "Japan Institute of Architects", detail: "Seamless integration with nature.", year: "2023" },
    ],
    press: [
      { org: "Architectural Digest", detail: "Luxury and sustainability in harmony.", year: "2022" },
      { org: "Dwell Magazine", detail: "Minimalist design connected to nature.", year: "2023" },
      { org: "Elle Decor Japan", detail: "Top example of sustainable luxury.", year: "2023" },
    ],
  },
  {
    id: "yama-house",
    title: "Yama House",
    location: "Nagano, Japan",
    image: photo("66fe122ed0bd59a2455dc18e_image.webp"),
    thumb: photo("66debc64ce90710fae2f08f3_yama_img_1.webp"),
    category: "Residential",
    year: "2020",
    summary:
      "Yama House is a luxury mountain retreat in Nagano designed by Neozen. Completed in 2020, it offers a harmonious blend of traditional Japanese aesthetics and modern sustainability practices. The home is designed to feel like a natural extension of its environment, with high-performance insulation and geothermal systems ensuring year-round comfort.",
    details: [
      { label: "Location", value: "Nagano, Japan" },
      { label: "Year", value: "2021" },
      { label: "Bathroom", value: "3" },
      { label: "Bedroom", value: "4" },
      { label: "Total Land Size", value: "43,560 (1 acre)" },
      { label: "Category", value: "Residential" },
    ],
    images: {
      hero: photo("66debc64ce90710fae2f08f3_yama_img_1.webp"),
      portrait: photo("66fe122ed0bd59a2455dc18e_image.webp"),
      band: photo("66debc97ddabdb55f936b25c_yama_img_3.webp"),
      wide: photo("66debca08503446aa7cd88e1_yama_img_4.webp"),
      feature: photo("66debca321eb94b4e6b0c89f_yama_img_5.webp"),
      featureSide: photo("66debca78400f0934e63819a_yama_img_6.webp"),
      featureWide: photo("66debcabbc32fe401b7bbfda_yama_img_7.webp"),
    },
    features: [
      {
        name: "Geothermal Heating System",
        text: "Efficiently heats the home during winter while reducing energy consumption by 50%.",
      },
      {
        name: "Locally Sourced Timber and Stone",
        text: "The use of materials from nearby reduces transportation emissions and blends the home into its natural surroundings.",
      },
      {
        name: "Passive Cooling and Cross-Ventilation",
        text: "Designed to naturally cool the home during summer through strategic window placement and shading.",
      },
    ],
    quote: {
      text: "Neozen understood our desire to create a home that is both a sanctuary and an expression of the land. They transformed our vision into a living space that feels like an extension of the mountain itself. Every season brings a new experience.",
      name: "Haruto Tanaka",
      role: "Owner of Yama House",
    },
    awards: [
      { org: "Japan Institute of Architects", detail: "Excellence in mountain retreat design.", year: "2020" },
      { org: "Global Architecture & Design Awards", detail: "Innovative use of natural materials.", year: "2021" },
      { org: "Asia-Pacific Property Awards", detail: "Eco-friendly mountain home design.", year: "2020" },
    ],
    press: [
      { org: "Kinfolk Magazine", detail: "Slow living in harmony with nature.", year: "2020" },
      { org: "Elle Decor Japan", detail: "Contemporary design in natural settings.", year: "2021" },
      { org: "The Modern House Journal", detail: "Integration with rugged landscapes.", year: "2020" },
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.id === slug) ?? null;
}

export function getProjectIndex(slug) {
  return projects.findIndex((project) => project.id === slug);
}

export function getNextProject(slug) {
  const index = getProjectIndex(slug);
  if (index < 0) return projects[0];
  return projects[(index + 1) % projects.length];
}
