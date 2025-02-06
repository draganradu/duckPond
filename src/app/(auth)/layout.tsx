import { Card } from "@/components/ui/card";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-5 flex justify-center">
    <Card className="w-[550px]">
      {children}
    </Card>
  </div>
  );
}
