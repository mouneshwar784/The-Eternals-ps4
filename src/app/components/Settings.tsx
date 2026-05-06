import { motion } from 'motion/react';
import { Settings as SettingsIcon, User, Bell, Lock, Palette, Globe, Zap } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account and preferences
        </p>
      </motion.div>

      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Alex Creator"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                defaultValue="alex@creator.ai"
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Creator Niche</label>
            <select className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none">
              <option>Fashion & Lifestyle</option>
              <option>Technology</option>
              <option>Business</option>
              <option>Education</option>
              <option>Entertainment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Bio</label>
            <textarea
              rows={4}
              defaultValue="Content creator passionate about fashion and lifestyle."
              className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Best time alerts', description: 'Get notified when your audience is most active' },
            { label: 'Performance updates', description: 'Weekly performance reports and insights' },
            { label: 'Scheduling reminders', description: 'Reminders for scheduled posts' },
            { label: 'AI recommendations', description: 'New optimization suggestions' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors">
              <div>
                <div className="font-medium mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-input-background rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-secondary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
              </label>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6 rounded-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">AI Preferences</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Recommendation Aggressiveness</label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="70"
              className="w-full h-2 bg-input-background rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-secondary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Conservative</span>
              <span>Aggressive</span>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Primary Goal</label>
            <select className="w-full px-4 py-3 bg-input-background rounded-lg border border-border">
              <option>Maximize Engagement</option>
              <option>Maximize Reach</option>
              <option>Balance Both</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all glow-purple">
          Save Changes
        </button>
      </motion.div>
    </div>
  );
}
