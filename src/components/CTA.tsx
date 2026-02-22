
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 opacity-90" />
          
          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Limited Time: 20% Off Annual Plans</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your
              <br className="hidden sm:block" />
              Workflow?
            </h2>

            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
              Join thousands of companies already using OpusAI to work smarter, not harder. Start your free trial today.
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white rounded-xl text-gray-900 font-semibold text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 border border-white/30 rounded-xl text-white font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            <p className="mt-8 text-sm text-white/70">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
