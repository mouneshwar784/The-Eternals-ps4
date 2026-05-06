import { motion } from 'motion/react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Eye, Heart, Share2 } from 'lucide-react';

const engagementData = [
  { time: '12 AM', engagement: 45 },
  { time: '3 AM', engagement: 23 },
  { time: '6 AM', engagement: 67 },
  { time: '9 AM', engagement: 89 },
  { time: '12 PM', engagement: 156 },
  { time: '3 PM', engagement: 178 },
  { time: '6 PM', engagement: 234 },
  { time: '9 PM', engagement: 198 },
];

const platformData = [
  { platform: 'Instagram', engagement: 234, color: '#8b5cf6' },
  { platform: 'YouTube', engagement: 189, color: '#3b82f6' },
  { platform: 'Twitter', engagement: 145, color: '#06b6d4' },
  { platform: 'LinkedIn', engagement: 98, color: '#10b981' },
];

const stats = [
  { label: 'Total Reach', value: '2.4M', change: '+12.5%', icon: Users, color: 'from-purple-500 to-purple-600' },
  { label: 'Impressions', value: '5.8M', change: '+8.2%', icon: Eye, color: 'from-blue-500 to-blue-600' },
  { label: 'Engagement', value: '456K', change: '+23.1%', icon: Heart, color: 'from-pink-500 to-pink-600' },
  { label: 'Shares', value: '89K', change: '+15.7%', icon: Share2, color: 'from-cyan-500 to-cyan-600' },
];

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1 text-emerald-500 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-semibold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Engagement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Audience Activity</h3>
              <p className="text-sm text-muted-foreground">Peak engagement times</p>
            </div>
            <select className="px-3 py-2 bg-input-background rounded-lg border border-border text-sm">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis
                dataKey="time"
                stroke="#a1a1aa"
                style={{ fontSize: '12px' }}
              />
              <YAxis stroke="#a1a1aa" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 27, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#e4e4e7'
                }}
              />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#engagementGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Platform Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Platform Performance</h3>
              <p className="text-sm text-muted-foreground">Engagement by platform</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis
                dataKey="platform"
                stroke="#a1a1aa"
                style={{ fontSize: '12px' }}
              />
              <YAxis stroke="#a1a1aa" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 27, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#e4e4e7'
                }}
              />
              <Bar
                dataKey="engagement"
                fill="url(#barGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>

          {/* Platform Legend */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {platformData.map(platform => (
              <div key={platform.platform} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="text-sm text-muted-foreground">{platform.platform}</span>
                </div>
                <span className="text-sm font-semibold">{platform.engagement}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6 rounded-xl"
      >
        <h3 className="text-lg font-semibold mb-4">Performance Insights</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div className="text-2xl font-semibold text-primary mb-1">6:30 PM</div>
            <div className="text-sm text-muted-foreground">Best Posting Time</div>
          </div>
          <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
            <div className="text-2xl font-semibold text-secondary mb-1">Instagram</div>
            <div className="text-sm text-muted-foreground">Top Platform</div>
          </div>
          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
            <div className="text-2xl font-semibold text-cyan-500 mb-1">2.3x</div>
            <div className="text-sm text-muted-foreground">Avg. Performance</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
