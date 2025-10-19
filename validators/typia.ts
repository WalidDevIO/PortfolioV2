import typia from 'typia'
import type { TablesUpdate, TablesInsert, Tables } from '~/types/database.types';

const slugValidator = typia.createValidate<{ slug: string }>()
const idValidator = typia.createValidate<{ id: string }>()
const blogInsertValidator = typia.createValidate<TablesInsert<"blog">>()
const blogUpdateValidator = typia.createValidate<TablesUpdate<"blog">>()
const blogValidator = typia.createValidate<Tables<"blog">>()
const projectInsertValidator = typia.createValidate<TablesInsert<"projects">>()
const projectUpdateValidator = typia.createValidate<TablesUpdate<"projects">>()
const projectValidator = typia.createValidate<Tables<"projects">>()
const formationInsertValidator = typia.createValidate<TablesInsert<"formations">>()
const formationUpdateValidator = typia.createValidate<TablesUpdate<"formations">>()
const formationValidator = typia.createValidate<Tables<"formations">>()
const skillInsertValidator = typia.createValidate<TablesInsert<"skills">>()
const skillUpdateValidator = typia.createValidate<TablesUpdate<"skills">>()
const skillValidator = typia.createValidate<Tables<"skills">>()
const experienceInsertValidator = typia.createValidate<TablesInsert<"experiences">>()
const experienceUpdateValidator = typia.createValidate<TablesUpdate<"experiences">>()
const experienceValidator = typia.createValidate<Tables<"experiences">>()
const messageInsertValidator = typia.createValidate<TablesInsert<"livredor">>()
const messageValidator = typia.createValidate<Tables<"livredor">>()

export { 
    slugValidator,
    idValidator,
    blogInsertValidator,
    blogUpdateValidator,
    blogValidator,
    projectInsertValidator,
    projectUpdateValidator,
    projectValidator,
    formationInsertValidator,
    formationUpdateValidator,
    formationValidator,
    skillInsertValidator,
    skillUpdateValidator,
    skillValidator,
    experienceInsertValidator,
    experienceUpdateValidator,
    experienceValidator,
    messageInsertValidator,
    messageValidator,
};