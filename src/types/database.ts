export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          category: string;
          start_date: string | null;
          end_date: string | null;
          yarn: string | null;
          needle: string | null;
          image_url: string | null;
          row_counter: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          category: string;
          start_date?: string | null;
          end_date?: string | null;
          yarn?: string | null;
          needle?: string | null;
          image_url?: string | null;
          row_counter?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          category?: string;
          start_date?: string | null;
          end_date?: string | null;
          yarn?: string | null;
          needle?: string | null;
          image_url?: string | null;
          row_counter?: number;
          created_at?: string;
        };
      };
    };
  };
};
