export async function getCases() {
  const response = await fetch("/api/case");
  return await response.json();
}

export async function createCase(caseObject) {
  const response = await fetch(`/api/case`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caseObject),
  });
  return await response.json();
}

export async function deleteCase(caseId) {
  const response = await fetch(`/api/case/${caseId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
