import { supabase } from './supabase';
import type { Project, ProjectInsert, ProjectUpdate } from '../types/project';
import type { Database } from '../types/database';

type ProjectRow = Database['public']['Tables']['projects']['Row'];

function toProject(row: ProjectRow): Project {
  return {
    id: row.id,
    name: row.name,
    category: row.category as Project['category'],
    startDate: row.start_date,
    endDate: row.end_date,
    yarn: row.yarn,
    needle: row.needle,
    imageUrl: row.image_url,
    rowCounter: row.row_counter,
    createdAt: row.created_at,
  };
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data.map(toProject);
}

export async function getProject(id: string): Promise<Project> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return toProject(data);
}

export async function createProject(input: ProjectInsert): Promise<Project> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('로그인 정보가 없습니다.');

  const { data, error } = await supabase
    .from('projects')
    .insert({
      user_id: user.id,
      name: input.name,
      category: input.category,
      start_date: input.startDate,
      end_date: input.endDate,
      yarn: input.yarn,
      needle: input.needle,
      image_url: input.imageUrl,
    })
    .select()
    .single();

  if (error) throw error;
  return toProject(data);
}

export async function updateProject(id: string, input: ProjectUpdate): Promise<Project> {
  const { data, error } = await supabase
    .from('projects')
    .update({
      name: input.name,
      category: input.category,
      start_date: input.startDate,
      end_date: input.endDate,
      yarn: input.yarn,
      needle: input.needle,
      image_url: input.imageUrl,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return toProject(data);
}

export async function updateRowCounter(id: string, count: number): Promise<void> {
  const { error } = await supabase
    .from('projects')
    .update({ row_counter: count })
    .eq('id', id);

  if (error) throw error;
}

export async function deleteProject(id: string): Promise<void> {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
