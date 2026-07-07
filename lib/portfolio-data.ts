export const profile = {
  name: "Fatereh Tondro",
  title: "UI/UX Designer · Research Assistant · Exploring XR",
  tagline:
    "I design and build usable interfaces for complex, multi-role systems in healthcare, education, and XR, combining user research, interaction design, and front-end development.",
  location: "Stockholm, Sweden",
  email: "fatereh.tondro@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatereh-tondro/",
  CV:"https://drive.google.com/file/d/1dQDH0LM2JUwvl9I5gREB85-HzHTLM3t1/view?usp=drivesdk",
  about: [
    "I'm a UI/UX designer with over four years of experience and a background in software engineering. I've worked as a front-end developer and as an accessibility research assistant, so I can research what users need, design the experience around it, and understand how it gets built. Most of my work is on complex, multi-role systems in healthcare and education, where the main goal is making them simpler to use.",
    "I focus on clarity, consistency, and reducing friction so users can complete tasks without getting lost. My accessibility research background shaped how I work: I design for the full range of users, not only the average case. More recently I have been applying the same approach to XR, with an emphasis on keeping immersive experiences easy to use.",
  ],
}

export const skillGroups = [
  {
    label: "Research & Strategy",
    items: [
      "User Research",
      "User Interviews",
      "Usability Testing",
      "Competitive Analysis",
      "Information Architecture",
    ],
  },
  {
    label: "Design",
    items: [
      "UI Design",
      "UX Design",
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Design Systems",
    ],
  },
  {
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Angular", "SQL"],
  },
  {
    label: "XR Development",
    items: ["Unity", "C#", "Photon"],
  },
  {
    label: "Tools",
    items: ["Figma", "Miro", "Adobe XD", "Trello", "ClickUp"],
  },
]

export type Section =
  | { kind: "paragraphs"; heading: string; body: string[] }
  | { kind: "list"; heading: string; intro?: string; items: string[] }
  | {
      kind: "subgroups"
      heading: string
      intro?: string
      groups: { label: string; intro?: string; items?: string[]; body?: string[] }[]
    }
  | {
      kind: "challenges"
      heading: string
      pairs: { challenge: string; solution: string }[]
    }

export type Accent = "amber" | "indigo" | "teal" | "emerald" | "sky" | "rose" | "cyan" | "blue"

export type Project = {
  slug: string
  name: string
  summary: string
  tags: string[]
  category: string
  accent: Accent
  icon: string
  image: string
  meta: { label: string; value: string }[]
  overview?: string[]
  sections: Section[]
  demo?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: "iqliniq",
    name: "IQLINIQ",
    summary:
      "A clinic management system that streamlines treatment workflows, scheduling, reporting, and communication between patients, clinicians, and doctors.",
    tags: ["Web App", "eHealth", "AI", "Dashboards"],
    category: "Web App / eHealth",
    accent: "teal",
    icon: "Stethoscope",
    image: "/projects/iqliniq.png",
    meta: [
      { label: "Timeline", value: "4 months" },
      { label: "My Role", value: "UI Designer & UX Researcher" },
      { label: "Team", value: "3 designers working on different modules" },
      { label: "Tools", value: "Figma · Minimals UI Design System · Miro · ClickUp · User Testing" },
    ],
    overview: [
      "IQLINIQ is a clinic management system designed to streamline treatment workflows, scheduling, reporting, and communication between patients, clinicians, and doctors. The platform was originally built for AllBrains Clinic in Canada, then expanded into a scalable solution that can support any clinic with multi-step services.",
      "I focused on structuring complex flows, reducing user friction, and designing a clean, component-based interface.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "Psychological clinics often rely on scattered tools for handling appointments, documents, progress tracking, and communication between patients, clinicians, and doctors. Key problems:",
        items: [
          "No flexible system for multi-step treatment workflows",
          "Patient progress is tracked manually",
          "Clinicians spend too much time on documentation",
          "Patients struggle to understand treatment steps",
          "Booking systems aren't designed for clinical complexity",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Research Approach",
        body: [
          "To understand real-world workflows and challenges, we used observational research inside the clinic, informal interviews with admins, clinicians, and doctors, analysis of existing workflows and documents, and comparative review of current market tools.",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "Through direct observation, we noticed:",
        items: [
          "Patient progress was tracked with spreadsheets and manual notes",
          "Appointments, tasks, and documents lived in separate tools",
          "Long-term treatment programs were difficult to follow",
          "Patients often missed forms or didn't know the next step",
          "Clinicians had no structured way to deliver follow-up tasks",
        ],
      },
      {
        kind: "subgroups",
        heading: "Staff Interviews",
        groups: [
          {
            label: "Admins wanted",
            items: [
              "A clear overview of client progress",
              "Easier task and service management",
              "Improved visibility over treatment steps",
            ],
          },
          {
            label: "Clinicians needed",
            items: [
              "Faster, more consistent documentation",
              "A structured way to deliver therapy steps",
              "Easy access to client history and tasks",
            ],
          },
          {
            label: "Doctors required",
            items: [
              "A clean schedule view",
              "Tools to write session notes efficiently",
              "Better access to service and appointment details",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "Competitive Analysis",
        intro: "We analyzed Jane App, SimplePractice, TheraNest, Mend Telehealth, and Calendly. Findings:",
        items: [
          "Existing tools are good at booking or documentation, rarely both",
          "None offer a dynamic workflow builder suitable for psychological treatments",
          "UI patterns are often heavy and overwhelming",
        ],
      },
      {
        kind: "subgroups",
        heading: "Design System",
        intro:
          "We built IQLINIQ using the Minimals UI Design System, a lightweight system known for its clarity and simplicity. Its clean structure made it ideal for a complex, content-heavy platform.",
        groups: [
          {
            label: "Benefits",
            items: [
              "Predictable interactions",
              "Accessible typography and spacing",
              "Clean, distraction-free layouts",
              "Consistent components across all roles",
            ],
          },
          {
            label: "Custom Extensions",
            items: [
              "Modular service blocks",
              "Appointment cards",
              "Progress indicators",
              "Report and note elements",
              "Task management components",
            ],
          },
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Flows between patients, clinicians, and doctors were deeply intertwined.",
            solution:
              "We conducted multiple user tests and reorganized the information architecture to reduce complexity while keeping flexibility. Repeated iterations helped us refine details until the experience worked smoothly for everyone using it.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Workflow became more structured and centralized",
          "Patients experienced more clarity and fewer mistakes",
          "Clinicians reduced reporting time with AI",
          "Admins found it easier to track service steps and tasks",
          "Communication between roles became more unified",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Making the service builder completely component-based",
          "Enhancing analytics & tracking tools",
          "Expanding AI capabilities",
          "Introducing more clinic-level customization options",
        ],
      },
    ],
  },
  {
    slug: "hoperise",
    name: "Hoperise",
    summary:
      "An AI-powered learning companion that helps users start new skills with clarity and confidence through personalized roadmaps and real mentors.",
    tags: ["Education", "AI", "Mentorship", "Web"],
    category: "Education / AI",
    accent: "emerald",
    icon: "GraduationCap",
    image: "/projects/hoperise.png",
    meta: [
      { label: "Timeline", value: "3 months" },
      { label: "My Role", value: "UX Research, Design, and Prototyping" },
      { label: "Team", value: "One other designer; I led the core flows and structure" },
      { label: "Tools", value: "Figma · Miro · Trello" },
    ],
    overview: [
      "Hoperise is an AI-powered learning companion designed to help users start new skills with clarity and confidence. It generates personalized roadmaps, guides learners through each step with an AI mentor, and connects them to real educators when deeper guidance is needed. The goal: reduce overwhelm and make skill-building structured, achievable, and motivating.",
      "I contributed end-to-end across design and research: UX research, user flows, interaction design, UI design, prototyping, and design system creation.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "People who want to start learning a new skill often struggle with too much information, unclear paths, trouble finding trustworthy mentors, and fading motivation. Key problems:",
        items: [
          "Overwhelming amounts of information when starting a new skill",
          "Unclear learning paths and progression",
          "Difficulty finding trustworthy mentors",
          "Losing motivation due to lack of structure",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "Our research surfaced:",
        items: [
          "Learners often abandon courses when they don't understand the next step",
          "Manual onboarding process is time-consuming and inconsistent",
          "Mentors struggle to track learner progress without a unified system",
        ],
      },
      {
        kind: "list",
        heading: "Competitive Analysis",
        intro: "We analyzed Masterclass, Skillshare, Coursera, Codecademy, and Maven. Findings:",
        items: [
          "Existing platforms excel at course delivery but lack personalization",
          "Mentor access is limited or requires premium pricing",
          "UI is often overwhelming with too many choices",
          "Lack of clear roadmaps for beginners",
          "Limited community or peer support features",
        ],
      },
      {
        kind: "list",
        heading: "Key Research Insights",
        items: [
          "Beginners need clear, structured roadmaps tailored to their goals",
          "Human mentorship is essential for motivation and deeper learning",
          "AI guidance should simplify, not overwhelm",
          "Platform must work across diverse skill categories",
          "Social proof and learning community matter for engagement",
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Designing roadmaps as flexible, reusable components that could adapt to any skill.",
            solution:
              "We created a modular roadmap system that worked for 'UI Design Basics' to 'Learn Python' to 'Improve Public Speaking.' This required iterative testing to ensure clarity and consistency without losing personalization.",
          },
          {
            challenge: "Balancing AI guidance with human mentorship without overwhelming users.",
            solution:
              "We introduced the features gradually. Onboarding starts with AI, and mentors come in once learners are comfortable. That staged approach kept the cognitive load down.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Reduced confusion and cognitive load for new learners",
          "Guided learners step-by-step through their chosen skill",
          "Made roadmap navigation intuitive and flexible",
          "Let AI and human mentorship work together without friction",
          "Created a scalable structure that works for diverse skills",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Reduce some features to avoid overwhelming first-time users",
          "Simplify certain flows to make the learning journey even more straightforward",
          "Introduce 'beginner' vs 'advanced' modes for different user types",
          "Add more peer-to-peer learning features and community challenges",
          "Expand AI mentor capabilities with more specialized guidance",
        ],
      },
    ],
  },
  {
    slug: "breeze",
    name: "Breeze",
    summary:
      "An application for children experiencing mental health challenges, connecting patients, parents, and clinicians with mood tracking and emergency support.",
    tags: ["Mobile", "Mental Health", "Safety"],
    category: "Mobile / Mental Health",
    accent: "sky",
    icon: "HeartPulse",
    image: "/projects/breeze.png",
    meta: [
      { label: "Timeline", value: "4 months (2 months per side)" },
      { label: "My Role", value: "Designed the doctor and parent interfaces" },
      { label: "Team", value: "Another team member designed the patient side" },
      { label: "Tools", value: "Miro · Adobe XD" },
    ],
    overview: [
      "Breeze is an application designed for children experiencing suicidal thoughts or related mental health challenges. It connects patients, parents, and clinicians, offering mood tracking, personalized guidance, emergency support, and social connections. The platform aims to monitor emotional wellbeing, facilitate communication, and provide timely interventions.",
      "Responsibilities included UX research, user flows, wireframes, and UI design.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "Understanding user needs across multiple stakeholder groups to build effective mood tracking and support. Key problems:",
        items: [
          "Clinicians lacked structured insights into patient emotional trends",
          "Parents had limited visibility into their child's wellbeing",
          "Children needed safe ways to express moods and receive support",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "Our research highlighted:",
        items: [
          "Clinicians had no at-a-glance view of how a child's mood was trending, so emotional history had to be pieced together by hand",
          "Parents largely depended on what their child chose to share, leaving gaps exactly where visibility mattered most",
          "The tools already in use were fragmented across platforms, with limited real-time communication",
        ],
      },
      {
        kind: "subgroups",
        heading: "Staff Interviews",
        groups: [
          { label: "Admins wanted", items: ["Real-time monitoring tools", "Data analytics for trend analysis"] },
          {
            label: "Clinicians needed",
            items: [
              "Structured patient mood tracking",
              "Communication channels with parents",
              "Personalized intervention tools",
            ],
          },
          {
            label: "Doctors required",
            items: ["Emergency alert systems", "Patient data history", "Chat and guidance distribution"],
          },
        ],
      },
      {
        kind: "list",
        heading: "Key Research Insights",
        items: [
          "Need for simplified, calm interfaces for sensitive content",
          "Importance of multi-stakeholder communication",
          "Emergency support accessibility is critical",
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Designing interfaces for sensitive mental health information.",
            solution:
              "Used calm, supportive color palettes and clear labeling to reduce anxiety while maintaining professionalism.",
          },
          {
            challenge: "Ensuring clarity while maintaining privacy and accessibility.",
            solution: "Structured dashboards with role-based views and encrypted communication channels.",
          },
          {
            challenge: "Creating dashboards that present complex emotional data simply.",
            solution: "Iterative prototyping and user feedback from clinicians ensured usability and safety.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Parents can monitor their child's wellbeing in real-time",
          "Doctors gain actionable insights to provide timely interventions",
          "Communication between parents, doctors, and children is streamlined",
          "Children have access to support and guidance safely",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Enhanced personalization for guidance and tips",
          "More interactive visualizations for mood trends",
          "Simplifying navigation for first-time parent users",
        ],
      },
    ],
  },
  {
    slug: "socialin",
    name: "SOCIALIN",
    summary:
      "A platform that helps people create, organize, and join events — online or in-person — and find others who share their interests.",
    tags: ["Social", "Events", "Discovery"],
    category: "Social / Events",
    accent: "rose",
    icon: "CalendarHeart",
    image: "/projects/socialin.png",
    meta: [
      { label: "Timeline", value: "2 months" },
      { label: "My Role", value: "End-to-end design (UX research → prototyping)" },
      { label: "Team", value: "Solo project" },
      { label: "Tools", value: "Figma · Miro · Trello" },
    ],
    overview: [
      "Socialin helps people create, organize, and join events, online or in-person. Users can host free or paid gatherings, meet new people, and find others who share their interests. The goal was to make event creation, discovery, and social connection easy and flexible.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "Creating, discovering, and joining events is spread across a patchwork of tools that rarely work well together. Key problems:",
        items: [
          "Users found event creation flows confusing or overwhelming",
          "Discovering relevant events was time-consuming",
          "Social interactions felt fragmented across different platforms",
          "Payment options and attendee management needed clarity",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "From the survey responses, I saw:",
        items: [
          "Creating an event was the most common complaint, with people describing too many steps before they could publish",
          "For finding events, people fell back on word of mouth because in-app recommendations rarely matched what they cared about",
          "Most treated event apps and their social apps as separate worlds",
          "For paid events, payment and tracking who was coming were the parts people felt least confident about",
        ],
      },
      {
        kind: "list",
        heading: "Competitive Analysis",
        intro: "I analyzed Eventbrite, Meetup, and Facebook Events. Findings:",
        items: [
          "Event creation often has too many steps",
          "Discovery algorithms are not intuitive",
          "Limited social networking integration",
        ],
      },
      {
        kind: "list",
        heading: "Key Research Insights",
        items: [
          "Users need simplified event creation",
          "Social discovery is as important as event discovery",
          "Payment and attendee management must be transparent",
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Balancing simplicity with functionality for both event creators and attendees.",
            solution: "Iterative testing and prototyping ensured the flow was streamlined while retaining core functionality.",
          },
          {
            challenge: "Designing flexible components that work across multiple event types.",
            solution: "Created a modular component system with variants for different event configurations.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Event creation and discovery flows became more intuitive",
          "Users can easily connect with like-minded individuals",
          "The platform combines social networking and event management in one place",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Make event creation even easier, reducing steps and cognitive load",
          "Simplify feature complexity for first-time users",
          "Explore personalized event recommendations based on user behavior",
        ],
      },
    ],
  },
  {
    slug: "ai-health-assistant",
    name: "AI Health Assistant",
    summary:
      "An intelligent module that helps patients understand their symptoms before visiting a clinic, through visualizations and AI-guided questions.",
    tags: ["Mobile", "Healthcare", "AI"],
    category: "Mobile / Healthcare",
    accent: "cyan",
    icon: "Bot",
    image: "/projects/ai-health-assistant.png",
    meta: [
      { label: "Timeline", value: "~2 weeks" },
      { label: "My Role", value: "End-to-end design: UX flows, UI design, prototyping" },
      { label: "Team", value: "Solo" },
      { label: "Tools", value: "Figma · Miro" },
    ],
    overview: [
      "The AI Health Assistant is an intelligent module that helps patients better understand their symptoms before visiting a clinic. It asks users about their symptoms through visualizations and questions, provides tailored tips and guidance using AI, and supports patient awareness and preparation before consultations. Works independently or as a module within IQLINIQ.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "Patients often arrive at a clinic unsure how to describe what they're feeling. Generic symptom checkers feel clinical and raise anxiety instead of easing it. Key problems:",
        items: [
          "Patients often feel uncertain about their symptoms before visiting a clinic",
          "Many don't know how to track or interpret symptoms effectively",
          "Without preparation, patients arrive unsure how to describe what they're feeling, which slows the consultation",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "My research surfaced:",
        items: [
          "In existing tools, symptom input was almost always text-heavy and clinical, assuming users already knew the medical words",
          "Very few tools used a conversational or visual approach, even though that's what actually lowers health anxiety",
          "Most were vague about whether they offered guidance or a diagnosis, and that ambiguity was where user trust broke down",
        ],
      },
      {
        kind: "list",
        heading: "Key Research Insights",
        items: [
          "Tone and visual design are critical for reducing health anxiety",
          "Step-by-step AI questioning makes symptom gathering feel natural",
          "Clear communication about the AI's role reduces confusion and builds trust",
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Ensuring clarity that the tool is for guidance, not treatment.",
            solution:
              "Clear communication, appropriate disclaimers, and visual design that feels supportive rather than clinical.",
          },
          {
            challenge: "Designing adaptive question flows that feel intuitive and natural.",
            solution: "Multiple prototypes and feedback loops with clinicians and patients ensured usability and trustworthiness.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Helped patients better understand and track their symptoms",
          "Increased patient engagement and preparedness for clinical visits",
          "Seamlessly integrated into IQLINIQ while maintaining standalone flexibility",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Enhanced personalization of tips based on symptom patterns",
          "Integration with wearable health data",
          "Multi-language support for broader accessibility",
        ],
      },
    ],
  },
  {
    slug: "medical-report-generator",
    name: "Medical Report Generator",
    summary:
      "An intelligent module that assists clinicians by automatically creating structured reports from anonymized patient interactions.",
    tags: ["Web App", "Healthcare", "AI"],
    category: "Web App / Healthcare",
    accent: "blue",
    icon: "FileText",
    image: "/projects/medical-report-generator.png",
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "My Role", value: "End-to-end design + integration with IQLINIQ" },
      { label: "Team", value: "Solo design" },
      { label: "Tools", value: "Figma · Miro" },
    ],
    overview: [
      "The AI Report Generator is an intelligent module designed to assist clinicians by automatically creating reports based on patient interactions. Originally part of IQLINIQ, it can also function as a standalone tool. It transcribes audio recordings anonymously and combines them with existing patient data and prior reports to generate structured, actionable clinical reports.",
    ],
    sections: [
      {
        kind: "list",
        heading: "Problem Space",
        intro:
          "Clinicians spend a big chunk of each day writing session reports, time taken straight from patient care. Key problems:",
        items: [
          "Clinicians spend significant time writing session reports, reducing time for patient care",
          "Manual documentation can lead to inconsistencies and delayed follow-ups",
          "Trust in AI-generated content is critical in clinical settings",
        ],
      },
      {
        kind: "list",
        heading: "Key Observation Insights",
        intro: "My research surfaced:",
        items: [
          "Clinicians described report-writing as unavoidable overhead that competed directly with time spent on patients",
          "When documentation lagged behind sessions, detail and consistency slipped and follow-ups got delayed",
          "Existing automation tools missed clinical context and couldn't guarantee privacy, so clinicians didn't trust them. Anonymity was the precondition for using AI on sessions at all",
        ],
      },
      {
        kind: "list",
        heading: "Key Research Insights",
        items: [
          "Clinicians need to trust and verify AI-generated content",
          "Privacy and anonymity are non-negotiable",
          "Seamless integration with existing workflows is essential",
        ],
      },
      {
        kind: "challenges",
        heading: "Challenges & Solutions",
        pairs: [
          {
            challenge: "Balancing privacy, automation, and trust in AI-generated content.",
            solution:
              "Clear labeling of AI vs. human input, strong privacy measures, and a focus on clinician review and approval.",
          },
          {
            challenge: "Designing a workflow that fits into how clinicians already work.",
            solution: "Iterative testing with mock sessions and clinician feedback ensured clarity, usability, and reliability.",
          },
        ],
      },
      {
        kind: "list",
        heading: "Outcomes",
        items: [
          "Reduced time required for report writing",
          "Increased consistency and completeness of clinical documentation",
          "Provided clinicians with actionable insights more quickly",
        ],
      },
      {
        kind: "list",
        heading: "Future Improvements",
        items: [
          "Enhanced transcription accuracy for medical terminology",
          "Integration with additional patient data sources",
          "Template customization for different clinical specialties",
        ],
      },
    ],
  },
    {
    slug: "solarxr",
    name: "SolarXR",
    summary:
      "Explore the benefits of solar panels with real-time statistics for your house, in Mixed Reality.",
    tags: ["XR", "Mixed Reality", "Unity", "Data Viz"],
    category: "XR / Mixed Reality",
    accent: "amber",
    icon: "Sun",
    image: "/projects/solarxr.png",
    meta: [
      { label: "Project Type", value: "University project, Stockholm University" },
      { label: "My Role", value: "Designer, Researcher & Developer" },
      { label: "Team", value: "Evgeniia Dolgikh, Fatereh Tondro, Ernesto Galarza" },
      { label: "Tools", value: "Unity · C# · Photon · Meta Quest · Meta XR SDK · PVGIS" },
    ],
    overview: [
      "A collaborative Mixed Reality tool for Meta Quest, built as a university project at Stockholm University, that overlays live 3D data onto a physical model of a house, so multiple users can explore and optimize solar energy together in real time.",
      "Merged a tangible physical model with digital data visualization and real-time multi-user networking (Photon), so several people in headsets could see and interact with the same simulation at once. It's one shared space, part physical and part digital.",
      "Brought together Unity/C# development, 3D interaction design, and collaborative XR to turn abstract technical data into something spatial, hands-on, and multiplayer.",
    ],
    sections: [
      {
        kind: "paragraphs",
        heading: "Introduction",
        body: [
          "SolarXR is a Mixed Reality project exploring the efficiency and benefits of solar panels, tailored specifically to your location. It lets users see, in real time, what solar energy could mean for their own home rather than relying on abstract numbers.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Design Process",
        body: [
          "The design process started with a brainstorming session where each of us focused on ideas for an immersive experience, following the Digital Twin concept, which meant building a living virtual counterpart of a real house that users could interact with directly.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Digital Twin with Solar Panels",
        body: [
          "We built a Digital Twin of a residential house in Unity. This virtual representation lets users interactively explore the installation and performance of solar panels under different conditions, such as roof tilt angles and panel quantities.",
          "The Digital Twin is enriched with real-world data from the Photovoltaic Geographical Information System (PVGIS), provided by the European Commission's Joint Research Centre (JRC). By integrating this reliable dataset, the system gives realistic estimations of solar energy production based on geographical location, roof orientation, and other environmental parameters. It also supports collaborative adjustments through Photon for multi-user experiences.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Architecture",
        body: [
          "To understand how much energy solar panels produce depending on their installation angle, we developed a web service powered by PVGIS data. Photon then layers real-time networking on top, so the entire interaction becomes collaborative and shared across everyone in the session.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "User Testing",
        body: [
          "The demo version of the experience was presented to and tested by several people, who gave us valuable feedback. Based on it, we refined how the experience is presented and made minor changes to the gameplay and UI elements, such as the menu, to make the overall flow smoother for users.",
        ],
      },
      {
        kind: "list",
        heading: "Features",
        intro: "SolarXR includes the following features:",
        items: [
          "A virtual house where users can control their surroundings, adjusting sound level, light flickering, and the movement of people.",
          "A configuration panel that guides users to a Safe Space if they feel uncomfortable and want to pause the experience.",
          "An interactive map with three city buttons, used to select the reference location for displaying the solar energy produced there.",
        ],
      },
    ],
    demo: {
      label: "Watch the demo video",
      href: "https://drive.google.com/file/d/1TLQLkP2sWuyGZj6iuh0IJgn3bl3QgaqV/view",
    },
  },
  {
    slug: "agoraquest",
    name: "AgoraQuest",
    summary: "A Tangible VR Experience for Confronting Social Anxiety.",
    tags: ["XR", "VR", "Unity", "Research"],
    category: "XR / VR",
    accent: "indigo",
    icon: "Glasses",
    image: "/projects/agoraquest.png",
    meta: [
      { label: "Project Type", value: "University project, Stockholm University" },
      { label: "My Role", value: "Designer, Researcher & Developer" },
      {
        label: "Tools",
        value: "Unity · C# · Arduino · Heart Rate Sensor · Haptic Feedback · Hand Tracking",
      },
    ],
    overview: [
      "A VR application built as a university project at Stockholm University, designed to help researchers study social anxiety by recreating social environments and pairing them with physical, tangible interfaces and live biometric data.",
      "Wired a heart rate sensor and a haptic feedback vibrator to the VR experience through an Arduino, so the user's physiological response was captured in real time and the simulation could respond through physical feedback. The result was a live loop between the body and the virtual environment.",
      "As designer, researcher, and developer, I took it through full iterative cycles: designing, building in Unity/C#, testing the hardware and software integration, and refining. It showed I can prototype experimental, sensor-driven XR end to end, even in a sensitive domain like mental health.",
    ],
    sections: [
      {
        kind: "paragraphs",
        heading: "Introduction",
        body: [
          "AgoraQuest is a Virtual Reality experience for practicing how to cope with social anxiety. It places the user in a virtual world crowded with people, recreating the discomfort of a busy social setting so they can face that pressure safely and at their own pace. A heart rate sensor and a physical button, wired to the headset through an Arduino, detect when the user is becoming overwhelmed, and the experience responds with guided coping practices or a calming scene. The aim is both to help people build tolerance to stressful social situations and to give others a clearer sense of what social anxiety feels like.",
        ],
      },
      {
        kind: "paragraphs",
        heading: "Design Process",
        body: [
          "The project began with literature research on the use of VR for mental health education, followed by group discussions to settle on a focus and a brainstorming session to shape the concept and name. From there the team defined the core experience: a crowded social scene, a safe way to step out of it, and a feedback loop connecting the user's real-world physiological state to the virtual environment.",
        ],
      },
      {
        kind: "list",
        heading: "Features",
        items: [
          "A crowded virtual environment that recreates the discomfort of a busy social setting.",
          "A heart rate sensor and a physical button wired to the headset through an Arduino, linking the user's real-world state to the virtual experience.",
          "Haptic feedback through a hand-worn vibration device, mirrored by a vibration watch shown in the virtual world.",
          "A calming scene the user can switch to when they feel overwhelmed, to pause and recover before continuing.",
          "Hand-tracked interactions: poke to press buttons, ray to select scenes and menu options, and grab to handle objects.",
          "A virtual watch that displays the user's live heart rate during the experience.",
        ],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
