import axios from "axios";
import ScanPage, { ScanDetails } from "../../AuditExpress/ScanIdPage";

export async function getServerSideProps({
  params,
}: {
  params: { id?: string | string[] };
}) {
  const id = params.id;
  const idNumber = typeof id === "string" ? Number(id) : NaN;

  if (!Number.isInteger(idNumber) || idNumber < 1) {
    return { notFound: true };
  }

  try {
    const response = await axios.post(
      "https://139-59-5-56.nip.io:3443/getScanByIdAE",
      { id: idNumber },
      { timeout: 10000 }
    );

    if (response.status !== 200 || !response.data) {
      return { notFound: true };
    }

    return {
      props: { id, initialScanDetails: response.data as ScanDetails },
    };
  } catch {
    return { notFound: true };
  }
}

const ScanDetailPage = ({
  id,
  initialScanDetails,
}: {
  id: string;
  initialScanDetails: ScanDetails;
}) => {
  return <ScanPage id={id} initialScanDetails={initialScanDetails} />;
};

export default ScanDetailPage;
