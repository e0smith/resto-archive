export default function Profile ({ 
    params,
}: {
  params: { profileId: string };
}) {
  return <h1>{params.profileId}</h1>;
}