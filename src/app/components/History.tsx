import { motion } from 'motion/react';
import { History as HistoryIcon, Instagram, Youtube, Twitter, Linkedin, TrendingUp, Calendar } from 'lucide-react';

const historyData = [
  {
    id: 1,
    title: 'Summer Fashion Collection Launch',
    platform: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-purple-500',
    postedAt: '2 days ago',
    engagement: '45.2K',
    likes: '38.5K',
    comments: '4.2K',
    shares: '2.5K',
    performance: '+234%',
    status: 'excellent'
  },
  {
    id: 2,
    title: 'Tech Review: Latest Smartphone',
    platform: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    postedAt: '5 days ago',
    engagement: '38.1K',
    likes: '31.2K',
    comments: '5.8K',
    shares: '1.1K',
    performance: '+187%',
    status: 'excellent'
  },
  {
    id: 3,
    title: 'Industry Insights Thread',
    platform: 'Twitter',
    icon: Twitter,
    color: 'from-blue-400 to-blue-500',
    postedAt: '1 week ago',
    engagement: '28.5K',
    likes: '22.1K',
    comments: '3.9K',
    shares: '2.5K',
    performance: '+156%',
    status: 'good'
  },
  {
    id: 4,
    title: 'Productivity Tips for Professionals',
    platform: 'LinkedIn',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    postedAt: '1 week ago',
    engagement: '15.2K',
    likes: '12.5K',
    comments: '2.1K',
    shares: '600',
    performance: '+98%',
    status: 'good'
  },
  {
    id: 5,
    title: 'Behind the Scenes Vlog',
    platform: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-purple-500',
    postedAt: '2 weeks ago',
    engagement: '12.8K',
    likes: '10.2K',
    comments: '1.9K',
    shares: '700',
    performance: '+67%',
    status: 'average'
  },
];

export function History() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold">Content History</h1>
          <p className="text-muted-foreground mt-1">
            View your past content and performance metrics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-input-background rounded-lg border border-border">
            <option>All Platforms</option>
            <option>Instagram</option>
            <option>YouTube</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
          </select>
          <select className="px-4 py-2 bg-input-background rounded-lg border border-border">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Posts', value: '127', icon: HistoryIcon },
          { label: 'Total Engagement', value: '1.2M', icon: TrendingUp },
          { label: 'Avg. Performance', value: '+156%', icon: TrendingUp },
          { label: 'Best Platform', value: 'Instagram', icon: Instagram },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* History List */}
      <div className="space-y-4">
        {historyData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Platform Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{item.platform}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.postedAt}
                        </span>
                      </div>
                    </div>
                    <div className={`
                      px-3 py-1 rounded-full text-xs
                      ${item.status === 'excellent' ? 'bg-emerald-500/20 text-emerald-500' : ''}
                      ${item.status === 'good' ? 'bg-blue-500/20 text-blue-500' : ''}
                      ${item.status === 'average' ? 'bg-yellow-500/20 text-yellow-500' : ''}
                    `}>
                      {item.status.toUpperCase()}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-4 gap-4 mb-3">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Engagement</div>
                      <div className="font-semibold">{item.engagement}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Likes</div>
                      <div className="font-semibold">{item.likes}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Comments</div>
                      <div className="font-semibold">{item.comments}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Shares</div>
                      <div className="font-semibold">{item.shares}</div>
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-emerald-500 font-semibold">
                      {item.performance} vs. average
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
