"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import ChatPanel from "./chat-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { DeleteDocumentButton } from "./delete-document-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <main className="space-y-8 w-full pb-4">
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
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          Anwendungs&shy;gebiete
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
