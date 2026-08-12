import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const BioimagingPublication = () => {
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
          <img 
            src="/bioimaging_hero.jpg" 
            alt="Bioimaging" 
            className="absolute inset-0 w-full h-full object-cover opacity-50" 
          />
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Revealing hidden bioimaging information by isotropic depolarization filtering
            </h1>
            <p className="text-xl text-gray-300 mx-auto drop-shadow mb-6">
              Mónica Canabal-Carbia, Irene Estévez, Emilio González-Arnay, Ivan Montes-Gonzalez, Jose J. Gil, Arnau Barrera, Enrique García-Caurel, Razvigor Ossikovski, Ignacio Moreno, Juan Campos, Angel Lizana
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/1-s2.0-S003039922500547X-main.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
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
              Isotropic depolarization often masks the underlying anisotropic features of biological tissues in wide-field polarimetric imaging. We propose an <strong>Isotropic Depolarization Filter (IDF)</strong> that mathematically isolates anisotropic signals, unveiling complex tissue microstructures with unprecedented clarity in heart and brain samples.
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
              <li><strong>Isotropic Depolarization Filter (IDF):</strong> A novel computational filtering method derived from the characteristic decomposition of Mueller matrices in terms of Indices of Polarimetric Purity (IPP).</li>
              <li><strong>Enhanced Image Contrast:</strong> The filter successfully suppresses isotropic depolarization noise, multiplying visual contrast and exposing the inherent anisotropic depolarization features.</li>
              <li><strong>Biomedical Validation:</strong> Strong empirical evidence of the filter's usefulness by successfully mapping structural boundaries in ex-vivo heart tissue and intricate nerve fiber tracts in brain white matter.</li>
              <li><strong>Non-Destructive Pathology Detection:</strong> Paves the way for new optical, non-invasive protocols in clinical applications to detect early changes in myocardial structure or neuropathies.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">Methodology</h2>
            <p className="text-lg leading-relaxed text-text-secondary mb-6">
              The methodology exploits the characteristic decomposition of Mueller matrices (<i>M</i>) to mathematically decouple isotropic and anisotropic depolarizing origins:
            </p>
            <div className="space-y-4 text-text-secondary text-lg mb-8">
              <p>
                <strong>1. Characteristic Decomposition:</strong> The Mueller matrix of a sample is decomposed into four matrices representing different depolarizing behaviors, weighted by combinations of the Indices of Polarimetric Purity (P1, P2, P3).
              </p>
              <p>
                <strong>2. Applying the IDF:</strong> Since the isotropic depolarization component is governed by the perfect depolarizer matrix and weighted by (1 - P3), the IDF effectively subtracts this term from the experimental Mueller matrix.
              </p>
              <p>
                <strong>3. Image Reconstruction:</strong> The polarimetric observables (like diattenuation and polarizance) are recalculated from the filtered Mueller matrix, achieving an effect equivalent to dividing the original signals by the P3 parameter, effectively amplifying regions heavily masked by isotropic depolarization.
              </p>
            </div>
            
            <div className="aspect-[16/9] bg-zinc-100 rounded-lg flex flex-col items-center justify-center border border-border-default overflow-hidden">
              {/* <!-- INSERT METHODOLOGY IMAGE HERE --> */}
              <span className="text-text-muted mb-2 text-sm uppercase tracking-wider">Methodology Diagram Placeholder</span>
              <span className="text-xs text-text-muted">Replace this div with an &lt;img&gt; tag of your polarimetric setup or equations</span>
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
              When tested on complex biological tissues, the application of IDF yielded extraordinary visual enhancements compared to standard unpolarized reflectance images.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">Heart Tissue Analysis</h3>
                <p className="text-lg text-text-secondary">
                  The filtered images clearly delineate the boundaries between the concentrically arranged fascicles of the <strong>myocardium</strong> and the loose connective tissue of the <strong>subendocardium</strong>, previously obscured by noise. It also allowed tracing of subepicardial coronary vessels.
                </p>
              </div>
              <div className="p-6 border border-border-default rounded-lg bg-secondary/50">
                <h3 className="text-xl font-bold mb-2">Brain Tissue Analysis</h3>
                <p className="text-lg text-text-secondary">
                  In the coronal section of a cattle brain, applying the IDF to the diattenuation channel unveiled the intricate architecture of <strong>white matter tracts</strong>. Long-range interhemispheric and short-range U-shaped fibers became distinct, providing an ethically viable proxy for mapping human connectivity.
                </p>
              </div>
            </div>
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
{`@article{canabal2025revealing,
  title={Revealing hidden bioimaging information by isotropic depolarization filtering},
  author={Canabal-Carbia, M{\\'o}nica and Est{\\'e}vez, Irene and Gonz{\\'a}lez-Arnay, Emilio and Montes-Gonzalez, Ivan and Gil, Jose J and Barrera, Arnau and Garc{\\'i}a-Caurel, Enrique and Ossikovski, Razvigor and Moreno, Ignacio and Campos, Juan and Lizana, Angel},
  journal={Optics and Laser Technology},
  volume={188},
  pages={112956},
  year={2025},
  publisher={Elsevier}
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

export default BioimagingPublication;
