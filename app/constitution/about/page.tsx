"use client";

import { PageLayout } from "@/components/page-layout";
import { SEO } from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";

export default function AboutConstitutionPage() {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(currentLanguage.code);

  const timelineItems = [
    { year: "1922", event: t("about.timeline.1922") },
    { year: "1946", event: t("about.timeline.1946") },
    { year: "1951", event: t("about.timeline.1951") },
    { year: "1954", event: t("about.timeline.1954") },
    { year: "1960", event: t("about.timeline.1960") },
    { year: "1963", event: t("about.timeline.1963") },
    { year: "1979", event: t("about.timeline.1979") },
    { year: "1989", event: t("about.timeline.1989") },
    { year: "1999", event: t("about.timeline.1999") },
    { year: "2010", event: t("about.timeline.2010") },
    { year: "2017", event: t("about.timeline.2017") },
    { year: "2023", event: t("about.timeline.2023") },
  ];

  const keyChapters = [
    { number: "I", title: t("about.chapters.1") },
    { number: "II", title: t("about.chapters.2") },
    { number: "III", title: t("about.chapters.3") },
    { number: "IV", title: t("about.chapters.4") },
    { number: "V", title: t("about.chapters.5") },
    { number: "VI", title: t("about.chapters.6") },
    { number: "VII", title: t("about.chapters.7") },
    { number: "VIII", title: t("about.chapters.8") },
  ];

  const keyFeatures = [
    {
      title: t("about.features.federal.title"),
      description: t("about.features.federal.description"),
    },
    {
      title: t("about.features.presidential.title"),
      description: t("about.features.presidential.description"),
    },
    {
      title: t("about.features.rights.title"),
      description: t("about.features.rights.description"),
    },
    {
      title: t("about.features.judiciary.title"),
      description: t("about.features.judiciary.description"),
    },
    {
      title: t("about.features.supremacy.title"),
      description: t("about.features.supremacy.description"),
    },
    {
      title: t("about.features.amendment.title"),
      description: t("about.features.amendment.description"),
    },
  ];

  const landmarkCases = [
    {
      title: t("about.cases.resource.title"),
      year: "2001",
      description: t("about.cases.resource.description"),
    },
    {
      title: t("about.cases.impeachment.title"),
      year: "2007",
      description: t("about.cases.impeachment.description"),
    },
    {
      title: t("about.cases.rights.title"),
      year: "2000",
      description: t("about.cases.rights.description"),
    },
    {
      title: t("about.cases.customary.title"),
      year: "1997",
      description: t("about.cases.customary.description"),
    },
  ];

  return (
    <PageLayout>
      <SEO
        title={t("about.seo.title")}
        description={t("about.seo.description")}
      />

      <div className="container mx-auto p-4 py-8 bg-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-700">
            {t("about.title")}
          </h1>
          <p className="mt-4 text-gray-600 md:text-xl max-w-[700px] mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-6 bg-green-700 p-1 rounded-lg flex space-x-2">
            <TabsTrigger
              value="history"
              className="text-white rounded px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-green-700"
            >
              {t("about.tabs.history")}
            </TabsTrigger>
            <TabsTrigger
              value="structure"
              className="text-white rounded px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-green-700"
            >
              {t("about.tabs.structure")}
            </TabsTrigger>
            <TabsTrigger
              value="amendments"
              className="text-white rounded px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-green-700"
            >
              {t("about.tabs.amendments")}
            </TabsTrigger>
            <TabsTrigger
              value="significance"
              className="text-white rounded px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-green-700"
            >
              {t("about.tabs.significance")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Historical Development
                </h2>
                <Card className="bg-white border-green-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4 text-gray-600">
                      <p>
                        The constitutional history of Nigeria began during the
                        colonial era with the Clifford Constitution of 1922,
                        followed by several other colonial constitutions
                        including the Richards Constitution (1946), the
                        Macpherson Constitution (1951), and the Lyttleton
                        Constitution (1954).
                      </p>
                      <p>
                        After independence in 1960, Nigeria adopted its first
                        indigenous constitution, known as the Independence
                        Constitution. This was followed by the Republican
                        Constitution of 1963, which removed the British monarch
                        as head of state.
                      </p>
                      <p>
                        Following periods of military rule, Nigeria adopted new
                        constitutions in 1979 and 1989. The current
                        constitution, adopted in 1999, was promulgated by the
                        military government of General Abdulsalami Abubakar and
                        came into effect with the return to civilian rule on May
                        29, 1999.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Timeline
                </h2>
                <Card className="bg-white border-green-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="relative border-l border-green-200 ml-3">
                      {timelineItems.map((item, index) => (
                        <div key={index} className="mb-8 ml-6">
                          <div className="absolute w-3 h-3 bg-green-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                            {item.year}
                          </time>
                          <p className="text-base font-medium text-gray-600">
                            {item.event}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="structure">
            <h2 className="text-2xl text-green-700 font-bold mb-4">
              Structure of the Constitution
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Organization</h3>
                    <p className="mb-4">
                      The 1999 Constitution of the Federal Republic of Nigeria
                      is divided into 8 parts, containing a total of 320
                      sections. It also includes 7 schedules that provide
                      additional details on various constitutional provisions.
                    </p>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Key Chapters
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Chapter I:</strong> General Provisions
                      </li>
                      <li>
                        <strong>Chapter II:</strong> Fundamental Objectives and
                        Directive Principles of State Policy
                      </li>
                      <li>
                        <strong>Chapter III:</strong> Citizenship
                      </li>
                      <li>
                        <strong>Chapter IV:</strong> Fundamental Rights
                      </li>
                      <li>
                        <strong>Chapter V:</strong> The Legislature
                      </li>
                      <li>
                        <strong>Chapter VI:</strong> The Executive
                      </li>
                      <li>
                        <strong>Chapter VII:</strong> The Judicature
                      </li>
                      <li>
                        <strong>Chapter VIII:</strong> Federal Capital
                        Territory, Abuja and General Supplementary Provisions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Key Features
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Federal System:</strong> Establishes Nigeria as
                        a federation with powers shared between the federal,
                        state, and local governments.
                      </li>
                      <li>
                        <strong>Presidential System:</strong> Creates a
                        presidential system of government with separation of
                        powers among the executive, legislative, and judicial
                        branches.
                      </li>
                      <li>
                        <strong>Fundamental Rights:</strong> Guarantees basic
                        human rights and freedoms to all citizens.
                      </li>
                      <li>
                        <strong>Judicial Independence:</strong> Establishes an
                        independent judiciary to interpret and apply the law.
                      </li>
                      <li>
                        <strong>Constitutional Supremacy:</strong> Declares the
                        constitution as the supreme law of the land.
                      </li>
                      <li>
                        <strong>Amendment Process:</strong> Provides a process
                        for amending the constitution.
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Image
                        src="/placeholder.svg?height=200&width=400&text=Constitution+Structure"
                        alt="Constitution Structure"
                        width={400}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="amendments">
            <h2 className="text-2xl text-green-700 font-bold mb-4">
              Constitutional Amendments
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p>
                    Since its adoption in 1999, the Nigerian Constitution has
                    undergone several amendments to address evolving national
                    needs and challenges. These amendments have been made
                    through a constitutional process requiring approval by at
                    least two-thirds of the National Assembly and at least 24 of
                    Nigeria's 36 state assemblies.
                  </p>

                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      First, Second, and Third Amendments (2010)
                    </h3>
                    <p>
                      These amendments addressed electoral reforms, judicial
                      reforms, and financial autonomy for the National Assembly
                      and State Houses of Assembly. They also modified the
                      timeframe for conducting elections and swearing in elected
                      officials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Fourth Amendment (2017)
                    </h3>
                    <p>
                      This amendment focused on strengthening local government
                      administration, judicial reforms, and further electoral
                      reforms. It also reduced the age qualification for certain
                      political offices, a provision popularly known as the "Not
                      Too Young To Run" amendment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Fifth Amendment (2023)
                    </h3>
                    <p>
                      The most recent amendment addressed issues related to
                      local government autonomy, judicial independence, and
                      electoral reforms. It also included provisions for
                      devolution of powers and strengthening of democratic
                      institutions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Ongoing Amendment Efforts
                    </h3>
                    <p>
                      There are ongoing efforts to further amend the
                      constitution to address issues such as restructuring,
                      resource control, state police, and other matters of
                      national importance. These proposed amendments reflect the
                      dynamic nature of Nigeria's constitutional development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="significance">
            <h2 className="text-2xl text-green-700 font-bold mb-4">
              Significance of the Constitution
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Legal Significance
                    </h3>
                    <p className="mb-4">
                      The Constitution is the supreme law of Nigeria. It
                      establishes the legal framework for governance and
                      provides the basis for all other laws. Any law that is
                      inconsistent with the Constitution is void to the extent
                      of the inconsistency.
                    </p>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Political Significance
                    </h3>
                    <p className="mb-4">
                      The Constitution defines the structure of government,
                      allocates powers among different branches and levels of
                      government, and establishes the rules for political
                      participation. It provides the foundation for Nigeria's
                      democratic system.
                    </p>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Social Significance
                    </h3>
                    <p>
                      The Constitution protects fundamental rights and freedoms,
                      promotes social justice, and establishes principles for
                      national integration and cohesion. It reflects the values
                      and aspirations of the Nigerian people.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl text-green-700 font-semibold mb-3">
                      Landmark Constitutional Cases
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 marker:text-green-700">
                      <li>
                        <strong className="text-green-700">
                          Attorney-General of the Federation v. Attorney-General
                          of Abia State & Ors (2001)
                        </strong>
                        <p className="text-sm text-muted-foreground">
                          This case, known as the Resource Control case,
                          addressed the issue of offshore resources and the
                          extent of states' territorial waters.
                        </p>
                      </li>
                      <li>
                        <strong className="text-green-700">
                          Inakoju v. Adeleke (2007)
                        </strong>
                        <p className="text-sm text-muted-foreground">
                          This case established important principles regarding
                          impeachment proceedings and due process in Nigeria's
                          constitutional democracy.
                        </p>
                      </li>
                      <li>
                        <strong className="text-green-700">
                          Abacha v. Fawehinmi (2000)
                        </strong>
                        <p className="text-sm text-muted-foreground">
                          This case addressed the status of international human
                          rights treaties in Nigerian law and their relationship
                          with the Constitution.
                        </p>
                      </li>
                      <li>
                        <strong className="text-green-700">
                          Mojekwu v. Mojekwu (1997)
                        </strong>
                        <p className="text-sm text-muted-foreground">
                          This case addressed the conflict between customary law
                          and constitutional provisions on non-discrimination,
                          particularly regarding women's inheritance rights.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
