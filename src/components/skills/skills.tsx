import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skill } from "@/types/skill";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Skeleton } from "../ui/skeleton";

interface SkillsProps {
    title: string;
    skills: Skill[];
    loading: boolean;
}

export function Skills({title, skills, loading}: SkillsProps) {

    return (
        <Card className="w-full max-w-md mx-auto">
            {loading ? <Skeleton className="h-96 w-full" /> :
            <>
            <CardHeader>
                <CardTitle><span className="flex items-center text-xl font-bold">{title}</span></CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <Separator className="my-2" />
                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <Badge><strong>{skill.name}</strong></Badge>
                                    <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <Progress value={skill.level} />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </CardContent>
            </>
            }
        </Card>
    );
}