export const thoughts = [
  {
    slug: "ai-adoption-is-org-design",
    title: "AI Adoption Is Org Design",
    summary:
      "The hard part is not getting access to tools. It is changing how teams decide, review, trust, and learn together.",
    body: [
      "Most engineering organizations start their AI adoption story with access: which tools are approved, who gets seats, what the security posture looks like, and where the billing lands. Those questions matter, but they are not the real transformation.",
      "The real work is organizational. Teams have to decide when generated code is acceptable, how review changes when prototypes appear faster, and how to keep judgment from being outsourced to whichever tool produced the first plausible answer. The best leaders are not just enabling tools. They are building shared habits around taste, verification, and learning.",
      "I think AI adoption succeeds when it becomes ordinary team behavior: pairing with agents, reviewing with evidence, documenting decisions, and making space for engineers to show working examples earlier. That is less glamorous than a big rollout, but it is where the durable change happens.",
    ],
  },
  {
    slug: "prototypes-beat-status",
    title: "Prototypes Beat Status",
    summary:
      "A lot of process can collapse into something smaller: frame the question, build the example, react to what is real.",
    body: [
      "A surprising amount of engineering process exists because teams need a way to reduce uncertainty. Roadmaps, planning meetings, status updates, and alignment docs all try to answer the same question: do we understand the problem well enough to move?",
      "AI-assisted development changes the cost of answering that question. When prototypes are cheaper, teams can replace some status-heavy rituals with artifacts people can actually inspect. A rough workflow, a working interaction, or a thin technical spike often reveals more than another round of abstract debate.",
      "That does not mean process disappears. It means the process should point toward evidence faster. The teams I am most interested in are the ones that can frame the question clearly, build the smallest useful example, and let the real thing improve the conversation.",
    ],
  },
  {
    slug: "product-minded-engineers-are-rising",
    title: "Product-Minded Engineers Are Rising",
    summary:
      "Engineers with customer context, technical taste, and good judgment are going to matter more, not less.",
    body: [
      "There is a version of the AI conversation that treats engineering as if implementation is the only scarce skill. If code gets cheaper, the thinking goes, maybe engineers become less central. I think the opposite happens for the best engineers.",
      "When the mechanics of building speed up, judgment becomes more visible. The valuable engineer is the one who can understand the customer, choose the right constraint, recognize when a prototype is lying, and know which tradeoffs are worth making. Technical taste and product context become force multipliers.",
      "This is good news for product-minded engineers. The people who can move between user needs, system design, and delivery pressure will thrive. Leadership's job is to give those engineers enough context, trust, and feedback to make that judgment useful across the organization.",
    ],
  },
];

export type Thought = (typeof thoughts)[number];
