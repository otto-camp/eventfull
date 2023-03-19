import type { Database } from "./Database";

export type Event = Database['public']['Tables']['event']['Row'];
export type Registration = Database['public']['Tables']['registration']['Row'];
