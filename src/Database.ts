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
      event: {
        Row: {
          category: string | null
          date: string | null
          description: string | null
          id: number
          image_url: string | null
          inserted_at: string
          location: string | null
          long_description: string | null
          name: string | null
          organizer_id: string | null
          organizer_name: string | null
          type: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          date?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          inserted_at?: string
          location?: string | null
          long_description?: string | null
          name?: string | null
          organizer_id?: string | null
          organizer_name?: string | null
          type?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          date?: string | null
          description?: string | null
          id?: number
          image_url?: string | null
          inserted_at?: string
          location?: string | null
          long_description?: string | null
          name?: string | null
          organizer_id?: string | null
          organizer_name?: string | null
          type?: string | null
          updated_at?: string
        }
      }
      event_statistics: {
        Row: {
          created_at: string | null
          enrolled: number
          event_id: number
          viewed: number
        }
        Insert: {
          created_at?: string | null
          enrolled?: number
          event_id?: number
          viewed?: number
        }
        Update: {
          created_at?: string | null
          enrolled?: number
          event_id?: number
          viewed?: number
        }
      }
      registration: {
        Row: {
          attendee_count: number | null
          attendee_email: string | null
          attendee_name: string | null
          created_at: string | null
          event_id: number | null
          id: number
        }
        Insert: {
          attendee_count?: number | null
          attendee_email?: string | null
          attendee_name?: string | null
          created_at?: string | null
          event_id?: number | null
          id?: number
        }
        Update: {
          attendee_count?: number | null
          attendee_email?: string | null
          attendee_name?: string | null
          created_at?: string | null
          event_id?: number | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      update_event_statistic_viewed: {
        Args: {
          id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
