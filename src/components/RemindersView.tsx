import React, { useState } from 'react';
import {
  Bell,
  Calendar,
  AlertCircle,
  Clock,
  Plus,
  CheckCircle2,
  Filter,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ReminderItem, ActiveTab } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface RemindersViewProps {
  reminders: ReminderItem[];
  onNavigate: (tab: ActiveTab) => void;
  onAddReminder: (item: ReminderItem) => void;
}

export const RemindersView: React.FC<RemindersViewProps> = ({
  reminders,
  onNavigate,
  onAddReminder,
}) => {
  const { t } = useLanguage();
  const [filterPriority, setFilterPriority] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newPriority, setNewPriority] = useState<'high' | 'medium' | 'low'>('medium');

  const filteredReminders = reminders.filter((r) => {
    if (filterPriority !== 'all' && r.priority !== filterPriority) return false;
    return true;
  });

  const handleCreateReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDate) return;

    const reminder: ReminderItem = {
      id: 'rem-' + Date.now(),
      title: newTitle,
      description: newDesc || 'Citizen customized civic deadline reminder.',
      dueDate: newDate,
      priority: newPriority,
      type: 'deadline',
      isRead: false,
      actionLink: 'discover'
    };

    onAddReminder(reminder);
    setNewTitle('');
    setNewDesc('');
    setNewDate('');
    setShowAddModal(false);
  };

  const priorityBadges = {
    high: 'bg-rose-100 text-rose-800 border-rose-300',
    medium: 'bg-amber-100 text-amber-800 border-amber-300',
    low: 'bg-blue-100 text-blue-800 border-blue-300'
  };

  return (
    <div id="civiclens-reminders-view" className="space-y-8 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
              <Bell className="w-4 h-4" />
              <span>{t('navReminders')}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-0.5">
              {t('upcomingDeadlines')}
            </h1>
            <p className="text-xs text-slate-600">
              {t('remindersSubtitle')}
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="self-start sm:self-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>{t('addCustomReminder')}</span>
          </button>
        </div>

        {/* Priority filter pills */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-400 mr-1">{t('filterPriority')}:</span>
          {(['all', 'high', 'medium', 'low'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setFilterPriority(p)}
              className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all ${
                filterPriority === p
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {p === 'all' ? t('allCategories') : p}
            </button>
          ))}
        </div>
      </div>

      {/* Reminders List */}
      <div className="space-y-3.5">
        {filteredReminders.map((rem) => (
          <div
            key={rem.id}
            className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border uppercase ${priorityBadges[rem.priority]}`}>
                  {rem.priority} Priority
                </span>
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t('targetDate')}: {rem.dueDate}</span>
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-sm">{rem.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{rem.description}</p>
            </div>

            {rem.actionLink && (
              <button
                onClick={() => onNavigate(rem.actionLink!)}
                className="self-start sm:self-center px-4 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>{t('takeAction')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Custom Reminder Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in zoom-in-95">
            <h3 className="font-bold text-slate-900 text-base">{t('addCustomReminder')}</h3>

            <form onSubmit={handleCreateReminder} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">{t('reminderTitle')}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Renew Income Certificate at Taluk Office"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">{t('reminderDescription')}</label>
                <textarea
                  rows={2}
                  placeholder="Additional details..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">{t('dueDate')}</label>
                  <input
                    type="date"
                    required
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">{t('priority')}</label>
                  <select
                    value={newPriority}
                    onChange={(e: any) => setNewPriority(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-slate-600 font-bold hover:text-slate-900"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs"
                >
                  {t('saveReminder')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
