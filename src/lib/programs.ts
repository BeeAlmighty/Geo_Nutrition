export interface Program {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  bestFor: string;
  popular: boolean;
}

export const programs: Program[] = [
  {
    id: '12-week',
    name: 'Quarterly Plan',
    duration: '3 Months',
    price: 120000,
    originalPrice: 150000,
    features: [
      'Initial comprehensive health assessment',
      'Custom training plan that fits your schedule',
      'Nutrition blueprint — not restriction with weekly updates',
      'Weekly accountability so you never fall off',
      'Meal prep guides and recipes',
      'Supplement strategy that supports your goals',
      'Progress tracking and analytics',
      'Private community access',
    ],
    bestFor: 'Clinical body recomposition and sustainable health transformation',
    popular: true,
  },
  {
    id: 'monthly-plan',
    name: 'Monthly Plan',
    duration: '30 days',
    price: 45000,
    originalPrice: 50000,
    features: [
      'Initial comprehensive health assessment',
      'Custom training plan that fits your schedule',
      'Nutrition blueprint — not restriction with weekly updates',
      'Weekly accountability so you never fall off',
      'Meal prep guides and recipes',
      'Supplement strategy that supports your goals',
      'Progress tracking and analytics',
      'Private community access',
    ],
    bestFor: 'Short-term commitment with maximum flexibility',
    popular: false,
  },
];

export const getProgramById = (id: string): Program | undefined => {
  return programs.find((program: Program) => program.id === id);
};

export const getPopularProgram = (): Program | undefined => {
  return programs.find((program: Program) => program.popular);
};

export const getAllPrograms = (): Program[] => {
  return programs;
};

export const getProgramsByDuration = (weeks: number): Program[] => {
  return programs.filter((program: Program) => {
    const duration = parseInt(program.duration);
    return duration === weeks;
  });
};