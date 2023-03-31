import type { Database } from './Database';

export type Event = Database['public']['Tables']['event']['Row'];
export type EventStatistic = Database['public']['Tables']['event_statistics']['Row'];
export type Registration = Database['public']['Tables']['registration']['Row'];
