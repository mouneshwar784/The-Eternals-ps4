import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Upload,
  Image,
  Video,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Clock,
  Users,
  Tag
} from 'lucide-react';

const contentTypes = [
  { value: 'image', label: 'Image', icon: Image },
  { value: 'video', label: 'Video', icon: Video },
  { value: 'text', label: 'Text Post', icon: null },
];

const platforms = [
  { value: 'instagram', label: 'Instagram', icon: Instagram, color: 'from-pink-500 to-purple-500' },
  { value: 'youtube', label: 'YouTube', icon: Youtube, color: 'from-red-500 to-red-600' },
  { value: 'twitter', label: 'Twitter', icon: Twitter, color: 'from-blue-400 to-blue-500' },
  { value: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
];

export function ContentUploadCard() {
  const [selectedType, setSelectedType] = useState('image');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram']);
  const [urgency, setUrgency] = useState(50);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Upload className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Upload Content</h2>
          <p className="text-sm text-muted-foreground">Add your content for AI optimization</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Content Title */}
        <div>
          <label className="block text-sm mb-2">Content Title</label>
          <input
            type="text"
            placeholder="Enter a catchy title..."
            className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Content Type */}
        <div>
          <label className="block text-sm mb-2">Content Type</label>
          <div className="grid grid-cols-3 gap-3">
            {contentTypes.map(type => {
              const Icon = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`
                    px-4 py-3 rounded-lg border transition-all flex items-center justify-center gap-2
                    ${selectedType === type.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50'
                    }
                  `}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-sm">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Platform Selection */}
        <div>
          <label className="block text-sm mb-2">Target Platforms</label>
          <div className="grid grid-cols-2 gap-3">
            {platforms.map(platform => {
              const Icon = platform.icon;
              const isSelected = selectedPlatforms.includes(platform.value);
              return (
                <button
                  key={platform.value}
                  onClick={() => togglePlatform(platform.value)}
                  className={`
                    px-4 py-3 rounded-lg border transition-all flex items-center gap-3
                    ${isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                    }
                  `}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">{platform.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Sensitivity */}
        <div>
          <label className="block text-sm mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Time Sensitivity: {urgency}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={urgency}
            onChange={(e) => setUrgency(Number(e.target.value))}
            className="w-full h-2 bg-input-background rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-secondary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>Flexible</span>
            <span>Urgent</span>
          </div>
        </div>

        {/* Expected Audience */}
        <div>
          <label className="block text-sm mb-2 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Expected Audience Size
          </label>
          <select className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
            <option>Small (1K - 10K)</option>
            <option>Medium (10K - 100K)</option>
            <option>Large (100K - 1M)</option>
            <option>Mega (1M+)</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm mb-2 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Content Tags
          </label>
          <input
            type="text"
            placeholder="e.g., tech, lifestyle, tutorial..."
            className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer group">
          <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
          <p className="text-sm text-muted-foreground mb-1">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">
            PNG, JPG, MP4 up to 100MB
          </p>
        </div>

        {/* Submit Button */}
        <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all glow-purple">
          Get AI Recommendation
        </button>
      </div>
    </motion.div>
  );
}
