import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const BasketballPublication = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20 lowercase">
        {/* Hero Section */}
        <motion.section 
          initial={{opacity: 0, y: 20}} 
          whileInView={{opacity: 1, y: 0}} 
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* INSERT COVER IMAGE HERE IF NECESSARY */}
          <div className="absolute inset-0 bg-zinc-900 opacity-80" /> 
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              See It Before You Grab It: Deep Learning-based Rebound Anticipation in Basketball
            </h1>
            <p className="text-xl text-gray-300 mx-auto drop-shadow mb-6">
              Arnau Barrera-Roy, Albert Clapés
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/2512.15386v1.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
                PDF
              </a>
            </div>
          </div>
        </motion.section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">TL;DR</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              Predicting which team will gain possession after a missed shot is highly challenging due to occlusions and multi-player dynamics. We introduce the task of <strong>rebound anticipation</strong> in basketball broadcast videos and present a novel self-curated dataset of 100,000 clips, exploring both offline and online anticipation setups with deep learning models.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">Key Contributions</h2>
            <ul className="list-disc list-inside text-lg text-text-secondary space-y-3">
              <li><strong>NBA Rebounds Dataset:</strong> A self-curated dataset comprising 100,000 basketball video clips with over 2,000 manually annotated rebound events (Offensive vs. Defensive).</li>
              <li><strong>Novel Task Formulation:</strong> The first application of deep learning techniques specifically targeted at basketball rebound anticipation using solely video data.</li>
              <li><strong>Comprehensive Benchmarks:</strong> Extensive baseline evaluations for both online and offline action anticipation, along with auxiliary tasks like action spotting and classification.</li>
              <li><strong>AI vs. Human Analysis:</strong> An insightful comparative study showing that AI models can achieve competitive accuracy against human experts, especially when the temporal horizon limits visual cues.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">Methodology & Architecture</h2>
            <p className="text-lg leading-relaxed text-text-secondary mb-6">
              To solve the online anticipation task, we introduced a Transformer-Encoder Anticipation Model (TEAM):
            </p>
            <div className="space-y-4 text-text-secondary text-lg mb-8">
              <p>
                <strong>1. 3D CNN Backbone:</strong> A pre-trained X3D network efficiently extracts local spatiotemporal features from the video sequences.
              </p>
              <p>
                <strong>2. Temporal Module:</strong> A Transformer encoder with multi-head self-attention models long-range temporal dependencies. A learnable CLS token aggregates global information from all temporal positions.
              </p>
              <p>
                <strong>3. Prediction Head:</strong> The refined CLS token is passed through a multi-layer perceptron (MLP) to output probabilities for Offensive Rebound, Defensive Rebound, or No Rebound.
              </p>
            </div>
            
            <div className="aspect-[16/9] bg-zinc-100 rounded-lg flex flex-col items-center justify-center border border-border-default overflow-hidden">
              {/* <!-- INSERT ARCHITECTURE.PNG IMAGE HERE --> */}
              <span className="text-text-muted mb-2 text-sm uppercase tracking-wider">Architecture Diagram Placeholder</span>
              <span className="text-xs text-text-muted">Replace this div with an &lt;img&gt; tag of your architecture</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">Main Results</h2>
            <p className="text-lg leading-relaxed text-text-secondary mb-6">
              Our baseline models achieved highly competitive results for offline anticipation. We observed that:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">Short-term (0.5s)</h3>
                <p className="text-lg text-text-secondary mb-1">Human Experts: <span className="font-semibold text-text-primary">0.71 acc</span></p>
                <p className="text-lg text-text-secondary">AI Model: <span className="font-semibold text-text-primary">0.60 acc</span></p>
              </div>
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">Long-term (1.5s)</h3>
                <p className="text-lg text-text-secondary mb-1">Human Experts: <span className="font-semibold text-text-primary">0.59 acc</span></p>
                <p className="text-lg text-text-secondary">AI Model: <span className="font-semibold text-green-600 dark:text-green-400">0.59 acc</span></p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-text-secondary mt-6">
              While human experts perform better when given the trajectory of the ball (0.5s before), the AI model matches human performance in earlier, more uncertain situations (1.5s before), demonstrating a superior ability to exploit subtle player positioning cues.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">Citation</h2>
            <div className="bg-zinc-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono">
{`@article{barrera2025seeitbeforeyougrabit,
  title={See It Before You Grab It: Deep Learning-based Rebound Anticipation in Basketball},
  author={Barrera-Roy, Arnau and Clap{\\'e}s, Albert},
  journal={arXiv preprint arXiv:2512.15386},
  year={2025}
}`}
              </pre>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BasketballPublication;
