
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Clock,
  ArrowUpRight
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art language models that understand context, generate human-like text, and provide intelligent insights.',
    gradient: 'from-primary-500 to-primary-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get responses in milliseconds with our optimized infrastructure. No more waiting around for AI to think.',
    gradient: 'from-accent-500 to-accent-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and advanced access controls keep your data safe and secure.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy worldwide with our edge network. Low latency access from anywhere on the planet.',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track usage, monitor performance, and gain insights with our comprehensive analytics suite.',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to help you succeed with NexusAI.',
    gradient: 'from-orange-500 to-orange-600'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Everything You Need to
            <span className="gradient-text"> Succeed</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to transform how you work with AI. Built for teams that demand excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-medium text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
