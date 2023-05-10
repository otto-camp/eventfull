import type { Database } from './Database';

export type Conference = Database['public']['Tables']['conferences']['Row'];
export type Event = Database['public']['Tables']['events']['Row'];
export type Profile = Database['public']['Tables']['profiles']['Row'];

export type MetadataJson = {
	[key: string]: string | number | boolean;
};
