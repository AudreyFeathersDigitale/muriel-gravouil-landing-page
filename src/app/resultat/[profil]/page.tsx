type ResultatPageProps = {
  params: Promise<{
    profil: string;
  }>;
};

export default async function ResultatPage({
  params,
}: ResultatPageProps) {
  const { profil } = await params;

  return (
    <main className="min-h-screen">
      <h1>Résultat : {profil}</h1>
    </main>
  );
}