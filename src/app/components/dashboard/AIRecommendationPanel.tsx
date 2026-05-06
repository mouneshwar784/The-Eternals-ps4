import { motion } from 'motion/react';
import {
  Sparkles,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle,
  Instagram,
  Calendar
} from 'lucide-react';

const recommendations = {
  platform: 'Instagram',
  platformIcon: Instagram,
  bestTime: '6:30 PM',
  date: 'Today',
  engagement: 87,
  trendScore: 92,
  riskLevel: 'low',
  confidence: 94,
  reasoning: [
    'Your audience is 73% more active during evening hours',
    'Similar content performed 2.3x better on Instagram',
    'Trending hashtags align with your content category',
    'Low platform competition at this time slot'
  ]
};

export function AIRecommendationPanel() {
  const Icon = recommendations.platformIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">AI Recommendations</h2>
          <p className="text-sm text-muted-foreground">
            {recommendations.confidence}% confidence
          </p>
        </div>
      </div>

      {/* Best Platform & Time */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recommended Platform</p>
              <p className="text-lg font-semibold">{recommendations.platform}</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
            Best Match
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/5 border border-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Optimal Posting Time</p>
              <p className="text-lg font-semibold">
                {recommendations.date} at {recommendations.bestTime}
              </p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm">
            Peak Hours
          </div>
        </div>
      </div>

      {/* Prediction Scores */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Engagement Prediction
            </span>
            <span className="text-sm font-semibold">{recommendations.engagement}%</span>
          </div>
          <div className="h-2 bg-input-background rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${recommendations.engagement}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              Trend Score
            </span>
            <span className="text-sm font-semibold">{recommendations.trendScore}%</span>
          </div>
          <div className="h-2 bg-input-background rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${recommendations.trendScore}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="h-full bg-gradient-to-r from-secondary to-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className={`
        p-4 rounded-lg border mb-6
        ${recommendations.riskLevel === 'low' ? 'bg-emerald-500/10 border-emerald-500/30' : ''}
        ${recommendations.riskLevel === 'medium' ? 'bg-yellow-500/10 border-yellow-500/30' : ''}
        ${recommendations.riskLevel === 'high' ? 'bg-red-500/10 border-red-500/30' : ''}
      `}>
        <div className="flex items-center gap-2 mb-2">
          {recommendations.riskLevel === 'low' ? (
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          )}
          <span className="font-semibold capitalize">{recommendations.riskLevel} Risk</span>
        </div>
        <p className="text-sm text-muted-foreground">
          {recommendations.riskLevel === 'low'
            ? 'No scheduling conflicts detected. Clear to post.'
            : 'Minor conflict detected. Consider adjusting time.'
          }
        </p>
      </div>

      {/* AI Reasoning */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Why This Recommendation?</h3>
        <div className="space-y-2">
          {recommendations.reasoning.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="px-4 py-3 rounded-lg border border-border hover:border-primary transition-colors">
          Schedule Later
        </button>
        <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all">
          Post Now
        </button>
      </div>
    </motion.div>
  );
}
