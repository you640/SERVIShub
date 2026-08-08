import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SearchPage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-4 py-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Hľadať služby</h1>
          <p className="text-muted-foreground">
            Placeholder — filtre podľa lokality, ceny, hodnotenia a dostupnosti.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filtre</CardTitle>
            <CardDescription>
              Vyhľadávanie s mapou (Google Places) príde v MVP.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-4">
            <Input placeholder="Mesto / PSČ" aria-label="Lokalita" />
            <Input placeholder="Kategória" aria-label="Kategória" />
            <Input placeholder="Cena od (€)" aria-label="Cena od" />
            <Button disabled>Hľadať</Button>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Upratovanie", "Inštalácie", "Opravy"].map((name) => (
            <Card key={name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{name}</CardTitle>
                  <Badge variant="secondary">Soon</Badge>
                </div>
                <CardDescription>
                  Ukázkový výsledok — napojené na Provider / Service schéma.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
