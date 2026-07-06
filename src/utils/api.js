import { toast } from "react-toastify";

const apiUrl =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://139-59-5-56.nip.io:3443";

export async function getBlogs() {
  const response = await fetch(apiUrl + "/getBlogList");
  let data = await response.json();
  data = data.filter((item) => item.status === 1);
  return data;
}

export const getAudits = async () => {
  return await fetch(apiUrl + "/getAudits", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(async (res) => {
      var data = await res.json();
      return data;
    })
    .catch((error) => {
      toast.error("Error fetching audits");
    });
};
