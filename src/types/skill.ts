export type Skill = ID &{
    name: string;
    description: string;
    level: number;
    created_at?: string;
}