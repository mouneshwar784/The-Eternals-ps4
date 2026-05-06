import { motion } from 'motion/react';
import { AnalyticsSection } from './dashboard/AnalyticsSection';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, TrendingUp } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', instagram: 234, youtube: 189, twitter: 145, linkedin: 98 },
  { day: 'Tue', instagram: 267, youtube: 201, twitter: 156, linkedin: 112 },
  { day: 'Wed', instagram: 289, youtube: 234, twitter: 178, linkedin: 134 },
  { day: 'Thu', instagram: 312, youtube: 256, twitter: 198, linkedin: 145 },
  { day: 'Fri', instagram: 298, youtube: 245, twitter: 189, linkedin: 156 },
  { day: 'Sat', instagram: 356, youtube: 278, twitter: 234, linkedin: 123 },
  { day: 'Sun', instagram: 334, youtube: 267, twitter: 212, linkedin: 109 },
];

const contentTypeData = [
  { name: 'Images', value: 45, color: '#8b5cf6' },
  { name: 'Videos', value: 35, color: '#3b82f6' },
  { name: 'Text', value: 15, color: '#06b6d4' },
  { name: 'Stories', value: 5, color: '#10b981' },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold">Advanced Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Deep insights into your content performance
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-input-background rounded-lg border border-border">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className="px-4 py-2 rounded-lg glass-card border border-border hover:border-primary transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </motion.div>

      {/* Main Analytics */}
      <AnalyticsSection />

      {/* Additional Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold mb-6">Weekly Platform Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis dataKey="day" stroke="#a1a1aa" style={{ fontSize: '12px' }} />
              <YAxis stroke="#a1a1aa" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 27, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#e4e4e7'
                }}
              />
              <Line type="monotone" dataKey="instagram" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="youtube" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="twitter" stroke="#06b6d4" strokeWidth={2} />
              <Line type="monotone" dataKey="linkedin" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content Type Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold mb-6">Content Type Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8b5cf6"
                dataKey="value"
              >
                {contentTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Best Performing Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6 rounded-xl"
      >
        <h3 className="text-lg font-semibold mb-4">Top Performing Content</h3>
        <div className="space-y-3">
          {[
            { title: 'Summer Fashion Collection', platform: 'Instagram', engagement: '45.2K', growth: '+234%' },
            { title: 'Tech Review Video', platform: 'YouTube', engagement: '38.1K', growth: '+187%' },
            { title: 'Productivity Tips', platform: 'LinkedIn', engagement: '28.5K', growth: '+156%' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div>
                <div className="font-medium mb-1">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.platform}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold mb-1">{item.engagement}</div>
                <div className="flex items-center gap-1 text-sm text-emerald-500">
                  <TrendingUp className="w-4 h-4" />
                  {item.growth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
