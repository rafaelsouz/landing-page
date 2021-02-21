export type LogoProps = {
  alternativeText: string;
  url?: string;
};

export type TechIcon = {
  title: string;
  icon: {
    url: string;
  };
};

export type Modules = {
  title: string;
  subtitle: string;
  description: string;
};

export type HeaderProps = {
  title: string;
  description: string;

  button: {
    label: string;
    url: string;
  };

  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  media: {
    url: string;
    alternativeText: string;
  };
  title: string;
  description: string;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type sectionConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
  }>;
};

export type sectionModulesProps = {
  title: string;
  modules: Modules[];
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: sectionConceptsProps;
  sectionModules: sectionModulesProps;
};
