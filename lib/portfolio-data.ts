export const profile = {
  name: "Fatereh Tondro",
  title: "UI/UX Designer · Research Assistant · Exploring XR",
  tagline:
    "I bring extensive experience turning complex systems into simple, user-friendly interfaces, my background connects user research, interaction design, and front-end development, with a track record of solving tough workflow problems across diverse fields like healthcare, education, and immersive tech (VR/XR).",
  location: "Stockholm, Sweden",
  email: "fatereh.tondro@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatereh-tondro/",
  CV:"/Fatereh_Tondro_CV.pdf",
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
  | {
      kind: "callout"
      heading: string
      body?: string[]
      points?: { label: string; text: string }[]
    }
  | {
      kind: "decisions"
      heading: string
      intro?: string
      items: { title: string; body: string[] }[]
    }
  | { kind: "blocks"; heading: string; blocks: Block[] }

/** A screenshot with its intrinsic size, used by the rich "blocks" sections. */
export type Shot = { src: string; alt: string; width: number; height: number }

/** Caption rendered as a bold title followed by a sentence. */
export type Caption = { title: string; text: string }

export type Block =
  /** Paragraph; `lead` renders bold before `text`. */
  | { type: "p"; lead?: string; text?: string }
  | { type: "bullets"; items: { lead?: string; text: string }[] }
  /** Label/value pairs, e.g. the "In short" summary. */
  | { type: "summary"; items: { label: string; text: string }[] }
  | { type: "figure"; image: Shot; caption: Caption }
  /** A desktop screenshot beside a phone screenshot, sharing one caption. */
  | { type: "figurePair"; wide: Shot; narrow: Shot; caption: Caption }
  /** Numbered grid of screenshots, each with a short label. */
  | { type: "steps"; items: { label: string; image: Shot }[] }
  | {
      type: "linkCards"
      items: { eyebrow: string; title: string; text: string; href: string; linkLabel: string }[]
    }

export type Accent = "amber" | "indigo" | "teal" | "emerald" | "sky" | "rose" | "cyan" | "blue"

export type Project = {
  slug: string
  name: string
  summary: string
  /** Optional deck line shown under the title on the case study page. */
  tagline?: string
  tags: string[]
  category: string
  accent: Accent
  icon: string
  image: string
  /** Case study hero image; falls back to `image` (the home card cover) when absent. */
  hero?: Shot
  /** Slug of the project linked as "Next project"; defaults to the next one in the list. */
  next?: string
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
      "A clinic platform where staff build treatment plans and patients follow them, step by step.",
    tags: ["Web App", "eHealth", "Responsive"],
    category: "Web app / eHealth",
    accent: "teal",
    icon: "Stethoscope",
    image: "/projects/iqliniq.png",
    hero: {
      src: "/projects/iqliniq/hero.webp",
      alt: "The IQLINIQ service builder, where staff set up a service, behind the patient’s step-by-step treatment plan.",
      width: 2400,
      height: 1350,
    },
    next: "medical-report-generator",
    meta: [
      { label: "Timeline", value: "4 months" },
      {
        label: "My role",
        value: "UX/UI designer for the patient and admin sides, and parts of the clinician side",
      },
      {
        label: "Team",
        value: "Three designers, a project manager and developers, at Perfetto Gruppo (remote)",
      },
      { label: "Tools", value: "Figma · Minimals UI kit" },
    ],
    sections: [
      {
        kind: "blocks",
        heading: "In short",
        blocks: [
          {
            type: "summary",
            items: [
              {
                label: "Problem",
                text: "A psychology clinic ran multi-step assessments across spreadsheets and separate tools.",
              },
              {
                label: "Outcome",
                text: "IQLINIQ now powers a live online second-opinion service, with eight services and 16 specialists.",
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "About the project",
        blocks: [
          {
            type: "p",
            text: "IQLINIQ is a cloud-based system that runs a clinic’s daily work, from booking to session reports. It has four kinds of users:",
          },
          {
            type: "bullets",
            items: [
              {
                lead: "Patients and families",
                text: "book appointments (type, time, interpreter and language), follow a treatment plan of appointments, payments, forms and documents, and message the clinic. One family account can hold several patients.",
              },
              {
                lead: "Clinic staff and admins",
                text: "manage patients, appointments, forms and documents, and build the step-by-step plans patients follow.",
              },
              {
                lead: "Clinicians",
                text: "work from a to-do list, write reports with the AI report generator, and leave internal comments for colleagues.",
              },
              {
                lead: "Superusers",
                text: "decide what each staff member can see and do.",
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Context and constraints",
        blocks: [
          {
            type: "p",
            text: "IQLINIQ began with one psychology clinic in Canada. An assessment there is a chain of steps: consent, payment, forms, documents, several sessions and a report. The clinic was tracking all of it in spreadsheets and separate tools.",
          },
          {
            type: "p",
            text: "Tools we looked at handled booking or documentation, rarely both, and none let a clinic build its own multi-step plans. We compared Jane App, SimplePractice, TheraNest, Mend and Calendly.",
          },
          {
            type: "p",
            text: "In our calls, doctors and clinicians asked for a clear way to deliver therapy step by step, quick access to each client’s history, a clean schedule and faster session notes. The clinic’s brief added what admins needed: an overview of each client’s progress and simpler ways to manage services.",
          },
          {
            type: "p",
            text: "I designed the patient side for desktop, tablet and mobile, and the admin side for desktop. On the clinician side, I designed the to-do list, the client’s plan, reports and internal comments. A project manager handled the client.",
          },
          { type: "p", lead: "Constraints:" },
          {
            type: "bullets",
            items: [
              { text: "Four months for the core platform." },
              {
                text: "The Minimals UI kit as our base, which we extended with our own components: step blocks, appointment cards, progress indicators and report elements.",
              },
              {
                text: "Clinic staff aren’t technical, yet they had to set up services without a developer.",
              },
              { text: "Many bookings are made by a guardian for someone else, often a child." },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Key screens",
        blocks: [
          {
            type: "figure",
            image: {
              src: "/projects/iqliniq/service-builder.png",
              alt: "Service builder: a list of steps on the left, and the selected Consent form step on the right with its title, expiry in days, details, a clinic-approval checkbox and two conditions.",
              width: 1440,
              height: 1027,
            },
            caption: {
              title: "The service builder.",
              text: "Where clinic staff turn a treatment into steps and rules. The + between steps adds one in place.",
            },
          },
          {
            type: "figurePair",
            wide: {
              src: "/projects/iqliniq/patient-plan-desktop.webp",
              alt: "Patient’s plan for ASD Under 6 on desktop: six steps marked Done, Missed, Scheduled, Active and Locked, beside a card with the price, the amount paid and what is still owed.",
              width: 1440,
              height: 1158,
            },
            narrow: {
              src: "/projects/iqliniq/patient-plan-mobile.webp",
              alt: "The same plan on a phone: the summary card, then the first steps, marked Done and Missed.",
              width: 360,
              height: 1020,
            },
            caption: {
              title: "The patient’s plan, on desktop and mobile.",
              text: "What’s done, what needs action and what it costs. Each step’s state has its own colour, icon and label.",
            },
          },
          {
            type: "figure",
            image: {
              src: "/projects/iqliniq/clinician-to-do-list.webp",
              alt: "Clinician to-do list for Monday 10 March 2025: three appointments with time, client and location type, and buttons to see the location, enter the meeting or open the AI report.",
              width: 1920,
              height: 539,
            },
            caption: {
              title: "The clinician’s to-do list.",
              text: "Today’s appointments and unfinished reports, each with a shortcut to the AI report.",
            },
          },
        ],
      },
      {
        kind: "blocks",
        heading: "The service builder",
        blocks: [
          {
            type: "p",
            lead: "Problem.",
            text: "Every service is a chain of steps, and some can’t start until another is done. Staff needed to set this up without a developer.",
          },
          {
            type: "p",
            lead: "What I designed.",
            text: "A service is a list of steps, each one of eight types, such as appointment, form, payment or report. Steps can be dragged into order. Dragging is fiddly in a long list, though, so a “+” between steps inserts one exactly where it belongs.",
          },
          {
            type: "p",
            lead: "Rules as sentences.",
            text: "Each rule reads as a sentence with blanks: “This step is locked until the status in step [Payment] is [Done].” Staff can check it at a glance, and fixed patterns leave fewer ways to get a rule wrong.",
          },
          {
            type: "p",
            lead: "A safety net.",
            text: "A wrong lock would block real patients. So services save as drafts, staff preview exactly what the patient will see before publishing, and a step can be hidden to pause it without deleting it.",
          },
          {
            type: "steps",
            items: [
              {
                label: "Preview before publishing",
                image: {
                  src: "/projects/iqliniq/builder-preview.webp",
                  alt: "Preview of the ASD Under 6 service as a patient will see it, with Publish, Save Draft and Remove buttons above it.",
                  width: 1440,
                  height: 1027,
                },
              },
              {
                label: "A hidden step",
                image: {
                  src: "/projects/iqliniq/builder-hidden-step.webp",
                  alt: "A Video recording consent step with a yellow banner: this step is hidden, and clients can’t see it.",
                  width: 1440,
                  height: 1027,
                },
              },
              {
                label: "Unsaved changes",
                image: {
                  src: "/projects/iqliniq/builder-unsaved-changes.webp",
                  alt: "Dialog: you have unsaved changes, and leaving this step will discard your progress. Buttons: Leave Without Saving, and Save & Continue.",
                  width: 1440,
                  height: 1027,
                },
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Booking for the family",
        blocks: [
          {
            type: "p",
            lead: "Problem.",
            text: "One person is often the guardian for several patients, such as a parent with more than one child at the clinic. The clinic also serves many languages, and an interpreter costs extra.",
          },
          {
            type: "p",
            lead: "Options.",
            text: "We considered a separate account for each person, and a separate request for interpreters.",
          },
          {
            type: "p",
            lead: "What we chose.",
            text: "One four-step booking flow, run by the guardian, because young children can’t manage their own account. They first choose who the service is for, or register someone new with a referral code. The interpreter is an optional field, and a summary card beside every step updates the total straight away ($200 + $60 = $260), so families see the full cost before they pay.",
          },
          {
            type: "p",
            lead: "Payment and status.",
            text: "The clinic set the payment rules; I designed how they show. Cash and cheque only work for in-person visits, so for online visits they’re greyed out, with a line saying why. Each person’s appointments then appear on their own page, and every card shows its status and the next step. For example, “Clinic approval needed” keeps Enter Meeting disabled until the e-transfer is approved.",
          },
          {
            type: "steps",
            items: [
              {
                label: "Who it’s for",
                image: {
                  src: "/projects/iqliniq/booking-1-who-its-for.webp",
                  alt: "Booking step 1: choose Liam Durham or Emma Durham, or add a new client, and pick an optional interpreter language.",
                  width: 1138,
                  height: 567,
                },
              },
              {
                label: "Interpreter and price",
                image: {
                  src: "/projects/iqliniq/booking-2-confirm-and-price.webp",
                  alt: "Confirm step: Liam’s details with Persian as the interpreter language, and a summary card showing $200 plus $60 for the interpreter, $260 in total.",
                  width: 1138,
                  height: 629,
                },
              },
              {
                label: "Payment",
                image: {
                  src: "/projects/iqliniq/booking-3-payment.webp",
                  alt: "Payment step: a total of $260 with credit card selected. Cash and cheque are greyed out because this visit is online.",
                  width: 735,
                  height: 796,
                },
              },
              {
                label: "After booking: My appointments",
                image: {
                  src: "/projects/iqliniq/booking-4-my-appointments.webp",
                  alt: "My appointments: one card waits for clinic approval with Enter Meeting disabled, one was declined by the clinic and offers Complete Payment, and one is paid with Enter Meeting active.",
                  width: 1144,
                  height: 513,
                },
              },
            ],
          },
          {
            type: "p",
            lead: "Result.",
            text: "Booking an appointment inside a service is part of the live product today.",
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Finding the right care",
        blocks: [
          {
            type: "p",
            lead: "Problem.",
            text: "Patients start in different places. Some arrive with a referral for a service or a doctor; others only know what the problem is.",
          },
          {
            type: "p",
            lead: "What I designed.",
            text: "Three ways in: Services, Doctors and Specialties. Each doctor has a profile with their services and reviews. Patients then choose a service and how to meet: online by Zoom, in person or by phone. That choice comes before the calendar, because not every doctor offers every type, and it shapes what follows, such as payment options and the address or Zoom link.",
          },
          {
            type: "p",
            lead: "Picking a time with Calendly.",
            text: "A scheduler of our own would have needed its own research, so we used Calendly, which patients may already know, and planned our own for later. I designed the route around it. The doctors page explains that patients will go to the doctor’s calendar and can come back if the times don’t suit them. At the Select Appointment step of booking the calendar opens, and after choosing a time, patients return to IQLINIQ to pay.",
          },
          {
            type: "p",
            lead: "No dead ends.",
            text: "If a doctor isn’t available, the profile says so and the Book button is disabled. If the hand-back to payment fails, patients can try again or contact the clinic.",
          },
          {
            type: "steps",
            items: [
              {
                label: "Specialties",
                image: {
                  src: "/projects/iqliniq/care-1-specialties.webp",
                  alt: "Specialties tab: cards for Personality Disorder, Coaching, Couple Therapy, Behavioral Therapy and ASD, each with a See Details link.",
                  width: 1440,
                  height: 569,
                },
              },
              {
                label: "Doctors, with a note about the calendar",
                image: {
                  src: "/projects/iqliniq/care-2-doctors.webp",
                  alt: "Available doctors for a specialty, with a note that patients will go to the doctor’s calendar and can come back if the times don’t suit them.",
                  width: 1440,
                  height: 834,
                },
              },
              {
                label: "How to meet",
                image: {
                  src: "/projects/iqliniq/care-3-how-to-meet.webp",
                  alt: "Appointment type: online by Zoom, in person at the main clinic, or by phone.",
                  width: 598,
                  height: 415,
                },
              },
              {
                label: "Back to IQLINIQ to pay",
                image: {
                  src: "/projects/iqliniq/care-5-back-to-pay.webp",
                  alt: "Redirecting to complete payment, with Contact Us and Try Again buttons in case it stalls.",
                  width: 864,
                  height: 396,
                },
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "How I worked",
        blocks: [
          {
            type: "bullets",
            items: [
              {
                lead: "Research.",
                text: "We spoke with three doctors and clinicians at the clinic. A teammate led the calls, and I joined them.",
              },
              {
                lead: "Testing.",
                text: "We didn’t run usability tests. The clinic tried a build with sample data and reported problems, which we fixed. Designers and developers also reviewed each other’s work.",
              },
              {
                lead: "With developers.",
                text: "I handed off in Figma with specs, met the developers regularly, and checked their builds against my designs.",
              },
              {
                lead: "Accessibility.",
                text: "We relied on the Minimals kit’s defaults, as accessibility testing wasn’t in scope this time.",
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Outcome and reflection",
        blocks: [
          {
            type: "p",
            text: "IQLINIQ grew from a tool for one clinic into a platform others run under their own brand. Today it powers an online second-opinion service. Patients choose from eight services, from psychiatry to paediatrics, book a specialist and receive a written report. The service lists 16 specialists in two countries.",
          },
          {
            type: "p",
            text: "Its patient pages still use the service page and step-by-step plan I designed for the first clinic. I don’t have usage figures.",
          },
          { type: "p", text: "Two things I’d do differently:" },
          {
            type: "bullets",
            items: [
              {
                text: "Keep the predefined step types as templates, and let admins create new ones from the start.",
              },
              {
                text: "Check accessibility myself, with tools and WCAG, instead of trusting the UI kit.",
              },
            ],
          },
        ],
      },
      {
        kind: "blocks",
        heading: "Connected modules",
        blocks: [
          {
            type: "p",
            text: "IQLINIQ has two AI modules. Each works inside the platform and on its own, and each has its own case study.",
          },
          {
            type: "linkCards",
            items: [
              {
                eyebrow: "For clinicians",
                title: "AI Report Generator",
                text: "Clinicians record or upload a session, then review and approve the report it drafts. It opens from the to-do list and appointments, and also works as a separate tool.",
                href: "/work/medical-report-generator",
                linkLabel: "Read the case study",
              },
              {
                eyebrow: "For patients",
                title: "AI Health Assistant",
                text: "Helps patients describe their symptoms before a visit, through visual, step-by-step questions. It works inside IQLINIQ or on its own.",
                href: "/work/ai-health-assistant",
                linkLabel: "Read the case study",
              },
            ],
          },
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
    name: "AI Report Generator",
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
