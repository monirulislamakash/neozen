import { images } from "@/lib/images";

export const serviceIntro =
  "At Neozen, service is the foundation of everything we do. Our approach goes beyond fulfilling client needs—it’s about delivering thoughtful, innovative solutions that are perfectly aligned with your vision and the environment.";

export const serviceCards = [
  {
    id: "consultation",
    title: "Design Consultation",
    number: "(1)",
    image: images.serviceItem1,
    about:
      "At Neozen, every project starts with understanding your unique needs. Our design consultation service offers expert guidance, helping you shape ideas into tangible plans that align with both functionality and sustainability. From conceptual sketches to detailed design strategies, our team ensures your vision is fully realized, down to the last detail.",
    included: [
      "Initial concept meetings and workshops",
      "Sustainability assessments",
      "Site analysis and feasibility studies",
      "Design development and refinement",
    ],
  },
  {
    id: "management",
    title: "Project Management",
    number: "(2)",
    image: images.serviceItem2,
    about:
      "Flawless execution is key to successful projects. Neozen’s project management service ensures that every phase—from planning to construction—is handled with the utmost care and attention to detail. We coordinate every aspect, keeping timelines on track and quality uncompromised, while staying aligned with your goals and budget.",
    included: [
      "Full project coordination",
      "Timeline and budget management",
      "Quality control and site supervision",
      "Stakeholder communication and reporting",
    ],
  },
  {
    id: "custom",
    title: "Custom Solutions",
    number: "(3)",
    image: images.serviceItem3,
    about:
      "No two projects are the same, and neither are our solutions. Neozen offers custom architectural services designed to meet your unique needs, whether it’s integrating cutting-edge sustainability features or creating a design that resonates with the local culture. We take pride in delivering personalized solutions that go beyond expectations.",
    included: [
      "Tailored design and material selection",
      "Adaptable and scalable architectural solutions",
      "Integration of cultural and environmental elements",
      "Innovative design technologies and methods",
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability Consulting",
    number: "(4)",
    image: images.serviceItem4,
    about:
      "Sustainability is at the heart of everything we do. Our sustainability consulting service offers deep expertise in integrating green practices across all stages of your project. Whether you’re looking for energy-efficient designs, sustainable certifications, or advanced eco-friendly technologies, we provide the guidance and solutions to help your project leave a positive, lasting impact.",
    included: [
      "Green certifications and compliance",
      "Energy efficiency planning",
      "Resource management and waste reduction",
      "Sustainable materials sourcing and recommendations",
    ],
  },
];

export const serviceProcess = [
  {
    id: "discovery",
    number: "(1)",
    title: "Discovery & Visioning",
    summary:
      "We start by deeply understanding your goals, style preferences, and needs through collaborative workshops and site visits.",
    activities: [
      "Initial consultations and workshops",
      "Site analysis and project scoping",
      "Vision boards and concept sketches",
    ],
  },
  {
    id: "design",
    number: "(2)",
    title: "Design Development",
    summary:
      "Our design team translates ideas into detailed plans and renders, integrating sustainability and your feedback at every step.",
    activities: [
      "Detailed design plans and 3D visualizations",
      "Material selection and sustainability assessments",
      "Client feedback and design refinements",
    ],
  },
  {
    id: "planning",
    number: "(3)",
    title: "Planning & Coordination",
    summary:
      "We handle all logistics, permits, and coordination while managing timelines and budgets to keep everything on track.",
    activities: [
      "Budget planning and timeline management",
      "Permit applications and approvals",
      "Vendor selection and project coordination",
    ],
  },
  {
    id: "build",
    number: "(4)",
    title: "Build & Execute",
    summary:
      "During the build phase, our project managers ensure construction runs smoothly with a focus on quality control and communication.",
    activities: [
      "On-site supervision and quality control",
      "Communication with contractors and suppliers",
      "Progress reporting and client check-ins",
    ],
  },
  {
    id: "handover",
    number: "(5)",
    title: "Final Touches & Handover",
    summary:
      "We focus on the finishing details, conduct thorough inspections, and deliver a seamless handover for a perfect result.",
    activities: [
      "Final inspections and quality checks",
      "Client walkthroughs and feedback",
      "Handover package and post-project support",
    ],
  },
];

export const simplicityPhotos = [
  {
    src: images.serviceScroll2,
    className: "is-top-wide",
    drift: 90,
  },
  {
    src: images.serviceScroll3,
    className: "is-top-square",
    drift: 220,
  },
  {
    src: images.serviceScroll1,
    className: "is-top-portrait",
    drift: 140,
  },
  {
    src: images.serviceScroll4,
    className: "is-low-portrait",
    drift: 60,
  },
  {
    src: images.serviceBigText,
    className: "is-low-wide",
    drift: 110,
  },
  {
    src: images.serviceScroll5,
    className: "is-low-square",
    drift: 40,
  },
];
