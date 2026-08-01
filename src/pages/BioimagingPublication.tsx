import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Revealing hidden bioimaging information
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
              Advanced filtering techniques for polarized light imaging
            </p>
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
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">The Challenge</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              In wide-field polarimetric imaging, isotropic depolarization often masks the underlying tissue structure. 
              This makes it extremely difficult to distinguish the true structural anisotropy in complex biological tissues, 
              limiting the potential of polarized light imaging in clinical and research settings.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-4">The Filter (IDF)</h2>
            <p className="text-lg leading-relaxed text-text-secondary">
              We introduce the Isotropic Depolarization Filter (IDF), a novel computational approach that 
              effectively separates isotropic depolarization from structural anisotropy. By filtering out the 
              masking effects, IDF reveals the hidden microstructural details of the tissue with unprecedented clarity.
            </p>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-text-muted uppercase tracking-wide border-b border-foreground/10 pb-1 inline-block mb-8">Interactive Results</h2>
            <Tabs defaultValue="heart" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="heart">Heart Tissue</TabsTrigger>
                <TabsTrigger value="brain">Brain Tissue</TabsTrigger>
              </TabsList>
              <TabsContent value="heart" className="p-6 border border-border-default rounded-lg bg-secondary">
                <h3 className="text-xl font-bold mb-4">Heart Tissue Analysis</h3>
                <p className="text-text-secondary mb-4">
                  Applying IDF to heart tissue reveals the intricate alignment of myocardial fibers that were previously obscured by high isotropic depolarization.
                </p>
                <div className="aspect-video bg-black/20 rounded flex items-center justify-center border border-border-default">
                  <span className="text-text-muted">Heart Tissue Visualization (Placeholder)</span>
                </div>
              </TabsContent>
              <TabsContent value="brain" className="p-6 border border-border-default rounded-lg bg-secondary">
                <h3 className="text-xl font-bold mb-4">Brain Tissue Analysis</h3>
                <p className="text-text-secondary mb-4">
                  In brain tissue, the filter successfully uncovers the complex network of white matter tracts, demonstrating its effectiveness across different tissue types.
                </p>
                <div className="aspect-video bg-black/20 rounded flex items-center justify-center border border-border-default">
                  <span className="text-text-muted">Brain Tissue Visualization (Placeholder)</span>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BioimagingPublication;
