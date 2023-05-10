export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      conferences: {
        Row: {
          duration: number | null
          id: number
          long_description: string | null
          speakers: Json | null
        }
        Insert: {
          duration?: number | null
          id?: number
          long_description?: string | null
          speakers?: Json | null
        }
        Update: {
          duration?: number | null
          id?: number
          long_description?: string | null
          speakers?: Json | null
        }
      }
      events: {
        Row: {
          attendees: string | null
          created_at: string | null
          date: string | null
          id: number
          invited_emails: string[] | null
          location: string | null
          name: string | null
          organizer_id: string | null
          thumbnail_url: string | null
        }
        Insert: {
          attendees?: string | null
          created_at?: string | null
          date?: string | null
          id?: number
          invited_emails?: string[] | null
          location?: string | null
          name?: string | null
          organizer_id?: string | null
          thumbnail_url?: string | null
        }
        Update: {
          attendees?: string | null
          created_at?: string | null
          date?: string | null
          id?: number
          invited_emails?: string[] | null
          location?: string | null
          name?: string | null
          organizer_id?: string | null
          thumbnail_url?: string | null
        }
      }
      profiles: {
        Row: {
          email: string | null
          id: string
          metadata: Json | null
        }
        Insert: {
          email?: string | null
          id: string
          metadata?: Json | null
        }
        Update: {
          email?: string | null
          id?: string
          metadata?: Json | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
