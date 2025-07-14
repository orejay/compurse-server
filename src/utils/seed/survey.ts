// --- COMBINED JSON SEED ---

import { title } from 'process';

export const surveySeed = [
  {
    sectionId: 'sec1',
    title: 'Demographic Information',
    questions: [
      {
        questionId: 'q1',
        text: 'What is your age group?',
        type: 'radio',
        required: true,
        options: [
          { value: 'under_18', label: 'Under 18' },
          { value: '18_25', label: '18 - 25' },
          { value: '26_35', label: '26 - 35' },
          { value: '36_45', label: '36 - 45' },
          { value: '46_above', label: '46 and Above' },
        ],
      },
      {
        questionId: 'q2',
        text: 'What is your occupation?',
        type: 'text',
        required: true,
      },
      {
        questionId: 'q3',
        text: 'Where are you based? (Country/State/City)',
        type: 'location',
        required: true,
      },
    ],
  },
  {
    sectionId: 'sec2',
    title: 'Financial Behaviour and Interest',
    questions: [
      {
        questionId: 'q4',
        text: 'Have you ever participated in a savings group (Esusu/Ajo)?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ],
      },
      {
        questionId: 'q5',
        text: 'If yes, what type of group was it?',
        type: 'checkbox-with-other',
        required: true,
        options: [
          { value: 'family', label: 'Family' },
          { value: 'friends', label: 'Friends' },
          { value: 'workplace', label: 'Workplace' },
          { value: 'community', label: 'Community-based' },
          { value: 'n/a', label: 'Not Applicable' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        questionId: 'q6',
        text: 'What is your primary financial goal?',
        type: 'radio-with-other',
        required: true,
        options: [
          { value: 'short_term', label: 'Saving for short-term needs' },
          { value: 'budgeting', label: 'Budgeting smarter' },
          { value: 'emergency', label: 'Emergency fund security' },
          {
            value: 'collaborative_growth',
            label: 'Growing wealth Collaboratively',
          },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        questionId: 'q7',
        text: 'How often do you contribute to the savings group?',
        type: 'radio-with-other',
        required: true,
        options: [
          { value: 'monthly', label: 'Monthly' },
          { value: 'daily', label: 'Daily' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        questionId: 'q8',
        text: 'Would you be comfortable joining a group savings model where payouts occur in turns?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe', label: 'Maybe, if transparency is ensured' },
        ],
      },
      {
        questionId: 'q9',
        text: 'What Contribution Cohort would you like to partake in if available?',
        type: 'radio',
        required: true,
        options: [
          { value: '100', label: '£100' },
          { value: '200', label: '£200' },
          { value: '500', label: '£500' },
          { value: '1000', label: '£1000' },
        ],
      },
    ],
  },
  {
    sectionId: 'sec3',
    title: 'Current Challenges/Opportunities',
    questions: [
      {
        questionId: 'q10',
        text: 'What challenges do you face in managing your savings group? (Select all that apply)',
        type: 'checkbox-with-other',
        required: true,
        options: [
          { value: 'transparency', label: 'Lack of transparency' },
          { value: 'tracking', label: 'Difficulty in tracking payments' },
          { value: 'trust', label: 'Trust issues' },
          { value: 'record_keeping', label: 'Poor record-keeping' },
          { value: 'reminders', label: 'Lack of reminders/notifications' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        questionId: 'q11',
        text: 'How do you currently track group savings and payouts?',
        type: 'radio-with-other',
        required: true,
        options: [
          { value: 'paper', label: 'Paper-based' },
          { value: 'whatsapp', label: 'WhatsApp/Phone' },
          { value: 'excel', label: 'Excel' },
          { value: 'other', label: 'Other' },
        ],
      },
    ],
  },
  {
    sectionId: 'sec4',
    title: 'Compurse Solution Offering',
    questions: [
      {
        questionId: 'q12',
        text: 'Would you be interested in managing your savings group using a mobile or web-based platform?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe', label: 'Maybe' },
        ],
      },
      {
        questionId: 'q13',
        text: 'Would you prefer having visibility into all transactions in the platform?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'key_details', label: 'Only Key details' },
        ],
      },
      {
        questionId: 'q14',
        text: 'What features would you find most useful? (Select up to 3)',
        type: 'checkbox-with-other',
        max: 3,
        required: true,
        options: [
          { value: 'tracking', label: 'Digital contribution tracking' },
          { value: 'reminders', label: 'Automated reminders' },
          { value: 'payout_schedule', label: 'Transparent payout schedule' },
          { value: 'group_chat', label: 'Group chat functionality' },
          { value: 'dispute_resolution', label: 'Dispute resolution support' },
          {
            value: 'bank_integration',
            label: 'Integration with bank/mobile money',
          },
          { value: 'history', label: 'Record history of transactions' },
          { value: 'multi_group', label: 'Multiple group management' },
          { value: 'ratings', label: 'Member ratings/trust scores' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        questionId: 'q15',
        text: 'What would motivate you to stay committed to a savings cycle?',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'rewards', label: 'Financial rewards for consistency' },
          { value: 'community', label: 'Community encouragement' },
          { value: 'gamification', label: 'Gamified Milestones' },
        ],
      },
      {
        questionId: 'q16',
        text: 'Would you be comfortable making payments or receiving money through the platform?',
        type: 'radio',
        required: true,
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe', label: 'Maybe' },
        ],
      },
      {
        questionId: 'q17',
        text: 'What would make you trust such a platform? (Select all that apply)',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'regulatory', label: 'Regulatory approvals' },
          { value: 'testimonials', label: 'Testimonials from users' },
          { value: 'secure_payments', label: 'Secure payment systems' },
          {
            value: 'transaction_history',
            label: 'Transparent transaction history',
          },
          { value: 'support', label: 'Customer support availability' },
        ],
      },
    ],
  },
  {
    sectionId: 'sec5',
    title: 'Feedback & Expectations',
    questions: [
      {
        questionId: 'q18',
        text: 'What features would you want to see on a platform like this?',
        type: 'text',
        required: false,
      },
      {
        questionId: 'q19',
        text: 'What would make you switch from your current method to a digital platform?',
        type: 'text',
        required: true,
      },
      {
        questionId: 'q20',
        text: 'Any concerns or suggestions you’d like to share?',
        type: 'text',
        required: false,
      },
    ],
  },
];
