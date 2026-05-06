import { useState } from 'react';
import { motion } from 'motion/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  Calendar as CalendarIcon,
  Clock,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  AlertCircle,
  CheckCircle,
  GripVertical
} from 'lucide-react';

const timeSlots = [
  '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const scheduledContent = [
  {
    id: '1',
    title: 'Summer Fashion Tips',
    platform: 'instagram',
    platformName: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-purple-500',
    day: 'Mon',
    time: '6:00 PM',
    status: 'optimal',
    engagement: '12K est.'
  },
  {
    id: '2',
    title: 'Tech Review Video',
    platform: 'youtube',
    platformName: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    day: 'Tue',
    time: '9:00 AM',
    status: 'warning',
    engagement: '8K est.'
  },
  {
    id: '3',
    title: 'Industry Insights',
    platform: 'linkedin',
    platformName: 'LinkedIn',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    day: 'Wed',
    time: '12:00 PM',
    status: 'optimal',
    engagement: '3K est.'
  },
];

interface ContentItem {
  id: string;
  title: string;
  platform: string;
  platformName: string;
  icon: any;
  color: string;
  day: string;
  time: string;
  status: string;
  engagement: string;
}

function DraggableContent({ item }: { item: ContentItem }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'content',
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const Icon = item.icon;

  return (
    <div
      ref={drag}
      className={`
        glass-card p-4 rounded-lg border cursor-move transition-all
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${item.status === 'optimal' ? 'border-emerald-500/30' : 'border-yellow-500/30'}
      `}
    >
      <div className="flex items-center gap-3 mb-2">
        <GripVertical className="w-4 h-4 text-muted-foreground" />
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">{item.title}</div>
          <div className="text-xs text-muted-foreground">{item.platformName}</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-3 h-3" />
          {item.time}
        </div>
        {item.status === 'optimal' ? (
          <CheckCircle className="w-4 h-4 text-emerald-500" />
        ) : (
          <AlertCircle className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </div>
  );
}

function TimeSlot({ day, time }: { day: string; time: string }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'content',
    drop: () => ({ day, time }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`
        min-h-[100px] p-2 rounded-lg border border-dashed transition-all
        ${isOver ? 'border-primary bg-primary/10' : 'border-border/50'}
      `}
    />
  );
}

export function Scheduler() {
  const [view, setView] = useState<'week' | 'month'>('week');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold">Content Scheduler</h1>
            <p className="text-muted-foreground mt-1">
              Drag and drop to schedule your content
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-input-background rounded-lg p-1 border border-border">
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  view === 'week' ? 'bg-primary text-white' : 'text-muted-foreground'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setView('month')}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  view === 'month' ? 'bg-primary text-white' : 'text-muted-foreground'
                }`}
              >
                Month
              </button>
            </div>

            <button className="px-4 py-2 rounded-lg glass-card border border-border hover:border-primary transition-colors">
              <CalendarIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 rounded-xl overflow-x-auto"
        >
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-8 gap-3 mb-4">
              <div className="text-sm font-semibold text-muted-foreground">Time</div>
              {days.map(day => (
                <div key={day} className="text-sm font-semibold text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-8 gap-3 mb-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  {time}
                </div>
                {days.map(day => {
                  const content = scheduledContent.find(
                    item => item.day === day && item.time === time
                  );

                  return (
                    <div key={`${day}-${time}`}>
                      {content ? (
                        <DraggableContent item={content} />
                      ) : (
                        <TimeSlot day={day} time={time} />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scheduled Content List */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Upcoming Posts</h2>
            <div className="space-y-3">
              {scheduledContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {item.day} at {item.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{item.engagement}</div>
                    {item.status === 'optimal' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto mt-1" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500 ml-auto mt-1" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conflicts & Warnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Scheduling Insights</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold">No Conflicts</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your schedule is optimized with no overlapping posts
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">Peak Time Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Thursday 6:30 PM is your best performing slot
                </p>
              </div>

              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">Cooldown Notice</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Instagram cooldown: 4 hours remaining
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DndProvider>
  );
}
