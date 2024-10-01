import { LandingTyped } from "@/components/landing-typed";
import LandingCorpus from "@/components/landing-corpus";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto my-4">
      <LandingTyped />
      <div className="w-full">
        <div>
          <p className="text-sm mb-4">
            EL OUAZIZI Walid,  <strong>Développeur polyvalent</strong> passionné, 22 ans, avec <strong>10 ans d'expérience</strong>. Étudiant en <strong>Master Informatique</strong> Technologie de l'Information et Ingénierie Logiciel en alternance. <strong>Autodidacte</strong>, expertise du web aux langages complexes (Java, C). Créateur d'applications full-stack et de <strong>programmes avancés</strong>. Affinité pour le <strong>back-end</strong>, compétent en front-end. Motivé par la <strong>curiosité</strong> et l'<strong>innovation</strong>.
          </p>
          <p className="text-sm">
            En quête constante d'opportunités pour <strong>évoluer</strong> dans le développement logiciel : web, applications natives, systèmes complexes.
          </p>
        </div>
      </div>
      <LandingCorpus />
    </div>
  );
}