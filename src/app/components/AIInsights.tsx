import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Users, Clock, Target, Zap, Lightbulb, AlertCircle } from 'lucide-react';

const insights = [
  {
    title: 'Optimal Posting Window',
    description: 'Your audience is most active between 5 PM - 8 PM on weekdays',
    impact: 'High',
    icon: Clock,
    color: 'from-purple-500 to-purple-600',
    recommendation: 'Schedule 60% of your content during these hours for maximum reach'
  },
  {
    title: 'Content Format Preference',
    description: 'Video content generates 3.2x more engagement than images',
    impact: 'High',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
    recommendation: 'Increase video content ratio to 50% for better performance'
  },
  {
    title: 'Platform Strategy',
    description: 'Instagram shows 45% higher engagement than other platforms',
    impact: 'Medium',
    icon: TrendingUp,
    color: 'from-pink-500 to-pink-600',
    recommendation: 'Prioritize Instagram for time-sensitive and visual content'
  },
  {
    title: 'Audience Growth Opportunity',
    description: 'LinkedIn audience grew 78% this month',
    impact: 'Medium',
    icon: Users,
    color: 'from-cyan-500 to-cyan-600',
    recommendation: 'Allocate more resources to LinkedIn content creation'
  },
];

const predictions = [
  {
    content: 'Tech Tutorial Series',
    platform: 'YouTube',
    predictedReach: '125K',
    confidence: 92,
    bestTime: 'Tomorrow 6:30 PM'
  },
  {
    content: 'Fashion Lookbook',
    platform: 'Instagram',
    predictedReach: '98K',
    confidence: 88,
    bestTime: 'Friday 7:00 PM'
  },
  {
    content: 'Industry Analysis',
    platform: 'LinkedIn',
    predictedReach: '45K',
    confidence: 85,
    bestTime: 'Wednesday 12:00 PM'
  },
];

export function AIInsights() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center glow-purple">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Insights</h1>
            <p className="text-muted-foreground mt-1">
              Powered by advanced machine learning algorithms
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{insight.title}</h3>
                    <span className={`
                      px-2 py-1 rounded-full text-xs
                      ${insight.impact === 'High' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-blue-500/20 text-blue-500'}
                    `}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{insight.recommendation}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* AI Predictions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Engagement Predictions</h2>
            <p className="text-sm text-muted-foreground">AI-powered forecasts for your upcoming content</p>
          </div>
        </div>

        <div className="space-y-4">
          {predictions.map((pred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium mb-1">{pred.content}</div>
                  <div className="text-sm text-muted-foreground">{pred.platform}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-primary">{pred.predictedReach}</div>
                  <div className="text-xs text-muted-foreground">Predicted Reach</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Confidence Score</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-input-background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${pred.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{pred.confidence}%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Recommended Time</div>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="w-3 h-3" />
                    {pred.bestTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trending Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-4">Trending in Your Niche</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {['#SummerFashion', '#TechReviews', '#ProductivityHacks'].map((tag, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <div className="text-lg font-semibold mb-2">{tag}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>+{45 + index * 10}% engagement</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
