"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import ChatPanel from "./chat-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { DeleteDocumentButton } from "./delete-document-button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import UpdateDocumentButton from "../update-document-button";
import { useState } from "react";

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

  const [isUpdating, setIsUpdating] = useState(false);

  const featureTitles = [
    "Anwendungsgebiete",
    "Dosierung",
    "Nebenwirkungen",
  ];


  return (
    <main className="space-y-8 w-full pb-4">
      {!document && (
        <div className="space-y-8">
          <div>
            <Skeleton className="h-[40px] w-[500px]" />
          </div>
          <div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[100px] w-[500px]" />
            </div>
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
              <>
                {!document.summary && (
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-[20px] w-[500px]" />
                    <Skeleton className="h-[20px] w-[500px]" />
                    <Skeleton className="h-[20px] w-[500px]" />
                  </div>
                )}

                {document.summary && (
                  <p className="text-lg">{document.summary}</p>
                )}
              </>
            </div>

            <div className="flex items-center gap-4">
              <UpdateDocumentButton documentId={document._id} />
              <DeleteDocumentButton documentId={document._id} />
            </div>
          </div>

          <div className="flex gap-12">
            <Tabs defaultValue="document" className="w-full">
              <TabsList className="mb-2 h-fit">
                <TabsTrigger className="text-md" value="document">Info</TabsTrigger>
                <TabsTrigger className="text-md" value="chat">Chat</TabsTrigger>
              </TabsList>

              <TabsContent value="document">
                <div className="flex flex-col gap-12">
                  {/* {document.documentUrl && (
                    <iframe
                      className="w-full h-full"
                      src={document.documentUrl}
                    />
                  )} */}
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {!document.features && (
                      <>
                        <Card className="flex flex-col">
                          <CardHeader>
                            <CardTitle>
                              {featureTitles[0]}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col gap-2">
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Skeleton className="h-[20px]" />
                          </CardFooter>
                        </Card>
                        <Card className="flex flex-col">
                          <CardHeader>
                            <CardTitle>
                              {featureTitles[1]}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col gap-2">
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Skeleton className="h-[20px]" />
                          </CardFooter>
                        </Card>
                        <Card className="flex flex-col">
                          <CardHeader>
                            <CardTitle>
                              {featureTitles[2]}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-col gap-2">
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                              <Skeleton className="h-[20px]" />
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Skeleton className="h-[20px]" />
                          </CardFooter>
                        </Card>
                      </>
                    )}
                    {document.features && (
                      document.features.map((feature, index) => (
                        <Card className="flex flex-col" key={index}>
                          <CardHeader>
                            <CardTitle>
                              {featureTitles[index]}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>
                              {feature}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <button className="btn">mehr erfahren</button>
                          </CardFooter>
                        </Card>
                      ))
                    )}
                  </div>
                  <div className="flex flex-col gap-8">
                    <h2 className="text-2xl font-bold">
                      Hauptargumente für die 4 Motivtypen
                    </h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 1: gewinn- & wirtschafts&shy;orientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada bietet ein hervorragendes Preis-Leistungs-Verhältnis für die Behandlung von Prostatakrebs. Mit einer standardisierten Dosierung, die keine Anpassung bei älteren Patienten erfordert, und der Möglichkeit der Einnahme unabhängig von Mahlzeiten, sparen Ihre Patienten Zeit und Kosten. Das Arzneimittel ist zudem effizient in der Anwendung und erfordert keine komplexen Begleittherapien, was Ihre Praxisabläufe optimiert und die Behandlungsqualität zu einem wettbewerbsfähigen Preis gewährleistet.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                          <p className="font-bold">
                            Erleada bietet ein hervorragendes Preis-Leistungs-Verhältnis und umfassende Sicherheitstests, die durch Zertifikate und Studien belegt sind, was Ihnen hilft, kosteneffektiv und sicher zu behandeln.
                          </p>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 2: prestige&shy;orientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada bietet Ihrem Prestige als führender Urologe/Onkologe einen zusätzlichen Schub. Dieses Premium-Medikament, das für seine Wirksamkeit bei Prostatakrebs bekannt ist, repräsentiert höchste medizinische Qualität und Innovation. Entscheiden Sie sich für Erleada und setzen Sie ein Statement - für das Wohl Ihrer Patienten und für Ihre Reputation in der medizinischen Gemeinschaft. Mit seiner dokumentierten Wirksamkeit und Sicherheit hebt es Ihre Praxis auf ein neues Niveau.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                          <p className="font-bold">
                            Erleada bietet höchste Qualität und innovative Behandlungsmöglichkeiten, die durch klinische Studien gestützt werden, sodass Sie sich als Vorreiter in der modernen Onkologie positionieren können.
                          </p>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 3: bequemlichkeits&shy;orientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Mit Erleada erhalten Sie eine unkomplizierte und stressfreie Behandlung Ihrer Prostatakrebspatienten. Die einfache, einmal tägliche Einnahme und die gute Handhabung sorgen dafür, dass Therapieunterbrechungen und zusätzliche Maßnahmen auf ein Minimum reduziert werden. Die umfassende Unterstützung durch uns als Hersteller stellt sicher, dass Sie sich voll und ganz auf Ihre Patienten konzentrieren können, ohne zusätzliche Belastungen.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                          <p className="font-bold">
                            Erleada bietet eine einfache, einmal tägliche Einnahme, die ohne besondere diätetische Einschränkungen erfolgt, wodurch die Behandlung mit minimalem Aufwand und maximalem Komfort in den Alltag integriert werden kann.
                          </p>
                        </CardFooter>
                      </Card>
                      <Card className="flex flex-col">
                        <CardHeader>
                          <CardTitle>
                            Typ 4: sicherheits&shy;orientiert
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="italic">
                            &quot;Erleada hat sich in umfassenden klinischen Studien als hochwirksam erwiesen und bietet detaillierte Sicherheitsberichte, Zertifikate und Vergleichswerte. Jede Tablette durchlief strenge Qualitätskontrollen, um maximale Sicherheit und Wirksamkeit zu gewährleisten. Lassen Sie sich von den umfangreichen Studien und Testberichten überzeugen, um Ihren Patienten die bestmögliche, sicher geprüfte Behandlung zu bieten.&quot;
                          </p>
                        </CardContent>
                        <CardFooter>
                          <p className="font-bold">
                            Erleada bietet durch umfassende klinische Studien, detaillierte Testberichte und zahlreiche Sicherheitszertifikate maximale Sicherheit und Zuverlässigkeit für die Behandlung von Prostatakrebs.
                          </p>
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
