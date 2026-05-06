import { motion } from 'motion/react';
import { ContentUploadCard } from './dashboard/ContentUploadCard';
import { AIRecommendationPanel } from './dashboard/AIRecommendationPanel';
import { AnalyticsSection } from './dashboard/AnalyticsSection';
import { TrendingUp, Calendar, Clock, Zap } from 'lucide-react';

const recentActivity = [
  {
    id: 1,
    platform: 'Instagram',
    title: 'Summer Fashion Collection',
    status: 'Published',
    engagement: '12.4K',
    time: '2 hours ago',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 2,
    platform: 'YouTube',
    title: 'Tech Review: Latest Gadgets',
    status: 'Scheduled',
    engagement: 'Est. 8.2K',
    time: 'Tomorrow 6:30 PM',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 3,
    platform: 'Twitter',
    title: 'Quick Tips Thread',
    status: 'Published',
    engagement: '5.8K',
    time: '5 hours ago',
    color: 'from-blue-400 to-blue-500'
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Creator!</h1>
            <p className="text-muted-foreground mt-1">
              Let's optimize your content for maximum engagement
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 glass-card rounded-lg border border-primary/30">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm">AI Powered</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-semibold">12</div>
              <div className="text-sm text-muted-foreground">Posts Scheduled</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <div className="text-2xl font-semibold">+23%</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <div className="text-2xl font-semibold">6:30 PM</div>
              <div className="text-sm text-muted-foreground">Best Time Today</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Content Upload */}
        <div className="lg:col-span-2">
          <ContentUploadCard />
        </div>

        {/* Right Column - AI Recommendations */}
        <div>
          <AIRecommendationPanel />
        </div>
      </div>

      {/* Analytics Section */}
      <AnalyticsSection />

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card p-6 rounded-xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="text-sm text-muted-foreground">Your latest content performance</p>
          </div>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center text-white text-sm font-semibold`}>
                  {activity.platform.substring(0, 2)}
                </div>
                <div>
                  <div className="font-medium mb-1">{activity.title}</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{activity.platform}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className={`
                  px-3 py-1 rounded-full text-xs mb-2
                  ${activity.status === 'Published' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-blue-500/20 text-blue-500'}
                `}>
                  {activity.status}
                </div>
                <div className="text-sm font-semibold">{activity.engagement}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
