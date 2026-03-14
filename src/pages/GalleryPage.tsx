import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { HeroDecoration } from "@/components/SvgElements";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Teacher with preschool children", category: "Training" },
  { src: gallery2, alt: "Training session in progress", category: "Classroom" },
  { src: gallery3, alt: "Student presenting in classroom", category: "Events" },
  { src: gallery4, alt: "Early childhood education activity", category: "Training" },
  { src: gallery5, alt: "Graduation ceremony", category: "Events" },
  { src: gallery6, alt: "Modern classroom facilities", category: "Classroom" },
];

const categories = ["All", "Training", "Classroom", "Events"];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div>
      {/* Hero Header */}
      <section className="gradient-hero py-20 md:py-28 relative overflow-hidden">
        <HeroDecoration />
        <div className="container text-center relative z-10">
          <AnimatedSection variant="fadeUp">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Our Moments</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5">Gallery</h1>
            <p className="text-white/75 max-w-2xl mx-auto text-lg">
              A glimpse into our training programs, classroom activities, and student achievements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filter tabs */}
          <AnimatedSection className="flex justify-center mb-10" variant="fadeUp">
            <div className="flex gap-2 bg-muted rounded-xl p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Image grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="overflow-hidden rounded-2xl shadow-md group cursor-pointer relative"
                    onClick={() => setSelectedImage(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{img.alt}</p>
                        <span className="text-white/60 text-xs">{img.category}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </motion.button>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={filteredImages[selectedImage]?.src}
              alt={filteredImages[selectedImage]?.alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
