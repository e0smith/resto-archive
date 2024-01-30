export default function DocumentDetails({
  params,
}: {
  params: { 
    vehicleId: string; 
    documentId: string };
}) {
  return <h1>Document {params.documentId} for {params.vehicleId} </h1>;
}
