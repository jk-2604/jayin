import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface ArticleContent {
  slug: string;
  title: string;
  pageTitle?: string;
  metadataLine?: string;
  fullWriteUp?: string;
  pdfSrc?: string | null;
  videoSrc?: string | null;
  notionSrc?: string | null;
  presentationSrc?: string;
  author?: string;
  category?: string;
  shortDescription?: string;
}

const allArticlesContent: ArticleContent[] = [
  {
    slug: 'theory-of-llms-notes',
    title: 'Theory of LLMs — Notion Notes',
    pageTitle: 'Theory of LLMs — Notion Notes',
    metadataLine: 'By Jayin Khanna | Research Notes',
    pdfSrc: '/reports/theory-of-llms-notes.pdf',
    fullWriteUp: `<p>Detailed notes on the paper <em>Efficient and Minimax Optimal In-context Nonparametric Regression with Transformers</em> — covering the problem statement, pretraining setup, transformer architecture, the main theorem (Theorem 3.2), and the full proof decomposition through Lemmas B.2–B.10.</p>`,
  },
  {
    slug: 'flow-matching-lecture',
    title: 'Lecture on Flow Matching',
    pageTitle: 'Lecture on Flow Matching',
    author: 'Jayin Khanna',
    category: 'Deep Learning',
    pdfSrc: null,
    videoSrc: 'https://www.youtube.com/embed/s2kADOhVYWQ',
    metadataLine: 'By Jayin Khanna | Lecture',
    fullWriteUp: `<p>A lecture covering the mathematical foundations and applications of Flow Matching in generative models.</p>`,
  },
  {
    slug: 'thesis-poster',
    title: 'Thesis Poster',
    pageTitle: 'Thesis Poster',
    metadataLine: 'By Jayin Khanna | Poster Presentation',
    pdfSrc: '/reports/thesis_poster.pdf',
    fullWriteUp: `<p>This is the poster presentation for my thesis research.</p>`
  },
  {
    slug: 'csd722-depth-video-gen',
    title: 'CSD 722 Project presentation: Depth Conditioned Video Generation',
    pageTitle: 'CSD 722 Project presentation: Depth Conditioned Video Generation',
    metadataLine: 'By Jayin Khanna | Project Presentation',
    pdfSrc: '/reports/depth_video_gen_presentation.pdf',
    fullWriteUp: `<p>This document is the CSD 722 project presentation on Depth Conditioned Video Generation.</p>`
  },
  {
    slug: 'latent-diffusion-presentation',
    title: 'Latent Diffusion Model Paper Presentation',
    pageTitle: 'Latent Diffusion Model Paper Presentation',
    metadataLine: 'By Jayin Khanna | Presentation',
    pdfSrc: '/reports/LDM_presentation.pdf',
    fullWriteUp: `<p>This document is the Latent Diffusion Model paper presentation.</p>`
  },
  {
    slug: 'trce-paper-presentation',
    title: 'TRCE Paper Presentation',
    pageTitle: 'TRCE Paper Presentation',
    metadataLine: 'By Jayin Khanna | Presentation',
    pdfSrc: '/reports/TRCE_presentation.pdf',
    notionSrc: 'https://ink-vulture-5ec.notion.site/embed/346974e4c5cf80adab9cd677ef7a8d69',
    fullWriteUp: `<p>This document is the TRCE paper presentation.</p>`
  },
  {
    slug: 'speech-tsm-gans',
    title: 'Speech Time-Scale Modification with GANs',
    pageTitle: 'Speech Time-Scale Modification with GANs',
    metadataLine: 'By Jayin Khanna | Research Project',
    pdfSrc: '/reports/tsm.pdf',
    fullWriteUp: `<p>This report details a research project on using Generative Adversarial Networks (GANs) for Time-Scale Modification (TSM) of speech signals.</p>`
  },
  {
    slug: 'speech-tsm-gans-presentation',
    title: 'Speech time-scale modification using GANs- Presentation',
    pageTitle: 'Speech time-scale modification using GANs- Presentation',
    metadataLine: 'Lab Talk | SPIRE Lab, IISc Bangalore | Summer Research Fellow, IAS',
    pdfSrc: '/reports/speech-tsm-presentation.pdf',
    fullWriteUp: `<p>This document is a PDF of a presentation on "Speech time-scale modification using GANs".</p>`
  },
  {
    slug: 'contrastive-learning-simclr-ijepa',
    title: 'Contrastive Learning: SimCLR & I-JEPA',
    pageTitle: 'Contrastive Learning: SimCLR & I-JEPA',
    metadataLine: 'CSD 662: Advanced Deep Learning',
    pdfSrc: "/reports/SimCLR_I-JEPA.pdf",
    fullWriteUp: `
      <p><em>Presentation for the graduate course CSD 662: Advanced Deep Learning.</em></p>
      
      <h2>Abstract</h2>
      <p>This presentation provides an in-depth exploration of two significant advancements in self-supervised learning: SimCLR and I-JEPA. We delve into the core concepts of contrastive learning, which enables models to learn meaningful representations from unlabeled data by maximizing agreement between different views of the same data point.</p>
      
      <h3 class="mt-6">SimCLR (A Simple Framework for Contrastive Learning of Visual Representations)</h3>
      <p>We analyze the key components of the SimCLR framework, including:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>The role of data augmentations in creating positive pairs.</li>
        <li>The importance of a projection head (MLP) for defining the contrastive loss.</li>
        <li>The effectiveness of the NT-Xent (Normalized Temperature-scaled Cross-Entropy) loss function.</li>
        <li>The impact of larger batch sizes and longer training on representation quality.</li>
      </ul>
      
      <h3 class="mt-6">I-JEPA (Image-based Joint-Embedding Predictive Architecture)</h3>
      <p>Next, we shift focus to I-JEPA, a non-contrastive, generative approach that learns by predicting representations of masked-out image blocks in an abstract space. Key aspects covered include:</p>
      <ul class="list-disc pl-6 space-y-1 mt-2">
        <li>The concept of predicting in representation space rather than pixel space to encourage semantic feature learning.</li>
        <li>The architecture, comprising a context encoder, a predictor, and a target encoder.</li>
        <li>The multi-block masking strategy and its benefits for learning scalable and efficient representations.</li>
        <li>How I-JEPA avoids the collapse problem common in self-supervised methods without needing negative pairs or momentum encoders.</li>
      </ul>
      <blockquote class="border-l-4 border-primary pl-4 italic my-4 py-2">"By comparing and contrasting these two powerful methods, the presentation illuminates the evolving landscape of self-supervised learning and its potential to reduce reliance on large labeled datasets."</blockquote>
    `
  },
  {
    slug: 'ddpm-notes',
    title: 'Denoising Diffusion Probabilistic Models Notes',
    pageTitle: 'Denoising Diffusion Probabilistic Models Notes',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/ddpm_notes.pdf',
    fullWriteUp: `<p>This document provides a comprehensive overview of Denoising Diffusion Probabilistic Models (DDPMs).</p>`
  },
  {
    slug: 'variational-autoencoders',
    title: 'Variational Autoencoders (VAEs)',
    pageTitle: 'Variational Autoencoders (VAEs)',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/VAE.pdf',
    fullWriteUp: `<p>This document provides an overview of Variational Autoencoders (VAEs), covering their theoretical foundations and practical applications in generative modeling.</p>`
  },
  {
    slug: 'generative-models-overview',
    title: 'Generative Models: A Mathematical Overview',
    pageTitle: 'Generative Models: A Mathematical Overview',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/GANs-2.pdf',
    fullWriteUp: `<p>This document provides a comprehensive overview of Generative Models, including the mathematical underpinnings of VAEs, GANs, and Diffusion Models.</p>`
  },
  {
    slug: 'explainable-ai',
    title: 'Explainable AI: Attribution techniques',
    pageTitle: 'Explainable AI: Attribution techniques',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Attribution_techniques.pdf',
    fullWriteUp: `
      <p><em>By Jayin Khanna | Topic Report</em></p>
      
      <h2>Abstract</h2>
      <p>As deep learning models become more complex and are deployed in high-stakes domains like healthcare and finance, understanding why a model makes a particular decision is crucial. Explainable AI (XAI) provides techniques to interpret and understand the inner workings of these black box models. This report focuses on attribution techniques, which aim to assign importance scores to input features based on their contribution to the model's output.</p>
    `
  },
  {
    slug: 'sequential-models-rnns-overview',
    title: 'Sequential Models: RNNs Overview',
    pageTitle: 'Sequential Models: RNNs Overview',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: "/reports/RNNs_report.pdf",
    fullWriteUp: `<p>A comprehensive report on Recurrent Neural Networks, covering everything from their history and architecture to the mathematical details of backpropagation through time and the challenges of vanishing/exploding gradients.</p>`
  },
  {
    slug: 'neural-networks-fundamentals',
    title: 'Neural Networks: Foundations and Architectures',
    pageTitle: 'Neural Networks: Foundations and Architectures',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Neural_Networks (4).pdf',
    fullWriteUp: `
      <p>This document explores the fundamental concepts and various architectures of Neural Networks, serving as a foundational guide to understanding deep learning.</p>
    `
  },
  {
    slug: 'vision-transformer-vit',
    title: 'Vision Transformer (ViT)',
    pageTitle: 'Vision Transformer (ViT)',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/ViT.pdf',
    fullWriteUp: `<p>This document provides a comprehensive overview of the Vision Transformer (ViT) architecture.</p>`
  },
  {
    slug: 'principal-component-analysis',
    title: 'Principal Component Analysis',
    pageTitle: 'Principal Component Analysis',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/PCA (1).pdf',
    fullWriteUp: `
      <p>This document provides a comprehensive overview of Principal Component Analysis, including its mathematical underpinnings, applications, and practical considerations.</p>
    `
  },
  {
    slug: 'statistics-generative-models',
    title: 'Statistics for Generative models',
    pageTitle: 'Statistics for Generative models',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/Transformation_of_RVs-2.pdf',
    fullWriteUp: `<p>This document explores the statistical foundations essential for understanding and developing generative models.</p>`
  },
  {
    slug: 'cross-validation-techniques',
    title: 'Cross Validation Techniques',
    pageTitle: 'Cross Validation Techniques',
    metadataLine: 'By Jayin Khanna | Topic Report',
    pdfSrc: '/reports/cross_validation.pdf',
    fullWriteUp: `<p>This document provides a comprehensive overview of Cross Validation techniques in machine learning.</p>`
  },
];

async function getArticleData(slug: string): Promise<ArticleContent | null> {
  return allArticlesContent.find(article => article.slug === slug) || null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = await getArticleData(slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }
  return {
    title: `${article.title} | Research`,
    description: `An article titled: ${article.title}. Penned by Jayin Khanna.`,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = await getArticleData(slug);

  if (!article) {
    return <div className="container mx-auto py-20 text-center text-muted-foreground">Article not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 md:py-20 max-w-4xl">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-headline mb-3 text-primary">
          {article.pageTitle || article.title}
        </h1>
        {article.metadataLine && article.fullWriteUp && !article.fullWriteUp.includes(article.metadataLine) && (
          <p className="text-muted-foreground italic mb-6">{article.metadataLine}</p>
        )}
      </header>

      {article.fullWriteUp && (
        <article className="prose prose-invert prose-lg max-w-none 
                          text-foreground/90 
                          prose-headings:text-primary prose-headings:font-headline
                          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
                          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                          prose-p:leading-relaxed 
                          prose-a:text-accent hover:prose-a:underline
                          prose-strong:text-foreground 
                          prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
                          prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-code:font-code
                          prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-sm prose-pre:font-code
                          prose-table:my-6 prose-table:text-sm prose-table:w-full prose-table:border-collapse
                          prose-th:border prose-th:border-border prose-th:p-2 prose-th:font-medium prose-th:text-left prose-th:bg-muted/30
                          prose-td:border prose-td:border-border prose-td:p-2
                          prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 prose-ul:my-2
                          prose-li:my-1">
          <div dangerouslySetInnerHTML={{ __html: article.fullWriteUp }} />
        </article>
      )}

      {article.videoSrc && (
        <section className="my-12">
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">
            Lecture Video
          </h2>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={article.videoSrc}
              className="absolute top-0 left-0 w-full h-full border rounded-lg shadow-md"
              title={article.title + " - Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {article.notionSrc && (
        <section className="my-12 pt-8 border-t border-border/40">
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">
            Notes
          </h2>
          <iframe
            src={article.notionSrc}
            className="w-full border rounded-xl shadow-md"
            style={{ height: '800px' }}
            title={article.title + " - Notion Notes"}
            allowFullScreen
          />
        </section>
      )}

      {article.pdfSrc && (
        <section className={`my-12 ${article.fullWriteUp && article.fullWriteUp.length > 200 ? 'pt-8 border-t border-border/40' : ''}`}>
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">
            {article.fullWriteUp && article.fullWriteUp.length > 200 ? "Full Report (PDF)" : "Document (PDF)"}
          </h2>
          <div className="relative w-full" style={{ paddingTop: '141.42%' }}>
            <iframe
              src={article.pdfSrc}
              className="absolute top-0 left-0 w-full h-full border rounded-lg shadow-md"
              title={article.title + " - PDF Document"}
              aria-label={article.title + " - PDF Document"}
            >
              <p className="p-4 text-muted-foreground">
                Your browser does not support embedded PDFs.{' '}
                <a href={article.pdfSrc} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Download the PDF directly
                </a>.
              </p>
            </iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href={article.pdfSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium"
            >
              View Full Document (PDF) ↗
            </a>
          </div>
        </section>
      )}

      <Separator className="my-12 bg-border/40" />

      <section className="text-center">
        <Button asChild variant="link" className="text-accent text-lg">
          <Link href="/"> &larr; Back to Home</Link>
        </Button>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = allArticlesContent.map(article => ({
    slug: article.slug,
  }));
  return slugs;
}
