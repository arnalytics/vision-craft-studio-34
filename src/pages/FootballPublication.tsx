import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const FootballPublication = () => {
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
              TraVIS: Combining Player Tracking and Video for Football Action Spotting
            </h1>
            <p className="text-xl text-gray-300 mx-auto drop-shadow mb-6">
              Javier García Arias*, Artur Xarles*, Arnau Barrera-Roy, Sergio Escalera, Thomas B. Moeslund, Albert Clapés
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/ACM_Conference_Proceedings_Primary_Article_Template.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
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
              Football action spotting often relies purely on video, which struggles when players or the ball are occluded. We introduce <strong>TraVIS</strong>, a novel multimodal framework that fuses panoramic video with player and ball tracking data represented as graphs. By introducing football-specific spatial and relational inductive biases, TraVIS outperforms video-only baselines by +6.42 mAP@1s.
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
              <li><strong>Multimodal Fusion:</strong> A novel framework (TraVIS) that effectively combines visual features with structured graph-based representations of player and ball tracking data.</li>
              <li><strong>Graph-based Tracking Encoding:</strong> Explicitly models game states using Graph Isomorphism Networks (GIN) with tailored football-specific edges (tactical, proximity, and ball-interaction).</li>
              <li><strong>Systematic Analysis:</strong> A comprehensive study of temporal modeling strategies for football action spotting, demonstrating the efficiency of single-scale bidirectional GRUs.</li>
              <li><strong>State-of-the-Art Results:</strong> Demonstrates a significant performance boost (+6.42 mAP@1s) over strong vision-only baselines on a continuous full-pitch panoramic dataset.</li>
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
              TraVIS relies on a dual-branch architecture to process parallel streams of data before fusing them:
            </p>
            <div className="space-y-4 text-text-secondary text-lg mb-8">
              <p>
                <strong>1. Vision Branch:</strong> Processes synchronized left and right panoramic video feeds using a RegNetY-200MF backbone enhanced with Gated Shift Modules (GSM) to extract local appearance and motion features.
              </p>
              <p>
                <strong>2. Tracking Branch:</strong> Constructs a graph for every frame where nodes are players and the ball. Edges capture tactical roles, spatial proximity, and ball interactions. A Graph Isomorphism Network (GIN) followed by temporal self-attention extracts structured tracking representations.
              </p>
              <p>
                <strong>3. Multimodal Fusion:</strong> The two modalities are combined using an element-wise maximum operation, retaining the strongest signals. The fused representation is contextualized by a single-scale Bidirectional GRU before final action classification. Auxiliary heads during training ensure both branches remain highly discriminative.
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
              We evaluated our approach on <em>PanoTrack</em>, a dataset of professional football matches recorded with 4K continuous panoramic cameras. TraVIS achieves <strong>75.27 mAP@1s</strong>, a massive improvement of +6.42 points over the video-only baseline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">Vision-Only</h3>
                <p className="text-3xl font-light text-text-muted">68.85 <span className="text-sm uppercase tracking-wide">mAP@1s</span></p>
              </div>
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">TraVIS (Multimodal)</h3>
                <p className="text-3xl font-light text-green-600 dark:text-green-400">75.27 <span className="text-sm uppercase tracking-wide text-text-muted">mAP@1s</span></p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-text-secondary mt-6">
              The gains are especially prominent in actions strongly defined by spatial layouts, such as <em>throw-ins</em> (+15.96 AP), <em>free-kicks</em> (+15.44 AP), and <em>corners</em>.
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
{`@inproceedings{garcia2026travis,
  title={TraVIS: Combining Player Tracking and Video for Football Action Spotting},
  author={Garc{\\'i}a Arias, Javier and Xarles, Artur and Barrera-Roy, Arnau and Escalera, Sergio and Moeslund, Thomas B. and Clap{\\'e}s, Albert},
  booktitle={ACM Conference Proceedings},
  year={2026},
  doi={10.1145/nnnnnnn.nnnnnnn}
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

export default FootballPublication;
