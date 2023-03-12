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
          date: string | null
          description: string | null
          id: number
          inserted_at: string
          location: string | null
          name: string | null
          organizer_id: string | null
          updated_at: string
        }
        Insert: {
          date?: string | null
          description?: string | null
          id?: number
          inserted_at?: string
          location?: string | null
          name?: string | null
          organizer_id?: string | null
          updated_at?: string
        }
        Update: {
          date?: string | null
          description?: string | null
          id?: number
          inserted_at?: string
          location?: string | null
          name?: string | null
          organizer_id?: string | null
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
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
