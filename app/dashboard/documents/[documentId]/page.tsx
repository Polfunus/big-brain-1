"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import ChatPanel from "./chat-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { DeleteDocumentButton } from "./delete-document-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentPage({
  params,
}: {
  params: {
    documentId: Id<"documents">;
  };
}) {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });

  return (
    <main className="space-y-8 w-full">
      {!document && (
        <div className="space-y-8">
          <div>
            <Skeleton className="h-[40px] w-[500px]" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-[40px] w-[80px]" />
            <Skeleton className="h-[40px] w-[80px]" />
          </div>
          <Skeleton className="h-[500px]" />
        </div>
      )}

      {document && (
        <>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-4xl font-bold">{document.title}</h1>
              <p>
                Erleada (Apalutamid) ist ein Medikament zur Behandlung von Prostatakrebs bei erwachsenen Männern. Es ist indiziert für nicht-metastasierten kastrationsresistenten Prostatakrebs und metastasierten hormonsensitiven Prostatakrebs. Erleada blockiert die Aktivität von Androgenen wie Testosteron, was das Wachstum und die Teilung von Krebszellen hemmt. Die empfohlene Dosierung beträgt 240 mg täglich (vier 60 mg Tabletten), die oral eingenommen werden. Einige häufige Nebenwirkungen sind Müdigkeit, Gelenkschmerzen, Hautausschlag, Bluthochdruck und Hitzewallungen.
              </p>
            </div>

            <DeleteDocumentButton documentId={document._id} />
          </div>

          <div className="flex gap-12">
            <Tabs defaultValue="document" className="w-full">
              <TabsList className="mb-2">
                <TabsTrigger value="document">Info</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
              </TabsList>

              <TabsContent value="document">
                <div className="flex flex-col gap-12">
                  {/* {document.documentUrl && (
                    <iframe
                      className="w-full h-full"
                      src={document.documentUrl}
                    />
                  )} */}
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          Anwendungsgebiete
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul>
                          <li>
                            1. Zur Behandlung erwachsener Männer mit nicht-metastasiertem kastrationsresistentem Prostatakarzinom (nmCRPC), die ein hohes Risiko für die Entwicklung von Metastasen aufweisen.
                          </li>
                          <li>
                            2. Zur Behandlung erwachsener Männer mit metastasiertem hormonsensitivem Prostatakarzinom (mHSPC) in Kombination mit Androgendeprivationstherapie (ADT).
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <button className="btn">mehr erfahren</button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          Dosierung
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        Die empfohlene Dosierung von Erleada beträgt 240 mg (vier 60 mg Tabletten) einmal täglich oral. Die Tabletten sollen unzerteilt geschluckt werden, unabhängig von Mahlzeiten. Bei verpasster Dosis so bald wie möglich einnehmen, jedoch keine doppelte Dosis am nächsten Tag einnehmen.
                      </CardContent>
                      <CardFooter className="">
                        <button className="btn">mehr erfahren</button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          Nebenwirkungen
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        Erleada kann verschiedene Nebenwirkungen verursachen. Häufig sind Müdigkeit, Gelenkschmerzen, Hautausschlag, Bluthochdruck und Hitzewallungen. Auch Durchfall, Knochenbrüche, Stürze und Gewichtsverlust wurden berichtet. Seltener treten Muskelkrämpfe, Juckreiz und Geschmacksveränderungen auf. Ernsthafte Nebenwirkungen umfassen Krampfanfälle und Herzerkrankungen. Sprechen Sie immer mit Ihrem Arzt.
                      </CardContent>
                      <CardFooter>
                        <button className="btn">mehr erfahren</button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold">
                      Hauptargumente für die 4 Motivtypen
                    </h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 1: gewinn- & wirtschaftsorientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada bietet eine kosteneffiziente Lösung zur Behandlung von fortgeschrittenem Prostatakrebs. Trotz seines wettbewerbsfähigen Preises gewährleistet es durch umfassende klinische Studien nachgewiesene Sicherheit und Wirksamkeit. Die tägliche Einnahme von nur wenigen Tabletten reduziert zusätzliche medizinische Kosten durch einfache Handhabung und minimiert potenziell teure Nebenwirkungen und Komplikationen. Profitieren Sie von einem attraktiven Preis-Leistungs-Verhältnis ohne Kompromisse bei der Qualität.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 2: prestigeorientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Unsere Erleada 60 mg Filmtabletten bieten Ihnen ein hochwertiges und sicheres Produkt, das in renommierten klinischen Studien seine Wirksamkeit bewiesen hat. Mit der höchsten Qualität in der Branche wird Ihr Unternehmen stets als Vorreiter in der medizinischen Versorgung wahrgenommen. Diese Investition wird Ihre Reputation erheblich steigern und Sie in den Augen Ihrer Kollegen und Kunden als fortschrittlich und sorgfältig positionieren.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 3: bequemlichkeitsorientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada bietet eine unkomplizierte Behandlung für Prostatakrebs, die Ihnen den Alltag erleichtert. Mit der bequemen einmal täglichen Einnahme müssen Sie sich keine Sorgen um komplexe Medikationspläne machen. Unser umfassender Service steht Ihnen zur Verfügung, um sicherzustellen, dass alle Ihre Fragen schnell und effizient beantwortet werden. Genießen Sie sorgenfreie Behandlung bei minimalem Aufwand.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 4: sicherheitsorientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada wurde in mehreren klinischen Studien umfassend getestet, darunter die Studien SPARTAN und TITAN, die sowohl die Wirksamkeit als auch das Sicherheitsprofil des Medikaments belegen. Darüber hinaus unterliegt Erleada einer zusätzlichen Überwachung, um neue Erkenntnisse über die Sicherheit schnell zu identifizieren. Angehörige von Gesundheitsberufen sind aufgefordert, jeden Verdachtsfall einer Nebenwirkung zu melden, was eine kontinuierliche Sicherheitsbeurteilung ermöglicht. Diese rigorosen Überwachungs- und Berichtsmechanismen bieten Ihnen die maximale Sicherheit hinsichtlich der Anwendung dieses Medikaments.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="chat">
                <ChatPanel documentId={document._id} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </main>
  );
}
