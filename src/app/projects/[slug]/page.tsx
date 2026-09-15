
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Link as LinkIcon, FileText, GraduationCap } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";

// Placeholder for fetching project data by slug
async function getProjectData(slug: string): Promise<Project | null> {
  const allProjectsData: Project[] = [
    {
      slug: 'domain-adaptation-medical-imaging',
      title: 'OUR: Domain Adaptation Techniques in Medical Imaging',
      year: "2024-2025",
      supervisorName: "Dr. Saurabh Janardan Shigwan",
      supervisorLink: "#", 
      tags: ['#UDA', '#MedicalImaging', '#CT', '#MRI', '#DeepLearning', '#Research'],
      fullWriteUp: `
        <ul class="list-disc pl-6">
          <li>Conducting Research on Unsupervised Domain Adaptation (UDA) Techniques for Medical Imaging Applications in CT and MRI.</li>
          <li>Implemented the Geodesic Flow Kernel on Grassmann manifolds to extract domain-invariant features, enabling effective cross-modality image analysis.</li>
          <li>Using Correlation Alignment (CORAL) and Maximum Mean Discrepancy (MMD) with geometric transformations to reduce domain shift.</li>
          <li>Previously worked on deep learning models to correct MRI motion artifacts in real-time using k-space data.</li>
        </ul>`,
      paperLink: null, githubLink: null, datasetLink: null,
      shortAbstract: "" 
    },
    {
      slug: 'investor-behavior-analysis-dl',
      title: 'Research Assistant: Investor Behavior Analysis using Deep Learning',
      year: "2024-2025",
      supervisorName: "Dr. Ashish Vazirani",
      supervisorLink: "#", 
      tags: ['#DeepLearning', '#OpenCV', '#NLP', '#EmotionRecognition', '#SentimentAnalysis', '#Research'],
      fullWriteUp: `
        <ul class="list-disc pl-6">
          <li>Developed a Deep Learning and OpenCV-based framework to analyze investor emotions, stance, and decision-making patterns in Shark Tank videos.</li>
          <li>Utilized EmotioNet for facial expression recognition and NLP models for the analysis of sentiment and intent from textual transcripts.</li>
          <li>Integrated multimodal data (visual and textual) to predict key factors influencing investment decisions.</li>
        </ul>`,
      paperLink: null, githubLink: null, datasetLink: null,
      shortAbstract: ""
    },
    {
      slug: 'financial-markets-time-series-sentiment',
      title: 'Time Series and Sentiment Analysis in US Financial Markets using Deep Learning',
      year: "2024-2025",
      supervisorName: "Dr. Charu Sharma (Mathematics Dept, SNU)",
      supervisorLink: "https://snu.edu.in/faculty/charu-sharma/", 
      tags: ['#TimeSeries', '#SentimentAnalysis', '#FinancialMarkets', '#DeepLearning', '#ML', '#Research'],
      fullWriteUp: `
        <ul class="list-disc pl-6">
          <li>Analyzing Time series Patterns and sentiment in US financial markets.</li>
          <li>Implemented Sequential Deep learning and ML models to understand market sentiment and its impact on financial trends.</li>
          <li>Working with the past 5-7 years of daily data of 31 potential financial indicators to predict financial trends. Applying Dimensionality Reduction Techniques, Statistical Time-Series Analysis, and DL Sequential Models.</li>
        </ul>`,
      paperLink: null, githubLink: null, datasetLink: null,
      shortAbstract: ""
    },
    {
      slug: 'filtering-recommendation-model',
      title: 'Filtering-Based Recommendation ML Model',
      year: "2024",
      tags: ['#RecommendationSystem', '#ML', '#CosineSimilarity', '#Ideathon'],
      fullWriteUp: `
        <ul class="list-disc pl-6">
          <li>Developed a recommendation system using Cosine Similarity and Pearson correlation for Capital Connect, a matchmaking platform for investors and startups.</li>
          <li>Developed an algorithm that analyzes investor criteria and recommends startups, assigning a similarity score to each match. This project secured a Top 16 position in the SNU Ideathon competition.</li>
        </ul>`,
      paperLink: null, githubLink: null, datasetLink: null,
      shortAbstract: ""
    },
    {
      slug: 'self-directed-learning-advanced-ai',
      title: 'Self-Directed Learning: Advanced AI Implementations',
      year: "Ongoing",
      tags: ['#LLMs', '#NeuralTemporalPointProcesses', '#Dehazing', '#ComputerVision', '#GameAI'],
      fullWriteUp: `
        <h4 class="font-semibold mt-3">Reading Projects:</h4>
        <ul class="list-disc pl-6">
          <li>LLMs from Scratch</li>
          <li>Neural Temporal Point Processes</li>
          <li>Image and Video Dehazing models</li>
        </ul>
        <h4 class="font-semibold mt-3">Other Projects:</h4>
        <ul class="list-disc pl-6">
          <li>AI Othello game from scratch</li>
          <li>Computer Vision Dehazing models implementation</li>
          <li>LLMs hard-coded from scratch</li>
        </ul>`,
      paperLink: null, githubLink: null, datasetLink: null,
      shortAbstract: ""
    },
     {
      slug: 'project-alpha', 
      title: 'Project Alpha: Advanced GNNs for Financial Forecasting',
      year: "2023",
      tags: ['#GNN', '#Finance', '#DeepLearning'],
      fullWriteUp: `
        <p>Project Alpha aimed to revolutionize financial forecasting by leveraging the power of Graph Neural Networks (GNNs). Traditional time-series models often fail to capture the complex interdependencies between financial instruments and market entities. This project proposed a novel GNN architecture that models the stock market as a dynamic graph, where nodes represent assets and edges represent their relationships (e.g., correlations, sector-based connections, supply chain links).</p>
        <h3 class="text-xl font-headline mt-4 mb-2 text-primary">Methodology</h3>
        <p>We employed temporal graph embeddings to capture the evolving nature of these relationships. An attention mechanism was integrated to allow the model to focus on the most influential connections at any given time. The input features included historical price data, trading volumes, news sentiment scores, and macroeconomic indicators.</p>
        <p class="mt-2">The model was trained on a vast dataset spanning over a decade of market data from multiple international exchanges. Rigorous backtesting was performed to validate its performance against various benchmarks.</p>
        <h3 class="text-xl font-headline mt-4 mb-2 text-primary">Results & Impact</h3>
        <p>Project Alpha demonstrated a significant improvement in prediction accuracy for short-term and medium-term stock price movements compared to baseline models like ARIMA and LSTMs. The ability to interpret learned graph structures also provided valuable insights into market dynamics and risk propagation.</p>
        <pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-python"># Example: LaTeX for a simple equation
# E = mc^2
# This would be rendered by a LaTeX library
# \\( E = mc^2 \\)
</code></pre>
        <p>Future work includes incorporating more granular data sources and exploring real-time deployment strategies.</p>
      `,
      paperLink: '#',
      githubLink: '#',
      datasetLink: '#',
      shortAbstract: ""
    },
    {
      slug: 'nidar-drone-challenge',
      title: 'NIDAR Drone Innovation Challenge: Perception and Autonomy',
      year: 'Ongoing',
      supervisorName: 'Prof Jyoti Sinha',
      supervisorLink: 'https://rocketreach.co/jyoti-sinha-email_38111920',
      tags: ['#DroneChallenge', '#ComputerVision', '#RL', '#Autonomy', '#DisasterManagement'],
      shortAbstract: `Part of the Perception and Autonomy team of the SNU team for the NIDAR Drone Innovation challenge. Working to build Computer vision and RL models for the 'Disaster Management' challenge.`,
      fullWriteUp: `
        <p>Part of the Perception and Autonomy team of the Shiv Nadar University (SNU) team for the NIDAR Drone Innovation Challenge. This project focuses on developing robust computer vision and reinforcement learning models to address the complexities of the 'Disaster Management' challenge track.</p>
        <h3 class="text-xl font-headline mt-4 mb-2 text-primary">Key Responsibilities & Focus Areas:</h3>
        <ul class="list-disc pl-6">
          <li>Developing and implementing computer vision algorithms for tasks such as object detection, segmentation, and tracking in challenging disaster environments.</li>
          <li>Designing and training reinforcement learning agents for autonomous drone navigation, decision-making, and task execution under uncertain conditions.</li>
          <li>Integrating perception modules with control systems to enable real-time autonomous operation.</li>
          <li>Collaborating with a multidisciplinary team to ensure system coherence and successful demonstration of capabilities.</li>
        </ul>
      `,
      paperLink: null, githubLink: null, datasetLink: null,
    }
  ];
  return allProjectsData.find(p => p.slug === slug) || null;
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} | Projects`,
    description: `Details for project: ${project.title}`,
  };
}


export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return <div className="container py-20 text-center text-muted-foreground">Project not found.</div>;
  }

  return (
    <div className="container py-12 md:py-20 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-headline mb-3 text-primary">{project.title}</h1>
        <p className="text-lg text-muted-foreground">Year: {project.year}</p>
        {project.supervisorName && (
          <div className="mt-3 text-md text-muted-foreground flex items-center justify-center">
            <GraduationCap className="mr-2 h-5 w-5 text-accent" />
            <span>Supervisor: </span>
            {project.supervisorLink && project.supervisorLink !== '#' ? (
              <Link href={project.supervisorLink} target="_blank" rel="noopener noreferrer" className="ml-1 text-accent hover:underline">
                {project.supervisorName}
              </Link>
            ) : (
              <span className="ml-1">{project.supervisorName}</span>
            )}
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{tag}</span>
          ))}
        </div>
      </header>

      {project.fullWriteUp && (
        <article className="prose prose-invert prose-lg max-w-none text-foreground/90 
                          prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground 
                          prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                          prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-code:font-code
                          prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-sm prose-pre:font-code">
          <div dangerouslySetInnerHTML={{ __html: project.fullWriteUp }} />
        </article>
      )}


      <Separator className="my-12 bg-border/40" />

      <section className="mb-12 text-center">
        <h2 className="text-2xl font-headline mb-6 text-primary">Resources & Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.paperLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.paperLink} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" /> Read Paper
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </Link>
            </Button>
          )}
          {project.datasetLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.datasetLink} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-5 w-5" /> Access Dataset
              </Link>
            </Button>
          )}
        </div>
         {(!project.paperLink && !project.githubLink && !project.datasetLink) && (
          <p className="text-muted-foreground mt-2">No external resources linked for this project yet.</p>
        )}
      </section>
      
      <section className="text-center">
        <h3 className="text-xl font-headline mb-4 text-primary">Continue Exploring</h3>
        <p className="text-muted-foreground">
          Discover other related projects or articles.
        </p>
        <Button asChild variant="link" className="mt-4 text-accent">
          <Link href="/projects">Back to All Projects</Link>
        </Button>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const projectSlugs = [
    'domain-adaptation-medical-imaging',
    'investor-behavior-analysis-dl',
    'financial-markets-time-series-sentiment',
    'filtering-recommendation-model',
    'self-directed-learning-advanced-ai',
    'project-alpha',
    'nidar-drone-challenge'
  ];
  return projectSlugs.map(slug => ({ slug }));
}
