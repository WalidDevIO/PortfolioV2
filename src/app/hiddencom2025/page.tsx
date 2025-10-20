import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const projects = [
    {
        title: "drf‑sso",
        sections: [
            {
                heading: "Contexte du projet",
                content: (
                    <>
                        drf‑sso est une bibliothèque développée individuellement pour faciliter des missions d’alternance. L’objectif : créer une solution SSO (Single Sign‑On) pour simplifier l’authentification sur plusieurs services Django REST Framework. Ce projet personnel vise à structurer et accélérer les méthodes d’authentification.{" "}
                        <Link href="https://github.com/walkloly/drf-sso" target="_blank" className="text-blue-600 underline ml-1">
                            Voir le projet
                        </Link>
                    </>
                ),
            },
            {
                heading: "Rôle et motivations",
                content:
                    "Constatant la répétitivité de l’authentification, j’ai conçu un module réutilisable. Seul sur le cœur du code, j’ai sollicité des retours réguliers de l’équipe pour gagner du temps et structurer ma compréhension des mécanismes d’authentification.",
            },
            {
                heading: "Apprentissages techniques et humains",
                content:
                    "J’ai approfondi le fonctionnement des tokens, sessions, et le protocole OAuth. Les échanges avec l’équipe produit ont renforcé ma capacité à vulgariser et documenter, facilitant l’appropriation par d’autres développeurs.",
            },
            {
                heading: "Défis rencontrés",
                content:
                    "Anticiper les différents cas d’usage et offrir une solution flexible a été le principal défi. La démarche itérative m’a appris à accepter l’imperfection initiale et à gérer temps et stress entre missions et développement.",
            },
            {
                heading: "Bilan et perspectives",
                content: (
                    <>
                        Ce projet m’a surtout appris l’importance de la communication et de la collaboration. Proposer un outil implique d’écouter, de s’adapter et de documenter. Cette expérience a renforcé ma confiance pour mener des projets transverses.{" "}
                        <Link href="https://github.com/walkloly/drf-sso" target="_blank" className="text-blue-600 underline ml-1">
                            Voir le projet
                        </Link>
                    </>
                ),
            },
        ],
    },
    {
        title: "drf‑query‑lang",
        sections: [
            {
                heading: "Contexte du projet",
                content: (
                    <>
                        drf‑query‑lang est un projet personnel pour améliorer la souplesse des requêtes sur des API Django REST Framework. Né d’un besoin de filtres et tris spécifiques, il propose une syntaxe simple pour des requêtes complexes.{" "}
                        <Link href="https://github.com/walkloly/drf-query-lang" target="_blank" className="text-blue-600 underline ml-1">
                            Voir le projet
                        </Link>
                    </>
                ),
            },
            {
                heading: "Objectifs et rôle",
                content:
                    "Proposer un langage de requête inspiré de GraphQL, compris par le backend DRF. J’ai structuré l’API et réfléchi à l’ergonomie pour les développeurs, en consultant l’équipe pour identifier les besoins.",
            },
            {
                heading: "Leçons apprises",
                content:
                    "La conception d’un langage demande rigueur : grammaire, gestion des erreurs, extensibilité. J’ai découvert des enjeux de performance et d’optimisation SQL, et l’importance de la documentation et des retours utilisateurs.",
            },
            {
                heading: "Difficultés et solutions",
                content:
                    "Maintenir la compatibilité avec des modèles hétérogènes a nécessité des tests et une approche modulaire. Trouver le bon niveau de complexité était crucial pour l’adoption.",
            },
            {
                heading: "Bilan",
                content: (
                    <>
                        Au-delà de la technique, ce projet a été une leçon de communication et de flexibilité. Proposer un langage requiert d’accepter les critiques et de s’adapter. Cette expérience a enrichi mon parcours professionnel.{" "}
                        <Link href="https://github.com/walkloly/drf-query-lang" target="_blank" className="text-blue-600 underline ml-1">
                            Voir le projet
                        </Link>
                    </>
                ),
            },
        ],
    },
    {
        title: "EduTrack",
        sections: [
            {
                heading: "Contexte du projet",
                content: (
                    <>
                        Pour notre projet collectif, nous avons travaillé sur une plateforme de suivi éducatif baptisée EduTrack. Il s’agissait d’un projet de faculté : notre professeur nous a demandé de réaliser une application pour évaluer nos compétences et acquis. Nous avons reçu un cahier des charges détaillant les fonctionnalités attendues (décrites dans le README du projet) et devions concevoir et développer l’application conformément à ces attentes. La première étape a consisté à découper ce cahier des charges en une multitude de microservices pour répartir les responsabilités. Cette synthèse met en lumière cette aventure d’équipe en soulignant les compétences mobilisées et les apprentissages humains.
                    </>
                ),
            },
            {
                heading: "Organisation de l’équipe",
                content:
                    "Nous étions trois développeurs et nous avons rapidement compris que la réussite du projet reposait sur une répartition claire des tâches. Chacun a choisi un ensemble de microservices à concevoir et à développer en fonction de ses affinités techniques. Nous avons défini des interfaces pour que nos services puissent s’intégrer facilement et avons organisé des points de synchronisation réguliers pour suivre l’avancement et ajuster nos priorités. Cette organisation souple nous a permis de progresser de manière coordonnée tout en laissant à chacun la responsabilité de son périmètre.",
            },
            {
                heading: "Expériences marquantes",
                content:
                    "Une des expériences les plus enrichissantes a été la phase de réflexion collective au début du semestre. Dès le départ, le professeur nous a demandé de découper le cahier des charges en une série de microservices. Nous nous sommes mis en mode collaboratif pour identifier ces services, puis des groupes de trois étudiants se sont formés pour se répartir les responsabilités. Chaque groupe a choisi quelques microservices à concevoir et à développer. Cette organisation m’a appris à défendre une idée, à écouter celles des autres et à trouver des compromis pour que nos services s’imbriquent correctement. Sur le plan technique, nous avons très vite compris l’importance de structurer l’application en modules indépendants. Chaque microservice devait être autonome mais capable de communiquer avec les autres via des interfaces claires. Ce découpage facilitait le travail en équipe et permettait à chacun de se concentrer sur son domaine tout en contribuant au résultat final. Pour la démonstration finale, chaque groupe a construit l’application en combinant les microservices qu’il avait développés avec ceux des autres groupes. Cette réutilisation nous a obligés à harmoniser nos approches et à améliorer la cohérence de l’ensemble.",
            },
            {
                heading: "Difficultés et réussites humaines",
                content:
                    "L’un des défis majeurs était de concilier nos emplois du temps et nos modes de travail. Certains d’entre nous préféraient travailler tard le soir, d’autres tôt le matin; nous avons donc appris à respecter les rythmes de chacun. Nous avons dû gérer la pression des échéances et le stress qui l’accompagnait. Pour rester motivés, nous nous sommes organisés des séances de travail en visioconférence où nous partagions nos écrans et nos avancées. Cette transparence a renforcé notre confiance et a permis de mieux gérer nos émotions.",
            },
            {
                heading: "Impact sur mon parcours professionnel",
                content:
                    "En finissant EduTrack, je me suis rendu compte que ce projet était bien plus qu’un exercice technique. Il m’a aidé à affiner mon projet professionnel : je me suis découvert un intérêt pour la coordination d’équipe et l’écoute des besoins des utilisateurs. Je vois désormais la gestion de produit comme une voie possible dans mon avenir professionnel. Ce projet a aussi mis en évidence l’importance d’être capable de raconter une expérience et de présenter son travail de manière structurée et captivante. J’ai donc commencé à travailler ma prise de parole en public, ce que je compte continuer à développer. En résumé, EduTrack a été une aventure humaine riche. J’en retiens que la réussite d’un projet repose autant sur la technologie que sur la communication et l’empathie. Cette expérience m’a donné confiance en ma capacité à mener des projets et à évoluer dans un environnement collaboratif.",
            },
        ],
    },
];

const bilanAlternance = [
    {
        heading: "Bilan de ma première année d’alternance",
        content: (
            <>
                <h3 className="text-lg font-semibold mb-1">Contexte de l’expérience</h3>
                <p className="text-muted-foreground">
                    Lorsque j’ai débuté mon alternance, je souhaitais avant tout apprendre et apporter de la valeur dans un environnement complexe où les données étaient dispersées et les processus manuels.
                    En l’espace de douze mois, les responsabilités qui m’ont été confiées ont largement dépassé celles d’un simple apprenti: j’ai contribué à bâtir un cœur de système capable d’orchestrer toutes les données de l’organisation, allant bien au‑delà de mon rôle initial.
                </p>
                <h3 className="text-lg font-semibold mb-1 mt-4">Rôle et responsabilités</h3>
                <p className="text-muted-foreground">
                    Le fil rouge de cette année a été la création d’un référentiel de données générique. L’idée était de centraliser, normaliser et exposer n’importe quel type d’information afin de fournir une source de vérité unique pour l’ensemble des services de l’entreprise.
                    Cette architecture est destinée à devenir le chef d’orchestre du système d’information: elle alimente l’annuaire, la messagerie et les applications métiers au moyen d’interfaces modulaires.
                    Parallèlement à ce projet structurant, j’ai mené d’autres initiatives: moderniser une application obsolète en la réécrivant sur une pile moderne, créer un modèle de projet partagé pour harmoniser les développements, mettre en place une interface de monitoring centralisée et extraire des bibliothèques open source pour partager les améliorations internes avec la communauté. Ces missions illustrent ma volonté d’outiller l’équipe et de penser des solutions réutilisables.
                </p>
                <h3 className="text-lg font-semibold mb-1 mt-4">Apports humains et apprentissages</h3>
                <p className="text-muted-foreground">
                    Au‑delà des aspects techniques, mon année a été marquée par un environnement bienveillant et exigeant. Bien qu’apprenti, j’ai rapidement été consulté pour des décisions techniques transversales.
                    J’ai retenu l’importance de la qualité et de la robustesse: valider les entrées, journaliser les opérations, automatiser ce qui peut l’être et arrêter proprement en cas d’erreur. La communication claire est un autre fil conducteur: je n’hésite pas à envoyer un message d’alerte en dehors des heures de bureau lorsque c’est nécessaire.
                    Cette première année s’est révélée incroyablement formatrice. J’ai appris à concevoir des architectures évolutives, à orchestrer des flux de données critiques et à prendre du recul pour proposer des solutions génériques.
                    Ces progrès ont été reconnus lors de mon évaluation annuelle, signe que la confiance accordée par l’équipe a porté ses fruits.
                </p>
                <h3 className="text-lg font-semibold mb-1 mt-4">Bilan et perspectives</h3>
                <p className="text-muted-foreground">
                    Le bilan est celui d’une année où des défis complexes ont été transformés en réalisations concrètes. Le référentiel de données n’est pas un projet ponctuel mais un socle évolutif voué à absorber et à orchestrer de nouveaux domaines: finance, gestion des équipements, données scientifiques.
                    Je suis enthousiaste à l’idée de poursuivre cette dynamique, d’enrichir les workflows et de partager mes outils open source avec d’autres. En résumé, cette première année d’alternance m’a permis de grandir vite et bien, en renforçant mes compétences techniques et en développant une approche mature de la collaboration et de la communication.
                </p>
            </>
        ),
    },
];

export default function HiddenCom2025Page() {
    return (
        <main className="max-w-3xl mx-auto py-12 px-4 space-y-10">
            <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
            <div className="space-y-8">
                {projects.map((project) => (
                    <Card key={project.title} className="shadow-lg border">
                        <CardHeader>
                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {project.sections.map((section) => (
                                <div key={section.heading}>
                                    <h3 className="text-lg font-semibold mb-1">{section.heading}</h3>
                                    <p className="text-muted-foreground">{section.content}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
                {bilanAlternance.map((bilan) => (
                    <Card key={bilan.heading} className="shadow-lg border">
                        <CardHeader>
                            <CardTitle className="text-2xl">{bilan.heading}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {bilan.content}
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="mt-12 p-4 border rounded bg-yellow-50 text-sm text-gray-700">
                <strong>Note :</strong> Cette page est invisible et faite uniquement pour le contenu évalué de la partie rédaction.<br />
                L’évaluation de l’alignement portfolio &lt;=&gt; projet professionnel doit se faire sur la version classique disponible sur 
                <a href="https://walidlab.dev" target="_blank" className="text-blue-600 underline">https://walidlab.dev</a>.<br />
                Pour intégrer cette page à l’existant de mon portfolio, j’ai dû envisager des modifications globales du site, ce que je n’ai pas forcément eu le temps de réaliser étant en période d’entreprise.
            </div>
        </main>
    );
}