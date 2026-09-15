
import type { TimelineItem, Skill, EducationDetail } from './types';
import { Award, BookOpen, Cpu, ChevronRight, TrendingUp, Users, FileText, Percent } from 'lucide-react'; // Added new icons

export const educationTimelineData: TimelineItem[] = [
  {
    id: 'edu_snu',
    date: '2022 - 2026 (Expected)',
    title: 'B.Sc. (Research) in Mathematics & Computing',
    subtitle: 'Shiv Nadar University, Delhi-NCR',
    description: '', // Description can be a summary if needed, details are primary
    iconIdentifier: 'GraduationCap',
    details: [
      { text: 'Pursuing Bachelor of Science in Mathematics.', iconName: 'BookOpen' },
      { text: 'Minor in Computer Science and Engineering.', iconName: 'Cpu' },
      { text: 'Specialisation in AI & ML, and Mathematical Finance.', iconName: 'TrendingUp' },
      { text: 'Rank 1 (Rank Certificate Link to be added).', iconName: 'Award' },
    ],
  },
  {
    id: 'edu_iitm',
    date: '2023 - 2027 (Expected)',
    title: 'B.S. in Data Science and Applications',
    subtitle: 'IIT-Madras (Online Degree Program)',
    description: '',
    iconIdentifier: 'GraduationCap',
    details: [
      { text: 'Pursuing BS in Data Science and Applications.', iconName: 'BookOpen' },
      { text: 'CGPA: 9.13.', iconName: 'ChevronRight' },
      { text: '(Foundation Level Certificate to be added).', iconName: 'FileText' },
    ],
  },
  {
    id: 'edu_suncity_xii',
    date: 'Completed 2022',
    title: 'Senior Secondary (Class XII - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: '',
    iconIdentifier: 'GraduationCap',
    details: [
      { text: 'Subjects: Physics, Mathematics, Chemistry, Economics, and English.', iconName: 'ChevronRight' },
      { text: 'Overall percentage: 94.3%.', iconName: 'Percent' },
      { text: 'Received Certificate of Merit for scoring 100% in Mathematics CBSE Class XII Board exams.', iconName: 'Award' },
    ],
  },
  {
    id: 'edu_suncity_x',
    date: 'Completed 2020',
    title: 'Secondary (Class X - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: '',
    iconIdentifier: 'GraduationCap',
    details: [
      { text: 'Overall percentage: 96.4%.', iconName: 'Percent' },
    ],
  },
  // Removed "Learning from the best" from here
];

export const achievementTimelineData: TimelineItem[] = [
  {
    id: 'ach_ias_fellowship',
    date: '2024',
    title: 'Summer Research Fellowship',
    subtitle: 'Indian Academy of Sciences (IASc), INSA, NASI',
    description: 'Awarded the Summer Research Fellowship by the Indian Academy of Sciences, in collaboration with INSA and NASI.',
    iconIdentifier: 'Award',
    details: [
      { text: 'Acceptance rate: ~10% (national-level selection)', iconName: 'Percent' },
      { text: 'Received a stipend and a travel grant to support research at a host institution.', iconName: 'TrendingUp' },
    ],
  },
  {
    id: 'ach_rank_1',
    date: '2026 (Expected)',
    title: 'Rank 1 - BSc (Research) in Mathematics',
    subtitle: 'Shiv Nadar University',
    description: 'Rank 1 out of all 19 students pursuing BSc (Research) in Mathematics.',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_summit_2_0',
    date: '2024',
    title: 'Research Presentation at SUMMIT 2.0',
    subtitle: 'Shiv Nadar University',
    description: 'Research work on Preprocessing Pipeline and Application of CNNs for Surface Electromyography (sEMG) Signal Classification selected for a presentation. (Certificate: Link to be provided)',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_cuet_math',
    date: '2022',
    title: 'Top 0.5% in CUET Mathematics Exam',
    subtitle: 'CUET 2022',
    description: 'Attained the 99.59 Percentile in CUET Mathematics Exam 2022 among 2.29 lakh students.',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_cbse_merit',
    date: '2022',
    title: 'CBSE Certificate of Merit - Mathematics',
    subtitle: 'Class XII Board Exams',
    description: 'Received for scoring 100% in the CBSE Class XII Mathematics Board exams. (Awarded to top 0.1% students)',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_snu_ideathon',
    date: '2023', // Assuming 2023, adjust if different
    title: '11th Position in SNU Ideathon',
    subtitle: 'Startup Idea Competition, Shiv Nadar University',
    description: 'Secured 11th Position for Startup Idea among 350+ teams in SNU’s Ideathon competition.',
    iconIdentifier: 'Lightbulb',
  },
];


export const skillsData: Skill[] = [
  // Programming Languages
  { id: 's_python', name: 'Python', category: 'Programming Languages', description: "By this time, It'd probably be a crime to not know it. Use it for most of my projects, research projects, personal tasks and automation of monotonous work.", iconName: 'Code' },
  { id: 's_c', name: 'C', category: 'Programming Languages', description: "Did and still prefer doing all my DSA in C, Even though Python is much more convinient, love the control and freedom C provides.", iconName: 'Terminal' },
  { id: 's_r', name: 'R', category: 'Programming Languages', description: "My Go-To for most of the statistical analysis, data visualization, and specific research projects requiring advanced statistical modeling. Learnt mainly through couple of Statistics courses but YouTube zindabaad!", iconName: 'BarChartBig' },

  // Tools & Libraries
  { id: 's_pytorch', name: 'PyTorch', category: 'Tools & Libraries', description: 'Extensive use of PyTorch for building and training deep neural networks, including CNNs, RNNs, and GNNs.', iconName: 'BrainCircuit' },
  { id: 's_tensorflow', name: 'TensorFlow', category: 'Tools & Libraries', description: 'Experience with TensorFlow and Keras API for developing and deploying machine learning models across various platforms.', iconName: 'Layers' },
  { id: 's_opencv', name: 'OpenCV', category: 'Tools & Libraries', description: "Computer vision tasks such as image processing, object detection, and video analysis. Learnt it mainly through a course and you know it.", iconName: 'Camera' },
  { id: 's_sklearn', name: 'scikit-learn', category: 'Tools & Libraries', description: 'Proficient with scikit-learn for classical machine learning algorithms, model evaluation, and data preprocessing.', iconName: 'Shapes' },
  { id: 's_pandas_numpy', name: 'Pandas & NumPy', category: 'Tools & Libraries', description: "Thank you for not letting me be at the mercy of the mind numbing excel sheets.", iconName: 'Table' },
  { id: 's_seaborn_matplotlib', name: 'Seaborn & Matplotlib', category: 'Tools & Libraries', description: "Seaborn any day for attractive statistical graphics and visualizations.", iconName: 'BarChartHorizontalBig' },
  { id: 's_scipy', name: 'SciPy', category: 'Tools & Libraries', description: 'Used for scientific and technical computing, including optimization, signal processing, and statistics.', iconName: 'FunctionSquare' },
  { id: 's_eviews', name: 'EViews', category: 'Tools & Libraries', description: "Did a couple of research projects for econometric analysis, time series modeling, and forecasting. Convenience is crazy.", iconName: 'TrendingUp' },
];
