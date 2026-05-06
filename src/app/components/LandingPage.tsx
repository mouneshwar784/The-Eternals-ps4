import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Sparkles,
  TrendingUp,
  Clock,
  Target,
  BarChart3,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';

const stats = [
  { value: '10M+', label: 'Content Optimized' },
  { value: '94%', label: 'Accuracy Rate' },
  { value: '2.5x', label: 'Avg Engagement' },
  { value: '500K+', label: 'Creators' },
];

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Recommendations',
    description: 'Get intelligent suggestions on the best platform and time to post your content.',
  },
  {
    icon: TrendingUp,
    title: 'Engagement Prediction',
    description: 'Predict potential engagement scores before posting with 94% accuracy.',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'Automatically schedule posts when your audience is most active.',
  },
  {
    icon: Target,
    title: 'Multi-Platform',
    description: 'Optimize for Instagram, YouTube, Twitter, and LinkedIn simultaneously.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track performance with real-time analytics and detailed insights.',
  },
  {
    icon: Shield,
    title: 'Conflict Detection',
    description: 'Prevent posting conflicts with intelligent cooldown management.',
  },
];

const platforms = [
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
  { name: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
  { name: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-500' },
  { name: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center glow-purple">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CreatorAI
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered Content Optimization</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Post Smarter,
              <br />
              Grow Faster
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let AI decide when and where to post your content for maximum engagement.
              Optimize your creator workflow across all platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all flex items-center gap-2 glow-purple"
              >
                Optimize My Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-lg glass-card border border-border hover:border-primary transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Platform Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex items-center justify-center gap-6 flex-wrap"
          >
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs text-muted-foreground">{platform.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Win</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features designed to help creators maximize their reach and engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-2xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Ready to 10x Your Engagement?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join 500,000+ creators using AI to optimize their content strategy
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all glow-purple"
              >
                Start Optimizing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2026 CreatorAI. Empowering creators with AI-driven insights.</p>
        </div>
      </footer>
    </div>
  );
}
