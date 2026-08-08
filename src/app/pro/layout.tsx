import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold text-primary">
              ServisHub SK
            </Link>
            <Badge>Pro dashboard</Badge>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Účet</Link>
          </Button>
        </div>
      </header>
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 py-8">
        <aside className="hidden w-52 shrink-0 space-y-2 md:block">
          {[
            "Prehľad",
            "Kalendár",
            "Leady",
            "Objednávky",
            "Cenník",
            "Predplatné",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
