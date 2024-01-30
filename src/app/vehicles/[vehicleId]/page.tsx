export default function VehicleDetails({
  params,
}: {
  params: { vehicleId: string };
}) {
  return <h1>{params.vehicleId}</h1>;
}
