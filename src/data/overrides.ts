/**
 * LK Consulting and Advisory — lkconsulting.shop
 * LK CONSULTING AND ADVISORY LTD, company no. 14769832, City of London.
 * SIC: 70229 Management consultancy activities other than financial management.
 *
 * The SIC code excludes financial management, so the copy stays well away from
 * anything resembling financial or investment advice, which is regulated by
 * the FCA. The angle is operations: how work actually gets done.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Management consultancy in the City of London',
      description:
        'LK Consulting and Advisory Ltd, registered in England and Wales (company no. 14769832). Management consultancy for how a business actually runs, day to day.',
    },
    hero: {
      eyebrow: 'Management consultancy, City of London',
      titleLead: 'The problem is rarely',
      titleMark: 'the one you were told about',
      lead:
        'Most consultancy briefs describe a symptom. The work worth paying for is finding what is actually causing it, saying so plainly, and leaving you with something you can act on next week.',
      secondaryCta: 'What we do',
      visualLabel: 'On the register since 2023',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What separates useful advice from a deck',
      subtitle: 'Four things we hold to on every engagement.',
      items: [
        {
          icon: 'search',
          title: 'Diagnose before prescribing',
          text: 'We spend the first part of any engagement working out what is really going on, including when that contradicts the brief we were given.',
        },
        {
          icon: 'users',
          title: 'Talk to the people doing the work',
          text: 'The team running a process daily knows exactly where it breaks. Most of the answer is already inside the business.',
        },
        {
          icon: 'compass',
          title: 'Recommendations with an owner',
          text: 'Every recommendation names who would do it and roughly what it costs. Advice nobody can action is decoration.',
        },
        {
          icon: 'shield',
          title: 'Clear about our limits',
          text: 'We do not give financial, investment or legal advice. Where a question needs a regulated adviser, we say so.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Four kinds of engagement',
      subtitle: 'From a short diagnostic to sustained support through a change.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'The process',
      title: 'From brief to something that sticks',
      subtitle: 'Four stages, with the uncomfortable conversation early rather than late.',
      steps: [
        {
          title: 'Agree the real question',
          text: 'We test the brief before accepting it. It is common for the presenting problem to be a symptom of something else entirely.',
        },
        {
          title: 'Look at how work actually flows',
          text: 'Time with the people doing the work, and with the numbers. What is documented and what happens are rarely the same thing.',
        },
        {
          title: 'Report, with options',
          text: 'What we found, what we would do about it, what each option costs and what it would take. Written so you can hand it to your board.',
        },
        {
          title: 'Support the change, if you want it',
          text: 'Plenty of clients take the report and run it themselves. Where they want help landing it, we stay for an agreed period with a defined end.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are instructing',
      subtitle: 'Taken from the public register, so you can verify it independently.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'What clients ask before committing budget.',
      items: [
        {
          q: 'Do you provide financial or investment advice?',
          a: 'No. Our SIC classification is management consultancy other than financial management, and that boundary is real rather than cosmetic. Financial and investment advice in the UK is regulated by the Financial Conduct Authority, and we are not authorised to give it. Where a question turns on that, we will say so and tell you what kind of adviser you need.',
        },
        {
          q: 'How is an engagement scoped and priced?',
          a: 'We agree the question, the access we need, the people involved, the output and the duration in writing before starting. If the work turns out to be materially different from what we scoped, we stop and talk to you rather than quietly running up time.',
        },
        {
          q: 'What do we actually get at the end?',
          a: 'A written report with findings, the evidence behind them, and options with an owner and a rough cost attached to each. Not a deck of observations you already knew. If a recommendation cannot name who would do it, it does not go in.',
        },
        {
          q: 'What if your findings are not what we wanted to hear?',
          a: 'You get them anyway, in the first few pages. We have more to lose from an agreeable report that turns out to be wrong than from an uncomfortable one that turns out to be right.',
        },
        {
          q: 'Will you work with our existing team or replace them?',
          a: 'Work with them. An outside firm that sidelines the people who have to live with the result produces changes that quietly unravel the month after it leaves.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'What is the actual problem?',
      lead: 'Describe it in a few lines. We will tell you honestly whether consultancy is the right answer.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Consulting and Advisory',
      description:
        'A management consultancy registered in England and Wales since 2023, based in the City of London. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Advice that changes nothing',
      titleMark: 'was expensive reassurance',
      lead:
        'The test of a piece of consultancy is whether anything is different six months later. Everything we do is arranged around that question.',
    },
    story: {
      title: 'How we work',
      subtitle: 'The hard part is not the analysis.',
      paragraphs: [
        'Finding what is wrong with a process is usually straightforward once you spend time with the people running it. The difficult part is writing it in a way that survives contact with the organisation: naming an owner, costing it, and being honest about which recommendations are genuinely hard rather than listing them all as though they weigh the same.',
        'So we write short. A finding that takes thirty pages to reach has generally not been understood yet. The conclusion goes at the front, the evidence behind it, and the options with a name and a number against each.',
        'We also keep to our boundary. This is management consultancy, not financial, investment or legal advice. Those are regulated activities, and a firm that blurs that line is telling you something about how it treats other boundaries.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'search', title: 'Diagnose first', text: 'The brief is a hypothesis, not a finding.' },
        { icon: 'users', title: 'Ask the people doing it', text: 'Most of the answer is already in the building.' },
        { icon: 'compass', title: 'Actionable', text: 'Every recommendation has an owner and a cost.' },
        { icon: 'shield', title: 'Within our limits', text: 'No financial, investment or legal advice.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want a view before you commit?',
      lead: 'A conversation costs nothing and often changes what the engagement should be.',
      secondaryCta: 'What we do',
    },
  },

  servicesPage: {
    seo: {
      title: 'Diagnostics, operating reviews and change support',
      description:
        'Management consultancy services from LK Consulting and Advisory Ltd: diagnostics, operating reviews, change support and board briefings.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Four engagements,',
      titleMark: 'one standard of evidence',
      lead: 'Different sizes of problem, the same discipline about what counts as a finding.',
    },
    quoteNote:
      'Every engagement is scoped and quoted against your specific question before it begins. Nothing on this page is a fixed price or a binding offer, and none of it is financial or legal advice.',
    cta: {
      eyebrow: 'Next step',
      title: 'Describe the problem',
      lead: 'A few lines is enough for us to say what kind of engagement would actually help.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Consulting and Advisory',
      description:
        'Get in touch about a consultancy engagement. Registered office: Cheyne House, 2 Crown Court, London, EC2V 6JP. Company no. 14769832.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us the problem,',
      titleMark: 'not the solution you want',
      lead: 'Knowing what decision is waiting on this tells us far more than knowing the subject area.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'What is going wrong, in the terms your own team would use.',
        'What decision is waiting on the answer, and by when.',
        'What has already been tried, and why it did not hold.',
        'Who inside the business would own any change that came out of it.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the outline over and we will come back with an honest view.',
      secondaryCta: 'What we do',
    },
  },

  services: [
    {
      id: 'diagnostic',
      icon: 'search',
      title: 'Short diagnostic',
      summary: 'A few weeks to establish what is actually causing the problem.',
      points: [
        'Time with the people running the process, not only with management.',
        'A written finding with the evidence behind it.',
        'An honest answer when the presenting problem is not the real one.',
        'A recommendation on whether further work is even worth doing.',
      ],
    },
    {
      id: 'operating-review',
      icon: 'bars',
      title: 'Operating review',
      summary: 'A full look at how a function or a business actually runs.',
      points: [
        'How work flows in practice, against how it is documented.',
        'Where capacity, handoffs and decisions are costing you.',
        'Options with an owner and a rough cost against each.',
        'Written so it can go to a board without translation.',
      ],
    },
    {
      id: 'change-support',
      icon: 'refresh',
      title: 'Change support',
      summary: 'Help landing a change, with a defined end date rather than an open engagement.',
      points: [
        'An agreed scope, duration and exit point from the start.',
        'Working through your own people so the capability stays with you.',
        'Regular honest reporting, including when something is not working.',
        'A handover that does not leave you dependent on us.',
      ],
    },
    {
      id: 'board-briefing',
      icon: 'clipboard',
      title: 'Board briefings',
      summary: 'An independent read on a decision in front of the board.',
      points: [
        'A short paper on one specific question.',
        'The case for and against, with the assumptions made explicit.',
        'Plain language, with the jargon translated rather than repeated.',
        'An independent view, with no interest in which option is chosen.',
      ],
    },
  ],
};
