import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" 

export function MaintenanceMode() {
    return (
        <Card className="w-50 opacity-80 bg-transparent mx-auto">
            <CardHeader>
                <CardTitle className="text-center">
                    État du projet
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-center font-bold">
                    En cours de construction...
                </p>
                <p className="text-sm text-center mt-2">
                    Ce portfolio est en constante évolution. Revenez bientôt pour découvrir de nouvelles fonctionnalités et projets !
                </p>
            </CardContent>
        </Card>
    );
}